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

/***/ "(app-pages-browser)/./src/app/page.jsx":
/*!**************************!*\
  !*** ./src/app/page.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer/Footer */ \"(app-pages-browser)/./src/components/Footer/Footer.jsx\");\n/* harmony import */ var _components_Form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Form/Form */ \"(app-pages-browser)/./src/components/Form/Form.jsx\");\n/* harmony import */ var _components_SentimentChart_SentimentChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SentimentChart/SentimentChart */ \"(app-pages-browser)/./src/components/SentimentChart/SentimentChart.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // User input state\n    const [sentiment, setSentiment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Sentiment result state\n    const [sentimentProbability, setSentimentProbability] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}); // Sentiment probabilities state\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Error message state\n    const chartData = [\n        {\n            name: \"Negative\",\n            probability: sentimentProbability.negative\n        },\n        {\n            name: \"Positive\",\n            probability: sentimentProbability.positive\n        }\n    ];\n    // Function to handle form submission\n    const handleSubmit = async (inputText)=>{\n        if (!inputText) {\n            setErrorMessage(\"You need to input some text.\");\n            return;\n        }\n        setErrorMessage(null); // Clear the error message if the form is submitted successfully\n        // Here you'll make a POST request to your FastAPI backend\n        // with the text to be analyzed.\n        const response = await fetch(\"http://0.0.0.0/predict\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                text: text\n            })\n        });\n        const data = await response.json();\n        const roundedProbabilities = {\n            positive: parseFloat(data.probabilities.positive).toFixed(2),\n            negative: parseFloat(data.probabilities.negative).toFixed(2)\n        };\n        setSentiment(data.prediction);\n        setSentimentProbability(roundedProbabilities);\n    };\n    const CustomTooltip = (param)=>{\n        let { active, payload, label } = param;\n        if (active && payload && payload.length) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom-tooltip\",\n                style: {\n                    backgroundColor: \"rgba(42, 42, 42, 0.8)\",\n                    padding: \"10px\",\n                    borderRadius: \"5px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"label\",\n                    style: {\n                        color: \"white\"\n                    },\n                    children: \"\".concat(label, \" : \").concat(payload[0].value)\n                }, void 0, false, {\n                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this);\n        }\n        return null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen bg-gray-900 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center justify-center flex-grow py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mb-5\",\n                        children: \"Sentiment Analysis CeRDaS | Hilman Zafri\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-5 text-lg text-center\",\n                        children: \"Type in some text (e.g., a review, tweet, etc.) and we'll predict the sentiment.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onFormSubmit: handleSubmit\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SentimentChart_SentimentChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sentiment: sentiment,\n                        sentimentProbability: sentimentProbability\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"W5R792vNea5p6uolXLFmK8TXm5o=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ2dCO0FBQ047QUFDOEI7QUFFMUQsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxLQUFNLG1CQUFtQjtJQUMxRCxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUMsT0FBTyx5QkFBeUI7SUFDM0UsTUFBTSxDQUFDUyxzQkFBc0JDLHdCQUF3QixHQUFHViwrQ0FBUUEsQ0FBQyxDQUFDLElBQUksZ0NBQWdDO0lBQ3RHLE1BQU0sQ0FBQ1csY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDLE9BQU8sc0JBQXNCO0lBRTlFLE1BQU1hLFlBQVk7UUFDaEI7WUFBQ0MsTUFBTTtZQUFZQyxhQUFhTixxQkFBcUJPLFFBQVE7UUFBQTtRQUM3RDtZQUFDRixNQUFNO1lBQVlDLGFBQWFOLHFCQUFxQlEsUUFBUTtRQUFBO0tBQzlEO0lBRUQscUNBQXFDO0lBQ3JDLE1BQU1DLGVBQWUsT0FBT0M7UUFDMUIsSUFBSSxDQUFDQSxXQUFXO1lBQ2RQLGdCQUFnQjtZQUNoQjtRQUNGO1FBRUFBLGdCQUFnQixPQUFPLGdFQUFnRTtRQUV2RiwwREFBMEQ7UUFDMUQsZ0NBQWdDO1FBQ2hDLE1BQU1RLFdBQVcsTUFBTUMsTUFBTSwwQkFBMEI7WUFDckRDLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7WUFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRXJCLE1BQU1BO1lBQUs7UUFDcEM7UUFFQSxNQUFNc0IsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO1FBRWhDLE1BQU1DLHVCQUF1QjtZQUMzQlosVUFBVWEsV0FBV0gsS0FBS0ksYUFBYSxDQUFDZCxRQUFRLEVBQUVlLE9BQU8sQ0FBQztZQUMxRGhCLFVBQVVjLFdBQVdILEtBQUtJLGFBQWEsQ0FBQ2YsUUFBUSxFQUFFZ0IsT0FBTyxDQUFDO1FBQzVEO1FBRUF4QixhQUFhbUIsS0FBS00sVUFBVTtRQUM1QnZCLHdCQUF3Qm1CO0lBRTFCO0lBRUEsTUFBTUssZ0JBQWdCO1lBQUMsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRTtRQUMvQyxJQUFJRixVQUFVQyxXQUFXQSxRQUFRRSxNQUFNLEVBQUU7WUFDdkMscUJBQ0UsOERBQUNDO2dCQUFJQyxXQUFVO2dCQUFpQkMsT0FBTztvQkFBRUMsaUJBQWlCO29CQUF5QkMsU0FBUztvQkFBUUMsY0FBYztnQkFBTTswQkFDdEgsNEVBQUNDO29CQUFFTCxXQUFVO29CQUFRQyxPQUFPO3dCQUFFSyxPQUFPO29CQUFROzhCQUFJLEdBQWNWLE9BQVhDLE9BQU0sT0FBc0IsT0FBakJELE9BQU8sQ0FBQyxFQUFFLENBQUNXLEtBQUs7Ozs7Ozs7Ozs7O1FBR3JGO1FBRUEsT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUNSO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDUTtnQkFBS1IsV0FBVTs7a0NBQ2QsOERBQUNTO3dCQUFHVCxXQUFVO2tDQUEwQjs7Ozs7O2tDQUd4Qyw4REFBQ0s7d0JBQUVMLFdBQVU7a0NBQTJCOzs7Ozs7a0NBSXhDLDhEQUFDdEMsNkRBQUlBO3dCQUFDZ0QsY0FBY2hDOzs7Ozs7a0NBQ3BCLDhEQUFDZixpRkFBY0E7d0JBQUNJLFdBQVdBO3dCQUFXRSxzQkFBc0JBOzs7Ozs7Ozs7Ozs7MEJBRTlELDhEQUFDUixpRUFBTUE7Ozs7Ozs7Ozs7O0FBR2I7R0FwRXdCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanN4P2Q0NjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtL0Zvcm0nO1xuaW1wb3J0IFNlbnRpbWVudENoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvU2VudGltZW50Q2hhcnQvU2VudGltZW50Q2hhcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7ICAvLyBVc2VyIGlucHV0IHN0YXRlXG4gIGNvbnN0IFtzZW50aW1lbnQsIHNldFNlbnRpbWVudF0gPSB1c2VTdGF0ZShudWxsKTsgLy8gU2VudGltZW50IHJlc3VsdCBzdGF0ZVxuICBjb25zdCBbc2VudGltZW50UHJvYmFiaWxpdHksIHNldFNlbnRpbWVudFByb2JhYmlsaXR5XSA9IHVzZVN0YXRlKHt9KTsgLy8gU2VudGltZW50IHByb2JhYmlsaXRpZXMgc3RhdGVcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpOyAvLyBFcnJvciBtZXNzYWdlIHN0YXRlXG5cbiAgY29uc3QgY2hhcnREYXRhID0gW1xuICAgIHtuYW1lOiAnTmVnYXRpdmUnLCBwcm9iYWJpbGl0eTogc2VudGltZW50UHJvYmFiaWxpdHkubmVnYXRpdmV9LFxuICAgIHtuYW1lOiAnUG9zaXRpdmUnLCBwcm9iYWJpbGl0eTogc2VudGltZW50UHJvYmFiaWxpdHkucG9zaXRpdmV9XG4gIF1cblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChpbnB1dFRleHQpID0+IHtcbiAgICBpZiAoIWlucHV0VGV4dCkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdZb3UgbmVlZCB0byBpbnB1dCBzb21lIHRleHQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0RXJyb3JNZXNzYWdlKG51bGwpOyAvLyBDbGVhciB0aGUgZXJyb3IgbWVzc2FnZSBpZiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5XG5cbiAgICAvLyBIZXJlIHlvdSdsbCBtYWtlIGEgUE9TVCByZXF1ZXN0IHRvIHlvdXIgRmFzdEFQSSBiYWNrZW5kXG4gICAgLy8gd2l0aCB0aGUgdGV4dCB0byBiZSBhbmFseXplZC5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMC4wLjAuMC9wcmVkaWN0JywgeyBcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRleHQ6IHRleHQgfSlcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zdCByb3VuZGVkUHJvYmFiaWxpdGllcyA9IHtcbiAgICAgIHBvc2l0aXZlOiBwYXJzZUZsb2F0KGRhdGEucHJvYmFiaWxpdGllcy5wb3NpdGl2ZSkudG9GaXhlZCgyKSxcbiAgICAgIG5lZ2F0aXZlOiBwYXJzZUZsb2F0KGRhdGEucHJvYmFiaWxpdGllcy5uZWdhdGl2ZSkudG9GaXhlZCgyKSxcbiAgICB9O1xuXG4gICAgc2V0U2VudGltZW50KGRhdGEucHJlZGljdGlvbik7XG4gICAgc2V0U2VudGltZW50UHJvYmFiaWxpdHkocm91bmRlZFByb2JhYmlsaXRpZXMpO1xuICAgIFxuICB9O1xuXG4gIGNvbnN0IEN1c3RvbVRvb2x0aXAgPSAoeyBhY3RpdmUsIHBheWxvYWQsIGxhYmVsIH0pID0+IHtcbiAgICBpZiAoYWN0aXZlICYmIHBheWxvYWQgJiYgcGF5bG9hZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXRvb2x0aXBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDQyLCA0MiwgNDIsIDAuOCknLCBwYWRkaW5nOiAnMTBweCcsIGJvcmRlclJhZGl1czogJzVweCcgfX0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiZWxcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT57YCR7bGFiZWx9IDogJHtwYXlsb2FkWzBdLnZhbHVlfWB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4gYmctZ3JheS05MDAgdGV4dC13aGl0ZVwiPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1ncm93IHB5LTJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi01XCI+XG4gICAgICAgICAgU2VudGltZW50IEFuYWx5c2lzIENlUkRhUyB8IEhpbG1hbiBaYWZyaVxuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi01IHRleHQtbGcgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBUeXBlIGluIHNvbWUgdGV4dCAoZS5nLiwgYSByZXZpZXcsIHR3ZWV0LCBldGMuKSBhbmQgd2UnbGwgcHJlZGljdCB0aGUgc2VudGltZW50LlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPEZvcm0gb25Gb3JtU3VibWl0PXtoYW5kbGVTdWJtaXR9IC8+XG4gICAgICAgIDxTZW50aW1lbnRDaGFydCBzZW50aW1lbnQ9e3NlbnRpbWVudH0gc2VudGltZW50UHJvYmFiaWxpdHk9e3NlbnRpbWVudFByb2JhYmlsaXR5fSAvPlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJGb290ZXIiLCJGb3JtIiwiU2VudGltZW50Q2hhcnQiLCJIb21lIiwidGV4dCIsInNldFRleHQiLCJzZW50aW1lbnQiLCJzZXRTZW50aW1lbnQiLCJzZW50aW1lbnRQcm9iYWJpbGl0eSIsInNldFNlbnRpbWVudFByb2JhYmlsaXR5IiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiY2hhcnREYXRhIiwibmFtZSIsInByb2JhYmlsaXR5IiwibmVnYXRpdmUiLCJwb3NpdGl2ZSIsImhhbmRsZVN1Ym1pdCIsImlucHV0VGV4dCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsInJvdW5kZWRQcm9iYWJpbGl0aWVzIiwicGFyc2VGbG9hdCIsInByb2JhYmlsaXRpZXMiLCJ0b0ZpeGVkIiwicHJlZGljdGlvbiIsIkN1c3RvbVRvb2x0aXAiLCJhY3RpdmUiLCJwYXlsb2FkIiwibGFiZWwiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJwIiwiY29sb3IiLCJ2YWx1ZSIsIm1haW4iLCJoMSIsIm9uRm9ybVN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});