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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/chart/BarChart.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/cartesian/CartesianGrid.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/cartesian/YAxis.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/cartesian/Bar.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/component/LabelList.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/component/Cell.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // User input state\n    const [sentiment, setSentiment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Sentiment result state\n    const [sentimentProbability, setSentimentProbability] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}); // Sentiment probabilities state\n    const chartData = [\n        {\n            name: \"Negative\",\n            probability: sentimentProbability.negative\n        },\n        {\n            name: \"Positive\",\n            probability: sentimentProbability.positive\n        }\n    ];\n    // Function to handle form submission\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Here you'll make a POST request to your FastAPI backend\n        // with the text to be analyzed.\n        const response = await fetch(\"http://0.0.0.0/predict\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                text: text\n            })\n        });\n        const data = await response.json();\n        const roundedProbabilities = {\n            positive: parseFloat(data.probabilities.positive).toFixed(2),\n            negative: parseFloat(data.probabilities.negative).toFixed(2)\n        };\n        setSentiment(data.prediction);\n        setSentimentProbability(roundedProbabilities);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen bg-gray-900 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center justify-center flex-grow py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mb-5\",\n                        children: \"Sentiment Analysis CeRDaS | Hilmanzfr\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-5 text-lg text-center\",\n                        children: \"Type in some text (e.g., a review, tweet, etc.) and we'll predict the sentiment.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"w-full max-w-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-full p-2 mb-4 bg-white text-black border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-300\",\n                                rows: \"5\",\n                                placeholder: \"Type anything (eg: review, tweets, etc)\",\n                                value: text,\n                                onChange: (e)=>setText(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75\",\n                                type: \"submit\",\n                                children: \"Predict Sentiment\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            sentiment && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-4 text-2xl font-bold flex flex-col justify-center items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-lg mr-2\",\n                                                children: sentiment === \"Positive\" ? \"\\uD83D\\uDE01\" : \"\\uD83D\\uDE15\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, this),\n                                            sentiment\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.BarChart, {\n                                            width: 400,\n                                            height: 300,\n                                            data: chartData,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.CartesianGrid, {\n                                                    strokeDasharray: \"2 2\",\n                                                    stroke: \"#ffffff\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.XAxis, {\n                                                    dataKey: \"name\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_5__.YAxis, {}, void 0, false, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {}, void 0, false, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.Bar, {\n                                                    dataKey: \"probability\",\n                                                    minPointSize: 5,\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_8__.LabelList, {\n                                                            dataKey: \"probability\",\n                                                            position: \"top\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                            lineNumber: 80,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        chartData.map((entry, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.Cell, {\n                                                                fill: entry.name === \"Positive\" ? \"#32a073\" : \"#fd5339\"\n                                                            }, \"cell-\".concat(index), false, {\n                                                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                                lineNumber: 82,\n                                                                columnNumber: 23\n                                                            }, this))\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"py-2 text-center text-sm border-t border-gray-700\",\n                children: [\n                    \"Made by \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-blue-400 hover:underline\",\n                        href: \"https://github.com/hilmanzfr\",\n                        children: \"Hilmanzfr\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, this),\n                    \" | \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-blue-400 hover:underline\",\n                        href: \"https://github.com/hilmanzfr/cerdas-app\",\n                        children: \"Cerdas App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 114\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"schGvEtK1Mk4NH0wciCAZ1LJnqo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0U7Z0JBQU8xQixXQUFVOztvQkFBb0Q7a0NBQzVELDhEQUFDMkI7d0JBQUUzQixXQUFVO3dCQUFnQzRCLE1BQUs7a0NBQStCOzs7Ozs7b0JBQWE7a0NBQUcsOERBQUNEO3dCQUFFM0IsV0FBVTt3QkFBZ0M0QixNQUFLO2tDQUEwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdNO0dBNUZ3QjFEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qc3g/ZDQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCYXJDaGFydCwgQmFyLCBYQXhpcywgWUF4aXMsIENhcnRlc2lhbkdyaWQsIFRvb2x0aXAsIExhYmVsTGlzdCwgQ2VsbCB9IGZyb20gJ3JlY2hhcnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpOyAgLy8gVXNlciBpbnB1dCBzdGF0ZVxuICBjb25zdCBbc2VudGltZW50LCBzZXRTZW50aW1lbnRdID0gdXNlU3RhdGUobnVsbCk7IC8vIFNlbnRpbWVudCByZXN1bHQgc3RhdGVcbiAgY29uc3QgW3NlbnRpbWVudFByb2JhYmlsaXR5LCBzZXRTZW50aW1lbnRQcm9iYWJpbGl0eV0gPSB1c2VTdGF0ZSh7fSk7IC8vIFNlbnRpbWVudCBwcm9iYWJpbGl0aWVzIHN0YXRlXG5cbiAgY29uc3QgY2hhcnREYXRhID0gW1xuICAgIHtuYW1lOiAnTmVnYXRpdmUnLCBwcm9iYWJpbGl0eTogc2VudGltZW50UHJvYmFiaWxpdHkubmVnYXRpdmV9LFxuICAgIHtuYW1lOiAnUG9zaXRpdmUnLCBwcm9iYWJpbGl0eTogc2VudGltZW50UHJvYmFiaWxpdHkucG9zaXRpdmV9XG4gIF1cblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gSGVyZSB5b3UnbGwgbWFrZSBhIFBPU1QgcmVxdWVzdCB0byB5b3VyIEZhc3RBUEkgYmFja2VuZFxuICAgIC8vIHdpdGggdGhlIHRleHQgdG8gYmUgYW5hbHl6ZWQuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzAuMC4wLjAvcHJlZGljdCcsIHsgXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0ZXh0OiB0ZXh0IH0pXG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3Qgcm91bmRlZFByb2JhYmlsaXRpZXMgPSB7XG4gICAgICBwb3NpdGl2ZTogcGFyc2VGbG9hdChkYXRhLnByb2JhYmlsaXRpZXMucG9zaXRpdmUpLnRvRml4ZWQoMiksXG4gICAgICBuZWdhdGl2ZTogcGFyc2VGbG9hdChkYXRhLnByb2JhYmlsaXRpZXMubmVnYXRpdmUpLnRvRml4ZWQoMiksXG4gICAgfTtcblxuICAgIHNldFNlbnRpbWVudChkYXRhLnByZWRpY3Rpb24pO1xuICAgIHNldFNlbnRpbWVudFByb2JhYmlsaXR5KHJvdW5kZWRQcm9iYWJpbGl0aWVzKTtcbiAgICBcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4gYmctZ3JheS05MDAgdGV4dC13aGl0ZVwiPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1ncm93IHB5LTJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi01XCI+XG4gICAgICAgICAgU2VudGltZW50IEFuYWx5c2lzIENlUkRhUyB8IEhpbG1hbnpmclxuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi01IHRleHQtbGcgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBUeXBlIGluIHNvbWUgdGV4dCAoZS5nLiwgYSByZXZpZXcsIHR3ZWV0LCBldGMuKSBhbmQgd2UnbGwgcHJlZGljdCB0aGUgc2VudGltZW50LlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kXCI+XG4gICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBtYi00IGJnLXdoaXRlIHRleHQtYmxhY2sgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTMwMFwiIFxuICAgICAgICAgICAgcm93cz1cIjVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGFueXRoaW5nIChlZzogcmV2aWV3LCB0d2VldHMsIGV0YylcIlxuICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgID48L3RleHRhcmVhPlxuXG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0yIHB4LTQgYmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1sZyBzaGFkb3ctbWQgaG92ZXI6YmctcHVycGxlLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTQwMCBmb2N1czpyaW5nLW9wYWNpdHktNzVcIiBcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFByZWRpY3QgU2VudGltZW50XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICB7c2VudGltZW50ICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LTJ4bCBmb250LWJvbGQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1yLTJcIj5cbiAgICAgICAgICAgICAgICAgIHtzZW50aW1lbnQgPT09ICdQb3NpdGl2ZScgPyAn8J+YgScgOiAn8J+YlSd9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHtzZW50aW1lbnR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCYXJDaGFydCB3aWR0aD17NDAwfSBoZWlnaHQ9ezMwMH0gZGF0YT17Y2hhcnREYXRhfT5cbiAgICAgICAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjIgMlwiIHN0cm9rZT1cIiNmZmZmZmZcIiAvPlxuICAgICAgICAgICAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxZQXhpcyAvPlxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgLz5cbiAgICAgICAgICAgICAgICAgIDxCYXIgZGF0YUtleT1cInByb2JhYmlsaXR5XCIgbWluUG9pbnRTaXplPXs1fT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsTGlzdCBkYXRhS2V5PVwicHJvYmFiaWxpdHlcIiBwb3NpdGlvbj1cInRvcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHtjaGFydERhdGEubWFwKChlbnRyeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2VsbCBrZXk9e2BjZWxsLSR7aW5kZXh9YH0gZmlsbD17ZW50cnkubmFtZSA9PT0gJ1Bvc2l0aXZlJyA/ICcjMzJhMDczJyA6ICcjZmQ1MzM5J30gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L0Jhcj5cbiAgICAgICAgICAgICAgICA8L0JhckNoYXJ0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJweS0yIHRleHQtY2VudGVyIHRleHQtc20gYm9yZGVyLXQgYm9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgIE1hZGUgYnkgPGEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMCBob3Zlcjp1bmRlcmxpbmVcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2hpbG1hbnpmclwiPkhpbG1hbnpmcjwvYT4gfCA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwIGhvdmVyOnVuZGVybGluZVwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaGlsbWFuemZyL2NlcmRhcy1hcHBcIj5DZXJkYXMgQXBwPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJhckNoYXJ0IiwiQmFyIiwiWEF4aXMiLCJZQXhpcyIsIkNhcnRlc2lhbkdyaWQiLCJUb29sdGlwIiwiTGFiZWxMaXN0IiwiQ2VsbCIsIkhvbWUiLCJ0ZXh0Iiwic2V0VGV4dCIsInNlbnRpbWVudCIsInNldFNlbnRpbWVudCIsInNlbnRpbWVudFByb2JhYmlsaXR5Iiwic2V0U2VudGltZW50UHJvYmFiaWxpdHkiLCJjaGFydERhdGEiLCJuYW1lIiwicHJvYmFiaWxpdHkiLCJuZWdhdGl2ZSIsInBvc2l0aXZlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwicm91bmRlZFByb2JhYmlsaXRpZXMiLCJwYXJzZUZsb2F0IiwicHJvYmFiaWxpdGllcyIsInRvRml4ZWQiLCJwcmVkaWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImgxIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsInRleHRhcmVhIiwicm93cyIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsInR5cGUiLCJzcGFuIiwid2lkdGgiLCJoZWlnaHQiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2UiLCJkYXRhS2V5IiwibWluUG9pbnRTaXplIiwicG9zaXRpb24iLCJtYXAiLCJlbnRyeSIsImluZGV4IiwiZmlsbCIsImZvb3RlciIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});