"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ \"./firebase.js\");\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyCwW5pf13fHgznvge9Fev94lyiqvFU06zM\",\n  authDomain: \"docs-clone-9f282.firebaseapp.com\",\n  projectId: \"docs-clone-9f282\",\n  storageBucket: \"docs-clone-9f282.appspot.com\",\n  messagingSenderId: \"602490236198\",\n  appId: \"1:602490236198:web:64bd0b8f96dbfdfc57a5e7\"\n};\nconst app = !_firebase__WEBPACK_IMPORTED_MODULE_0__.default.apps.length ? _firebase__WEBPACK_IMPORTED_MODULE_0__.default.intializeApp(firebaseConfig) : _firebase__WEBPACK_IMPORTED_MODULE_0__.default.app();\nconst db = app.fireStore();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsTUFBTUMsY0FBYyxHQUFHO0FBQ25CQyxFQUFBQSxNQUFNLEVBQUUseUNBRFc7QUFFbkJDLEVBQUFBLFVBQVUsRUFBRSxrQ0FGTztBQUduQkMsRUFBQUEsU0FBUyxFQUFFLGtCQUhRO0FBSW5CQyxFQUFBQSxhQUFhLEVBQUUsOEJBSkk7QUFLbkJDLEVBQUFBLGlCQUFpQixFQUFFLGNBTEE7QUFNbkJDLEVBQUFBLEtBQUssRUFBRTtBQU5ZLENBQXZCO0FBU0UsTUFBTUMsR0FBRyxHQUFHLENBQUNSLDBEQUFELEdBQ1ZBLDJEQUFBLENBQXNCQyxjQUF0QixDQURVLEdBRVZELGtEQUFBLEVBRkY7QUFJQSxNQUFNWSxFQUFFLEdBQUNKLEdBQUcsQ0FBQ0ssU0FBSixFQUFUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UuanM/MmFkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi9maXJlYmFzZSc7XG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5Q3dXNXBmMTNmSGd6bnZnZTlGZXY5NGx5aXF2RlUwNnpNXCIsXG4gICAgYXV0aERvbWFpbjogXCJkb2NzLWNsb25lLTlmMjgyLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJkb2NzLWNsb25lLTlmMjgyXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJkb2NzLWNsb25lLTlmMjgyLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjAyNDkwMjM2MTk4XCIsXG4gICAgYXBwSWQ6IFwiMTo2MDI0OTAyMzYxOTg6d2ViOjY0YmQwYjhmOTZkYmZkZmM1N2E1ZTdcIlxuICB9O1xuXG4gIGNvbnN0IGFwcCA9ICFmaXJlYmFzZS5hcHBzLmxlbmd0aCBcbiAgPyBmaXJlYmFzZS5pbnRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpIFxuICA6IGZpcmViYXNlLmFwcCgpO1xuXG4gIGNvbnN0IGRiPWFwcC5maXJlU3RvcmUoKTtcbiAgZXhwb3J0IHsgZGIgfTsiXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImFwcHMiLCJsZW5ndGgiLCJpbnRpYWxpemVBcHAiLCJkYiIsImZpcmVTdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/firebase-adapter */ \"@next-auth/firebase-adapter\");\n/* harmony import */ var _next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../firebase */ \"./firebase.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  // Configure one or more authentication providers\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Google({\n    clientId: process.env.GOOGLE_CLIENT_ID,\n    clientSecret: process.env.GOOGLE_CLIENT_SECRET\n  }) // ...add more providers here\n  ],\n  adapter: (0,_next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2__.FirebaseAdapter)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db)\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxpRUFBZUEsZ0RBQVEsQ0FBQztBQUN0QjtBQUNBSSxFQUFBQSxTQUFTLEVBQUUsQ0FDVEgsaUVBQUEsQ0FBaUI7QUFDZkssSUFBQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBRFA7QUFFZkMsSUFBQUEsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFGWCxHQUFqQixDQURTLENBS1Q7QUFMUyxHQUZXO0FBU3RCQyxFQUFBQSxPQUFPLEVBQUNWLDRFQUFlLENBQUNDLHlDQUFEO0FBVEQsQ0FBRCxDQUF2QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/OTkwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJ1xuaW1wb3J0IHtGaXJlYmFzZUFkYXB0ZXJ9IGZyb20gXCJAbmV4dC1hdXRoL2ZpcmViYXNlLWFkYXB0ZXJcIjtcbmltcG9ydCB7ZGJ9IGZyb20gJy4uLy4uLy4uL2ZpcmViYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIHByb3ZpZGVyczogW1xuICAgIFByb3ZpZGVycy5Hb29nbGUoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgIH0pLFxuICAgIC8vIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXG4gIF0sXG4gIGFkYXB0ZXI6RmlyZWJhc2VBZGFwdGVyKGRiKSxcbn0pIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiUHJvdmlkZXJzIiwiRmlyZWJhc2VBZGFwdGVyIiwiZGIiLCJwcm92aWRlcnMiLCJHb29nbGUiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJhZGFwdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "@next-auth/firebase-adapter":
/*!**********************************************!*\
  !*** external "@next-auth/firebase-adapter" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/firebase-adapter");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();