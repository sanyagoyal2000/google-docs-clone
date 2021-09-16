"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/doc/[id]",{

/***/ "./components/TextEditor.js":
/*!**********************************!*\
  !*** ./components/TextEditor.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ \"./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css\");\n/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ \"./node_modules/draft-js/lib/Draft.js\");\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/sanyagoyal/google-docs-yt/components/TextEditor.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_react-draft-wysiwyg_dist_react-draft-wysiwyg_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-draft-wysiwyg */ \"./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js\", 23)).then(function (module) {\n    return module.Editor;\n  });\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-draft-wysiwyg */ \"./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js\")];\n    },\n    modules: [\"../components/TextEditor.js -> \" + 'react-draft-wysiwyg']\n  }\n});\n_c2 = Editor;\n\nfunction TextEditor() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(draft_js__WEBPACK_IMPORTED_MODULE_2__.EditorState.createEmpty()),\n      editorState = _useState[0],\n      setEditorState = _useState[1];\n\n  var onEditorStateChange = function onEditorStateChange(editorState) {\n    setEditorState(editorState);\n  };\n\n  _firebase__WEBPACK_IMPORTED_MODULE_4__.db.collection('userDocs').doc(session.user.email).collection(\"docs\").add({\n    fileName: input,\n    timestamp: firebase.firestore.FieldValue.serverTimestamp()\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"bg-[#FAF9F8] min-h-screen pb-16\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Editor, {\n      editorState: editorState,\n      onEditorStateChange: onEditorStateChange,\n      toolbarClassName: \"flex sticky top-0 z-50 !justify-center mx-auto\",\n      editorClassName: \"mt-6 bg-white shadow-lg max-w-5xl mx-auto mb-12 border p-10\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, this);\n}\n\n_s(TextEditor, \"igzFp6ANXYKolztGus7VGYMTv6Y=\");\n\n_c3 = TextEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextEditor);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Editor$dynamic\");\n$RefreshReg$(_c2, \"Editor\");\n$RefreshReg$(_c3, \"TextEditor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RleHRFZGl0b3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUksTUFBTSxHQUFDSixtREFBTyxNQUFDO0FBQUEsU0FBSSw2UEFBOEJLLElBQTlCLENBQW1DLFVBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNGLE1BQW5CO0FBQUEsR0FBbkMsQ0FBSjtBQUFBLENBQUQsRUFBbUU7QUFDbkZHLEVBQUFBLEdBQUcsRUFBQyxLQUQrRTtBQUFBO0FBQUE7QUFBQSxrQ0FBdkQsMkZBQXVEO0FBQUE7QUFBQSxrREFBdkQscUJBQXVEO0FBQUE7QUFBQSxDQUFuRSxDQUFwQjtNQUFNSDs7QUFJTixTQUFTSSxVQUFULEdBQXNCO0FBQUE7O0FBQ2xCLGtCQUFxQ04sK0NBQVEsQ0FBQ0QsNkRBQUEsRUFBRCxDQUE3QztBQUFBLE1BQU9TLFdBQVA7QUFBQSxNQUFtQkMsY0FBbkI7O0FBRUEsTUFBTUMsbUJBQW1CLEdBQUUsU0FBckJBLG1CQUFxQixDQUFDRixXQUFELEVBQWdCO0FBQ3ZDQyxJQUFBQSxjQUFjLENBQUNELFdBQUQsQ0FBZDtBQUVILEdBSEQ7O0FBSUFQLEVBQUFBLG9EQUFBLENBQWMsVUFBZCxFQUEwQlcsR0FBMUIsQ0FBOEJDLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxLQUEzQyxFQUFrREosVUFBbEQsQ0FBNkQsTUFBN0QsRUFBcUVLLEdBQXJFLENBQXlFO0FBQ3ZFQyxJQUFBQSxRQUFRLEVBQUNDLEtBRDhEO0FBRXZFQyxJQUFBQSxTQUFTLEVBQUNDLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsVUFBbkIsQ0FBOEJDLGVBQTlCO0FBRjZELEdBQXpFO0FBS0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQSwyQkFDSSw4REFBQyxNQUFEO0FBQ0EsaUJBQVcsRUFBSWYsV0FEZjtBQUVBLHlCQUFtQixFQUFFRSxtQkFGckI7QUFHQSxzQkFBZ0IsRUFBQyxnREFIakI7QUFJQSxxQkFBZSxFQUFDO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7R0F0QlFKOztNQUFBQTtBQXdCVCwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RleHRFZGl0b3IuanM/OTcwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgXCJyZWFjdC1kcmFmdC13eXNpd3lnL2Rpc3QvcmVhY3QtZHJhZnQtd3lzaXd5Zy5jc3NcIjtcbmltcG9ydCB7IEVkaXRvclN0YXRlIH0gZnJvbSBcImRyYWZ0LWpzXCI7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7ZGJ9IGZyb20gXCIuLi9maXJlYmFzZVwiXG5cbmNvbnN0IEVkaXRvcj1keW5hbWljKCgpPT5pbXBvcnQoJ3JlYWN0LWRyYWZ0LXd5c2l3eWcnKS50aGVuKChtb2R1bGUpID0+IG1vZHVsZS5FZGl0b3IpLHtcbiAgICBzc3I6ZmFsc2UsXG59KTtcblxuZnVuY3Rpb24gVGV4dEVkaXRvcigpIHtcbiAgICBjb25zdCBbZWRpdG9yU3RhdGUsc2V0RWRpdG9yU3RhdGVdID0gdXNlU3RhdGUoRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoKSk7XG5cbiAgICBjb25zdCBvbkVkaXRvclN0YXRlQ2hhbmdlID0oZWRpdG9yU3RhdGUpID0+e1xuICAgICAgICBzZXRFZGl0b3JTdGF0ZShlZGl0b3JTdGF0ZSk7XG5cbiAgICB9XG4gICAgZGIuY29sbGVjdGlvbigndXNlckRvY3MnKS5kb2Moc2Vzc2lvbi51c2VyLmVtYWlsKS5jb2xsZWN0aW9uKFwiZG9jc1wiKS5hZGQoe1xuICAgICAgZmlsZU5hbWU6aW5wdXQsXG4gICAgICB0aW1lc3RhbXA6ZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKClcblxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGQUY5RjhdIG1pbi1oLXNjcmVlbiBwYi0xNlwiPlxuICAgICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgZWRpdG9yU3RhdGUgPSB7ZWRpdG9yU3RhdGV9XG4gICAgICAgICAgICBvbkVkaXRvclN0YXRlQ2hhbmdlPXtvbkVkaXRvclN0YXRlQ2hhbmdlfVxuICAgICAgICAgICAgdG9vbGJhckNsYXNzTmFtZT1cImZsZXggc3RpY2t5IHRvcC0wIHotNTAgIWp1c3RpZnktY2VudGVyIG14LWF1dG9cIlxuICAgICAgICAgICAgZWRpdG9yQ2xhc3NOYW1lPVwibXQtNiBiZy13aGl0ZSBzaGFkb3ctbGcgbWF4LXctNXhsIG14LWF1dG8gbWItMTIgYm9yZGVyIHAtMTBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0RWRpdG9yO1xuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJFZGl0b3JTdGF0ZSIsInVzZVN0YXRlIiwiZGIiLCJFZGl0b3IiLCJ0aGVuIiwibW9kdWxlIiwic3NyIiwiVGV4dEVkaXRvciIsImNyZWF0ZUVtcHR5IiwiZWRpdG9yU3RhdGUiLCJzZXRFZGl0b3JTdGF0ZSIsIm9uRWRpdG9yU3RhdGVDaGFuZ2UiLCJjb2xsZWN0aW9uIiwiZG9jIiwic2Vzc2lvbiIsInVzZXIiLCJlbWFpbCIsImFkZCIsImZpbGVOYW1lIiwiaW5wdXQiLCJ0aW1lc3RhbXAiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TextEditor.js\n");

/***/ })

});