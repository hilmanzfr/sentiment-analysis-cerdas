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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/chart/BarChart.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/cartesian/CartesianGrid.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/cartesian/YAxis.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/cartesian/Bar.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/component/LabelList.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/component/Cell.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // User input state\n    const [sentiment, setSentiment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Sentiment result state\n    const [sentimentProbability, setSentimentProbability] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}); // Sentiment probabilities state\n    const chartData = [\n        {\n            name: \"Negative\",\n            probability: sentimentProbability.negative\n        },\n        {\n            name: \"Positive\",\n            probability: sentimentProbability.positive\n        }\n    ];\n    // Function to handle form submission\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Here you'll make a POST request to your FastAPI backend\n        // with the text to be analyzed.\n        const response = await fetch(\"http://0.0.0.0/predict\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                text: text\n            })\n        });\n        const data = await response.json();\n        const roundedProbabilities = {\n            positive: parseFloat(data.probabilities.positive).toFixed(2),\n            negative: parseFloat(data.probabilities.negative).toFixed(2)\n        };\n        setSentiment(data.prediction);\n        setSentimentProbability(roundedProbabilities);\n    };\n    const CustomTooltip = (param)=>{\n        let { active, payload, label } = param;\n        if (active && payload && payload.length) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom-tooltip\",\n                style: {\n                    backgroundColor: \"rgba(42, 42, 42, 0.8)\",\n                    padding: \"10px\",\n                    borderRadius: \"5px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"label\",\n                    style: {\n                        color: \"white\"\n                    },\n                    children: \"\".concat(label, \" : \").concat(payload[0].value)\n                }, void 0, false, {\n                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this);\n        }\n        return null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen bg-gray-900 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center justify-center flex-grow py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mb-5\",\n                        children: \"Sentiment Analysis CeRDaS | Hilmanzfr\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-5 text-lg text-center\",\n                        children: \"Type in some text (e.g., a review, tweet, etc.) and we'll predict the sentiment.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"w-full max-w-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-full p-2 mb-4 bg-white text-black border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-300\",\n                                rows: \"5\",\n                                placeholder: \"Type anything (eg: review, tweets, etc)\",\n                                value: text,\n                                onChange: (e)=>setText(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75\",\n                                type: \"submit\",\n                                children: \"Predict Sentiment\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            sentiment && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-4 text-2xl font-bold flex flex-col justify-center items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-lg mr-2\",\n                                                children: sentiment === \"Positive\" ? \"\\uD83D\\uDE01\" : \"\\uD83D\\uDE15\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            }, this),\n                                            sentiment\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-8 mr-8\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.BarChart, {\n                                            width: 400,\n                                            height: 300,\n                                            data: chartData,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.CartesianGrid, {\n                                                    strokeDasharray: \"2 2\",\n                                                    stroke: \"#ffffff\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.XAxis, {\n                                                    dataKey: \"name\",\n                                                    tick: {\n                                                        fontSize: 17,\n                                                        fill: \"white\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_5__.YAxis, {\n                                                    tick: {\n                                                        fontSize: 17,\n                                                        fill: \"white\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {\n                                                    content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomTooltip, {}, void 0, false, void 0, void 0)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.Bar, {\n                                                    dataKey: \"probability\",\n                                                    minPointSize: 5,\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_8__.LabelList, {\n                                                            dataKey: \"probability\",\n                                                            position: \"top\",\n                                                            style: {\n                                                                fill: \"white\",\n                                                                fontSize: \"17px\"\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                            lineNumber: 92,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        chartData.map((entry, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.Cell, {\n                                                                fill: entry.name === \"Positive\" ? \"#32a073\" : \"#fd5339\"\n                                                            }, \"cell-\".concat(index), false, {\n                                                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                                lineNumber: 94,\n                                                                columnNumber: 23\n                                                            }, this))\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"py-2 text-center text-sm border-t border-gray-700\",\n                children: [\n                    \"Made by \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-blue-400 hover:underline\",\n                        href: \"https://github.com/hilmanzfr\",\n                        children: \"Hilmanzfr\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, this),\n                    \" | \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-blue-400 hover:underline\",\n                        href: \"https://github.com/hilmanzfr/cerdas-app\",\n                        children: \"Cerdas App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 114\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"schGvEtK1Mk4NH0wciCAZ1LJnqo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzVDLDhEQUFDaEUsMkNBQUtBO29EQUFDaUUsU0FBUTtvREFBT0MsTUFBTTt3REFBRUMsVUFBVTt3REFBSUMsTUFBTTtvREFBUTs7Ozs7OzhEQUMxRCw4REFBQ25FLDJDQUFLQTtvREFBQ2lFLE1BQU07d0RBQUVDLFVBQVU7d0RBQUlDLE1BQU07b0RBQVE7Ozs7Ozs4REFDM0MsOERBQUNqRSw2Q0FBT0E7b0RBQUNrRSx1QkFBUyw4REFBQ2xDOzs7Ozs7OERBQ25CLDhEQUFDcEMseUNBQUdBO29EQUFDa0UsU0FBUTtvREFBY0ssY0FBYzs7c0VBQ3ZDLDhEQUFDbEUsK0NBQVNBOzREQUFDNkQsU0FBUTs0REFBY00sVUFBUzs0REFBTTdCLE9BQU87Z0VBQUUwQixNQUFNO2dFQUFTRCxVQUFVOzREQUFPOzs7Ozs7d0RBQ3hGdEQsVUFBVTJELEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDckIsOERBQUNyRSwwQ0FBSUE7Z0VBQXVCK0QsTUFBTUssTUFBTTNELElBQUksS0FBSyxhQUFhLFlBQVk7K0RBQS9ELFFBQWMsT0FBTjREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVVuQyw4REFBQ0M7Z0JBQU9sQyxXQUFVOztvQkFBb0Q7a0NBQzVELDhEQUFDbUM7d0JBQUVuQyxXQUFVO3dCQUFnQ29DLE1BQUs7a0NBQStCOzs7Ozs7b0JBQWE7a0NBQUcsOERBQUNEO3dCQUFFbkMsV0FBVTt3QkFBZ0NvQyxNQUFLO2tDQUEwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdNO0dBeEd3QnZFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qc3g/ZDQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCYXJDaGFydCwgQmFyLCBYQXhpcywgWUF4aXMsIENhcnRlc2lhbkdyaWQsIFRvb2x0aXAsIExhYmVsTGlzdCwgQ2VsbCB9IGZyb20gJ3JlY2hhcnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpOyAgLy8gVXNlciBpbnB1dCBzdGF0ZVxuICBjb25zdCBbc2VudGltZW50LCBzZXRTZW50aW1lbnRdID0gdXNlU3RhdGUobnVsbCk7IC8vIFNlbnRpbWVudCByZXN1bHQgc3RhdGVcbiAgY29uc3QgW3NlbnRpbWVudFByb2JhYmlsaXR5LCBzZXRTZW50aW1lbnRQcm9iYWJpbGl0eV0gPSB1c2VTdGF0ZSh7fSk7IC8vIFNlbnRpbWVudCBwcm9iYWJpbGl0aWVzIHN0YXRlXG5cbiAgY29uc3QgY2hhcnREYXRhID0gW1xuICAgIHtuYW1lOiAnTmVnYXRpdmUnLCBwcm9iYWJpbGl0eTogc2VudGltZW50UHJvYmFiaWxpdHkubmVnYXRpdmV9LFxuICAgIHtuYW1lOiAnUG9zaXRpdmUnLCBwcm9iYWJpbGl0eTogc2VudGltZW50UHJvYmFiaWxpdHkucG9zaXRpdmV9XG4gIF1cblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gSGVyZSB5b3UnbGwgbWFrZSBhIFBPU1QgcmVxdWVzdCB0byB5b3VyIEZhc3RBUEkgYmFja2VuZFxuICAgIC8vIHdpdGggdGhlIHRleHQgdG8gYmUgYW5hbHl6ZWQuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzAuMC4wLjAvcHJlZGljdCcsIHsgXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0ZXh0OiB0ZXh0IH0pXG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3Qgcm91bmRlZFByb2JhYmlsaXRpZXMgPSB7XG4gICAgICBwb3NpdGl2ZTogcGFyc2VGbG9hdChkYXRhLnByb2JhYmlsaXRpZXMucG9zaXRpdmUpLnRvRml4ZWQoMiksXG4gICAgICBuZWdhdGl2ZTogcGFyc2VGbG9hdChkYXRhLnByb2JhYmlsaXRpZXMubmVnYXRpdmUpLnRvRml4ZWQoMiksXG4gICAgfTtcblxuICAgIHNldFNlbnRpbWVudChkYXRhLnByZWRpY3Rpb24pO1xuICAgIHNldFNlbnRpbWVudFByb2JhYmlsaXR5KHJvdW5kZWRQcm9iYWJpbGl0aWVzKTtcbiAgICBcbiAgfTtcblxuICBjb25zdCBDdXN0b21Ub29sdGlwID0gKHsgYWN0aXZlLCBwYXlsb2FkLCBsYWJlbCB9KSA9PiB7XG4gICAgaWYgKGFjdGl2ZSAmJiBwYXlsb2FkICYmIHBheWxvYWQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS10b29sdGlwXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAncmdiYSg0MiwgNDIsIDQyLCAwLjgpJywgcGFkZGluZzogJzEwcHgnLCBib3JkZXJSYWRpdXM6ICc1cHgnIH19PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhYmVsXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+e2Ake2xhYmVsfSA6ICR7cGF5bG9hZFswXS52YWx1ZX1gfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIGJnLWdyYXktOTAwIHRleHQtd2hpdGVcIj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtZ3JvdyBweS0yXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNVwiPlxuICAgICAgICAgIFNlbnRpbWVudCBBbmFseXNpcyBDZVJEYVMgfCBIaWxtYW56ZnJcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWxnIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgVHlwZSBpbiBzb21lIHRleHQgKGUuZy4sIGEgcmV2aWV3LCB0d2VldCwgZXRjLikgYW5kIHdlJ2xsIHByZWRpY3QgdGhlIHNlbnRpbWVudC5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZFwiPlxuICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgbWItNCBiZy13aGl0ZSB0ZXh0LWJsYWNrIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS0zMDBcIiBcbiAgICAgICAgICAgIHJvd3M9XCI1XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhbnl0aGluZyAoZWc6IHJldmlldywgdHdlZXRzLCBldGMpXCJcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+PC90ZXh0YXJlYT5cblxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMiBweC00IGJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgc2hhZG93LW1kIGhvdmVyOmJnLXB1cnBsZS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXB1cnBsZS00MDAgZm9jdXM6cmluZy1vcGFjaXR5LTc1XCIgXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBQcmVkaWN0IFNlbnRpbWVudFxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAge3NlbnRpbWVudCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdGV4dC0yeGwgZm9udC1ib2xkIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBtci0yXCI+XG4gICAgICAgICAgICAgICAgICB7c2VudGltZW50ID09PSAnUG9zaXRpdmUnID8gJ/CfmIEnIDogJ/CfmJUnfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7c2VudGltZW50fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTggbXItOCc+XG4gICAgICAgICAgICAgICAgPEJhckNoYXJ0IHdpZHRoPXs0MDB9IGhlaWdodD17MzAwfSBkYXRhPXtjaGFydERhdGF9PlxuICAgICAgICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMiAyXCIgc3Ryb2tlPVwiI2ZmZmZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICA8WEF4aXMgZGF0YUtleT1cIm5hbWVcIiB0aWNrPXt7IGZvbnRTaXplOiAxNywgZmlsbDogJ3doaXRlJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgPFlBeGlzIHRpY2s9e3sgZm9udFNpemU6IDE3LCBmaWxsOiAnd2hpdGUnIH19IC8+XG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBjb250ZW50PXs8Q3VzdG9tVG9vbHRpcCAvPn0gLz5cbiAgICAgICAgICAgICAgICAgIDxCYXIgZGF0YUtleT1cInByb2JhYmlsaXR5XCIgbWluUG9pbnRTaXplPXs1fT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsTGlzdCBkYXRhS2V5PVwicHJvYmFiaWxpdHlcIiBwb3NpdGlvbj1cInRvcFwiIHN0eWxlPXt7IGZpbGw6ICd3aGl0ZScsIGZvbnRTaXplOiAnMTdweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAge2NoYXJ0RGF0YS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDZWxsIGtleT17YGNlbGwtJHtpbmRleH1gfSBmaWxsPXtlbnRyeS5uYW1lID09PSAnUG9zaXRpdmUnID8gJyMzMmEwNzMnIDogJyNmZDUzMzknfSAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvQmFyPlxuICAgICAgICAgICAgICAgIDwvQmFyQ2hhcnQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInB5LTIgdGV4dC1jZW50ZXIgdGV4dC1zbSBib3JkZXItdCBib3JkZXItZ3JheS03MDBcIj5cbiAgICAgICAgTWFkZSBieSA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwIGhvdmVyOnVuZGVybGluZVwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaGlsbWFuemZyXCI+SGlsbWFuemZyPC9hPiB8IDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDAgaG92ZXI6dW5kZXJsaW5lXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oaWxtYW56ZnIvY2VyZGFzLWFwcFwiPkNlcmRhcyBBcHA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQmFyQ2hhcnQiLCJCYXIiLCJYQXhpcyIsIllBeGlzIiwiQ2FydGVzaWFuR3JpZCIsIlRvb2x0aXAiLCJMYWJlbExpc3QiLCJDZWxsIiwiSG9tZSIsInRleHQiLCJzZXRUZXh0Iiwic2VudGltZW50Iiwic2V0U2VudGltZW50Iiwic2VudGltZW50UHJvYmFiaWxpdHkiLCJzZXRTZW50aW1lbnRQcm9iYWJpbGl0eSIsImNoYXJ0RGF0YSIsIm5hbWUiLCJwcm9iYWJpbGl0eSIsIm5lZ2F0aXZlIiwicG9zaXRpdmUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJyb3VuZGVkUHJvYmFiaWxpdGllcyIsInBhcnNlRmxvYXQiLCJwcm9iYWJpbGl0aWVzIiwidG9GaXhlZCIsInByZWRpY3Rpb24iLCJDdXN0b21Ub29sdGlwIiwiYWN0aXZlIiwicGF5bG9hZCIsImxhYmVsIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwicCIsImNvbG9yIiwidmFsdWUiLCJtYWluIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJ0ZXh0YXJlYSIsInJvd3MiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwidHlwZSIsInNwYW4iLCJ3aWR0aCIsImhlaWdodCIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZSIsImRhdGFLZXkiLCJ0aWNrIiwiZm9udFNpemUiLCJmaWxsIiwiY29udGVudCIsIm1pblBvaW50U2l6ZSIsInBvc2l0aW9uIiwibWFwIiwiZW50cnkiLCJpbmRleCIsImZvb3RlciIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});