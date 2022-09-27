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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    font-family: \"Karla\";\n}\n\nbody {\n    background-color: lightgrey;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: space-between;\n    gap: 10px;\n}\n\n.header-button {\n    border: none;\n    border-radius: 5px;\n\n    font-family: \"Roboto Mono\";\n    font-size: 1rem;\n\n    padding: 20px 40px;\n}\n\n.header-button:hover {\n    scale: 90%;\n}\n\n.input-field {\n    display: flex;\n    justify-content: space-between;\n}\n\n.button-close {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    background-color: rgb(194, 27, 27);\n    color: white;\n    font-size: 2rem;\n    font-weight: 700;\n\n    height: 50px;\n    width: 50px;\n\n    border-top-left-radius: 25px;\n    border-bottom-right-radius: 10px;\n}\n\n.sidebar-line {\n    display: flex;\n    align-items: center;\n    font-size: 1.25rem;\n\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n\n    cursor: pointer;\n}\n\n.sidebar-line:hover {\n    scale: 90%;\n}\n\n.list-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.calendar-header {\n    grid-row: 2 / 3;\n}\n\n.calendar-day {\n    grid-row: 3 / 4;\n}\n\n.projects-closed {\n    display: none;\n}\n\n.proj-item {\n    border: none;\n    font-size: 1.25rem;\n    font-family: \"Roboto Mono\";\n    background-color: rgba(0, 0, 0, 0);\n\n    display: flex;\n    align-items: center;\n    padding-left: 20%;\n    gap: 5px;\n}\n\n.proj-pic {\n    height: 2rem;\n}\n\n.popup-screen {\n    background-color: rgba(0, 0, 0, 0.5);\n\n    height: 100vh;\n    width: 100vw;\n\n    position: absolute;\n    z-index: 1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    animation: prompt-spawn;\n    animation-duration: 0.25s;\n    animation-fill-mode: forwards;\n}\n\n.popup-prompt {\n    background-color: white;\n    border-radius: 25px;\n    box-shadow: 5px 5px 20px #000000;\n\n    height: 250px;\n    width: 500px;\n\n    animation: header-spawn;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 1fr 2px 4fr;\n    grid-template-columns: 1fr 2px 4fr;\n    height: 100vh;\n    width: 100vw;\n\n    position: absolute;\n    z-index: 0;\n}\n\n#header {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n\n    background-color: lightgrey;\n    position: relative;\n    transform: translateY(-500px);\n    z-index: 2;\n    padding: 5px 0 5px 0;\n\n    animation: header-spawn;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n@keyframes header-spawn {\n    0% {\n        transform: translateY(-500px);\n    } 50% {\n        transform: translateY(20px);\n    } 100% {\n        transform: translateY(0px);\n    }\n}\n\n#header-title {\n    font-size: 4rem;\n}\n\n#header-buttons {\n    display: flex;\n    gap: 20px;\n}\n\n#login-button {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n#menu-button {\n    padding: 20px 40px;\n    transition: 0.25s;\n}\n\n#menu-button:hover {\n    padding: 20px 120px;\n    transition: 0.25s;\n}\n\n@keyframes prompt-spawn {\n    0% {\n        opacity: 0%;\n    } 100% {\n        opacity: 100%;\n    }\n}\n\n#sidebar {\n    grid-row: 3 / 4;\n    grid-column: 1 / 2;\n\n    background-color: lightgrey;\n    position: relative;\n    z-index: 1;\n    padding: 20px;\n\n    animation: sidebar-spawn;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n\n    display: grid;\n    grid-template-rows: repeat(4, minmax(50px, 80px)) auto minmax(50px, 80px);\n    justify-content: center;\n}\n\n@keyframes sidebar-spawn {\n    0% {\n        transform: translateX(-500px);\n    }\n    50% {\n        transform: translateX(20px);\n    }\n    100% {\n        transform: translateX(0px);\n    }\n}\n\n#sidebar-inbox {\n    grid-row: 1 / 2;\n}\n\n#sidebar-today {\n    grid-row: 2 / 3;\n}\n\n#sidebar-calendar {\n    grid-row: 3 / 4;\n}\n\n#sidebar-projects {\n    grid-row: 4 / 5;\n}\n\n#projects-list {\n    grid-row: 5 / 6;\n}\n\n#sidebar-add {\n    grid-row: 6 / 7;\n}\n\n#content-wrapper {\n    grid-row: 3 / 4;\n    grid-column: 3 / 4;\n\n    background-color: white;\n    position: relative;\n    z-index: 0;\n\n    animation: list-spawn;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#list {\n    animation: list-spawn;\n    animation-duration: 0.5s;\n}\n\n@keyframes list-spawn {\n    from {\n        transform: translateY(1000px);\n    }\n    to {\n        transform: translateY(0px);\n    }\n}\n\n#add-task {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n\n    font-size: 1.25rem;\n    border: none;\n    padding: 10px 20px;\n}\n\n#add-task > img {\n    height: 36px;\n}\n\n#reset-layout {\n    position: absolute;\n    bottom: 0%;\n    right: 0%;\n\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n    \n    transition: 0.25s;\n}\n\n#reset-layout:hover {\n    cursor: pointer;\n    bottom: 2%;\n    right: 2%;\n    scale: 120%;\n}\n\n#calendar {\n    display: grid;\n    grid-template-rows: repeat(auto-fill, 1fr);\n    grid-template-columns: repeat(7, minmax(100px, 1fr));\n}\n\n#calendar > h2,\n#calendar > h3,\n#calendar > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#calendar-month {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n}\n\n#gutter-col {\n    grid-row: 3 / 4;\n    grid-column: 2 / 3;\n    justify-self: center;\n\n    position: relative;\n    z-index: 1;\n\n    background-color: black;\n    width: 2px;\n    transition: 0.5s;\n\n    animation: sidebar-spawn;\n    animation-duration: 1s;\n}\n\n#gutter-col:hover {\n    cursor: col-resize;\n    width: 30px;\n}\n\n#gutter-row {\n    grid-row: 2 / 3;\n    grid-column: 1 / -1;\n    align-self: center;\n\n    position: relative;\n    z-index: 2;\n\n    background-color: black;\n    height: 2px;\n    transition: 0.5s;\n\n    animation: header-spawn;\n    animation-duration: 1s;\n}\n\n#gutter-row:hover {\n    cursor: row-resize;\n    height: 30px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono\");\n@import url(\"https://fonts.googleapis.com/css?family=Antonio\");\n@import url(\"https://fonts.googleapis.com/css?family=Karla\");\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    font-family: \"Karla\";\n}\n\nbody {\n    background-color: lightgrey;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: space-between;\n    gap: 10px;\n}\n\n.header-button {\n    border: none;\n    border-radius: 5px;\n\n    font-family: \"Roboto Mono\";\n    font-size: 1rem;\n\n    padding: 20px 40px;\n}\n\n.header-button:hover {\n    scale: 90%;\n}\n\n.input-field {\n    display: flex;\n    justify-content: space-between;\n}\n\n.button-close {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    background-color: rgb(194, 27, 27);\n    color: white;\n    font-size: 2rem;\n    font-weight: 700;\n\n    height: 50px;\n    width: 50px;\n\n    border-top-left-radius: 25px;\n    border-bottom-right-radius: 10px;\n}\n\n.sidebar-line {\n    display: flex;\n    align-items: center;\n    font-size: 1.25rem;\n\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n\n    cursor: pointer;\n}\n\n.sidebar-line:hover {\n    scale: 90%;\n}\n\n.list-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.calendar-header {\n    grid-row: 2 / 3;\n}\n\n.calendar-day {\n    grid-row: 3 / 4;\n}\n\n.projects-closed {\n    display: none;\n}\n\n.proj-item {\n    border: none;\n    font-size: 1.25rem;\n    font-family: \"Roboto Mono\";\n    background-color: rgba(0, 0, 0, 0);\n\n    display: flex;\n    align-items: center;\n    padding-left: 20%;\n    gap: 5px;\n}\n\n.proj-pic {\n    height: 2rem;\n}\n\n.popup-screen {\n    background-color: rgba(0, 0, 0, 0.5);\n\n    height: 100vh;\n    width: 100vw;\n\n    position: absolute;\n    z-index: 1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    animation: prompt-spawn;\n    animation-duration: 0.25s;\n    animation-fill-mode: forwards;\n}\n\n.popup-prompt {\n    background-color: white;\n    border-radius: 25px;\n    box-shadow: 5px 5px 20px #000000;\n\n    height: 250px;\n    width: 500px;\n\n    animation: header-spawn;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 1fr 2px 4fr;\n    grid-template-columns: 1fr 2px 4fr;\n    height: 100vh;\n    width: 100vw;\n\n    position: absolute;\n    z-index: 0;\n}\n\n#header {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n\n    background-color: lightgrey;\n    position: relative;\n    transform: translateY(-500px);\n    z-index: 2;\n    padding: 5px 0 5px 0;\n\n    animation: header-spawn;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n@keyframes header-spawn {\n    0% {\n        transform: translateY(-500px);\n    } 50% {\n        transform: translateY(20px);\n    } 100% {\n        transform: translateY(0px);\n    }\n}\n\n#header-title {\n    font-size: 4rem;\n}\n\n#header-buttons {\n    display: flex;\n    gap: 20px;\n}\n\n#login-button {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n#menu-button {\n    padding: 20px 40px;\n    transition: 0.25s;\n}\n\n#menu-button:hover {\n    padding: 20px 120px;\n    transition: 0.25s;\n}\n\n@keyframes prompt-spawn {\n    0% {\n        opacity: 0%;\n    } 100% {\n        opacity: 100%;\n    }\n}\n\n#sidebar {\n    grid-row: 3 / 4;\n    grid-column: 1 / 2;\n\n    background-color: lightgrey;\n    position: relative;\n    z-index: 1;\n    padding: 20px;\n\n    animation: sidebar-spawn;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n\n    display: grid;\n    grid-template-rows: repeat(4, minmax(50px, 80px)) auto minmax(50px, 80px);\n    justify-content: center;\n}\n\n@keyframes sidebar-spawn {\n    0% {\n        transform: translateX(-500px);\n    }\n    50% {\n        transform: translateX(20px);\n    }\n    100% {\n        transform: translateX(0px);\n    }\n}\n\n#sidebar-inbox {\n    grid-row: 1 / 2;\n}\n\n#sidebar-today {\n    grid-row: 2 / 3;\n}\n\n#sidebar-calendar {\n    grid-row: 3 / 4;\n}\n\n#sidebar-projects {\n    grid-row: 4 / 5;\n}\n\n#projects-list {\n    grid-row: 5 / 6;\n}\n\n#sidebar-add {\n    grid-row: 6 / 7;\n}\n\n#content-wrapper {\n    grid-row: 3 / 4;\n    grid-column: 3 / 4;\n\n    background-color: white;\n    position: relative;\n    z-index: 0;\n\n    animation: list-spawn;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#list {\n    animation: list-spawn;\n    animation-duration: 0.5s;\n}\n\n@keyframes list-spawn {\n    from {\n        transform: translateY(1000px);\n    }\n    to {\n        transform: translateY(0px);\n    }\n}\n\n#add-task {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n\n    font-size: 1.25rem;\n    border: none;\n    padding: 10px 20px;\n}\n\n#add-task > img {\n    height: 36px;\n}\n\n#reset-layout {\n    position: absolute;\n    bottom: 0%;\n    right: 0%;\n\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n    \n    transition: 0.25s;\n}\n\n#reset-layout:hover {\n    cursor: pointer;\n    bottom: 2%;\n    right: 2%;\n    scale: 120%;\n}\n\n#calendar {\n    display: grid;\n    grid-template-rows: repeat(auto-fill, 1fr);\n    grid-template-columns: repeat(7, minmax(100px, 1fr));\n}\n\n#calendar > h2,\n#calendar > h3,\n#calendar > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#calendar-month {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n}\n\n#gutter-col {\n    grid-row: 3 / 4;\n    grid-column: 2 / 3;\n    justify-self: center;\n\n    position: relative;\n    z-index: 1;\n\n    background-color: black;\n    width: 2px;\n    transition: 0.5s;\n\n    animation: sidebar-spawn;\n    animation-duration: 1s;\n}\n\n#gutter-col:hover {\n    cursor: col-resize;\n    width: 30px;\n}\n\n#gutter-row {\n    grid-row: 2 / 3;\n    grid-column: 1 / -1;\n    align-self: center;\n\n    position: relative;\n    z-index: 2;\n\n    background-color: black;\n    height: 2px;\n    transition: 0.5s;\n\n    animation: header-spawn;\n    animation-duration: 1s;\n}\n\n#gutter-row:hover {\n    cursor: row-resize;\n    height: 30px;\n}"],"sourceRoot":""}]);
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
    function calDay(currDay) {
        const day = document.createElement("div");
        day.setAttribute("class", "calendar-day");
        const dayNum = document.createElement("h4");
        dayNum.textContent = currDay;
        day.appendChild(dayNum);
        calendar.appendChild(day);
    }


    const calendarWrap = document.createElement("div");
    calendarWrap.setAttribute("id", "calendar-wrapper");
    calendarWrap.setAttribute("class", "list-content");

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currDate = new Date();
    const currYear = currDate.getFullYear();
    const currMon = months[currDate.getMonth()];
    const currDay = currDate.getDate();
    const weekDay = days[currDate.getDay()];

    const title = document.createElement("h1");
    title.setAttribute("id", "list-title");
    title.textContent = "Calendar";
    calendarWrap.appendChild(title);

    const calendar = document.createElement("div");
    calendar.setAttribute("id", "calendar");

    const calMonth = document.createElement("h2");
    calMonth.setAttribute("id", "calendar-month");
    calMonth.textContent = currMon;
    calendar.appendChild(calMonth);

    for (const day of days) {
        const header = document.createElement("h3");
        header.setAttribute("class", "calendar-header");
        header.textContent = day;
        calendar.appendChild(header);
    }

    let numDays;

    if (currMon === "February") {
        numDays = 28;
    } else if (currMon === "April" || currMon === "June" || currMon === "September" || currMon === "November") {
        numDays = 30;
    } else {
        numDays = 31;
    }

    for (let i = 1; i <= numDays; i++) {
        calDay(i);
    }

    calendarWrap.appendChild(calendar);
    const list = document.getElementById("content-wrapper");
    list.insertBefore(calendarWrap, list.children[0]);
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
        document.querySelector(".list-content").remove();

        (0,_inbox_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectData);
    });

    document.getElementById("sidebar-today").addEventListener("click", function() {
        document.querySelector(".list-content").remove();

        (0,_today_js__WEBPACK_IMPORTED_MODULE_1__["default"])(projectData);
    });

    document.getElementById("sidebar-calendar").addEventListener("click", function() {
        document.querySelector(".list-content").remove();

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
    const inbox = document.createElement("div");
    inbox.setAttribute("id", "inbox");
    inbox.setAttribute("class", "list-content");

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
    const today = document.createElement("div");
    today.setAttribute("id", "today");
    today.setAttribute("class", "list-content");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNHQUFzRztBQUN0RywyR0FBMkc7QUFDM0csdUdBQXVHO0FBQ3ZHLHFHQUFxRztBQUNyRztBQUNBLDZDQUE2QyxnQkFBZ0IsaUJBQWlCLDZCQUE2QiwrQkFBK0IsR0FBRyxVQUFVLGtDQUFrQyxHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QixxQ0FBcUMsaUNBQWlDLGdCQUFnQixHQUFHLG9CQUFvQixtQkFBbUIseUJBQXlCLHFDQUFxQyxzQkFBc0IsMkJBQTJCLEdBQUcsMEJBQTBCLGlCQUFpQixHQUFHLGtCQUFrQixvQkFBb0IscUNBQXFDLEdBQUcsbUJBQW1CLHlCQUF5QixhQUFhLGNBQWMsMkNBQTJDLG1CQUFtQixzQkFBc0IsdUJBQXVCLHFCQUFxQixrQkFBa0IscUNBQXFDLHVDQUF1QyxHQUFHLG1CQUFtQixvQkFBb0IsMEJBQTBCLHlCQUF5QixxQkFBcUIseUNBQXlDLHdCQUF3QixHQUFHLHlCQUF5QixpQkFBaUIsR0FBRyxtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEdBQUcsc0JBQXNCLHNCQUFzQixHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyxzQkFBc0Isb0JBQW9CLEdBQUcsZ0JBQWdCLG1CQUFtQix5QkFBeUIsbUNBQW1DLHlDQUF5QyxzQkFBc0IsMEJBQTBCLHdCQUF3QixlQUFlLEdBQUcsZUFBZSxtQkFBbUIsR0FBRyxtQkFBbUIsMkNBQTJDLHNCQUFzQixtQkFBbUIsMkJBQTJCLGlCQUFpQixzQkFBc0IsOEJBQThCLDBCQUEwQixnQ0FBZ0MsZ0NBQWdDLG9DQUFvQyxHQUFHLG1CQUFtQiw4QkFBOEIsMEJBQTBCLHVDQUF1QyxzQkFBc0IsbUJBQW1CLGdDQUFnQywrQkFBK0Isb0NBQW9DLHNCQUFzQiw2QkFBNkIsOEJBQThCLDBCQUEwQixlQUFlLEdBQUcsY0FBYyxvQkFBb0Isc0NBQXNDLHlDQUF5QyxvQkFBb0IsbUJBQW1CLDJCQUEyQixpQkFBaUIsR0FBRyxhQUFhLHNCQUFzQiwwQkFBMEIsb0NBQW9DLHlCQUF5QixvQ0FBb0MsaUJBQWlCLDJCQUEyQixnQ0FBZ0MsNkJBQTZCLG9DQUFvQyxzQkFBc0Isb0NBQW9DLDBCQUEwQixHQUFHLDZCQUE2QixVQUFVLHdDQUF3QyxRQUFRLEtBQUssc0NBQXNDLFFBQVEsTUFBTSxxQ0FBcUMsT0FBTyxHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyxxQkFBcUIsb0JBQW9CLGdCQUFnQixHQUFHLG1CQUFtQixvQkFBb0IsMEJBQTBCLGdCQUFnQixHQUFHLGtCQUFrQix5QkFBeUIsd0JBQXdCLEdBQUcsd0JBQXdCLDBCQUEwQix3QkFBd0IsR0FBRyw2QkFBNkIsVUFBVSxzQkFBc0IsUUFBUSxNQUFNLHdCQUF3QixPQUFPLEdBQUcsY0FBYyxzQkFBc0IseUJBQXlCLG9DQUFvQyx5QkFBeUIsaUJBQWlCLG9CQUFvQixpQ0FBaUMsNkJBQTZCLG9DQUFvQyxzQkFBc0IsZ0ZBQWdGLDhCQUE4QixHQUFHLDhCQUE4QixVQUFVLHdDQUF3QyxPQUFPLFdBQVcsc0NBQXNDLE9BQU8sWUFBWSxxQ0FBcUMsT0FBTyxHQUFHLG9CQUFvQixzQkFBc0IsR0FBRyxvQkFBb0Isc0JBQXNCLEdBQUcsdUJBQXVCLHNCQUFzQixHQUFHLHVCQUF1QixzQkFBc0IsR0FBRyxvQkFBb0Isc0JBQXNCLEdBQUcsa0JBQWtCLHNCQUFzQixHQUFHLHNCQUFzQixzQkFBc0IseUJBQXlCLGdDQUFnQyx5QkFBeUIsaUJBQWlCLDhCQUE4QiwrQkFBK0Isb0NBQW9DLHNCQUFzQiw4QkFBOEIsMEJBQTBCLEdBQUcsV0FBVyw0QkFBNEIsK0JBQStCLEdBQUcsMkJBQTJCLFlBQVksd0NBQXdDLE9BQU8sVUFBVSxxQ0FBcUMsT0FBTyxHQUFHLGVBQWUsb0JBQW9CLDBCQUEwQixnQkFBZ0IsMkJBQTJCLG1CQUFtQix5QkFBeUIsR0FBRyxxQkFBcUIsbUJBQW1CLEdBQUcsbUJBQW1CLHlCQUF5QixpQkFBaUIsZ0JBQWdCLHFCQUFxQix5Q0FBeUMsOEJBQThCLEdBQUcseUJBQXlCLHNCQUFzQixpQkFBaUIsZ0JBQWdCLGtCQUFrQixHQUFHLGVBQWUsb0JBQW9CLGlEQUFpRCwyREFBMkQsR0FBRyx1REFBdUQsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxxQkFBcUIsc0JBQXNCLDBCQUEwQixHQUFHLGlCQUFpQixzQkFBc0IseUJBQXlCLDJCQUEyQiwyQkFBMkIsaUJBQWlCLGdDQUFnQyxpQkFBaUIsdUJBQXVCLGlDQUFpQyw2QkFBNkIsR0FBRyx1QkFBdUIseUJBQXlCLGtCQUFrQixHQUFHLGlCQUFpQixzQkFBc0IsMEJBQTBCLHlCQUF5QiwyQkFBMkIsaUJBQWlCLGdDQUFnQyxrQkFBa0IsdUJBQXVCLGdDQUFnQyw2QkFBNkIsR0FBRyx1QkFBdUIseUJBQXlCLG1CQUFtQixHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLGFBQWEsV0FBVyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssYUFBYSxXQUFXLFdBQVcsWUFBWSxZQUFZLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxXQUFXLFdBQVcsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZ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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdHQUFnRyxZQUFZO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUNsR2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakZlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDeEZlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDaEZlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNaQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQSxVQUFVLFNBQVM7QUFDbkI7QUFDQSxVQUFVLFNBQVM7QUFDbkI7QUFDQSxVQUFVLFNBQVM7QUFDbkIsNEJBQTRCLFNBQVM7QUFDckM7QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0EsNEJBQTRCO0FBQzVCLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLCtCQUErQjtBQUN6RTs7QUFFQTtBQUNBOztBQUVBLDBEQUEwRDtBQUMxRCw0QkFBNEIsdUJBQXVCO0FBQ25ELG1DQUFtQyw2Q0FBNkM7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSw2REFBNkQsNkJBQTZCOztBQUUxRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLEdBQUc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DQUFtQyxHQUFHO0FBQ3RDO0FBQ0Esb0RBQW9EO0FBQ3BELCtDQUErQztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwrREFBK0Q7QUFDL0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSwyQkFBMkI7O0FBRTNCLGlFQUFlLEtBQUssRUFBQzs7Ozs7OztVQ3JxQnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWlDO0FBQ0Y7QUFDSTtBQUNBO0FBQ0E7QUFDSjtBQUNJO0FBQ2Q7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLHNEQUFNO0FBQ04scURBQUs7QUFDTCx1REFBTztBQUNQLHVEQUFPO0FBQ1AsdURBQU87QUFDUCxzREFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNELHVEQUFPLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NhbGVuZGFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ndXR0ZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luYm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3NwbGl0LWdyaWQvZGlzdC9zcGxpdC1ncmlkLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm8pO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFudG9uaW8pO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthcmxhKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJLYXJsYVxcXCI7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5oZWFkZXItYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG59XFxuXFxuLmhlYWRlci1idXR0b246aG92ZXIge1xcbiAgICBzY2FsZTogOTAlO1xcbn1cXG5cXG4uaW5wdXQtZmllbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5idXR0b24tY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMjcsIDI3KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhci1saW5lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcblxcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGViYXItbGluZTpob3ZlciB7XFxuICAgIHNjYWxlOiA5MCU7XFxufVxcblxcbi5saXN0LWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhbGVuZGFyLWhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmNhbGVuZGFyLWRheSB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLnByb2plY3RzLWNsb3NlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qLWl0ZW0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMjAlO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnByb2otcGljIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4ucG9wdXAtc2NyZWVuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcblxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGFuaW1hdGlvbjogcHJvbXB0LXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMjVzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLnBvcHVwLXByb21wdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggIzAwMDAwMDtcXG5cXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcblxcbiAgICBhbmltYXRpb246IGhlYWRlci1zcGF3bjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJweCA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJweCA0ZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xcblxcbiAgICBhbmltYXRpb246IGhlYWRlci1zcGF3bjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhlYWRlci1zcGF3biB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xcbiAgICB9IDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIH0gMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgfVxcbn1cXG5cXG4jaGVhZGVyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4jaGVhZGVyLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNsb2dpbi1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNtZW51LWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNtZW51LWJ1dHRvbjpob3ZlciB7XFxuICAgIHBhZGRpbmc6IDIwcHggMTIwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHByb21wdC1zcGF3biB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICB9IDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgYW5pbWF0aW9uOiBzaWRlYmFyLXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWlubWF4KDUwcHgsIDgwcHgpKSBhdXRvIG1pbm1heCg1MHB4LCA4MHB4KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgc2lkZWJhci1zcGF3biB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgfVxcbn1cXG5cXG4jc2lkZWJhci1pbmJveCB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuI3NpZGViYXItdG9kYXkge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbiNzaWRlYmFyLWNhbGVuZGFyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4jc2lkZWJhci1wcm9qZWN0cyB7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3Qge1xcbiAgICBncmlkLXJvdzogNSAvIDY7XFxufVxcblxcbiNzaWRlYmFyLWFkZCB7XFxuICAgIGdyaWQtcm93OiA2IC8gNztcXG59XFxuXFxuI2NvbnRlbnQtd3JhcHBlciB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAwO1xcblxcbiAgICBhbmltYXRpb246IGxpc3Qtc3Bhd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbGlzdCB7XFxuICAgIGFuaW1hdGlvbjogbGlzdC1zcGF3bjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxpc3Qtc3Bhd24ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAwcHgpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICB9XFxufVxcblxcbiNhZGQtdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuI2FkZC10YXNrID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbn1cXG5cXG4jcmVzZXQtbGF5b3V0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDAlO1xcbiAgICByaWdodDogMCU7XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgXFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jcmVzZXQtbGF5b3V0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3R0b206IDIlO1xcbiAgICByaWdodDogMiU7XFxuICAgIHNjYWxlOiAxMjAlO1xcbn1cXG5cXG4jY2FsZW5kYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxufVxcblxcbiNjYWxlbmRhciA+IGgyLFxcbiNjYWxlbmRhciA+IGgzLFxcbiNjYWxlbmRhciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY2FsZW5kYXItbW9udGgge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcblxcbiNndXR0ZXItY29sIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcblxcbiAgICBhbmltYXRpb246IHNpZGViYXItc3Bhd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxufVxcblxcbiNndXR0ZXItY29sOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBjb2wtcmVzaXplO1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuI2d1dHRlci1yb3cge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuXFxuICAgIGFuaW1hdGlvbjogaGVhZGVyLXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbn1cXG5cXG4jZ3V0dGVyLXJvdzpob3ZlciB7XFxuICAgIGN1cnNvcjogcm93LXJlc2l6ZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7O0lBRXRCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixTQUFTO0FBQ2I7O0FBRUE7SUFD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a0I7SUFDbEIsVUFBVTs7SUFFVix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjs7SUFFaEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rTW9ub1xcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QW50b25pb1xcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2FybGFcXFwiKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmhlYWRlci1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbjpob3ZlciB7XFxuICAgIHNjYWxlOiA5MCU7XFxufVxcblxcbi5pbnB1dC1maWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJ1dHRvbi1jbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAyNywgMjcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG5cXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyLWxpbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhci1saW5lOmhvdmVyIHtcXG4gICAgc2NhbGU6IDkwJTtcXG59XFxuXFxuLmxpc3QtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FsZW5kYXItaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uY2FsZW5kYXItZGF5IHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4ucHJvamVjdHMtY2xvc2VkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2otaXRlbSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90byBNb25vXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvai1waWMge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5wb3B1cC1zY3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYW5pbWF0aW9uOiBwcm9tcHQtc3Bhd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4yNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4ucG9wdXAtcHJvbXB0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCAjMDAwMDAwO1xcblxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuXFxuICAgIGFuaW1hdGlvbjogaGVhZGVyLXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMnB4IDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMnB4IDRmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwMHB4KTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcGFkZGluZzogNXB4IDAgNXB4IDA7XFxuXFxuICAgIGFuaW1hdGlvbjogaGVhZGVyLXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgaGVhZGVyLXNwYXduIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XFxuICAgIH0gNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgfSAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICB9XFxufVxcblxcbiNoZWFkZXItdGl0bGUge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbiNoZWFkZXItYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2xvZ2luLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI21lbnUtYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI21lbnUtYnV0dG9uOmhvdmVyIHtcXG4gICAgcGFkZGluZzogMjBweCAxMjBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbkBrZXlmcmFtZXMgcHJvbXB0LXNwYXduIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMCU7XFxuICAgIH0gMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB9XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICBhbmltYXRpb246IHNpZGViYXItc3Bhd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW5tYXgoNTBweCwgODBweCkpIGF1dG8gbWlubWF4KDUwcHgsIDgwcHgpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBzaWRlYmFyLXNwYXduIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDBweCk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICB9XFxufVxcblxcbiNzaWRlYmFyLWluYm94IHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4jc2lkZWJhci10b2RheSB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuI3NpZGViYXItY2FsZW5kYXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbiNzaWRlYmFyLXByb2plY3RzIHtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4jcHJvamVjdHMtbGlzdCB7XFxuICAgIGdyaWQtcm93OiA1IC8gNjtcXG59XFxuXFxuI3NpZGViYXItYWRkIHtcXG4gICAgZ3JpZC1yb3c6IDYgLyA3O1xcbn1cXG5cXG4jY29udGVudC13cmFwcGVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDA7XFxuXFxuICAgIGFuaW1hdGlvbjogbGlzdC1zcGF3bjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsaXN0IHtcXG4gICAgYW5pbWF0aW9uOiBsaXN0LXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxufVxcblxcbkBrZXlmcmFtZXMgbGlzdC1zcGF3biB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMDBweCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICAgIH1cXG59XFxuXFxuI2FkZC10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4jYWRkLXRhc2sgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxufVxcblxcbiNyZXNldC1sYXlvdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMCU7XFxuICAgIHJpZ2h0OiAwJTtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNyZXNldC1sYXlvdXQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvdHRvbTogMiU7XFxuICAgIHJpZ2h0OiAyJTtcXG4gICAgc2NhbGU6IDEyMCU7XFxufVxcblxcbiNjYWxlbmRhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgbWlubWF4KDEwMHB4LCAxZnIpKTtcXG59XFxuXFxuI2NhbGVuZGFyID4gaDIsXFxuI2NhbGVuZGFyID4gaDMsXFxuI2NhbGVuZGFyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjYWxlbmRhci1tb250aCB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuI2d1dHRlci1jb2wge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAycHg7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuXFxuICAgIGFuaW1hdGlvbjogc2lkZWJhci1zcGF3bjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG59XFxuXFxuI2d1dHRlci1jb2w6aG92ZXIge1xcbiAgICBjdXJzb3I6IGNvbC1yZXNpemU7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4jZ3V0dGVyLXJvdyB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG5cXG4gICAgYW5pbWF0aW9uOiBoZWFkZXItc3Bhd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxufVxcblxcbiNndXR0ZXItcm93OmhvdmVyIHtcXG4gICAgY3Vyc29yOiByb3ctcmVzaXplO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FsZW5kYXIocHJvamVjdERhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxEYXkoY3VyckRheSkge1xuICAgICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkYXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYWxlbmRhci1kYXlcIik7XG4gICAgICAgIGNvbnN0IGRheU51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgZGF5TnVtLnRleHRDb250ZW50ID0gY3VyckRheTtcbiAgICAgICAgZGF5LmFwcGVuZENoaWxkKGRheU51bSk7XG4gICAgICAgIGNhbGVuZGFyLmFwcGVuZENoaWxkKGRheSk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBjYWxlbmRhcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhbGVuZGFyV3JhcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbGVuZGFyLXdyYXBwZXJcIik7XG4gICAgY2FsZW5kYXJXcmFwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1jb250ZW50XCIpO1xuXG4gICAgY29uc3QgbW9udGhzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG4gICAgY29uc3QgZGF5cyA9IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdO1xuXG4gICAgY29uc3QgY3VyckRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGN1cnJZZWFyID0gY3VyckRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBjdXJyTW9uID0gbW9udGhzW2N1cnJEYXRlLmdldE1vbnRoKCldO1xuICAgIGNvbnN0IGN1cnJEYXkgPSBjdXJyRGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3Qgd2Vla0RheSA9IGRheXNbY3VyckRhdGUuZ2V0RGF5KCldO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0LXRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJDYWxlbmRhclwiO1xuICAgIGNhbGVuZGFyV3JhcC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBjYWxlbmRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FsZW5kYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYWxlbmRhclwiKTtcblxuICAgIGNvbnN0IGNhbE1vbnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNhbE1vbnRoLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FsZW5kYXItbW9udGhcIik7XG4gICAgY2FsTW9udGgudGV4dENvbnRlbnQgPSBjdXJyTW9uO1xuICAgIGNhbGVuZGFyLmFwcGVuZENoaWxkKGNhbE1vbnRoKTtcblxuICAgIGZvciAoY29uc3QgZGF5IG9mIGRheXMpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYWxlbmRhci1oZWFkZXJcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGRheTtcbiAgICAgICAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB9XG5cbiAgICBsZXQgbnVtRGF5cztcblxuICAgIGlmIChjdXJyTW9uID09PSBcIkZlYnJ1YXJ5XCIpIHtcbiAgICAgICAgbnVtRGF5cyA9IDI4O1xuICAgIH0gZWxzZSBpZiAoY3Vyck1vbiA9PT0gXCJBcHJpbFwiIHx8IGN1cnJNb24gPT09IFwiSnVuZVwiIHx8IGN1cnJNb24gPT09IFwiU2VwdGVtYmVyXCIgfHwgY3Vyck1vbiA9PT0gXCJOb3ZlbWJlclwiKSB7XG4gICAgICAgIG51bURheXMgPSAzMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBudW1EYXlzID0gMzE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtRGF5czsgaSsrKSB7XG4gICAgICAgIGNhbERheShpKTtcbiAgICB9XG5cbiAgICBjYWxlbmRhcldyYXAuYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtd3JhcHBlclwiKTtcbiAgICBsaXN0Lmluc2VydEJlZm9yZShjYWxlbmRhcldyYXAsIGxpc3QuY2hpbGRyZW5bMF0pO1xufSIsImltcG9ydCBJbmJveCBmcm9tIFwiLi9pbmJveC5qc1wiO1xuaW1wb3J0IFRvZGF5IGZyb20gXCIuL3RvZGF5LmpzXCI7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4vY2FsZW5kYXIuanNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudChwcm9qZWN0RGF0YSkge1xuICAgIGNvbnN0IGNvbnRlbnRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50V3JhcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnQtd3JhcHBlclwiKTtcblxuICAgIGNvbnN0IHJlc2V0TGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZXNldExheW91dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlc2V0LWxheW91dFwiKTtcbiAgICByZXNldExheW91dC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIlJlc2V0IExheW91dFwiKTtcbiAgICBjb25zdCByZXNldFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcmVzZXRQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy90ZWFtX2Rhc2hib2FyZC5wbmdcIik7XG4gICAgcmVzZXRMYXlvdXQuYXBwZW5kQ2hpbGQocmVzZXRQaWMpO1xuICAgIGNvbnRlbnRXcmFwLmFwcGVuZENoaWxkKHJlc2V0TGF5b3V0KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY29udGVudFdyYXApO1xuXG4gICAgSW5ib3gocHJvamVjdERhdGEpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWluYm94XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWNvbnRlbnRcIikucmVtb3ZlKCk7XG5cbiAgICAgICAgSW5ib3gocHJvamVjdERhdGEpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLXRvZGF5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWNvbnRlbnRcIikucmVtb3ZlKCk7XG5cbiAgICAgICAgVG9kYXkocHJvamVjdERhdGEpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWNhbGVuZGFyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWNvbnRlbnRcIikucmVtb3ZlKCk7XG5cbiAgICAgICAgQ2FsZW5kYXIocHJvamVjdERhdGEpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldC1sYXlvdXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gXCJcIjtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBUYXNrKHByb2plY3REYXRhKTtcbiAgICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHdXR0ZXJzKCkge1xuICAgIGNvbnN0IGd1dHRlckNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3V0dGVyQ29sLmlkID0gXCJndXR0ZXItY29sXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGd1dHRlckNvbCk7XG5cbiAgICBjb25zdCBndXR0ZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGd1dHRlclJvdy5pZCA9IFwiZ3V0dGVyLXJvd1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChndXR0ZXJSb3cpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyVGl0bGVzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLXRpdGxlc1wiKTtcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlclRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLXRpdGxlXCIpO1xuICAgIGhlYWRlclRpdGxlLmlubmVySFRNTCA9IFwiRE9fSVRcIjtcbiAgICBoZWFkZXJUaXRsZXMuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSBcIlRoZSB0by1kbyBhcHAgZm9yIG1hbmFnaW5nIHlvdXIgbGlmZVwiO1xuICAgIGhlYWRlclRpdGxlcy5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlcyk7XG5cbiAgICBjb25zdCBoZWFkZXJCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJCdXR0b25zLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLWJ1dHRvbnNcIik7XG5cbiAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbG9naW5CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dpbi1idXR0b25cIik7XG4gICAgbG9naW5CdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoZWFkZXItYnV0dG9uXCIpO1xuXG4gICAgY29uc3QgbG9naW5QaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxvZ2luUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvYWNjb3VudF9jaXJjbGUucG5nXCIpO1xuICAgIGxvZ2luQnV0dG9uLmFwcGVuZENoaWxkKGxvZ2luUGljKTtcblxuICAgIGNvbnN0IGxvZ2luVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxvZ2luVGV4dC50ZXh0Q29udGVudCA9IFwiU2lnbiBJblwiO1xuICAgIGxvZ2luQnV0dG9uLmFwcGVuZENoaWxkKGxvZ2luVGV4dCk7XG4gICAgaGVhZGVyQnV0dG9ucy5hcHBlbmRDaGlsZChsb2dpbkJ1dHRvbik7XG5cbiAgICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvbWVudS5wbmdcIik7XG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1idXR0b25cIik7XG4gICAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhlYWRlci1idXR0b25cIik7XG4gICAgbWVudUJ1dHRvbi5hcHBlbmRDaGlsZChtZW51SW1nKTtcbiAgICBoZWFkZXJCdXR0b25zLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJCdXR0b25zKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluYm94KHByb2plY3REYXRhKSB7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5ib3hcIik7XG4gICAgaW5ib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWNvbnRlbnRcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3QtdGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza3NcIik7XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdERhdGEpIHtcbiAgICAgICAgaWYgKHByb2plY3Quc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGFzayBvZiBwcm9qZWN0LnRhc2tzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tcIik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICB0YXNrVGV4dC50ZXh0Q29udGVudCA9IHRhc2s7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XG5cbiAgICAgICAgICAgICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluYm94LmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFza1wiKTtcblxuICAgIGNvbnN0IGFkZFRhc2tQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFkZFRhc2tQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9hZGRfdGFzay5wbmdcIik7XG4gICAgYWRkVGFzay5hcHBlbmRDaGlsZChhZGRUYXNrUGljKTtcblxuICAgIGNvbnN0IGFkZFRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWRkVGFza1RleHQudGV4dENvbnRlbnQgPSBcIkFkZCBOZXcgVGFza1wiO1xuICAgIGFkZFRhc2suYXBwZW5kQ2hpbGQoYWRkVGFza1RleHQpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGFkZFRhc2spO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC13cmFwcGVyXCIpO1xuICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGluYm94LCBjb250ZW50LmNoaWxkcmVuWzBdKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbih1c2VyRGF0YSkge1xuICAgIGNvbnN0IGxvZ2luU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dpblNjcmVlbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLXNjcmVlblwiKTtcbiAgICBsb2dpblNjcmVlbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvcHVwLXNjcmVlblwiKTtcblxuICAgIGNvbnN0IGxvZ2luUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dpblByb21wdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLXByb21wdFwiKTtcbiAgICBsb2dpblByb21wdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvcHVwLXByb21wdFwiKTtcblxuICAgIGNvbnN0IGxvZ2luSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxvZ2luSGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9naW4taGVhZGVyXCIpO1xuICAgIGxvZ2luSGVhZGVyLnRleHRDb250ZW50ID0gXCJTaWduIGluIHRvIERvX0l0XCI7XG4gICAgbG9naW5Qcm9tcHQuYXBwZW5kQ2hpbGQobG9naW5IZWFkZXIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgY29uc3QgbG9nTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nTmFtZS5jbGFzc05hbWUgPSBcImlucHV0LWZpZWxkXCI7XG5cbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lOlwiO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb2dpbi1uYW1lXCIpO1xuICAgIGxvZ05hbWUuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcblxuICAgIGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dpbi1uYW1lXCIpO1xuICAgIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibG9naW4tbmFtZVwiKTtcbiAgICBsb2dOYW1lLmFwcGVuZENoaWxkKG5hbWVGaWVsZCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsb2dOYW1lKTtcblxuICAgIGNvbnN0IGxvZ1Bhc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ1Bhc3MuY2xhc3NOYW1lID0gXCJsb2dpbi1maWVsZFwiO1xuXG4gICAgY29uc3QgcGFzc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHBhc3NMYWJlbC50ZXh0Q29udGVudCA9IFwiUGFzc3dvcmQ6XCI7XG4gICAgcGFzc0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvZ2luLXBhc3NcIik7XG4gICAgbG9nUGFzcy5hcHBlbmRDaGlsZChwYXNzTGFiZWwpO1xuXG4gICAgY29uc3QgcGFzc0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHBhc3NGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLXBhc3NcIik7XG4gICAgcGFzc0ZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJsb2dpbi1wYXNzXCIpO1xuICAgIGxvZ1Bhc3MuYXBwZW5kQ2hpbGQocGFzc0ZpZWxkKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ1Bhc3MpO1xuXG4gICAgY29uc3QgbG9naW5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbG9naW5TdWJtaXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dpbi1zdWJtaXRcIik7XG4gICAgbG9naW5TdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBsb2dpblN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxPRyBJTlwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ2luU3VibWl0KTtcbiAgICBsb2dpblByb21wdC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IGNyZWF0ZUFjY291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjcmVhdGVBY2NvdW50LmlubmVySFRNTCA9IFwiTmV3IHVzZXI/IENyZWF0ZSBhbiBhY2NvdW50IGhlcmUhXCI7XG4gICAgbG9naW5Qcm9tcHQuYXBwZW5kQ2hpbGQoY3JlYXRlQWNjb3VudCk7XG5cbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2UuaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgY2xvc2UuaWQgPSBcImNsb3NlLWxvZ2luXCI7XG4gICAgY2xvc2UuY2xhc3NOYW1lID0gXCJidXR0b24tY2xvc2VcIjtcbiAgICBsb2dpblByb21wdC5hcHBlbmRDaGlsZChjbG9zZSk7XG5cbiAgICBsb2dpblNjcmVlbi5hcHBlbmRDaGlsZChsb2dpblByb21wdCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9naW5TY3JlZW4pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJFbnRlcmVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1uYW1lXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdXNlckNoZWNrID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgdXNlciBvZiB1c2VyRGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyLm5hbWUgPT09IHVzZXJFbnRlcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tYnV0dG9uXCIpLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gYEhlbGxvLCAke3VzZXJFbnRlcmVkfWA7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tc2NyZWVuXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB1c2VyQ2hlY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdXNlckNoZWNrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1wcm9tcHRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0Q29udGVudCA9IFwiVGhpcyB1c2VyIGRvZXMgbm90IGV4aXN0XCI7XG4gICAgICAgICAgICAgICAgcHJvbXB0Lmluc2VydEJlZm9yZShlcnJvciwgcHJvbXB0LmNoaWxkcmVuWzJdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1uYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tcGFzc1wiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbG9naW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1uYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tcGFzc1wiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLXNjcmVlblwiKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0RGF0YSkge1xuICAgIGNvbnN0IHByb2pTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2pTY3JlZW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qLXNjcmVlblwiKTtcbiAgICBwcm9qU2NyZWVuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicG9wdXAtc2NyZWVuXCIpO1xuXG4gICAgY29uc3QgcHJvalByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvalByb21wdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2otcHJvbXB0XCIpO1xuICAgIHByb2pQcm9tcHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb3B1cC1wcm9tcHRcIik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICBjb25zdCBsb2dQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dQcm9qLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXQtZmllbGRcIik7XG5cbiAgICBjb25zdCBwcm9qTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJvakxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2otbmFtZVwiKTtcbiAgICBwcm9qTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZTpcIjtcbiAgICBsb2dQcm9qLmFwcGVuZENoaWxkKHByb2pMYWJlbCk7XG5cbiAgICBjb25zdCBwcm9qRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJvakZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvai1uYW1lXCIpO1xuICAgIHByb2pGaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvai1uYW1lXCIpO1xuICAgIGxvZ1Byb2ouYXBwZW5kQ2hpbGQocHJvakZpZWxkKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ1Byb2opO1xuXG4gICAgY29uc3QgcHJvalN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcm9qU3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvai1zdWJtaXRcIik7XG4gICAgcHJvalN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHByb2pTdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJBREQgUFJPSkVDVFwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2pTdWJtaXQpO1xuICAgIHByb2pQcm9tcHQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2UuaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgY2xvc2UuaWQgPSBcImNsb3NlLXByb2pcIjtcbiAgICBjbG9zZS5jbGFzc05hbWUgPSBcImJ1dHRvbi1jbG9zZVwiO1xuICAgIHByb2pQcm9tcHQuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICAgIHByb2pTY3JlZW4uYXBwZW5kQ2hpbGQocHJvalByb21wdCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9qU2NyZWVuKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2otc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qLW5hbWVcIikudmFsdWU7XG4gICAgICAgICAgICBwcm9qZWN0RGF0YS5wdXNoKG5ldyBQcm9qZWN0KHByb2pOYW1lKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgbmV3UHJvai5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qTmFtZSk7XG4gICAgICAgICAgICBuZXdQcm9qLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvai1pdGVtXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIG5ld1Byb2pQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9mb2xkZXIucG5nXCIpXG4gICAgICAgICAgICBuZXdQcm9qUGljLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvai1waWNcIik7XG4gICAgICAgICAgICBuZXdQcm9qLmFwcGVuZENoaWxkKG5ld1Byb2pQaWMpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgICAgIG5ld1Byb2pOYW1lLmlubmVySFRNTCA9IHByb2pOYW1lO1xuICAgICAgICAgICAgbmV3UHJvai5hcHBlbmRDaGlsZChuZXdQcm9qTmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtbGlzdFwiKTtcbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChuZXdQcm9qKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qLXNjcmVlblwiKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1wcm9qXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvai1zY3JlZW5cIikucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY2xhc3MgUHJvamVjdCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9qZWN0RGF0YTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlYmFyXCIpO1xuXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGluYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhci1pbmJveFwiKTtcbiAgICBpbmJveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGViYXItbGluZVwiKTtcblxuICAgIGNvbnN0IGluYm94UGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbmJveFBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2luYm94LnBuZ1wiKTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChpbmJveFBpYyk7XG5cbiAgICBjb25zdCBpbmJveFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaW5ib3hUZXh0LnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGluYm94VGV4dCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChpbmJveCk7XG5cbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdG9kYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlYmFyLXRvZGF5XCIpO1xuICAgIHRvZGF5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1saW5lXCIpO1xuXG4gICAgY29uc3QgdG9kYXlQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHRvZGF5UGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvdG9kYXkucG5nXCIpO1xuICAgIHRvZGF5LmFwcGVuZENoaWxkKHRvZGF5UGljKTtcblxuICAgIGNvbnN0IHRvZGF5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0b2RheVRleHQudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgdG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlUZXh0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvZGF5KTtcblxuICAgIGNvbnN0IGNhbGVuZGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYWxlbmRhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXItY2FsZW5kYXJcIik7XG4gICAgY2FsZW5kYXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWxpbmVcIik7XG5cbiAgICBjb25zdCBjYWxlbmRhclBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY2FsZW5kYXJQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9jYWxlbmRhci5wbmdcIik7XG4gICAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXJQaWMpO1xuXG4gICAgY29uc3QgY2FsZW5kYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNhbGVuZGFyVGV4dC50ZXh0Q29udGVudCA9IFwiQ2FsZW5kYXJcIjtcbiAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChjYWxlbmRhclRleHQpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHByb2plY3RzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhci1wcm9qZWN0c1wiKTtcbiAgICBwcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGViYXItbGluZVwiKTtcblxuICAgIGNvbnN0IHByb2plY3RzUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwcm9qZWN0c1BpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2Fycm93X2NpcmNsZV9yaWdodC5wbmdcIik7XG4gICAgcHJvamVjdHNQaWMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0cy1waWNcIik7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNQaWMpO1xuXG4gICAgY29uc3QgcHJvamVjdHNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByb2plY3RzVGV4dC50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0c1RleHQpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0c0xpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0cy1saXN0XCIpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcblxuICAgIGNvbnN0IGFkZFByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFByb2ouc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlYmFyLWFkZFwiKTtcbiAgICBhZGRQcm9qLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1saW5lXCIpO1xuXG4gICAgY29uc3QgYWRkUHJvalBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYWRkUHJvalBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2ZvbGRlcl9uZXcucG5nXCIpO1xuICAgIGFkZFByb2ouYXBwZW5kQ2hpbGQoYWRkUHJvalBpYyk7XG5cbiAgICBjb25zdCBhZGRQcm9qVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBhZGRQcm9qVGV4dC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICBhZGRQcm9qLmFwcGVuZENoaWxkKGFkZFByb2pUZXh0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2opO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLXByb2plY3RzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXBpY1wiKS5zcmM7XG4gICAgICAgIGNvbnN0IHJlZ0V4ID0gL2V4cGFuZF9jaXJjbGVfZG93bi5wbmckLztcblxuICAgICAgICBpZiAocmVnRXgudGVzdChzdGF0ZSkpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtbGlzdFwiKS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtY2xvc2VkXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1waWNcIikuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9hcnJvd19jaXJjbGVfcmlnaHQucG5nXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1saXN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0cy1jbG9zZWRcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXBpY1wiKS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2V4cGFuZF9jaXJjbGVfZG93bi5wbmdcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrKHByb2plY3REYXRhKSB7XG4gICAgY29uc3QgdGFza1NjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1NjcmVlbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stc2NyZWVuXCIpO1xuICAgIHRhc2tTY3JlZW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb3B1cC1zY3JlZW5cIik7XG5cbiAgICBjb25zdCB0YXNrUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrUHJvbXB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1wcm9tcHRcIik7XG4gICAgdGFza1Byb21wdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvcHVwLXByb21wdFwiKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgIGNvbnN0IGxvZ1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ1Rhc2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dC1maWVsZFwiKTtcblxuICAgIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1uYW1lXCIpO1xuICAgIHRhc2tMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzazpcIjtcbiAgICBsb2dUYXNrLmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG5cbiAgICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza0ZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1uYW1lXCIpO1xuICAgIHRhc2tGaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1uYW1lXCIpO1xuICAgIGxvZ1Rhc2suYXBwZW5kQ2hpbGQodGFza0ZpZWxkKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ1Rhc2spO1xuXG4gICAgY29uc3QgbG9nUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nUHJvai5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0LWZpZWxkXCIpO1xuXG4gICAgY29uc3QgcHJvakxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByb2pMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qLW5hbWVcIik7XG4gICAgcHJvakxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0OlwiO1xuICAgIGxvZ1Byb2ouYXBwZW5kQ2hpbGQocHJvakxhYmVsKTtcblxuICAgIGNvbnN0IHByb2pGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJvakZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvai1uYW1lXCIpO1xuICAgIHByb2pGaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvai1uYW1lXCIpO1xuXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3REYXRhKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3QubmFtZTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgIHByb2pGaWVsZC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuICAgIGxvZ1Byb2ouYXBwZW5kQ2hpbGQocHJvakZpZWxkKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ1Byb2opO1xuXG4gICAgY29uc3QgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrU3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1zdWJtaXRcIik7XG4gICAgdGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJBREQgVEFTS1wiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tTdWJtaXQpO1xuICAgIHRhc2tQcm9tcHQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2UuaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgY2xvc2UuaWQgPSBcImNsb3NlLXRhc2tcIjtcbiAgICBjbG9zZS5jbGFzc05hbWUgPSBcImJ1dHRvbi1jbG9zZVwiO1xuICAgIHRhc2tQcm9tcHQuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICAgIHRhc2tTY3JlZW4uYXBwZW5kQ2hpbGQodGFza1Byb21wdCk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhc2tTY3JlZW4pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3REYXRhKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5uYW1lID09PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2otbmFtZVwiKS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RbXCJ0YXNrc1wiXS5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1zY3JlZW5cIikucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLXRhc2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stc2NyZWVuXCIpLnJlbW92ZSgpO1xuICAgIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZGF5KHByb2plY3REYXRhKSB7XG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kYXlcIik7XG4gICAgdG9kYXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWNvbnRlbnRcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3QtdGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgdG9kYXkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC13cmFwcGVyXCIpO1xuICAgIGxpc3QuaW5zZXJ0QmVmb3JlKHRvZGF5LCBsaXN0LmNoaWxkcmVuWzBdKTtcbn0iLCJ2YXIgbnVtZXJpYyA9IGZ1bmN0aW9uICh2YWx1ZSwgdW5pdCkgeyByZXR1cm4gTnVtYmVyKHZhbHVlLnNsaWNlKDAsIC0xICogdW5pdC5sZW5ndGgpKTsgfTtcblxudmFyIHBhcnNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoJ3B4JykpXG4gICAgICAgIHsgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCB0eXBlOiAncHgnLCBudW1lcmljOiBudW1lcmljKHZhbHVlLCAncHgnKSB9IH1cbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoJ2ZyJykpXG4gICAgICAgIHsgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCB0eXBlOiAnZnInLCBudW1lcmljOiBudW1lcmljKHZhbHVlLCAnZnInKSB9IH1cbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoJyUnKSlcbiAgICAgICAgeyByZXR1cm4geyB2YWx1ZTogdmFsdWUsIHR5cGU6ICclJywgbnVtZXJpYzogbnVtZXJpYyh2YWx1ZSwgJyUnKSB9IH1cbiAgICBpZiAodmFsdWUgPT09ICdhdXRvJykgeyByZXR1cm4geyB2YWx1ZTogdmFsdWUsIHR5cGU6ICdhdXRvJyB9IH1cbiAgICByZXR1cm4gbnVsbFxufTtcblxudmFyIHBhcnNlID0gZnVuY3Rpb24gKHJ1bGUpIHsgcmV0dXJuIHJ1bGUuc3BsaXQoJyAnKS5tYXAocGFyc2VWYWx1ZSk7IH07XG5cbnZhciBnZXRTaXplQXRUcmFjayA9IGZ1bmN0aW9uIChpbmRleCwgdHJhY2tzLCBnYXAsIGVuZCkge1xuICAgIGlmICggZ2FwID09PSB2b2lkIDAgKSB7IGdhcCA9IDA7IH1cbiAgICBpZiAoIGVuZCA9PT0gdm9pZCAwICkgeyBlbmQgPSBmYWxzZTsgfVxuXG4gICAgdmFyIG5ld0luZGV4ID0gZW5kID8gaW5kZXggKyAxIDogaW5kZXg7XG4gICAgdmFyIHRyYWNrU3VtID0gdHJhY2tzXG4gICAgICAgIC5zbGljZSgwLCBuZXdJbmRleClcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYWNjdW0sIHZhbHVlKSB7IHJldHVybiBhY2N1bSArIHZhbHVlLm51bWVyaWM7IH0sIDApO1xuICAgIHZhciBnYXBTdW0gPSBnYXAgPyBpbmRleCAqIGdhcCA6IDA7XG5cbiAgICByZXR1cm4gdHJhY2tTdW0gKyBnYXBTdW1cbn07XG5cbnZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiAocnVsZSwgb3duUnVsZXMsIG1hdGNoZWRSdWxlcykgeyByZXR1cm4gb3duUnVsZXMuY29uY2F0KCBtYXRjaGVkUnVsZXMpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIuc3R5bGVbcnVsZV07IH0pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHN0eWxlKSB7IHJldHVybiBzdHlsZSAhPT0gdW5kZWZpbmVkICYmIHN0eWxlICE9PSAnJzsgfSk7IH07XG5cbnZhciBnZXRHYXBWYWx1ZSA9IGZ1bmN0aW9uICh1bml0LCBzaXplKSB7XG4gICAgaWYgKHNpemUuZW5kc1dpdGgodW5pdCkpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcihzaXplLnNsaWNlKDAsIC0xICogdW5pdC5sZW5ndGgpKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxufTtcblxudmFyIGZpcnN0Tm9uWmVybyA9IGZ1bmN0aW9uICh0cmFja3MpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHJhY2tzW2ldLm51bWVyaWMgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gaVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG59O1xuXG52YXIgTk9PUCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9O1xuXG52YXIgZGVmYXVsdFdyaXRlU3R5bGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgZ3JpZFRlbXBsYXRlUHJvcCwgc3R5bGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBlbGVtZW50LnN0eWxlW2dyaWRUZW1wbGF0ZVByb3BdID0gc3R5bGU7XG59O1xuXG52YXIgZ2V0T3B0aW9uID0gZnVuY3Rpb24gKG9wdGlvbnMsIHByb3BOYW1lLCBkZWYpIHtcbiAgICB2YXIgdmFsdWUgPSBvcHRpb25zW3Byb3BOYW1lXTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIGRlZlxufTtcblxuZnVuY3Rpb24gZ2V0TWF0Y2hlZENTU1J1bGVzIChlbCkge1xuICAgICAgICB2YXIgcmVmO1xuXG4gICAgICAgIHJldHVybiAocmVmID0gW10pXG4gICAgICAgIC5jb25jYXQuYXBwbHkoXG4gICAgICAgICAgICByZWYsIEFycmF5LmZyb20oZWwub3duZXJEb2N1bWVudC5zdHlsZVNoZWV0cykubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJ1bGVzID0gW107XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydWxlcyA9IEFycmF5LmZyb20ocy5jc3NSdWxlcyB8fCBbXSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcmVzdWx0cyBvbiBzZWN1cml0eSBlcnJvclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBydWxlc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gZWwubWF0Y2hlcyhyLnNlbGVjdG9yVGV4dCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIG1hdGNoaW5nIGVycm9zXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXG4gICAgICAgIH0pO1xufVxuXG52YXIgZ3JpZFRlbXBsYXRlUHJvcENvbHVtbnMgPSAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJztcbnZhciBncmlkVGVtcGxhdGVQcm9wUm93cyA9ICdncmlkLXRlbXBsYXRlLXJvd3MnO1xuXG52YXIgR3V0dGVyID0gZnVuY3Rpb24gR3V0dGVyKGRpcmVjdGlvbiwgb3B0aW9ucywgcGFyZW50T3B0aW9ucykge1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHRoaXMuZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcbiAgICB0aGlzLnRyYWNrID0gb3B0aW9ucy50cmFjaztcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdjb2x1bW4nKSB7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlUHJvcCA9IGdyaWRUZW1wbGF0ZVByb3BDb2x1bW5zO1xuICAgICAgICB0aGlzLmdyaWRHYXBQcm9wID0gJ2dyaWQtY29sdW1uLWdhcCc7XG4gICAgICAgIHRoaXMuY3Vyc29yID0gZ2V0T3B0aW9uKFxuICAgICAgICAgICAgcGFyZW50T3B0aW9ucyxcbiAgICAgICAgICAgICdjb2x1bW5DdXJzb3InLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdjdXJzb3InLCAnY29sLXJlc2l6ZScpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc25hcE9mZnNldCA9IGdldE9wdGlvbihcbiAgICAgICAgICAgIHBhcmVudE9wdGlvbnMsXG4gICAgICAgICAgICAnY29sdW1uU25hcE9mZnNldCcsXG4gICAgICAgICAgICBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ3NuYXBPZmZzZXQnLCAzMClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kcmFnSW50ZXJ2YWwgPSBnZXRPcHRpb24oXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAgICAgJ2NvbHVtbkRyYWdJbnRlcnZhbCcsXG4gICAgICAgICAgICBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ2RyYWdJbnRlcnZhbCcsIDEpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2xpZW50QXhpcyA9ICdjbGllbnRYJztcbiAgICAgICAgdGhpcy5vcHRpb25TdHlsZSA9IGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnZ3JpZFRlbXBsYXRlQ29sdW1ucycpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncm93Jykge1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVByb3AgPSBncmlkVGVtcGxhdGVQcm9wUm93cztcbiAgICAgICAgdGhpcy5ncmlkR2FwUHJvcCA9ICdncmlkLXJvdy1nYXAnO1xuICAgICAgICB0aGlzLmN1cnNvciA9IGdldE9wdGlvbihcbiAgICAgICAgICAgIHBhcmVudE9wdGlvbnMsXG4gICAgICAgICAgICAncm93Q3Vyc29yJyxcbiAgICAgICAgICAgIGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnY3Vyc29yJywgJ3Jvdy1yZXNpemUnKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNuYXBPZmZzZXQgPSBnZXRPcHRpb24oXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAgICAgJ3Jvd1NuYXBPZmZzZXQnLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdzbmFwT2Zmc2V0JywgMzApXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZHJhZ0ludGVydmFsID0gZ2V0T3B0aW9uKFxuICAgICAgICAgICAgcGFyZW50T3B0aW9ucyxcbiAgICAgICAgICAgICdyb3dEcmFnSW50ZXJ2YWwnLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdkcmFnSW50ZXJ2YWwnLCAxKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNsaWVudEF4aXMgPSAnY2xpZW50WSc7XG4gICAgICAgIHRoaXMub3B0aW9uU3R5bGUgPSBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ2dyaWRUZW1wbGF0ZVJvd3MnKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uRHJhZ1N0YXJ0ID0gZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdvbkRyYWdTdGFydCcsIE5PT1ApO1xuICAgIHRoaXMub25EcmFnRW5kID0gZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdvbkRyYWdFbmQnLCBOT09QKTtcbiAgICB0aGlzLm9uRHJhZyA9IGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnb25EcmFnJywgTk9PUCk7XG4gICAgdGhpcy53cml0ZVN0eWxlID0gZ2V0T3B0aW9uKFxuICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAnd3JpdGVTdHlsZScsXG4gICAgICAgIGRlZmF1bHRXcml0ZVN0eWxlXG4gICAgKTtcblxuICAgIHRoaXMuc3RhcnREcmFnZ2luZyA9IHRoaXMuc3RhcnREcmFnZ2luZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RvcERyYWdnaW5nID0gdGhpcy5zdG9wRHJhZ2dpbmcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYWcgPSB0aGlzLmRyYWcuYmluZCh0aGlzKTtcblxuICAgIHRoaXMubWluU2l6ZVN0YXJ0ID0gb3B0aW9ucy5taW5TaXplU3RhcnQ7XG4gICAgdGhpcy5taW5TaXplRW5kID0gb3B0aW9ucy5taW5TaXplRW5kO1xuXG4gICAgaWYgKG9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zdGFydERyYWdnaW5nKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLnN0YXJ0RHJhZ2dpbmcpO1xuICAgIH1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uIGdldERpbWVuc2lvbnMgKCkge1xuICAgIHZhciByZWYgPSB0aGlzLmdyaWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciB3aWR0aCA9IHJlZi53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IHJlZi5oZWlnaHQ7XG4gICAgICAgIHZhciB0b3AgPSByZWYudG9wO1xuICAgICAgICB2YXIgYm90dG9tID0gcmVmLmJvdHRvbTtcbiAgICAgICAgdmFyIGxlZnQgPSByZWYubGVmdDtcbiAgICAgICAgdmFyIHJpZ2h0ID0gcmVmLnJpZ2h0O1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnY29sdW1uJykge1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdG9wO1xuICAgICAgICB0aGlzLmVuZCA9IGJvdHRvbTtcbiAgICAgICAgdGhpcy5zaXplID0gaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdyb3cnKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLmVuZCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLnNpemUgPSB3aWR0aDtcbiAgICB9XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldFNpemVBdFRyYWNrID0gZnVuY3Rpb24gZ2V0U2l6ZUF0VHJhY2skMSAodHJhY2ssIGVuZCkge1xuICAgIHJldHVybiBnZXRTaXplQXRUcmFjayhcbiAgICAgICAgdHJhY2ssXG4gICAgICAgIHRoaXMuY29tcHV0ZWRQaXhlbHMsXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHMsXG4gICAgICAgIGVuZFxuICAgIClcbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0U2l6ZU9mVHJhY2sgPSBmdW5jdGlvbiBnZXRTaXplT2ZUcmFjayAodHJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5jb21wdXRlZFBpeGVsc1t0cmFja10ubnVtZXJpY1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5nZXRSYXdUcmFja3MgPSBmdW5jdGlvbiBnZXRSYXdUcmFja3MgKCkge1xuICAgIHZhciB0cmFja3MgPSBnZXRTdHlsZXMoXG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlUHJvcCxcbiAgICAgICAgW3RoaXMuZ3JpZF0sXG4gICAgICAgIGdldE1hdGNoZWRDU1NSdWxlcyh0aGlzLmdyaWQpXG4gICAgKTtcbiAgICBpZiAoIXRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uU3R5bGUpIHsgcmV0dXJuIHRoaXMub3B0aW9uU3R5bGUgfVxuXG4gICAgICAgIHRocm93IEVycm9yKCdVbmFibGUgdG8gZGV0ZXJtaW5lIGdyaWQgdGVtcGxhdGUgdHJhY2tzIGZyb20gc3R5bGVzLicpXG4gICAgfVxuICAgIHJldHVybiB0cmFja3NbMF1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0R2FwID0gZnVuY3Rpb24gZ2V0R2FwICgpIHtcbiAgICB2YXIgZ2FwID0gZ2V0U3R5bGVzKFxuICAgICAgICB0aGlzLmdyaWRHYXBQcm9wLFxuICAgICAgICBbdGhpcy5ncmlkXSxcbiAgICAgICAgZ2V0TWF0Y2hlZENTU1J1bGVzKHRoaXMuZ3JpZClcbiAgICApO1xuICAgIGlmICghZ2FwLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gZ2FwWzBdXG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldFJhd0NvbXB1dGVkVHJhY2tzID0gZnVuY3Rpb24gZ2V0UmF3Q29tcHV0ZWRUcmFja3MgKCkge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdyaWQpW3RoaXMuZ3JpZFRlbXBsYXRlUHJvcF1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0UmF3Q29tcHV0ZWRHYXAgPSBmdW5jdGlvbiBnZXRSYXdDb21wdXRlZEdhcCAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ3JpZClbdGhpcy5ncmlkR2FwUHJvcF1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuc2V0VHJhY2tzID0gZnVuY3Rpb24gc2V0VHJhY2tzIChyYXcpIHtcbiAgICB0aGlzLnRyYWNrcyA9IHJhdy5zcGxpdCgnICcpO1xuICAgIHRoaXMudHJhY2tWYWx1ZXMgPSBwYXJzZShyYXcpO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zZXRDb21wdXRlZFRyYWNrcyA9IGZ1bmN0aW9uIHNldENvbXB1dGVkVHJhY2tzIChyYXcpIHtcbiAgICB0aGlzLmNvbXB1dGVkVHJhY2tzID0gcmF3LnNwbGl0KCcgJyk7XG4gICAgdGhpcy5jb21wdXRlZFBpeGVscyA9IHBhcnNlKHJhdyk7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLnNldEdhcCA9IGZ1bmN0aW9uIHNldEdhcCAocmF3KSB7XG4gICAgdGhpcy5nYXAgPSByYXc7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLnNldENvbXB1dGVkR2FwID0gZnVuY3Rpb24gc2V0Q29tcHV0ZWRHYXAgKHJhdykge1xuICAgIHRoaXMuY29tcHV0ZWRHYXAgPSByYXc7XG4gICAgdGhpcy5jb21wdXRlZEdhcFBpeGVscyA9IGdldEdhcFZhbHVlKCdweCcsIHRoaXMuY29tcHV0ZWRHYXApIHx8IDA7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldE1vdXNlUG9zaXRpb24gPSBmdW5jdGlvbiBnZXRNb3VzZVBvc2l0aW9uIChlKSB7XG4gICAgaWYgKCd0b3VjaGVzJyBpbiBlKSB7IHJldHVybiBlLnRvdWNoZXNbMF1bdGhpcy5jbGllbnRBeGlzXSB9XG4gICAgcmV0dXJuIGVbdGhpcy5jbGllbnRBeGlzXVxufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zdGFydERyYWdnaW5nID0gZnVuY3Rpb24gc3RhcnREcmFnZ2luZyAoZSkge1xuICAgIGlmICgnYnV0dG9uJyBpbiBlICYmIGUuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIERvbid0IGFjdHVhbGx5IGRyYWcgdGhlIGVsZW1lbnQuIFdlIGVtdWxhdGUgdGhhdCBpbiB0aGUgZHJhZyBmdW5jdGlvbi5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgdGhpcy5nZXREaW1lbnNpb25zKCk7XG4gICAgdGhpcy5zZXRUcmFja3ModGhpcy5nZXRSYXdUcmFja3MoKSk7XG4gICAgdGhpcy5zZXRDb21wdXRlZFRyYWNrcyh0aGlzLmdldFJhd0NvbXB1dGVkVHJhY2tzKCkpO1xuICAgIHRoaXMuc2V0R2FwKHRoaXMuZ2V0R2FwKCkpO1xuICAgIHRoaXMuc2V0Q29tcHV0ZWRHYXAodGhpcy5nZXRSYXdDb21wdXRlZEdhcCgpKTtcblxuICAgIHZhciB0cmFja1BlcmNlbnRhZ2UgPSB0aGlzLnRyYWNrVmFsdWVzLmZpbHRlcihcbiAgICAgICAgZnVuY3Rpb24gKHRyYWNrKSB7IHJldHVybiB0cmFjay50eXBlID09PSAnJSc7IH1cbiAgICApO1xuICAgIHZhciB0cmFja0ZyID0gdGhpcy50cmFja1ZhbHVlcy5maWx0ZXIoZnVuY3Rpb24gKHRyYWNrKSB7IHJldHVybiB0cmFjay50eXBlID09PSAnZnInOyB9KTtcblxuICAgIHRoaXMudG90YWxGcnMgPSB0cmFja0ZyLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLnRvdGFsRnJzKSB7XG4gICAgICAgIHZhciB0cmFjayA9IGZpcnN0Tm9uWmVybyh0cmFja0ZyKTtcblxuICAgICAgICBpZiAodHJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZnJUb1BpeGVscyA9XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlZFBpeGVsc1t0cmFja10ubnVtZXJpYyAvIHRyYWNrRnJbdHJhY2tdLm51bWVyaWM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHJhY2tQZXJjZW50YWdlLmxlbmd0aCkge1xuICAgICAgICB2YXIgdHJhY2skMSA9IGZpcnN0Tm9uWmVybyh0cmFja1BlcmNlbnRhZ2UpO1xuXG4gICAgICAgIGlmICh0cmFjayQxICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmNlbnRhZ2VUb1BpeGVscyA9XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlZFBpeGVsc1t0cmFjayQxXS5udW1lcmljIC9cbiAgICAgICAgICAgICAgICB0cmFja1BlcmNlbnRhZ2VbdHJhY2skMV0ubnVtZXJpYztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCBzdGFydCBvZiBndXR0ZXIgdHJhY2tcbiAgICB2YXIgZ3V0dGVyU3RhcnQgPSB0aGlzLmdldFNpemVBdFRyYWNrKHRoaXMudHJhY2ssIGZhbHNlKSArIHRoaXMuc3RhcnQ7XG4gICAgdGhpcy5kcmFnU3RhcnRPZmZzZXQgPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oZSkgLSBndXR0ZXJTdGFydDtcblxuICAgIHRoaXMuYVRyYWNrID0gdGhpcy50cmFjayAtIDE7XG5cbiAgICBpZiAodGhpcy50cmFjayA8IHRoaXMudHJhY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5iVHJhY2sgPSB0aGlzLnRyYWNrICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAgIChcIkludmFsaWQgdHJhY2sgaW5kZXg6IFwiICsgKHRoaXMudHJhY2spICsgXCIuIFRyYWNrIG11c3QgYmUgYmV0d2VlbiB0d28gb3RoZXIgdHJhY2tzIGFuZCBvbmx5IFwiICsgKHRoaXMudHJhY2tzLmxlbmd0aCkgKyBcIiB0cmFja3Mgd2VyZSBmb3VuZC5cIilcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHRoaXMuYVRyYWNrU3RhcnQgPSB0aGlzLmdldFNpemVBdFRyYWNrKHRoaXMuYVRyYWNrLCBmYWxzZSkgKyB0aGlzLnN0YXJ0O1xuICAgIHRoaXMuYlRyYWNrRW5kID0gdGhpcy5nZXRTaXplQXRUcmFjayh0aGlzLmJUcmFjaywgdHJ1ZSkgKyB0aGlzLnN0YXJ0O1xuXG4gICAgLy8gU2V0IHRoZSBkcmFnZ2luZyBwcm9wZXJ0eSBvZiB0aGUgcGFpciBvYmplY3QuXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cbiAgICAvLyBBbGwgdGhlIGJpbmRpbmcuIGB3aW5kb3dgIGdldHMgdGhlIHN0b3AgZXZlbnRzIGluIGNhc2Ugd2UgZHJhZyBvdXQgb2YgdGhlIGVsZW1lbnRzLlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZyk7XG5cbiAgICAvLyBEaXNhYmxlIHNlbGVjdGlvbi4gRGlzYWJsZSFcbiAgICB0aGlzLmdyaWQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0c3RhcnQnLCBOT09QKTtcbiAgICB0aGlzLmdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgTk9PUCk7XG5cbiAgICB0aGlzLmdyaWQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICB0aGlzLmdyaWQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICdub25lJztcbiAgICB0aGlzLmdyaWQuc3R5bGUuTW96VXNlclNlbGVjdCA9ICdub25lJztcbiAgICB0aGlzLmdyaWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblxuICAgIC8vIFNldCB0aGUgY3Vyc29yIGF0IG11bHRpcGxlIGxldmVsc1xuICAgIHRoaXMuZ3JpZC5zdHlsZS5jdXJzb3IgPSB0aGlzLmN1cnNvcjtcbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSB0aGlzLmN1cnNvcjtcblxuICAgIHRoaXMub25EcmFnU3RhcnQodGhpcy5kaXJlY3Rpb24sIHRoaXMudHJhY2spO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zdG9wRHJhZ2dpbmcgPSBmdW5jdGlvbiBzdG9wRHJhZ2dpbmcgKCkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIC8vIFJlbW92ZSB0aGUgc3RvcmVkIGV2ZW50IGxpc3RlbmVycy4gVGhpcyBpcyB3aHkgd2Ugc3RvcmUgdGhlbS5cbiAgICB0aGlzLmNsZWFudXAoKTtcblxuICAgIHRoaXMub25EcmFnRW5kKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnRyYWNrKTtcblxuICAgIGlmICh0aGlzLm5lZWRzRGVzdHJveSkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAnbW91c2Vkb3duJyxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAndG91Y2hzdGFydCcsXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdHJveUNiKCk7XG4gICAgICAgIHRoaXMubmVlZHNEZXN0cm95ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVzdHJveUNiID0gbnVsbDtcbiAgICB9XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmRyYWcgPSBmdW5jdGlvbiBkcmFnIChlKSB7XG4gICAgdmFyIG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oZSk7XG5cbiAgICB2YXIgZ3V0dGVyU2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mVHJhY2sodGhpcy50cmFjayk7XG4gICAgdmFyIG1pbk1vdXNlUG9zaXRpb24gPVxuICAgICAgICB0aGlzLmFUcmFja1N0YXJ0ICtcbiAgICAgICAgdGhpcy5taW5TaXplU3RhcnQgK1xuICAgICAgICB0aGlzLmRyYWdTdGFydE9mZnNldCArXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHM7XG4gICAgdmFyIG1heE1vdXNlUG9zaXRpb24gPVxuICAgICAgICB0aGlzLmJUcmFja0VuZCAtXG4gICAgICAgIHRoaXMubWluU2l6ZUVuZCAtXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHMgLVxuICAgICAgICAoZ3V0dGVyU2l6ZSAtIHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0KTtcbiAgICB2YXIgbWluTW91c2VQb3NpdGlvbk9mZnNldCA9IG1pbk1vdXNlUG9zaXRpb24gKyB0aGlzLnNuYXBPZmZzZXQ7XG4gICAgdmFyIG1heE1vdXNlUG9zaXRpb25PZmZzZXQgPSBtYXhNb3VzZVBvc2l0aW9uIC0gdGhpcy5zbmFwT2Zmc2V0O1xuXG4gICAgaWYgKG1vdXNlUG9zaXRpb24gPCBtaW5Nb3VzZVBvc2l0aW9uT2Zmc2V0KSB7XG4gICAgICAgIG1vdXNlUG9zaXRpb24gPSBtaW5Nb3VzZVBvc2l0aW9uO1xuICAgIH1cblxuICAgIGlmIChtb3VzZVBvc2l0aW9uID4gbWF4TW91c2VQb3NpdGlvbk9mZnNldCkge1xuICAgICAgICBtb3VzZVBvc2l0aW9uID0gbWF4TW91c2VQb3NpdGlvbjtcbiAgICB9XG5cbiAgICBpZiAobW91c2VQb3NpdGlvbiA8IG1pbk1vdXNlUG9zaXRpb24pIHtcbiAgICAgICAgbW91c2VQb3NpdGlvbiA9IG1pbk1vdXNlUG9zaXRpb247XG4gICAgfSBlbHNlIGlmIChtb3VzZVBvc2l0aW9uID4gbWF4TW91c2VQb3NpdGlvbikge1xuICAgICAgICBtb3VzZVBvc2l0aW9uID0gbWF4TW91c2VQb3NpdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgYVRyYWNrU2l6ZSA9XG4gICAgICAgIG1vdXNlUG9zaXRpb24gLVxuICAgICAgICB0aGlzLmFUcmFja1N0YXJ0IC1cbiAgICAgICAgdGhpcy5kcmFnU3RhcnRPZmZzZXQgLVxuICAgICAgICB0aGlzLmNvbXB1dGVkR2FwUGl4ZWxzO1xuICAgIHZhciBiVHJhY2tTaXplID1cbiAgICAgICAgdGhpcy5iVHJhY2tFbmQgLVxuICAgICAgICBtb3VzZVBvc2l0aW9uICtcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRPZmZzZXQgLVxuICAgICAgICBndXR0ZXJTaXplIC1cbiAgICAgICAgdGhpcy5jb21wdXRlZEdhcFBpeGVscztcblxuICAgIGlmICh0aGlzLmRyYWdJbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgdmFyIGFUcmFja1NpemVJbnRlcnZhbGVkID1cbiAgICAgICAgICAgIE1hdGgucm91bmQoYVRyYWNrU2l6ZSAvIHRoaXMuZHJhZ0ludGVydmFsKSAqIHRoaXMuZHJhZ0ludGVydmFsO1xuICAgICAgICBiVHJhY2tTaXplIC09IGFUcmFja1NpemVJbnRlcnZhbGVkIC0gYVRyYWNrU2l6ZTtcbiAgICAgICAgYVRyYWNrU2l6ZSA9IGFUcmFja1NpemVJbnRlcnZhbGVkO1xuICAgIH1cblxuICAgIGlmIChhVHJhY2tTaXplIDwgdGhpcy5taW5TaXplU3RhcnQpIHtcbiAgICAgICAgYVRyYWNrU2l6ZSA9IHRoaXMubWluU2l6ZVN0YXJ0O1xuICAgIH1cblxuICAgIGlmIChiVHJhY2tTaXplIDwgdGhpcy5taW5TaXplRW5kKSB7XG4gICAgICAgIGJUcmFja1NpemUgPSB0aGlzLm1pblNpemVFbmQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHJhY2tWYWx1ZXNbdGhpcy5hVHJhY2tdLnR5cGUgPT09ICdweCcpIHtcbiAgICAgICAgdGhpcy50cmFja3NbdGhpcy5hVHJhY2tdID0gYVRyYWNrU2l6ZSArIFwicHhcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMudHJhY2tWYWx1ZXNbdGhpcy5hVHJhY2tdLnR5cGUgPT09ICdmcicpIHtcbiAgICAgICAgaWYgKHRoaXMudG90YWxGcnMgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYVRyYWNrXSA9ICcxZnInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhcmdldEZyID0gYVRyYWNrU2l6ZSAvIHRoaXMuZnJUb1BpeGVscztcbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYVRyYWNrXSA9IHRhcmdldEZyICsgXCJmclwiO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRyYWNrVmFsdWVzW3RoaXMuYVRyYWNrXS50eXBlID09PSAnJScpIHtcbiAgICAgICAgdmFyIHRhcmdldFBlcmNlbnRhZ2UgPSBhVHJhY2tTaXplIC8gdGhpcy5wZXJjZW50YWdlVG9QaXhlbHM7XG4gICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYVRyYWNrXSA9IHRhcmdldFBlcmNlbnRhZ2UgKyBcIiVcIjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50cmFja1ZhbHVlc1t0aGlzLmJUcmFja10udHlwZSA9PT0gJ3B4Jykge1xuICAgICAgICB0aGlzLnRyYWNrc1t0aGlzLmJUcmFja10gPSBiVHJhY2tTaXplICsgXCJweFwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy50cmFja1ZhbHVlc1t0aGlzLmJUcmFja10udHlwZSA9PT0gJ2ZyJykge1xuICAgICAgICBpZiAodGhpcy50b3RhbEZycyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy50cmFja3NbdGhpcy5iVHJhY2tdID0gJzFmcic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0RnIkMSA9IGJUcmFja1NpemUgLyB0aGlzLmZyVG9QaXhlbHM7XG4gICAgICAgICAgICB0aGlzLnRyYWNrc1t0aGlzLmJUcmFja10gPSB0YXJnZXRGciQxICsgXCJmclwiO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRyYWNrVmFsdWVzW3RoaXMuYlRyYWNrXS50eXBlID09PSAnJScpIHtcbiAgICAgICAgdmFyIHRhcmdldFBlcmNlbnRhZ2UkMSA9IGJUcmFja1NpemUgLyB0aGlzLnBlcmNlbnRhZ2VUb1BpeGVscztcbiAgICAgICAgdGhpcy50cmFja3NbdGhpcy5iVHJhY2tdID0gdGFyZ2V0UGVyY2VudGFnZSQxICsgXCIlXCI7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0gdGhpcy50cmFja3Muam9pbignICcpO1xuICAgIHRoaXMud3JpdGVTdHlsZSh0aGlzLmdyaWQsIHRoaXMuZ3JpZFRlbXBsYXRlUHJvcCwgc3R5bGUpO1xuICAgIHRoaXMub25EcmFnKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnRyYWNrLCBzdHlsZSk7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWcpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWcpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICB0aGlzLmdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0c3RhcnQnLCBOT09QKTtcbiAgICAgICAgdGhpcy5ncmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIE5PT1ApO1xuXG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS51c2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG5cbiAgICAgICAgdGhpcy5ncmlkLnN0eWxlLmN1cnNvciA9ICcnO1xuICAgIH1cblxuICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICcnO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoaW1tZWRpYXRlLCBjYikge1xuICAgICAgICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gdHJ1ZTtcblxuICAgIGlmIChpbW1lZGlhdGUgfHwgdGhpcy5kcmFnZ2luZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICdtb3VzZWRvd24nLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5lZWRzRGVzdHJveSA9IHRydWU7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95Q2IgPSBjYjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBnZXRUcmFja09wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zLCB0cmFjaywgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHRyYWNrIGluIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNbdHJhY2tdXG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxufTtcblxudmFyIGNyZWF0ZUd1dHRlciA9IGZ1bmN0aW9uIChkaXJlY3Rpb24sIG9wdGlvbnMpIHsgcmV0dXJuIGZ1bmN0aW9uIChndXR0ZXJPcHRpb25zKSB7XG4gICAgaWYgKGd1dHRlck9wdGlvbnMudHJhY2sgPCAxKSB7XG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgKFwiSW52YWxpZCB0cmFjayBpbmRleDogXCIgKyAoZ3V0dGVyT3B0aW9ucy50cmFjaykgKyBcIi4gVHJhY2sgbXVzdCBiZSBiZXR3ZWVuIHR3byBvdGhlciB0cmFja3MuXCIpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICB2YXIgdHJhY2tNaW5TaXplcyA9XG4gICAgICAgIGRpcmVjdGlvbiA9PT0gJ2NvbHVtbidcbiAgICAgICAgICAgID8gb3B0aW9ucy5jb2x1bW5NaW5TaXplcyB8fCB7fVxuICAgICAgICAgICAgOiBvcHRpb25zLnJvd01pblNpemVzIHx8IHt9O1xuICAgIHZhciB0cmFja01pblNpemUgPSBkaXJlY3Rpb24gPT09ICdjb2x1bW4nID8gJ2NvbHVtbk1pblNpemUnIDogJ3Jvd01pblNpemUnO1xuXG4gICAgcmV0dXJuIG5ldyBHdXR0ZXIoXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwge21pblNpemVTdGFydDogZ2V0VHJhY2tPcHRpb24oXG4gICAgICAgICAgICAgICAgdHJhY2tNaW5TaXplcyxcbiAgICAgICAgICAgICAgICBndXR0ZXJPcHRpb25zLnRyYWNrIC0gMSxcbiAgICAgICAgICAgICAgICBnZXRPcHRpb24oXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrTWluU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uKG9wdGlvbnMsICdtaW5TaXplJywgMClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWluU2l6ZUVuZDogZ2V0VHJhY2tPcHRpb24oXG4gICAgICAgICAgICAgICAgdHJhY2tNaW5TaXplcyxcbiAgICAgICAgICAgICAgICBndXR0ZXJPcHRpb25zLnRyYWNrICsgMSxcbiAgICAgICAgICAgICAgICBnZXRPcHRpb24oXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrTWluU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uKG9wdGlvbnMsICdtaW5TaXplJywgMClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfSxcbiAgICAgICAgICAgIGd1dHRlck9wdGlvbnMpLFxuICAgICAgICBvcHRpb25zXG4gICAgKVxufTsgfTtcblxudmFyIEdyaWQgPSBmdW5jdGlvbiBHcmlkKG9wdGlvbnMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHRoaXMuY29sdW1uR3V0dGVycyA9IHt9O1xuICAgIHRoaXMucm93R3V0dGVycyA9IHt9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwge2NvbHVtbkd1dHRlcnM6IG9wdGlvbnMuY29sdW1uR3V0dGVycyB8fCBbXSxcbiAgICAgICAgcm93R3V0dGVyczogb3B0aW9ucy5yb3dHdXR0ZXJzIHx8IFtdLFxuICAgICAgICBjb2x1bW5NaW5TaXplczogb3B0aW9ucy5jb2x1bW5NaW5TaXplcyB8fCB7fSxcbiAgICAgICAgcm93TWluU2l6ZXM6IG9wdGlvbnMucm93TWluU2l6ZXMgfHwge319LFxuICAgICAgICBvcHRpb25zKTtcblxuICAgIHRoaXMub3B0aW9ucy5jb2x1bW5HdXR0ZXJzLmZvckVhY2goZnVuY3Rpb24gKGd1dHRlck9wdGlvbnMpIHtcbiAgICAgICAgdGhpcyQxLmNvbHVtbkd1dHRlcnNbZ3V0dGVyT3B0aW9ucy50cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICAgICAnY29sdW1uJyxcbiAgICAgICAgICAgIHRoaXMkMS5vcHRpb25zXG4gICAgICAgICkoZ3V0dGVyT3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wdGlvbnMucm93R3V0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChndXR0ZXJPcHRpb25zKSB7XG4gICAgICAgIHRoaXMkMS5yb3dHdXR0ZXJzW2d1dHRlck9wdGlvbnMudHJhY2tdID0gY3JlYXRlR3V0dGVyKFxuICAgICAgICAgICAgJ3JvdycsXG4gICAgICAgICAgICB0aGlzJDEub3B0aW9uc1xuICAgICAgICApKGd1dHRlck9wdGlvbnMpO1xuICAgIH0pO1xufTtcblxuR3JpZC5wcm90b3R5cGUuYWRkQ29sdW1uR3V0dGVyID0gZnVuY3Rpb24gYWRkQ29sdW1uR3V0dGVyIChlbGVtZW50LCB0cmFjaykge1xuICAgIGlmICh0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICdjb2x1bW4nLFxuICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICApKHtcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgIH0pO1xufTtcblxuR3JpZC5wcm90b3R5cGUuYWRkUm93R3V0dGVyID0gZnVuY3Rpb24gYWRkUm93R3V0dGVyIChlbGVtZW50LCB0cmFjaykge1xuICAgIGlmICh0aGlzLnJvd0d1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICdyb3cnLFxuICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICApKHtcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgIH0pO1xufTtcblxuR3JpZC5wcm90b3R5cGUucmVtb3ZlQ29sdW1uR3V0dGVyID0gZnVuY3Rpb24gcmVtb3ZlQ29sdW1uR3V0dGVyICh0cmFjaywgaW1tZWRpYXRlKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgICAgICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10uZGVzdHJveShpbW1lZGlhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzJDEuY29sdW1uR3V0dGVyc1t0cmFja107XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbkdyaWQucHJvdG90eXBlLnJlbW92ZVJvd0d1dHRlciA9IGZ1bmN0aW9uIHJlbW92ZVJvd0d1dHRlciAodHJhY2ssIGltbWVkaWF0ZSkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICAgICAgaWYgKCBpbW1lZGlhdGUgPT09IHZvaWQgMCApIGltbWVkaWF0ZSA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5yb3dHdXR0ZXJzW3RyYWNrXSkge1xuICAgICAgICB0aGlzLnJvd0d1dHRlcnNbdHJhY2tdLmRlc3Ryb3koaW1tZWRpYXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcyQxLnJvd0d1dHRlcnNbdHJhY2tdO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5HcmlkLnByb3RvdHlwZS5oYW5kbGVEcmFnU3RhcnQgPSBmdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQgKGUsIGRpcmVjdGlvbiwgdHJhY2spIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnY29sdW1uJykge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXSkge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdID0gY3JlYXRlR3V0dGVyKFxuICAgICAgICAgICAgJ2NvbHVtbicsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgKSh7XG4gICAgICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdLnN0YXJ0RHJhZ2dpbmcoZSk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyb3cnKSB7XG4gICAgICAgIGlmICh0aGlzLnJvd0d1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgICAgICB0aGlzLnJvd0d1dHRlcnNbdHJhY2tdLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICAgICAncm93JyxcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICApKHtcbiAgICAgICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10uc3RhcnREcmFnZ2luZyhlKTtcbiAgICB9XG59O1xuXG5HcmlkLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoaW1tZWRpYXRlKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgICAgICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gdHJ1ZTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuY29sdW1uR3V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHsgcmV0dXJuIHRoaXMkMS5jb2x1bW5HdXR0ZXJzW3RyYWNrXS5kZXN0cm95KGltbWVkaWF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMkMS5jb2x1bW5HdXR0ZXJzW3RyYWNrXTtcbiAgICAgICAgfSk7IH1cbiAgICApO1xuICAgIE9iamVjdC5rZXlzKHRoaXMucm93R3V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHsgcmV0dXJuIHRoaXMkMS5yb3dHdXR0ZXJzW3RyYWNrXS5kZXN0cm95KGltbWVkaWF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMkMS5yb3dHdXR0ZXJzW3RyYWNrXTtcbiAgICAgICAgfSk7IH1cbiAgICApO1xufTtcblxuZnVuY3Rpb24gaW5kZXggKG9wdGlvbnMpIHsgcmV0dXJuIG5ldyBHcmlkKG9wdGlvbnMpOyB9XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXIuanNcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9sb2dpbi5qc1wiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vc2lkZWJhci5qc1wiO1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29udGVudC5qc1wiO1xuaW1wb3J0IEd1dHRlcnMgZnJvbSBcIi4vZ3V0dGVycy5qc1wiO1xuaW1wb3J0IFNwbGl0IGZyb20gXCJzcGxpdC1ncmlkXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBwcm9qZWN0RGF0YSA9IFt7XG4gICAgdGl0bGU6IFwiXCIsIFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLCBcbiAgICBzZWxlY3RlZDogdHJ1ZSwgXG4gICAgdGFza3M6IFtdXG59XTtcblxuY29uc3QgdXNlckRhdGEgPSBbXTtcblxuSGVhZGVyKCk7XG5Mb2dpbih1c2VyRGF0YSk7XG5TaWRlYmFyKCk7XG5Db250ZW50KHByb2plY3REYXRhKTtcbkd1dHRlcnMoKTtcblNwbGl0KHtcbiAgICBjb2x1bW5HdXR0ZXJzOiBbe1xuICAgICAgICB0cmFjazogMSxcbiAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJndXR0ZXItY29sXCIpXG4gICAgfV0sXG4gICAgcm93R3V0dGVyczogW3tcbiAgICAgICAgdHJhY2s6IDEsXG4gICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3V0dGVyLXJvd1wiKVxuICAgIH1dXG59KTtcblByb2plY3QocHJvamVjdERhdGEpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==