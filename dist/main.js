/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto+Mono);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Antonio);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Karla);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    font-family: \"Karla\";\n}\n\nbody {\n    background-color: lightgrey;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: space-between;\n    gap: 10px;\n}\n\n.header-button {\n    border: none;\n    border-radius: 5px;\n\n    font-family: \"Roboto Mono\";\n    font-size: 1rem;\n\n    padding: 20px 40px;\n}\n\n.header-button:hover {\n    scale: 90%;\n}\n\n.input-field {\n    display: flex;\n    justify-content: space-between;\n}\n\n.button-close {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    background-color: rgb(194, 27, 27);\n    color: white;\n    font-size: 2rem;\n    font-weight: 700;\n\n    height: 50px;\n    width: 50px;\n\n    border-top-left-radius: 25px;\n    border-bottom-right-radius: 10px;\n}\n\n.sidebar-line {\n    display: flex;\n    align-items: center;\n    font-size: 1.25rem;\n\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n\n    cursor: pointer;\n}\n\n.sidebar-line:hover {\n    scale: 90%;\n}\n\n.projects-closed {\n    display: none;\n}\n\n.proj-item {\n    border: none;\n    font-size: 1.25rem;\n    font-family: \"Roboto Mono\";\n    background-color: rgba(0, 0, 0, 0);\n\n    display: flex;\n    align-items: center;\n    padding-left: 20%;\n    gap: 5px;\n}\n\n.proj-pic {\n    height: 2rem;\n}\n\n.popup-screen {\n    background-color: rgba(0, 0, 0, 0.5);\n\n    height: 100vh;\n    width: 100vw;\n\n    position: absolute;\n    z-index: 1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    animation: prompt-spawn;\n    animation-duration: 0.25s;\n    animation-fill-mode: forwards;\n}\n\n.popup-prompt {\n    background-color: white;\n    border-radius: 25px;\n    box-shadow: 5px 5px 20px #000000;\n\n    height: 250px;\n    width: 500px;\n\n    animation: header-spawn;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 1fr 2px 4fr;\n    grid-template-columns: 1fr 2px 4fr;\n    height: 100vh;\n    width: 100vw;\n\n    position: absolute;\n    z-index: 0;\n}\n\n#header {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n\n    background-color: lightgrey;\n    position: relative;\n    transform: translateY(-500px);\n    z-index: 2;\n    padding: 5px 0 5px 0;\n\n    animation: header-spawn;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n@keyframes header-spawn {\n    0% {\n        transform: translateY(-500px);\n    } 50% {\n        transform: translateY(20px);\n    } 100% {\n        transform: translateY(0px);\n    }\n}\n\n#header-title {\n    font-size: 4rem;\n}\n\n#header-buttons {\n    display: flex;\n    gap: 20px;\n}\n\n#login-button {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n#menu-button {\n    padding: 20px 40px;\n    transition: 0.25s;\n}\n\n#menu-button:hover {\n    padding: 20px 120px;\n    transition: 0.25s;\n}\n\n@keyframes prompt-spawn {\n    0% {\n        opacity: 0%;\n    } 100% {\n        opacity: 100%;\n    }\n}\n\n#sidebar {\n    grid-row: 3 / 4;\n    grid-column: 1 / 2;\n\n    background-color: lightgrey;\n    position: relative;\n    z-index: 1;\n    padding: 20px;\n\n    animation: sidebar-spawn;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n\n    display: grid;\n    grid-template-rows: repeat(4, minmax(50px, 80px)) auto minmax(50px, 80px);\n    justify-content: center;\n}\n\n@keyframes sidebar-spawn {\n    0% {\n        transform: translateX(-500px);\n    }\n    50% {\n        transform: translateX(20px);\n    }\n    100% {\n        transform: translateX(0px);\n    }\n}\n\n#sidebar-inbox {\n    grid-row: 1 / 2;\n}\n\n#sidebar-today {\n    grid-row: 2 / 3;\n}\n\n#sidebar-calendar {\n    grid-row: 3 / 4;\n}\n\n#sidebar-projects {\n    grid-row: 4 / 5;\n}\n\n#projects-list {\n    grid-row: 5 / 6;\n}\n\n#sidebar-add {\n    grid-row: 6 / 7;\n}\n\n#content-wrapper {\n    grid-row: 3 / 4;\n    grid-column: 3 / 4;\n\n    background-color: white;\n    position: relative;\n    z-index: 0;\n\n    animation: list-spawn;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#list {\n    animation: list-spawn;\n    animation-duration: 0.5s;\n}\n\n@keyframes list-spawn {\n    from {\n        transform: translateY(1000px);\n    }\n    to {\n        transform: translateY(0px);\n    }\n}\n\n#add-task {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n\n    font-size: 1.25rem;\n    border: none;\n    padding: 10px 20px;\n}\n\n#add-task > img {\n    height: 36px;\n}\n\n#reset-layout {\n    position: absolute;\n    bottom: 0%;\n    right: 0%;\n\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n    \n    transition: 0.25s;\n}\n\n#reset-layout:hover {\n    cursor: pointer;\n    bottom: 2%;\n    right: 2%;\n    scale: 120%;\n}\n\n#gutter-col {\n    grid-row: 3 / 4;\n    grid-column: 2 / 3;\n    justify-self: center;\n\n    position: relative;\n    z-index: 1;\n\n    background-color: black;\n    width: 2px;\n    transition: 0.5s;\n\n    animation: sidebar-spawn;\n    animation-duration: 1s;\n}\n\n#gutter-col:hover {\n    cursor: col-resize;\n    width: 30px;\n}\n\n#gutter-row {\n    grid-row: 2 / 3;\n    grid-column: 1 / -1;\n    align-self: center;\n\n    position: relative;\n    z-index: 2;\n\n    background-color: black;\n    height: 2px;\n    transition: 0.5s;\n\n    animation: header-spawn;\n    animation-duration: 1s;\n}\n\n#gutter-row:hover {\n    cursor: row-resize;\n    height: 30px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAKA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;;IAEtB,oBAAoB;AACxB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,0BAA0B;IAC1B,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,kBAAkB;;IAElB,0BAA0B;IAC1B,eAAe;;IAEf,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;;IAEP,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,gBAAgB;;IAEhB,YAAY;IACZ,WAAW;;IAEX,4BAA4B;IAC5B,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;;IAElB,YAAY;IACZ,kCAAkC;;IAElC,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,0BAA0B;IAC1B,kCAAkC;;IAElC,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,QAAQ;AACZ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oCAAoC;;IAEpC,aAAa;IACb,YAAY;;IAEZ,kBAAkB;IAClB,UAAU;;IAEV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,uBAAuB;IACvB,yBAAyB;IACzB,6BAA6B;AACjC;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,gCAAgC;;IAEhC,aAAa;IACb,YAAY;;IAEZ,uBAAuB;IACvB,wBAAwB;IACxB,6BAA6B;;IAE7B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,kCAAkC;IAClC,aAAa;IACb,YAAY;;IAEZ,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,mBAAmB;;IAEnB,2BAA2B;IAC3B,kBAAkB;IAClB,6BAA6B;IAC7B,UAAU;IACV,oBAAoB;;IAEpB,uBAAuB;IACvB,sBAAsB;IACtB,6BAA6B;;IAE7B,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI;QACI,6BAA6B;IACjC,EAAE;QACE,2BAA2B;IAC/B,EAAE;QACE,0BAA0B;IAC9B;AACJ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI;QACI,WAAW;IACf,EAAE;QACE,aAAa;IACjB;AACJ;;AAEA;IACI,eAAe;IACf,kBAAkB;;IAElB,2BAA2B;IAC3B,kBAAkB;IAClB,UAAU;IACV,aAAa;;IAEb,wBAAwB;IACxB,sBAAsB;IACtB,6BAA6B;;IAE7B,aAAa;IACb,yEAAyE;IACzE,uBAAuB;AAC3B;;AAEA;IACI;QACI,6BAA6B;IACjC;IACA;QACI,2BAA2B;IAC/B;IACA;QACI,0BAA0B;IAC9B;AACJ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,kBAAkB;;IAElB,uBAAuB;IACvB,kBAAkB;IAClB,UAAU;;IAEV,qBAAqB;IACrB,wBAAwB;IACxB,6BAA6B;;IAE7B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,wBAAwB;AAC5B;;AAEA;IACI;QACI,6BAA6B;IACjC;IACA;QACI,0BAA0B;IAC9B;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;;IAET,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,SAAS;;IAET,YAAY;IACZ,kCAAkC;;IAElC,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,SAAS;IACT,WAAW;AACf;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,oBAAoB;;IAEpB,kBAAkB;IAClB,UAAU;;IAEV,uBAAuB;IACvB,UAAU;IACV,gBAAgB;;IAEhB,wBAAwB;IACxB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,kBAAkB;;IAElB,kBAAkB;IAClB,UAAU;;IAEV,uBAAuB;IACvB,WAAW;IACX,gBAAgB;;IAEhB,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono\");\n@import url(\"https://fonts.googleapis.com/css?family=Antonio\");\n@import url(\"https://fonts.googleapis.com/css?family=Karla\");\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    font-family: \"Karla\";\n}\n\nbody {\n    background-color: lightgrey;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: space-between;\n    gap: 10px;\n}\n\n.header-button {\n    border: none;\n    border-radius: 5px;\n\n    font-family: \"Roboto Mono\";\n    font-size: 1rem;\n\n    padding: 20px 40px;\n}\n\n.header-button:hover {\n    scale: 90%;\n}\n\n.input-field {\n    display: flex;\n    justify-content: space-between;\n}\n\n.button-close {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    background-color: rgb(194, 27, 27);\n    color: white;\n    font-size: 2rem;\n    font-weight: 700;\n\n    height: 50px;\n    width: 50px;\n\n    border-top-left-radius: 25px;\n    border-bottom-right-radius: 10px;\n}\n\n.sidebar-line {\n    display: flex;\n    align-items: center;\n    font-size: 1.25rem;\n\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n\n    cursor: pointer;\n}\n\n.sidebar-line:hover {\n    scale: 90%;\n}\n\n.projects-closed {\n    display: none;\n}\n\n.proj-item {\n    border: none;\n    font-size: 1.25rem;\n    font-family: \"Roboto Mono\";\n    background-color: rgba(0, 0, 0, 0);\n\n    display: flex;\n    align-items: center;\n    padding-left: 20%;\n    gap: 5px;\n}\n\n.proj-pic {\n    height: 2rem;\n}\n\n.popup-screen {\n    background-color: rgba(0, 0, 0, 0.5);\n\n    height: 100vh;\n    width: 100vw;\n\n    position: absolute;\n    z-index: 1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    animation: prompt-spawn;\n    animation-duration: 0.25s;\n    animation-fill-mode: forwards;\n}\n\n.popup-prompt {\n    background-color: white;\n    border-radius: 25px;\n    box-shadow: 5px 5px 20px #000000;\n\n    height: 250px;\n    width: 500px;\n\n    animation: header-spawn;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 1fr 2px 4fr;\n    grid-template-columns: 1fr 2px 4fr;\n    height: 100vh;\n    width: 100vw;\n\n    position: absolute;\n    z-index: 0;\n}\n\n#header {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n\n    background-color: lightgrey;\n    position: relative;\n    transform: translateY(-500px);\n    z-index: 2;\n    padding: 5px 0 5px 0;\n\n    animation: header-spawn;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n@keyframes header-spawn {\n    0% {\n        transform: translateY(-500px);\n    } 50% {\n        transform: translateY(20px);\n    } 100% {\n        transform: translateY(0px);\n    }\n}\n\n#header-title {\n    font-size: 4rem;\n}\n\n#header-buttons {\n    display: flex;\n    gap: 20px;\n}\n\n#login-button {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n#menu-button {\n    padding: 20px 40px;\n    transition: 0.25s;\n}\n\n#menu-button:hover {\n    padding: 20px 120px;\n    transition: 0.25s;\n}\n\n@keyframes prompt-spawn {\n    0% {\n        opacity: 0%;\n    } 100% {\n        opacity: 100%;\n    }\n}\n\n#sidebar {\n    grid-row: 3 / 4;\n    grid-column: 1 / 2;\n\n    background-color: lightgrey;\n    position: relative;\n    z-index: 1;\n    padding: 20px;\n\n    animation: sidebar-spawn;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n\n    display: grid;\n    grid-template-rows: repeat(4, minmax(50px, 80px)) auto minmax(50px, 80px);\n    justify-content: center;\n}\n\n@keyframes sidebar-spawn {\n    0% {\n        transform: translateX(-500px);\n    }\n    50% {\n        transform: translateX(20px);\n    }\n    100% {\n        transform: translateX(0px);\n    }\n}\n\n#sidebar-inbox {\n    grid-row: 1 / 2;\n}\n\n#sidebar-today {\n    grid-row: 2 / 3;\n}\n\n#sidebar-calendar {\n    grid-row: 3 / 4;\n}\n\n#sidebar-projects {\n    grid-row: 4 / 5;\n}\n\n#projects-list {\n    grid-row: 5 / 6;\n}\n\n#sidebar-add {\n    grid-row: 6 / 7;\n}\n\n#content-wrapper {\n    grid-row: 3 / 4;\n    grid-column: 3 / 4;\n\n    background-color: white;\n    position: relative;\n    z-index: 0;\n\n    animation: list-spawn;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#list {\n    animation: list-spawn;\n    animation-duration: 0.5s;\n}\n\n@keyframes list-spawn {\n    from {\n        transform: translateY(1000px);\n    }\n    to {\n        transform: translateY(0px);\n    }\n}\n\n#add-task {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n\n    font-size: 1.25rem;\n    border: none;\n    padding: 10px 20px;\n}\n\n#add-task > img {\n    height: 36px;\n}\n\n#reset-layout {\n    position: absolute;\n    bottom: 0%;\n    right: 0%;\n\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n    \n    transition: 0.25s;\n}\n\n#reset-layout:hover {\n    cursor: pointer;\n    bottom: 2%;\n    right: 2%;\n    scale: 120%;\n}\n\n#gutter-col {\n    grid-row: 3 / 4;\n    grid-column: 2 / 3;\n    justify-self: center;\n\n    position: relative;\n    z-index: 1;\n\n    background-color: black;\n    width: 2px;\n    transition: 0.5s;\n\n    animation: sidebar-spawn;\n    animation-duration: 1s;\n}\n\n#gutter-col:hover {\n    cursor: col-resize;\n    width: 30px;\n}\n\n#gutter-row {\n    grid-row: 2 / 3;\n    grid-column: 1 / -1;\n    align-self: center;\n\n    position: relative;\n    z-index: 2;\n\n    background-color: black;\n    height: 2px;\n    transition: 0.5s;\n\n    animation: header-spawn;\n    animation-duration: 1s;\n}\n\n#gutter-row:hover {\n    cursor: row-resize;\n    height: 30px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/calendar.js":
/*!*************************!*\
  !*** ./src/calendar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calendar)
/* harmony export */ });
function Calendar(projectData) {
    if (document.getElementById("list-content")) {
        document.getElementById("content-wrapper").firstChild.remove();
    }

    const calendar = document.createElement("div");
    calendar.setAttribute("id", "list-content");

    const title = document.createElement("h1");
    title.setAttribute("id", "list-title");
    title.textContent = "Calendar";
    calendar.appendChild(title);

    const list = document.getElementById("content-wrapper");
    list.insertBefore(calendar, list.children[0]);
}

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var _inbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.js */ "./src/inbox.js");
/* harmony import */ var _today_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today.js */ "./src/today.js");
/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.js */ "./src/calendar.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ "./src/task.js");





