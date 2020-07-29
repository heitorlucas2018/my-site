webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/item/index.js":
/*!**************************************!*\
  !*** ./src/components/item/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.css */ \"./src/components/item/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/heitorsantos/Documents/projects/my-site/src/components/item/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Index(_ref) {\n  var _this = this;\n\n  var id = _ref.id,\n      title = _ref.title,\n      tags = _ref.tags,\n      data = _ref.data,\n      description = _ref.description;\n  return __jsx(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, title || 'title'), tags && __jsx(\"ul\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tag,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 22\n    }\n  }, tags.map(function (value) {\n    return __jsx(\"li\", {\n      href: \"/#teste\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 32\n      }\n    }, \" \", value, \" \");\n  })), description && __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 29\n    }\n  }, description), data && __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 22\n    }\n  }, data.map(function (value) {\n    return __jsx(\"li\", {\n      key: value.trim(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 28\n      }\n    }, value);\n  })));\n}\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pdGVtL2luZGV4LmpzPzMzZjIiXSwibmFtZXMiOlsiSW5kZXgiLCJpZCIsInRpdGxlIiwidGFncyIsImRhdGEiLCJkZXNjcmlwdGlvbiIsIlN0eWxlZCIsImNvbnRhaW5lciIsInRhZyIsIm1hcCIsInZhbHVlIiwidHJpbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQXVEO0FBQUE7O0FBQUEsTUFBdENDLEVBQXNDLFFBQXRDQSxFQUFzQztBQUFBLE1BQWxDQyxLQUFrQyxRQUFsQ0EsS0FBa0M7QUFBQSxNQUEzQkMsSUFBMkIsUUFBM0JBLElBQTJCO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTtBQUVuRCxTQUNJO0FBQUssYUFBUyxFQUFFQyx5REFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLTCxLQUFLLElBQUksT0FBZCxDQURKLEVBRUtDLElBQUksSUFBSTtBQUFJLGFBQVMsRUFBRUcseURBQU0sQ0FBQ0UsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNITCxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFBQyxLQUFLLEVBQUk7QUFDWixXQUFPO0FBQUksVUFBSSxFQUFDLFNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFzQkEsS0FBdEIsTUFBUDtBQUNILEdBRkgsQ0FERyxDQUZiLEVBT0tMLFdBQVcsSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtBLFdBQUwsQ0FQcEIsRUFRS0QsSUFBSSxJQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSEEsSUFBSSxDQUFDSyxHQUFMLENBQVMsVUFBQUMsS0FBSyxFQUFJO0FBQ2hCLFdBQU87QUFBSSxTQUFHLEVBQUVBLEtBQUssQ0FBQ0MsSUFBTixFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBd0JELEtBQXhCLENBQVA7QUFDSCxHQUZDLENBREcsQ0FSYixDQURKO0FBZ0JIOztLQWxCUVYsSztBQW9CTUEsb0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pdGVtL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgU3R5bGVkIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXG5cbmZ1bmN0aW9uIEluZGV4KHsgaWQsIHRpdGxlLCB0YWdzLCBkYXRhLCBkZXNjcmlwdGlvbiB9KSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVkLmNvbnRhaW5lcn0gPlxuICAgICAgICAgICAgPGgzPnt0aXRsZSB8fCAndGl0bGUnfTwvaDM+XG4gICAgICAgICAgICB7dGFncyAmJiA8dWwgY2xhc3NOYW1lPXtTdHlsZWQudGFnfT5cbiAgICAgICAgICAgICAgICB7IHRhZ3MubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgaHJlZj1cIi8jdGVzdGVcIiA+IHt2YWx1ZX0gPC9saT5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPn1cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8aDQ+e2Rlc2NyaXB0aW9ufTwvaDQ+fVxuICAgICAgICAgICAge2RhdGEgJiYgPHVsPlxuICAgICAgICAgICAgICAgIHsgZGF0YS5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17dmFsdWUudHJpbSgpfT57dmFsdWV9PC9saT5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/item/index.js\n");

/***/ })

})