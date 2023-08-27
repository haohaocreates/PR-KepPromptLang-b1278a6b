"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4212],{

/***/ 4212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/azcli/azcli.ts\nvar conf = {\n  comments: {\n    lineComment: \"#\"\n  }\n};\nvar language = {\n  defaultToken: \"keyword\",\n  ignoreCase: true,\n  tokenPostfix: \".azcli\",\n  str: /[^#\\s]/,\n  tokenizer: {\n    root: [\n      { include: \"@comment\" },\n      [\n        /\\s-+@str*\\s*/,\n        {\n          cases: {\n            \"@eos\": { token: \"key.identifier\", next: \"@popall\" },\n            \"@default\": { token: \"key.identifier\", next: \"@type\" }\n          }\n        }\n      ],\n      [\n        /^-+@str*\\s*/,\n        {\n          cases: {\n            \"@eos\": { token: \"key.identifier\", next: \"@popall\" },\n            \"@default\": { token: \"key.identifier\", next: \"@type\" }\n          }\n        }\n      ]\n    ],\n    type: [\n      { include: \"@comment\" },\n      [\n        /-+@str*\\s*/,\n        {\n          cases: {\n            \"@eos\": { token: \"key.identifier\", next: \"@popall\" },\n            \"@default\": \"key.identifier\"\n          }\n        }\n      ],\n      [\n        /@str+\\s*/,\n        {\n          cases: {\n            \"@eos\": { token: \"string\", next: \"@popall\" },\n            \"@default\": \"string\"\n          }\n        }\n      ]\n    ],\n    comment: [\n      [\n        /#.*$/,\n        {\n          cases: {\n            \"@eos\": { token: \"comment\", next: \"@popall\" }\n          }\n        }\n      ]\n    ]\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDIxMi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUJBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBDQUEwQztBQUNoRSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMENBQTBDO0FBQ2hFLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMENBQTBDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0NBQWtDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vLnlhcm4vY2FjaGUvbW9uYWNvLWVkaXRvci1ucG0tMC40MS4wLTRmNzE0MTZjNjQtODczYThiNGViOS56aXAvbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9hemNsaS9hemNsaS5qcz9iZjkwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFZlcnNpb246IDAuNDEuMCgzOGUxZTNkMDk3Zjg0ZTMzNmMzMTFkMDcxYTlmZmI1MTkxZDRmZmQxKVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L21vbmFjby1lZGl0b3IvYmxvYi9tYWluL0xJQ0VOU0UudHh0XG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLy8gc3JjL2Jhc2ljLWxhbmd1YWdlcy9hemNsaS9hemNsaS50c1xudmFyIGNvbmYgPSB7XG4gIGNvbW1lbnRzOiB7XG4gICAgbGluZUNvbW1lbnQ6IFwiI1wiXG4gIH1cbn07XG52YXIgbGFuZ3VhZ2UgPSB7XG4gIGRlZmF1bHRUb2tlbjogXCJrZXl3b3JkXCIsXG4gIGlnbm9yZUNhc2U6IHRydWUsXG4gIHRva2VuUG9zdGZpeDogXCIuYXpjbGlcIixcbiAgc3RyOiAvW14jXFxzXS8sXG4gIHRva2VuaXplcjoge1xuICAgIHJvb3Q6IFtcbiAgICAgIHsgaW5jbHVkZTogXCJAY29tbWVudFwiIH0sXG4gICAgICBbXG4gICAgICAgIC9cXHMtK0BzdHIqXFxzKi8sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgXCJAZW9zXCI6IHsgdG9rZW46IFwia2V5LmlkZW50aWZpZXJcIiwgbmV4dDogXCJAcG9wYWxsXCIgfSxcbiAgICAgICAgICAgIFwiQGRlZmF1bHRcIjogeyB0b2tlbjogXCJrZXkuaWRlbnRpZmllclwiLCBuZXh0OiBcIkB0eXBlXCIgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgL14tK0BzdHIqXFxzKi8sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgXCJAZW9zXCI6IHsgdG9rZW46IFwia2V5LmlkZW50aWZpZXJcIiwgbmV4dDogXCJAcG9wYWxsXCIgfSxcbiAgICAgICAgICAgIFwiQGRlZmF1bHRcIjogeyB0b2tlbjogXCJrZXkuaWRlbnRpZmllclwiLCBuZXh0OiBcIkB0eXBlXCIgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIF0sXG4gICAgdHlwZTogW1xuICAgICAgeyBpbmNsdWRlOiBcIkBjb21tZW50XCIgfSxcbiAgICAgIFtcbiAgICAgICAgLy0rQHN0cipcXHMqLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIkBlb3NcIjogeyB0b2tlbjogXCJrZXkuaWRlbnRpZmllclwiLCBuZXh0OiBcIkBwb3BhbGxcIiB9LFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBcImtleS5pZGVudGlmaWVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIC9Ac3RyK1xccyovLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiQGVvc1wiOiB7IHRva2VuOiBcInN0cmluZ1wiLCBuZXh0OiBcIkBwb3BhbGxcIiB9LFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgXSxcbiAgICBjb21tZW50OiBbXG4gICAgICBbXG4gICAgICAgIC8jLiokLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIkBlb3NcIjogeyB0b2tlbjogXCJjb21tZW50XCIsIG5leHQ6IFwiQHBvcGFsbFwiIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICBdXG4gIH1cbn07XG5leHBvcnQge1xuICBjb25mLFxuICBsYW5ndWFnZVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4212\n");

/***/ })

}]);