function Content(projectData) {
    const contentWrap = document.createElement("div");
    contentWrap.setAttribute("id", "content-wrapper");

    const resetLayout = document.createElement("button");
    resetLayout.setAttribute("id", "reset-layout");
    resetLayout.setAttribute("title", "Reset Layout");
    const resetPic = document.createElement("img");
    resetPic.setAttribute("src", "../src/images/team_dashboard.png");
    resetLayout.appendChild(resetPic);
    contentWrap.appendChild(resetLayout);
    document.getElementById("content").appendChild(contentWrap);

    (0,_inbox_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectData);

    document.getElementById("sidebar-inbox").addEventListener("click", function() {
        (0,_inbox_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectData);
    });

    document.getElementById("sidebar-today").addEventListener("click", function() {
        (0,_today_js__WEBPACK_IMPORTED_MODULE_1__["default"])(projectData);
    });

    document.getElementById("sidebar-calendar").addEventListener("click", function() {
        (0,_calendar_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projectData);
    });

    document.getElementById("reset-layout").addEventListener("click", function() {
        document.getElementById("content").style.gridTemplateColumns = "";
        document.getElementById("content").style.gridTemplateRows = "";
    });

    document.getElementById("add-task").addEventListener("click", function() {
        (0,_task_js__WEBPACK_IMPORTED_MODULE_3__["default"])(projectData);
    });
}

/***/ }),

/***/ "./src/gutters.js":
/*!************************!*\
  !*** ./src/gutters.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gutters)
/* harmony export */ });
function Gutters() {
    const gutterCol = document.createElement("div");
    gutterCol.id = "gutter-col";
    document.getElementById("content").appendChild(gutterCol);

    const gutterRow = document.createElement("div");
    gutterRow.id = "gutter-row";
    document.getElementById("content").appendChild(gutterRow);
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
function Header() {
    const header = document.createElement("div");
    header.setAttribute("id", "header");

    const headerTitles = document.createElement("div");
    headerTitles.setAttribute("id", "header-titles");

    const headerTitle = document.createElement("h1");
    headerTitle.setAttribute("id", "header-title");
    headerTitle.innerHTML = "DO_IT";
    headerTitles.appendChild(headerTitle);

    const subTitle = document.createElement("h2");
    subTitle.textContent = "The to-do app for managing your life";
    headerTitles.appendChild(subTitle);
    header.appendChild(headerTitles);

    const headerButtons = document.createElement("div");
    headerButtons.setAttribute("id", "header-buttons");

    const loginButton = document.createElement("button");
    loginButton.setAttribute("id", "login-button");
    loginButton.setAttribute("class", "header-button");

    const loginPic = document.createElement("img");
    loginPic.setAttribute("src", "../src/images/account_circle.png");
    loginButton.appendChild(loginPic);

    const loginText = document.createElement("p");
    loginText.textContent = "Sign In";
    loginButton.appendChild(loginText);
    headerButtons.appendChild(loginButton);

    const menuImg = document.createElement("img");
    menuImg.setAttribute("src", "../src/images/menu.png");

    const menuButton = document.createElement("button");
    menuButton.setAttribute("id", "menu-button");
    menuButton.setAttribute("class", "header-button");
    menuButton.appendChild(menuImg);
    headerButtons.appendChild(menuButton);
    header.appendChild(headerButtons);

    document.getElementById("content").appendChild(header);
}

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Inbox)
/* harmony export */ });
function Inbox(projectData) {
    if (document.getElementById("list-content")) {
        document.getElementById("content-wrapper").firstChild.remove();
    }

    const inbox = document.createElement("div");
    inbox.setAttribute("id", "list-content");

    const title = document.createElement("h1");
    title.setAttribute("id", "list-title");
    title.textContent = "Inbox";
    inbox.appendChild(title);

    const taskContent = document.createElement("div");
    taskContent.setAttribute("class", "tasks");

    for (const project of projectData) {
        if (project.selected) {
            for (const task of project.tasks) {
                const taskDiv = document.createElement("div");
                taskDiv.setAttribute("class", "task");
                
                const taskText = document.createElement("p");
                taskText.textContent = task;
                taskDiv.appendChild(taskText);

                taskContent.appendChild(taskDiv);
            }
        }
    }

    inbox.appendChild(taskContent);

    const addTask = document.createElement("button");
    addTask.setAttribute("id", "add-task");

    const addTaskPic = document.createElement("img");
    addTaskPic.setAttribute("src", "../src/images/add_task.png");
    addTask.appendChild(addTaskPic);

    const addTaskText = document.createElement("p");
    addTaskText.textContent = "Add New Task";
    addTask.appendChild(addTaskText);
    inbox.appendChild(addTask);

    const content = document.getElementById("content-wrapper");
    content.insertBefore(inbox, content.children[0]);
}

/***/ }),

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
function Login(userData) {
    const loginScreen = document.createElement("div");
    loginScreen.setAttribute("id", "login-screen");
    loginScreen.setAttribute("class", "popup-screen");

    const loginPrompt = document.createElement("div");
    loginPrompt.setAttribute("id", "login-prompt");
    loginPrompt.setAttribute("class", "popup-prompt");

    const loginHeader = document.createElement("h1");
    loginHeader.setAttribute("id", "login-header");
    loginHeader.textContent = "Sign in to Do_It";
    loginPrompt.appendChild(loginHeader);

    const form = document.createElement("form");

    const logName = document.createElement("div");
    logName.className = "input-field";

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    nameLabel.setAttribute("for", "login-name");
    logName.appendChild(nameLabel);

    const nameField = document.createElement("input");
    nameField.setAttribute("id", "login-name");
    nameField.setAttribute("name", "login-name");
    logName.appendChild(nameField);
    form.appendChild(logName);

    const logPass = document.createElement("div");
    logPass.className = "login-field";

    const passLabel = document.createElement("label");
    passLabel.textContent = "Password:";
    passLabel.setAttribute("for", "login-pass");
    logPass.appendChild(passLabel);

    const passField = document.createElement("input");
    passField.setAttribute("id", "login-pass");
    passField.setAttribute("name", "login-pass");
    logPass.appendChild(passField);
    form.appendChild(logPass);

    const loginSubmit = document.createElement("input");
    loginSubmit.setAttribute("id", "login-submit");
    loginSubmit.setAttribute("type", "submit");
    loginSubmit.setAttribute("value", "LOG IN");
    form.appendChild(loginSubmit);
    loginPrompt.appendChild(form);

    const createAccount = document.createElement("p");
    createAccount.innerHTML = "New user? Create an account here!";
    loginPrompt.appendChild(createAccount);

    const close = document.createElement("button");
    close.innerHTML = "X";
    close.id = "close-login";
    close.className = "button-close";
    loginPrompt.appendChild(close);

    loginScreen.appendChild(loginPrompt);

    document.getElementById("login-button").addEventListener("click", function() {
        document.body.appendChild(loginScreen);

        document.getElementById("login-submit").addEventListener("click", function(e) {
            e.preventDefault();

            const userEntered = document.getElementById("login-name").value;
            const userCheck = false;

            for (const user of userData) {
                if (user.name === userEntered) {
                    document.getElementById("login-button").children[1].textContent = `Hello, ${userEntered}`;
                    document.getElementById("login-screen").remove();
                    userCheck = true;
                    break;
                }
            }

            if (!userCheck) {
                const prompt = document.getElementById("login-prompt");
                const error = document.createElement("p");
                error.textContent = "This user does not exist";
                prompt.insertBefore(error, prompt.children[2]);
            }

            document.getElementById("login-name").value = "";
            document.getElementById("login-pass").value = "";
        });

        document.getElementById("close-login").addEventListener("click", function() {
            document.getElementById("login-name").value = "";
            document.getElementById("login-pass").value = "";
            document.getElementById("login-screen").remove();
        });
    });
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProject)
/* harmony export */ });
function addProject(projectData) {
    const projScreen = document.createElement("div");
    projScreen.setAttribute("id", "proj-screen");
    projScreen.setAttribute("class", "popup-screen");

    const projPrompt = document.createElement("div");
    projPrompt.setAttribute("id", "proj-prompt");
    projPrompt.setAttribute("class", "popup-prompt");

    const form = document.createElement("form");

    const logProj = document.createElement("div");
    logProj.setAttribute("class", "input-field");

    const projLabel = document.createElement("label");
    projLabel.setAttribute("for", "proj-name");
    projLabel.textContent = "Project Name:";
    logProj.appendChild(projLabel);

    const projField = document.createElement("input");
    projField.setAttribute("id", "proj-name");
    projField.setAttribute("name", "proj-name");
    logProj.appendChild(projField);
    form.appendChild(logProj);

    const projSubmit = document.createElement("input");
    projSubmit.setAttribute("id", "proj-submit");
    projSubmit.setAttribute("type", "submit");
    projSubmit.setAttribute("value", "ADD PROJECT");
    form.appendChild(projSubmit);
    projPrompt.appendChild(form);

    const close = document.createElement("button");
    close.innerHTML = "X";
    close.id = "close-proj";
    close.className = "button-close";
    projPrompt.appendChild(close);
    projScreen.appendChild(projPrompt);

    document.getElementById("sidebar-add").addEventListener("click", function() {
        document.body.appendChild(projScreen);

        document.getElementById("proj-submit").addEventListener("click", function(e) {
            e.preventDefault();

            const projName = document.getElementById("proj-name").value;
            projectData.push(new Project(projName));

            const newProj = document.createElement("button");
            newProj.setAttribute("id", projName);
            newProj.setAttribute("class", "proj-item");

            const newProjPic = document.createElement("img");
            newProjPic.setAttribute("src", "../src/images/folder.png")
            newProjPic.setAttribute("class", "proj-pic");
            newProj.appendChild(newProjPic);

            const newProjName = document.createElement("h4");
            newProjName.innerHTML = projName;
            newProj.appendChild(newProjName);

            const projectsList = document.getElementById("projects-list");
            projectsList.appendChild(newProj);

            document.getElementById("proj-screen").remove();
        });

        document.getElementById("close-proj").addEventListener("click", function() {
            document.getElementById("proj-screen").remove();
        });
    });

    class Project {
        constructor(name) {
            this.name = name;
            this.selected = true;
            this.tasks = [];
        }
    }

    return projectData;
}

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebar)
/* harmony export */ });
function Sidebar() {
    const sidebar = document.createElement("div");
    sidebar.setAttribute("id", "sidebar");

    const inbox = document.createElement("button");
    inbox.setAttribute("id", "sidebar-inbox");
    inbox.setAttribute("class", "sidebar-line");

    const inboxPic = document.createElement("img");
    inboxPic.setAttribute("src", "../src/images/inbox.png");
    inbox.appendChild(inboxPic);

    const inboxText = document.createElement("h3");
    inboxText.textContent = "Inbox";
    inbox.appendChild(inboxText);
    sidebar.appendChild(inbox);

    const today = document.createElement("button");
    today.setAttribute("id", "sidebar-today");
    today.setAttribute("class", "sidebar-line");

    const todayPic = document.createElement("img");
    todayPic.setAttribute("src", "../src/images/today.png");
    today.appendChild(todayPic);

    const todayText = document.createElement("h3");
    todayText.textContent = "Today";
    today.appendChild(todayText);
    sidebar.appendChild(today);

    const calendar = document.createElement("button");
    calendar.setAttribute("id", "sidebar-calendar");
    calendar.setAttribute("class", "sidebar-line");

    const calendarPic = document.createElement("img");
    calendarPic.setAttribute("src", "../src/images/calendar.png");
    calendar.appendChild(calendarPic);

    const calendarText = document.createElement("h3");
    calendarText.textContent = "Calendar";
    calendar.appendChild(calendarText);
    sidebar.appendChild(calendar);

    const projects = document.createElement("button");
    projects.setAttribute("id", "sidebar-projects");
    projects.setAttribute("class", "sidebar-line");

    const projectsPic = document.createElement("img");
    projectsPic.setAttribute("src", "../src/images/arrow_circle_right.png");
    projectsPic.setAttribute("id", "projects-pic");
    projects.appendChild(projectsPic);

    const projectsText = document.createElement("h3");
    projectsText.textContent = "Projects";
    projects.appendChild(projectsText);
    sidebar.appendChild(projects);

    const projectsList = document.createElement("div");
    projectsList.setAttribute("id", "projects-list");
    sidebar.appendChild(projectsList);

    const addProj = document.createElement("button");
    addProj.setAttribute("id", "sidebar-add");
    addProj.setAttribute("class", "sidebar-line");

    const addProjPic = document.createElement("img");
    addProjPic.setAttribute("src", "../src/images/folder_new.png");
    addProj.appendChild(addProjPic);

    const addProjText = document.createElement("h3");
    addProjText.textContent = "Add Project";
    addProj.appendChild(addProjText);
    sidebar.appendChild(addProj);

    document.getElementById("content").appendChild(sidebar);

    document.getElementById("sidebar-projects").addEventListener("click", function() {
        const state = document.getElementById("projects-pic").src;
        const regEx = /expand_circle_down.png$/;

        if (regEx.test(state)) {
            document.getElementById("projects-list").classList.add("projects-closed");
            document.getElementById("projects-pic").setAttribute("src", "../src/images/arrow_circle_right.png");
        } else {
            document.getElementById("projects-list").classList.remove("projects-closed");
            document.getElementById("projects-pic").setAttribute("src", "../src/images/expand_circle_down.png");
        }
    });
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
function Task(projectData) {
    const taskScreen = document.createElement("div");
    taskScreen.setAttribute("id", "task-screen");
    taskScreen.setAttribute("class", "popup-screen");

    const taskPrompt = document.createElement("div");
    taskPrompt.setAttribute("id", "task-prompt");
    taskPrompt.setAttribute("class", "popup-prompt");

    const form = document.createElement("form");

    const logTask = document.createElement("div");
    logTask.setAttribute("class", "input-field");

    const taskLabel = document.createElement("label");
    taskLabel.setAttribute("for", "task-name");
    taskLabel.textContent = "Task:";
    logTask.appendChild(taskLabel);

    const taskField = document.createElement("input");
    taskField.setAttribute("id", "task-name");
    taskField.setAttribute("name", "task-name");
    logTask.appendChild(taskField);
    form.appendChild(logTask);

    const logProj = document.createElement("div");
    logProj.setAttribute("class", "input-field");

    const projLabel = document.createElement("label");
    projLabel.setAttribute("for", "proj-name");
    projLabel.textContent = "Project:";
    logProj.appendChild(projLabel);

    const projField = document.createElement("select");
    projField.setAttribute("id", "proj-name");
    projField.setAttribute("name", "proj-name");

    for (const project of projectData) {
        const option = document.createElement("option");
        option.value = project.name;
        option.textContent = project.name;

        projField.appendChild(option);
    }

    logProj.appendChild(projField);
    form.appendChild(logProj);

    const taskSubmit = document.createElement("input");
    taskSubmit.setAttribute("id", "task-submit");
    taskSubmit.setAttribute("type", "submit");
    taskSubmit.setAttribute("value", "ADD TASK");
    form.appendChild(taskSubmit);
    taskPrompt.appendChild(form);

    const close = document.createElement("button");
    close.innerHTML = "X";
    close.id = "close-task";
    close.className = "button-close";
    taskPrompt.appendChild(close);
    taskScreen.appendChild(taskPrompt);

    document.body.appendChild(taskScreen);

    document.getElementById("task-submit").addEventListener("click", function(e) {
        e.preventDefault();

        for (const project of projectData) {
            if (project.name === document.getElementById("proj-name").value) {
                project["tasks"].push(document.getElementById("task-name").value);
                break;
            }
        }

        document.getElementById("task-screen").remove();
    });

    document.getElementById("close-task").addEventListener("click", function() {
        document.getElementById("task-screen").remove();
    });
}

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Today)
/* harmony export */ });
function Today(projectData) {
    if (document.getElementById("list-content")) {
        document.getElementById("content-wrapper").firstChild.remove();
    }

    const today = document.createElement("div");
    today.setAttribute("id", "list-content");

    const title = document.createElement("h1");
    title.setAttribute("id", "list-title");
    title.textContent = "Today";
    today.appendChild(title);

    const list = document.getElementById("content-wrapper");
    list.insertBefore(today, list.children[0]);
}

