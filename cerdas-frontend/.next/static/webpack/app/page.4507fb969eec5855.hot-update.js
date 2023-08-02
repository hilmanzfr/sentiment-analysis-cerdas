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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer/Footer */ \"(app-pages-browser)/./src/components/Footer/Footer.jsx\");\n/* harmony import */ var _components_Form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Form/Form */ \"(app-pages-browser)/./src/components/Form/Form.jsx\");\n/* harmony import */ var _components_SentimentChart_SentimentChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SentimentChart/SentimentChart */ \"(app-pages-browser)/./src/components/SentimentChart/SentimentChart.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // User input state\n    const [sentiment, setSentiment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Sentiment result state\n    const [sentimentProbability, setSentimentProbability] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}); // Sentiment probabilities state\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Error message state\n    const chartData = [\n        {\n            name: \"Negative\",\n            probability: sentimentProbability.negative\n        },\n        {\n            name: \"Positive\",\n            probability: sentimentProbability.positive\n        }\n    ];\n    // Function to handle form submission\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!text) {\n            setErrorMessage(\"You need to input some text.\");\n            return;\n        }\n        setErrorMessage(null); // Clear the error message if the form is submitted successfully\n        // Here you'll make a POST request to your FastAPI backend\n        // with the text to be analyzed.\n        const response = await fetch(\"http://0.0.0.0/predict\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                text: text\n            })\n        });\n        const data = await response.json();\n        const roundedProbabilities = {\n            positive: parseFloat(data.probabilities.positive).toFixed(2),\n            negative: parseFloat(data.probabilities.negative).toFixed(2)\n        };\n        setSentiment(data.prediction);\n        setSentimentProbability(roundedProbabilities);\n    };\n    const CustomTooltip = (param)=>{\n        let { active, payload, label } = param;\n        if (active && payload && payload.length) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom-tooltip\",\n                style: {\n                    backgroundColor: \"rgba(42, 42, 42, 0.8)\",\n                    padding: \"10px\",\n                    borderRadius: \"5px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"label\",\n                    style: {\n                        color: \"white\"\n                    },\n                    children: \"\".concat(label, \" : \").concat(payload[0].value)\n                }, void 0, false, {\n                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this);\n        }\n        return null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen bg-gray-900 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center justify-center flex-grow py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mb-5\",\n                        children: \"Sentiment Analysis CeRDaS | Hilman Zafri\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-5 text-lg text-center\",\n                        children: \"Type in some text (e.g., a review, tweet, etc.) and we'll predict the sentiment.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onFormSubmit: handleSubmit,\n                        text: text,\n                        setText: setText,\n                        errorMessage: errorMessage\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SentimentChart_SentimentChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sentiment: sentiment,\n                        sentimentProbability: sentimentProbability\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"W5R792vNea5p6uolXLFmK8TXm5o=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ2dCO0FBQ047QUFDOEI7QUFFMUQsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxLQUFNLG1CQUFtQjtJQUMxRCxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUMsT0FBTyx5QkFBeUI7SUFDM0UsTUFBTSxDQUFDUyxzQkFBc0JDLHdCQUF3QixHQUFHViwrQ0FBUUEsQ0FBQyxDQUFDLElBQUksZ0NBQWdDO0lBQ3RHLE1BQU0sQ0FBQ1csY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDLE9BQU8sc0JBQXNCO0lBRTlFLE1BQU1hLFlBQVk7UUFDaEI7WUFBQ0MsTUFBTTtZQUFZQyxhQUFhTixxQkFBcUJPLFFBQVE7UUFBQTtRQUM3RDtZQUFDRixNQUFNO1lBQVlDLGFBQWFOLHFCQUFxQlEsUUFBUTtRQUFBO0tBQzlEO0lBRUQscUNBQXFDO0lBQ3JDLE1BQU1DLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFFaEIsSUFBSSxDQUFDZixNQUFNO1lBQ1RPLGdCQUFnQjtZQUNoQjtRQUNGO1FBRUFBLGdCQUFnQixPQUFPLGdFQUFnRTtRQUV2RiwwREFBMEQ7UUFDMUQsZ0NBQWdDO1FBQ2hDLE1BQU1TLFdBQVcsTUFBTUMsTUFBTSwwQkFBMEI7WUFDckRDLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7WUFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRXRCLE1BQU1BO1lBQUs7UUFDcEM7UUFFQSxNQUFNdUIsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO1FBRWhDLE1BQU1DLHVCQUF1QjtZQUMzQmIsVUFBVWMsV0FBV0gsS0FBS0ksYUFBYSxDQUFDZixRQUFRLEVBQUVnQixPQUFPLENBQUM7WUFDMURqQixVQUFVZSxXQUFXSCxLQUFLSSxhQUFhLENBQUNoQixRQUFRLEVBQUVpQixPQUFPLENBQUM7UUFDNUQ7UUFFQXpCLGFBQWFvQixLQUFLTSxVQUFVO1FBQzVCeEIsd0JBQXdCb0I7SUFFMUI7SUFFQSxNQUFNSyxnQkFBZ0I7WUFBQyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFO1FBQy9DLElBQUlGLFVBQVVDLFdBQVdBLFFBQVFFLE1BQU0sRUFBRTtZQUN2QyxxQkFDRSw4REFBQ0M7Z0JBQUlDLFdBQVU7Z0JBQWlCQyxPQUFPO29CQUFFQyxpQkFBaUI7b0JBQXlCQyxTQUFTO29CQUFRQyxjQUFjO2dCQUFNOzBCQUN0SCw0RUFBQ0M7b0JBQUVMLFdBQVU7b0JBQVFDLE9BQU87d0JBQUVLLE9BQU87b0JBQVE7OEJBQUksR0FBY1YsT0FBWEMsT0FBTSxPQUFzQixPQUFqQkQsT0FBTyxDQUFDLEVBQUUsQ0FBQ1csS0FBSzs7Ozs7Ozs7Ozs7UUFHckY7UUFFQSxPQUFPO0lBQ1Q7SUFHQSxxQkFDRSw4REFBQ1I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNRO2dCQUFLUixXQUFVOztrQ0FDZCw4REFBQ1M7d0JBQUdULFdBQVU7a0NBQTBCOzs7Ozs7a0NBR3hDLDhEQUFDSzt3QkFBRUwsV0FBVTtrQ0FBMkI7Ozs7OztrQ0FJeEMsOERBQUN2Qyw2REFBSUE7d0JBQUNpRCxjQUFjakM7d0JBQWNiLE1BQU1BO3dCQUFNQyxTQUFTQTt3QkFBU0ssY0FBY0E7Ozs7OztrQ0FDOUUsOERBQUNSLGlGQUFjQTt3QkFBQ0ksV0FBV0E7d0JBQVdFLHNCQUFzQkE7Ozs7Ozs7Ozs7OzswQkFFOUQsOERBQUNSLGlFQUFNQTs7Ozs7Ozs7Ozs7QUFHYjtHQXZFd0JHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qc3g/ZDQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtL0Zvcm0nO1xuaW1wb3J0IFNlbnRpbWVudENoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvU2VudGltZW50Q2hhcnQvU2VudGltZW50Q2hhcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7ICAvLyBVc2VyIGlucHV0IHN0YXRlXG4gIGNvbnN0IFtzZW50aW1lbnQsIHNldFNlbnRpbWVudF0gPSB1c2VTdGF0ZShudWxsKTsgLy8gU2VudGltZW50IHJlc3VsdCBzdGF0ZVxuICBjb25zdCBbc2VudGltZW50UHJvYmFiaWxpdHksIHNldFNlbnRpbWVudFByb2JhYmlsaXR5XSA9IHVzZVN0YXRlKHt9KTsgLy8gU2VudGltZW50IHByb2JhYmlsaXRpZXMgc3RhdGVcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpOyAvLyBFcnJvciBtZXNzYWdlIHN0YXRlXG5cbiAgY29uc3QgY2hhcnREYXRhID0gW1xuICAgIHtuYW1lOiAnTmVnYXRpdmUnLCBwcm9iYWJpbGl0eTogc2VudGltZW50UHJvYmFiaWxpdHkubmVnYXRpdmV9LFxuICAgIHtuYW1lOiAnUG9zaXRpdmUnLCBwcm9iYWJpbGl0eTogc2VudGltZW50UHJvYmFiaWxpdHkucG9zaXRpdmV9XG4gIF1cblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ1lvdSBuZWVkIHRvIGlucHV0IHNvbWUgdGV4dC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRFcnJvck1lc3NhZ2UobnVsbCk7IC8vIENsZWFyIHRoZSBlcnJvciBtZXNzYWdlIGlmIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHlcblxuICAgIC8vIEhlcmUgeW91J2xsIG1ha2UgYSBQT1NUIHJlcXVlc3QgdG8geW91ciBGYXN0QVBJIGJhY2tlbmRcbiAgICAvLyB3aXRoIHRoZSB0ZXh0IHRvIGJlIGFuYWx5emVkLlxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8wLjAuMC4wL3ByZWRpY3QnLCB7IFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGV4dDogdGV4dCB9KVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IHJvdW5kZWRQcm9iYWJpbGl0aWVzID0ge1xuICAgICAgcG9zaXRpdmU6IHBhcnNlRmxvYXQoZGF0YS5wcm9iYWJpbGl0aWVzLnBvc2l0aXZlKS50b0ZpeGVkKDIpLFxuICAgICAgbmVnYXRpdmU6IHBhcnNlRmxvYXQoZGF0YS5wcm9iYWJpbGl0aWVzLm5lZ2F0aXZlKS50b0ZpeGVkKDIpLFxuICAgIH07XG5cbiAgICBzZXRTZW50aW1lbnQoZGF0YS5wcmVkaWN0aW9uKTtcbiAgICBzZXRTZW50aW1lbnRQcm9iYWJpbGl0eShyb3VuZGVkUHJvYmFiaWxpdGllcyk7XG4gICAgXG4gIH07XG5cbiAgY29uc3QgQ3VzdG9tVG9vbHRpcCA9ICh7IGFjdGl2ZSwgcGF5bG9hZCwgbGFiZWwgfSkgPT4ge1xuICAgIGlmIChhY3RpdmUgJiYgcGF5bG9hZCAmJiBwYXlsb2FkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tdG9vbHRpcFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNDIsIDQyLCA0MiwgMC44KScsIHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyUmFkaXVzOiAnNXB4JyB9fT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbFwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PntgJHtsYWJlbH0gOiAke3BheWxvYWRbMF0udmFsdWV9YH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIFxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIGJnLWdyYXktOTAwIHRleHQtd2hpdGVcIj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtZ3JvdyBweS0yXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNVwiPlxuICAgICAgICAgIFNlbnRpbWVudCBBbmFseXNpcyBDZVJEYVMgfCBIaWxtYW4gWmFmcmlcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWxnIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgVHlwZSBpbiBzb21lIHRleHQgKGUuZy4sIGEgcmV2aWV3LCB0d2VldCwgZXRjLikgYW5kIHdlJ2xsIHByZWRpY3QgdGhlIHNlbnRpbWVudC5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxGb3JtIG9uRm9ybVN1Ym1pdD17aGFuZGxlU3VibWl0fSB0ZXh0PXt0ZXh0fSBzZXRUZXh0PXtzZXRUZXh0fSBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX0gLz5cbiAgICAgICAgPFNlbnRpbWVudENoYXJ0IHNlbnRpbWVudD17c2VudGltZW50fSBzZW50aW1lbnRQcm9iYWJpbGl0eT17c2VudGltZW50UHJvYmFiaWxpdHl9IC8+XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZvb3RlciIsIkZvcm0iLCJTZW50aW1lbnRDaGFydCIsIkhvbWUiLCJ0ZXh0Iiwic2V0VGV4dCIsInNlbnRpbWVudCIsInNldFNlbnRpbWVudCIsInNlbnRpbWVudFByb2JhYmlsaXR5Iiwic2V0U2VudGltZW50UHJvYmFiaWxpdHkiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJjaGFydERhdGEiLCJuYW1lIiwicHJvYmFiaWxpdHkiLCJuZWdhdGl2ZSIsInBvc2l0aXZlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwicm91bmRlZFByb2JhYmlsaXRpZXMiLCJwYXJzZUZsb2F0IiwicHJvYmFiaWxpdGllcyIsInRvRml4ZWQiLCJwcmVkaWN0aW9uIiwiQ3VzdG9tVG9vbHRpcCIsImFjdGl2ZSIsInBheWxvYWQiLCJsYWJlbCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsInAiLCJjb2xvciIsInZhbHVlIiwibWFpbiIsImgxIiwib25Gb3JtU3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});