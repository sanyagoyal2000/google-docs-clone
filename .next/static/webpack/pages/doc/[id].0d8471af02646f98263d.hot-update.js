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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_sanyagoyal_google_docs_yt_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ \"./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css\");\n/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draft-js */ \"./node_modules/draft-js/lib/Draft.js\");\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/sanyagoyal/google-docs-yt/components/TextEditor.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_react-draft-wysiwyg_dist_react-draft-wysiwyg_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-draft-wysiwyg */ \"./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js\", 23)).then(function (module) {\n    return module.Editor;\n  });\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-draft-wysiwyg */ \"./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js\")];\n    },\n    modules: [\"../components/TextEditor.js -> \" + \"react-draft-wysiwyg\"]\n  }\n});\n_c2 = Editor;\n\nfunction TextEditor() {\n  _s();\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_7__.useSession)(),\n      _useSession2 = (0,_Users_sanyagoyal_google_docs_yt_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useSession, 1),\n      session = _useSession2[0];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(draft_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.createEmpty()),\n      editorState = _useState[0],\n      setEditorState = _useState[1];\n\n  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n  var id = router.query.id;\n\n  var _useDocumentOnce = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__.useDocumentOnce)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db.collection(\"userDocs\").doc(session.user.email).collection(\"docs\").doc(id)),\n      _useDocumentOnce2 = (0,_Users_sanyagoyal_google_docs_yt_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useDocumentOnce, 1),\n      snapshot = _useDocumentOnce2[0];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var _snapshot$data;\n\n    if (snapshot !== null && snapshot !== void 0 && (_snapshot$data = snapshot.data()) !== null && _snapshot$data !== void 0 && _snapshot$data.editorState) {\n      var _snapshot$data2;\n\n      setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.createWithContent((0,draft_js__WEBPACK_IMPORTED_MODULE_4__.convertFromRaw)(snapshot === null || snapshot === void 0 ? void 0 : (_snapshot$data2 = snapshot.data()) === null || _snapshot$data2 === void 0 ? void 0 : _snapshot$data2.editorState)));\n    }\n  }, [snapshot]);\n\n  var onEditorStateChange = function onEditorStateChange(editorState) {\n    setEditorState(editorState);\n    _firebase__WEBPACK_IMPORTED_MODULE_5__.db.collection(\"userDocs\").doc(session.user.email).collection(\"docs\").doc(id).set({\n      editorState: (0,draft_js__WEBPACK_IMPORTED_MODULE_4__.convertToRaw)(editorState.getCurrentContent())\n    }, {\n      merge: true\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n    className: \"bg-[#F8F9FA] min-h-screen pb-16\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Editor, {\n      editorState: editorState,\n      onEditorStateChange: onEditorStateChange,\n      toolbarClassName: \"flex sticky top-0 z-50 !justify-center mx-auto\",\n      editorClassName: \"mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, this);\n}\n\n_s(TextEditor, \"QXgTvCWyrkL0gk8wZIEmoYg2n7s=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_7__.useSession, next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__.useDocumentOnce];\n});\n\n_c3 = TextEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextEditor);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Editor$dynamic\");\n$RefreshReg$(_c2, \"Editor\");\n$RefreshReg$(_c3, \"TextEditor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RleHRFZGl0b3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTVUsTUFBTSxHQUFHVixtREFBTyxNQUNwQjtBQUFBLFNBQU0sNlBBQThCVyxJQUE5QixDQUFtQyxVQUFDQyxNQUFEO0FBQUEsV0FBWUEsTUFBTSxDQUFDRixNQUFuQjtBQUFBLEdBQW5DLENBQU47QUFBQSxDQURvQixFQUVwQjtBQUNFRyxFQUFBQSxHQUFHLEVBQUUsS0FEUDtBQUFBO0FBQUE7QUFBQSxrQ0FEYSwyRkFDYjtBQUFBO0FBQUEsa0RBRGEscUJBQ2I7QUFBQTtBQUFBLENBRm9CLENBQXRCO01BQU1IOztBQU9OLFNBQVNJLFVBQVQsR0FBc0I7QUFBQTs7QUFDcEIsb0JBQWtCTiw0REFBVSxFQUE1QjtBQUFBO0FBQUEsTUFBT08sT0FBUDs7QUFDQSxrQkFBc0NiLCtDQUFRLENBQUNDLDZEQUFBLEVBQUQsQ0FBOUM7QUFBQSxNQUFPYyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLE1BQU1DLE1BQU0sR0FBR2Qsa0VBQVMsRUFBeEI7QUFDQSxNQUFRZSxFQUFSLEdBQWVELE1BQU0sQ0FBQ0UsS0FBdEIsQ0FBUUQsRUFBUjs7QUFFQSx5QkFBbUJYLCtFQUFlLENBQ2hDTCxvREFBQSxDQUFjLFVBQWQsRUFBMEJtQixHQUExQixDQUE4QlIsT0FBTyxDQUFDUyxJQUFSLENBQWFDLEtBQTNDLEVBQWtESCxVQUFsRCxDQUE2RCxNQUE3RCxFQUFxRUMsR0FBckUsQ0FBeUVILEVBQXpFLENBRGdDLENBQWxDO0FBQUE7QUFBQSxNQUFPTSxRQUFQOztBQUlBekIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQUE7O0FBQ2QsUUFBSXlCLFFBQUosYUFBSUEsUUFBSixpQ0FBSUEsUUFBUSxDQUFFQyxJQUFWLEVBQUosMkNBQUksZUFBa0JWLFdBQXRCLEVBQW1DO0FBQUE7O0FBQ2pDQyxNQUFBQSxjQUFjLENBQ1pmLG1FQUFBLENBQ0VHLHdEQUFjLENBQUNvQixRQUFELGFBQUNBLFFBQUQsMENBQUNBLFFBQVEsQ0FBRUMsSUFBVixFQUFELG9EQUFDLGdCQUFrQlYsV0FBbkIsQ0FEaEIsQ0FEWSxDQUFkO0FBS0Q7QUFDRixHQVJRLEVBUU4sQ0FBQ1MsUUFBRCxDQVJNLENBQVQ7O0FBVUEsTUFBTUcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDWixXQUFELEVBQWlCO0FBQzNDQyxJQUFBQSxjQUFjLENBQUNELFdBQUQsQ0FBZDtBQUVBYixJQUFBQSxvREFBQSxDQUFjLFVBQWQsRUFDR21CLEdBREgsQ0FDT1IsT0FBTyxDQUFDUyxJQUFSLENBQWFDLEtBRHBCLEVBRUdILFVBRkgsQ0FFYyxNQUZkLEVBR0dDLEdBSEgsQ0FHT0gsRUFIUCxFQUlHVSxHQUpILENBS0k7QUFDRWIsTUFBQUEsV0FBVyxFQUFFVixzREFBWSxDQUFDVSxXQUFXLENBQUNjLGlCQUFaLEVBQUQ7QUFEM0IsS0FMSixFQVFJO0FBQ0VDLE1BQUFBLEtBQUssRUFBRTtBQURULEtBUko7QUFZRCxHQWZEOztBQWlCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxpQ0FBZjtBQUFBLDJCQUNFLDhEQUFDLE1BQUQ7QUFDRSxpQkFBVyxFQUFFZixXQURmO0FBRUUseUJBQW1CLEVBQUVZLG1CQUZ2QjtBQUdFLHNCQUFnQixFQUFDLGdEQUhuQjtBQUlFLHFCQUFlLEVBQUM7QUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEOztHQS9DUWY7VUFDV04sMERBRUhILGdFQUdJSTs7O01BTlpLO0FBaURULCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGV4dEVkaXRvci5qcz85NzAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcInJlYWN0LWRyYWZ0LXd5c2l3eWcvZGlzdC9yZWFjdC1kcmFmdC13eXNpd3lnLmNzc1wiO1xuaW1wb3J0IHsgRWRpdG9yU3RhdGUgfSBmcm9tIFwiZHJhZnQtanNcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcbmltcG9ydCB7IGNvbnZlcnRGcm9tUmF3LCBjb252ZXJ0VG9SYXcgfSBmcm9tIFwiZHJhZnQtanNcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRPbmNlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiO1xuXG5jb25zdCBFZGl0b3IgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoXCJyZWFjdC1kcmFmdC13eXNpd3lnXCIpLnRoZW4oKG1vZHVsZSkgPT4gbW9kdWxlLkVkaXRvciksXG4gIHtcbiAgICBzc3I6IGZhbHNlLFxuICB9XG4pO1xuXG5mdW5jdGlvbiBUZXh0RWRpdG9yKCkge1xuICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IFtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVdID0gdXNlU3RhdGUoRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoKSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgW3NuYXBzaG90XSA9IHVzZURvY3VtZW50T25jZShcbiAgICBkYi5jb2xsZWN0aW9uKFwidXNlckRvY3NcIikuZG9jKHNlc3Npb24udXNlci5lbWFpbCkuY29sbGVjdGlvbihcImRvY3NcIikuZG9jKGlkKVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNuYXBzaG90Py5kYXRhKCk/LmVkaXRvclN0YXRlKSB7XG4gICAgICBzZXRFZGl0b3JTdGF0ZShcbiAgICAgICAgRWRpdG9yU3RhdGUuY3JlYXRlV2l0aENvbnRlbnQoXG4gICAgICAgICAgY29udmVydEZyb21SYXcoc25hcHNob3Q/LmRhdGEoKT8uZWRpdG9yU3RhdGUpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9LCBbc25hcHNob3RdKTtcblxuICBjb25zdCBvbkVkaXRvclN0YXRlQ2hhbmdlID0gKGVkaXRvclN0YXRlKSA9PiB7XG4gICAgc2V0RWRpdG9yU3RhdGUoZWRpdG9yU3RhdGUpO1xuXG4gICAgZGIuY29sbGVjdGlvbihcInVzZXJEb2NzXCIpXG4gICAgICAuZG9jKHNlc3Npb24udXNlci5lbWFpbClcbiAgICAgIC5jb2xsZWN0aW9uKFwiZG9jc1wiKVxuICAgICAgLmRvYyhpZClcbiAgICAgIC5zZXQoXG4gICAgICAgIHtcbiAgICAgICAgICBlZGl0b3JTdGF0ZTogY29udmVydFRvUmF3KGVkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCkpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVyZ2U6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRjhGOUZBXSBtaW4taC1zY3JlZW4gcGItMTZcIj5cbiAgICAgIDxFZGl0b3JcbiAgICAgICAgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfVxuICAgICAgICBvbkVkaXRvclN0YXRlQ2hhbmdlPXtvbkVkaXRvclN0YXRlQ2hhbmdlfVxuICAgICAgICB0b29sYmFyQ2xhc3NOYW1lPVwiZmxleCBzdGlja3kgdG9wLTAgei01MCAhanVzdGlmeS1jZW50ZXIgbXgtYXV0b1wiXG4gICAgICAgIGVkaXRvckNsYXNzTmFtZT1cIm10LTYgcC0xMCBiZy13aGl0ZSBzaGFkb3ctbGcgbWF4LXctNXhsIG14LWF1dG8gbWItMTIgYm9yZGVyXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRFZGl0b3I7Il0sIm5hbWVzIjpbImR5bmFtaWMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkVkaXRvclN0YXRlIiwiZGIiLCJ1c2VSb3V0ZXIiLCJjb252ZXJ0RnJvbVJhdyIsImNvbnZlcnRUb1JhdyIsInVzZVNlc3Npb24iLCJ1c2VEb2N1bWVudE9uY2UiLCJFZGl0b3IiLCJ0aGVuIiwibW9kdWxlIiwic3NyIiwiVGV4dEVkaXRvciIsInNlc3Npb24iLCJjcmVhdGVFbXB0eSIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiY29sbGVjdGlvbiIsImRvYyIsInVzZXIiLCJlbWFpbCIsInNuYXBzaG90IiwiZGF0YSIsImNyZWF0ZVdpdGhDb250ZW50Iiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsInNldCIsImdldEN1cnJlbnRDb250ZW50IiwibWVyZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TextEditor.js\n");

/***/ })

});