/***/ }),

/***/ "./node_modules/split-grid/dist/split-grid.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/split-grid/dist/split-grid.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var numeric = function (value, unit) { return Number(value.slice(0, -1 * unit.length)); };

var parseValue = function (value) {
    if (value.endsWith('px'))
        { return { value: value, type: 'px', numeric: numeric(value, 'px') } }
    if (value.endsWith('fr'))
        { return { value: value, type: 'fr', numeric: numeric(value, 'fr') } }
    if (value.endsWith('%'))
        { return { value: value, type: '%', numeric: numeric(value, '%') } }
    if (value === 'auto') { return { value: value, type: 'auto' } }
    return null
};

var parse = function (rule) { return rule.split(' ').map(parseValue); };

var getSizeAtTrack = function (index, tracks, gap, end) {
    if ( gap === void 0 ) { gap = 0; }
    if ( end === void 0 ) { end = false; }

    var newIndex = end ? index + 1 : index;
    var trackSum = tracks
        .slice(0, newIndex)
        .reduce(function (accum, value) { return accum + value.numeric; }, 0);
    var gapSum = gap ? index * gap : 0;

    return trackSum + gapSum
};

var getStyles = function (rule, ownRules, matchedRules) { return ownRules.concat( matchedRules)
        .map(function (r) { return r.style[rule]; })
        .filter(function (style) { return style !== undefined && style !== ''; }); };

var getGapValue = function (unit, size) {
    if (size.endsWith(unit)) {
        return Number(size.slice(0, -1 * unit.length))
    }
    return null
};

var firstNonZero = function (tracks) {
    // eslint-disable-next-line no-plusplus
    for (var i = 0; i < tracks.length; i++) {
        if (tracks[i].numeric > 0) {
            return i
        }
    }
    return null
};

var NOOP = function () { return false; };

var defaultWriteStyle = function (element, gridTemplateProp, style) {
    // eslint-disable-next-line no-param-reassign
    element.style[gridTemplateProp] = style;
};

var getOption = function (options, propName, def) {
    var value = options[propName];
    if (value !== undefined) {
        return value
    }
    return def
};

function getMatchedCSSRules (el) {
        var ref;

        return (ref = [])
        .concat.apply(
            ref, Array.from(el.ownerDocument.styleSheets).map(function (s) {
                var rules = [];

                try {
                    rules = Array.from(s.cssRules || []);
                } catch (e) {
                    // Ignore results on security error
                }

                return rules
            })
        )
        .filter(function (r) {
            var matches = false;
            try {
                matches = el.matches(r.selectorText);
            } catch (e) {
                // Ignore matching erros
            }

            return matches
        });
}

var gridTemplatePropColumns = 'grid-template-columns';
var gridTemplatePropRows = 'grid-template-rows';

var Gutter = function Gutter(direction, options, parentOptions) {
    this.direction = direction;
    this.element = options.element;
    this.track = options.track;

    if (direction === 'column') {
        this.gridTemplateProp = gridTemplatePropColumns;
        this.gridGapProp = 'grid-column-gap';
        this.cursor = getOption(
            parentOptions,
            'columnCursor',
            getOption(parentOptions, 'cursor', 'col-resize')
        );
        this.snapOffset = getOption(
            parentOptions,
            'columnSnapOffset',
            getOption(parentOptions, 'snapOffset', 30)
        );
        this.dragInterval = getOption(
            parentOptions,
            'columnDragInterval',
            getOption(parentOptions, 'dragInterval', 1)
        );
        this.clientAxis = 'clientX';
        this.optionStyle = getOption(parentOptions, 'gridTemplateColumns');
    } else if (direction === 'row') {
        this.gridTemplateProp = gridTemplatePropRows;
        this.gridGapProp = 'grid-row-gap';
        this.cursor = getOption(
            parentOptions,
            'rowCursor',
            getOption(parentOptions, 'cursor', 'row-resize')
        );
        this.snapOffset = getOption(
            parentOptions,
            'rowSnapOffset',
            getOption(parentOptions, 'snapOffset', 30)
        );
        this.dragInterval = getOption(
            parentOptions,
            'rowDragInterval',
            getOption(parentOptions, 'dragInterval', 1)
        );
        this.clientAxis = 'clientY';
        this.optionStyle = getOption(parentOptions, 'gridTemplateRows');
    }

    this.onDragStart = getOption(parentOptions, 'onDragStart', NOOP);
    this.onDragEnd = getOption(parentOptions, 'onDragEnd', NOOP);
    this.onDrag = getOption(parentOptions, 'onDrag', NOOP);
    this.writeStyle = getOption(
        parentOptions,
        'writeStyle',
        defaultWriteStyle
    );

    this.startDragging = this.startDragging.bind(this);
    this.stopDragging = this.stopDragging.bind(this);
    this.drag = this.drag.bind(this);

    this.minSizeStart = options.minSizeStart;
    this.minSizeEnd = options.minSizeEnd;

    if (options.element) {
        this.element.addEventListener('mousedown', this.startDragging);
        this.element.addEventListener('touchstart', this.startDragging);
    }
};

Gutter.prototype.getDimensions = function getDimensions () {
    var ref = this.grid.getBoundingClientRect();
        var width = ref.width;
        var height = ref.height;
        var top = ref.top;
        var bottom = ref.bottom;
        var left = ref.left;
        var right = ref.right;

    if (this.direction === 'column') {
        this.start = top;
        this.end = bottom;
        this.size = height;
    } else if (this.direction === 'row') {
        this.start = left;
        this.end = right;
        this.size = width;
    }
};

Gutter.prototype.getSizeAtTrack = function getSizeAtTrack$1 (track, end) {
    return getSizeAtTrack(
        track,
        this.computedPixels,
        this.computedGapPixels,
        end
    )
};

Gutter.prototype.getSizeOfTrack = function getSizeOfTrack (track) {
    return this.computedPixels[track].numeric
};

Gutter.prototype.getRawTracks = function getRawTracks () {
    var tracks = getStyles(
        this.gridTemplateProp,
        [this.grid],
        getMatchedCSSRules(this.grid)
    );
    if (!tracks.length) {
        if (this.optionStyle) { return this.optionStyle }

        throw Error('Unable to determine grid template tracks from styles.')
    }
    return tracks[0]
};

Gutter.prototype.getGap = function getGap () {
    var gap = getStyles(
        this.gridGapProp,
        [this.grid],
        getMatchedCSSRules(this.grid)
    );
    if (!gap.length) {
        return null
    }
    return gap[0]
};

Gutter.prototype.getRawComputedTracks = function getRawComputedTracks () {
    return window.getComputedStyle(this.grid)[this.gridTemplateProp]
};

Gutter.prototype.getRawComputedGap = function getRawComputedGap () {
    return window.getComputedStyle(this.grid)[this.gridGapProp]
};

Gutter.prototype.setTracks = function setTracks (raw) {
    this.tracks = raw.split(' ');
    this.trackValues = parse(raw);
};

Gutter.prototype.setComputedTracks = function setComputedTracks (raw) {
    this.computedTracks = raw.split(' ');
    this.computedPixels = parse(raw);
};

Gutter.prototype.setGap = function setGap (raw) {
    this.gap = raw;
};

Gutter.prototype.setComputedGap = function setComputedGap (raw) {
    this.computedGap = raw;
    this.computedGapPixels = getGapValue('px', this.computedGap) || 0;
};

Gutter.prototype.getMousePosition = function getMousePosition (e) {
    if ('touches' in e) { return e.touches[0][this.clientAxis] }
    return e[this.clientAxis]
};

Gutter.prototype.startDragging = function startDragging (e) {
    if ('button' in e && e.button !== 0) {
        return
    }

    // Don't actually drag the element. We emulate that in the drag function.
    e.preventDefault();

    if (this.element) {
        this.grid = this.element.parentNode;
    } else {
        this.grid = e.target.parentNode;
    }

    this.getDimensions();
    this.setTracks(this.getRawTracks());
    this.setComputedTracks(this.getRawComputedTracks());
    this.setGap(this.getGap());
    this.setComputedGap(this.getRawComputedGap());

    var trackPercentage = this.trackValues.filter(
        function (track) { return track.type === '%'; }
    );
    var trackFr = this.trackValues.filter(function (track) { return track.type === 'fr'; });

    this.totalFrs = trackFr.length;

    if (this.totalFrs) {
        var track = firstNonZero(trackFr);

        if (track !== null) {
            this.frToPixels =
                this.computedPixels[track].numeric / trackFr[track].numeric;
        }
    }

    if (trackPercentage.length) {
        var track$1 = firstNonZero(trackPercentage);

        if (track$1 !== null) {
            this.percentageToPixels =
                this.computedPixels[track$1].numeric /
                trackPercentage[track$1].numeric;
        }
    }

    // get start of gutter track
    var gutterStart = this.getSizeAtTrack(this.track, false) + this.start;
    this.dragStartOffset = this.getMousePosition(e) - gutterStart;

    this.aTrack = this.track - 1;

    if (this.track < this.tracks.length - 1) {
        this.bTrack = this.track + 1;
    } else {
        throw Error(
            ("Invalid track index: " + (this.track) + ". Track must be between two other tracks and only " + (this.tracks.length) + " tracks were found.")
        )
    }

    this.aTrackStart = this.getSizeAtTrack(this.aTrack, false) + this.start;
    this.bTrackEnd = this.getSizeAtTrack(this.bTrack, true) + this.start;

    // Set the dragging property of the pair object.
    this.dragging = true;

    // All the binding. `window` gets the stop events in case we drag out of the elements.
    window.addEventListener('mouseup', this.stopDragging);
    window.addEventListener('touchend', this.stopDragging);
    window.addEventListener('touchcancel', this.stopDragging);
    window.addEventListener('mousemove', this.drag);
    window.addEventListener('touchmove', this.drag);

    // Disable selection. Disable!
    this.grid.addEventListener('selectstart', NOOP);
    this.grid.addEventListener('dragstart', NOOP);

    this.grid.style.userSelect = 'none';
    this.grid.style.webkitUserSelect = 'none';
    this.grid.style.MozUserSelect = 'none';
    this.grid.style.pointerEvents = 'none';

    // Set the cursor at multiple levels
    this.grid.style.cursor = this.cursor;
    window.document.body.style.cursor = this.cursor;

    this.onDragStart(this.direction, this.track);
};

Gutter.prototype.stopDragging = function stopDragging () {
    this.dragging = false;

    // Remove the stored event listeners. This is why we store them.
    this.cleanup();

    this.onDragEnd(this.direction, this.track);

    if (this.needsDestroy) {
        if (this.element) {
            this.element.removeEventListener(
                'mousedown',
                this.startDragging
            );
            this.element.removeEventListener(
                'touchstart',
                this.startDragging
            );
        }
        this.destroyCb();
        this.needsDestroy = false;
        this.destroyCb = null;
    }
};

Gutter.prototype.drag = function drag (e) {
    var mousePosition = this.getMousePosition(e);

    var gutterSize = this.getSizeOfTrack(this.track);
    var minMousePosition =
        this.aTrackStart +
        this.minSizeStart +
        this.dragStartOffset +
        this.computedGapPixels;
    var maxMousePosition =
        this.bTrackEnd -
        this.minSizeEnd -
        this.computedGapPixels -
        (gutterSize - this.dragStartOffset);
    var minMousePositionOffset = minMousePosition + this.snapOffset;
    var maxMousePositionOffset = maxMousePosition - this.snapOffset;

    if (mousePosition < minMousePositionOffset) {
        mousePosition = minMousePosition;
    }

    if (mousePosition > maxMousePositionOffset) {
        mousePosition = maxMousePosition;
    }

    if (mousePosition < minMousePosition) {
        mousePosition = minMousePosition;
    } else if (mousePosition > maxMousePosition) {
        mousePosition = maxMousePosition;
    }

    var aTrackSize =
        mousePosition -
        this.aTrackStart -
        this.dragStartOffset -
        this.computedGapPixels;
    var bTrackSize =
        this.bTrackEnd -
        mousePosition +
        this.dragStartOffset -
        gutterSize -
        this.computedGapPixels;

    if (this.dragInterval > 1) {
        var aTrackSizeIntervaled =
            Math.round(aTrackSize / this.dragInterval) * this.dragInterval;
        bTrackSize -= aTrackSizeIntervaled - aTrackSize;
        aTrackSize = aTrackSizeIntervaled;
    }

    if (aTrackSize < this.minSizeStart) {
        aTrackSize = this.minSizeStart;
    }

    if (bTrackSize < this.minSizeEnd) {
        bTrackSize = this.minSizeEnd;
    }

    if (this.trackValues[this.aTrack].type === 'px') {
        this.tracks[this.aTrack] = aTrackSize + "px";
    } else if (this.trackValues[this.aTrack].type === 'fr') {
        if (this.totalFrs === 1) {
            this.tracks[this.aTrack] = '1fr';
        } else {
            var targetFr = aTrackSize / this.frToPixels;
            this.tracks[this.aTrack] = targetFr + "fr";
        }
    } else if (this.trackValues[this.aTrack].type === '%') {
        var targetPercentage = aTrackSize / this.percentageToPixels;
        this.tracks[this.aTrack] = targetPercentage + "%";
    }

    if (this.trackValues[this.bTrack].type === 'px') {
        this.tracks[this.bTrack] = bTrackSize + "px";
    } else if (this.trackValues[this.bTrack].type === 'fr') {
        if (this.totalFrs === 1) {
            this.tracks[this.bTrack] = '1fr';
        } else {
            var targetFr$1 = bTrackSize / this.frToPixels;
            this.tracks[this.bTrack] = targetFr$1 + "fr";
        }
    } else if (this.trackValues[this.bTrack].type === '%') {
        var targetPercentage$1 = bTrackSize / this.percentageToPixels;
        this.tracks[this.bTrack] = targetPercentage$1 + "%";
    }

    var style = this.tracks.join(' ');
    this.writeStyle(this.grid, this.gridTemplateProp, style);
    this.onDrag(this.direction, this.track, style);
};

Gutter.prototype.cleanup = function cleanup () {
    window.removeEventListener('mouseup', this.stopDragging);
    window.removeEventListener('touchend', this.stopDragging);
    window.removeEventListener('touchcancel', this.stopDragging);
    window.removeEventListener('mousemove', this.drag);
    window.removeEventListener('touchmove', this.drag);

    if (this.grid) {
        this.grid.removeEventListener('selectstart', NOOP);
        this.grid.removeEventListener('dragstart', NOOP);

        this.grid.style.userSelect = '';
        this.grid.style.webkitUserSelect = '';
        this.grid.style.MozUserSelect = '';
        this.grid.style.pointerEvents = '';

        this.grid.style.cursor = '';
    }

    window.document.body.style.cursor = '';
};

Gutter.prototype.destroy = function destroy (immediate, cb) {
        if ( immediate === void 0 ) immediate = true;

    if (immediate || this.dragging === false) {
        this.cleanup();
        if (this.element) {
            this.element.removeEventListener(
                'mousedown',
                this.startDragging
            );
            this.element.removeEventListener(
                'touchstart',
                this.startDragging
            );
        }

        if (cb) {
            cb();
        }
    } else {
        this.needsDestroy = true;
        if (cb) {
            this.destroyCb = cb;
        }
    }
};

