"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout */ \"./components/layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const text1 = \"Ori\".split(\"\");\n    const text2 = \"gin\".split(\"\");\n    const [rotateValue, setRotateValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);\n    const { ref , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)({\n        threshold: 0.9,\n        triggerOnce: true\n    });\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        if (inView) {\n            setRotateValue((prevRotateValue)=>prevRotateValue + 270);\n        }\n    }, [\n        inView\n    ]);\n    const container = {\n        hidden: {\n            opacity: 0\n        },\n        visible: function() {\n            let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;\n            return {\n                opacity: 1,\n                transition: {\n                    staggerChildren: 0.12,\n                    delayChildren: 0.04 * i\n                }\n            };\n        }\n    };\n    const child = {\n        visible: {\n            opacity: 1,\n            y: 0,\n            transition: {\n                type: \"spring\",\n                damping: 12,\n                stiffness: 100\n            }\n        },\n        hidden: {\n            opacity: 0,\n            y: 20,\n            transition: {\n                type: \"spring\",\n                damping: 12,\n                stiffness: 100\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"overflow-x-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-screen w-auto overflow-hidden\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            src: __webpack_require__(/*! @public/videos/video.mp4 */ \"./public/videos/video.mp4\"),\n                            autoPlay: true,\n                            loop: true,\n                            muted: true,\n                            className: \"w-full h-full object-cover z-0\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center absolute top-0 left-0 w-full h-full font-text flex-col text-5xl lg:text-7xl text-center sm:text-left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"block\",\n                                    children: \"Japan's\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"block w-100 pt-2\",\n                                    children: \"Prestigious Lineage\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-text justify-center flex items-center w-full h-1/2 overflow-hidden pt-64 sm:pt-32\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"inline-flex width-screen\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                                variants: container,\n                                initial: \"hidden\",\n                                animate: \"visible\",\n                                className: \"inline-flex\",\n                                children: text1.map((text, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h1, {\n                                        variants: child,\n                                        className: \"text-4xl lg:text-5xl text-black z-10 ml-2 mt-2 lg:ml-4 lg:mt-4\",\n                                        children: text\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h1, {\n                                className: \"text-4xl lg:text-5xl mt-2 lg:mt-4\",\n                                children: \"gin\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                                ref: ref,\n                                animate: {\n                                    rotate: rotateValue\n                                },\n                                transition: {\n                                    duration: 0.5\n                                },\n                                className: \"w-14 h-14 bg-zinc-300 absolute rounded-md lg:w-20 lg:h-20\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-text w-screen flex justify-center items-center pt-8 lg:pt-14\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"w-1/2\",\n                        children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-screen h-screen\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\epixt\\\\Desktop\\\\jaydeem\\\\pages\\\\index.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"l50QMHC9riS1XF8WRZhLNWCD+Jw=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNkO0FBQ2E7QUFDaUI7QUFFekMsU0FBU0ksT0FBTzs7SUFDN0IsTUFBTUMsUUFBUSxNQUFNQyxLQUFLLENBQUM7SUFDMUIsTUFBTUMsUUFBUSxNQUFNRCxLQUFLLENBQUM7SUFDMUIsTUFBTSxDQUFDRSxhQUFhQyxlQUFlLEdBQUdSLHFEQUFjLENBQUM7SUFFckQsTUFBTSxFQUFFVSxJQUFHLEVBQUVDLE9BQU0sRUFBRSxHQUFHVCxzRUFBU0EsQ0FBQztRQUFFVSxXQUFXO1FBQUtDLGFBQWEsSUFBSTtJQUFDO0lBRXRFYixzREFBZSxDQUFDLElBQU07UUFDcEIsSUFBSVcsUUFBUTtZQUNWSCxlQUFlLENBQUNPLGtCQUFvQkEsa0JBQWtCO1FBQ3hELENBQUM7SUFDSCxHQUFHO1FBQUNKO0tBQU87SUFFWCxNQUFNSyxZQUFZO1FBQ2hCQyxRQUFRO1lBQUVDLFNBQVM7UUFBRTtRQUNyQkMsU0FBUyxXQUFZO2dCQUFYQyxxRUFBSTttQkFBTztnQkFDbkJGLFNBQVM7Z0JBQ1RHLFlBQVk7b0JBQUVDLGlCQUFpQjtvQkFBTUMsZUFBZSxPQUFPSDtnQkFBRTtZQUMvRDtRQUFBO0lBQ0Y7SUFFQSxNQUFNSSxRQUFRO1FBQ1pMLFNBQVM7WUFDUEQsU0FBUztZQUNUTyxHQUFHO1lBQ0hKLFlBQVk7Z0JBQ1ZLLE1BQU07Z0JBQ05DLFNBQVM7Z0JBQ1RDLFdBQVc7WUFDYjtRQUNGO1FBQ0FYLFFBQVE7WUFDTkMsU0FBUztZQUNUTyxHQUFHO1lBQ0hKLFlBQVk7Z0JBQ1ZLLE1BQU07Z0JBQ05DLFNBQVM7Z0JBQ1RDLFdBQVc7WUFDYjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQzdCLDBEQUFNQTtrQkFDTCw0RUFBQzhCO1lBQUtDLFdBQVU7OzhCQUNkLDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUNDQyxLQUFLQyxtQkFBT0EsQ0FBQywyREFBMEI7NEJBQ3ZDQyxRQUFROzRCQUNSQyxJQUFJOzRCQUNKQyxLQUFLOzRCQUNMUCxXQUFVOzs7Ozs7c0NBRVosOERBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ1E7b0NBQUdSLFdBQVU7OENBQVE7Ozs7Ozs4Q0FDdEIsOERBQUNRO29DQUFHUixXQUFVOzhDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdyQyw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNTO3dCQUFRVCxXQUFVOzswQ0FDakIsOERBQUM3QixxREFBVTtnQ0FDVHVDLFVBQVV4QjtnQ0FDVnlCLFNBQVE7Z0NBQ1JDLFNBQVE7Z0NBQ1JaLFdBQVU7MENBRVQxQixNQUFNdUMsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNoQiw4REFBQzVDLG9EQUFTO3dDQUNSdUMsVUFBVWhCO3dDQUVWTSxXQUFVO2tEQUVUYzt1Q0FISUM7Ozs7Ozs7Ozs7MENBUVgsOERBQUM1QyxvREFBUztnQ0FBQzZCLFdBQVU7MENBQW9DOzs7Ozs7MENBR3pELDhEQUFDN0IscURBQVU7Z0NBQ1RTLEtBQUtBO2dDQUNMZ0MsU0FBUztvQ0FBRUksUUFBUXZDO2dDQUFZO2dDQUMvQmMsWUFBWTtvQ0FBRTBCLFVBQVU7Z0NBQUk7Z0NBQzVCakIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSWhCLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ2tCO3dCQUFFbEIsV0FBVTtrQ0FBUTs7Ozs7Ozs7Ozs7OEJBVXZCLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtYLENBQUM7R0F6R3VCbkM7O1FBS0VELGtFQUFTQTs7O0tBTFhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkBjb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgdGV4dDEgPSBcIk9yaVwiLnNwbGl0KFwiXCIpO1xyXG4gIGNvbnN0IHRleHQyID0gXCJnaW5cIi5zcGxpdChcIlwiKTtcclxuICBjb25zdCBbcm90YXRlVmFsdWUsIHNldFJvdGF0ZVZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoeyB0aHJlc2hvbGQ6IDAuOSwgdHJpZ2dlck9uY2U6IHRydWUgfSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW5WaWV3KSB7XHJcbiAgICAgIHNldFJvdGF0ZVZhbHVlKChwcmV2Um90YXRlVmFsdWUpID0+IHByZXZSb3RhdGVWYWx1ZSArIDI3MCk7XHJcbiAgICB9XHJcbiAgfSwgW2luVmlld10pO1xyXG5cclxuICBjb25zdCBjb250YWluZXIgPSB7XHJcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxyXG4gICAgdmlzaWJsZTogKGkgPSAxKSA9PiAoe1xyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB0cmFuc2l0aW9uOiB7IHN0YWdnZXJDaGlsZHJlbjogMC4xMiwgZGVsYXlDaGlsZHJlbjogMC4wNCAqIGkgfSxcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoaWxkID0ge1xyXG4gICAgdmlzaWJsZToge1xyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB5OiAwLFxyXG4gICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcclxuICAgICAgICBkYW1waW5nOiAxMixcclxuICAgICAgICBzdGlmZm5lc3M6IDEwMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBoaWRkZW46IHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgeTogMjAsXHJcbiAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxyXG4gICAgICAgIGRhbXBpbmc6IDEyLFxyXG4gICAgICAgIHN0aWZmbmVzczogMTAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1oaWRkZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtc2NyZWVuIHctYXV0byBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCJAcHVibGljL3ZpZGVvcy92aWRlby5tcDRcIil9XHJcbiAgICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgei0wXCJcclxuICAgICAgICAgID48L3ZpZGVvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBmb250LXRleHQgZmxleC1jb2wgdGV4dC01eGwgbGc6dGV4dC03eGwgdGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJibG9ja1wiPkphcGFuJ3M8L2gxPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYmxvY2sgdy0xMDAgcHQtMlwiPlByZXN0aWdpb3VzIExpbmVhZ2U8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXRleHQganVzdGlmeS1jZW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtMS8yIG92ZXJmbG93LWhpZGRlbiBwdC02NCBzbTpwdC0zMlwiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggd2lkdGgtc2NyZWVuXCI+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgdmFyaWFudHM9e2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICBhbmltYXRlPVwidmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RleHQxLm1hcCgodGV4dCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uaDFcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e2NoaWxkfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBsZzp0ZXh0LTV4bCB0ZXh0LWJsYWNrIHotMTAgbWwtMiBtdC0yIGxnOm1sLTQgbGc6bXQtNFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uaDE+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuXHJcbiAgICAgICAgICAgIDxtb3Rpb24uaDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbGc6dGV4dC01eGwgbXQtMiBsZzptdC00XCI+XHJcbiAgICAgICAgICAgICAgZ2luXHJcbiAgICAgICAgICAgIDwvbW90aW9uLmgxPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgcm90YXRlOiByb3RhdGVWYWx1ZSB9fVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTQgaC0xNCBiZy16aW5jLTMwMCBhYnNvbHV0ZSByb3VuZGVkLW1kIGxnOnctMjAgbGc6aC0yMFwiXHJcbiAgICAgICAgICAgID48L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXRleHQgdy1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHQtOCBsZzpwdC0xNFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy0xLzJcIj5cclxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXHJcbiAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW1cclxuICAgICAgICAgICAgYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0XHJcbiAgICAgICAgICAgIGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpblxyXG4gICAgICAgICAgICByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhXHJcbiAgICAgICAgICAgIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluXHJcbiAgICAgICAgICAgIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW5cIj5cclxuICAgICAgICAgIDxoMT48L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJSZWFjdCIsIm1vdGlvbiIsInVzZUluVmlldyIsIkhvbWUiLCJ0ZXh0MSIsInNwbGl0IiwidGV4dDIiLCJyb3RhdGVWYWx1ZSIsInNldFJvdGF0ZVZhbHVlIiwidXNlU3RhdGUiLCJyZWYiLCJpblZpZXciLCJ0aHJlc2hvbGQiLCJ0cmlnZ2VyT25jZSIsInVzZUVmZmVjdCIsInByZXZSb3RhdGVWYWx1ZSIsImNvbnRhaW5lciIsImhpZGRlbiIsIm9wYWNpdHkiLCJ2aXNpYmxlIiwiaSIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJkZWxheUNoaWxkcmVuIiwiY2hpbGQiLCJ5IiwidHlwZSIsImRhbXBpbmciLCJzdGlmZm5lc3MiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwidmlkZW8iLCJzcmMiLCJyZXF1aXJlIiwiYXV0b1BsYXkiLCJsb29wIiwibXV0ZWQiLCJoMSIsInNlY3Rpb24iLCJ2YXJpYW50cyIsImluaXRpYWwiLCJhbmltYXRlIiwibWFwIiwidGV4dCIsImluZGV4Iiwicm90YXRlIiwiZHVyYXRpb24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});