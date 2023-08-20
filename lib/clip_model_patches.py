import contextlib

import torch

from comfy import model_management
from custom_nodes.ClipStuff.lib.tokenizer import TokenDict


def set_up_textual_embeddings(self, tokens: list[list[tuple[TokenDict]]], current_embeds):
    out_tokens = []
    next_new_token = token_dict_size = current_embeds.weight.shape[0] - 1
    embedding_weights = []

    for batch in tokens:
        tokens_temp = []
        for tokenDict in batch:
            y = tokenDict[0].token_id
            if isinstance(y, int):
                if y == token_dict_size:  # EOS token
                    y = -1
                tokens_temp += [y]
            else:
                if y.shape[0] == current_embeds.weight.shape[1]:
                    embedding_weights += [y]
                    tokens_temp += [next_new_token]
                    next_new_token += 1
                else:
                    print("WARNING: shape mismatch when trying to apply embedding, embedding will be ignored",
                          y.shape[0], current_embeds.weight.shape[1])
        while len(tokens_temp) < len(batch):
            tokens_temp += [self.empty_tokens[0][-1]]
        out_tokens += [tokens_temp]

    n = token_dict_size
    if len(embedding_weights) > 0:
        new_embedding = torch.nn.Embedding(next_new_token + 1, current_embeds.weight.shape[1],
                                           device=current_embeds.weight.device, dtype=current_embeds.weight.dtype)
        new_embedding.weight[:token_dict_size] = current_embeds.weight[:-1]
        for embed in embedding_weights:
            new_embedding.weight[n] = embed
            n += 1
        new_embedding.weight[n] = current_embeds.weight[-1]  # EOS embedding
        self.transformer.set_input_embeddings(new_embedding)

    for i, out_batch in enumerate(out_tokens):
        for tokenIdx in range(len(out_batch)):
            if out_batch[tokenIdx] == -1:
                tokens[i][tokenIdx][0].token_id = n # The EOS token should always be the largest one
            else:
                tokens[i][tokenIdx][0].token_id = out_batch[tokenIdx]

def encode_token_weights(self, token_dicts: list[list[tuple[TokenDict]]], **kwargs):
    to_encode = [list(
        map(
            lambda id: (TokenDict(token_id=id, weight=1.0, nudge_id=None),),
            self.empty_tokens[0]
        )
    )]
    for x in token_dicts:
        to_encode.append(x)

    out, pooled = self.encode(to_encode, **kwargs)
    z_empty = out[0:1]
    if pooled.shape[0] > 1:
        first_pooled = pooled[1:2]
    else:
        first_pooled = pooled[0:1]

    output = []
    for k in range(1, out.shape[0]):
        z = out[k:k + 1]
        for i in range(len(z)):
            for j in range(len(z[i])):
                weight = token_dicts[k - 1][j][0].weight
                z[i][j] = (z[i][j] - z_empty[0][j]) * weight + z_empty[0][j]
        output.append(z)

    if (len(output) == 0):
        return z_empty.cpu(), first_pooled.cpu()
    return torch.cat(output, dim=-2).cpu(), first_pooled.cpu()

def forward(self, tokens, **kwargs):
    backup_embeds = self.transformer.get_input_embeddings()
    device = backup_embeds.weight.device
    self.set_up_textual_embeddings(tokens, backup_embeds)
    # tokens = torch.LongTensor(tokens).to(device)

    if backup_embeds.weight.dtype != torch.float32:
        precision_scope = torch.autocast
    else:
        precision_scope = contextlib.nullcontext


    if (kwargs.get("position_ids", None) is not None):
        position_ids = torch.LongTensor(kwargs["position_ids"]).to(device)
    else:
        position_ids = None


    with precision_scope(model_management.get_autocast_device(device)):
        outputs = self.transformer(input_ids=tokens, output_hidden_states=self.layer == "hidden",
                                   position_ids=position_ids)
        self.transformer.set_input_embeddings(backup_embeds)

        if self.layer == "last":
            z = outputs.last_hidden_state
        elif self.layer == "pooled":
            z = outputs.pooler_output[:, None, :]
        else:
            z = outputs.hidden_states[self.layer_idx]
            if self.layer_norm_hidden_state:
                z = self.transformer.text_model.final_layer_norm(z)

        pooled_output = outputs.pooler_output
        if self.text_projection is not None:
            pooled_output = pooled_output.to(self.text_projection.device) @ self.text_projection
    return z.float(), pooled_output.float()