var getTrackOption = function (options, track, defaultValue) {
    if (track in options) {
        return options[track]
    }

    return defaultValue
};

var createGutter = function (direction, options) { return function (gutterOptions) {
    if (gutterOptions.track < 1) {
        throw Error(
            ("Invalid track index: " + (gutterOptions.track) + ". Track must be between two other tracks.")
        )
    }

    var trackMinSizes =
        direction === 'column'
            ? options.columnMinSizes || {}
            : options.rowMinSizes || {};
    var trackMinSize = direction === 'column' ? 'columnMinSize' : 'rowMinSize';

    return new Gutter(
        direction,
        Object.assign({}, {minSizeStart: getTrackOption(
                trackMinSizes,
                gutterOptions.track - 1,
                getOption(
                    options,
                    trackMinSize,
                    getOption(options, 'minSize', 0)
                )
            ),
            minSizeEnd: getTrackOption(
                trackMinSizes,
                gutterOptions.track + 1,
                getOption(
                    options,
                    trackMinSize,
                    getOption(options, 'minSize', 0)
                )
            )},
            gutterOptions),
        options
    )
}; };

var Grid = function Grid(options) {
    var this$1 = this;

    this.columnGutters = {};
    this.rowGutters = {};

    this.options = Object.assign({}, {columnGutters: options.columnGutters || [],
        rowGutters: options.rowGutters || [],
        columnMinSizes: options.columnMinSizes || {},
        rowMinSizes: options.rowMinSizes || {}},
        options);

    this.options.columnGutters.forEach(function (gutterOptions) {
        this$1.columnGutters[gutterOptions.track] = createGutter(
            'column',
            this$1.options
        )(gutterOptions);
    });

    this.options.rowGutters.forEach(function (gutterOptions) {
        this$1.rowGutters[gutterOptions.track] = createGutter(
            'row',
            this$1.options
        )(gutterOptions);
    });
};

Grid.prototype.addColumnGutter = function addColumnGutter (element, track) {
    if (this.columnGutters[track]) {
        this.columnGutters[track].destroy();
    }

    this.columnGutters[track] = createGutter(
        'column',
        this.options
    )({
        element: element,
        track: track,
    });
};

Grid.prototype.addRowGutter = function addRowGutter (element, track) {
    if (this.rowGutters[track]) {
        this.rowGutters[track].destroy();
    }

    this.rowGutters[track] = createGutter(
        'row',
        this.options
    )({
        element: element,
        track: track,
    });
};

Grid.prototype.removeColumnGutter = function removeColumnGutter (track, immediate) {
        var this$1 = this;
        if ( immediate === void 0 ) immediate = true;

    if (this.columnGutters[track]) {
        this.columnGutters[track].destroy(immediate, function () {
            delete this$1.columnGutters[track];
        });
    }
};

Grid.prototype.removeRowGutter = function removeRowGutter (track, immediate) {
        var this$1 = this;
        if ( immediate === void 0 ) immediate = true;

    if (this.rowGutters[track]) {
        this.rowGutters[track].destroy(immediate, function () {
            delete this$1.rowGutters[track];
        });
    }
};

Grid.prototype.handleDragStart = function handleDragStart (e, direction, track) {
    if (direction === 'column') {
        if (this.columnGutters[track]) {
            this.columnGutters[track].destroy();
        }

        this.columnGutters[track] = createGutter(
            'column',
            this.options
        )({
            track: track,
        });
        this.columnGutters[track].startDragging(e);
    } else if (direction === 'row') {
        if (this.rowGutters[track]) {
            this.rowGutters[track].destroy();
        }

        this.rowGutters[track] = createGutter(
            'row',
            this.options
        )({
            track: track,
        });
        this.rowGutters[track].startDragging(e);
    }
};

Grid.prototype.destroy = function destroy (immediate) {
        var this$1 = this;
        if ( immediate === void 0 ) immediate = true;

    Object.keys(this.columnGutters).forEach(function (track) { return this$1.columnGutters[track].destroy(immediate, function () {
            delete this$1.columnGutters[track];
        }); }
    );
    Object.keys(this.rowGutters).forEach(function (track) { return this$1.rowGutters[track].destroy(immediate, function () {
            delete this$1.rowGutters[track];
        }); }
    );
};

function index (options) { return new Grid(options); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.js */ "./src/login.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.js */ "./src/content.js");
/* harmony import */ var _gutters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gutters.js */ "./src/gutters.js");
/* harmony import */ var split_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! split-grid */ "./node_modules/split-grid/dist/split-grid.mjs");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/style.css");









const projectData = [{
    title: "", 
    description: "", 
    selected: true, 
    tasks: []
}];

const userData = [];

