from custom_nodes.KepPromptLang.lib.actions.diff import DiffAction
from custom_nodes.KepPromptLang.lib.actions.mult import MultiplyAction
from custom_nodes.KepPromptLang.lib.actions.neg import NegAction
from custom_nodes.KepPromptLang.lib.actions.norm import NormAction
from custom_nodes.KepPromptLang.lib.actions.rand import RandAction
from custom_nodes.KepPromptLang.lib.actions.sum import SumAction
from custom_nodes.KepPromptLang.lib.parser.registration import register_action

register_action(DiffAction)
register_action(MultiplyAction)
register_action(NegAction)
register_action(NormAction)
register_action(RandAction)
register_action(SumAction)
