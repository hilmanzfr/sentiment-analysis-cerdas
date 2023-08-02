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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/chart/BarChart.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/cartesian/CartesianGrid.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/cartesian/YAxis.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/cartesian/Bar.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/component/LabelList.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts */ \"(app-pages-browser)/../node_modules/recharts/es6/component/Cell.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // User input state\n    const [sentiment, setSentiment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Sentiment result state\n    const [sentimentProbability, setSentimentProbability] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}); // Sentiment probabilities state\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Error message state\n    const chartData = [\n        {\n            name: \"Negative\",\n            probability: sentimentProbability.negative\n        },\n        {\n            name: \"Positive\",\n            probability: sentimentProbability.positive\n        }\n    ];\n    // Function to handle form submission\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!text) {\n            setErrorMessage(\"You need to input some text.\");\n            return;\n        }\n        setErrorMessage(null); // Clear the error message if the form is submitted successfully\n        // Here you'll make a POST request to your FastAPI backend\n        // with the text to be analyzed.\n        const response = await fetch(\"http://0.0.0.0/predict\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                text: text\n            })\n        });\n        const data = await response.json();\n        const roundedProbabilities = {\n            positive: parseFloat(data.probabilities.positive).toFixed(2),\n            negative: parseFloat(data.probabilities.negative).toFixed(2)\n        };\n        setSentiment(data.prediction);\n        setSentimentProbability(roundedProbabilities);\n    };\n    const CustomTooltip = (param)=>{\n        let { active, payload, label } = param;\n        if (active && payload && payload.length) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom-tooltip\",\n                style: {\n                    backgroundColor: \"rgba(42, 42, 42, 0.8)\",\n                    padding: \"10px\",\n                    borderRadius: \"5px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"label\",\n                    style: {\n                        color: \"white\"\n                    },\n                    children: \"\".concat(label, \" : \").concat(payload[0].value)\n                }, void 0, false, {\n                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this);\n        }\n        return null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen bg-gray-900 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center justify-center flex-grow py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mb-5\",\n                        children: \"Sentiment Analysis CeRDaS | Hilmanzfr\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-5 text-lg text-center\",\n                        children: \"Type in some text (e.g., a review, tweet, etc.) and we'll predict the sentiment.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"w-full max-w-md\",\n                        children: [\n                            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4 p-2 text-white text-sm rounded\",\n                                style: {\n                                    backgroundColor: \"rgba(240, 68, 56, 0.2)\",\n                                    borderColor: \"#7A271A\",\n                                    borderWidth: \"2px\",\n                                    borderStyle: \"solid\"\n                                },\n                                children: errorMessage\n                            }, void 0, false, {\n                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-full p-2 mb-4 bg-white text-black border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-300\",\n                                rows: \"5\",\n                                placeholder: \"Type anything (eg: review, tweets, etc)\",\n                                value: text,\n                                onChange: (e)=>setText(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75\",\n                                type: \"submit\",\n                                children: \"Predict Sentiment\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this),\n                            sentiment && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-4 text-2xl font-bold flex flex-col justify-center items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-lg mr-2\",\n                                                children: sentiment === \"Positive\" ? \"\\uD83D\\uDE01\" : \"\\uD83D\\uDE15\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 17\n                                            }, this),\n                                            sentiment\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-8 mr-8\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.BarChart, {\n                                            width: 400,\n                                            height: 300,\n                                            data: chartData,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.CartesianGrid, {\n                                                    strokeDasharray: \"2 2\",\n                                                    stroke: \"#ffffff\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.XAxis, {\n                                                    dataKey: \"name\",\n                                                    tick: {\n                                                        fontSize: 17,\n                                                        fill: \"white\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_5__.YAxis, {\n                                                    tick: {\n                                                        fontSize: 17,\n                                                        fill: \"white\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {\n                                                    content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomTooltip, {}, void 0, false, void 0, void 0)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.Bar, {\n                                                    dataKey: \"probability\",\n                                                    minPointSize: 5,\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_8__.LabelList, {\n                                                            dataKey: \"probability\",\n                                                            position: \"center\",\n                                                            style: {\n                                                                fill: \"white\",\n                                                                fontSize: \"16px\"\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                            lineNumber: 105,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        chartData.map((entry, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.Cell, {\n                                                                fill: entry.name === \"Positive\" ? \"#32a073\" : \"#fd5339\"\n                                                            }, \"cell-\".concat(index), false, {\n                                                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                                lineNumber: 107,\n                                                                columnNumber: 23\n                                                            }, this))\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"py-2 text-center text-sm border-t border-gray-700\",\n                children: [\n                    \"Made by \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-blue-400 hover:underline\",\n                        href: \"https://github.com/hilmanzfr\",\n                        children: \"Hilmanzfr\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 17\n                    }, this),\n                    \" | \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-blue-400 hover:underline\",\n                        href: \"https://github.com/hilmanzfr/cerdas-app\",\n                        children: \"Cerdas App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 114\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hilmanzfr/Hilman/SentimentAnalysis/cerdas-frontend/src/app/page.jsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"W5R792vNea5p6uolXLFmK8TXm5o=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7OztBQUk3TTtHQXJId0I1RTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanN4P2Q0NjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmFyQ2hhcnQsIEJhciwgWEF4aXMsIFlBeGlzLCBDYXJ0ZXNpYW5HcmlkLCBUb29sdGlwLCBMYWJlbExpc3QsIENlbGwgfSBmcm9tICdyZWNoYXJ0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTsgIC8vIFVzZXIgaW5wdXQgc3RhdGVcbiAgY29uc3QgW3NlbnRpbWVudCwgc2V0U2VudGltZW50XSA9IHVzZVN0YXRlKG51bGwpOyAvLyBTZW50aW1lbnQgcmVzdWx0IHN0YXRlXG4gIGNvbnN0IFtzZW50aW1lbnRQcm9iYWJpbGl0eSwgc2V0U2VudGltZW50UHJvYmFiaWxpdHldID0gdXNlU3RhdGUoe30pOyAvLyBTZW50aW1lbnQgcHJvYmFiaWxpdGllcyBzdGF0ZVxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7IC8vIEVycm9yIG1lc3NhZ2Ugc3RhdGVcblxuICBjb25zdCBjaGFydERhdGEgPSBbXG4gICAge25hbWU6ICdOZWdhdGl2ZScsIHByb2JhYmlsaXR5OiBzZW50aW1lbnRQcm9iYWJpbGl0eS5uZWdhdGl2ZX0sXG4gICAge25hbWU6ICdQb3NpdGl2ZScsIHByb2JhYmlsaXR5OiBzZW50aW1lbnRQcm9iYWJpbGl0eS5wb3NpdGl2ZX1cbiAgXVxuXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZSgnWW91IG5lZWQgdG8gaW5wdXQgc29tZSB0ZXh0LicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldEVycm9yTWVzc2FnZShudWxsKTsgLy8gQ2xlYXIgdGhlIGVycm9yIG1lc3NhZ2UgaWYgdGhlIGZvcm0gaXMgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseVxuXG4gICAgLy8gSGVyZSB5b3UnbGwgbWFrZSBhIFBPU1QgcmVxdWVzdCB0byB5b3VyIEZhc3RBUEkgYmFja2VuZFxuICAgIC8vIHdpdGggdGhlIHRleHQgdG8gYmUgYW5hbHl6ZWQuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzAuMC4wLjAvcHJlZGljdCcsIHsgXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0ZXh0OiB0ZXh0IH0pXG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3Qgcm91bmRlZFByb2JhYmlsaXRpZXMgPSB7XG4gICAgICBwb3NpdGl2ZTogcGFyc2VGbG9hdChkYXRhLnByb2JhYmlsaXRpZXMucG9zaXRpdmUpLnRvRml4ZWQoMiksXG4gICAgICBuZWdhdGl2ZTogcGFyc2VGbG9hdChkYXRhLnByb2JhYmlsaXRpZXMubmVnYXRpdmUpLnRvRml4ZWQoMiksXG4gICAgfTtcblxuICAgIHNldFNlbnRpbWVudChkYXRhLnByZWRpY3Rpb24pO1xuICAgIHNldFNlbnRpbWVudFByb2JhYmlsaXR5KHJvdW5kZWRQcm9iYWJpbGl0aWVzKTtcbiAgICBcbiAgfTtcblxuICBjb25zdCBDdXN0b21Ub29sdGlwID0gKHsgYWN0aXZlLCBwYXlsb2FkLCBsYWJlbCB9KSA9PiB7XG4gICAgaWYgKGFjdGl2ZSAmJiBwYXlsb2FkICYmIHBheWxvYWQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS10b29sdGlwXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAncmdiYSg0MiwgNDIsIDQyLCAwLjgpJywgcGFkZGluZzogJzEwcHgnLCBib3JkZXJSYWRpdXM6ICc1cHgnIH19PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhYmVsXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+e2Ake2xhYmVsfSA6ICR7cGF5bG9hZFswXS52YWx1ZX1gfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIGJnLWdyYXktOTAwIHRleHQtd2hpdGVcIj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtZ3JvdyBweS0yXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNVwiPlxuICAgICAgICAgIFNlbnRpbWVudCBBbmFseXNpcyBDZVJEYVMgfCBIaWxtYW56ZnJcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWxnIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgVHlwZSBpbiBzb21lIHRleHQgKGUuZy4sIGEgcmV2aWV3LCB0d2VldCwgZXRjLikgYW5kIHdlJ2xsIHByZWRpY3QgdGhlIHNlbnRpbWVudC5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZFwiPlxuICAgICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgcC0yIHRleHQtd2hpdGUgdGV4dC1zbSByb3VuZGVkXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNDAsIDY4LCA1NiwgMC4yKScsIGJvcmRlckNvbG9yOiAnIzdBMjcxQScsIGJvcmRlcldpZHRoOiAnMnB4JywgYm9yZGVyU3R5bGU6ICdzb2xpZCcgfX0+XG4gICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgbWItNCBiZy13aGl0ZSB0ZXh0LWJsYWNrIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS0zMDBcIiBcbiAgICAgICAgICAgIHJvd3M9XCI1XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhbnl0aGluZyAoZWc6IHJldmlldywgdHdlZXRzLCBldGMpXCJcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+PC90ZXh0YXJlYT5cblxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMiBweC00IGJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgc2hhZG93LW1kIGhvdmVyOmJnLXB1cnBsZS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXB1cnBsZS00MDAgZm9jdXM6cmluZy1vcGFjaXR5LTc1XCIgXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBQcmVkaWN0IFNlbnRpbWVudFxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAge3NlbnRpbWVudCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdGV4dC0yeGwgZm9udC1ib2xkIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBtci0yXCI+XG4gICAgICAgICAgICAgICAgICB7c2VudGltZW50ID09PSAnUG9zaXRpdmUnID8gJ/CfmIEnIDogJ/CfmJUnfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7c2VudGltZW50fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTggbXItOCc+XG4gICAgICAgICAgICAgICAgPEJhckNoYXJ0IHdpZHRoPXs0MDB9IGhlaWdodD17MzAwfSBkYXRhPXtjaGFydERhdGF9PlxuICAgICAgICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMiAyXCIgc3Ryb2tlPVwiI2ZmZmZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICA8WEF4aXMgZGF0YUtleT1cIm5hbWVcIiB0aWNrPXt7IGZvbnRTaXplOiAxNywgZmlsbDogJ3doaXRlJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgPFlBeGlzIHRpY2s9e3sgZm9udFNpemU6IDE3LCBmaWxsOiAnd2hpdGUnIH19IC8+XG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBjb250ZW50PXs8Q3VzdG9tVG9vbHRpcCAvPn0gLz5cbiAgICAgICAgICAgICAgICAgIDxCYXIgZGF0YUtleT1cInByb2JhYmlsaXR5XCIgbWluUG9pbnRTaXplPXs1fT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsTGlzdCBkYXRhS2V5PVwicHJvYmFiaWxpdHlcIiBwb3NpdGlvbj1cImNlbnRlclwiIHN0eWxlPXt7IGZpbGw6ICd3aGl0ZScsIGZvbnRTaXplOiAnMTZweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAge2NoYXJ0RGF0YS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDZWxsIGtleT17YGNlbGwtJHtpbmRleH1gfSBmaWxsPXtlbnRyeS5uYW1lID09PSAnUG9zaXRpdmUnID8gJyMzMmEwNzMnIDogJyNmZDUzMzknfSAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvQmFyPlxuICAgICAgICAgICAgICAgIDwvQmFyQ2hhcnQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInB5LTIgdGV4dC1jZW50ZXIgdGV4dC1zbSBib3JkZXItdCBib3JkZXItZ3JheS03MDBcIj5cbiAgICAgICAgTWFkZSBieSA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwIGhvdmVyOnVuZGVybGluZVwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaGlsbWFuemZyXCI+SGlsbWFuemZyPC9hPiB8IDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDAgaG92ZXI6dW5kZXJsaW5lXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oaWxtYW56ZnIvY2VyZGFzLWFwcFwiPkNlcmRhcyBBcHA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQmFyQ2hhcnQiLCJCYXIiLCJYQXhpcyIsIllBeGlzIiwiQ2FydGVzaWFuR3JpZCIsIlRvb2x0aXAiLCJMYWJlbExpc3QiLCJDZWxsIiwiSG9tZSIsInRleHQiLCJzZXRUZXh0Iiwic2VudGltZW50Iiwic2V0U2VudGltZW50Iiwic2VudGltZW50UHJvYmFiaWxpdHkiLCJzZXRTZW50aW1lbnRQcm9iYWJpbGl0eSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImNoYXJ0RGF0YSIsIm5hbWUiLCJwcm9iYWJpbGl0eSIsIm5lZ2F0aXZlIiwicG9zaXRpdmUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJyb3VuZGVkUHJvYmFiaWxpdGllcyIsInBhcnNlRmxvYXQiLCJwcm9iYWJpbGl0aWVzIiwidG9GaXhlZCIsInByZWRpY3Rpb24iLCJDdXN0b21Ub29sdGlwIiwiYWN0aXZlIiwicGF5bG9hZCIsImxhYmVsIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwicCIsImNvbG9yIiwidmFsdWUiLCJtYWluIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJ0ZXh0YXJlYSIsInJvd3MiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwidHlwZSIsInNwYW4iLCJ3aWR0aCIsImhlaWdodCIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZSIsImRhdGFLZXkiLCJ0aWNrIiwiZm9udFNpemUiLCJmaWxsIiwiY29udGVudCIsIm1pblBvaW50U2l6ZSIsInBvc2l0aW9uIiwibWFwIiwiZW50cnkiLCJpbmRleCIsImZvb3RlciIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});