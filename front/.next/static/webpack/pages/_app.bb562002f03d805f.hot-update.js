"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; },\n/* harmony export */   \"loginAction\": function() { return /* binding */ loginAction; },\n/* harmony export */   \"logoutAction\": function() { return /* binding */ logoutAction; }\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar initialState = {\n    isLoggedIn: false,\n    user: null,\n    signUpData: {},\n    loginData: {}\n};\n// action creator\nvar loginAction = function(data) {\n    return {\n        type: \"LOG_IN\",\n        data: data\n    };\n};\nvar logoutAction = function() {\n    return {\n        type: \"LOG_OUT\"\n    };\n};\nvar reducer = function() {\n    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case \"LOG_IN\":\n            return _objectSpread({}, state, {\n                isLoggedIn: true,\n                user: action.data\n            });\n        case \"LOG_OUT\":\n            return _objectSpread({}, state, {\n                isLoggedIn: false,\n                user: null\n            });\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0lBQzFCQyxVQUFVLEVBQUUsS0FBSztJQUNqQkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsVUFBVSxFQUFFLEVBQUU7SUFDZEMsU0FBUyxFQUFFLEVBQUU7Q0FDZCxDQUFDO0FBRUYsaUJBQWlCO0FBQ1YsSUFBTUMsV0FBVyxHQUFHLFNBQUNDLElBQUksRUFBSztJQUNuQyxPQUFPO1FBQ0xDLElBQUksRUFBRSxRQUFRO1FBQ2RELElBQUksRUFBSkEsSUFBSTtLQUNMLENBQUM7Q0FDSCxDQUFDO0FBRUssSUFBTUUsWUFBWSxHQUFHLFdBQU07SUFDaEMsT0FBTztRQUNMRCxJQUFJLEVBQUUsU0FBUztLQUNoQixDQUFDO0NBQ0gsQ0FBQztBQUVGLElBQU1FLE9BQU8sR0FBRyxXQUFrQztRQUFqQ0MsS0FBSyxvRUFBR1YsWUFBWSxFQUFFVyxNQUFNO0lBQzNDLE9BQVFBLE1BQU0sQ0FBQ0osSUFBSTtRQUNqQixLQUFLLFFBQVE7WUFDWCxPQUFPLGtCQUNGRyxLQUFLO2dCQUNSVCxVQUFVLEVBQUUsSUFBSTtnQkFDaEJDLElBQUksRUFBRVMsTUFBTSxDQUFDTCxJQUFJO2NBQ2xCLENBQUM7UUFDSixLQUFLLFNBQVM7WUFDWixPQUFPLGtCQUNGSSxLQUFLO2dCQUNSVCxVQUFVLEVBQUUsS0FBSztnQkFDakJDLElBQUksRUFBRSxJQUFJO2NBQ1gsQ0FBQztRQUNKO1lBQ0UsT0FBT1EsS0FBSyxDQUFDO0tBQ2hCO0NBQ0Y7QUFFRCwrREFBZUQsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3VzZXIuanM/MGRmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gIHVzZXI6IG51bGwsXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbi8vIGFjdGlvbiBjcmVhdG9yXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiTE9HX0lOXCIsXHJcbiAgICBkYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19PVVRcIixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkxPR19JTlwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgdXNlcjogYWN0aW9uLmRhdGEsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiTE9HX09VVFwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

});