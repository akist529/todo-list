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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    font-family: \"Karla\";\n}\n\nbody {\n    background-color: lightgrey;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: space-between;\n    gap: 10px;\n}\n\n.header-button {\n    border: none;\n    border-radius: 5px;\n\n    font-family: \"Roboto Mono\";\n    font-size: 1rem;\n\n    padding: 20px 40px;\n}\n\n.login-field {\n    display: flex;\n    justify-content: space-between;\n}\n\n.button-close {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    background-color: rgb(194, 27, 27);\n    color: white;\n    font-size: 2rem;\n    font-weight: 700;\n\n    height: 50px;\n    width: 50px;\n\n    border-top-left-radius: 25px;\n    border-bottom-right-radius: 10px;\n}\n\n.sidebar-line {\n    display: flex;\n    align-items: center;\n    font-size: 1.25rem;\n\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n\n    cursor: pointer;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 1fr 2px 4fr;\n    grid-template-columns: 1fr 2px 4fr;\n    height: 100vh;\n    width: 100vw;\n\n    position: absolute;\n    z-index: 0;\n}\n\n#header {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n\n    background-color: lightgrey;\n    position: relative;\n    transform: translateY(-500px);\n    z-index: 2;\n    padding: 5px 0 5px 0;\n\n    animation: header-spawn;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n@keyframes header-spawn {\n    0% {\n        transform: translateY(-500px);\n    } 50% {\n        transform: translateY(20px);\n    } 100% {\n        transform: translateY(0px);\n    }\n}\n\n#header-title {\n    font-size: 4rem;\n}\n\n#header-buttons {\n    display: flex;\n    gap: 20px;\n}\n\n#menu-button {\n    padding: 20px 40px;\n    transition: 0.25s;\n}\n\n#menu-button:hover {\n    padding: 20px 120px;\n    transition: 0.25s;\n}\n\n#login-screen {\n    background-color: rgba(0, 0, 0, 0.5);\n\n    height: 100vh;\n    width: 100vw;\n\n    position: absolute;\n    z-index: 1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    animation: login-spawn;\n    animation-duration: 0.25s;\n    animation-fill-mode: forwards;\n}\n\n@keyframes login-spawn {\n    0% {\n        opacity: 0%;\n    } 100% {\n        opacity: 100%;\n    }\n}\n\n#login-prompt {\n    background-color: white;\n    border-radius: 25px;\n    box-shadow: 5px 5px 20px #000000;\n\n    height: 250px;\n    width: 500px;\n\n    animation: header-spawn;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n#sidebar {\n    grid-row: 3 / 4;\n    grid-column: 1 / 2;\n\n    background-color: lightgrey;\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n    padding-top: 20px;\n\n    animation: sidebar-spawn;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n@keyframes sidebar-spawn {\n    0% {\n        transform: translateX(-500px);\n    }\n    50% {\n        transform: translateX(20px);\n    }\n    100% {\n        transform: translateX(0px);\n    }\n}\n\n#list-wrapper {\n    grid-row: 3 / 4;\n    grid-column: 3 / 4;\n\n    background-color: white;\n    position: relative;\n    z-index: 0;\n\n    animation: list-spawn;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n}\n\n#list {\n    animation: list-spawn;\n    animation-duration: 0.5s;\n}\n\n@keyframes list-spawn {\n    from {\n        transform: translateY(1000px);\n    }\n    to {\n        transform: translateY(0px);\n    }\n}\n\n#gutter-col {\n    grid-row: 3 / 4;\n    grid-column: 2 / 3;\n    justify-self: center;\n\n    position: relative;\n    z-index: 1;\n\n    background-color: black;\n    width: 2px;\n    transition: 0.5s;\n\n    animation: sidebar-spawn;\n    animation-duration: 1s;\n}\n\n#gutter-col:hover {\n    cursor: col-resize;\n    width: 30px;\n}\n\n#gutter-row {\n    grid-row: 2 / 3;\n    grid-column: 1 / -1;\n    align-self: center;\n\n    position: relative;\n    z-index: 2;\n\n    background-color: black;\n    height: 2px;\n    transition: 0.5s;\n\n    animation: header-spawn;\n    animation-duration: 1s;\n}\n\n#gutter-row:hover {\n    cursor: row-resize;\n    height: 30px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono\");\n@import url(\"https://fonts.googleapis.com/css?family=Antonio\");\n@import url(\"https://fonts.googleapis.com/css?family=Karla\");\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    font-family: \"Karla\";\n}\n\nbody {\n    background-color: lightgrey;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: space-between;\n    gap: 10px;\n}\n\n.header-button {\n    border: none;\n    border-radius: 5px;\n\n    font-family: \"Roboto Mono\";\n    font-size: 1rem;\n\n    padding: 20px 40px;\n}\n\n.login-field {\n    display: flex;\n    justify-content: space-between;\n}\n\n.button-close {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    background-color: rgb(194, 27, 27);\n    color: white;\n    font-size: 2rem;\n    font-weight: 700;\n\n    height: 50px;\n    width: 50px;\n\n    border-top-left-radius: 25px;\n    border-bottom-right-radius: 10px;\n}\n\n.sidebar-line {\n    display: flex;\n    align-items: center;\n    font-size: 1.25rem;\n\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n\n    cursor: pointer;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 1fr 2px 4fr;\n    grid-template-columns: 1fr 2px 4fr;\n    height: 100vh;\n    width: 100vw;\n\n    position: absolute;\n    z-index: 0;\n}\n\n#header {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n\n    background-color: lightgrey;\n    position: relative;\n    transform: translateY(-500px);\n    z-index: 2;\n    padding: 5px 0 5px 0;\n\n    animation: header-spawn;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n@keyframes header-spawn {\n    0% {\n        transform: translateY(-500px);\n    } 50% {\n        transform: translateY(20px);\n    } 100% {\n        transform: translateY(0px);\n    }\n}\n\n#header-title {\n    font-size: 4rem;\n}\n\n#header-buttons {\n    display: flex;\n    gap: 20px;\n}\n\n#menu-button {\n    padding: 20px 40px;\n    transition: 0.25s;\n}\n\n#menu-button:hover {\n    padding: 20px 120px;\n    transition: 0.25s;\n}\n\n#login-screen {\n    background-color: rgba(0, 0, 0, 0.5);\n\n    height: 100vh;\n    width: 100vw;\n\n    position: absolute;\n    z-index: 1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    animation: login-spawn;\n    animation-duration: 0.25s;\n    animation-fill-mode: forwards;\n}\n\n@keyframes login-spawn {\n    0% {\n        opacity: 0%;\n    } 100% {\n        opacity: 100%;\n    }\n}\n\n#login-prompt {\n    background-color: white;\n    border-radius: 25px;\n    box-shadow: 5px 5px 20px #000000;\n\n    height: 250px;\n    width: 500px;\n\n    animation: header-spawn;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n#sidebar {\n    grid-row: 3 / 4;\n    grid-column: 1 / 2;\n\n    background-color: lightgrey;\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n    padding-top: 20px;\n\n    animation: sidebar-spawn;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n@keyframes sidebar-spawn {\n    0% {\n        transform: translateX(-500px);\n    }\n    50% {\n        transform: translateX(20px);\n    }\n    100% {\n        transform: translateX(0px);\n    }\n}\n\n#list-wrapper {\n    grid-row: 3 / 4;\n    grid-column: 3 / 4;\n\n    background-color: white;\n    position: relative;\n    z-index: 0;\n\n    animation: list-spawn;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n}\n\n#list {\n    animation: list-spawn;\n    animation-duration: 0.5s;\n}\n\n@keyframes list-spawn {\n    from {\n        transform: translateY(1000px);\n    }\n    to {\n        transform: translateY(0px);\n    }\n}\n\n#gutter-col {\n    grid-row: 3 / 4;\n    grid-column: 2 / 3;\n    justify-self: center;\n\n    position: relative;\n    z-index: 1;\n\n    background-color: black;\n    width: 2px;\n    transition: 0.5s;\n\n    animation: sidebar-spawn;\n    animation-duration: 1s;\n}\n\n#gutter-col:hover {\n    cursor: col-resize;\n    width: 30px;\n}\n\n#gutter-row {\n    grid-row: 2 / 3;\n    grid-column: 1 / -1;\n    align-self: center;\n\n    position: relative;\n    z-index: 2;\n\n    background-color: black;\n    height: 2px;\n    transition: 0.5s;\n\n    animation: header-spawn;\n    animation-duration: 1s;\n}\n\n#gutter-row:hover {\n    cursor: row-resize;\n    height: 30px;\n}"],"sourceRoot":""}]);
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
    header.id = "header";

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
    loginButton.id = "login-button";
    loginButton.className = "header-button";
    loginButton.innerHTML = "Sign In";
    headerButtons.appendChild(loginButton);

    const menuImg = document.createElement("img");
    menuImg.setAttribute("src", "../src/images/menu.png");

    const menuButton = document.createElement("button");
    menuButton.id = "menu-button";
    menuButton.className = "header-button";
    menuButton.appendChild(menuImg);
    headerButtons.appendChild(menuButton);

    header.appendChild(headerButtons);

    document.getElementById("content").appendChild(header);
}

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
function List() {
    const listWrapper = document.createElement("div");
    listWrapper.id = "list-wrapper";
    const list = document.createElement("div");
    list.id = "list";
    const listTitle = document.createElement("h1");
    listTitle.textContent = "LIST";
    list.appendChild(listTitle);
    listWrapper.appendChild(list);
    document.getElementById("content").appendChild(listWrapper);
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
function Login() {
    const loginScreen = document.createElement("div");
    loginScreen.setAttribute("id", "login-screen");

    const loginPrompt = document.createElement("div");
    loginPrompt.setAttribute("id", "login-prompt");

    const loginHeader = document.createElement("h1");
    loginHeader.setAttribute("id", "login-header");
    loginHeader.textContent = "Sign in to Do_It";
    loginPrompt.appendChild(loginHeader);

    const form = document.createElement("form");
    form.setAttribute("action", "");

    const logName = document.createElement("div");
    logName.className = "login-field";

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    nameLabel.setAttribute("for", "login-name");
    logName.appendChild(nameLabel);

    const nameField = document.createElement("input");
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

        document.getElementById("login-submit").addEventListener("click", function() {
            document.getElementById("login-screen").remove();
        });

        document.getElementById("close-login").addEventListener("click", function() {
            document.getElementById("login-screen").remove();
        });
    });
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
    sidebar.id = "sidebar";

    const inbox = document.createElement("button");
    inbox.className = "sidebar-line";
    const inboxPic = document.createElement("img");
    inboxPic.setAttribute("src", "../src/images/timeline.png");
    inbox.appendChild(inboxPic);
    const inboxText = document.createElement("h3");
    inboxText.textContent = "Inbox";
    inbox.appendChild(inboxText);
    sidebar.appendChild(inbox);

    const today = document.createElement("button");
    today.className = "sidebar-line";
    const todayPic = document.createElement("img");
    todayPic.setAttribute("src", "../src/images/today.png");
    today.appendChild(todayPic);
    const todayText = document.createElement("h3");
    todayText.textContent = "Today";
    today.appendChild(todayText);
    sidebar.appendChild(today);

    const calendar = document.createElement("button");
    calendar.className = "sidebar-line";
    const calendarPic = document.createElement("img");
    calendarPic.setAttribute("src", "../src/images/calendar.png");
    calendar.appendChild(calendarPic);
    const calendarText = document.createElement("h3");
    calendarText.textContent = "Calendar";
    calendar.appendChild(calendarText);
    sidebar.appendChild(calendar);

    const projects = document.createElement("button");
    projects.className = "sidebar-line";
    const projectsPic = document.createElement("img");
    projectsPic.setAttribute("src", "../src/images/chevron_right.png");
    projects.appendChild(projectsPic);
    const projectsText = document.createElement("h3");
    projectsText.textContent = "Projects";
    projects.appendChild(projectsText);
    sidebar.appendChild(projects);

    const addProj = document.createElement("button");
    addProj.className = "sidebar-line";
    const addProjPic = document.createElement("img");
    addProjPic.setAttribute("src", "../src/images/folder.png");
    addProj.appendChild(addProjPic);
    const addProjText = document.createElement("h3");
    addProjText.textContent = "Add Project";
    addProj.appendChild(addProjText);
    sidebar.appendChild(addProj);

    document.getElementById("content").appendChild(sidebar);
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
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.js */ "./src/list.js");
/* harmony import */ var _gutters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gutters.js */ "./src/gutters.js");
/* harmony import */ var split_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! split-grid */ "./node_modules/split-grid/dist/split-grid.mjs");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








