webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/item/styles.module.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/item/styles.module.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".styles_container__1UZrI {\\n    margin: .5rem;\\n    flex: 1 1;\\n    max-height: 300px;\\n    flex-wrap: wrap;\\n    flex-basis: 40%;\\n    text-align: left;\\n    color: inherit;\\n    text-decoration: none;\\n    border: 1px solid #dfdede;\\n    border-radius: 10px;\\n    transition: color 0.15s ease, border-color 0.15s ease;\\n    animation: styles_card-animation__THQZu 2s linear;\\n    box-shadow: 7px 4px 5px rgba(197, 197, 197, 0.5);\\n    overflow: hidden;\\n}\\n\\n.styles_container__1UZrI:hover,\\n.styles_container__1UZrI:active {\\n    color: #eee;\\n    border-color: #999;\\n    background-color: #333333;\\n    cursor: pointer;\\n}\\n\\n.styles_tag__13DxM {\\n    width: 70px;\\n    height: 50px;\\n    background-color: aquamarine;\\n    float: right;\\n    margin: 10px;\\n}\\n\\n.styles_container__1UZrI h3 {\\n    margin: .5em;\\n    font-size: 2rem;\\n}\\n\\n.styles_container__1UZrI h4 {\\n    margin: .5em;\\n    font-size: 1.5rem;\\n    font-weight: normal;\\n    font-weight: initial;\\n}\\n\\n.styles_container__1UZrI ul {\\n    display: flex;\\n    flex-direction: column;\\n    flex-wrap: wrap;\\n    margin-left: 2em;\\n    overflow: hidden;\\n    list-style: none;\\n    height: 60%;\\n}\\n\\n.styles_container__1UZrI ul>li {\\n    font-size: 1.5rem;\\n    margin: 1px;\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n    .styles_container__1UZrI {\\n        margin: .5rem;\\n        width: 100%;\\n        max-height: 200px;\\n    }\\n}\\n\\n@keyframes styles_card-animation__THQZu {\\n    0% {\\n        opacity: 0%;\\n        font-size: .0em;\\n    }\\n    25% {\\n        opacity: 25%;\\n        font-size: .2em;\\n    }\\n    50% {\\n        opacity: 50%;\\n        font-size: .5em;\\n    }\\n    100% {\\n        opacity: 100%;\\n        font-size: 1em;\\n    }\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/heitorsantos/Documents/projects/my-site/src/components/item/styles.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,aAAa;IACb,SAAO;IACP,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,qBAAqB;IACrB,yBAAyB;IACzB,mBAAmB;IACnB,qDAAqD;IACrD,iDAAmC;IACnC,gDAAgD;IAChD,gBAAgB;AACpB;;AAEA;;IAEI,WAAW;IACX,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,mBAAoB;IAApB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI;QACI,aAAa;QACb,WAAW;QACX,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,WAAW;QACX,eAAe;IACnB;IACA;QACI,YAAY;QACZ,eAAe;IACnB;IACA;QACI,YAAY;QACZ,eAAe;IACnB;IACA;QACI,aAAa;QACb,cAAc;IAClB;AACJ\",\"file\":\"styles.module.css\",\"sourcesContent\":[\".container {\\n    margin: .5rem;\\n    flex: 1;\\n    max-height: 300px;\\n    flex-wrap: wrap;\\n    flex-basis: 40%;\\n    text-align: left;\\n    color: inherit;\\n    text-decoration: none;\\n    border: 1px solid #dfdede;\\n    border-radius: 10px;\\n    transition: color 0.15s ease, border-color 0.15s ease;\\n    animation: card-animation 2s linear;\\n    box-shadow: 7px 4px 5px rgba(197, 197, 197, 0.5);\\n    overflow: hidden;\\n}\\n\\n.container:hover,\\n.container:active {\\n    color: #eee;\\n    border-color: #999;\\n    background-color: #333333;\\n    cursor: pointer;\\n}\\n\\n.tag {\\n    width: 70px;\\n    height: 50px;\\n    background-color: aquamarine;\\n    float: right;\\n    margin: 10px;\\n}\\n\\n.container h3 {\\n    margin: .5em;\\n    font-size: 2rem;\\n}\\n\\n.container h4 {\\n    margin: .5em;\\n    font-size: 1.5rem;\\n    font-weight: initial;\\n}\\n\\n.container ul {\\n    display: flex;\\n    flex-direction: column;\\n    flex-wrap: wrap;\\n    margin-left: 2em;\\n    overflow: hidden;\\n    list-style: none;\\n    height: 60%;\\n}\\n\\n.container ul>li {\\n    font-size: 1.5rem;\\n    margin: 1px;\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n    .container {\\n        margin: .5rem;\\n        width: 100%;\\n        max-height: 200px;\\n    }\\n}\\n\\n@keyframes card-animation {\\n    0% {\\n        opacity: 0%;\\n        font-size: .0em;\\n    }\\n    25% {\\n        opacity: 25%;\\n        font-size: .2em;\\n    }\\n    50% {\\n        opacity: 50%;\\n        font-size: .5em;\\n    }\\n    100% {\\n        opacity: 100%;\\n        font-size: 1em;\\n    }\\n}\"]}]);\n// Exports\nexports.locals = {\n\t\"container\": \"styles_container__1UZrI\",\n\t\"card-animation\": \"styles_card-animation__THQZu\",\n\t\"tag\": \"styles_tag__13DxM\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pdGVtL3N0eWxlcy5tb2R1bGUuY3NzP2QzMDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyw2QkFBNkIsb0JBQW9CLGdCQUFnQix3QkFBd0Isc0JBQXNCLHNCQUFzQix1QkFBdUIscUJBQXFCLDRCQUE0QixnQ0FBZ0MsMEJBQTBCLDREQUE0RCx3REFBd0QsdURBQXVELHVCQUF1QixHQUFHLHNFQUFzRSxrQkFBa0IseUJBQXlCLGdDQUFnQyxzQkFBc0IsR0FBRyx3QkFBd0Isa0JBQWtCLG1CQUFtQixtQ0FBbUMsbUJBQW1CLG1CQUFtQixHQUFHLGlDQUFpQyxtQkFBbUIsc0JBQXNCLEdBQUcsaUNBQWlDLG1CQUFtQix3QkFBd0IsMEJBQTBCLDJCQUEyQixHQUFHLGlDQUFpQyxvQkFBb0IsNkJBQTZCLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1QixrQkFBa0IsR0FBRyxvQ0FBb0Msd0JBQXdCLGtCQUFrQixHQUFHLGdEQUFnRCxnQ0FBZ0Msd0JBQXdCLHNCQUFzQiw0QkFBNEIsT0FBTyxHQUFHLDZDQUE2QyxVQUFVLHNCQUFzQiwwQkFBMEIsT0FBTyxXQUFXLHVCQUF1QiwwQkFBMEIsT0FBTyxXQUFXLHVCQUF1QiwwQkFBMEIsT0FBTyxZQUFZLHdCQUF3Qix5QkFBeUIsT0FBTyxHQUFHLE9BQU8sMklBQTJJLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLGdFQUFnRSxvQkFBb0IsY0FBYyx3QkFBd0Isc0JBQXNCLHNCQUFzQix1QkFBdUIscUJBQXFCLDRCQUE0QixnQ0FBZ0MsMEJBQTBCLDREQUE0RCwwQ0FBMEMsdURBQXVELHVCQUF1QixHQUFHLDBDQUEwQyxrQkFBa0IseUJBQXlCLGdDQUFnQyxzQkFBc0IsR0FBRyxVQUFVLGtCQUFrQixtQkFBbUIsbUNBQW1DLG1CQUFtQixtQkFBbUIsR0FBRyxtQkFBbUIsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQixtQkFBbUIsd0JBQXdCLDJCQUEyQixHQUFHLG1CQUFtQixvQkFBb0IsNkJBQTZCLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1QixrQkFBa0IsR0FBRyxzQkFBc0Isd0JBQXdCLGtCQUFrQixHQUFHLGdEQUFnRCxrQkFBa0Isd0JBQXdCLHNCQUFzQiw0QkFBNEIsT0FBTyxHQUFHLCtCQUErQixVQUFVLHNCQUFzQiwwQkFBMEIsT0FBTyxXQUFXLHVCQUF1QiwwQkFBMEIsT0FBTyxXQUFXLHVCQUF1QiwwQkFBMEIsT0FBTyxZQUFZLHdCQUF3Qix5QkFBeUIsT0FBTyxHQUFHLEdBQUc7QUFDdG1JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9pdGVtL3N0eWxlcy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlc19jb250YWluZXJfXzFVWnJJIHtcXG4gICAgbWFyZ2luOiAuNXJlbTtcXG4gICAgZmxleDogMSAxO1xcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWJhc2lzOiA0MCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZmRlZGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xcbiAgICBhbmltYXRpb246IHN0eWxlc19jYXJkLWFuaW1hdGlvbl9fVEhRWnUgMnMgbGluZWFyO1xcbiAgICBib3gtc2hhZG93OiA3cHggNHB4IDVweCByZ2JhKDE5NywgMTk3LCAxOTcsIDAuNSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zdHlsZXNfY29udGFpbmVyX18xVVpySTpob3ZlcixcXG4uc3R5bGVzX2NvbnRhaW5lcl9fMVVackk6YWN0aXZlIHtcXG4gICAgY29sb3I6ICNlZWU7XFxuICAgIGJvcmRlci1jb2xvcjogIzk5OTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3R5bGVzX3RhZ19fMTNEeE0ge1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnN0eWxlc19jb250YWluZXJfXzFVWnJJIGgzIHtcXG4gICAgbWFyZ2luOiAuNWVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5zdHlsZXNfY29udGFpbmVyX18xVVpySSBoNCB7XFxuICAgIG1hcmdpbjogLjVlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xcbn1cXG5cXG4uc3R5bGVzX2NvbnRhaW5lcl9fMVVackkgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1hcmdpbi1sZWZ0OiAyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGhlaWdodDogNjAlO1xcbn1cXG5cXG4uc3R5bGVzX2NvbnRhaW5lcl9fMVVackkgdWw+bGkge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAxcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5zdHlsZXNfY29udGFpbmVyX18xVVpySSB7XFxuICAgICAgICBtYXJnaW46IC41cmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHN0eWxlc19jYXJkLWFuaW1hdGlvbl9fVEhRWnUge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjBlbTtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgICAgb3BhY2l0eTogMjUlO1xcbiAgICAgICAgZm9udC1zaXplOiAuMmVtO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBvcGFjaXR5OiA1MCU7XFxuICAgICAgICBmb250LXNpemU6IC41ZW07XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2hlaXRvcnNhbnRvcy9Eb2N1bWVudHMvcHJvamVjdHMvbXktc2l0ZS9zcmMvY29tcG9uZW50cy9pdGVtL3N0eWxlcy5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLFNBQU87SUFDUCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHFEQUFxRDtJQUNyRCxpREFBbUM7SUFDbkMsZ0RBQWdEO0lBQ2hELGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW9CO0lBQXBCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixXQUFXO1FBQ1gsaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO1FBQ1osZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGFBQWE7UUFDYixjQUFjO0lBQ2xCO0FBQ0pcIixcImZpbGVcIjpcInN0eWxlcy5tb2R1bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgICBtYXJnaW46IC41cmVtO1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWJhc2lzOiA0MCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZmRlZGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xcbiAgICBhbmltYXRpb246IGNhcmQtYW5pbWF0aW9uIDJzIGxpbmVhcjtcXG4gICAgYm94LXNoYWRvdzogN3B4IDRweCA1cHggcmdiYSgxOTcsIDE5NywgMTk3LCAwLjUpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY29udGFpbmVyOmhvdmVyLFxcbi5jb250YWluZXI6YWN0aXZlIHtcXG4gICAgY29sb3I6ICNlZWU7XFxuICAgIGJvcmRlci1jb2xvcjogIzk5OTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFnIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5jb250YWluZXIgaDMge1xcbiAgICBtYXJnaW46IC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciBoNCB7XFxuICAgIG1hcmdpbjogLjVlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xcbn1cXG5cXG4uY29udGFpbmVyIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB1bD5saSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW46IDFweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBtYXJnaW46IC41cmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNhcmQtYW5pbWF0aW9uIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMCU7XFxuICAgICAgICBmb250LXNpemU6IC4wZW07XFxuICAgIH1cXG4gICAgMjUlIHtcXG4gICAgICAgIG9wYWNpdHk6IDI1JTtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjJlbTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgb3BhY2l0eTogNTAlO1xcbiAgICAgICAgZm9udC1zaXplOiAuNWVtO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICB9XFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlc19jb250YWluZXJfXzFVWnJJXCIsXG5cdFwiY2FyZC1hbmltYXRpb25cIjogXCJzdHlsZXNfY2FyZC1hbmltYXRpb25fX1RIUVp1XCIsXG5cdFwidGFnXCI6IFwic3R5bGVzX3RhZ19fMTNEeE1cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/item/styles.module.css\n");

/***/ })

})