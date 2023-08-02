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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/chart/BarChart.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/cartesian/CartesianGrid.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/cartesian/YAxis.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/cartesian/Bar.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/component/LabelList.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // User input state\n    const [sentiment, setSentiment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Sentiment result state\n    const [sentimentProbability, setSentimentProbability] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}); // Sentiment probabilities state\n    const chartData = [\n        {\n            name: \"Negative\",\n            probability: sentimentProbability.negative\n        },\n        {\n            name: \"Positive\",\n            probability: sentimentProbability.positive\n        }\n    ];\n    // Function to handle form submission\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Here you'll make a POST request to your FastAPI backend\n        // with the text to be analyzed.\n        const response = await fetch(\"http://0.0.0.0/predict\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                text: text\n            })\n        });\n        const data = await response.json();\n        setSentiment(data.prediction);\n        setSentimentProbability(data.probabilities);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen bg-gray-900 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center justify-center flex-grow py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mb-5\",\n                        children: \"Sentiment Analysis CeRDaS | Hilmanzfr\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-5 text-lg text-center\",\n                        children: \"Type in some text (e.g., a review, tweet, etc.) and we'll predict the sentiment.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"w-full max-w-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-full p-2 mb-4 bg-white text-black border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-300\",\n                                rows: \"5\",\n                                placeholder: \"Type anything (eg: review, tweets, etc)\",\n                                value: text,\n                                onChange: (e)=>setText(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75\",\n                                type: \"submit\",\n                                children: \"Predict Sentiment\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            sentiment && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-4 text-2xl font-bold flex flex-col justify-center items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-lg mr-2\",\n                                                children: sentiment === \"Positive\" ? \"\\uD83D\\uDE01\" : \"\\uD83D\\uDE15\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 17\n                                            }, this),\n                                            sentiment\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-1/2 mt-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.BarChart, {\n                                            width: 400,\n                                            height: 300,\n                                            data: chartData,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.CartesianGrid, {\n                                                    strokeDasharray: \"2 3\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.XAxis, {\n                                                    dataKey: \"name\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_5__.YAxis, {}, void 0, false, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {}, void 0, false, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.Bar, {\n                                                    dataKey: \"probability\",\n                                                    fill: \"#48bd5a\",\n                                                    minPointSize: 5,\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_8__.LabelList, {\n                                                            dataKey: \"probability\",\n                                                            position: \"top\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                            lineNumber: 75,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        chartData.map((entry, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                                                                fill: entry.name === \"Positive\" ? \"#82ca9d\" : \"#ffc658\"\n                                                            }, \"cell-\".concat(index), false, {\n                                                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                                lineNumber: 77,\n                                                                columnNumber: 13\n                                                            }, this))\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"py-2 text-center text-sm border-t border-gray-700\",\n                children: [\n                    \"Made by \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-blue-400 hover:underline\",\n                        href: \"https://github.com/hilmanzfr\",\n                        children: \"Hilmanzfr\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, this),\n                    \" | \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-blue-400 hover:underline\",\n                        href: \"https://github.com/hilmanzfr/cerdas-app\",\n                        children: \"Cerdas App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 114\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"schGvEtK1Mk4NH0wciCAZ1LJnqo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNnQztBQUMwRDtBQUUzRSxTQUFTUTs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDLEtBQU0sbUJBQW1CO0lBQzFELE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQyxPQUFPLHlCQUF5QjtJQUMzRSxNQUFNLENBQUNhLHNCQUFzQkMsd0JBQXdCLEdBQUdkLCtDQUFRQSxDQUFDLENBQUMsSUFBSSxnQ0FBZ0M7SUFFdEcsTUFBTWUsWUFBWTtRQUNoQjtZQUFDQyxNQUFNO1lBQVlDLGFBQWFKLHFCQUFxQkssUUFBUTtRQUFBO1FBQzdEO1lBQUNGLE1BQU07WUFBWUMsYUFBYUoscUJBQXFCTSxRQUFRO1FBQUE7S0FDOUQ7SUFFRCxxQ0FBcUM7SUFDckMsTUFBTUMsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUVoQiwwREFBMEQ7UUFDMUQsZ0NBQWdDO1FBQ2hDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSwwQkFBMEI7WUFDckRDLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7WUFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRXBCLE1BQU1BO1lBQUs7UUFDcEM7UUFFQSxNQUFNcUIsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO1FBRWhDbkIsYUFBYWtCLEtBQUtFLFVBQVU7UUFDNUJsQix3QkFBd0JnQixLQUFLRyxhQUFhO0lBRTVDO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBS0QsV0FBVTs7a0NBQ2QsOERBQUNFO3dCQUFHRixXQUFVO2tDQUEwQjs7Ozs7O2tDQUd4Qyw4REFBQ0c7d0JBQUVILFdBQVU7a0NBQTJCOzs7Ozs7a0NBSXhDLDhEQUFDSTt3QkFBS0MsVUFBVXBCO3dCQUFjZSxXQUFVOzswQ0FDdEMsOERBQUNNO2dDQUNDTixXQUFVO2dDQUNWTyxNQUFLO2dDQUNMQyxhQUFZO2dDQUNaQyxPQUFPbkM7Z0NBQ1BvQyxVQUFVLENBQUN4QixJQUFNWCxRQUFRVyxFQUFFeUIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7MENBR3pDLDhEQUFDRztnQ0FDQ1osV0FBVTtnQ0FDVmEsTUFBSzswQ0FDTjs7Ozs7OzRCQUlBckMsMkJBQ0MsOERBQUN1QjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEOzswREFDQyw4REFBQ2U7Z0RBQUtkLFdBQVU7MERBQ2J4QixjQUFjLGFBQWEsaUJBQU87Ozs7Ozs0Q0FFcENBOzs7Ozs7O2tEQUVILDhEQUFDdUI7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNsQyw4Q0FBUUE7NENBQUNpRCxPQUFPOzRDQUFLQyxRQUFROzRDQUFLckIsTUFBTWY7OzhEQUN2Qyw4REFBQ1YsbURBQWFBO29EQUFDK0MsaUJBQWdCOzs7Ozs7OERBQy9CLDhEQUFDakQsMkNBQUtBO29EQUFDa0QsU0FBUTs7Ozs7OzhEQUNmLDhEQUFDakQsMkNBQUtBOzs7Ozs4REFDTiw4REFBQ0UsNkNBQU9BOzs7Ozs4REFDUiw4REFBQ0oseUNBQUdBO29EQUFDbUQsU0FBUTtvREFBY0MsTUFBSztvREFBVUMsY0FBYzs7c0VBQ3RELDhEQUFDaEQsK0NBQVNBOzREQUFDOEMsU0FBUTs0REFBY0csVUFBUzs7Ozs7O3dEQUN6Q3pDLFVBQVUwQyxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQy9CLDhEQUFDQztnRUFBMkJOLE1BQU1JLE1BQU0xQyxJQUFJLEtBQUssYUFBYSxZQUFZOytEQUEvRCxRQUFjLE9BQU4yQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFVekIsOERBQUNFO2dCQUFPMUIsV0FBVTs7b0JBQW9EO2tDQUM1RCw4REFBQzJCO3dCQUFFM0IsV0FBVTt3QkFBZ0M0QixNQUFLO2tDQUErQjs7Ozs7O29CQUFhO2tDQUFHLDhEQUFDRDt3QkFBRTNCLFdBQVU7d0JBQWdDNEIsTUFBSztrQ0FBMEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk3TTtHQXZGd0J2RDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanN4P2Q0NjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmFyQ2hhcnQsIEJhciwgWEF4aXMsIFlBeGlzLCBDYXJ0ZXNpYW5HcmlkLCBUb29sdGlwLCBMYWJlbExpc3QgfSBmcm9tICdyZWNoYXJ0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTsgIC8vIFVzZXIgaW5wdXQgc3RhdGVcbiAgY29uc3QgW3NlbnRpbWVudCwgc2V0U2VudGltZW50XSA9IHVzZVN0YXRlKG51bGwpOyAvLyBTZW50aW1lbnQgcmVzdWx0IHN0YXRlXG4gIGNvbnN0IFtzZW50aW1lbnRQcm9iYWJpbGl0eSwgc2V0U2VudGltZW50UHJvYmFiaWxpdHldID0gdXNlU3RhdGUoe30pOyAvLyBTZW50aW1lbnQgcHJvYmFiaWxpdGllcyBzdGF0ZVxuXG4gIGNvbnN0IGNoYXJ0RGF0YSA9IFtcbiAgICB7bmFtZTogJ05lZ2F0aXZlJywgcHJvYmFiaWxpdHk6IHNlbnRpbWVudFByb2JhYmlsaXR5Lm5lZ2F0aXZlfSxcbiAgICB7bmFtZTogJ1Bvc2l0aXZlJywgcHJvYmFiaWxpdHk6IHNlbnRpbWVudFByb2JhYmlsaXR5LnBvc2l0aXZlfVxuICBdXG5cbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGZvcm0gc3VibWlzc2lvblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIEhlcmUgeW91J2xsIG1ha2UgYSBQT1NUIHJlcXVlc3QgdG8geW91ciBGYXN0QVBJIGJhY2tlbmRcbiAgICAvLyB3aXRoIHRoZSB0ZXh0IHRvIGJlIGFuYWx5emVkLlxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8wLjAuMC4wL3ByZWRpY3QnLCB7IFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGV4dDogdGV4dCB9KVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHNldFNlbnRpbWVudChkYXRhLnByZWRpY3Rpb24pO1xuICAgIHNldFNlbnRpbWVudFByb2JhYmlsaXR5KGRhdGEucHJvYmFiaWxpdGllcyk7XG4gICAgXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIGJnLWdyYXktOTAwIHRleHQtd2hpdGVcIj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtZ3JvdyBweS0yXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNVwiPlxuICAgICAgICAgIFNlbnRpbWVudCBBbmFseXNpcyBDZVJEYVMgfCBIaWxtYW56ZnJcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWxnIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgVHlwZSBpbiBzb21lIHRleHQgKGUuZy4sIGEgcmV2aWV3LCB0d2VldCwgZXRjLikgYW5kIHdlJ2xsIHByZWRpY3QgdGhlIHNlbnRpbWVudC5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZFwiPlxuICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgbWItNCBiZy13aGl0ZSB0ZXh0LWJsYWNrIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS0zMDBcIiBcbiAgICAgICAgICAgIHJvd3M9XCI1XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhbnl0aGluZyAoZWc6IHJldmlldywgdHdlZXRzLCBldGMpXCJcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+PC90ZXh0YXJlYT5cblxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMiBweC00IGJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgc2hhZG93LW1kIGhvdmVyOmJnLXB1cnBsZS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXB1cnBsZS00MDAgZm9jdXM6cmluZy1vcGFjaXR5LTc1XCIgXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBQcmVkaWN0IFNlbnRpbWVudFxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAge3NlbnRpbWVudCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdGV4dC0yeGwgZm9udC1ib2xkIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBtci0yXCI+XG4gICAgICAgICAgICAgICAgICB7c2VudGltZW50ID09PSAnUG9zaXRpdmUnID8gJ/CfmIEnIDogJ/CfmJUnfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7c2VudGltZW50fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBtdC00XCI+XG4gICAgICAgICAgICAgICAgPEJhckNoYXJ0IHdpZHRoPXs0MDB9IGhlaWdodD17MzAwfSBkYXRhPXtjaGFydERhdGF9PlxuICAgICAgICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMiAzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8WUF4aXMgLz5cbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIC8+XG4gICAgICAgICAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJwcm9iYWJpbGl0eVwiIGZpbGw9XCIjNDhiZDVhXCIgbWluUG9pbnRTaXplPXs1fT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsTGlzdCBkYXRhS2V5PVwicHJvYmFiaWxpdHlcIiBwb3NpdGlvbj1cInRvcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHtjaGFydERhdGEubWFwKChlbnRyeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxDZWxsIGtleT17YGNlbGwtJHtpbmRleH1gfSBmaWxsPXtlbnRyeS5uYW1lID09PSAnUG9zaXRpdmUnID8gJyM4MmNhOWQnIDogJyNmZmM2NTgnfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9CYXI+XG4gICAgICAgICAgICAgICAgPC9CYXJDaGFydD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicHktMiB0ZXh0LWNlbnRlciB0ZXh0LXNtIGJvcmRlci10IGJvcmRlci1ncmF5LTcwMFwiPlxuICAgICAgICBNYWRlIGJ5IDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDAgaG92ZXI6dW5kZXJsaW5lXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oaWxtYW56ZnJcIj5IaWxtYW56ZnI8L2E+IHwgPGEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMCBob3Zlcjp1bmRlcmxpbmVcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2hpbG1hbnpmci9jZXJkYXMtYXBwXCI+Q2VyZGFzIEFwcDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCYXJDaGFydCIsIkJhciIsIlhBeGlzIiwiWUF4aXMiLCJDYXJ0ZXNpYW5HcmlkIiwiVG9vbHRpcCIsIkxhYmVsTGlzdCIsIkhvbWUiLCJ0ZXh0Iiwic2V0VGV4dCIsInNlbnRpbWVudCIsInNldFNlbnRpbWVudCIsInNlbnRpbWVudFByb2JhYmlsaXR5Iiwic2V0U2VudGltZW50UHJvYmFiaWxpdHkiLCJjaGFydERhdGEiLCJuYW1lIiwicHJvYmFiaWxpdHkiLCJuZWdhdGl2ZSIsInBvc2l0aXZlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwicHJlZGljdGlvbiIsInByb2JhYmlsaXRpZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwidGV4dGFyZWEiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwidHlwZSIsInNwYW4iLCJ3aWR0aCIsImhlaWdodCIsInN0cm9rZURhc2hhcnJheSIsImRhdGFLZXkiLCJmaWxsIiwibWluUG9pbnRTaXplIiwicG9zaXRpb24iLCJtYXAiLCJlbnRyeSIsImluZGV4IiwiQ2VsbCIsImZvb3RlciIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});