(0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_login_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_list_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1ZlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7OztBQ3ZFZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZEQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQSxVQUFVLFNBQVM7QUFDbkI7QUFDQSxVQUFVLFNBQVM7QUFDbkI7QUFDQSxVQUFVLFNBQVM7QUFDbkIsNEJBQTRCLFNBQVM7QUFDckM7QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0EsNEJBQTRCO0FBQzVCLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLCtCQUErQjtBQUN6RTs7QUFFQTtBQUNBOztBQUVBLDBEQUEwRDtBQUMxRCw0QkFBNEIsdUJBQXVCO0FBQ25ELG1DQUFtQyw2Q0FBNkM7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSw2REFBNkQsNkJBQTZCOztBQUUxRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLEdBQUc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DQUFtQyxHQUFHO0FBQ3RDO0FBQ0Esb0RBQW9EO0FBQ3BELCtDQUErQztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwrREFBK0Q7QUFDL0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSwyQkFBMkI7O0FBRTNCLGlFQUFlLEtBQUssRUFBQzs7Ozs7OztVQ3JxQnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBaUM7QUFDRjtBQUNJO0FBQ047QUFDTTtBQUNKO0FBQ1Y7O0FBRXJCLHNEQUFNO0FBQ04scURBQUs7QUFDTCx1REFBTztBQUNQLG9EQUFJO0FBQ0osdURBQU87O0FBRVAsc0RBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZ3V0dGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3BsaXQtZ3JpZC9kaXN0L3NwbGl0LWdyaWQubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rTW9ubyk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QW50b25pbyk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2FybGEpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmhlYWRlci1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbn1cXG5cXG4ubG9naW4tZmllbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5idXR0b24tY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMjcsIDI3KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhci1saW5lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcblxcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAycHggNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAycHggNGZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMDtcXG5cXG4gICAgYW5pbWF0aW9uOiBoZWFkZXItc3Bhd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBoZWFkZXItc3Bhd24ge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwMHB4KTtcXG4gICAgfSA1MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICB9IDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICAgIH1cXG59XFxuXFxuI2hlYWRlci10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuI2hlYWRlci1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jbWVudS1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jbWVudS1idXR0b246aG92ZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4IDEyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2xvZ2luLXNjcmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBhbmltYXRpb246IGxvZ2luLXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMjVzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBsb2dpbi1zcGF3biB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICB9IDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG4jbG9naW4tcHJvbXB0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCAjMDAwMDAwO1xcblxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuXFxuICAgIGFuaW1hdGlvbjogaGVhZGVyLXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG5cXG4gICAgYW5pbWF0aW9uOiBzaWRlYmFyLXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbkBrZXlmcmFtZXMgc2lkZWJhci1zcGF3biB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgfVxcbn1cXG5cXG4jbGlzdC13cmFwcGVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDA7XFxuXFxuICAgIGFuaW1hdGlvbjogbGlzdC1zcGF3bjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuI2xpc3Qge1xcbiAgICBhbmltYXRpb246IGxpc3Qtc3Bhd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG59XFxuXFxuQGtleWZyYW1lcyBsaXN0LXNwYXduIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwMHB4KTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgfVxcbn1cXG5cXG4jZ3V0dGVyLWNvbCB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDJweDtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG5cXG4gICAgYW5pbWF0aW9uOiBzaWRlYmFyLXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbn1cXG5cXG4jZ3V0dGVyLWNvbDpob3ZlciB7XFxuICAgIGN1cnNvcjogY29sLXJlc2l6ZTtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcbiNndXR0ZXItcm93IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcblxcbiAgICBhbmltYXRpb246IGhlYWRlci1zcGF3bjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG59XFxuXFxuI2d1dHRlci1yb3c6aG92ZXIge1xcbiAgICBjdXJzb3I6IHJvdy1yZXNpemU7XFxuICAgIGhlaWdodDogMzBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCOztJQUV0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjs7SUFFbEIsMEJBQTBCO0lBQzFCLGVBQWU7O0lBRWYsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTzs7SUFFUCxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7O0lBRWhCLFlBQVk7SUFDWixXQUFXOztJQUVYLDRCQUE0QjtJQUM1QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjs7SUFFbEIsWUFBWTtJQUNaLGtDQUFrQzs7SUFFbEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixZQUFZOztJQUVaLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1COztJQUVuQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1Ysb0JBQW9COztJQUVwQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLDZCQUE2Qjs7SUFFN0IsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQyxFQUFFO1FBQ0UsMkJBQTJCO0lBQy9CLEVBQUU7UUFDRSwwQkFBMEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7O0lBRXBDLGFBQWE7SUFDYixZQUFZOztJQUVaLGtCQUFrQjtJQUNsQixVQUFVOztJQUVWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmLEVBQUU7UUFDRSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdDQUFnQzs7SUFFaEMsYUFBYTtJQUNiLFlBQVk7O0lBRVosdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4Qiw2QkFBNkI7O0lBRTdCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCOztJQUVsQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsaUJBQWlCOztJQUVqQix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLDZCQUE2Qjs7SUFFN0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7O0lBRWxCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsVUFBVTs7SUFFVixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjs7SUFFcEIsa0JBQWtCO0lBQ2xCLFVBQVU7O0lBRVYsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixnQkFBZ0I7O0lBRWhCLHdCQUF3QjtJQUN4QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7O0lBRWxCLGtCQUFrQjtJQUNsQixVQUFVOztJQUVWLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0JBQWdCOztJQUVoQix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cXFwiKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytNb25vXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbnRvbmlvXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYXJsYVxcXCIpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90byBNb25vXFxcIjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxufVxcblxcbi5sb2dpbi1maWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJ1dHRvbi1jbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAyNywgMjcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG5cXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyLWxpbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJweCA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJweCA0ZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xcblxcbiAgICBhbmltYXRpb246IGhlYWRlci1zcGF3bjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhlYWRlci1zcGF3biB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xcbiAgICB9IDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIH0gMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgfVxcbn1cXG5cXG4jaGVhZGVyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4jaGVhZGVyLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNtZW51LWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNtZW51LWJ1dHRvbjpob3ZlciB7XFxuICAgIHBhZGRpbmc6IDIwcHggMTIwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jbG9naW4tc2NyZWVuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcblxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGFuaW1hdGlvbjogbG9naW4tc3Bhd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4yNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxvZ2luLXNwYXduIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMCU7XFxuICAgIH0gMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB9XFxufVxcblxcbiNsb2dpbi1wcm9tcHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4ICMwMDAwMDA7XFxuXFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG5cXG4gICAgYW5pbWF0aW9uOiBoZWFkZXItc3Bhd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcblxcbiAgICBhbmltYXRpb246IHNpZGViYXItc3Bhd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuQGtleWZyYW1lcyBzaWRlYmFyLXNwYXduIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDBweCk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICB9XFxufVxcblxcbiNsaXN0LXdyYXBwZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMDtcXG5cXG4gICAgYW5pbWF0aW9uOiBsaXN0LXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4jbGlzdCB7XFxuICAgIGFuaW1hdGlvbjogbGlzdC1zcGF3bjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxpc3Qtc3Bhd24ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAwcHgpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICB9XFxufVxcblxcbiNndXR0ZXItY29sIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcblxcbiAgICBhbmltYXRpb246IHNpZGViYXItc3Bhd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxufVxcblxcbiNndXR0ZXItY29sOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBjb2wtcmVzaXplO1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuI2d1dHRlci1yb3cge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuXFxuICAgIGFuaW1hdGlvbjogaGVhZGVyLXNwYXduO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbn1cXG5cXG4jZ3V0dGVyLXJvdzpob3ZlciB7XFxuICAgIGN1cnNvcjogcm93LXJlc2l6ZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEd1dHRlcnMoKSB7XG4gICAgY29uc3QgZ3V0dGVyQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBndXR0ZXJDb2wuaWQgPSBcImd1dHRlci1jb2xcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZ3V0dGVyQ29sKTtcblxuICAgIGNvbnN0IGd1dHRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3V0dGVyUm93LmlkID0gXCJndXR0ZXItcm93XCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGd1dHRlclJvdyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyVGl0bGVzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLXRpdGxlc1wiKTtcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlclRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLXRpdGxlXCIpO1xuICAgIGhlYWRlclRpdGxlLmlubmVySFRNTCA9IFwiRE9fSVRcIjtcbiAgICBoZWFkZXJUaXRsZXMuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSBcIlRoZSB0by1kbyBhcHAgZm9yIG1hbmFnaW5nIHlvdXIgbGlmZVwiO1xuICAgIGhlYWRlclRpdGxlcy5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlcyk7XG5cbiAgICBjb25zdCBoZWFkZXJCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJCdXR0b25zLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLWJ1dHRvbnNcIik7XG5cbiAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbG9naW5CdXR0b24uaWQgPSBcImxvZ2luLWJ1dHRvblwiO1xuICAgIGxvZ2luQnV0dG9uLmNsYXNzTmFtZSA9IFwiaGVhZGVyLWJ1dHRvblwiO1xuICAgIGxvZ2luQnV0dG9uLmlubmVySFRNTCA9IFwiU2lnbiBJblwiO1xuICAgIGhlYWRlckJ1dHRvbnMuYXBwZW5kQ2hpbGQobG9naW5CdXR0b24pO1xuXG4gICAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWVudUltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL21lbnUucG5nXCIpO1xuXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbWVudUJ1dHRvbi5pZCA9IFwibWVudS1idXR0b25cIjtcbiAgICBtZW51QnV0dG9uLmNsYXNzTmFtZSA9IFwiaGVhZGVyLWJ1dHRvblwiO1xuICAgIG1lbnVCdXR0b24uYXBwZW5kQ2hpbGQobWVudUltZyk7XG4gICAgaGVhZGVyQnV0dG9ucy5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJCdXR0b25zKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoKSB7XG4gICAgY29uc3QgbGlzdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpc3RXcmFwcGVyLmlkID0gXCJsaXN0LXdyYXBwZXJcIjtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaXN0LmlkID0gXCJsaXN0XCI7XG4gICAgY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IFwiTElTVFwiO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdFRpdGxlKTtcbiAgICBsaXN0V3JhcHBlci5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQobGlzdFdyYXBwZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICAgIGNvbnN0IGxvZ2luU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dpblNjcmVlbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLXNjcmVlblwiKTtcblxuICAgIGNvbnN0IGxvZ2luUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dpblByb21wdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLXByb21wdFwiKTtcblxuICAgIGNvbnN0IGxvZ2luSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxvZ2luSGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9naW4taGVhZGVyXCIpO1xuICAgIGxvZ2luSGVhZGVyLnRleHRDb250ZW50ID0gXCJTaWduIGluIHRvIERvX0l0XCI7XG4gICAgbG9naW5Qcm9tcHQuYXBwZW5kQ2hpbGQobG9naW5IZWFkZXIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuXG4gICAgY29uc3QgbG9nTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nTmFtZS5jbGFzc05hbWUgPSBcImxvZ2luLWZpZWxkXCI7XG5cbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lOlwiO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb2dpbi1uYW1lXCIpO1xuICAgIGxvZ05hbWUuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcblxuICAgIGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImxvZ2luLW5hbWVcIik7XG4gICAgbG9nTmFtZS5hcHBlbmRDaGlsZChuYW1lRmllbGQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobG9nTmFtZSk7XG5cbiAgICBjb25zdCBsb2dQYXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dQYXNzLmNsYXNzTmFtZSA9IFwibG9naW4tZmllbGRcIjtcblxuICAgIGNvbnN0IHBhc3NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwYXNzTGFiZWwudGV4dENvbnRlbnQgPSBcIlBhc3N3b3JkOlwiO1xuICAgIHBhc3NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb2dpbi1wYXNzXCIpO1xuICAgIGxvZ1Bhc3MuYXBwZW5kQ2hpbGQocGFzc0xhYmVsKTtcblxuICAgIGNvbnN0IHBhc3NGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwYXNzRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImxvZ2luLXBhc3NcIik7XG4gICAgbG9nUGFzcy5hcHBlbmRDaGlsZChwYXNzRmllbGQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobG9nUGFzcyk7XG5cbiAgICBjb25zdCBsb2dpblN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsb2dpblN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLXN1Ym1pdFwiKTtcbiAgICBsb2dpblN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIGxvZ2luU3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTE9HIElOXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobG9naW5TdWJtaXQpO1xuICAgIGxvZ2luUHJvbXB0LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgY3JlYXRlQWNjb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNyZWF0ZUFjY291bnQuaW5uZXJIVE1MID0gXCJOZXcgdXNlcj8gQ3JlYXRlIGFuIGFjY291bnQgaGVyZSFcIjtcbiAgICBsb2dpblByb21wdC5hcHBlbmRDaGlsZChjcmVhdGVBY2NvdW50KTtcblxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjbG9zZS5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICBjbG9zZS5pZCA9IFwiY2xvc2UtbG9naW5cIjtcbiAgICBjbG9zZS5jbGFzc05hbWUgPSBcImJ1dHRvbi1jbG9zZVwiO1xuICAgIGxvZ2luUHJvbXB0LmFwcGVuZENoaWxkKGNsb3NlKTtcblxuICAgIGxvZ2luU2NyZWVuLmFwcGVuZENoaWxkKGxvZ2luUHJvbXB0KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2dpblNjcmVlbik7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1zdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1zY3JlZW5cIikucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbG9naW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1zY3JlZW5cIikucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhci5pZCA9IFwic2lkZWJhclwiO1xuXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGluYm94LmNsYXNzTmFtZSA9IFwic2lkZWJhci1saW5lXCI7XG4gICAgY29uc3QgaW5ib3hQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGluYm94UGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvdGltZWxpbmUucG5nXCIpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGluYm94UGljKTtcbiAgICBjb25zdCBpbmJveFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaW5ib3hUZXh0LnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGluYm94VGV4dCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChpbmJveCk7XG5cbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdG9kYXkuY2xhc3NOYW1lID0gXCJzaWRlYmFyLWxpbmVcIjtcbiAgICBjb25zdCB0b2RheVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdG9kYXlQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy90b2RheS5wbmdcIik7XG4gICAgdG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlQaWMpO1xuICAgIGNvbnN0IHRvZGF5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0b2RheVRleHQudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgdG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlUZXh0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvZGF5KTtcblxuICAgIGNvbnN0IGNhbGVuZGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYWxlbmRhci5jbGFzc05hbWUgPSBcInNpZGViYXItbGluZVwiO1xuICAgIGNvbnN0IGNhbGVuZGFyUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjYWxlbmRhclBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2NhbGVuZGFyLnBuZ1wiKTtcbiAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChjYWxlbmRhclBpYyk7XG4gICAgY29uc3QgY2FsZW5kYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNhbGVuZGFyVGV4dC50ZXh0Q29udGVudCA9IFwiQ2FsZW5kYXJcIjtcbiAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChjYWxlbmRhclRleHQpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHByb2plY3RzLmNsYXNzTmFtZSA9IFwic2lkZWJhci1saW5lXCI7XG4gICAgY29uc3QgcHJvamVjdHNQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHByb2plY3RzUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvY2hldnJvbl9yaWdodC5wbmdcIik7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNQaWMpO1xuICAgIGNvbnN0IHByb2plY3RzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9qZWN0c1RleHQudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNUZXh0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcblxuICAgIGNvbnN0IGFkZFByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFByb2ouY2xhc3NOYW1lID0gXCJzaWRlYmFyLWxpbmVcIjtcbiAgICBjb25zdCBhZGRQcm9qUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBhZGRQcm9qUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvZm9sZGVyLnBuZ1wiKTtcbiAgICBhZGRQcm9qLmFwcGVuZENoaWxkKGFkZFByb2pQaWMpO1xuICAgIGNvbnN0IGFkZFByb2pUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGFkZFByb2pUZXh0LnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuICAgIGFkZFByb2ouYXBwZW5kQ2hpbGQoYWRkUHJvalRleHQpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvaik7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG59IiwidmFyIG51bWVyaWMgPSBmdW5jdGlvbiAodmFsdWUsIHVuaXQpIHsgcmV0dXJuIE51bWJlcih2YWx1ZS5zbGljZSgwLCAtMSAqIHVuaXQubGVuZ3RoKSk7IH07XG5cbnZhciBwYXJzZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlLmVuZHNXaXRoKCdweCcpKVxuICAgICAgICB7IHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgdHlwZTogJ3B4JywgbnVtZXJpYzogbnVtZXJpYyh2YWx1ZSwgJ3B4JykgfSB9XG4gICAgaWYgKHZhbHVlLmVuZHNXaXRoKCdmcicpKVxuICAgICAgICB7IHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgdHlwZTogJ2ZyJywgbnVtZXJpYzogbnVtZXJpYyh2YWx1ZSwgJ2ZyJykgfSB9XG4gICAgaWYgKHZhbHVlLmVuZHNXaXRoKCclJykpXG4gICAgICAgIHsgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCB0eXBlOiAnJScsIG51bWVyaWM6IG51bWVyaWModmFsdWUsICclJykgfSB9XG4gICAgaWYgKHZhbHVlID09PSAnYXV0bycpIHsgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCB0eXBlOiAnYXV0bycgfSB9XG4gICAgcmV0dXJuIG51bGxcbn07XG5cbnZhciBwYXJzZSA9IGZ1bmN0aW9uIChydWxlKSB7IHJldHVybiBydWxlLnNwbGl0KCcgJykubWFwKHBhcnNlVmFsdWUpOyB9O1xuXG52YXIgZ2V0U2l6ZUF0VHJhY2sgPSBmdW5jdGlvbiAoaW5kZXgsIHRyYWNrcywgZ2FwLCBlbmQpIHtcbiAgICBpZiAoIGdhcCA9PT0gdm9pZCAwICkgeyBnYXAgPSAwOyB9XG4gICAgaWYgKCBlbmQgPT09IHZvaWQgMCApIHsgZW5kID0gZmFsc2U7IH1cblxuICAgIHZhciBuZXdJbmRleCA9IGVuZCA/IGluZGV4ICsgMSA6IGluZGV4O1xuICAgIHZhciB0cmFja1N1bSA9IHRyYWNrc1xuICAgICAgICAuc2xpY2UoMCwgbmV3SW5kZXgpXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtLCB2YWx1ZSkgeyByZXR1cm4gYWNjdW0gKyB2YWx1ZS5udW1lcmljOyB9LCAwKTtcbiAgICB2YXIgZ2FwU3VtID0gZ2FwID8gaW5kZXggKiBnYXAgOiAwO1xuXG4gICAgcmV0dXJuIHRyYWNrU3VtICsgZ2FwU3VtXG59O1xuXG52YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gKHJ1bGUsIG93blJ1bGVzLCBtYXRjaGVkUnVsZXMpIHsgcmV0dXJuIG93blJ1bGVzLmNvbmNhdCggbWF0Y2hlZFJ1bGVzKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLnN0eWxlW3J1bGVdOyB9KVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzdHlsZSkgeyByZXR1cm4gc3R5bGUgIT09IHVuZGVmaW5lZCAmJiBzdHlsZSAhPT0gJyc7IH0pOyB9O1xuXG52YXIgZ2V0R2FwVmFsdWUgPSBmdW5jdGlvbiAodW5pdCwgc2l6ZSkge1xuICAgIGlmIChzaXplLmVuZHNXaXRoKHVuaXQpKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIoc2l6ZS5zbGljZSgwLCAtMSAqIHVuaXQubGVuZ3RoKSlcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbn07XG5cbnZhciBmaXJzdE5vblplcm8gPSBmdW5jdGlvbiAodHJhY2tzKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRyYWNrc1tpXS5udW1lcmljID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxufTtcblxudmFyIE5PT1AgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfTtcblxudmFyIGRlZmF1bHRXcml0ZVN0eWxlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGdyaWRUZW1wbGF0ZVByb3AsIHN0eWxlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZWxlbWVudC5zdHlsZVtncmlkVGVtcGxhdGVQcm9wXSA9IHN0eWxlO1xufTtcblxudmFyIGdldE9wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zLCBwcm9wTmFtZSwgZGVmKSB7XG4gICAgdmFyIHZhbHVlID0gb3B0aW9uc1twcm9wTmFtZV07XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuICAgIHJldHVybiBkZWZcbn07XG5cbmZ1bmN0aW9uIGdldE1hdGNoZWRDU1NSdWxlcyAoZWwpIHtcbiAgICAgICAgdmFyIHJlZjtcblxuICAgICAgICByZXR1cm4gKHJlZiA9IFtdKVxuICAgICAgICAuY29uY2F0LmFwcGx5KFxuICAgICAgICAgICAgcmVmLCBBcnJheS5mcm9tKGVsLm93bmVyRG9jdW1lbnQuc3R5bGVTaGVldHMpLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIHZhciBydWxlcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVsZXMgPSBBcnJheS5mcm9tKHMuY3NzUnVsZXMgfHwgW10pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIHJlc3VsdHMgb24gc2VjdXJpdHkgZXJyb3JcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9IGVsLm1hdGNoZXMoci5zZWxlY3RvclRleHQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIElnbm9yZSBtYXRjaGluZyBlcnJvc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1xuICAgICAgICB9KTtcbn1cblxudmFyIGdyaWRUZW1wbGF0ZVByb3BDb2x1bW5zID0gJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyc7XG52YXIgZ3JpZFRlbXBsYXRlUHJvcFJvd3MgPSAnZ3JpZC10ZW1wbGF0ZS1yb3dzJztcblxudmFyIEd1dHRlciA9IGZ1bmN0aW9uIEd1dHRlcihkaXJlY3Rpb24sIG9wdGlvbnMsIHBhcmVudE9wdGlvbnMpIHtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB0aGlzLmVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG4gICAgdGhpcy50cmFjayA9IG9wdGlvbnMudHJhY2s7XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnY29sdW1uJykge1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVByb3AgPSBncmlkVGVtcGxhdGVQcm9wQ29sdW1ucztcbiAgICAgICAgdGhpcy5ncmlkR2FwUHJvcCA9ICdncmlkLWNvbHVtbi1nYXAnO1xuICAgICAgICB0aGlzLmN1cnNvciA9IGdldE9wdGlvbihcbiAgICAgICAgICAgIHBhcmVudE9wdGlvbnMsXG4gICAgICAgICAgICAnY29sdW1uQ3Vyc29yJyxcbiAgICAgICAgICAgIGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnY3Vyc29yJywgJ2NvbC1yZXNpemUnKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNuYXBPZmZzZXQgPSBnZXRPcHRpb24oXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAgICAgJ2NvbHVtblNuYXBPZmZzZXQnLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdzbmFwT2Zmc2V0JywgMzApXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZHJhZ0ludGVydmFsID0gZ2V0T3B0aW9uKFxuICAgICAgICAgICAgcGFyZW50T3B0aW9ucyxcbiAgICAgICAgICAgICdjb2x1bW5EcmFnSW50ZXJ2YWwnLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdkcmFnSW50ZXJ2YWwnLCAxKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNsaWVudEF4aXMgPSAnY2xpZW50WCc7XG4gICAgICAgIHRoaXMub3B0aW9uU3R5bGUgPSBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ2dyaWRUZW1wbGF0ZUNvbHVtbnMnKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3JvdycpIHtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVQcm9wID0gZ3JpZFRlbXBsYXRlUHJvcFJvd3M7XG4gICAgICAgIHRoaXMuZ3JpZEdhcFByb3AgPSAnZ3JpZC1yb3ctZ2FwJztcbiAgICAgICAgdGhpcy5jdXJzb3IgPSBnZXRPcHRpb24oXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAgICAgJ3Jvd0N1cnNvcicsXG4gICAgICAgICAgICBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ2N1cnNvcicsICdyb3ctcmVzaXplJylcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zbmFwT2Zmc2V0ID0gZ2V0T3B0aW9uKFxuICAgICAgICAgICAgcGFyZW50T3B0aW9ucyxcbiAgICAgICAgICAgICdyb3dTbmFwT2Zmc2V0JyxcbiAgICAgICAgICAgIGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnc25hcE9mZnNldCcsIDMwKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmRyYWdJbnRlcnZhbCA9IGdldE9wdGlvbihcbiAgICAgICAgICAgIHBhcmVudE9wdGlvbnMsXG4gICAgICAgICAgICAncm93RHJhZ0ludGVydmFsJyxcbiAgICAgICAgICAgIGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnZHJhZ0ludGVydmFsJywgMSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jbGllbnRBeGlzID0gJ2NsaWVudFknO1xuICAgICAgICB0aGlzLm9wdGlvblN0eWxlID0gZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdncmlkVGVtcGxhdGVSb3dzJyk7XG4gICAgfVxuXG4gICAgdGhpcy5vbkRyYWdTdGFydCA9IGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnb25EcmFnU3RhcnQnLCBOT09QKTtcbiAgICB0aGlzLm9uRHJhZ0VuZCA9IGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnb25EcmFnRW5kJywgTk9PUCk7XG4gICAgdGhpcy5vbkRyYWcgPSBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ29uRHJhZycsIE5PT1ApO1xuICAgIHRoaXMud3JpdGVTdHlsZSA9IGdldE9wdGlvbihcbiAgICAgICAgcGFyZW50T3B0aW9ucyxcbiAgICAgICAgJ3dyaXRlU3R5bGUnLFxuICAgICAgICBkZWZhdWx0V3JpdGVTdHlsZVxuICAgICk7XG5cbiAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcgPSB0aGlzLnN0YXJ0RHJhZ2dpbmcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0b3BEcmFnZ2luZyA9IHRoaXMuc3RvcERyYWdnaW5nLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmFnID0gdGhpcy5kcmFnLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm1pblNpemVTdGFydCA9IG9wdGlvbnMubWluU2l6ZVN0YXJ0O1xuICAgIHRoaXMubWluU2l6ZUVuZCA9IG9wdGlvbnMubWluU2l6ZUVuZDtcblxuICAgIGlmIChvcHRpb25zLmVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc3RhcnREcmFnZ2luZyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5zdGFydERyYWdnaW5nKTtcbiAgICB9XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldERpbWVuc2lvbnMgPSBmdW5jdGlvbiBnZXREaW1lbnNpb25zICgpIHtcbiAgICB2YXIgcmVmID0gdGhpcy5ncmlkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgd2lkdGggPSByZWYud2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSByZWYuaGVpZ2h0O1xuICAgICAgICB2YXIgdG9wID0gcmVmLnRvcDtcbiAgICAgICAgdmFyIGJvdHRvbSA9IHJlZi5ib3R0b207XG4gICAgICAgIHZhciBsZWZ0ID0gcmVmLmxlZnQ7XG4gICAgICAgIHZhciByaWdodCA9IHJlZi5yaWdodDtcblxuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgdGhpcy5zdGFydCA9IHRvcDtcbiAgICAgICAgdGhpcy5lbmQgPSBib3R0b207XG4gICAgICAgIHRoaXMuc2l6ZSA9IGhlaWdodDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAncm93Jykge1xuICAgICAgICB0aGlzLnN0YXJ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5lbmQgPSByaWdodDtcbiAgICAgICAgdGhpcy5zaXplID0gd2lkdGg7XG4gICAgfVxufTtcblxuR3V0dGVyLnByb3RvdHlwZS5nZXRTaXplQXRUcmFjayA9IGZ1bmN0aW9uIGdldFNpemVBdFRyYWNrJDEgKHRyYWNrLCBlbmQpIHtcbiAgICByZXR1cm4gZ2V0U2l6ZUF0VHJhY2soXG4gICAgICAgIHRyYWNrLFxuICAgICAgICB0aGlzLmNvbXB1dGVkUGl4ZWxzLFxuICAgICAgICB0aGlzLmNvbXB1dGVkR2FwUGl4ZWxzLFxuICAgICAgICBlbmRcbiAgICApXG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldFNpemVPZlRyYWNrID0gZnVuY3Rpb24gZ2V0U2l6ZU9mVHJhY2sgKHRyYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcHV0ZWRQaXhlbHNbdHJhY2tdLm51bWVyaWNcbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0UmF3VHJhY2tzID0gZnVuY3Rpb24gZ2V0UmF3VHJhY2tzICgpIHtcbiAgICB2YXIgdHJhY2tzID0gZ2V0U3R5bGVzKFxuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVByb3AsXG4gICAgICAgIFt0aGlzLmdyaWRdLFxuICAgICAgICBnZXRNYXRjaGVkQ1NTUnVsZXModGhpcy5ncmlkKVxuICAgICk7XG4gICAgaWYgKCF0cmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvblN0eWxlKSB7IHJldHVybiB0aGlzLm9wdGlvblN0eWxlIH1cblxuICAgICAgICB0aHJvdyBFcnJvcignVW5hYmxlIHRvIGRldGVybWluZSBncmlkIHRlbXBsYXRlIHRyYWNrcyBmcm9tIHN0eWxlcy4nKVxuICAgIH1cbiAgICByZXR1cm4gdHJhY2tzWzBdXG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldEdhcCA9IGZ1bmN0aW9uIGdldEdhcCAoKSB7XG4gICAgdmFyIGdhcCA9IGdldFN0eWxlcyhcbiAgICAgICAgdGhpcy5ncmlkR2FwUHJvcCxcbiAgICAgICAgW3RoaXMuZ3JpZF0sXG4gICAgICAgIGdldE1hdGNoZWRDU1NSdWxlcyh0aGlzLmdyaWQpXG4gICAgKTtcbiAgICBpZiAoIWdhcC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIGdhcFswXVxufTtcblxuR3V0dGVyLnByb3RvdHlwZS5nZXRSYXdDb21wdXRlZFRyYWNrcyA9IGZ1bmN0aW9uIGdldFJhd0NvbXB1dGVkVHJhY2tzICgpIHtcbiAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5ncmlkKVt0aGlzLmdyaWRUZW1wbGF0ZVByb3BdXG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldFJhd0NvbXB1dGVkR2FwID0gZnVuY3Rpb24gZ2V0UmF3Q29tcHV0ZWRHYXAgKCkge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdyaWQpW3RoaXMuZ3JpZEdhcFByb3BdXG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLnNldFRyYWNrcyA9IGZ1bmN0aW9uIHNldFRyYWNrcyAocmF3KSB7XG4gICAgdGhpcy50cmFja3MgPSByYXcuc3BsaXQoJyAnKTtcbiAgICB0aGlzLnRyYWNrVmFsdWVzID0gcGFyc2UocmF3KTtcbn07XG5cbkd1dHRlci5wcm90b3R5cGUuc2V0Q29tcHV0ZWRUcmFja3MgPSBmdW5jdGlvbiBzZXRDb21wdXRlZFRyYWNrcyAocmF3KSB7XG4gICAgdGhpcy5jb21wdXRlZFRyYWNrcyA9IHJhdy5zcGxpdCgnICcpO1xuICAgIHRoaXMuY29tcHV0ZWRQaXhlbHMgPSBwYXJzZShyYXcpO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zZXRHYXAgPSBmdW5jdGlvbiBzZXRHYXAgKHJhdykge1xuICAgIHRoaXMuZ2FwID0gcmF3O1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zZXRDb21wdXRlZEdhcCA9IGZ1bmN0aW9uIHNldENvbXB1dGVkR2FwIChyYXcpIHtcbiAgICB0aGlzLmNvbXB1dGVkR2FwID0gcmF3O1xuICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHMgPSBnZXRHYXBWYWx1ZSgncHgnLCB0aGlzLmNvbXB1dGVkR2FwKSB8fCAwO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5nZXRNb3VzZVBvc2l0aW9uID0gZnVuY3Rpb24gZ2V0TW91c2VQb3NpdGlvbiAoZSkge1xuICAgIGlmICgndG91Y2hlcycgaW4gZSkgeyByZXR1cm4gZS50b3VjaGVzWzBdW3RoaXMuY2xpZW50QXhpc10gfVxuICAgIHJldHVybiBlW3RoaXMuY2xpZW50QXhpc11cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuc3RhcnREcmFnZ2luZyA9IGZ1bmN0aW9uIHN0YXJ0RHJhZ2dpbmcgKGUpIHtcbiAgICBpZiAoJ2J1dHRvbicgaW4gZSAmJiBlLmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBEb24ndCBhY3R1YWxseSBkcmFnIHRoZSBlbGVtZW50LiBXZSBlbXVsYXRlIHRoYXQgaW4gdGhlIGRyYWcgZnVuY3Rpb24uXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICB0aGlzLmdyaWQgPSB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdyaWQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0RGltZW5zaW9ucygpO1xuICAgIHRoaXMuc2V0VHJhY2tzKHRoaXMuZ2V0UmF3VHJhY2tzKCkpO1xuICAgIHRoaXMuc2V0Q29tcHV0ZWRUcmFja3ModGhpcy5nZXRSYXdDb21wdXRlZFRyYWNrcygpKTtcbiAgICB0aGlzLnNldEdhcCh0aGlzLmdldEdhcCgpKTtcbiAgICB0aGlzLnNldENvbXB1dGVkR2FwKHRoaXMuZ2V0UmF3Q29tcHV0ZWRHYXAoKSk7XG5cbiAgICB2YXIgdHJhY2tQZXJjZW50YWdlID0gdGhpcy50cmFja1ZhbHVlcy5maWx0ZXIoXG4gICAgICAgIGZ1bmN0aW9uICh0cmFjaykgeyByZXR1cm4gdHJhY2sudHlwZSA9PT0gJyUnOyB9XG4gICAgKTtcbiAgICB2YXIgdHJhY2tGciA9IHRoaXMudHJhY2tWYWx1ZXMuZmlsdGVyKGZ1bmN0aW9uICh0cmFjaykgeyByZXR1cm4gdHJhY2sudHlwZSA9PT0gJ2ZyJzsgfSk7XG5cbiAgICB0aGlzLnRvdGFsRnJzID0gdHJhY2tGci5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy50b3RhbEZycykge1xuICAgICAgICB2YXIgdHJhY2sgPSBmaXJzdE5vblplcm8odHJhY2tGcik7XG5cbiAgICAgICAgaWYgKHRyYWNrICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZyVG9QaXhlbHMgPVxuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZWRQaXhlbHNbdHJhY2tdLm51bWVyaWMgLyB0cmFja0ZyW3RyYWNrXS5udW1lcmljO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYWNrUGVyY2VudGFnZS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHRyYWNrJDEgPSBmaXJzdE5vblplcm8odHJhY2tQZXJjZW50YWdlKTtcblxuICAgICAgICBpZiAodHJhY2skMSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wZXJjZW50YWdlVG9QaXhlbHMgPVxuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZWRQaXhlbHNbdHJhY2skMV0ubnVtZXJpYyAvXG4gICAgICAgICAgICAgICAgdHJhY2tQZXJjZW50YWdlW3RyYWNrJDFdLm51bWVyaWM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXQgc3RhcnQgb2YgZ3V0dGVyIHRyYWNrXG4gICAgdmFyIGd1dHRlclN0YXJ0ID0gdGhpcy5nZXRTaXplQXRUcmFjayh0aGlzLnRyYWNrLCBmYWxzZSkgKyB0aGlzLnN0YXJ0O1xuICAgIHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0ID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKGUpIC0gZ3V0dGVyU3RhcnQ7XG5cbiAgICB0aGlzLmFUcmFjayA9IHRoaXMudHJhY2sgLSAxO1xuXG4gICAgaWYgKHRoaXMudHJhY2sgPCB0aGlzLnRyYWNrcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMuYlRyYWNrID0gdGhpcy50cmFjayArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICAoXCJJbnZhbGlkIHRyYWNrIGluZGV4OiBcIiArICh0aGlzLnRyYWNrKSArIFwiLiBUcmFjayBtdXN0IGJlIGJldHdlZW4gdHdvIG90aGVyIHRyYWNrcyBhbmQgb25seSBcIiArICh0aGlzLnRyYWNrcy5sZW5ndGgpICsgXCIgdHJhY2tzIHdlcmUgZm91bmQuXCIpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICB0aGlzLmFUcmFja1N0YXJ0ID0gdGhpcy5nZXRTaXplQXRUcmFjayh0aGlzLmFUcmFjaywgZmFsc2UpICsgdGhpcy5zdGFydDtcbiAgICB0aGlzLmJUcmFja0VuZCA9IHRoaXMuZ2V0U2l6ZUF0VHJhY2sodGhpcy5iVHJhY2ssIHRydWUpICsgdGhpcy5zdGFydDtcblxuICAgIC8vIFNldCB0aGUgZHJhZ2dpbmcgcHJvcGVydHkgb2YgdGhlIHBhaXIgb2JqZWN0LlxuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgLy8gQWxsIHRoZSBiaW5kaW5nLiBgd2luZG93YCBnZXRzIHRoZSBzdG9wIGV2ZW50cyBpbiBjYXNlIHdlIGRyYWcgb3V0IG9mIHRoZSBlbGVtZW50cy5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWcpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWcpO1xuXG4gICAgLy8gRGlzYWJsZSBzZWxlY3Rpb24uIERpc2FibGUhXG4gICAgdGhpcy5ncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdHN0YXJ0JywgTk9PUCk7XG4gICAgdGhpcy5ncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIE5PT1ApO1xuXG4gICAgdGhpcy5ncmlkLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgdGhpcy5ncmlkLnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgdGhpcy5ncmlkLnN0eWxlLk1velVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgdGhpcy5ncmlkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICAvLyBTZXQgdGhlIGN1cnNvciBhdCBtdWx0aXBsZSBsZXZlbHNcbiAgICB0aGlzLmdyaWQuc3R5bGUuY3Vyc29yID0gdGhpcy5jdXJzb3I7XG4gICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gdGhpcy5jdXJzb3I7XG5cbiAgICB0aGlzLm9uRHJhZ1N0YXJ0KHRoaXMuZGlyZWN0aW9uLCB0aGlzLnRyYWNrKTtcbn07XG5cbkd1dHRlci5wcm90b3R5cGUuc3RvcERyYWdnaW5nID0gZnVuY3Rpb24gc3RvcERyYWdnaW5nICgpIHtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cbiAgICAvLyBSZW1vdmUgdGhlIHN0b3JlZCBldmVudCBsaXN0ZW5lcnMuIFRoaXMgaXMgd2h5IHdlIHN0b3JlIHRoZW0uXG4gICAgdGhpcy5jbGVhbnVwKCk7XG5cbiAgICB0aGlzLm9uRHJhZ0VuZCh0aGlzLmRpcmVjdGlvbiwgdGhpcy50cmFjayk7XG5cbiAgICBpZiAodGhpcy5uZWVkc0Rlc3Ryb3kpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgJ21vdXNlZG93bicsXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3Ryb3lDYigpO1xuICAgICAgICB0aGlzLm5lZWRzRGVzdHJveSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlc3Ryb3lDYiA9IG51bGw7XG4gICAgfVxufTtcblxuR3V0dGVyLnByb3RvdHlwZS5kcmFnID0gZnVuY3Rpb24gZHJhZyAoZSkge1xuICAgIHZhciBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKGUpO1xuXG4gICAgdmFyIGd1dHRlclNpemUgPSB0aGlzLmdldFNpemVPZlRyYWNrKHRoaXMudHJhY2spO1xuICAgIHZhciBtaW5Nb3VzZVBvc2l0aW9uID1cbiAgICAgICAgdGhpcy5hVHJhY2tTdGFydCArXG4gICAgICAgIHRoaXMubWluU2l6ZVN0YXJ0ICtcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRPZmZzZXQgK1xuICAgICAgICB0aGlzLmNvbXB1dGVkR2FwUGl4ZWxzO1xuICAgIHZhciBtYXhNb3VzZVBvc2l0aW9uID1cbiAgICAgICAgdGhpcy5iVHJhY2tFbmQgLVxuICAgICAgICB0aGlzLm1pblNpemVFbmQgLVxuICAgICAgICB0aGlzLmNvbXB1dGVkR2FwUGl4ZWxzIC1cbiAgICAgICAgKGd1dHRlclNpemUgLSB0aGlzLmRyYWdTdGFydE9mZnNldCk7XG4gICAgdmFyIG1pbk1vdXNlUG9zaXRpb25PZmZzZXQgPSBtaW5Nb3VzZVBvc2l0aW9uICsgdGhpcy5zbmFwT2Zmc2V0O1xuICAgIHZhciBtYXhNb3VzZVBvc2l0aW9uT2Zmc2V0ID0gbWF4TW91c2VQb3NpdGlvbiAtIHRoaXMuc25hcE9mZnNldDtcblxuICAgIGlmIChtb3VzZVBvc2l0aW9uIDwgbWluTW91c2VQb3NpdGlvbk9mZnNldCkge1xuICAgICAgICBtb3VzZVBvc2l0aW9uID0gbWluTW91c2VQb3NpdGlvbjtcbiAgICB9XG5cbiAgICBpZiAobW91c2VQb3NpdGlvbiA+IG1heE1vdXNlUG9zaXRpb25PZmZzZXQpIHtcbiAgICAgICAgbW91c2VQb3NpdGlvbiA9IG1heE1vdXNlUG9zaXRpb247XG4gICAgfVxuXG4gICAgaWYgKG1vdXNlUG9zaXRpb24gPCBtaW5Nb3VzZVBvc2l0aW9uKSB7XG4gICAgICAgIG1vdXNlUG9zaXRpb24gPSBtaW5Nb3VzZVBvc2l0aW9uO1xuICAgIH0gZWxzZSBpZiAobW91c2VQb3NpdGlvbiA+IG1heE1vdXNlUG9zaXRpb24pIHtcbiAgICAgICAgbW91c2VQb3NpdGlvbiA9IG1heE1vdXNlUG9zaXRpb247XG4gICAgfVxuXG4gICAgdmFyIGFUcmFja1NpemUgPVxuICAgICAgICBtb3VzZVBvc2l0aW9uIC1cbiAgICAgICAgdGhpcy5hVHJhY2tTdGFydCAtXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0IC1cbiAgICAgICAgdGhpcy5jb21wdXRlZEdhcFBpeGVscztcbiAgICB2YXIgYlRyYWNrU2l6ZSA9XG4gICAgICAgIHRoaXMuYlRyYWNrRW5kIC1cbiAgICAgICAgbW91c2VQb3NpdGlvbiArXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0IC1cbiAgICAgICAgZ3V0dGVyU2l6ZSAtXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHM7XG5cbiAgICBpZiAodGhpcy5kcmFnSW50ZXJ2YWwgPiAxKSB7XG4gICAgICAgIHZhciBhVHJhY2tTaXplSW50ZXJ2YWxlZCA9XG4gICAgICAgICAgICBNYXRoLnJvdW5kKGFUcmFja1NpemUgLyB0aGlzLmRyYWdJbnRlcnZhbCkgKiB0aGlzLmRyYWdJbnRlcnZhbDtcbiAgICAgICAgYlRyYWNrU2l6ZSAtPSBhVHJhY2tTaXplSW50ZXJ2YWxlZCAtIGFUcmFja1NpemU7XG4gICAgICAgIGFUcmFja1NpemUgPSBhVHJhY2tTaXplSW50ZXJ2YWxlZDtcbiAgICB9XG5cbiAgICBpZiAoYVRyYWNrU2l6ZSA8IHRoaXMubWluU2l6ZVN0YXJ0KSB7XG4gICAgICAgIGFUcmFja1NpemUgPSB0aGlzLm1pblNpemVTdGFydDtcbiAgICB9XG5cbiAgICBpZiAoYlRyYWNrU2l6ZSA8IHRoaXMubWluU2l6ZUVuZCkge1xuICAgICAgICBiVHJhY2tTaXplID0gdGhpcy5taW5TaXplRW5kO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRyYWNrVmFsdWVzW3RoaXMuYVRyYWNrXS50eXBlID09PSAncHgnKSB7XG4gICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYVRyYWNrXSA9IGFUcmFja1NpemUgKyBcInB4XCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRyYWNrVmFsdWVzW3RoaXMuYVRyYWNrXS50eXBlID09PSAnZnInKSB7XG4gICAgICAgIGlmICh0aGlzLnRvdGFsRnJzID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrc1t0aGlzLmFUcmFja10gPSAnMWZyJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRGciA9IGFUcmFja1NpemUgLyB0aGlzLmZyVG9QaXhlbHM7XG4gICAgICAgICAgICB0aGlzLnRyYWNrc1t0aGlzLmFUcmFja10gPSB0YXJnZXRGciArIFwiZnJcIjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50cmFja1ZhbHVlc1t0aGlzLmFUcmFja10udHlwZSA9PT0gJyUnKSB7XG4gICAgICAgIHZhciB0YXJnZXRQZXJjZW50YWdlID0gYVRyYWNrU2l6ZSAvIHRoaXMucGVyY2VudGFnZVRvUGl4ZWxzO1xuICAgICAgICB0aGlzLnRyYWNrc1t0aGlzLmFUcmFja10gPSB0YXJnZXRQZXJjZW50YWdlICsgXCIlXCI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHJhY2tWYWx1ZXNbdGhpcy5iVHJhY2tdLnR5cGUgPT09ICdweCcpIHtcbiAgICAgICAgdGhpcy50cmFja3NbdGhpcy5iVHJhY2tdID0gYlRyYWNrU2l6ZSArIFwicHhcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMudHJhY2tWYWx1ZXNbdGhpcy5iVHJhY2tdLnR5cGUgPT09ICdmcicpIHtcbiAgICAgICAgaWYgKHRoaXMudG90YWxGcnMgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYlRyYWNrXSA9ICcxZnInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhcmdldEZyJDEgPSBiVHJhY2tTaXplIC8gdGhpcy5mclRvUGl4ZWxzO1xuICAgICAgICAgICAgdGhpcy50cmFja3NbdGhpcy5iVHJhY2tdID0gdGFyZ2V0RnIkMSArIFwiZnJcIjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50cmFja1ZhbHVlc1t0aGlzLmJUcmFja10udHlwZSA9PT0gJyUnKSB7XG4gICAgICAgIHZhciB0YXJnZXRQZXJjZW50YWdlJDEgPSBiVHJhY2tTaXplIC8gdGhpcy5wZXJjZW50YWdlVG9QaXhlbHM7XG4gICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYlRyYWNrXSA9IHRhcmdldFBlcmNlbnRhZ2UkMSArIFwiJVwiO1xuICAgIH1cblxuICAgIHZhciBzdHlsZSA9IHRoaXMudHJhY2tzLmpvaW4oJyAnKTtcbiAgICB0aGlzLndyaXRlU3R5bGUodGhpcy5ncmlkLCB0aGlzLmdyaWRUZW1wbGF0ZVByb3AsIHN0eWxlKTtcbiAgICB0aGlzLm9uRHJhZyh0aGlzLmRpcmVjdGlvbiwgdGhpcy50cmFjaywgc3R5bGUpO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5kcmFnKTtcblxuICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgdGhpcy5ncmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdHN0YXJ0JywgTk9PUCk7XG4gICAgICAgIHRoaXMuZ3JpZC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBOT09QKTtcblxuICAgICAgICB0aGlzLmdyaWQuc3R5bGUudXNlclNlbGVjdCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWQuc3R5bGUuTW96VXNlclNlbGVjdCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnO1xuXG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS5jdXJzb3IgPSAnJztcbiAgICB9XG5cbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnJztcbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKGltbWVkaWF0ZSwgY2IpIHtcbiAgICAgICAgaWYgKCBpbW1lZGlhdGUgPT09IHZvaWQgMCApIGltbWVkaWF0ZSA9IHRydWU7XG5cbiAgICBpZiAoaW1tZWRpYXRlIHx8IHRoaXMuZHJhZ2dpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAnbW91c2Vkb3duJyxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAndG91Y2hzdGFydCcsXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uZWVkc0Rlc3Ryb3kgPSB0cnVlO1xuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveUNiID0gY2I7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgZ2V0VHJhY2tPcHRpb24gPSBmdW5jdGlvbiAob3B0aW9ucywgdHJhY2ssIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmICh0cmFjayBpbiBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zW3RyYWNrXVxuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0VmFsdWVcbn07XG5cbnZhciBjcmVhdGVHdXR0ZXIgPSBmdW5jdGlvbiAoZGlyZWN0aW9uLCBvcHRpb25zKSB7IHJldHVybiBmdW5jdGlvbiAoZ3V0dGVyT3B0aW9ucykge1xuICAgIGlmIChndXR0ZXJPcHRpb25zLnRyYWNrIDwgMSkge1xuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAgIChcIkludmFsaWQgdHJhY2sgaW5kZXg6IFwiICsgKGd1dHRlck9wdGlvbnMudHJhY2spICsgXCIuIFRyYWNrIG11c3QgYmUgYmV0d2VlbiB0d28gb3RoZXIgdHJhY2tzLlwiKVxuICAgICAgICApXG4gICAgfVxuXG4gICAgdmFyIHRyYWNrTWluU2l6ZXMgPVxuICAgICAgICBkaXJlY3Rpb24gPT09ICdjb2x1bW4nXG4gICAgICAgICAgICA/IG9wdGlvbnMuY29sdW1uTWluU2l6ZXMgfHwge31cbiAgICAgICAgICAgIDogb3B0aW9ucy5yb3dNaW5TaXplcyB8fCB7fTtcbiAgICB2YXIgdHJhY2tNaW5TaXplID0gZGlyZWN0aW9uID09PSAnY29sdW1uJyA/ICdjb2x1bW5NaW5TaXplJyA6ICdyb3dNaW5TaXplJztcblxuICAgIHJldHVybiBuZXcgR3V0dGVyKFxuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHttaW5TaXplU3RhcnQ6IGdldFRyYWNrT3B0aW9uKFxuICAgICAgICAgICAgICAgIHRyYWNrTWluU2l6ZXMsXG4gICAgICAgICAgICAgICAgZ3V0dGVyT3B0aW9ucy50cmFjayAtIDEsXG4gICAgICAgICAgICAgICAgZ2V0T3B0aW9uKFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICB0cmFja01pblNpemUsXG4gICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbihvcHRpb25zLCAnbWluU2l6ZScsIDApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1pblNpemVFbmQ6IGdldFRyYWNrT3B0aW9uKFxuICAgICAgICAgICAgICAgIHRyYWNrTWluU2l6ZXMsXG4gICAgICAgICAgICAgICAgZ3V0dGVyT3B0aW9ucy50cmFjayArIDEsXG4gICAgICAgICAgICAgICAgZ2V0T3B0aW9uKFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICB0cmFja01pblNpemUsXG4gICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbihvcHRpb25zLCAnbWluU2l6ZScsIDApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX0sXG4gICAgICAgICAgICBndXR0ZXJPcHRpb25zKSxcbiAgICAgICAgb3B0aW9uc1xuICAgIClcbn07IH07XG5cbnZhciBHcmlkID0gZnVuY3Rpb24gR3JpZChvcHRpb25zKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLmNvbHVtbkd1dHRlcnMgPSB7fTtcbiAgICB0aGlzLnJvd0d1dHRlcnMgPSB7fTtcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHtjb2x1bW5HdXR0ZXJzOiBvcHRpb25zLmNvbHVtbkd1dHRlcnMgfHwgW10sXG4gICAgICAgIHJvd0d1dHRlcnM6IG9wdGlvbnMucm93R3V0dGVycyB8fCBbXSxcbiAgICAgICAgY29sdW1uTWluU2l6ZXM6IG9wdGlvbnMuY29sdW1uTWluU2l6ZXMgfHwge30sXG4gICAgICAgIHJvd01pblNpemVzOiBvcHRpb25zLnJvd01pblNpemVzIHx8IHt9fSxcbiAgICAgICAgb3B0aW9ucyk7XG5cbiAgICB0aGlzLm9wdGlvbnMuY29sdW1uR3V0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChndXR0ZXJPcHRpb25zKSB7XG4gICAgICAgIHRoaXMkMS5jb2x1bW5HdXR0ZXJzW2d1dHRlck9wdGlvbnMudHJhY2tdID0gY3JlYXRlR3V0dGVyKFxuICAgICAgICAgICAgJ2NvbHVtbicsXG4gICAgICAgICAgICB0aGlzJDEub3B0aW9uc1xuICAgICAgICApKGd1dHRlck9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vcHRpb25zLnJvd0d1dHRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZ3V0dGVyT3B0aW9ucykge1xuICAgICAgICB0aGlzJDEucm93R3V0dGVyc1tndXR0ZXJPcHRpb25zLnRyYWNrXSA9IGNyZWF0ZUd1dHRlcihcbiAgICAgICAgICAgICdyb3cnLFxuICAgICAgICAgICAgdGhpcyQxLm9wdGlvbnNcbiAgICAgICAgKShndXR0ZXJPcHRpb25zKTtcbiAgICB9KTtcbn07XG5cbkdyaWQucHJvdG90eXBlLmFkZENvbHVtbkd1dHRlciA9IGZ1bmN0aW9uIGFkZENvbHVtbkd1dHRlciAoZWxlbWVudCwgdHJhY2spIHtcbiAgICBpZiAodGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXSkge1xuICAgICAgICB0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdID0gY3JlYXRlR3V0dGVyKFxuICAgICAgICAnY29sdW1uJyxcbiAgICAgICAgdGhpcy5vcHRpb25zXG4gICAgKSh7XG4gICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICB9KTtcbn07XG5cbkdyaWQucHJvdG90eXBlLmFkZFJvd0d1dHRlciA9IGZ1bmN0aW9uIGFkZFJvd0d1dHRlciAoZWxlbWVudCwgdHJhY2spIHtcbiAgICBpZiAodGhpcy5yb3dHdXR0ZXJzW3RyYWNrXSkge1xuICAgICAgICB0aGlzLnJvd0d1dHRlcnNbdHJhY2tdLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvd0d1dHRlcnNbdHJhY2tdID0gY3JlYXRlR3V0dGVyKFxuICAgICAgICAncm93JyxcbiAgICAgICAgdGhpcy5vcHRpb25zXG4gICAgKSh7XG4gICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICB9KTtcbn07XG5cbkdyaWQucHJvdG90eXBlLnJlbW92ZUNvbHVtbkd1dHRlciA9IGZ1bmN0aW9uIHJlbW92ZUNvbHVtbkd1dHRlciAodHJhY2ssIGltbWVkaWF0ZSkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICAgICAgaWYgKCBpbW1lZGlhdGUgPT09IHZvaWQgMCApIGltbWVkaWF0ZSA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXSkge1xuICAgICAgICB0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdLmRlc3Ryb3koaW1tZWRpYXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcyQxLmNvbHVtbkd1dHRlcnNbdHJhY2tdO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5HcmlkLnByb3RvdHlwZS5yZW1vdmVSb3dHdXR0ZXIgPSBmdW5jdGlvbiByZW1vdmVSb3dHdXR0ZXIgKHRyYWNrLCBpbW1lZGlhdGUpIHtcbiAgICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgICAgIGlmICggaW1tZWRpYXRlID09PSB2b2lkIDAgKSBpbW1lZGlhdGUgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucm93R3V0dGVyc1t0cmFja10pIHtcbiAgICAgICAgdGhpcy5yb3dHdXR0ZXJzW3RyYWNrXS5kZXN0cm95KGltbWVkaWF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMkMS5yb3dHdXR0ZXJzW3RyYWNrXTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuR3JpZC5wcm90b3R5cGUuaGFuZGxlRHJhZ1N0YXJ0ID0gZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0IChlLCBkaXJlY3Rpb24sIHRyYWNrKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10pIHtcbiAgICAgICAgICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10uZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXSA9IGNyZWF0ZUd1dHRlcihcbiAgICAgICAgICAgICdjb2x1bW4nLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zXG4gICAgICAgICkoe1xuICAgICAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXS5zdGFydERyYWdnaW5nKGUpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncm93Jykge1xuICAgICAgICBpZiAodGhpcy5yb3dHdXR0ZXJzW3RyYWNrXSkge1xuICAgICAgICAgICAgdGhpcy5yb3dHdXR0ZXJzW3RyYWNrXS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJvd0d1dHRlcnNbdHJhY2tdID0gY3JlYXRlR3V0dGVyKFxuICAgICAgICAgICAgJ3JvdycsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgKSh7XG4gICAgICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJvd0d1dHRlcnNbdHJhY2tdLnN0YXJ0RHJhZ2dpbmcoZSk7XG4gICAgfVxufTtcblxuR3JpZC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKGltbWVkaWF0ZSkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICAgICAgaWYgKCBpbW1lZGlhdGUgPT09IHZvaWQgMCApIGltbWVkaWF0ZSA9IHRydWU7XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmNvbHVtbkd1dHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKHRyYWNrKSB7IHJldHVybiB0aGlzJDEuY29sdW1uR3V0dGVyc1t0cmFja10uZGVzdHJveShpbW1lZGlhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzJDEuY29sdW1uR3V0dGVyc1t0cmFja107XG4gICAgICAgIH0pOyB9XG4gICAgKTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJvd0d1dHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKHRyYWNrKSB7IHJldHVybiB0aGlzJDEucm93R3V0dGVyc1t0cmFja10uZGVzdHJveShpbW1lZGlhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzJDEucm93R3V0dGVyc1t0cmFja107XG4gICAgICAgIH0pOyB9XG4gICAgKTtcbn07XG5cbmZ1bmN0aW9uIGluZGV4IChvcHRpb25zKSB7IHJldHVybiBuZXcgR3JpZChvcHRpb25zKTsgfVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyLmpzXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vbG9naW4uanNcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL3NpZGViYXIuanNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3QuanNcIjtcbmltcG9ydCBHdXR0ZXJzIGZyb20gXCIuL2d1dHRlcnMuanNcIjtcbmltcG9ydCBTcGxpdCBmcm9tIFwic3BsaXQtZ3JpZFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuSGVhZGVyKCk7XG5Mb2dpbigpO1xuU2lkZWJhcigpO1xuTGlzdCgpO1xuR3V0dGVycygpO1xuXG5TcGxpdCh7XG4gICAgY29sdW1uR3V0dGVyczogW3tcbiAgICAgICAgdHJhY2s6IDEsXG4gICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3V0dGVyLWNvbFwiKVxuICAgIH1dLFxuICAgIHJvd0d1dHRlcnM6IFt7XG4gICAgICAgIHRyYWNrOiAxLFxuICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1dHRlci1yb3dcIilcbiAgICB9XVxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9