(0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_login_js__WEBPACK_IMPORTED_MODULE_1__["default"])(userData);
(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_content_js__WEBPACK_IMPORTED_MODULE_3__["default"])(projectData);
(0,_gutters_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,split_grid__WEBPACK_IMPORTED_MODULE_5__["default"])({
    columnGutters: [{
        track: 1,
        element: document.getElementById("gutter-col")
    }],
    rowGutters: [{
        track: 1,
        element: document.getElementById("gutter-row")
    }]
});
(0,_project_js__WEBPACK_IMPORTED_MODULE_6__["default"])(projectData);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1Q2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0NlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0dBQWdHLFlBQVk7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7OztBQ2xHZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqRmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUN4RmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUNoRmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZkEsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0EsVUFBVSxTQUFTO0FBQ25CO0FBQ0EsVUFBVSxTQUFTO0FBQ25CO0FBQ0EsVUFBVSxTQUFTO0FBQ25CLDRCQUE0QixTQUFTO0FBQ3JDO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5QjtBQUNBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywrQkFBK0I7QUFDekU7O0FBRUE7QUFDQTs7QUFFQSwwREFBMEQ7QUFDMUQsNEJBQTRCLHVCQUF1QjtBQUNuRCxtQ0FBbUMsNkNBQTZDOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsNkRBQTZELDZCQUE2Qjs7QUFFMUY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixHQUFHO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQ0FBbUMsR0FBRztBQUN0QztBQUNBLG9EQUFvRDtBQUNwRCwrQ0FBK0M7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQStEO0FBQy9EO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQixpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7VUNycUJyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUNGO0FBQ0k7QUFDQTtBQUNBO0FBQ0o7QUFDSTtBQUNkOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxzREFBTTtBQUNOLHFEQUFLO0FBQ0wsdURBQU87QUFDUCx1REFBTztBQUNQLHVEQUFPO0FBQ1Asc0RBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRCx1REFBTyxjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZ3V0dGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zcGxpdC1ncmlkL2Rpc3Qvc3BsaXQtZ3JpZC5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8pO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytNb25vKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbnRvbmlvKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYXJsYSk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90byBNb25vXFxcIjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxufVxcblxcbi5oZWFkZXItYnV0dG9uOmhvdmVyIHtcXG4gICAgc2NhbGU6IDkwJTtcXG59XFxuXFxuLmlucHV0LWZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYnV0dG9uLWNsb3NlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDI3LCAyNyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcblxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLnNpZGViYXItbGluZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyLWxpbmU6aG92ZXIge1xcbiAgICBzY2FsZTogOTAlO1xcbn1cXG5cXG4ucHJvamVjdHMtY2xvc2VkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2otaXRlbSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90byBNb25vXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvai1waWMge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5wb3B1cC1zY3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYW5pbWF0aW9uOiBwcm9tcHQtc3Bhd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4yNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4ucG9wdXAtcHJvbXB0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCAjMDAwMDAwO1xcblxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuXFxuICAgIGFuaW1hdGlvbjogaGVhZGVyLXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMnB4IDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMnB4IDRmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwMHB4KTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcGFkZGluZzogNXB4IDAgNXB4IDA7XFxuXFxuICAgIGFuaW1hdGlvbjogaGVhZGVyLXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgaGVhZGVyLXNwYXduIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XFxuICAgIH0gNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgfSAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICB9XFxufVxcblxcbiNoZWFkZXItdGl0bGUge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbiNoZWFkZXItYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2xvZ2luLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI21lbnUtYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI21lbnUtYnV0dG9uOmhvdmVyIHtcXG4gICAgcGFkZGluZzogMjBweCAxMjBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbkBrZXlmcmFtZXMgcHJvbXB0LXNwYXduIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMCU7XFxuICAgIH0gMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB9XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICBhbmltYXRpb246IHNpZGViYXItc3Bhd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW5tYXgoNTBweCwgODBweCkpIGF1dG8gbWlubWF4KDUwcHgsIDgwcHgpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBzaWRlYmFyLXNwYXduIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDBweCk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICB9XFxufVxcblxcbiNzaWRlYmFyLWluYm94IHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4jc2lkZWJhci10b2RheSB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuI3NpZGViYXItY2FsZW5kYXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbiNzaWRlYmFyLXByb2plY3RzIHtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4jcHJvamVjdHMtbGlzdCB7XFxuICAgIGdyaWQtcm93OiA1IC8gNjtcXG59XFxuXFxuI3NpZGViYXItYWRkIHtcXG4gICAgZ3JpZC1yb3c6IDYgLyA3O1xcbn1cXG5cXG4jY29udGVudC13cmFwcGVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDA7XFxuXFxuICAgIGFuaW1hdGlvbjogbGlzdC1zcGF3bjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsaXN0IHtcXG4gICAgYW5pbWF0aW9uOiBsaXN0LXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxufVxcblxcbkBrZXlmcmFtZXMgbGlzdC1zcGF3biB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMDBweCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICAgIH1cXG59XFxuXFxuI2FkZC10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4jYWRkLXRhc2sgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxufVxcblxcbiNyZXNldC1sYXlvdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMCU7XFxuICAgIHJpZ2h0OiAwJTtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNyZXNldC1sYXlvdXQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvdHRvbTogMiU7XFxuICAgIHJpZ2h0OiAyJTtcXG4gICAgc2NhbGU6IDEyMCU7XFxufVxcblxcbiNndXR0ZXItY29sIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcblxcbiAgICBhbmltYXRpb246IHNpZGViYXItc3Bhd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxufVxcblxcbiNndXR0ZXItY29sOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBjb2wtcmVzaXplO1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuI2d1dHRlci1yb3cge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuXFxuICAgIGFuaW1hdGlvbjogaGVhZGVyLXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbn1cXG5cXG4jZ3V0dGVyLXJvdzpob3ZlciB7XFxuICAgIGN1cnNvcjogcm93LXJlc2l6ZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7O0lBRXRCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCOztJQUVsQiwwQkFBMEI7SUFDMUIsZUFBZTs7SUFFZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPOztJQUVQLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjs7SUFFaEIsWUFBWTtJQUNaLFdBQVc7O0lBRVgsNEJBQTRCO0lBQzVCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCOztJQUVsQixZQUFZO0lBQ1osa0NBQWtDOztJQUVsQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7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QWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7O0lBRXBCLGtCQUFrQjtJQUNsQixVQUFVOztJQUVWLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsZ0JBQWdCOztJQUVoQix3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCOztJQUVsQixrQkFBa0I7SUFDbEIsVUFBVTs7SUFFVix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjs7SUFFaEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rTW9ub1xcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QW50b25pb1xcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2FybGFcXFwiKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmhlYWRlci1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbjpob3ZlciB7XFxuICAgIHNjYWxlOiA5MCU7XFxufVxcblxcbi5pbnB1dC1maWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJ1dHRvbi1jbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAyNywgMjcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG5cXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyLWxpbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhci1saW5lOmhvdmVyIHtcXG4gICAgc2NhbGU6IDkwJTtcXG59XFxuXFxuLnByb2plY3RzLWNsb3NlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qLWl0ZW0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMjAlO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnByb2otcGljIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4ucG9wdXAtc2NyZWVuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcblxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGFuaW1hdGlvbjogcHJvbXB0LXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMjVzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLnBvcHVwLXByb21wdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggIzAwMDAwMDtcXG5cXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcblxcbiAgICBhbmltYXRpb246IGhlYWRlci1zcGF3bjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJweCA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJweCA0ZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xcblxcbiAgICBhbmltYXRpb246IGhlYWRlci1zcGF3bjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhlYWRlci1zcGF3biB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xcbiAgICB9IDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIH0gMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgfVxcbn1cXG5cXG4jaGVhZGVyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4jaGVhZGVyLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNsb2dpbi1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNtZW51LWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNtZW51LWJ1dHRvbjpob3ZlciB7XFxuICAgIHBhZGRpbmc6IDIwcHggMTIwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHByb21wdC1zcGF3biB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICB9IDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgYW5pbWF0aW9uOiBzaWRlYmFyLXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWlubWF4KDUwcHgsIDgwcHgpKSBhdXRvIG1pbm1heCg1MHB4LCA4MHB4KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgc2lkZWJhci1zcGF3biB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgfVxcbn1cXG5cXG4jc2lkZWJhci1pbmJveCB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuI3NpZGViYXItdG9kYXkge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbiNzaWRlYmFyLWNhbGVuZGFyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4jc2lkZWJhci1wcm9qZWN0cyB7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3Qge1xcbiAgICBncmlkLXJvdzogNSAvIDY7XFxufVxcblxcbiNzaWRlYmFyLWFkZCB7XFxuICAgIGdyaWQtcm93OiA2IC8gNztcXG59XFxuXFxuI2NvbnRlbnQtd3JhcHBlciB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAwO1xcblxcbiAgICBhbmltYXRpb246IGxpc3Qtc3Bhd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbGlzdCB7XFxuICAgIGFuaW1hdGlvbjogbGlzdC1zcGF3bjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxpc3Qtc3Bhd24ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAwcHgpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICB9XFxufVxcblxcbiNhZGQtdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuI2FkZC10YXNrID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbn1cXG5cXG4jcmVzZXQtbGF5b3V0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDAlO1xcbiAgICByaWdodDogMCU7XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgXFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jcmVzZXQtbGF5b3V0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3R0b206IDIlO1xcbiAgICByaWdodDogMiU7XFxuICAgIHNjYWxlOiAxMjAlO1xcbn1cXG5cXG4jZ3V0dGVyLWNvbCB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDJweDtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG5cXG4gICAgYW5pbWF0aW9uOiBzaWRlYmFyLXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbn1cXG5cXG4jZ3V0dGVyLWNvbDpob3ZlciB7XFxuICAgIGN1cnNvcjogY29sLXJlc2l6ZTtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcbiNndXR0ZXItcm93IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcblxcbiAgICBhbmltYXRpb246IGhlYWRlci1zcGF3bjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG59XFxuXFxuI2d1dHRlci1yb3c6aG92ZXIge1xcbiAgICBjdXJzb3I6IHJvdy1yZXNpemU7XFxuICAgIGhlaWdodDogMzBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxlbmRhcihwcm9qZWN0RGF0YSkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3QtY29udGVudFwiKSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtd3JhcHBlclwiKS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGVuZGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYWxlbmRhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3QtY29udGVudFwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdC10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ2FsZW5kYXJcIjtcbiAgICBjYWxlbmRhci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LXdyYXBwZXJcIik7XG4gICAgbGlzdC5pbnNlcnRCZWZvcmUoY2FsZW5kYXIsIGxpc3QuY2hpbGRyZW5bMF0pO1xufSIsImltcG9ydCBJbmJveCBmcm9tIFwiLi9pbmJveC5qc1wiO1xuaW1wb3J0IFRvZGF5IGZyb20gXCIuL3RvZGF5LmpzXCI7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4vY2FsZW5kYXIuanNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudChwcm9qZWN0RGF0YSkge1xuICAgIGNvbnN0IGNvbnRlbnRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50V3JhcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnQtd3JhcHBlclwiKTtcblxuICAgIGNvbnN0IHJlc2V0TGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZXNldExheW91dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlc2V0LWxheW91dFwiKTtcbiAgICByZXNldExheW91dC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIlJlc2V0IExheW91dFwiKTtcbiAgICBjb25zdCByZXNldFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcmVzZXRQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy90ZWFtX2Rhc2hib2FyZC5wbmdcIik7XG4gICAgcmVzZXRMYXlvdXQuYXBwZW5kQ2hpbGQocmVzZXRQaWMpO1xuICAgIGNvbnRlbnRXcmFwLmFwcGVuZENoaWxkKHJlc2V0TGF5b3V0KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY29udGVudFdyYXApO1xuXG4gICAgSW5ib3gocHJvamVjdERhdGEpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWluYm94XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgSW5ib3gocHJvamVjdERhdGEpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLXRvZGF5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgVG9kYXkocHJvamVjdERhdGEpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWNhbGVuZGFyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgQ2FsZW5kYXIocHJvamVjdERhdGEpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldC1sYXlvdXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gXCJcIjtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBUYXNrKHByb2plY3REYXRhKTtcbiAgICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHdXR0ZXJzKCkge1xuICAgIGNvbnN0IGd1dHRlckNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3V0dGVyQ29sLmlkID0gXCJndXR0ZXItY29sXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGd1dHRlckNvbCk7XG5cbiAgICBjb25zdCBndXR0ZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGd1dHRlclJvdy5pZCA9IFwiZ3V0dGVyLXJvd1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChndXR0ZXJSb3cpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyVGl0bGVzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLXRpdGxlc1wiKTtcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlclRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLXRpdGxlXCIpO1xuICAgIGhlYWRlclRpdGxlLmlubmVySFRNTCA9IFwiRE9fSVRcIjtcbiAgICBoZWFkZXJUaXRsZXMuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSBcIlRoZSB0by1kbyBhcHAgZm9yIG1hbmFnaW5nIHlvdXIgbGlmZVwiO1xuICAgIGhlYWRlclRpdGxlcy5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlcyk7XG5cbiAgICBjb25zdCBoZWFkZXJCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJCdXR0b25zLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLWJ1dHRvbnNcIik7XG5cbiAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbG9naW5CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dpbi1idXR0b25cIik7XG4gICAgbG9naW5CdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoZWFkZXItYnV0dG9uXCIpO1xuXG4gICAgY29uc3QgbG9naW5QaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxvZ2luUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvYWNjb3VudF9jaXJjbGUucG5nXCIpO1xuICAgIGxvZ2luQnV0dG9uLmFwcGVuZENoaWxkKGxvZ2luUGljKTtcblxuICAgIGNvbnN0IGxvZ2luVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxvZ2luVGV4dC50ZXh0Q29udGVudCA9IFwiU2lnbiBJblwiO1xuICAgIGxvZ2luQnV0dG9uLmFwcGVuZENoaWxkKGxvZ2luVGV4dCk7XG4gICAgaGVhZGVyQnV0dG9ucy5hcHBlbmRDaGlsZChsb2dpbkJ1dHRvbik7XG5cbiAgICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvbWVudS5wbmdcIik7XG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1idXR0b25cIik7XG4gICAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhlYWRlci1idXR0b25cIik7XG4gICAgbWVudUJ1dHRvbi5hcHBlbmRDaGlsZChtZW51SW1nKTtcbiAgICBoZWFkZXJCdXR0b25zLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJCdXR0b25zKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluYm94KHByb2plY3REYXRhKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdC1jb250ZW50XCIpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC13cmFwcGVyXCIpLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdC1jb250ZW50XCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0LXRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuICAgIGluYm94LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tzXCIpO1xuXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3REYXRhKSB7XG4gICAgICAgIGlmIChwcm9qZWN0LnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrXCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICAgICAgdGFza1RleHQudGV4dENvbnRlbnQgPSB0YXNrO1xuICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1RleHQpO1xuXG4gICAgICAgICAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbmJveC5hcHBlbmRDaGlsZCh0YXNrQ29udGVudCk7XG5cbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2tcIik7XG5cbiAgICBjb25zdCBhZGRUYXNrUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBhZGRUYXNrUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvYWRkX3Rhc2sucG5nXCIpO1xuICAgIGFkZFRhc2suYXBwZW5kQ2hpbGQoYWRkVGFza1BpYyk7XG5cbiAgICBjb25zdCBhZGRUYXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFkZFRhc2tUZXh0LnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFRhc2tcIjtcbiAgICBhZGRUYXNrLmFwcGVuZENoaWxkKGFkZFRhc2tUZXh0KTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChhZGRUYXNrKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtd3JhcHBlclwiKTtcbiAgICBjb250ZW50Lmluc2VydEJlZm9yZShpbmJveCwgY29udGVudC5jaGlsZHJlblswXSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4odXNlckRhdGEpIHtcbiAgICBjb25zdCBsb2dpblNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9naW5TY3JlZW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dpbi1zY3JlZW5cIik7XG4gICAgbG9naW5TY3JlZW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb3B1cC1zY3JlZW5cIik7XG5cbiAgICBjb25zdCBsb2dpblByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9naW5Qcm9tcHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dpbi1wcm9tcHRcIik7XG4gICAgbG9naW5Qcm9tcHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb3B1cC1wcm9tcHRcIik7XG5cbiAgICBjb25zdCBsb2dpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBsb2dpbkhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLWhlYWRlclwiKTtcbiAgICBsb2dpbkhlYWRlci50ZXh0Q29udGVudCA9IFwiU2lnbiBpbiB0byBEb19JdFwiO1xuICAgIGxvZ2luUHJvbXB0LmFwcGVuZENoaWxkKGxvZ2luSGVhZGVyKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgIGNvbnN0IGxvZ05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ05hbWUuY2xhc3NOYW1lID0gXCJpbnB1dC1maWVsZFwiO1xuXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZTpcIjtcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibG9naW4tbmFtZVwiKTtcbiAgICBsb2dOYW1lLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5cbiAgICBjb25zdCBuYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9naW4tbmFtZVwiKTtcbiAgICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImxvZ2luLW5hbWVcIik7XG4gICAgbG9nTmFtZS5hcHBlbmRDaGlsZChuYW1lRmllbGQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobG9nTmFtZSk7XG5cbiAgICBjb25zdCBsb2dQYXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dQYXNzLmNsYXNzTmFtZSA9IFwibG9naW4tZmllbGRcIjtcblxuICAgIGNvbnN0IHBhc3NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwYXNzTGFiZWwudGV4dENvbnRlbnQgPSBcIlBhc3N3b3JkOlwiO1xuICAgIHBhc3NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb2dpbi1wYXNzXCIpO1xuICAgIGxvZ1Bhc3MuYXBwZW5kQ2hpbGQocGFzc0xhYmVsKTtcblxuICAgIGNvbnN0IHBhc3NGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwYXNzRmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dpbi1wYXNzXCIpO1xuICAgIHBhc3NGaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibG9naW4tcGFzc1wiKTtcbiAgICBsb2dQYXNzLmFwcGVuZENoaWxkKHBhc3NGaWVsZCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsb2dQYXNzKTtcblxuICAgIGNvbnN0IGxvZ2luU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxvZ2luU3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9naW4tc3VibWl0XCIpO1xuICAgIGxvZ2luU3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgbG9naW5TdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJMT0cgSU5cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsb2dpblN1Ym1pdCk7XG4gICAgbG9naW5Qcm9tcHQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb25zdCBjcmVhdGVBY2NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY3JlYXRlQWNjb3VudC5pbm5lckhUTUwgPSBcIk5ldyB1c2VyPyBDcmVhdGUgYW4gYWNjb3VudCBoZXJlIVwiO1xuICAgIGxvZ2luUHJvbXB0LmFwcGVuZENoaWxkKGNyZWF0ZUFjY291bnQpO1xuXG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlLmlubmVySFRNTCA9IFwiWFwiO1xuICAgIGNsb3NlLmlkID0gXCJjbG9zZS1sb2dpblwiO1xuICAgIGNsb3NlLmNsYXNzTmFtZSA9IFwiYnV0dG9uLWNsb3NlXCI7XG4gICAgbG9naW5Qcm9tcHQuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG4gICAgbG9naW5TY3JlZW4uYXBwZW5kQ2hpbGQobG9naW5Qcm9tcHQpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvZ2luU2NyZWVuKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLXN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyRW50ZXJlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tbmFtZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJDaGVjayA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVzZXIgb2YgdXNlckRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlci5uYW1lID09PSB1c2VyRW50ZXJlZCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLWJ1dHRvblwiKS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IGBIZWxsbywgJHt1c2VyRW50ZXJlZH1gO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLXNjcmVlblwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdXNlckNoZWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXVzZXJDaGVjaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tcHJvbXB0XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSBcIlRoaXMgdXNlciBkb2VzIG5vdCBleGlzdFwiO1xuICAgICAgICAgICAgICAgIHByb21wdC5pbnNlcnRCZWZvcmUoZXJyb3IsIHByb21wdC5jaGlsZHJlblsyXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tbmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLXBhc3NcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWxvZ2luXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tbmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLXBhc3NcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1zY3JlZW5cIikucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdERhdGEpIHtcbiAgICBjb25zdCBwcm9qU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qU2NyZWVuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvai1zY3JlZW5cIik7XG4gICAgcHJvalNjcmVlbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvcHVwLXNjcmVlblwiKTtcblxuICAgIGNvbnN0IHByb2pQcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2pQcm9tcHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qLXByb21wdFwiKTtcbiAgICBwcm9qUHJvbXB0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicG9wdXAtcHJvbXB0XCIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgY29uc3QgbG9nUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nUHJvai5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0LWZpZWxkXCIpO1xuXG4gICAgY29uc3QgcHJvakxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByb2pMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qLW5hbWVcIik7XG4gICAgcHJvakxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWU6XCI7XG4gICAgbG9nUHJvai5hcHBlbmRDaGlsZChwcm9qTGFiZWwpO1xuXG4gICAgY29uc3QgcHJvakZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByb2pGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2otbmFtZVwiKTtcbiAgICBwcm9qRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2otbmFtZVwiKTtcbiAgICBsb2dQcm9qLmFwcGVuZENoaWxkKHByb2pGaWVsZCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsb2dQcm9qKTtcblxuICAgIGNvbnN0IHByb2pTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJvalN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2otc3VibWl0XCIpO1xuICAgIHByb2pTdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBwcm9qU3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQUREIFBST0pFQ1RcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qU3VibWl0KTtcbiAgICBwcm9qUHJvbXB0LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlLmlubmVySFRNTCA9IFwiWFwiO1xuICAgIGNsb3NlLmlkID0gXCJjbG9zZS1wcm9qXCI7XG4gICAgY2xvc2UuY2xhc3NOYW1lID0gXCJidXR0b24tY2xvc2VcIjtcbiAgICBwcm9qUHJvbXB0LmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICBwcm9qU2NyZWVuLmFwcGVuZENoaWxkKHByb2pQcm9tcHQpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWFkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvalNjcmVlbik7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qLXN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvai1uYW1lXCIpLnZhbHVlO1xuICAgICAgICAgICAgcHJvamVjdERhdGEucHVzaChuZXcgUHJvamVjdChwcm9qTmFtZSkpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIG5ld1Byb2ouc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvak5hbWUpO1xuICAgICAgICAgICAgbmV3UHJvai5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2otaXRlbVwiKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3UHJvalBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBuZXdQcm9qUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvZm9sZGVyLnBuZ1wiKVxuICAgICAgICAgICAgbmV3UHJvalBpYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2otcGljXCIpO1xuICAgICAgICAgICAgbmV3UHJvai5hcHBlbmRDaGlsZChuZXdQcm9qUGljKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3UHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgICAgICAgICBuZXdQcm9qTmFtZS5pbm5lckhUTUwgPSBwcm9qTmFtZTtcbiAgICAgICAgICAgIG5ld1Byb2ouYXBwZW5kQ2hpbGQobmV3UHJvak5hbWUpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWxpc3RcIik7XG4gICAgICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobmV3UHJvaik7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvai1zY3JlZW5cIikucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtcHJvalwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2otc2NyZWVuXCIpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNsYXNzIFByb2plY3Qge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvamVjdERhdGE7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhclwiKTtcblxuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBpbmJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXItaW5ib3hcIik7XG4gICAgaW5ib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWxpbmVcIik7XG5cbiAgICBjb25zdCBpbmJveFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW5ib3hQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9pbmJveC5wbmdcIik7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hQaWMpO1xuXG4gICAgY29uc3QgaW5ib3hUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGluYm94VGV4dC50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChpbmJveFRleHQpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaW5ib3gpO1xuXG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRvZGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhci10b2RheVwiKTtcbiAgICB0b2RheS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGViYXItbGluZVwiKTtcblxuICAgIGNvbnN0IHRvZGF5UGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB0b2RheVBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL3RvZGF5LnBuZ1wiKTtcbiAgICB0b2RheS5hcHBlbmRDaGlsZCh0b2RheVBpYyk7XG5cbiAgICBjb25zdCB0b2RheVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdG9kYXlUZXh0LnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIHRvZGF5LmFwcGVuZENoaWxkKHRvZGF5VGV4dCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0b2RheSk7XG5cbiAgICBjb25zdCBjYWxlbmRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FsZW5kYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlYmFyLWNhbGVuZGFyXCIpO1xuICAgIGNhbGVuZGFyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1saW5lXCIpO1xuXG4gICAgY29uc3QgY2FsZW5kYXJQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNhbGVuZGFyUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvY2FsZW5kYXIucG5nXCIpO1xuICAgIGNhbGVuZGFyLmFwcGVuZENoaWxkKGNhbGVuZGFyUGljKTtcblxuICAgIGNvbnN0IGNhbGVuZGFyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjYWxlbmRhclRleHQudGV4dENvbnRlbnQgPSBcIkNhbGVuZGFyXCI7XG4gICAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXJUZXh0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGNhbGVuZGFyKTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXItcHJvamVjdHNcIik7XG4gICAgcHJvamVjdHMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWxpbmVcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0c1BpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcHJvamVjdHNQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9hcnJvd19jaXJjbGVfcmlnaHQucG5nXCIpO1xuICAgIHByb2plY3RzUGljLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtcGljXCIpO1xuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RzUGljKTtcblxuICAgIGNvbnN0IHByb2plY3RzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9qZWN0c1RleHQudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNUZXh0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcblxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHNMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtbGlzdFwiKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdCk7XG5cbiAgICBjb25zdCBhZGRQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRQcm9qLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhci1hZGRcIik7XG4gICAgYWRkUHJvai5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGViYXItbGluZVwiKTtcblxuICAgIGNvbnN0IGFkZFByb2pQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFkZFByb2pQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9mb2xkZXJfbmV3LnBuZ1wiKTtcbiAgICBhZGRQcm9qLmFwcGVuZENoaWxkKGFkZFByb2pQaWMpO1xuXG4gICAgY29uc3QgYWRkUHJvalRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgYWRkUHJvalRleHQudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgYWRkUHJvai5hcHBlbmRDaGlsZChhZGRQcm9qVGV4dCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1wcm9qZWN0c1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1waWNcIikuc3JjO1xuICAgICAgICBjb25zdCByZWdFeCA9IC9leHBhbmRfY2lyY2xlX2Rvd24ucG5nJC87XG5cbiAgICAgICAgaWYgKHJlZ0V4LnRlc3Qoc3RhdGUpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWxpc3RcIikuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWNsb3NlZFwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtcGljXCIpLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvYXJyb3dfY2lyY2xlX3JpZ2h0LnBuZ1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtbGlzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdHMtY2xvc2VkXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1waWNcIikuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9leHBhbmRfY2lyY2xlX2Rvd24ucG5nXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFzayhwcm9qZWN0RGF0YSkge1xuICAgIGNvbnN0IHRhc2tTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tTY3JlZW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXNjcmVlblwiKTtcbiAgICB0YXNrU2NyZWVuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicG9wdXAtc2NyZWVuXCIpO1xuXG4gICAgY29uc3QgdGFza1Byb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1Byb21wdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stcHJvbXB0XCIpO1xuICAgIHRhc2tQcm9tcHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb3B1cC1wcm9tcHRcIik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICBjb25zdCBsb2dUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dUYXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXQtZmllbGRcIik7XG5cbiAgICBjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stbmFtZVwiKTtcbiAgICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2s6XCI7XG4gICAgbG9nVGFzay5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuXG4gICAgY29uc3QgdGFza0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stbmFtZVwiKTtcbiAgICB0YXNrRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stbmFtZVwiKTtcbiAgICBsb2dUYXNrLmFwcGVuZENoaWxkKHRhc2tGaWVsZCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsb2dUYXNrKTtcblxuICAgIGNvbnN0IGxvZ1Byb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ1Byb2ouc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dC1maWVsZFwiKTtcblxuICAgIGNvbnN0IHByb2pMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcm9qTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvai1uYW1lXCIpO1xuICAgIHByb2pMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdDpcIjtcbiAgICBsb2dQcm9qLmFwcGVuZENoaWxkKHByb2pMYWJlbCk7XG5cbiAgICBjb25zdCBwcm9qRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByb2pGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2otbmFtZVwiKTtcbiAgICBwcm9qRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2otbmFtZVwiKTtcblxuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0RGF0YSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICAgICAgICBwcm9qRmllbGQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG5cbiAgICBsb2dQcm9qLmFwcGVuZENoaWxkKHByb2pGaWVsZCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsb2dQcm9qKTtcblxuICAgIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stc3VibWl0XCIpO1xuICAgIHRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICB0YXNrU3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQUREIFRBU0tcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrU3VibWl0KTtcbiAgICB0YXNrUHJvbXB0LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlLmlubmVySFRNTCA9IFwiWFwiO1xuICAgIGNsb3NlLmlkID0gXCJjbG9zZS10YXNrXCI7XG4gICAgY2xvc2UuY2xhc3NOYW1lID0gXCJidXR0b24tY2xvc2VcIjtcbiAgICB0YXNrUHJvbXB0LmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICB0YXNrU2NyZWVuLmFwcGVuZENoaWxkKHRhc2tQcm9tcHQpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YXNrU2NyZWVuKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1zdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0RGF0YSkge1xuICAgICAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qLW5hbWVcIikudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0W1widGFza3NcIl0ucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stc2NyZWVuXCIpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS10YXNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXNjcmVlblwiKS5yZW1vdmUoKTtcbiAgICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RheShwcm9qZWN0RGF0YSkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3QtY29udGVudFwiKSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtd3JhcHBlclwiKS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3QtY29udGVudFwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdC10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICB0b2RheS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LXdyYXBwZXJcIik7XG4gICAgbGlzdC5pbnNlcnRCZWZvcmUodG9kYXksIGxpc3QuY2hpbGRyZW5bMF0pO1xufSIsInZhciBudW1lcmljID0gZnVuY3Rpb24gKHZhbHVlLCB1bml0KSB7IHJldHVybiBOdW1iZXIodmFsdWUuc2xpY2UoMCwgLTEgKiB1bml0Lmxlbmd0aCkpOyB9O1xuXG52YXIgcGFyc2VWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZS5lbmRzV2l0aCgncHgnKSlcbiAgICAgICAgeyByZXR1cm4geyB2YWx1ZTogdmFsdWUsIHR5cGU6ICdweCcsIG51bWVyaWM6IG51bWVyaWModmFsdWUsICdweCcpIH0gfVxuICAgIGlmICh2YWx1ZS5lbmRzV2l0aCgnZnInKSlcbiAgICAgICAgeyByZXR1cm4geyB2YWx1ZTogdmFsdWUsIHR5cGU6ICdmcicsIG51bWVyaWM6IG51bWVyaWModmFsdWUsICdmcicpIH0gfVxuICAgIGlmICh2YWx1ZS5lbmRzV2l0aCgnJScpKVxuICAgICAgICB7IHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgdHlwZTogJyUnLCBudW1lcmljOiBudW1lcmljKHZhbHVlLCAnJScpIH0gfVxuICAgIGlmICh2YWx1ZSA9PT0gJ2F1dG8nKSB7IHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgdHlwZTogJ2F1dG8nIH0gfVxuICAgIHJldHVybiBudWxsXG59O1xuXG52YXIgcGFyc2UgPSBmdW5jdGlvbiAocnVsZSkgeyByZXR1cm4gcnVsZS5zcGxpdCgnICcpLm1hcChwYXJzZVZhbHVlKTsgfTtcblxudmFyIGdldFNpemVBdFRyYWNrID0gZnVuY3Rpb24gKGluZGV4LCB0cmFja3MsIGdhcCwgZW5kKSB7XG4gICAgaWYgKCBnYXAgPT09IHZvaWQgMCApIHsgZ2FwID0gMDsgfVxuICAgIGlmICggZW5kID09PSB2b2lkIDAgKSB7IGVuZCA9IGZhbHNlOyB9XG5cbiAgICB2YXIgbmV3SW5kZXggPSBlbmQgPyBpbmRleCArIDEgOiBpbmRleDtcbiAgICB2YXIgdHJhY2tTdW0gPSB0cmFja3NcbiAgICAgICAgLnNsaWNlKDAsIG5ld0luZGV4KVxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChhY2N1bSwgdmFsdWUpIHsgcmV0dXJuIGFjY3VtICsgdmFsdWUubnVtZXJpYzsgfSwgMCk7XG4gICAgdmFyIGdhcFN1bSA9IGdhcCA/IGluZGV4ICogZ2FwIDogMDtcblxuICAgIHJldHVybiB0cmFja1N1bSArIGdhcFN1bVxufTtcblxudmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIChydWxlLCBvd25SdWxlcywgbWF0Y2hlZFJ1bGVzKSB7IHJldHVybiBvd25SdWxlcy5jb25jYXQoIG1hdGNoZWRSdWxlcylcbiAgICAgICAgLm1hcChmdW5jdGlvbiAocikgeyByZXR1cm4gci5zdHlsZVtydWxlXTsgfSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc3R5bGUpIHsgcmV0dXJuIHN0eWxlICE9PSB1bmRlZmluZWQgJiYgc3R5bGUgIT09ICcnOyB9KTsgfTtcblxudmFyIGdldEdhcFZhbHVlID0gZnVuY3Rpb24gKHVuaXQsIHNpemUpIHtcbiAgICBpZiAoc2l6ZS5lbmRzV2l0aCh1bml0KSkge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHNpemUuc2xpY2UoMCwgLTEgKiB1bml0Lmxlbmd0aCkpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG59O1xuXG52YXIgZmlyc3ROb25aZXJvID0gZnVuY3Rpb24gKHRyYWNrcykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0cmFja3NbaV0ubnVtZXJpYyA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbn07XG5cbnZhciBOT09QID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH07XG5cbnZhciBkZWZhdWx0V3JpdGVTdHlsZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBncmlkVGVtcGxhdGVQcm9wLCBzdHlsZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGVsZW1lbnQuc3R5bGVbZ3JpZFRlbXBsYXRlUHJvcF0gPSBzdHlsZTtcbn07XG5cbnZhciBnZXRPcHRpb24gPSBmdW5jdGlvbiAob3B0aW9ucywgcHJvcE5hbWUsIGRlZikge1xuICAgIHZhciB2YWx1ZSA9IG9wdGlvbnNbcHJvcE5hbWVdO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gZGVmXG59O1xuXG5mdW5jdGlvbiBnZXRNYXRjaGVkQ1NTUnVsZXMgKGVsKSB7XG4gICAgICAgIHZhciByZWY7XG5cbiAgICAgICAgcmV0dXJuIChyZWYgPSBbXSlcbiAgICAgICAgLmNvbmNhdC5hcHBseShcbiAgICAgICAgICAgIHJlZiwgQXJyYXkuZnJvbShlbC5vd25lckRvY3VtZW50LnN0eWxlU2hlZXRzKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcnVsZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzID0gQXJyYXkuZnJvbShzLmNzc1J1bGVzIHx8IFtdKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSByZXN1bHRzIG9uIHNlY3VyaXR5IGVycm9yXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGVzXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBlbC5tYXRjaGVzKHIuc2VsZWN0b3JUZXh0KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgbWF0Y2hpbmcgZXJyb3NcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNcbiAgICAgICAgfSk7XG59XG5cbnZhciBncmlkVGVtcGxhdGVQcm9wQ29sdW1ucyA9ICdncmlkLXRlbXBsYXRlLWNvbHVtbnMnO1xudmFyIGdyaWRUZW1wbGF0ZVByb3BSb3dzID0gJ2dyaWQtdGVtcGxhdGUtcm93cyc7XG5cbnZhciBHdXR0ZXIgPSBmdW5jdGlvbiBHdXR0ZXIoZGlyZWN0aW9uLCBvcHRpb25zLCBwYXJlbnRPcHRpb25zKSB7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgdGhpcy5lbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50O1xuICAgIHRoaXMudHJhY2sgPSBvcHRpb25zLnRyYWNrO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVQcm9wID0gZ3JpZFRlbXBsYXRlUHJvcENvbHVtbnM7XG4gICAgICAgIHRoaXMuZ3JpZEdhcFByb3AgPSAnZ3JpZC1jb2x1bW4tZ2FwJztcbiAgICAgICAgdGhpcy5jdXJzb3IgPSBnZXRPcHRpb24oXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAgICAgJ2NvbHVtbkN1cnNvcicsXG4gICAgICAgICAgICBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ2N1cnNvcicsICdjb2wtcmVzaXplJylcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zbmFwT2Zmc2V0ID0gZ2V0T3B0aW9uKFxuICAgICAgICAgICAgcGFyZW50T3B0aW9ucyxcbiAgICAgICAgICAgICdjb2x1bW5TbmFwT2Zmc2V0JyxcbiAgICAgICAgICAgIGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnc25hcE9mZnNldCcsIDMwKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmRyYWdJbnRlcnZhbCA9IGdldE9wdGlvbihcbiAgICAgICAgICAgIHBhcmVudE9wdGlvbnMsXG4gICAgICAgICAgICAnY29sdW1uRHJhZ0ludGVydmFsJyxcbiAgICAgICAgICAgIGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnZHJhZ0ludGVydmFsJywgMSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jbGllbnRBeGlzID0gJ2NsaWVudFgnO1xuICAgICAgICB0aGlzLm9wdGlvblN0eWxlID0gZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdncmlkVGVtcGxhdGVDb2x1bW5zJyk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyb3cnKSB7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlUHJvcCA9IGdyaWRUZW1wbGF0ZVByb3BSb3dzO1xuICAgICAgICB0aGlzLmdyaWRHYXBQcm9wID0gJ2dyaWQtcm93LWdhcCc7XG4gICAgICAgIHRoaXMuY3Vyc29yID0gZ2V0T3B0aW9uKFxuICAgICAgICAgICAgcGFyZW50T3B0aW9ucyxcbiAgICAgICAgICAgICdyb3dDdXJzb3InLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdjdXJzb3InLCAncm93LXJlc2l6ZScpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc25hcE9mZnNldCA9IGdldE9wdGlvbihcbiAgICAgICAgICAgIHBhcmVudE9wdGlvbnMsXG4gICAgICAgICAgICAncm93U25hcE9mZnNldCcsXG4gICAgICAgICAgICBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ3NuYXBPZmZzZXQnLCAzMClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kcmFnSW50ZXJ2YWwgPSBnZXRPcHRpb24oXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAgICAgJ3Jvd0RyYWdJbnRlcnZhbCcsXG4gICAgICAgICAgICBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ2RyYWdJbnRlcnZhbCcsIDEpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2xpZW50QXhpcyA9ICdjbGllbnRZJztcbiAgICAgICAgdGhpcy5vcHRpb25TdHlsZSA9IGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnZ3JpZFRlbXBsYXRlUm93cycpO1xuICAgIH1cblxuICAgIHRoaXMub25EcmFnU3RhcnQgPSBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ29uRHJhZ1N0YXJ0JywgTk9PUCk7XG4gICAgdGhpcy5vbkRyYWdFbmQgPSBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ29uRHJhZ0VuZCcsIE5PT1ApO1xuICAgIHRoaXMub25EcmFnID0gZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdvbkRyYWcnLCBOT09QKTtcbiAgICB0aGlzLndyaXRlU3R5bGUgPSBnZXRPcHRpb24oXG4gICAgICAgIHBhcmVudE9wdGlvbnMsXG4gICAgICAgICd3cml0ZVN0eWxlJyxcbiAgICAgICAgZGVmYXVsdFdyaXRlU3R5bGVcbiAgICApO1xuXG4gICAgdGhpcy5zdGFydERyYWdnaW5nID0gdGhpcy5zdGFydERyYWdnaW5nLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdG9wRHJhZ2dpbmcgPSB0aGlzLnN0b3BEcmFnZ2luZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhZyA9IHRoaXMuZHJhZy5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5taW5TaXplU3RhcnQgPSBvcHRpb25zLm1pblNpemVTdGFydDtcbiAgICB0aGlzLm1pblNpemVFbmQgPSBvcHRpb25zLm1pblNpemVFbmQ7XG5cbiAgICBpZiAob3B0aW9ucy5lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnN0YXJ0RHJhZ2dpbmcpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuc3RhcnREcmFnZ2luZyk7XG4gICAgfVxufTtcblxuR3V0dGVyLnByb3RvdHlwZS5nZXREaW1lbnNpb25zID0gZnVuY3Rpb24gZ2V0RGltZW5zaW9ucyAoKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMuZ3JpZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHdpZHRoID0gcmVmLndpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gcmVmLmhlaWdodDtcbiAgICAgICAgdmFyIHRvcCA9IHJlZi50b3A7XG4gICAgICAgIHZhciBib3R0b20gPSByZWYuYm90dG9tO1xuICAgICAgICB2YXIgbGVmdCA9IHJlZi5sZWZ0O1xuICAgICAgICB2YXIgcmlnaHQgPSByZWYucmlnaHQ7XG5cbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdjb2x1bW4nKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSB0b3A7XG4gICAgICAgIHRoaXMuZW5kID0gYm90dG9tO1xuICAgICAgICB0aGlzLnNpemUgPSBoZWlnaHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3JvdycpIHtcbiAgICAgICAgdGhpcy5zdGFydCA9IGxlZnQ7XG4gICAgICAgIHRoaXMuZW5kID0gcmlnaHQ7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHdpZHRoO1xuICAgIH1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0U2l6ZUF0VHJhY2sgPSBmdW5jdGlvbiBnZXRTaXplQXRUcmFjayQxICh0cmFjaywgZW5kKSB7XG4gICAgcmV0dXJuIGdldFNpemVBdFRyYWNrKFxuICAgICAgICB0cmFjayxcbiAgICAgICAgdGhpcy5jb21wdXRlZFBpeGVscyxcbiAgICAgICAgdGhpcy5jb21wdXRlZEdhcFBpeGVscyxcbiAgICAgICAgZW5kXG4gICAgKVxufTtcblxuR3V0dGVyLnByb3RvdHlwZS5nZXRTaXplT2ZUcmFjayA9IGZ1bmN0aW9uIGdldFNpemVPZlRyYWNrICh0cmFjaykge1xuICAgIHJldHVybiB0aGlzLmNvbXB1dGVkUGl4ZWxzW3RyYWNrXS5udW1lcmljXG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldFJhd1RyYWNrcyA9IGZ1bmN0aW9uIGdldFJhd1RyYWNrcyAoKSB7XG4gICAgdmFyIHRyYWNrcyA9IGdldFN0eWxlcyhcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVQcm9wLFxuICAgICAgICBbdGhpcy5ncmlkXSxcbiAgICAgICAgZ2V0TWF0Y2hlZENTU1J1bGVzKHRoaXMuZ3JpZClcbiAgICApO1xuICAgIGlmICghdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25TdHlsZSkgeyByZXR1cm4gdGhpcy5vcHRpb25TdHlsZSB9XG5cbiAgICAgICAgdGhyb3cgRXJyb3IoJ1VuYWJsZSB0byBkZXRlcm1pbmUgZ3JpZCB0ZW1wbGF0ZSB0cmFja3MgZnJvbSBzdHlsZXMuJylcbiAgICB9XG4gICAgcmV0dXJuIHRyYWNrc1swXVxufTtcblxuR3V0dGVyLnByb3RvdHlwZS5nZXRHYXAgPSBmdW5jdGlvbiBnZXRHYXAgKCkge1xuICAgIHZhciBnYXAgPSBnZXRTdHlsZXMoXG4gICAgICAgIHRoaXMuZ3JpZEdhcFByb3AsXG4gICAgICAgIFt0aGlzLmdyaWRdLFxuICAgICAgICBnZXRNYXRjaGVkQ1NTUnVsZXModGhpcy5ncmlkKVxuICAgICk7XG4gICAgaWYgKCFnYXAubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBnYXBbMF1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0UmF3Q29tcHV0ZWRUcmFja3MgPSBmdW5jdGlvbiBnZXRSYXdDb21wdXRlZFRyYWNrcyAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ3JpZClbdGhpcy5ncmlkVGVtcGxhdGVQcm9wXVxufTtcblxuR3V0dGVyLnByb3RvdHlwZS5nZXRSYXdDb21wdXRlZEdhcCA9IGZ1bmN0aW9uIGdldFJhd0NvbXB1dGVkR2FwICgpIHtcbiAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5ncmlkKVt0aGlzLmdyaWRHYXBQcm9wXVxufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zZXRUcmFja3MgPSBmdW5jdGlvbiBzZXRUcmFja3MgKHJhdykge1xuICAgIHRoaXMudHJhY2tzID0gcmF3LnNwbGl0KCcgJyk7XG4gICAgdGhpcy50cmFja1ZhbHVlcyA9IHBhcnNlKHJhdyk7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLnNldENvbXB1dGVkVHJhY2tzID0gZnVuY3Rpb24gc2V0Q29tcHV0ZWRUcmFja3MgKHJhdykge1xuICAgIHRoaXMuY29tcHV0ZWRUcmFja3MgPSByYXcuc3BsaXQoJyAnKTtcbiAgICB0aGlzLmNvbXB1dGVkUGl4ZWxzID0gcGFyc2UocmF3KTtcbn07XG5cbkd1dHRlci5wcm90b3R5cGUuc2V0R2FwID0gZnVuY3Rpb24gc2V0R2FwIChyYXcpIHtcbiAgICB0aGlzLmdhcCA9IHJhdztcbn07XG5cbkd1dHRlci5wcm90b3R5cGUuc2V0Q29tcHV0ZWRHYXAgPSBmdW5jdGlvbiBzZXRDb21wdXRlZEdhcCAocmF3KSB7XG4gICAgdGhpcy5jb21wdXRlZEdhcCA9IHJhdztcbiAgICB0aGlzLmNvbXB1dGVkR2FwUGl4ZWxzID0gZ2V0R2FwVmFsdWUoJ3B4JywgdGhpcy5jb21wdXRlZEdhcCkgfHwgMDtcbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0TW91c2VQb3NpdGlvbiA9IGZ1bmN0aW9uIGdldE1vdXNlUG9zaXRpb24gKGUpIHtcbiAgICBpZiAoJ3RvdWNoZXMnIGluIGUpIHsgcmV0dXJuIGUudG91Y2hlc1swXVt0aGlzLmNsaWVudEF4aXNdIH1cbiAgICByZXR1cm4gZVt0aGlzLmNsaWVudEF4aXNdXG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLnN0YXJ0RHJhZ2dpbmcgPSBmdW5jdGlvbiBzdGFydERyYWdnaW5nIChlKSB7XG4gICAgaWYgKCdidXR0b24nIGluIGUgJiYgZS5idXR0b24gIT09IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRG9uJ3QgYWN0dWFsbHkgZHJhZyB0aGUgZWxlbWVudC4gV2UgZW11bGF0ZSB0aGF0IGluIHRoZSBkcmFnIGZ1bmN0aW9uLlxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5ncmlkID0gdGhpcy5lbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ncmlkID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICB0aGlzLmdldERpbWVuc2lvbnMoKTtcbiAgICB0aGlzLnNldFRyYWNrcyh0aGlzLmdldFJhd1RyYWNrcygpKTtcbiAgICB0aGlzLnNldENvbXB1dGVkVHJhY2tzKHRoaXMuZ2V0UmF3Q29tcHV0ZWRUcmFja3MoKSk7XG4gICAgdGhpcy5zZXRHYXAodGhpcy5nZXRHYXAoKSk7XG4gICAgdGhpcy5zZXRDb21wdXRlZEdhcCh0aGlzLmdldFJhd0NvbXB1dGVkR2FwKCkpO1xuXG4gICAgdmFyIHRyYWNrUGVyY2VudGFnZSA9IHRoaXMudHJhY2tWYWx1ZXMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbiAodHJhY2spIHsgcmV0dXJuIHRyYWNrLnR5cGUgPT09ICclJzsgfVxuICAgICk7XG4gICAgdmFyIHRyYWNrRnIgPSB0aGlzLnRyYWNrVmFsdWVzLmZpbHRlcihmdW5jdGlvbiAodHJhY2spIHsgcmV0dXJuIHRyYWNrLnR5cGUgPT09ICdmcic7IH0pO1xuXG4gICAgdGhpcy50b3RhbEZycyA9IHRyYWNrRnIubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMudG90YWxGcnMpIHtcbiAgICAgICAgdmFyIHRyYWNrID0gZmlyc3ROb25aZXJvKHRyYWNrRnIpO1xuXG4gICAgICAgIGlmICh0cmFjayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mclRvUGl4ZWxzID1cbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVkUGl4ZWxzW3RyYWNrXS5udW1lcmljIC8gdHJhY2tGclt0cmFja10ubnVtZXJpYztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0cmFja1BlcmNlbnRhZ2UubGVuZ3RoKSB7XG4gICAgICAgIHZhciB0cmFjayQxID0gZmlyc3ROb25aZXJvKHRyYWNrUGVyY2VudGFnZSk7XG5cbiAgICAgICAgaWYgKHRyYWNrJDEgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucGVyY2VudGFnZVRvUGl4ZWxzID1cbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVkUGl4ZWxzW3RyYWNrJDFdLm51bWVyaWMgL1xuICAgICAgICAgICAgICAgIHRyYWNrUGVyY2VudGFnZVt0cmFjayQxXS5udW1lcmljO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0IHN0YXJ0IG9mIGd1dHRlciB0cmFja1xuICAgIHZhciBndXR0ZXJTdGFydCA9IHRoaXMuZ2V0U2l6ZUF0VHJhY2sodGhpcy50cmFjaywgZmFsc2UpICsgdGhpcy5zdGFydDtcbiAgICB0aGlzLmRyYWdTdGFydE9mZnNldCA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihlKSAtIGd1dHRlclN0YXJ0O1xuXG4gICAgdGhpcy5hVHJhY2sgPSB0aGlzLnRyYWNrIC0gMTtcblxuICAgIGlmICh0aGlzLnRyYWNrIDwgdGhpcy50cmFja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLmJUcmFjayA9IHRoaXMudHJhY2sgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgKFwiSW52YWxpZCB0cmFjayBpbmRleDogXCIgKyAodGhpcy50cmFjaykgKyBcIi4gVHJhY2sgbXVzdCBiZSBiZXR3ZWVuIHR3byBvdGhlciB0cmFja3MgYW5kIG9ubHkgXCIgKyAodGhpcy50cmFja3MubGVuZ3RoKSArIFwiIHRyYWNrcyB3ZXJlIGZvdW5kLlwiKVxuICAgICAgICApXG4gICAgfVxuXG4gICAgdGhpcy5hVHJhY2tTdGFydCA9IHRoaXMuZ2V0U2l6ZUF0VHJhY2sodGhpcy5hVHJhY2ssIGZhbHNlKSArIHRoaXMuc3RhcnQ7XG4gICAgdGhpcy5iVHJhY2tFbmQgPSB0aGlzLmdldFNpemVBdFRyYWNrKHRoaXMuYlRyYWNrLCB0cnVlKSArIHRoaXMuc3RhcnQ7XG5cbiAgICAvLyBTZXQgdGhlIGRyYWdnaW5nIHByb3BlcnR5IG9mIHRoZSBwYWlyIG9iamVjdC5cbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcblxuICAgIC8vIEFsbCB0aGUgYmluZGluZy4gYHdpbmRvd2AgZ2V0cyB0aGUgc3RvcCBldmVudHMgaW4gY2FzZSB3ZSBkcmFnIG91dCBvZiB0aGUgZWxlbWVudHMuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5kcmFnKTtcblxuICAgIC8vIERpc2FibGUgc2VsZWN0aW9uLiBEaXNhYmxlIVxuICAgIHRoaXMuZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RzdGFydCcsIE5PT1ApO1xuICAgIHRoaXMuZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBOT09QKTtcblxuICAgIHRoaXMuZ3JpZC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgIHRoaXMuZ3JpZC5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgIHRoaXMuZ3JpZC5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgIHRoaXMuZ3JpZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXG4gICAgLy8gU2V0IHRoZSBjdXJzb3IgYXQgbXVsdGlwbGUgbGV2ZWxzXG4gICAgdGhpcy5ncmlkLnN0eWxlLmN1cnNvciA9IHRoaXMuY3Vyc29yO1xuICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IHRoaXMuY3Vyc29yO1xuXG4gICAgdGhpcy5vbkRyYWdTdGFydCh0aGlzLmRpcmVjdGlvbiwgdGhpcy50cmFjayk7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLnN0b3BEcmFnZ2luZyA9IGZ1bmN0aW9uIHN0b3BEcmFnZ2luZyAoKSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgLy8gUmVtb3ZlIHRoZSBzdG9yZWQgZXZlbnQgbGlzdGVuZXJzLiBUaGlzIGlzIHdoeSB3ZSBzdG9yZSB0aGVtLlxuICAgIHRoaXMuY2xlYW51cCgpO1xuXG4gICAgdGhpcy5vbkRyYWdFbmQodGhpcy5kaXJlY3Rpb24sIHRoaXMudHJhY2spO1xuXG4gICAgaWYgKHRoaXMubmVlZHNEZXN0cm95KSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICdtb3VzZWRvd24nLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0cm95Q2IoKTtcbiAgICAgICAgdGhpcy5uZWVkc0Rlc3Ryb3kgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZXN0cm95Q2IgPSBudWxsO1xuICAgIH1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZHJhZyA9IGZ1bmN0aW9uIGRyYWcgKGUpIHtcbiAgICB2YXIgbW91c2VQb3NpdGlvbiA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihlKTtcblxuICAgIHZhciBndXR0ZXJTaXplID0gdGhpcy5nZXRTaXplT2ZUcmFjayh0aGlzLnRyYWNrKTtcbiAgICB2YXIgbWluTW91c2VQb3NpdGlvbiA9XG4gICAgICAgIHRoaXMuYVRyYWNrU3RhcnQgK1xuICAgICAgICB0aGlzLm1pblNpemVTdGFydCArXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0ICtcbiAgICAgICAgdGhpcy5jb21wdXRlZEdhcFBpeGVscztcbiAgICB2YXIgbWF4TW91c2VQb3NpdGlvbiA9XG4gICAgICAgIHRoaXMuYlRyYWNrRW5kIC1cbiAgICAgICAgdGhpcy5taW5TaXplRW5kIC1cbiAgICAgICAgdGhpcy5jb21wdXRlZEdhcFBpeGVscyAtXG4gICAgICAgIChndXR0ZXJTaXplIC0gdGhpcy5kcmFnU3RhcnRPZmZzZXQpO1xuICAgIHZhciBtaW5Nb3VzZVBvc2l0aW9uT2Zmc2V0ID0gbWluTW91c2VQb3NpdGlvbiArIHRoaXMuc25hcE9mZnNldDtcbiAgICB2YXIgbWF4TW91c2VQb3NpdGlvbk9mZnNldCA9IG1heE1vdXNlUG9zaXRpb24gLSB0aGlzLnNuYXBPZmZzZXQ7XG5cbiAgICBpZiAobW91c2VQb3NpdGlvbiA8IG1pbk1vdXNlUG9zaXRpb25PZmZzZXQpIHtcbiAgICAgICAgbW91c2VQb3NpdGlvbiA9IG1pbk1vdXNlUG9zaXRpb247XG4gICAgfVxuXG4gICAgaWYgKG1vdXNlUG9zaXRpb24gPiBtYXhNb3VzZVBvc2l0aW9uT2Zmc2V0KSB7XG4gICAgICAgIG1vdXNlUG9zaXRpb24gPSBtYXhNb3VzZVBvc2l0aW9uO1xuICAgIH1cblxuICAgIGlmIChtb3VzZVBvc2l0aW9uIDwgbWluTW91c2VQb3NpdGlvbikge1xuICAgICAgICBtb3VzZVBvc2l0aW9uID0gbWluTW91c2VQb3NpdGlvbjtcbiAgICB9IGVsc2UgaWYgKG1vdXNlUG9zaXRpb24gPiBtYXhNb3VzZVBvc2l0aW9uKSB7XG4gICAgICAgIG1vdXNlUG9zaXRpb24gPSBtYXhNb3VzZVBvc2l0aW9uO1xuICAgIH1cblxuICAgIHZhciBhVHJhY2tTaXplID1cbiAgICAgICAgbW91c2VQb3NpdGlvbiAtXG4gICAgICAgIHRoaXMuYVRyYWNrU3RhcnQgLVxuICAgICAgICB0aGlzLmRyYWdTdGFydE9mZnNldCAtXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHM7XG4gICAgdmFyIGJUcmFja1NpemUgPVxuICAgICAgICB0aGlzLmJUcmFja0VuZCAtXG4gICAgICAgIG1vdXNlUG9zaXRpb24gK1xuICAgICAgICB0aGlzLmRyYWdTdGFydE9mZnNldCAtXG4gICAgICAgIGd1dHRlclNpemUgLVxuICAgICAgICB0aGlzLmNvbXB1dGVkR2FwUGl4ZWxzO1xuXG4gICAgaWYgKHRoaXMuZHJhZ0ludGVydmFsID4gMSkge1xuICAgICAgICB2YXIgYVRyYWNrU2l6ZUludGVydmFsZWQgPVxuICAgICAgICAgICAgTWF0aC5yb3VuZChhVHJhY2tTaXplIC8gdGhpcy5kcmFnSW50ZXJ2YWwpICogdGhpcy5kcmFnSW50ZXJ2YWw7XG4gICAgICAgIGJUcmFja1NpemUgLT0gYVRyYWNrU2l6ZUludGVydmFsZWQgLSBhVHJhY2tTaXplO1xuICAgICAgICBhVHJhY2tTaXplID0gYVRyYWNrU2l6ZUludGVydmFsZWQ7XG4gICAgfVxuXG4gICAgaWYgKGFUcmFja1NpemUgPCB0aGlzLm1pblNpemVTdGFydCkge1xuICAgICAgICBhVHJhY2tTaXplID0gdGhpcy5taW5TaXplU3RhcnQ7XG4gICAgfVxuXG4gICAgaWYgKGJUcmFja1NpemUgPCB0aGlzLm1pblNpemVFbmQpIHtcbiAgICAgICAgYlRyYWNrU2l6ZSA9IHRoaXMubWluU2l6ZUVuZDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50cmFja1ZhbHVlc1t0aGlzLmFUcmFja10udHlwZSA9PT0gJ3B4Jykge1xuICAgICAgICB0aGlzLnRyYWNrc1t0aGlzLmFUcmFja10gPSBhVHJhY2tTaXplICsgXCJweFwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy50cmFja1ZhbHVlc1t0aGlzLmFUcmFja10udHlwZSA9PT0gJ2ZyJykge1xuICAgICAgICBpZiAodGhpcy50b3RhbEZycyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy50cmFja3NbdGhpcy5hVHJhY2tdID0gJzFmcic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0RnIgPSBhVHJhY2tTaXplIC8gdGhpcy5mclRvUGl4ZWxzO1xuICAgICAgICAgICAgdGhpcy50cmFja3NbdGhpcy5hVHJhY2tdID0gdGFyZ2V0RnIgKyBcImZyXCI7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHJhY2tWYWx1ZXNbdGhpcy5hVHJhY2tdLnR5cGUgPT09ICclJykge1xuICAgICAgICB2YXIgdGFyZ2V0UGVyY2VudGFnZSA9IGFUcmFja1NpemUgLyB0aGlzLnBlcmNlbnRhZ2VUb1BpeGVscztcbiAgICAgICAgdGhpcy50cmFja3NbdGhpcy5hVHJhY2tdID0gdGFyZ2V0UGVyY2VudGFnZSArIFwiJVwiO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRyYWNrVmFsdWVzW3RoaXMuYlRyYWNrXS50eXBlID09PSAncHgnKSB7XG4gICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYlRyYWNrXSA9IGJUcmFja1NpemUgKyBcInB4XCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRyYWNrVmFsdWVzW3RoaXMuYlRyYWNrXS50eXBlID09PSAnZnInKSB7XG4gICAgICAgIGlmICh0aGlzLnRvdGFsRnJzID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrc1t0aGlzLmJUcmFja10gPSAnMWZyJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRGciQxID0gYlRyYWNrU2l6ZSAvIHRoaXMuZnJUb1BpeGVscztcbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYlRyYWNrXSA9IHRhcmdldEZyJDEgKyBcImZyXCI7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHJhY2tWYWx1ZXNbdGhpcy5iVHJhY2tdLnR5cGUgPT09ICclJykge1xuICAgICAgICB2YXIgdGFyZ2V0UGVyY2VudGFnZSQxID0gYlRyYWNrU2l6ZSAvIHRoaXMucGVyY2VudGFnZVRvUGl4ZWxzO1xuICAgICAgICB0aGlzLnRyYWNrc1t0aGlzLmJUcmFja10gPSB0YXJnZXRQZXJjZW50YWdlJDEgKyBcIiVcIjtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGUgPSB0aGlzLnRyYWNrcy5qb2luKCcgJyk7XG4gICAgdGhpcy53cml0ZVN0eWxlKHRoaXMuZ3JpZCwgdGhpcy5ncmlkVGVtcGxhdGVQcm9wLCBzdHlsZSk7XG4gICAgdGhpcy5vbkRyYWcodGhpcy5kaXJlY3Rpb24sIHRoaXMudHJhY2ssIHN0eWxlKTtcbn07XG5cbkd1dHRlci5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uIGNsZWFudXAgKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZyk7XG5cbiAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5yZW1vdmVFdmVudExpc3RlbmVyKCdzZWxlY3RzdGFydCcsIE5PT1ApO1xuICAgICAgICB0aGlzLmdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgTk9PUCk7XG5cbiAgICAgICAgdGhpcy5ncmlkLnN0eWxlLnVzZXJTZWxlY3QgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkLnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkLnN0eWxlLk1velVzZXJTZWxlY3QgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcblxuICAgICAgICB0aGlzLmdyaWQuc3R5bGUuY3Vyc29yID0gJyc7XG4gICAgfVxuXG4gICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJyc7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95IChpbW1lZGlhdGUsIGNiKSB7XG4gICAgICAgIGlmICggaW1tZWRpYXRlID09PSB2b2lkIDAgKSBpbW1lZGlhdGUgPSB0cnVlO1xuXG4gICAgaWYgKGltbWVkaWF0ZSB8fCB0aGlzLmRyYWdnaW5nID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgJ21vdXNlZG93bicsXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubmVlZHNEZXN0cm95ID0gdHJ1ZTtcbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lDYiA9IGNiO1xuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIGdldFRyYWNrT3B0aW9uID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRyYWNrLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAodHJhY2sgaW4gb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gb3B0aW9uc1t0cmFja11cbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG59O1xuXG52YXIgY3JlYXRlR3V0dGVyID0gZnVuY3Rpb24gKGRpcmVjdGlvbiwgb3B0aW9ucykgeyByZXR1cm4gZnVuY3Rpb24gKGd1dHRlck9wdGlvbnMpIHtcbiAgICBpZiAoZ3V0dGVyT3B0aW9ucy50cmFjayA8IDEpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICAoXCJJbnZhbGlkIHRyYWNrIGluZGV4OiBcIiArIChndXR0ZXJPcHRpb25zLnRyYWNrKSArIFwiLiBUcmFjayBtdXN0IGJlIGJldHdlZW4gdHdvIG90aGVyIHRyYWNrcy5cIilcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHZhciB0cmFja01pblNpemVzID1cbiAgICAgICAgZGlyZWN0aW9uID09PSAnY29sdW1uJ1xuICAgICAgICAgICAgPyBvcHRpb25zLmNvbHVtbk1pblNpemVzIHx8IHt9XG4gICAgICAgICAgICA6IG9wdGlvbnMucm93TWluU2l6ZXMgfHwge307XG4gICAgdmFyIHRyYWNrTWluU2l6ZSA9IGRpcmVjdGlvbiA9PT0gJ2NvbHVtbicgPyAnY29sdW1uTWluU2l6ZScgOiAncm93TWluU2l6ZSc7XG5cbiAgICByZXR1cm4gbmV3IEd1dHRlcihcbiAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB7bWluU2l6ZVN0YXJ0OiBnZXRUcmFja09wdGlvbihcbiAgICAgICAgICAgICAgICB0cmFja01pblNpemVzLFxuICAgICAgICAgICAgICAgIGd1dHRlck9wdGlvbnMudHJhY2sgLSAxLFxuICAgICAgICAgICAgICAgIGdldE9wdGlvbihcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tNaW5TaXplLFxuICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb24ob3B0aW9ucywgJ21pblNpemUnLCAwKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtaW5TaXplRW5kOiBnZXRUcmFja09wdGlvbihcbiAgICAgICAgICAgICAgICB0cmFja01pblNpemVzLFxuICAgICAgICAgICAgICAgIGd1dHRlck9wdGlvbnMudHJhY2sgKyAxLFxuICAgICAgICAgICAgICAgIGdldE9wdGlvbihcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tNaW5TaXplLFxuICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb24ob3B0aW9ucywgJ21pblNpemUnLCAwKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9LFxuICAgICAgICAgICAgZ3V0dGVyT3B0aW9ucyksXG4gICAgICAgIG9wdGlvbnNcbiAgICApXG59OyB9O1xuXG52YXIgR3JpZCA9IGZ1bmN0aW9uIEdyaWQob3B0aW9ucykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy5jb2x1bW5HdXR0ZXJzID0ge307XG4gICAgdGhpcy5yb3dHdXR0ZXJzID0ge307XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB7Y29sdW1uR3V0dGVyczogb3B0aW9ucy5jb2x1bW5HdXR0ZXJzIHx8IFtdLFxuICAgICAgICByb3dHdXR0ZXJzOiBvcHRpb25zLnJvd0d1dHRlcnMgfHwgW10sXG4gICAgICAgIGNvbHVtbk1pblNpemVzOiBvcHRpb25zLmNvbHVtbk1pblNpemVzIHx8IHt9LFxuICAgICAgICByb3dNaW5TaXplczogb3B0aW9ucy5yb3dNaW5TaXplcyB8fCB7fX0sXG4gICAgICAgIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5vcHRpb25zLmNvbHVtbkd1dHRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZ3V0dGVyT3B0aW9ucykge1xuICAgICAgICB0aGlzJDEuY29sdW1uR3V0dGVyc1tndXR0ZXJPcHRpb25zLnRyYWNrXSA9IGNyZWF0ZUd1dHRlcihcbiAgICAgICAgICAgICdjb2x1bW4nLFxuICAgICAgICAgICAgdGhpcyQxLm9wdGlvbnNcbiAgICAgICAgKShndXR0ZXJPcHRpb25zKTtcbiAgICB9KTtcblxuICAgIHRoaXMub3B0aW9ucy5yb3dHdXR0ZXJzLmZvckVhY2goZnVuY3Rpb24gKGd1dHRlck9wdGlvbnMpIHtcbiAgICAgICAgdGhpcyQxLnJvd0d1dHRlcnNbZ3V0dGVyT3B0aW9ucy50cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICAgICAncm93JyxcbiAgICAgICAgICAgIHRoaXMkMS5vcHRpb25zXG4gICAgICAgICkoZ3V0dGVyT3B0aW9ucyk7XG4gICAgfSk7XG59O1xuXG5HcmlkLnByb3RvdHlwZS5hZGRDb2x1bW5HdXR0ZXIgPSBmdW5jdGlvbiBhZGRDb2x1bW5HdXR0ZXIgKGVsZW1lbnQsIHRyYWNrKSB7XG4gICAgaWYgKHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10pIHtcbiAgICAgICAgdGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXSA9IGNyZWF0ZUd1dHRlcihcbiAgICAgICAgJ2NvbHVtbicsXG4gICAgICAgIHRoaXMub3B0aW9uc1xuICAgICkoe1xuICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgfSk7XG59O1xuXG5HcmlkLnByb3RvdHlwZS5hZGRSb3dHdXR0ZXIgPSBmdW5jdGlvbiBhZGRSb3dHdXR0ZXIgKGVsZW1lbnQsIHRyYWNrKSB7XG4gICAgaWYgKHRoaXMucm93R3V0dGVyc1t0cmFja10pIHtcbiAgICAgICAgdGhpcy5yb3dHdXR0ZXJzW3RyYWNrXS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5yb3dHdXR0ZXJzW3RyYWNrXSA9IGNyZWF0ZUd1dHRlcihcbiAgICAgICAgJ3JvdycsXG4gICAgICAgIHRoaXMub3B0aW9uc1xuICAgICkoe1xuICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgfSk7XG59O1xuXG5HcmlkLnByb3RvdHlwZS5yZW1vdmVDb2x1bW5HdXR0ZXIgPSBmdW5jdGlvbiByZW1vdmVDb2x1bW5HdXR0ZXIgKHRyYWNrLCBpbW1lZGlhdGUpIHtcbiAgICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgICAgIGlmICggaW1tZWRpYXRlID09PSB2b2lkIDAgKSBpbW1lZGlhdGUgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10pIHtcbiAgICAgICAgdGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXS5kZXN0cm95KGltbWVkaWF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMkMS5jb2x1bW5HdXR0ZXJzW3RyYWNrXTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuR3JpZC5wcm90b3R5cGUucmVtb3ZlUm93R3V0dGVyID0gZnVuY3Rpb24gcmVtb3ZlUm93R3V0dGVyICh0cmFjaywgaW1tZWRpYXRlKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgICAgICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnJvd0d1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10uZGVzdHJveShpbW1lZGlhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzJDEucm93R3V0dGVyc1t0cmFja107XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbkdyaWQucHJvdG90eXBlLmhhbmRsZURyYWdTdGFydCA9IGZ1bmN0aW9uIGhhbmRsZURyYWdTdGFydCAoZSwgZGlyZWN0aW9uLCB0cmFjaykge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdjb2x1bW4nKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICAgICAnY29sdW1uJyxcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICApKHtcbiAgICAgICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10uc3RhcnREcmFnZ2luZyhlKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3JvdycpIHtcbiAgICAgICAgaWYgKHRoaXMucm93R3V0dGVyc1t0cmFja10pIHtcbiAgICAgICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10uZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yb3dHdXR0ZXJzW3RyYWNrXSA9IGNyZWF0ZUd1dHRlcihcbiAgICAgICAgICAgICdyb3cnLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zXG4gICAgICAgICkoe1xuICAgICAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yb3dHdXR0ZXJzW3RyYWNrXS5zdGFydERyYWdnaW5nKGUpO1xuICAgIH1cbn07XG5cbkdyaWQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95IChpbW1lZGlhdGUpIHtcbiAgICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgICAgIGlmICggaW1tZWRpYXRlID09PSB2b2lkIDAgKSBpbW1lZGlhdGUgPSB0cnVlO1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5jb2x1bW5HdXR0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjaykgeyByZXR1cm4gdGhpcyQxLmNvbHVtbkd1dHRlcnNbdHJhY2tdLmRlc3Ryb3koaW1tZWRpYXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcyQxLmNvbHVtbkd1dHRlcnNbdHJhY2tdO1xuICAgICAgICB9KTsgfVxuICAgICk7XG4gICAgT2JqZWN0LmtleXModGhpcy5yb3dHdXR0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjaykgeyByZXR1cm4gdGhpcyQxLnJvd0d1dHRlcnNbdHJhY2tdLmRlc3Ryb3koaW1tZWRpYXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcyQxLnJvd0d1dHRlcnNbdHJhY2tdO1xuICAgICAgICB9KTsgfVxuICAgICk7XG59O1xuXG5mdW5jdGlvbiBpbmRleCAob3B0aW9ucykgeyByZXR1cm4gbmV3IEdyaWQob3B0aW9ucyk7IH1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlci5qc1wiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuL2xvZ2luLmpzXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyLmpzXCI7XG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi9jb250ZW50LmpzXCI7XG5pbXBvcnQgR3V0dGVycyBmcm9tIFwiLi9ndXR0ZXJzLmpzXCI7XG5pbXBvcnQgU3BsaXQgZnJvbSBcInNwbGl0LWdyaWRcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHByb2plY3REYXRhID0gW3tcbiAgICB0aXRsZTogXCJcIiwgXG4gICAgZGVzY3JpcHRpb246IFwiXCIsIFxuICAgIHNlbGVjdGVkOiB0cnVlLCBcbiAgICB0YXNrczogW11cbn1dO1xuXG5jb25zdCB1c2VyRGF0YSA9IFtdO1xuXG5IZWFkZXIoKTtcbkxvZ2luKHVzZXJEYXRhKTtcblNpZGViYXIoKTtcbkNvbnRlbnQocHJvamVjdERhdGEpO1xuR3V0dGVycygpO1xuU3BsaXQoe1xuICAgIGNvbHVtbkd1dHRlcnM6IFt7XG4gICAgICAgIHRyYWNrOiAxLFxuICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1dHRlci1jb2xcIilcbiAgICB9XSxcbiAgICByb3dHdXR0ZXJzOiBbe1xuICAgICAgICB0cmFjazogMSxcbiAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJndXR0ZXItcm93XCIpXG4gICAgfV1cbn0pO1xuUHJvamVjdChwcm9qZWN0RGF0YSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9