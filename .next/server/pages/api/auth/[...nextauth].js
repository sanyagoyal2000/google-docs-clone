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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyCwW5pf13fHgznvge9Fev94lyiqvFU06zM\",\n  authDomain: \"docs-clone-9f282.firebaseapp.com\",\n  projectId: \"docs-clone-9f282\",\n  storageBucket: \"docs-clone-9f282.appspot.com\",\n  messagingSenderId: \"602490236198\",\n  appId: \"1:602490236198:web:64bd0b8f96dbfdfc57a5e7\"\n};\nconst app = !(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length) ? firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig) : firebase__WEBPACK_IMPORTED_MODULE_0___default().app();\nconst db = app.firestore();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQyxjQUFjLEdBQUc7QUFDbkJDLEVBQUFBLE1BQU0sRUFBRSx5Q0FEVztBQUVuQkMsRUFBQUEsVUFBVSxFQUFFLGtDQUZPO0FBR25CQyxFQUFBQSxTQUFTLEVBQUUsa0JBSFE7QUFJbkJDLEVBQUFBLGFBQWEsRUFBRSw4QkFKSTtBQUtuQkMsRUFBQUEsaUJBQWlCLEVBQUUsY0FMQTtBQU1uQkMsRUFBQUEsS0FBSyxFQUFFO0FBTlksQ0FBdkI7QUFTRSxNQUFNQyxHQUFHLEdBQUcsQ0FBRVIsNkRBQUYsR0FDVkEsNkRBQUEsQ0FBdUJDLGNBQXZCLENBRFUsR0FFVkQsbURBQUEsRUFGRjtBQUtBLE1BQU1ZLEVBQUUsR0FBQ0osR0FBRyxDQUFDSyxTQUFKLEVBQVQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS5qcz8yYWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5Q3dXNXBmMTNmSGd6bnZnZTlGZXY5NGx5aXF2RlUwNnpNXCIsXG4gICAgYXV0aERvbWFpbjogXCJkb2NzLWNsb25lLTlmMjgyLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJkb2NzLWNsb25lLTlmMjgyXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJkb2NzLWNsb25lLTlmMjgyLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjAyNDkwMjM2MTk4XCIsXG4gICAgYXBwSWQ6IFwiMTo2MDI0OTAyMzYxOTg6d2ViOjY0YmQwYjhmOTZkYmZkZmM1N2E1ZTdcIlxuICB9O1xuXG4gIGNvbnN0IGFwcCA9ICEoZmlyZWJhc2UuYXBwcy5sZW5ndGgpXG4gID8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgXG4gIDogZmlyZWJhc2UuYXBwKCk7XG5cblxuICBjb25zdCBkYj1hcHAuZmlyZXN0b3JlKCk7XG4gIGV4cG9ydCB7IGRiIH07XG4iXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiZGIiLCJmaXJlc3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.js\n");

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

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("firebase");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("firebase/firestore");

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