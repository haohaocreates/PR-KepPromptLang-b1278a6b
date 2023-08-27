"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1931],{

/***/ 1931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/bicep/bicep.ts\nvar bounded = (text) => `\\\\b${text}\\\\b`;\nvar identifierStart = \"[_a-zA-Z]\";\nvar identifierContinue = \"[_a-zA-Z0-9]\";\nvar identifier = bounded(`${identifierStart}${identifierContinue}*`);\nvar keywords = [\n  \"targetScope\",\n  \"resource\",\n  \"module\",\n  \"param\",\n  \"var\",\n  \"output\",\n  \"for\",\n  \"in\",\n  \"if\",\n  \"existing\"\n];\nvar namedLiterals = [\"true\", \"false\", \"null\"];\nvar nonCommentWs = `[ \\\\t\\\\r\\\\n]`;\nvar numericLiteral = `[0-9]+`;\nvar conf = {\n  comments: {\n    lineComment: \"//\",\n    blockComment: [\"/*\", \"*/\"]\n  },\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"]\n  ],\n  surroundingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: \"'\", close: \"'\" },\n    { open: \"'''\", close: \"'''\" }\n  ],\n  autoClosingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: \"'\", close: \"'\", notIn: [\"string\", \"comment\"] },\n    { open: \"'''\", close: \"'''\", notIn: [\"string\", \"comment\"] }\n  ],\n  autoCloseBefore: \":.,=}])' \\n\t\",\n  indentationRules: {\n    increaseIndentPattern: new RegExp(\"^((?!\\\\/\\\\/).)*(\\\\{[^}\\\"'`]*|\\\\([^)\\\"'`]*|\\\\[[^\\\\]\\\"'`]*)$\"),\n    decreaseIndentPattern: new RegExp(\"^((?!.*?\\\\/\\\\*).*\\\\*/)?\\\\s*[\\\\}\\\\]].*$\")\n  }\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \".bicep\",\n  brackets: [\n    { open: \"{\", close: \"}\", token: \"delimiter.curly\" },\n    { open: \"[\", close: \"]\", token: \"delimiter.square\" },\n    { open: \"(\", close: \")\", token: \"delimiter.parenthesis\" }\n  ],\n  symbols: /[=><!~?:&|+\\-*/^%]+/,\n  keywords,\n  namedLiterals,\n  escapes: `\\\\\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\\\\\|'|\\\\\\${)`,\n  tokenizer: {\n    root: [{ include: \"@expression\" }, { include: \"@whitespace\" }],\n    stringVerbatim: [\n      { regex: `(|'|'')[^']`, action: { token: \"string\" } },\n      { regex: `'''`, action: { token: \"string.quote\", next: \"@pop\" } }\n    ],\n    stringLiteral: [\n      { regex: `\\\\\\${`, action: { token: \"delimiter.bracket\", next: \"@bracketCounting\" } },\n      { regex: `[^\\\\\\\\'$]+`, action: { token: \"string\" } },\n      { regex: \"@escapes\", action: { token: \"string.escape\" } },\n      { regex: `\\\\\\\\.`, action: { token: \"string.escape.invalid\" } },\n      { regex: `'`, action: { token: \"string\", next: \"@pop\" } }\n    ],\n    bracketCounting: [\n      { regex: `{`, action: { token: \"delimiter.bracket\", next: \"@bracketCounting\" } },\n      { regex: `}`, action: { token: \"delimiter.bracket\", next: \"@pop\" } },\n      { include: \"expression\" }\n    ],\n    comment: [\n      { regex: `[^\\\\*]+`, action: { token: \"comment\" } },\n      { regex: `\\\\*\\\\/`, action: { token: \"comment\", next: \"@pop\" } },\n      { regex: `[\\\\/*]`, action: { token: \"comment\" } }\n    ],\n    whitespace: [\n      { regex: nonCommentWs },\n      { regex: `\\\\/\\\\*`, action: { token: \"comment\", next: \"@comment\" } },\n      { regex: `\\\\/\\\\/.*$`, action: { token: \"comment\" } }\n    ],\n    expression: [\n      { regex: `'''`, action: { token: \"string.quote\", next: \"@stringVerbatim\" } },\n      { regex: `'`, action: { token: \"string.quote\", next: \"@stringLiteral\" } },\n      { regex: numericLiteral, action: { token: \"number\" } },\n      {\n        regex: identifier,\n        action: {\n          cases: {\n            \"@keywords\": { token: \"keyword\" },\n            \"@namedLiterals\": { token: \"keyword\" },\n            \"@default\": { token: \"identifier\" }\n          }\n        }\n      }\n    ]\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkzMS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixLQUFLO0FBQ25DO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCLEVBQUUsbUJBQW1CO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTyxLQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFFBQVEsWUFBWSxHQUFHO0FBQzdCLE1BQU0sdUJBQXVCO0FBQzdCLE1BQU0sdUJBQXVCO0FBQzdCLE1BQU0sdUJBQXVCO0FBQzdCLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTSxRQUFRLFlBQVksR0FBRztBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLHFEQUFxRDtBQUMzRCxNQUFNO0FBQ047QUFDQSx5QkFBeUI7QUFDekI7QUFDQSwwREFBMEQsR0FBRztBQUM3RCxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxRQUFRLFlBQVksNkJBQTZCO0FBQ3ZELE1BQU0sa0RBQWtEO0FBQ3hELE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixhQUFhLG1CQUFtQjtBQUNuRDtBQUNBLGFBQWEsd0JBQXdCLElBQUksd0JBQXdCO0FBQ2pFO0FBQ0EsUUFBUSxnQ0FBZ0MsbUJBQW1CO0FBQzNELFFBQVEsd0JBQXdCO0FBQ2hDO0FBQ0E7QUFDQSxRQUFRLGFBQWEsYUFBYSx3REFBd0Q7QUFDMUYsUUFBUSwrQkFBK0IsbUJBQW1CO0FBQzFELFFBQVEsNkJBQTZCLDBCQUEwQjtBQUMvRCxRQUFRLDBCQUEwQixrQ0FBa0M7QUFDcEUsUUFBUSxzQkFBc0I7QUFDOUI7QUFDQTtBQUNBLFFBQVEsU0FBUyxhQUFhLHdEQUF3RDtBQUN0RixRQUFRLFNBQVMsYUFBYSw0Q0FBNEM7QUFDMUUsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRLDRCQUE0QixvQkFBb0I7QUFDeEQsUUFBUSwyQkFBMkIsa0NBQWtDO0FBQ3JFLFFBQVEsMkJBQTJCO0FBQ25DO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixRQUFRLDJCQUEyQixzQ0FBc0M7QUFDekUsUUFBUSw4QkFBOEI7QUFDdEM7QUFDQTtBQUNBLFFBQVEsd0JBQXdCLGtEQUFrRDtBQUNsRixRQUFRLHNCQUFzQixpREFBaUQ7QUFDL0UsUUFBUSxpQ0FBaUMsbUJBQW1CO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QyxnQ0FBZ0Msa0JBQWtCO0FBQ2xELDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLy55YXJuL2NhY2hlL21vbmFjby1lZGl0b3ItbnBtLTAuNDEuMC00ZjcxNDE2YzY0LTg3M2E4YjRlYjkuemlwL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvYmljZXAvYmljZXAuanM/OTFjZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBWZXJzaW9uOiAwLjQxLjAoMzhlMWUzZDA5N2Y4NGUzMzZjMzExZDA3MWE5ZmZiNTE5MWQ0ZmZkMSlcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9tb25hY28tZWRpdG9yL2Jsb2IvbWFpbi9MSUNFTlNFLnR4dFxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8vIHNyYy9iYXNpYy1sYW5ndWFnZXMvYmljZXAvYmljZXAudHNcbnZhciBib3VuZGVkID0gKHRleHQpID0+IGBcXFxcYiR7dGV4dH1cXFxcYmA7XG52YXIgaWRlbnRpZmllclN0YXJ0ID0gXCJbX2EtekEtWl1cIjtcbnZhciBpZGVudGlmaWVyQ29udGludWUgPSBcIltfYS16QS1aMC05XVwiO1xudmFyIGlkZW50aWZpZXIgPSBib3VuZGVkKGAke2lkZW50aWZpZXJTdGFydH0ke2lkZW50aWZpZXJDb250aW51ZX0qYCk7XG52YXIga2V5d29yZHMgPSBbXG4gIFwidGFyZ2V0U2NvcGVcIixcbiAgXCJyZXNvdXJjZVwiLFxuICBcIm1vZHVsZVwiLFxuICBcInBhcmFtXCIsXG4gIFwidmFyXCIsXG4gIFwib3V0cHV0XCIsXG4gIFwiZm9yXCIsXG4gIFwiaW5cIixcbiAgXCJpZlwiLFxuICBcImV4aXN0aW5nXCJcbl07XG52YXIgbmFtZWRMaXRlcmFscyA9IFtcInRydWVcIiwgXCJmYWxzZVwiLCBcIm51bGxcIl07XG52YXIgbm9uQ29tbWVudFdzID0gYFsgXFxcXHRcXFxcclxcXFxuXWA7XG52YXIgbnVtZXJpY0xpdGVyYWwgPSBgWzAtOV0rYDtcbnZhciBjb25mID0ge1xuICBjb21tZW50czoge1xuICAgIGxpbmVDb21tZW50OiBcIi8vXCIsXG4gICAgYmxvY2tDb21tZW50OiBbXCIvKlwiLCBcIiovXCJdXG4gIH0sXG4gIGJyYWNrZXRzOiBbXG4gICAgW1wie1wiLCBcIn1cIl0sXG4gICAgW1wiW1wiLCBcIl1cIl0sXG4gICAgW1wiKFwiLCBcIilcIl1cbiAgXSxcbiAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgIHsgb3BlbjogXCJ7XCIsIGNsb3NlOiBcIn1cIiB9LFxuICAgIHsgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiB9LFxuICAgIHsgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiB9LFxuICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxuICAgIHsgb3BlbjogXCInJydcIiwgY2xvc2U6IFwiJycnXCIgfVxuICBdLFxuICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgeyBvcGVuOiBcIntcIiwgY2xvc2U6IFwifVwiIH0sXG4gICAgeyBvcGVuOiBcIltcIiwgY2xvc2U6IFwiXVwiIH0sXG4gICAgeyBvcGVuOiBcIihcIiwgY2xvc2U6IFwiKVwiIH0sXG4gICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiLCBub3RJbjogW1wic3RyaW5nXCIsIFwiY29tbWVudFwiXSB9LFxuICAgIHsgb3BlbjogXCInJydcIiwgY2xvc2U6IFwiJycnXCIsIG5vdEluOiBbXCJzdHJpbmdcIiwgXCJjb21tZW50XCJdIH1cbiAgXSxcbiAgYXV0b0Nsb3NlQmVmb3JlOiBcIjouLD19XSknIFxcblx0XCIsXG4gIGluZGVudGF0aW9uUnVsZXM6IHtcbiAgICBpbmNyZWFzZUluZGVudFBhdHRlcm46IG5ldyBSZWdFeHAoXCJeKCg/IVxcXFwvXFxcXC8pLikqKFxcXFx7W159XFxcIidgXSp8XFxcXChbXilcXFwiJ2BdKnxcXFxcW1teXFxcXF1cXFwiJ2BdKikkXCIpLFxuICAgIGRlY3JlYXNlSW5kZW50UGF0dGVybjogbmV3IFJlZ0V4cChcIl4oKD8hLio/XFxcXC9cXFxcKikuKlxcXFwqLyk/XFxcXHMqW1xcXFx9XFxcXF1dLiokXCIpXG4gIH1cbn07XG52YXIgbGFuZ3VhZ2UgPSB7XG4gIGRlZmF1bHRUb2tlbjogXCJcIixcbiAgdG9rZW5Qb3N0Zml4OiBcIi5iaWNlcFwiLFxuICBicmFja2V0czogW1xuICAgIHsgb3BlbjogXCJ7XCIsIGNsb3NlOiBcIn1cIiwgdG9rZW46IFwiZGVsaW1pdGVyLmN1cmx5XCIgfSxcbiAgICB7IG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIsIHRva2VuOiBcImRlbGltaXRlci5zcXVhcmVcIiB9LFxuICAgIHsgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiwgdG9rZW46IFwiZGVsaW1pdGVyLnBhcmVudGhlc2lzXCIgfVxuICBdLFxuICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qL14lXSsvLFxuICBrZXl3b3JkcyxcbiAgbmFtZWRMaXRlcmFscyxcbiAgZXNjYXBlczogYFxcXFxcXFxcKHV7WzAtOUEtRmEtZl0rfXxufHJ8dHxcXFxcXFxcXHwnfFxcXFxcXCR7KWAsXG4gIHRva2VuaXplcjoge1xuICAgIHJvb3Q6IFt7IGluY2x1ZGU6IFwiQGV4cHJlc3Npb25cIiB9LCB7IGluY2x1ZGU6IFwiQHdoaXRlc3BhY2VcIiB9XSxcbiAgICBzdHJpbmdWZXJiYXRpbTogW1xuICAgICAgeyByZWdleDogYCh8J3wnJylbXiddYCwgYWN0aW9uOiB7IHRva2VuOiBcInN0cmluZ1wiIH0gfSxcbiAgICAgIHsgcmVnZXg6IGAnJydgLCBhY3Rpb246IHsgdG9rZW46IFwic3RyaW5nLnF1b3RlXCIsIG5leHQ6IFwiQHBvcFwiIH0gfVxuICAgIF0sXG4gICAgc3RyaW5nTGl0ZXJhbDogW1xuICAgICAgeyByZWdleDogYFxcXFxcXCR7YCwgYWN0aW9uOiB7IHRva2VuOiBcImRlbGltaXRlci5icmFja2V0XCIsIG5leHQ6IFwiQGJyYWNrZXRDb3VudGluZ1wiIH0gfSxcbiAgICAgIHsgcmVnZXg6IGBbXlxcXFxcXFxcJyRdK2AsIGFjdGlvbjogeyB0b2tlbjogXCJzdHJpbmdcIiB9IH0sXG4gICAgICB7IHJlZ2V4OiBcIkBlc2NhcGVzXCIsIGFjdGlvbjogeyB0b2tlbjogXCJzdHJpbmcuZXNjYXBlXCIgfSB9LFxuICAgICAgeyByZWdleDogYFxcXFxcXFxcLmAsIGFjdGlvbjogeyB0b2tlbjogXCJzdHJpbmcuZXNjYXBlLmludmFsaWRcIiB9IH0sXG4gICAgICB7IHJlZ2V4OiBgJ2AsIGFjdGlvbjogeyB0b2tlbjogXCJzdHJpbmdcIiwgbmV4dDogXCJAcG9wXCIgfSB9XG4gICAgXSxcbiAgICBicmFja2V0Q291bnRpbmc6IFtcbiAgICAgIHsgcmVnZXg6IGB7YCwgYWN0aW9uOiB7IHRva2VuOiBcImRlbGltaXRlci5icmFja2V0XCIsIG5leHQ6IFwiQGJyYWNrZXRDb3VudGluZ1wiIH0gfSxcbiAgICAgIHsgcmVnZXg6IGB9YCwgYWN0aW9uOiB7IHRva2VuOiBcImRlbGltaXRlci5icmFja2V0XCIsIG5leHQ6IFwiQHBvcFwiIH0gfSxcbiAgICAgIHsgaW5jbHVkZTogXCJleHByZXNzaW9uXCIgfVxuICAgIF0sXG4gICAgY29tbWVudDogW1xuICAgICAgeyByZWdleDogYFteXFxcXCpdK2AsIGFjdGlvbjogeyB0b2tlbjogXCJjb21tZW50XCIgfSB9LFxuICAgICAgeyByZWdleDogYFxcXFwqXFxcXC9gLCBhY3Rpb246IHsgdG9rZW46IFwiY29tbWVudFwiLCBuZXh0OiBcIkBwb3BcIiB9IH0sXG4gICAgICB7IHJlZ2V4OiBgW1xcXFwvKl1gLCBhY3Rpb246IHsgdG9rZW46IFwiY29tbWVudFwiIH0gfVxuICAgIF0sXG4gICAgd2hpdGVzcGFjZTogW1xuICAgICAgeyByZWdleDogbm9uQ29tbWVudFdzIH0sXG4gICAgICB7IHJlZ2V4OiBgXFxcXC9cXFxcKmAsIGFjdGlvbjogeyB0b2tlbjogXCJjb21tZW50XCIsIG5leHQ6IFwiQGNvbW1lbnRcIiB9IH0sXG4gICAgICB7IHJlZ2V4OiBgXFxcXC9cXFxcLy4qJGAsIGFjdGlvbjogeyB0b2tlbjogXCJjb21tZW50XCIgfSB9XG4gICAgXSxcbiAgICBleHByZXNzaW9uOiBbXG4gICAgICB7IHJlZ2V4OiBgJycnYCwgYWN0aW9uOiB7IHRva2VuOiBcInN0cmluZy5xdW90ZVwiLCBuZXh0OiBcIkBzdHJpbmdWZXJiYXRpbVwiIH0gfSxcbiAgICAgIHsgcmVnZXg6IGAnYCwgYWN0aW9uOiB7IHRva2VuOiBcInN0cmluZy5xdW90ZVwiLCBuZXh0OiBcIkBzdHJpbmdMaXRlcmFsXCIgfSB9LFxuICAgICAgeyByZWdleDogbnVtZXJpY0xpdGVyYWwsIGFjdGlvbjogeyB0b2tlbjogXCJudW1iZXJcIiB9IH0sXG4gICAgICB7XG4gICAgICAgIHJlZ2V4OiBpZGVudGlmaWVyLFxuICAgICAgICBhY3Rpb246IHtcbiAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgXCJAa2V5d29yZHNcIjogeyB0b2tlbjogXCJrZXl3b3JkXCIgfSxcbiAgICAgICAgICAgIFwiQG5hbWVkTGl0ZXJhbHNcIjogeyB0b2tlbjogXCJrZXl3b3JkXCIgfSxcbiAgICAgICAgICAgIFwiQGRlZmF1bHRcIjogeyB0b2tlbjogXCJpZGVudGlmaWVyXCIgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxufTtcbmV4cG9ydCB7XG4gIGNvbmYsXG4gIGxhbmd1YWdlXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1931\n");

/***/ })

}]);