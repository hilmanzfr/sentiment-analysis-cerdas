"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Form/Form.jsx":
/*!**************************************!*\
  !*** ./src/components/Form/Form.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Form = (param)=>{\n    let { onFormSubmit } = param;\n    // const [text, setText] = useState('');\n    // const [errorMessage, setErrorMessage] = useState(null);\n    // const handleSubmit = (e) => {\n    //   e.preventDefault();\n    //   if (!text) {\n    //     setErrorMessage('You need to input some text.');\n    //     return;\n    //   }\n    //   setErrorMessage(null);\n    //   onFormSubmit(text);\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"w-full max-w-md\",\n        children: [\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 p-2 text-white text-sm rounded\",\n                style: {\n                    backgroundColor: \"rgba(240, 68, 56, 0.2)\",\n                    borderColor: \"#7A271A\",\n                    borderWidth: \"2px\",\n                    borderStyle: \"solid\"\n                },\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/components/Form/Form.jsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                className: \"w-full p-2 mb-4 bg-white text-black border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-300\",\n                rows: \"5\",\n                placeholder: \"Type anything (eg: review, tweets, etc)\",\n                value: text,\n                onChange: (e)=>setText(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/components/Form/Form.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75\",\n                type: \"submit\",\n                children: \"Predict Sentiment\"\n            }, void 0, false, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/components/Form/Form.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/components/Form/Form.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Zvcm0vRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUI7QUFDTztBQUVoQyxNQUFNRSxPQUFPO1FBQUMsRUFBRUMsWUFBWSxFQUFFO0lBQzVCLHdDQUF3QztJQUN4QywwREFBMEQ7SUFFMUQsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUV4QixpQkFBaUI7SUFDakIsdURBQXVEO0lBQ3ZELGNBQWM7SUFDZCxNQUFNO0lBRU4sMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixLQUFLO0lBRUwscUJBQ0UsOERBQUNDO1FBQUtDLFVBQVVDO1FBQWNDLFdBQVU7O1lBQ3JDQyw4QkFDQyw4REFBQ0M7Z0JBQUlGLFdBQVU7Z0JBQXNDRyxPQUFPO29CQUFFQyxpQkFBaUI7b0JBQTBCQyxhQUFhO29CQUFXQyxhQUFhO29CQUFPQyxhQUFhO2dCQUFROzBCQUN2S047Ozs7OzswQkFHTCw4REFBQ087Z0JBQ0NSLFdBQVU7Z0JBQ1ZTLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLE9BQU9DO2dCQUNQQyxVQUFVLENBQUNDLElBQU1DLFFBQVFELEVBQUVFLE1BQU0sQ0FBQ0wsS0FBSzs7Ozs7OzBCQUd6Qyw4REFBQ007Z0JBQ0NqQixXQUFVO2dCQUNWa0IsTUFBSzswQkFDTjs7Ozs7Ozs7Ozs7O0FBS1A7S0F2Q012QjtBQXlDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3JtL0Zvcm0uanN4PzM2ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgRm9ybSA9ICh7IG9uRm9ybVN1Ym1pdCB9KSA9PiB7XG4gIC8vIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgLy8gY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIC8vICAgaWYgKCF0ZXh0KSB7XG4gIC8vICAgICBzZXRFcnJvck1lc3NhZ2UoJ1lvdSBuZWVkIHRvIGlucHV0IHNvbWUgdGV4dC4nKTtcbiAgLy8gICAgIHJldHVybjtcbiAgLy8gICB9XG5cbiAgLy8gICBzZXRFcnJvck1lc3NhZ2UobnVsbCk7XG4gIC8vICAgb25Gb3JtU3VibWl0KHRleHQpO1xuICAvLyB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kXCI+XG4gICAgICB7ZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHAtMiB0ZXh0LXdoaXRlIHRleHQtc20gcm91bmRlZFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjQwLCA2OCwgNTYsIDAuMiknLCBib3JkZXJDb2xvcjogJyM3QTI3MUEnLCBib3JkZXJXaWR0aDogJzJweCcsIGJvcmRlclN0eWxlOiAnc29saWQnIH19PlxuICAgICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBtYi00IGJnLXdoaXRlIHRleHQtYmxhY2sgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTMwMFwiIFxuICAgICAgICByb3dzPVwiNVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhbnl0aGluZyAoZWc6IHJldmlldywgdHdlZXRzLCBldGMpXCJcbiAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICA+PC90ZXh0YXJlYT5cblxuICAgICAgPGJ1dHRvbiBcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIgcHgtNCBiZy1wdXJwbGUtNjAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCByb3VuZGVkLWxnIHNoYWRvdy1tZCBob3ZlcjpiZy1wdXJwbGUtNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wdXJwbGUtNDAwIGZvY3VzOnJpbmctb3BhY2l0eS03NVwiIFxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgID5cbiAgICAgICAgUHJlZGljdCBTZW50aW1lbnRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIm9uRm9ybVN1Ym1pdCIsImZvcm0iLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImNsYXNzTmFtZSIsImVycm9yTWVzc2FnZSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwidGV4dGFyZWEiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInRleHQiLCJvbkNoYW5nZSIsImUiLCJzZXRUZXh0IiwidGFyZ2V0IiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Form/Form.jsx\n"));

/***/ })

});