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

/***/ "./pages/doc/[id].js":
/*!***************************!*\
  !*** ./pages/doc/[id].js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_sanyagoyal_google_docs_yt_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react/Button */ \"./node_modules/@material-tailwind/react/Button.js\");\n/* harmony import */ var _material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react/Icon */ \"./node_modules/@material-tailwind/react/Icon.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Login */ \"./components/Login.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/sanyagoyal/google-docs-yt/pages/doc/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Doc() {\n  _s();\n\n  var _session$user;\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__.useSession)(),\n      _useSession2 = (0,_Users_sanyagoyal_google_docs_yt_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useSession, 1),\n      session = _useSession2[0];\n\n  if (!session) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 24\n  }, this);\n  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  var id = router.query.id;\n\n  var _useDocumentOnce = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__.useDocumentOnce)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db.collection(\"userDocs\").doc(session.user.email).collection(\"docs\").doc(String(id))),\n      _useDocumentOnce2 = (0,_Users_sanyagoyal_google_docs_yt_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useDocumentOnce, 2),\n      snapshot = _useDocumentOnce2[0],\n      loadingSnapshot = _useDocumentOnce2[1];\n\n  if (!loadingSnapshot && !(snapshot !== null && snapshot !== void 0 && snapshot.data().fileName)) {\n    router.replace('/');\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"header\", {\n      className: \"flex justify-between p-3 pb-1\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n        onClick: function onClick() {\n          return router.push(\"/\");\n        },\n        className: \"cursor-pointer\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_2__.default, {\n          name: \"description\",\n          size: \"5xl\",\n          color: \"blue\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: \"flex-grow px-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h2\", {\n          children: snapshot === null || snapshot === void 0 ? void 0 : snapshot.data().fileName\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: \"flex items-center text-sm -ml-1 space-x-1 h-8 text-gray-600\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n            className: \"option\",\n            children: \"File\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n            className: \"option\",\n            children: \"Edit\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n            className: \"option\",\n            children: \"View\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n            className: \"option\",\n            children: \"Insert\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n            className: \"option\",\n            children: \" Format\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n            className: \"option\",\n            children: \"Tools\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_1__.default, {\n        color: \"lightBlue\",\n        buttonType: \"filled\",\n        size: \"regular\",\n        rounded: false,\n        block: false,\n        iconOnly: false,\n        ripple: \"dark\",\n        className: \" ml-5 h-20 w-20 border-0\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_2__.default, {\n          name: \"people\",\n          size: \"md\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, this), \"SHARE\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"img\", {\n        loading: \"lazy\",\n        onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_4__.signOut,\n        className: \"cursor-pointer h-12 w-12 rounded-full ml-2\",\n        src: session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.image,\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Doc, \"NvaMv9llsEbUxIZo/ZZOFwpzaT4=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_4__.useSession, next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter, react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__.useDocumentOnce];\n});\n\n_c = Doc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Doc);\n\nvar _c;\n\n$RefreshReg$(_c, \"Doc\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixjQUFJLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmSixlQTJCSTtBQUNKLGVBQU8sRUFBQyxNQURKO0FBRUosZUFBTyxFQUFFakIscURBRkw7QUFHSixpQkFBUyxFQUFDLDRDQUhOO0FBSUosV0FBRyxFQUFFSyxPQUFGLGFBQUVBLE9BQUYsd0NBQUVBLE9BQU8sQ0FBRU0sSUFBWCxrREFBRSxjQUFlUyxLQUpoQjtBQUtKLFdBQUcsRUFBQztBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0NIOztHQXREUWhCO1VBQ1dOLDBEQUdIRCxnRUFFb0JLOzs7S0FONUJFO0FBd0RULCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RvYy9baWRdLmpzPzE2ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXRhaWx3aW5kL3JlYWN0L0J1dHRvblwiO1xuaW1wb3J0IEljb24gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdC9JY29uXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcbmltcG9ydCB7dXNlU2Vzc2lvbixnZXRTZXNzaW9uLHNpZ25PdXR9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQge2RifSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7dXNlRG9jdW1lbnRPbmNlfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9naW5cIjtcblxuZnVuY3Rpb24gRG9jKCkge1xuICAgIGNvbnN0IFtzZXNzaW9uXT11c2VTZXNzaW9uKCk7XG4gICAgaWYoIXNlc3Npb24pcmV0dXJuIDxMb2dpbi8+O1xuICAgIFxuICAgIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7aWQgfT1yb3V0ZXIucXVlcnk7XG4gICAgY29uc3QgW3NuYXBzaG90LGxvYWRpbmdTbmFwc2hvdF09dXNlRG9jdW1lbnRPbmNlKGRiLmNvbGxlY3Rpb24oXCJ1c2VyRG9jc1wiKS5kb2Moc2Vzc2lvbi51c2VyLmVtYWlsKS5jb2xsZWN0aW9uKFwiZG9jc1wiKS5kb2MoU3RyaW5nKGlkKSkpO1xuICAgXG4gICAgaWYoIWxvYWRpbmdTbmFwc2hvdCAmJiAhc25hcHNob3Q/LmRhdGEoKS5maWxlTmFtZSl7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XG5cbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHAtMyBwYi0xXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCk9PiByb3V0ZXIucHVzaChcIi9cIil9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImRlc2NyaXB0aW9uXCIgc2l6ZT1cIjV4bFwiIGNvbG9yPVwiYmx1ZVwiLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcHgtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3NuYXBzaG90Py5kYXRhKCkuZmlsZU5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXNtIC1tbC0xIHNwYWNlLXgtMSBoLTggdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvcHRpb24nPkZpbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J29wdGlvbic+RWRpdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3B0aW9uJz5WaWV3PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvcHRpb24nPkluc2VydDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3B0aW9uJz4gRm9ybWF0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvcHRpb24nPlRvb2xzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxuICAgICAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJyZWd1bGFyXCJcbiAgICAgICAgICAgICAgICByb3VuZGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBibG9jaz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgaWNvbk9ubHk9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHJpcHBsZT1cImRhcmtcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBtbC01IGgtMjAgdy0yMCBib3JkZXItMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwicGVvcGxlXCIgc2l6ZT1cIm1kXCIvPlNIQVJFXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCIgXG4gICAgICAgICAgICBvbkNsaWNrPXtzaWduT3V0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaC0xMiB3LTEyIHJvdW5kZWQtZnVsbCBtbC0yXCJcbiAgICAgICAgICAgIHNyYz17c2Vzc2lvbj8udXNlcj8uaW1hZ2V9IFxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvYztcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJJY29uIiwidXNlUm91dGVyIiwidXNlU2Vzc2lvbiIsImdldFNlc3Npb24iLCJzaWduT3V0IiwiZGIiLCJ1c2VEb2N1bWVudE9uY2UiLCJMb2dpbiIsIkRvYyIsInNlc3Npb24iLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiY29sbGVjdGlvbiIsImRvYyIsInVzZXIiLCJlbWFpbCIsIlN0cmluZyIsInNuYXBzaG90IiwibG9hZGluZ1NuYXBzaG90IiwiZGF0YSIsImZpbGVOYW1lIiwicmVwbGFjZSIsInB1c2giLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/doc/[id].js\n");

/***/ })

});