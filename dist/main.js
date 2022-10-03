/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/css/main.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/css/main.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto+Mono);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Karla);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@-webkit-keyframes header-spawn {\n  0% {\n    transform: translateY(-500px);\n  }\n  50% {\n    transform: translateY(20px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes header-spawn {\n  0% {\n    transform: translateY(-500px);\n  }\n  50% {\n    transform: translateY(20px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes sidebar-spawn {\n  0% {\n    transform: translateX(-500px);\n  }\n  50% {\n    transform: translateX(20px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n@keyframes sidebar-spawn {\n  0% {\n    transform: translateX(-500px);\n  }\n  50% {\n    transform: translateX(20px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n@-webkit-keyframes list-spawn {\n  from {\n    transform: translateY(1000px);\n  }\n  to {\n    transform: translateY(0px);\n  }\n}\n@keyframes list-spawn {\n  from {\n    transform: translateY(1000px);\n  }\n  to {\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes prompt-spawn {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n@keyframes prompt-spawn {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n@-webkit-keyframes day-spawn {\n  0% {\n    top: 100%;\n    left: 100%;\n  }\n  100% {\n    top: 0%;\n    left: 0%;\n  }\n}\n@keyframes day-spawn {\n  0% {\n    top: 100%;\n    left: 100%;\n  }\n  100% {\n    top: 0%;\n    left: 0%;\n  }\n}\n@-webkit-keyframes content-despawn {\n  0% {\n    opacity: 100%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n@keyframes content-despawn {\n  0% {\n    opacity: 100%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n@-webkit-keyframes content-respawn {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: 0%;\n  }\n}\n@keyframes content-respawn {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: 0%;\n  }\n}\n.button-close {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgb(194, 27, 27);\n  color: white;\n  font-size: 2rem;\n  font-weight: 700;\n  height: 50px;\n  width: 50px;\n  border-top-left-radius: 25px;\n  border-bottom-right-radius: 10px;\n}\n\n.month-toggle:nth-of-type(1) {\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n}\n\n.month-toggle:nth-of-type(2) {\n  border-top-right-radius: 50%;\n  border-bottom-right-radius: 50%;\n}\n\n* {\n  font-family: \"Karla\";\n  font-size: \"1em\";\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr;\n  background-color: lightgrey;\n  position: relative;\n}\nbody #content {\n  display: grid;\n  grid-template-rows: 1fr 2px 4fr;\n  grid-template-columns: 1fr 2px 4fr;\n  z-index: 0;\n}\nbody #content #header {\n  -webkit-animation: header-spawn;\n          animation: header-spawn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  gap: \"\";\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  background: lightgrey;\n  padding: 5px 0;\n  transform: translateY(-500px);\n  z-index: 2;\n}\nbody #content #header h1 {\n  font-size: 4rem;\n}\nbody #content #header #header-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\nbody #content #header #header-buttons button {\n  border-style: none;\n  border-radius: 5px;\n  border-color: \"black\";\n  border-width: \"medium\";\n  font-family: \"Roboto Mono\";\n  font-size: 1rem;\n  padding: 20px 40px;\n}\nbody #content #header #header-buttons button:hover {\n  scale: 90%;\n}\nbody #content #header #header-buttons #login-button {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\nbody #content #header #header-buttons #menu-button {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: \"\";\n  padding: 20px 40px;\n  transition: 0.25s;\n}\nbody #content #header #header-buttons #menu-button:hover {\n  padding: 20px 120px;\n  transition: 0.25s;\n}\nbody #content #sidebar {\n  -webkit-animation: sidebar-spawn;\n          animation: sidebar-spawn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  display: grid;\n  grid-template-rows: repeat(4, minmax(50px, 80px)) auto minmax(50px, 80px);\n  grid-template-columns: 1fr;\n  grid-row: 3/4;\n  grid-column: 1/2;\n  background: lightgrey;\n  justify-content: center;\n  margin-left: auto;\n  padding: 20px;\n  position: relative;\n  z-index: 1;\n}\nbody #content #sidebar button {\n  border-style: none;\n  border-radius: none;\n  border-color: \"black\";\n  border-width: \"medium\";\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  font-family: inherit;\n  font-size: 1.25rem;\n  background: rgba(0, 0, 0, 0);\n}\nbody #content #sidebar button:hover {\n  cursor: pointer;\n  scale: 90%;\n}\nbody #content #sidebar body #content #sidebar-inbox {\n  grid-row: 1/2;\n  grid-column: 1/-1;\n}\nbody #content #sidebar body #content #sidebar-today {\n  grid-row: 2/3;\n  grid-column: 1/-1;\n}\nbody #content #sidebar body #content #sidebar-calendar {\n  grid-row: 3/4;\n  grid-column: 1/-1;\n}\nbody #content #sidebar body #content #sidebar-projects {\n  grid-row: 4/5;\n  grid-column: 1/-1;\n}\nbody #content #sidebar #sidebar-list {\n  grid-row: 5/6;\n  grid-column: 1/-1;\n  height: auto;\n}\nbody #content #sidebar #sidebar-list button {\n  border-style: none;\n  border-radius: none;\n  border-color: \"black\";\n  border-width: \"medium\";\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  font-family: \"Roboto Mono\";\n  font-size: 1.25rem;\n  background-color: rgba(0, 0, 0, 0);\n  padding-left: 20%;\n}\nbody #content #sidebar #sidebar-list button img {\n  height: 2rem;\n}\nbody #content #sidebar body #content #sidebar-add {\n  grid-row: 6/7;\n  grid-column: 1/-1;\n}\nbody #content #sidebar .projects-closed {\n  display: none;\n}\nbody #content #sidebar div:empty {\n  display: none;\n}\nbody #content #content-wrapper {\n  -webkit-animation: list-spawn;\n          animation: list-spawn;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: \"\";\n  grid-row: 3/4;\n  grid-column: 3/4;\n  min-width: 65vw;\n  min-height: 5vh;\n  background: white;\n  position: relative;\n  z-index: 0;\n}\nbody #content #content-wrapper #reset-layout {\n  border-style: none;\n  border-radius: \"none\";\n  border-color: \"black\";\n  border-width: \"medium\";\n  top: auto;\n  right: 0%;\n  bottom: 0%;\n  left: auto;\n  background: rgba(0, 0, 0, 0);\n  position: absolute;\n  transition: 0.25s;\n}\nbody #content #content-wrapper #reset-layout:hover {\n  top: auto;\n  right: 2%;\n  bottom: 2%;\n  left: auto;\n  cursor: pointer;\n  scale: 120%;\n}\nbody #content #content-wrapper #inbox {\n  width: auto;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: \"\";\n  position: relative;\n}\nbody #content #content-wrapper #today {\n  width: auto;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: \"\";\n  position: relative;\n}\nbody #content #content-wrapper #calendar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: \"\";\n  position: relative;\n}\nbody #content #content-wrapper #calendar #calendar-grid {\n  width: auto;\n  height: 100%;\n  display: grid;\n  grid-template-rows: 50px 50px 1fr;\n  grid-template-columns: 1fr;\n  position: relative;\n}\nbody #content #content-wrapper #calendar #calendar-grid h2, body #content #content-wrapper #calendar #calendar-grid h3, body #content #content-wrapper #calendar #calendar-grid div {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: \"\";\n}\nbody #content #content-wrapper #calendar #calendar-grid #calendar-month {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: \"\";\n  grid-row: 1/2;\n  grid-column: 1/-1;\n}\nbody #content #content-wrapper #calendar #calendar-grid #calendar-month button {\n  border-style: none;\n  border-radius: \"none\";\n  border-color: \"black\";\n  border-width: \"medium\";\n  padding: 10px;\n}\nbody #content #content-wrapper #calendar #calendar-grid #calendar-headers {\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: repeat(7, 1fr);\n  grid-row: 2/3;\n  grid-column: 1/-1;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper {\n  border-style: none;\n  border-radius: 25px;\n  border-color: \"black\";\n  border-width: \"medium\";\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: stretch;\n  gap: \"\";\n  grid-row: 3/4;\n  grid-column: 1/-1;\n  position: relative;\n  overflow: hidden;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #calendar-days {\n  display: grid;\n  grid-template-rows: repeat(6, 65px);\n  grid-template-columns: repeat(7, 65px);\n  position: relative;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #calendar-days button {\n  width: 65px;\n  height: 65px;\n  font-family: inherit;\n  font-size: 1.5rem;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  transition: 0.25s;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #calendar-days button:hover {\n  border-style: none;\n  border-radius: 15%;\n  border-color: \"black\";\n  border-width: \"medium\";\n  font-family: inherit;\n  font-size: 2.5rem;\n  scale: 120%;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected {\n  -webkit-animation: day-spawn;\n          animation: day-spawn;\n  -webkit-animation-duration: 0.15s;\n          animation-duration: 0.15s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: lightgrey;\n  position: absolute;\n  z-index: 2;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected button {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n  position: absolute;\n}\nbody #content #content-wrapper .list-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: \"\";\n}\nbody #content #content-wrapper .list-content #add-task {\n  border-style: none;\n  border-radius: \"none\";\n  border-color: \"black\";\n  border-width: \"medium\";\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-family: inherit;\n  font-size: 1.25rem;\n  padding: 10px 20px;\n}\nbody #content #content-wrapper .list-content #add-task img {\n  height: 36px;\n}\nbody #content #gutter-col {\n  -webkit-animation: sidebar-spawn;\n          animation: sidebar-spawn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  width: 2px;\n  height: auto;\n  grid-row: 3/4;\n  grid-column: 2/3;\n  background: black;\n  justify-self: center;\n  position: relative;\n  transition: 0.5s;\n  z-index: 1;\n}\nbody #content #gutter-col:hover {\n  width: 15px;\n  height: auto;\n  cursor: col-resize;\n}\nbody #content #gutter-row {\n  -webkit-animation: header-spawn;\n          animation: header-spawn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  width: auto;\n  height: 2px;\n  grid-row: 2/3;\n  grid-column: 1/-1;\n  align-self: center;\n  background: black;\n  position: relative;\n  transition: 0.5s;\n  z-index: 2;\n}\nbody #content #gutter-row:hover {\n  width: auto;\n  height: 15px;\n  cursor: row-resize;\n}\nbody .popup-screen {\n  -webkit-animation: prompt-spawn;\n          animation: prompt-spawn;\n  -webkit-animation-duration: 0.25s;\n          animation-duration: 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: \"\";\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  z-index: 1;\n}\nbody .popup-screen .popup-prompt {\n  -webkit-animation: header-spawn;\n          animation: header-spawn;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  border-style: none;\n  border-radius: 25px;\n  border-color: \"black\";\n  border-width: \"medium\";\n  width: 500px;\n  height: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  background: white;\n  box-shadow: 5px 5px 20px #000000;\n}\nbody .popup-screen .popup-prompt form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 10px;\n}\nbody .popup-screen .popup-prompt form .input-field {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: \"\";\n}/*# sourceMappingURL=main.css.map */", "",{"version":3,"sources":["webpack://./scss/_reset.scss","webpack://./dist/css/main.css","webpack://./scss/_animations.scss","webpack://./scss/_buttons.scss","webpack://./scss/_colors.scss","webpack://./scss/main.scss","webpack://./scss/_mixins.scss","webpack://./scss/_typography.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;ACGJ;;ACNA;EACI;IACI,6BAAA;EDSN;ECRI;IACE,2BAAA;EDUN;ECTI;IACE,0BAAA;EDWN;AACF;;AClBA;EACI;IACI,6BAAA;EDSN;ECRI;IACE,2BAAA;EDUN;ECTI;IACE,0BAAA;EDWN;AACF;ACRA;EACI;IACI,6BAAA;EDUN;ECRE;IACI,2BAAA;EDUN;ECRE;IACI,0BAAA;EDUN;AACF;ACnBA;EACI;IACI,6BAAA;EDUN;ECRE;IACI,2BAAA;EDUN;ECRE;IACI,0BAAA;EDUN;AACF;ACPA;EACI;IACI,6BAAA;EDSN;ECPE;IACI,0BAAA;EDSN;AACF;ACfA;EACI;IACI,6BAAA;EDSN;ECPE;IACI,0BAAA;EDSN;AACF;ACNA;EACI;IACI,WAAA;EDQN;ECPI;IACE,aAAA;EDSN;AACF;ACdA;EACI;IACI,WAAA;EDQN;ECPI;IACE,aAAA;EDSN;AACF;ACNA;EACI;IACI,SAAA;IACA,UAAA;EDQN;ECPI;IACE,OAAA;IACA,QAAA;EDSN;AACF;AChBA;EACI;IACI,SAAA;IACA,UAAA;EDQN;ECPI;IACE,OAAA;IACA,QAAA;EDSN;AACF;ACNA;EACI;IACI,aAAA;EDQN;ECPI;IACE,WAAA;EDSN;AACF;ACdA;EACI;IACI,aAAA;EDQN;ECPI;IACE,WAAA;EDSN;AACF;ACNA;EACI;IACI,SAAA;EDQN;ECPI;IACE,OAAA;EDSN;AACF;ACdA;EACI;IACI,SAAA;EDQN;ECPI;IACE,OAAA;EDSN;AACF;AErEA;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EAEA,kCCFO;EDGP,YCDS;EDET,eAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,4BAAA;EACA,gCAAA;AFsEJ;;AEnEA;EACI,2BAAA;EACA,8BAAA;AFsEJ;;AEnEA;EACI,4BAAA;EACA,+BAAA;AFsEJ;;AItFA;ECsBI,oBC1BQ;ED2BR,gBAF2C;ALsE/C;;AIvFA;ECHI,aAAA;EACA,uBDGc;ECFd,0BDEmB;EACnB,2BDXS;ECYT,kBAAA;AJ4FJ;AI1FI;ECRA,aAAA;EACA,+BDQkB;ECPlB,kCDO+B;EAC3B,UAAA;AJ8FR;AI5FQ;EC4BJ,+BD3B2B;UC2B3B,uBD3B2B;EC4B3B,8BD5ByC;UC4BzC,sBD5ByC;EC6BzC,qCD7B6C;UC6B7C,6BD7B6C;ECrB7C,aAAA;EACA,mBDqBsB;ECpBtB,6BDoB2B;ECnB3B,mBDmByC;EClBzC,OAAA;EAUA,aDS0B;ECR1B,iBDQkC;EAC1B,qBDtBC;ECuBD,cAAA;EACA,6BAAA;EACA,UAAA;AJqGZ;AInGY;EACI,eAAA;AJqGhB;AIlGY;ECjCR,aAAA;EACA,mBDiC0B;EChC1B,uBDgC+B;EC/B/B,mBD+BuC;EC9BvC,SAAA;ALsIJ;AItGgB;ECKZ,kBDJgC;ECKhC,kBDLsC;ECMtC,qBAHiE;EAIjE,sBAJgD;EAXhD,0BC3BS;ED4BT,eDQ2C;EAC3B,kBAAA;AJ4GpB;AI1GoB;EACI,UAAA;AJ4GxB;AIxGgB;EC9CZ,aAAA;EACA,mBD8C8B;EC7C9B,uBD6CmC;EC5CnC,mBD4C2C;EC3C3C,SAAA;ALyJJ;AI3GgB;EClDZ,aAAA;EACA,mBDkD8B;ECjD9B,uBDiDmC;EChDnC,mBDgD2C;EC/C3C,OAAA;EDgDgB,kBAAA;EACA,iBAAA;AJiHpB;AI/GoB;EACI,mBAAA;EACA,iBAAA;AJiHxB;AI3GQ;ECfJ,gCDgB2B;UChB3B,wBDgB2B;ECf3B,8BDe0C;UCf1C,sBDe0C;ECd1C,qCDc8C;UCd9C,6BDc8C;ECxD9C,aAAA;EACA,yEDwDsB;ECvDtB,0BDuD6E;ECnD7E,aDoD0B;ECnD1B,gBDmDkC;EAC1B,qBDjEC;ECkED,uBAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;EACA,UAAA;AJkHZ;AIhHY;ECjCR,kBDkC4B;ECjC5B,mBDiCkC;EChClC,qBAHiE;EAIjE,sBAJgD;EAxChD,aAAA;EACA,mBD2E0B;EC1E1B,2BD0E+B;ECzE/B,mBDyE2C;ECxE3C,SAAA;EAyBA,oBDgD0B;EC/C1B,kBD+CmC;EACvB,4BD/EF;AHyMd;AIxHgB;EACI,eAAA;EACA,UAAA;AJ0HpB;AItHY;ECxER,aDyE8B;ECxE9B,iBDwEsC;AJyH1C;AItHY;EC5ER,aD6E8B;EC5E9B,iBD4EsC;AJyH1C;AItHY;EChFR,aDiF8B;EChF9B,iBDgFsC;AJyH1C;AItHY;ECpFR,aDqF8B;ECpF9B,iBDoFsC;AJyH1C;AItHY;ECxFR,aDyF8B;ECxF9B,iBDwFsC;EAC1B,YAAA;AJyHhB;AIvHgB;ECjEZ,kBDkEgC;ECjEhC,mBDiEsC;EChEtC,qBAHiE;EAIjE,sBAJgD;EAxChD,aAAA;EACA,mBD2G8B;EC1G9B,uBD0GmC;ECzGnC,mBDyG2C;ECxG3C,QAAA;EAyBA,0BC3BS;ED4BT,kBD+E2C;EAC3B,kCD/GN;ECgHM,iBAAA;AJiIpB;AI/HoB;EACI,YAAA;AJiIxB;AI5HY;ECzGR,aD0G8B;ECzG9B,iBDyGsC;AJ+H1C;AI5HY;EACI,aAAA;AJ8HhB;AI3HY;EACI,aAAA;AJ6HhB;AIzHQ;ECpFJ,6BDqF2B;UCrF3B,qBDqF2B;ECpF3B,gCDoFuC;UCpFvC,wBDoFuC;ECnFvC,qCDmF6C;UCnF7C,6BDmF6C;ECrI7C,aAAA;EACA,mBDqIsB;ECpItB,uBDoI2B;ECnI3B,mBDmImC;EClInC,OAAA;EAUA,aDyH0B;ECxH1B,gBDwHkC;EC/GlC,eDgH0B;EC/G1B,eD+GgC;EACxB,iBAAA;EACA,kBAAA;EACA,UAAA;AJmIZ;AIjIY;ECpGR,kBDqG4B;ECpG5B,qBAFiC;EAGjC,qBAHiE;EAIjE,sBAJgD;EANhD,SD6G8B;EC5G9B,SD4GoC;EC3GpC,UD2GwC;EC1GxC,UD0G4C;EAChC,4BDjJF;ECkJE,kBAAA;EACA,iBAAA;AJyIhB;AIvIgB;EClHZ,SDmHkC;EClHlC,SDkHwC;ECjHxC,UDiH4C;EChH5C,UDgHgD;EAChC,eAAA;EACA,WAAA;AJ4IpB;AIxIY;ECxIR,WDyI0B;ECxI1B,YDwIgC;EC5JhC,aAAA;EACA,sBD4J0B;EC3J1B,uBD2JkC;EC1JlC,mBD0J0C;ECzJ1C,OAAA;ED0JY,kBAAA;AJ+IhB;AI5IY;EC9IR,WD+I0B;EC9I1B,YD8IgC;EClKhC,aAAA;EACA,sBDkK0B;ECjK1B,uBDiKkC;EChKlC,mBDgK0C;EC/J1C,OAAA;EDgKY,kBAAA;AJmJhB;AIhJY;ECvKR,aAAA;EACA,sBDuK0B;ECtK1B,uBDsKkC;ECrKlC,mBDqK0C;ECpK1C,OAAA;EDqKY,kBAAA;AJsJhB;AIpJgB;ECxJZ,WDyJ8B;ECxJ9B,YDwJoC;ECpKpC,aAAA;EACA,iCDoK8B;ECnK9B,0BDmK6C;EAC7B,kBAAA;AJyJpB;AIvJoB;EChLhB,aAAA;EACA,mBDgLkC;EC/KlC,uBD+KuC;EC9KvC,mBD8K+C;EC7K/C,OAAA;AL0UJ;AI1JoB;ECpLhB,aAAA;EACA,mBDoLkC;ECnLlC,8BDmLuC;EClLvC,mBDkLsD;ECjLtD,OAAA;EAUA,aDwKsC;ECvKtC,iBDuK8C;AJiKlD;AI/JwB;EC/IpB,kBDgJwC;EC/IxC,qBAFiC;EAGjC,qBAHiE;EAIjE,sBAJgD;EDkJxB,aAAA;AJoK5B;AIhKoB;ECtLhB,aAAA;EACA,uBDsLkC;ECrLlC,qCDqLuC;ECjLvC,aDkLsC;ECjLtC,iBDiL8C;AJqKlD;AIlKoB;EC1JhB,kBD2JoC;EC1JpC,mBD0J0C;ECzJ1C,qBAHiE;EAIjE,sBAJgD;EAxChD,aAAA;EACA,mBDoMkC;ECnMlC,uBDmMuC;EClMvC,oBDkM+C;ECjM/C,OAAA;EAUA,aDwLsC;ECvLtC,iBDuL8C;EAC1B,kBAAA;EACA,gBAAA;AJ4KxB;AI1KwB;EClMpB,aAAA;EACA,mCDkMsC;ECjMtC,sCDiMuD;EAC/B,kBAAA;AJ8K5B;AI5K4B;EC3LxB,WD4L0C;EC3L1C,YD2LgD;EClLhD,oBDmL0C;EClL1C,iBDkLmD;EACvB,oCAAA;EACA,iBAAA;AJgLhC;AI9KgC;EC3K5B,kBD4KgD;EC3KhD,kBD2KsD;EC1KtD,qBAHiE;EAIjE,sBAJgD;EAXhD,oBDyL8C;ECxL9C,iBDwLuD;EACvB,WAAA;AJoLpC;AI/KwB;EC5KpB,4BD6K2C;UC7K3C,oBD6K2C;EC5K3C,iCD4KsD;UC5KtD,yBD4KsD;EC3KtD,qCD2K6D;UC3K7D,6BD2K6D;EC3L7D,MD4L0C;EC3L1C,QD2L6C;EC1L7C,SD0LgD;ECzLhD,ODyLmD;EAC3B,2BAAA;EACA,kBAAA;EACA,UAAA;AJsL5B;AIpL4B;ECjMxB,MDkM8C;ECjM9C,WDiMiD;EChMjD,YDgMuD;EC/LvD,OD+L6D;EACjC,kBAAA;AJyLhC;AIlLY;EC5OR,aAAA;EACA,sBD4O0B;EC3O1B,uBD2OkC;EC1OlC,mBD0O0C;ECzO1C,OAAA;ALiaJ;AItLgB;ECtMZ,kBDuMgC;ECtMhC,qBAFiC;EAGjC,qBAHiE;EAIjE,sBAJgD;EAxChD,aAAA;EACA,mBDgP8B;EC/O9B,uBD+OmC;EC9OnC,mBD8O2C;EC7O3C,SAAA;EAyBA,oBDqN8B;ECpN9B,kBDoNuC;EACvB,kBAAA;AJgMpB;AI9LoB;EACI,YAAA;AJgMxB;AI1LQ;EC5MJ,gCD6M2B;UC7M3B,wBD6M2B;EC5M3B,8BD4M0C;UC5M1C,sBD4M0C;EC3M1C,qCD2M8C;UC3M9C,6BD2M8C;EC1O9C,UD2OsB;EC1OtB,YD0O2B;EChP3B,aDiP0B;EChP1B,gBDgPkC;EAC1B,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;AJgMZ;AI9LY;ECnPR,WDoP0B;ECnP1B,YDmPgC;EACpB,kBAAA;AJiMhB;AI7LQ;EC5NJ,+BD6N2B;UC7N3B,uBD6N2B;EC5N3B,8BD4NyC;UC5NzC,sBD4NyC;EC3NzC,qCD2N6C;UC3N7C,6BD2N6C;EC1P7C,WD2PsB;EC1PtB,WD0P4B;EChQ5B,aDiQ0B;EChQ1B,iBDgQkC;EAC1B,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;AJmMZ;AIjMY;ECnQR,WDoQ0B;ECnQ1B,YDmQgC;EACpB,kBAAA;AJoMhB;AI/LI;EC7OA,+BD8OuB;UC9OvB,uBD8OuB;EC7OvB,iCD6OqC;UC7OrC,yBD6OqC;EC5OrC,qCD4O4C;UC5O5C,6BD4O4C;EC3Q5C,WD4QkB;EC3QlB,YD2QwB;EC/RxB,aAAA;EACA,mBD+RkB;EC9RlB,uBD8RuB;EC7RvB,mBD6R+B;EC5R/B,OAAA;ED6RI,8BDjSE;ECkSF,kBAAA;EACA,UAAA;AJwMR;AItMQ;ECrPJ,+BDsP2B;UCtP3B,uBDsP2B;ECrP3B,gCDqPyC;UCrPzC,wBDqPyC;ECpPzC,qCDoP+C;UCpP/C,6BDoP+C;EC7P/C,kBD8PwB;EC7PxB,mBD6P8B;EC5P9B,qBAHiE;EAIjE,sBAJgD;EArBhD,YDqRsB;ECpRtB,aDoR6B;ECxS7B,aAAA;EACA,sBDwSsB;ECvStB,uBDuS8B;ECtS9B,mBDsSsC;ECrStC,QAAA;EDsSQ,iBAAA;EACA,gCAAA;AJkNZ;AIhNY;EC7SR,aAAA;EACA,sBD6S0B;EC5S1B,6BD4SkC;EC3SlC,mBD2SgD;EC1ShD,SAAA;ALggBJ;AIpNgB;EChTZ,aAAA;EACA,mBDgT8B;EC/S9B,8BD+SmC;EC9SnC,mBD8SkD;EC7SlD,OAAA;ALugBJ,CAAA,mCAAA","sourceRoot":""}]);
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

/***/ "./dist/css/main.css":
/*!***************************!*\
  !*** ./dist/css/main.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./dist/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    let currentMonth = new Date().getMonth();

    // Adds a new day to the calendar
    function newDay(dayNum) {
        const day = document.createElement("button");
        day.setAttribute("class", "calendar-day");
        const dayText = document.createElement("h4");
        dayText.textContent = dayNum;
        day.appendChild(dayText);
        return day;
    }

    function setMonth(month) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        document.getElementById("month-text").textContent = months[month];

        setDays(month);
    }

    function setDays(month) {
        let numDays = (() => {
            const months = [3, 5, 8, 10];

            if (month === 1) {
                return 28;
            } else if (months.includes(month)) {
                return 30;
            } else {
                return 31;
            }
        })();
    
        for (let i = 1; i <= numDays; i++) {
            document.getElementById("calendar-days").appendChild(newDay(i));
            document.getElementById("calendar-days").lastChild.classList.add("active-day");
        }

        // Add the previous month's final days to fill the calendar
        let newDate = new Date();
        newDate.setMonth(month);

        const dayOffsetBefore = (newDate.getDay() + 1) - (newDate.getDate() % 7);
        newDate.setDate(0);
        let prevOffset = newDate.getDate();

        for (let i = 0; i < dayOffsetBefore; i++) {
            document.getElementById("calendar-days").prepend(newDay(prevOffset));
            document.getElementById("calendar-days").firstChild.style.backgroundColor = "darkgrey";
            prevOffset--;
        }

        // Add the next month's beginning days to fill the calendar
        const dayOffsetAfter = 42 - document.getElementById("calendar-days").childElementCount;
        
        for (let i = 0; i < dayOffsetAfter; i++) {
            document.getElementById("calendar-days").append(newDay(i + 1));
            document.getElementById("calendar-days").lastChild.style.backgroundColor = "darkgrey";
        }

        setButtons();
    }

    function selectDay(month, day) {
        const daySelected = document.createElement("div");
        daySelected.setAttribute("id", "day-selected");
        const dayNum = document.createElement("h4");
        dayNum.textContent = day;
        daySelected.appendChild(dayNum);

        const close = document.createElement("button");
        close.innerHTML = "X";
        close.id = "close-day";
        close.className = "button-close";
        daySelected.appendChild(close);

        document.getElementById("days-wrapper").appendChild(daySelected);

        document.getElementById("close-day").addEventListener("click", function() {
            document.getElementById("day-selected").remove();
        });
    }

    // Show events of a given day if clicked on
    function setButtons() {
        for (const button of document.querySelectorAll(".active-day")) {
            button.addEventListener("click", function() {
                const selectedDay = button.firstChild.textContent;
                selectDay(currentMonth, selectedDay);
            });
        }
    }

    // Append calendar to DOM
    const calendarWrap = document.createElement("div");
    calendarWrap.setAttribute("id", "calendar");
    calendarWrap.setAttribute("class", "list-content");

    const title = document.createElement("h1");
    title.setAttribute("id", "list-title");
    title.textContent = "Calendar";
    calendarWrap.appendChild(title);

    const calendar = document.createElement("div");
    calendar.setAttribute("id", "calendar-grid");

    // Append calendar month to DOM
    const calMonthWrap = document.createElement("div");
    calMonthWrap.setAttribute("id", "calendar-month");

    const monthArrowLeft = document.createElement("button");
    monthArrowLeft.setAttribute("id", "calendar-left");
    monthArrowLeft.setAttribute("class", "month-toggle");
    const arrowLeftPic = document.createElement("img");
    arrowLeftPic.setAttribute("src", "../src/images/keyboard_arrow_left.png");
    monthArrowLeft.appendChild(arrowLeftPic);
    calMonthWrap.appendChild(monthArrowLeft);

    const calMonth = document.createElement("h2");
    calMonth.setAttribute("id", "month-text");
    calMonthWrap.appendChild(calMonth);

    const monthArrowRight = document.createElement("button");
    monthArrowRight.setAttribute("id", "calendar-right");
    monthArrowRight.setAttribute("class", "month-toggle");
    const arrowRightPic = document.createElement("img");
    arrowRightPic.setAttribute("src", "../src/images/keyboard_arrow_right.png");
    monthArrowRight.appendChild(arrowRightPic);
    calMonthWrap.appendChild(monthArrowRight);

    calendar.appendChild(calMonthWrap);

    // Append calendar weekday headers to DOM
    const calHeaders = document.createElement("div");
    calHeaders.setAttribute("id", "calendar-headers");

    const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    for (const weekday of weekdays) {
        const header = document.createElement("h3");
        header.setAttribute("class", "calendar-header");
        header.textContent = weekday;
        calHeaders.appendChild(header);
    }

    calendar.appendChild(calHeaders);

    // Append space for calendar days to DOM
    const calDayWrap = document.createElement("div");
    calDayWrap.setAttribute("id", "days-wrapper");

    const calDays = document.createElement("div");
    calDays.setAttribute("id", "calendar-days");

    calDayWrap.appendChild(calDays);
    calendar.appendChild(calDayWrap);
    calendarWrap.appendChild(calendar);
    const list = document.getElementById("content-wrapper");
    list.insertBefore(calendarWrap, list.children[0]);

    // Set initial calendar month
    setMonth(new Date().getMonth());

    // Allow arrow buttons to control the visible calendar month
    for (const button of document.querySelectorAll(".month-toggle")) {
        button.addEventListener("click", function(e) {
            while (document.getElementById("calendar-days").firstChild) {
                document.getElementById("calendar-days").firstChild.remove();
            }

            const target = (e.target.tagName === "IMG" ? e.target.parentElement.id : e.target.id);

            if (target === "calendar-left") {
                currentMonth = ((currentMonth - 1) + 12) % 12;
                setMonth(currentMonth);
            } else {
                currentMonth = ((currentMonth + 1) + 12) % 12;
                setMonth(currentMonth);
            }
        });
    }
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

    for (const link of document.querySelectorAll(".sidebar-link")) {
        link.addEventListener("click", function(e) {
            const eventTarget = e.currentTarget;
            let currentContent = document.getElementById("content-wrapper").firstChild;

            if (eventTarget.textContent.toLowerCase() !== currentContent.id) {
                currentContent.style.animation = "content-despawn";
                currentContent.style.animationDuration = "0.25s";
                currentContent.style.animationFillMode = "forwards";
                
                setTimeout(() => {
                    currentContent.remove();
                }, 250);

                setTimeout(() => {
                    switch(eventTarget.textContent) {
                        case 'Inbox':
                            (0,_inbox_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectData);
                            break;
                        case 'Today':
                            (0,_today_js__WEBPACK_IMPORTED_MODULE_1__["default"])(projectData);
                            break;
                        case 'Calendar':
                            (0,_calendar_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projectData);
                            break;
                        default:
                            break;
                    }

                    currentContent = document.getElementById("content-wrapper").firstChild;
    
                    currentContent.style.animation = "content-respawn";
                    currentContent.style.animationDuration = "0.25s";
                    currentContent.style.animationFillMode = "forwards";
                }, 250);
            }
        });
    }

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

            const projectsList = document.getElementById("sidebar-list");
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
    inbox.setAttribute("class", "sidebar-link");

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
    today.setAttribute("class", "sidebar-link");

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
    calendar.setAttribute("class", "sidebar-link");

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
    projectsList.setAttribute("id", "sidebar-list");
    projectsList.setAttribute("class", "projects-closed");
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
            document.getElementById("sidebar-list").classList.add("projects-closed");
            document.getElementById("projects-pic").setAttribute("src", "../src/images/arrow_circle_right.png");
        } else {
            document.getElementById("sidebar-list").classList.remove("projects-closed");
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
/* harmony import */ var _dist_css_main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dist/css/main.css */ "./dist/css/main.css");









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
    maxSize: 200,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLGFBQWEsYUFBYSxRQUFRLE1BQU0sVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxjQUFjLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxZQUFZLGFBQWEsZUFBZSxlQUFlLFlBQVksV0FBVyxhQUFhLGFBQWEsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsYUFBYSxlQUFlLGVBQWUsWUFBWSxNQUFNLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxhQUFhLGVBQWUsZUFBZSxZQUFZLE1BQU0sT0FBTyxXQUFXLGFBQWEsZUFBZSxlQUFlLFlBQVksYUFBYSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxNQUFNLGFBQWEsZUFBZSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksYUFBYSxlQUFlLGNBQWMsZUFBZSxhQUFhLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sY0FBYyxlQUFlLGNBQWMsYUFBYSxZQUFZLGFBQWEsZUFBZSxlQUFlLFlBQVksY0FBYyxlQUFlLGFBQWEsTUFBTSxPQUFPLFVBQVUsVUFBVSxPQUFPLE1BQU0sYUFBYSxlQUFlLE9BQU8sTUFBTSxhQUFhLGVBQWUsT0FBTyxNQUFNLGFBQWEsZUFBZSxPQUFPLE1BQU0sYUFBYSxlQUFlLE9BQU8sTUFBTSxhQUFhLGVBQWUsV0FBVyxPQUFPLE9BQU8sY0FBYyxlQUFlLGNBQWMsYUFBYSxZQUFZLGFBQWEsZUFBZSxlQUFlLFlBQVksYUFBYSxjQUFjLGFBQWEsWUFBWSxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sYUFBYSxlQUFlLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxjQUFjLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxZQUFZLGFBQWEsZUFBZSxlQUFlLFlBQVksWUFBWSxlQUFlLGNBQWMsY0FBYyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sY0FBYyxjQUFjLGFBQWEsYUFBYSxhQUFhLGNBQWMsY0FBYyxjQUFjLGFBQWEsWUFBWSxXQUFXLE9BQU8sT0FBTyxhQUFhLGNBQWMsY0FBYyxjQUFjLFdBQVcsVUFBVSxPQUFPLE1BQU0sYUFBYSxjQUFjLFlBQVksYUFBYSxlQUFlLGVBQWUsWUFBWSxZQUFZLE9BQU8sTUFBTSxhQUFhLGNBQWMsWUFBWSxhQUFhLGVBQWUsZUFBZSxZQUFZLFlBQVksT0FBTyxNQUFNLFdBQVcsYUFBYSxlQUFlLGVBQWUsWUFBWSxZQUFZLE9BQU8sT0FBTyxhQUFhLGNBQWMsWUFBWSxhQUFhLGVBQWUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGVBQWUsZUFBZSxZQUFZLE1BQU0sT0FBTyxZQUFZLGFBQWEsZUFBZSxlQUFlLFlBQVksWUFBWSxlQUFlLE9BQU8sT0FBTyxlQUFlLGNBQWMsYUFBYSxhQUFhLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxlQUFlLGNBQWMsZUFBZSxPQUFPLE9BQU8sZUFBZSxlQUFlLGNBQWMsYUFBYSxZQUFZLGFBQWEsZUFBZSxlQUFlLFlBQVksWUFBWSxlQUFlLFlBQVksV0FBVyxPQUFPLE9BQU8sWUFBWSxhQUFhLGVBQWUsWUFBWSxPQUFPLE9BQU8sY0FBYyxjQUFjLGVBQWUsZUFBZSxZQUFZLFdBQVcsT0FBTyxPQUFPLGVBQWUsZUFBZSxjQUFjLGFBQWEsY0FBYyxlQUFlLFdBQVcsT0FBTyxPQUFPLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGNBQWMsY0FBYyxjQUFjLGNBQWMsWUFBWSxXQUFXLFVBQVUsT0FBTyxPQUFPLGNBQWMsY0FBYyxjQUFjLGNBQWMsWUFBWSxPQUFPLE1BQU0sV0FBVyxhQUFhLGVBQWUsZUFBZSxZQUFZLE1BQU0sT0FBTyxjQUFjLGNBQWMsYUFBYSxhQUFhLFlBQVksYUFBYSxlQUFlLGVBQWUsWUFBWSxjQUFjLGVBQWUsWUFBWSxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sY0FBYyxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsY0FBYyxjQUFjLGNBQWMsZUFBZSxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsY0FBYyxZQUFZLE9BQU8sTUFBTSxjQUFjLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxjQUFjLGNBQWMsY0FBYyxlQUFlLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxjQUFjLFlBQVksT0FBTyxNQUFNLGNBQWMsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGNBQWMsY0FBYyxZQUFZLGFBQWEsZUFBZSxlQUFlLFlBQVksYUFBYSxZQUFZLFVBQVUsTUFBTSxNQUFNLGNBQWMsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxjQUFjLGFBQWEsY0FBYyxjQUFjLFlBQVksYUFBYSxlQUFlLGVBQWUsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsYUFBYSxlQUFlLGVBQWUsWUFBWSxPQUFPLE9BQU8sV0FBVyxhQUFhLGVBQWUsZUFBZSxZQUFZLG1DQUFtQztBQUMza29CO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBcUc7QUFDckc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUkrQztBQUN2RSxPQUFPLGlFQUFlLHFGQUFPLElBQUksNEZBQWMsR0FBRyw0RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEwrQjtBQUNBO0FBQ007QUFDUjs7QUFFZDtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHFEQUFLOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscURBQUs7QUFDakM7QUFDQTtBQUNBLDRCQUE0QixxREFBSztBQUNqQztBQUNBO0FBQ0EsNEJBQTRCLHdEQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLFFBQVEsb0RBQUk7QUFDWixLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDbkVlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUNlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0dBQWdHLFlBQVk7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7OztBQ2xHZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqRmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7OztBQzVGZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7OztBQ2hGZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWkEsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0EsVUFBVSxTQUFTO0FBQ25CO0FBQ0EsVUFBVSxTQUFTO0FBQ25CO0FBQ0EsVUFBVSxTQUFTO0FBQ25CLDRCQUE0QixTQUFTO0FBQ3JDO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5QjtBQUNBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywrQkFBK0I7QUFDekU7O0FBRUE7QUFDQTs7QUFFQSwwREFBMEQ7QUFDMUQsNEJBQTRCLHVCQUF1QjtBQUNuRCxtQ0FBbUMsNkNBQTZDOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsNkRBQTZELDZCQUE2Qjs7QUFFMUY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixHQUFHO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQ0FBbUMsR0FBRztBQUN0QztBQUNBLG9EQUFvRDtBQUNwRCwrQ0FBK0M7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQStEO0FBQy9EO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQixpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7VUNycUJyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUNGO0FBQ0k7QUFDQTtBQUNBO0FBQ0o7QUFDSTtBQUNMOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxzREFBTTtBQUNOLHFEQUFLO0FBQ0wsdURBQU87QUFDUCx1REFBTztBQUNQLHVEQUFPO0FBQ1Asc0RBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNELHVEQUFPLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9kaXN0L2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL2Rpc3QvY3NzL21haW4uY3NzP2E3YjUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2d1dHRlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2luLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3BsaXQtZ3JpZC9kaXN0L3NwbGl0LWdyaWQubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm8pO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthcmxhKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGhlYWRlci1zcGF3biB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhlYWRlci1zcGF3biB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2lkZWJhci1zcGF3biB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNpZGViYXItc3Bhd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwMHB4KTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGxpc3Qtc3Bhd24ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBsaXN0LXNwYXduIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBwcm9tcHQtc3Bhd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHByb21wdC1zcGF3biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBkYXktc3Bhd24ge1xcbiAgMCUge1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGxlZnQ6IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdG9wOiAwJTtcXG4gICAgbGVmdDogMCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZGF5LXNwYXduIHtcXG4gIDAlIHtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRvcDogMCU7XFxuICAgIGxlZnQ6IDAlO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgY29udGVudC1kZXNwYXduIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBjb250ZW50LWRlc3Bhd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgY29udGVudC1yZXNwYXduIHtcXG4gIDAlIHtcXG4gICAgdG9wOiAxMDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRvcDogMCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgY29udGVudC1yZXNwYXduIHtcXG4gIDAlIHtcXG4gICAgdG9wOiAxMDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRvcDogMCU7XFxuICB9XFxufVxcbi5idXR0b24tY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDI3LCAyNyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tb250aC10b2dnbGU6bnRoLW9mLXR5cGUoMSkge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubW9udGgtdG9nZ2xlOm50aC1vZi10eXBlKDIpIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiO1xcbiAgZm9udC1zaXplOiBcXFwiMWVtXFxcIjtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuYm9keSAjY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMnB4IDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJweCA0ZnI7XFxuICB6LWluZGV4OiAwO1xcbn1cXG5ib2R5ICNjb250ZW50ICNoZWFkZXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGhlYWRlci1zcGF3bjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBoZWFkZXItc3Bhd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiBcXFwiXFxcIjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5ib2R5ICNjb250ZW50ICNoZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5ib2R5ICNjb250ZW50ICNoZWFkZXIgI2hlYWRlci1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5ib2R5ICNjb250ZW50ICNoZWFkZXIgI2hlYWRlci1idXR0b25zIGJ1dHRvbiB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXItY29sb3I6IFxcXCJibGFja1xcXCI7XFxuICBib3JkZXItd2lkdGg6IFxcXCJtZWRpdW1cXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2hlYWRlciAjaGVhZGVyLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gIHNjYWxlOiA5MCU7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2hlYWRlciAjaGVhZGVyLWJ1dHRvbnMgI2xvZ2luLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuYm9keSAjY29udGVudCAjaGVhZGVyICNoZWFkZXItYnV0dG9ucyAjbWVudS1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IFxcXCJcXFwiO1xcbiAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2hlYWRlciAjaGVhZGVyLWJ1dHRvbnMgI21lbnUtYnV0dG9uOmhvdmVyIHtcXG4gIHBhZGRpbmc6IDIwcHggMTIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuYm9keSAjY29udGVudCAjc2lkZWJhciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc2lkZWJhci1zcGF3bjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBzaWRlYmFyLXNwYXduO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWlubWF4KDUwcHgsIDgwcHgpKSBhdXRvIG1pbm1heCg1MHB4LCA4MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbmJvZHkgI2NvbnRlbnQgI3NpZGViYXIgYnV0dG9uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IFxcXCJibGFja1xcXCI7XFxuICBib3JkZXItd2lkdGg6IFxcXCJtZWRpdW1cXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBzY2FsZTogOTAlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyIGJvZHkgI2NvbnRlbnQgI3NpZGViYXItaW5ib3gge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyIGJvZHkgI2NvbnRlbnQgI3NpZGViYXItdG9kYXkge1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyIGJvZHkgI2NvbnRlbnQgI3NpZGViYXItY2FsZW5kYXIge1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyIGJvZHkgI2NvbnRlbnQgI3NpZGViYXItcHJvamVjdHMge1xcbiAgZ3JpZC1yb3c6IDQvNTtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyICNzaWRlYmFyLWxpc3Qge1xcbiAgZ3JpZC1yb3c6IDUvNjtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyICNzaWRlYmFyLWxpc3QgYnV0dG9uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IFxcXCJibGFja1xcXCI7XFxuICBib3JkZXItd2lkdGg6IFxcXCJtZWRpdW1cXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIHBhZGRpbmctbGVmdDogMjAlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyICNzaWRlYmFyLWxpc3QgYnV0dG9uIGltZyB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcbmJvZHkgI2NvbnRlbnQgI3NpZGViYXIgYm9keSAjY29udGVudCAjc2lkZWJhci1hZGQge1xcbiAgZ3JpZC1yb3c6IDYvNztcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyIC5wcm9qZWN0cy1jbG9zZWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuYm9keSAjY29udGVudCAjc2lkZWJhciBkaXY6ZW1wdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsaXN0LXNwYXduO1xcbiAgICAgICAgICBhbmltYXRpb246IGxpc3Qtc3Bhd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogXFxcIlxcXCI7XFxuICBncmlkLXJvdzogMy80O1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIG1pbi13aWR0aDogNjV2dztcXG4gIG1pbi1oZWlnaHQ6IDV2aDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMDtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNyZXNldC1sYXlvdXQge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogXFxcIm5vbmVcXFwiO1xcbiAgYm9yZGVyLWNvbG9yOiBcXFwiYmxhY2tcXFwiO1xcbiAgYm9yZGVyLXdpZHRoOiBcXFwibWVkaXVtXFxcIjtcXG4gIHRvcDogYXV0bztcXG4gIHJpZ2h0OiAwJTtcXG4gIGJvdHRvbTogMCU7XFxuICBsZWZ0OiBhdXRvO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI3Jlc2V0LWxheW91dDpob3ZlciB7XFxuICB0b3A6IGF1dG87XFxuICByaWdodDogMiU7XFxuICBib3R0b206IDIlO1xcbiAgbGVmdDogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHNjYWxlOiAxMjAlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2luYm94IHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI3RvZGF5IHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggNTBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCBoMiwgYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCBoMywgYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IFxcXCJcXFwiO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNjYWxlbmRhci1tb250aCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IFxcXCJcXFwiO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNjYWxlbmRhci1tb250aCBidXR0b24ge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogXFxcIm5vbmVcXFwiO1xcbiAgYm9yZGVyLWNvbG9yOiBcXFwiYmxhY2tcXFwiO1xcbiAgYm9yZGVyLXdpZHRoOiBcXFwibWVkaXVtXFxcIjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgI2NhbGVuZGFyLWhlYWRlcnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjZGF5cy13cmFwcGVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBib3JkZXItY29sb3I6IFxcXCJibGFja1xcXCI7XFxuICBib3JkZXItd2lkdGg6IFxcXCJtZWRpdW1cXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZ2FwOiBcXFwiXFxcIjtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgI2RheXMtd3JhcHBlciAjY2FsZW5kYXItZGF5cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgNjVweCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCA2NXB4KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjZGF5cy13cmFwcGVyICNjYWxlbmRhci1kYXlzIGJ1dHRvbiB7XFxuICB3aWR0aDogNjVweDtcXG4gIGhlaWdodDogNjVweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjZGF5cy13cmFwcGVyICNjYWxlbmRhci1kYXlzIGJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNSU7XFxuICBib3JkZXItY29sb3I6IFxcXCJibGFja1xcXCI7XFxuICBib3JkZXItd2lkdGg6IFxcXCJtZWRpdW1cXFwiO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHNjYWxlOiAxMjAlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNkYXlzLXdyYXBwZXIgI2RheS1zZWxlY3RlZCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZGF5LXNwYXduO1xcbiAgICAgICAgICBhbmltYXRpb246IGRheS1zcGF3bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjE1cztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjE1cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjZGF5cy13cmFwcGVyICNkYXktc2VsZWN0ZWQgYnV0dG9uIHtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbiAgYm90dG9tOiBhdXRvO1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyIC5saXN0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IFxcXCJcXFwiO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgLmxpc3QtY29udGVudCAjYWRkLXRhc2sge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogXFxcIm5vbmVcXFwiO1xcbiAgYm9yZGVyLWNvbG9yOiBcXFwiYmxhY2tcXFwiO1xcbiAgYm9yZGVyLXdpZHRoOiBcXFwibWVkaXVtXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAubGlzdC1jb250ZW50ICNhZGQtdGFzayBpbWcge1xcbiAgaGVpZ2h0OiAzNnB4O1xcbn1cXG5ib2R5ICNjb250ZW50ICNndXR0ZXItY29sIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzaWRlYmFyLXNwYXduO1xcbiAgICAgICAgICBhbmltYXRpb246IHNpZGViYXItc3Bhd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBncmlkLXJvdzogMy80O1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgei1pbmRleDogMTtcXG59XFxuYm9keSAjY29udGVudCAjZ3V0dGVyLWNvbDpob3ZlciB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcXG59XFxuYm9keSAjY29udGVudCAjZ3V0dGVyLXJvdyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaGVhZGVyLXNwYXduO1xcbiAgICAgICAgICBhbmltYXRpb246IGhlYWRlci1zcGF3bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDJweDtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIHotaW5kZXg6IDI7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2d1dHRlci1yb3c6aG92ZXIge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBjdXJzb3I6IHJvdy1yZXNpemU7XFxufVxcbmJvZHkgLnBvcHVwLXNjcmVlbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcHJvbXB0LXNwYXduO1xcbiAgICAgICAgICBhbmltYXRpb246IHByb21wdC1zcGF3bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjI1cztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjI1cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5ib2R5IC5wb3B1cC1zY3JlZW4gLnBvcHVwLXByb21wdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaGVhZGVyLXNwYXduO1xcbiAgICAgICAgICBhbmltYXRpb246IGhlYWRlci1zcGF3bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBib3JkZXItY29sb3I6IFxcXCJibGFja1xcXCI7XFxuICBib3JkZXItd2lkdGg6IFxcXCJtZWRpdW1cXFwiO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCAjMDAwMDAwO1xcbn1cXG5ib2R5IC5wb3B1cC1zY3JlZW4gLnBvcHVwLXByb21wdCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5ib2R5IC5wb3B1cC1zY3JlZW4gLnBvcHVwLXByb21wdCBmb3JtIC5pbnB1dC1maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IFxcXCJcXFwiO1xcbn0vKiMgc291cmNlTWFwcGluZ1VSTD1tYWluLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zY3NzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9kaXN0L2Nzcy9tYWluLmNzc1wiLFwid2VicGFjazovLy4vc2Nzcy9fYW5pbWF0aW9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zY3NzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3Njc3MvX2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zY3NzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc2Nzcy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3Njc3MvX3R5cG9ncmFwaHkuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNHSjs7QUNOQTtFQUNJO0lBQ0ksNkJBQUE7RURTTjtFQ1JJO0lBQ0UsMkJBQUE7RURVTjtFQ1RJO0lBQ0UsMEJBQUE7RURXTjtBQUNGOztBQ2xCQTtFQUNJO0lBQ0ksNkJBQUE7RURTTjtFQ1JJO0lBQ0UsMkJBQUE7RURVTjtFQ1RJO0lBQ0UsMEJBQUE7RURXTjtBQUNGO0FDUkE7RUFDSTtJQUNJLDZCQUFBO0VEVU47RUNSRTtJQUNJLDJCQUFBO0VEVU47RUNSRTtJQUNJLDBCQUFBO0VEVU47QUFDRjtBQ25CQTtFQUNJO0lBQ0ksNkJBQUE7RURVTjtFQ1JFO0lBQ0ksMkJBQUE7RURVTjtFQ1JFO0lBQ0ksMEJBQUE7RURVTjtBQUNGO0FDUEE7RUFDSTtJQUNJLDZCQUFBO0VEU047RUNQRTtJQUNJLDBCQUFBO0VEU047QUFDRjtBQ2ZBO0VBQ0k7SUFDSSw2QkFBQTtFRFNOO0VDUEU7SUFDSSwwQkFBQTtFRFNOO0FBQ0Y7QUNOQTtFQUNJO0lBQ0ksV0FBQTtFRFFOO0VDUEk7SUFDRSxhQUFBO0VEU047QUFDRjtBQ2RBO0VBQ0k7SUFDSSxXQUFBO0VEUU47RUNQSTtJQUNFLGFBQUE7RURTTjtBQUNGO0FDTkE7RUFDSTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VEUU47RUNQSTtJQUNFLE9BQUE7SUFDQSxRQUFBO0VEU047QUFDRjtBQ2hCQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFVBQUE7RURRTjtFQ1BJO0lBQ0UsT0FBQTtJQUNBLFFBQUE7RURTTjtBQUNGO0FDTkE7RUFDSTtJQUNJLGFBQUE7RURRTjtFQ1BJO0lBQ0UsV0FBQTtFRFNOO0FBQ0Y7QUNkQTtFQUNJO0lBQ0ksYUFBQTtFRFFOO0VDUEk7SUFDRSxXQUFBO0VEU047QUFDRjtBQ05BO0VBQ0k7SUFDSSxTQUFBO0VEUU47RUNQSTtJQUNFLE9BQUE7RURTTjtBQUNGO0FDZEE7RUFDSTtJQUNJLFNBQUE7RURRTjtFQ1BJO0lBQ0UsT0FBQTtFRFNOO0FBQ0Y7QUVyRUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsa0NDRk87RURHUCxZQ0RTO0VERVQsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0FGc0VKOztBRW5FQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7QUZzRUo7O0FFbkVBO0VBQ0ksNEJBQUE7RUFDQSwrQkFBQTtBRnNFSjs7QUl0RkE7RUNzQkksb0JDMUJRO0VEMkJSLGdCQUYyQztBTHNFL0M7O0FJdkZBO0VDSEksYUFBQTtFQUNBLHVCREdjO0VDRmQsMEJERW1CO0VBQ25CLDJCRFhTO0VDWVQsa0JBQUE7QUo0Rko7QUkxRkk7RUNSQSxhQUFBO0VBQ0EsK0JEUWtCO0VDUGxCLGtDRE8rQjtFQUMzQixVQUFBO0FKOEZSO0FJNUZRO0VDNEJKLCtCRDNCMkI7VUMyQjNCLHVCRDNCMkI7RUM0QjNCLDhCRDVCeUM7VUM0QnpDLHNCRDVCeUM7RUM2QnpDLHFDRDdCNkM7VUM2QjdDLDZCRDdCNkM7RUNyQjdDLGFBQUE7RUFDQSxtQkRxQnNCO0VDcEJ0Qiw2QkRvQjJCO0VDbkIzQixtQkRtQnlDO0VDbEJ6QyxPQUFBO0VBVUEsYURTMEI7RUNSMUIsaUJEUWtDO0VBQzFCLHFCRHRCQztFQ3VCRCxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FKcUdaO0FJbkdZO0VBQ0ksZUFBQTtBSnFHaEI7QUlsR1k7RUNqQ1IsYUFBQTtFQUNBLG1CRGlDMEI7RUNoQzFCLHVCRGdDK0I7RUMvQi9CLG1CRCtCdUM7RUM5QnZDLFNBQUE7QUxzSUo7QUl0R2dCO0VDS1osa0JESmdDO0VDS2hDLGtCRExzQztFQ010QyxxQkFIaUU7RUFJakUsc0JBSmdEO0VBWGhELDBCQzNCUztFRDRCVCxlRFEyQztFQUMzQixrQkFBQTtBSjRHcEI7QUkxR29CO0VBQ0ksVUFBQTtBSjRHeEI7QUl4R2dCO0VDOUNaLGFBQUE7RUFDQSxtQkQ4QzhCO0VDN0M5Qix1QkQ2Q21DO0VDNUNuQyxtQkQ0QzJDO0VDM0MzQyxTQUFBO0FMeUpKO0FJM0dnQjtFQ2xEWixhQUFBO0VBQ0EsbUJEa0Q4QjtFQ2pEOUIsdUJEaURtQztFQ2hEbkMsbUJEZ0QyQztFQy9DM0MsT0FBQTtFRGdEZ0Isa0JBQUE7RUFDQSxpQkFBQTtBSmlIcEI7QUkvR29CO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBSmlIeEI7QUkzR1E7RUNmSixnQ0RnQjJCO1VDaEIzQix3QkRnQjJCO0VDZjNCLDhCRGUwQztVQ2YxQyxzQkRlMEM7RUNkMUMscUNEYzhDO1VDZDlDLDZCRGM4QztFQ3hEOUMsYUFBQTtFQUNBLHlFRHdEc0I7RUN2RHRCLDBCRHVENkU7RUNuRDdFLGFEb0QwQjtFQ25EMUIsZ0JEbURrQztFQUMxQixxQkRqRUM7RUNrRUQsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUprSFo7QUloSFk7RUNqQ1Isa0JEa0M0QjtFQ2pDNUIsbUJEaUNrQztFQ2hDbEMscUJBSGlFO0VBSWpFLHNCQUpnRDtFQXhDaEQsYUFBQTtFQUNBLG1CRDJFMEI7RUMxRTFCLDJCRDBFK0I7RUN6RS9CLG1CRHlFMkM7RUN4RTNDLFNBQUE7RUF5QkEsb0JEZ0QwQjtFQy9DMUIsa0JEK0NtQztFQUN2Qiw0QkQvRUY7QUh5TWQ7QUl4SGdCO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUowSHBCO0FJdEhZO0VDeEVSLGFEeUU4QjtFQ3hFOUIsaUJEd0VzQztBSnlIMUM7QUl0SFk7RUM1RVIsYUQ2RThCO0VDNUU5QixpQkQ0RXNDO0FKeUgxQztBSXRIWTtFQ2hGUixhRGlGOEI7RUNoRjlCLGlCRGdGc0M7QUp5SDFDO0FJdEhZO0VDcEZSLGFEcUY4QjtFQ3BGOUIsaUJEb0ZzQztBSnlIMUM7QUl0SFk7RUN4RlIsYUR5RjhCO0VDeEY5QixpQkR3RnNDO0VBQzFCLFlBQUE7QUp5SGhCO0FJdkhnQjtFQ2pFWixrQkRrRWdDO0VDakVoQyxtQkRpRXNDO0VDaEV0QyxxQkFIaUU7RUFJakUsc0JBSmdEO0VBeENoRCxhQUFBO0VBQ0EsbUJEMkc4QjtFQzFHOUIsdUJEMEdtQztFQ3pHbkMsbUJEeUcyQztFQ3hHM0MsUUFBQTtFQXlCQSwwQkMzQlM7RUQ0QlQsa0JEK0UyQztFQUMzQixrQ0QvR047RUNnSE0saUJBQUE7QUppSXBCO0FJL0hvQjtFQUNJLFlBQUE7QUppSXhCO0FJNUhZO0VDekdSLGFEMEc4QjtFQ3pHOUIsaUJEeUdzQztBSitIMUM7QUk1SFk7RUFDSSxhQUFBO0FKOEhoQjtBSTNIWTtFQUNJLGFBQUE7QUo2SGhCO0FJekhRO0VDcEZKLDZCRHFGMkI7VUNyRjNCLHFCRHFGMkI7RUNwRjNCLGdDRG9GdUM7VUNwRnZDLHdCRG9GdUM7RUNuRnZDLHFDRG1GNkM7VUNuRjdDLDZCRG1GNkM7RUNySTdDLGFBQUE7RUFDQSxtQkRxSXNCO0VDcEl0Qix1QkRvSTJCO0VDbkkzQixtQkRtSW1DO0VDbEluQyxPQUFBO0VBVUEsYUR5SDBCO0VDeEgxQixnQkR3SGtDO0VDL0dsQyxlRGdIMEI7RUMvRzFCLGVEK0dnQztFQUN4QixpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBSm1JWjtBSWpJWTtFQ3BHUixrQkRxRzRCO0VDcEc1QixxQkFGaUM7RUFHakMscUJBSGlFO0VBSWpFLHNCQUpnRDtFQU5oRCxTRDZHOEI7RUM1RzlCLFNENEdvQztFQzNHcEMsVUQyR3dDO0VDMUd4QyxVRDBHNEM7RUFDaEMsNEJEakpGO0VDa0pFLGtCQUFBO0VBQ0EsaUJBQUE7QUp5SWhCO0FJdklnQjtFQ2xIWixTRG1Ia0M7RUNsSGxDLFNEa0h3QztFQ2pIeEMsVURpSDRDO0VDaEg1QyxVRGdIZ0Q7RUFDaEMsZUFBQTtFQUNBLFdBQUE7QUo0SXBCO0FJeElZO0VDeElSLFdEeUkwQjtFQ3hJMUIsWUR3SWdDO0VDNUpoQyxhQUFBO0VBQ0Esc0JENEowQjtFQzNKMUIsdUJEMkprQztFQzFKbEMsbUJEMEowQztFQ3pKMUMsT0FBQTtFRDBKWSxrQkFBQTtBSitJaEI7QUk1SVk7RUM5SVIsV0QrSTBCO0VDOUkxQixZRDhJZ0M7RUNsS2hDLGFBQUE7RUFDQSxzQkRrSzBCO0VDaksxQix1QkRpS2tDO0VDaEtsQyxtQkRnSzBDO0VDL0oxQyxPQUFBO0VEZ0tZLGtCQUFBO0FKbUpoQjtBSWhKWTtFQ3ZLUixhQUFBO0VBQ0Esc0JEdUswQjtFQ3RLMUIsdUJEc0trQztFQ3JLbEMsbUJEcUswQztFQ3BLMUMsT0FBQTtFRHFLWSxrQkFBQTtBSnNKaEI7QUlwSmdCO0VDeEpaLFdEeUo4QjtFQ3hKOUIsWUR3Sm9DO0VDcEtwQyxhQUFBO0VBQ0EsaUNEb0s4QjtFQ25LOUIsMEJEbUs2QztFQUM3QixrQkFBQTtBSnlKcEI7QUl2Sm9CO0VDaExoQixhQUFBO0VBQ0EsbUJEZ0xrQztFQy9LbEMsdUJEK0t1QztFQzlLdkMsbUJEOEsrQztFQzdLL0MsT0FBQTtBTDBVSjtBSTFKb0I7RUNwTGhCLGFBQUE7RUFDQSxtQkRvTGtDO0VDbkxsQyw4QkRtTHVDO0VDbEx2QyxtQkRrTHNEO0VDakx0RCxPQUFBO0VBVUEsYUR3S3NDO0VDdkt0QyxpQkR1SzhDO0FKaUtsRDtBSS9Kd0I7RUMvSXBCLGtCRGdKd0M7RUMvSXhDLHFCQUZpQztFQUdqQyxxQkFIaUU7RUFJakUsc0JBSmdEO0VEa0p4QixhQUFBO0FKb0s1QjtBSWhLb0I7RUN0TGhCLGFBQUE7RUFDQSx1QkRzTGtDO0VDckxsQyxxQ0RxTHVDO0VDakx2QyxhRGtMc0M7RUNqTHRDLGlCRGlMOEM7QUpxS2xEO0FJbEtvQjtFQzFKaEIsa0JEMkpvQztFQzFKcEMsbUJEMEowQztFQ3pKMUMscUJBSGlFO0VBSWpFLHNCQUpnRDtFQXhDaEQsYUFBQTtFQUNBLG1CRG9Na0M7RUNuTWxDLHVCRG1NdUM7RUNsTXZDLG9CRGtNK0M7RUNqTS9DLE9BQUE7RUFVQSxhRHdMc0M7RUN2THRDLGlCRHVMOEM7RUFDMUIsa0JBQUE7RUFDQSxnQkFBQTtBSjRLeEI7QUkxS3dCO0VDbE1wQixhQUFBO0VBQ0EsbUNEa01zQztFQ2pNdEMsc0NEaU11RDtFQUMvQixrQkFBQTtBSjhLNUI7QUk1SzRCO0VDM0x4QixXRDRMMEM7RUMzTDFDLFlEMkxnRDtFQ2xMaEQsb0JEbUwwQztFQ2xMMUMsaUJEa0xtRDtFQUN2QixvQ0FBQTtFQUNBLGlCQUFBO0FKZ0xoQztBSTlLZ0M7RUMzSzVCLGtCRDRLZ0Q7RUMzS2hELGtCRDJLc0Q7RUMxS3RELHFCQUhpRTtFQUlqRSxzQkFKZ0Q7RUFYaEQsb0JEeUw4QztFQ3hMOUMsaUJEd0x1RDtFQUN2QixXQUFBO0FKb0xwQztBSS9Ld0I7RUM1S3BCLDRCRDZLMkM7VUM3SzNDLG9CRDZLMkM7RUM1SzNDLGlDRDRLc0Q7VUM1S3RELHlCRDRLc0Q7RUMzS3RELHFDRDJLNkQ7VUMzSzdELDZCRDJLNkQ7RUMzTDdELE1ENEwwQztFQzNMMUMsUUQyTDZDO0VDMUw3QyxTRDBMZ0Q7RUN6TGhELE9EeUxtRDtFQUMzQiwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBSnNMNUI7QUlwTDRCO0VDak14QixNRGtNOEM7RUNqTTlDLFdEaU1pRDtFQ2hNakQsWURnTXVEO0VDL0x2RCxPRCtMNkQ7RUFDakMsa0JBQUE7QUp5TGhDO0FJbExZO0VDNU9SLGFBQUE7RUFDQSxzQkQ0TzBCO0VDM08xQix1QkQyT2tDO0VDMU9sQyxtQkQwTzBDO0VDek8xQyxPQUFBO0FMaWFKO0FJdExnQjtFQ3RNWixrQkR1TWdDO0VDdE1oQyxxQkFGaUM7RUFHakMscUJBSGlFO0VBSWpFLHNCQUpnRDtFQXhDaEQsYUFBQTtFQUNBLG1CRGdQOEI7RUMvTzlCLHVCRCtPbUM7RUM5T25DLG1CRDhPMkM7RUM3TzNDLFNBQUE7RUF5QkEsb0JEcU44QjtFQ3BOOUIsa0JEb051QztFQUN2QixrQkFBQTtBSmdNcEI7QUk5TG9CO0VBQ0ksWUFBQTtBSmdNeEI7QUkxTFE7RUM1TUosZ0NENk0yQjtVQzdNM0Isd0JENk0yQjtFQzVNM0IsOEJENE0wQztVQzVNMUMsc0JENE0wQztFQzNNMUMscUNEMk04QztVQzNNOUMsNkJEMk04QztFQzFPOUMsVUQyT3NCO0VDMU90QixZRDBPMkI7RUNoUDNCLGFEaVAwQjtFQ2hQMUIsZ0JEZ1BrQztFQUMxQixpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUpnTVo7QUk5TFk7RUNuUFIsV0RvUDBCO0VDblAxQixZRG1QZ0M7RUFDcEIsa0JBQUE7QUppTWhCO0FJN0xRO0VDNU5KLCtCRDZOMkI7VUM3TjNCLHVCRDZOMkI7RUM1TjNCLDhCRDROeUM7VUM1TnpDLHNCRDROeUM7RUMzTnpDLHFDRDJONkM7VUMzTjdDLDZCRDJONkM7RUMxUDdDLFdEMlBzQjtFQzFQdEIsV0QwUDRCO0VDaFE1QixhRGlRMEI7RUNoUTFCLGlCRGdRa0M7RUFDMUIsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FKbU1aO0FJak1ZO0VDblFSLFdEb1EwQjtFQ25RMUIsWURtUWdDO0VBQ3BCLGtCQUFBO0FKb01oQjtBSS9MSTtFQzdPQSwrQkQ4T3VCO1VDOU92Qix1QkQ4T3VCO0VDN092QixpQ0Q2T3FDO1VDN09yQyx5QkQ2T3FDO0VDNU9yQyxxQ0Q0TzRDO1VDNU81Qyw2QkQ0TzRDO0VDM1E1QyxXRDRRa0I7RUMzUWxCLFlEMlF3QjtFQy9SeEIsYUFBQTtFQUNBLG1CRCtSa0I7RUM5UmxCLHVCRDhSdUI7RUM3UnZCLG1CRDZSK0I7RUM1Ui9CLE9BQUE7RUQ2UkksOEJEalNFO0VDa1NGLGtCQUFBO0VBQ0EsVUFBQTtBSndNUjtBSXRNUTtFQ3JQSiwrQkRzUDJCO1VDdFAzQix1QkRzUDJCO0VDclAzQixnQ0RxUHlDO1VDclB6Qyx3QkRxUHlDO0VDcFB6QyxxQ0RvUCtDO1VDcFAvQyw2QkRvUCtDO0VDN1AvQyxrQkQ4UHdCO0VDN1B4QixtQkQ2UDhCO0VDNVA5QixxQkFIaUU7RUFJakUsc0JBSmdEO0VBckJoRCxZRHFSc0I7RUNwUnRCLGFEb1I2QjtFQ3hTN0IsYUFBQTtFQUNBLHNCRHdTc0I7RUN2U3RCLHVCRHVTOEI7RUN0UzlCLG1CRHNTc0M7RUNyU3RDLFFBQUE7RURzU1EsaUJBQUE7RUFDQSxnQ0FBQTtBSmtOWjtBSWhOWTtFQzdTUixhQUFBO0VBQ0Esc0JENlMwQjtFQzVTMUIsNkJENFNrQztFQzNTbEMsbUJEMlNnRDtFQzFTaEQsU0FBQTtBTGdnQko7QUlwTmdCO0VDaFRaLGFBQUE7RUFDQSxtQkRnVDhCO0VDL1M5Qiw4QkQrU21DO0VDOVNuQyxtQkQ4U2tEO0VDN1NsRCxPQUFBO0FMdWdCSixDQUFBLG1DQUFBXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxlbmRhcihwcm9qZWN0RGF0YSkge1xuICAgIGxldCBjdXJyZW50TW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XG5cbiAgICAvLyBBZGRzIGEgbmV3IGRheSB0byB0aGUgY2FsZW5kYXJcbiAgICBmdW5jdGlvbiBuZXdEYXkoZGF5TnVtKSB7XG4gICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRheS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhbGVuZGFyLWRheVwiKTtcbiAgICAgICAgY29uc3QgZGF5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgZGF5VGV4dC50ZXh0Q29udGVudCA9IGRheU51bTtcbiAgICAgICAgZGF5LmFwcGVuZENoaWxkKGRheVRleHQpO1xuICAgICAgICByZXR1cm4gZGF5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE1vbnRoKG1vbnRoKSB7XG4gICAgICAgIGNvbnN0IG1vbnRocyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9udGgtdGV4dFwiKS50ZXh0Q29udGVudCA9IG1vbnRoc1ttb250aF07XG5cbiAgICAgICAgc2V0RGF5cyhtb250aCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RGF5cyhtb250aCkge1xuICAgICAgICBsZXQgbnVtRGF5cyA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb250aHMgPSBbMywgNSwgOCwgMTBdO1xuXG4gICAgICAgICAgICBpZiAobW9udGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMjg7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1vbnRocy5pbmNsdWRlcyhtb250aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMzA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAzMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtRGF5czsgaSsrKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGVuZGFyLWRheXNcIikuYXBwZW5kQ2hpbGQobmV3RGF5KGkpKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsZW5kYXItZGF5c1wiKS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1kYXlcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdGhlIHByZXZpb3VzIG1vbnRoJ3MgZmluYWwgZGF5cyB0byBmaWxsIHRoZSBjYWxlbmRhclxuICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIG5ld0RhdGUuc2V0TW9udGgobW9udGgpO1xuXG4gICAgICAgIGNvbnN0IGRheU9mZnNldEJlZm9yZSA9IChuZXdEYXRlLmdldERheSgpICsgMSkgLSAobmV3RGF0ZS5nZXREYXRlKCkgJSA3KTtcbiAgICAgICAgbmV3RGF0ZS5zZXREYXRlKDApO1xuICAgICAgICBsZXQgcHJldk9mZnNldCA9IG5ld0RhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5T2Zmc2V0QmVmb3JlOyBpKyspIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsZW5kYXItZGF5c1wiKS5wcmVwZW5kKG5ld0RheShwcmV2T2Zmc2V0KSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGVuZGFyLWRheXNcIikuZmlyc3RDaGlsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImRhcmtncmV5XCI7XG4gICAgICAgICAgICBwcmV2T2Zmc2V0LS07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdGhlIG5leHQgbW9udGgncyBiZWdpbm5pbmcgZGF5cyB0byBmaWxsIHRoZSBjYWxlbmRhclxuICAgICAgICBjb25zdCBkYXlPZmZzZXRBZnRlciA9IDQyIC0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxlbmRhci1kYXlzXCIpLmNoaWxkRWxlbWVudENvdW50O1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlPZmZzZXRBZnRlcjsgaSsrKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGVuZGFyLWRheXNcIikuYXBwZW5kKG5ld0RheShpICsgMSkpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxlbmRhci1kYXlzXCIpLmxhc3RDaGlsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImRhcmtncmV5XCI7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRCdXR0b25zKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VsZWN0RGF5KG1vbnRoLCBkYXkpIHtcbiAgICAgICAgY29uc3QgZGF5U2VsZWN0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkYXlTZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRheS1zZWxlY3RlZFwiKTtcbiAgICAgICAgY29uc3QgZGF5TnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgICAgICBkYXlOdW0udGV4dENvbnRlbnQgPSBkYXk7XG4gICAgICAgIGRheVNlbGVjdGVkLmFwcGVuZENoaWxkKGRheU51bSk7XG5cbiAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjbG9zZS5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICAgICAgY2xvc2UuaWQgPSBcImNsb3NlLWRheVwiO1xuICAgICAgICBjbG9zZS5jbGFzc05hbWUgPSBcImJ1dHRvbi1jbG9zZVwiO1xuICAgICAgICBkYXlTZWxlY3RlZC5hcHBlbmRDaGlsZChjbG9zZSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXlzLXdyYXBwZXJcIikuYXBwZW5kQ2hpbGQoZGF5U2VsZWN0ZWQpO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtZGF5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF5LXNlbGVjdGVkXCIpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTaG93IGV2ZW50cyBvZiBhIGdpdmVuIGRheSBpZiBjbGlja2VkIG9uXG4gICAgZnVuY3Rpb24gc2V0QnV0dG9ucygpIHtcbiAgICAgICAgZm9yIChjb25zdCBidXR0b24gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmUtZGF5XCIpKSB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGF5ID0gYnV0dG9uLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgc2VsZWN0RGF5KGN1cnJlbnRNb250aCwgc2VsZWN0ZWREYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBlbmQgY2FsZW5kYXIgdG8gRE9NXG4gICAgY29uc3QgY2FsZW5kYXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYWxlbmRhcldyYXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYWxlbmRhclwiKTtcbiAgICBjYWxlbmRhcldyYXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWNvbnRlbnRcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3QtdGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNhbGVuZGFyXCI7XG4gICAgY2FsZW5kYXJXcmFwLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGNhbGVuZGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYWxlbmRhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbGVuZGFyLWdyaWRcIik7XG5cbiAgICAvLyBBcHBlbmQgY2FsZW5kYXIgbW9udGggdG8gRE9NXG4gICAgY29uc3QgY2FsTW9udGhXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYWxNb250aFdyYXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYWxlbmRhci1tb250aFwiKTtcblxuICAgIGNvbnN0IG1vbnRoQXJyb3dMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtb250aEFycm93TGVmdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbGVuZGFyLWxlZnRcIik7XG4gICAgbW9udGhBcnJvd0xlZnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb250aC10b2dnbGVcIik7XG4gICAgY29uc3QgYXJyb3dMZWZ0UGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBhcnJvd0xlZnRQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9rZXlib2FyZF9hcnJvd19sZWZ0LnBuZ1wiKTtcbiAgICBtb250aEFycm93TGVmdC5hcHBlbmRDaGlsZChhcnJvd0xlZnRQaWMpO1xuICAgIGNhbE1vbnRoV3JhcC5hcHBlbmRDaGlsZChtb250aEFycm93TGVmdCk7XG5cbiAgICBjb25zdCBjYWxNb250aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjYWxNb250aC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vbnRoLXRleHRcIik7XG4gICAgY2FsTW9udGhXcmFwLmFwcGVuZENoaWxkKGNhbE1vbnRoKTtcblxuICAgIGNvbnN0IG1vbnRoQXJyb3dSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbW9udGhBcnJvd1JpZ2h0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FsZW5kYXItcmlnaHRcIik7XG4gICAgbW9udGhBcnJvd1JpZ2h0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9udGgtdG9nZ2xlXCIpO1xuICAgIGNvbnN0IGFycm93UmlnaHRQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFycm93UmlnaHRQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9rZXlib2FyZF9hcnJvd19yaWdodC5wbmdcIik7XG4gICAgbW9udGhBcnJvd1JpZ2h0LmFwcGVuZENoaWxkKGFycm93UmlnaHRQaWMpO1xuICAgIGNhbE1vbnRoV3JhcC5hcHBlbmRDaGlsZChtb250aEFycm93UmlnaHQpO1xuXG4gICAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQoY2FsTW9udGhXcmFwKTtcblxuICAgIC8vIEFwcGVuZCBjYWxlbmRhciB3ZWVrZGF5IGhlYWRlcnMgdG8gRE9NXG4gICAgY29uc3QgY2FsSGVhZGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FsSGVhZGVycy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbGVuZGFyLWhlYWRlcnNcIik7XG5cbiAgICBjb25zdCB3ZWVrZGF5cyA9IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZXNcIiwgXCJXZWRcIiwgXCJUaHVyc1wiLCBcIkZyaVwiLCBcIlNhdFwiXTtcblxuICAgIGZvciAoY29uc3Qgd2Vla2RheSBvZiB3ZWVrZGF5cykge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhbGVuZGFyLWhlYWRlclwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gd2Vla2RheTtcbiAgICAgICAgY2FsSGVhZGVycy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH1cblxuICAgIGNhbGVuZGFyLmFwcGVuZENoaWxkKGNhbEhlYWRlcnMpO1xuXG4gICAgLy8gQXBwZW5kIHNwYWNlIGZvciBjYWxlbmRhciBkYXlzIHRvIERPTVxuICAgIGNvbnN0IGNhbERheVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhbERheVdyYXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXlzLXdyYXBwZXJcIik7XG5cbiAgICBjb25zdCBjYWxEYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYWxEYXlzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FsZW5kYXItZGF5c1wiKTtcblxuICAgIGNhbERheVdyYXAuYXBwZW5kQ2hpbGQoY2FsRGF5cyk7XG4gICAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQoY2FsRGF5V3JhcCk7XG4gICAgY2FsZW5kYXJXcmFwLmFwcGVuZENoaWxkKGNhbGVuZGFyKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LXdyYXBwZXJcIik7XG4gICAgbGlzdC5pbnNlcnRCZWZvcmUoY2FsZW5kYXJXcmFwLCBsaXN0LmNoaWxkcmVuWzBdKTtcblxuICAgIC8vIFNldCBpbml0aWFsIGNhbGVuZGFyIG1vbnRoXG4gICAgc2V0TW9udGgobmV3IERhdGUoKS5nZXRNb250aCgpKTtcblxuICAgIC8vIEFsbG93IGFycm93IGJ1dHRvbnMgdG8gY29udHJvbCB0aGUgdmlzaWJsZSBjYWxlbmRhciBtb250aFxuICAgIGZvciAoY29uc3QgYnV0dG9uIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9udGgtdG9nZ2xlXCIpKSB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsZW5kYXItZGF5c1wiKS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxlbmRhci1kYXlzXCIpLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IChlLnRhcmdldC50YWdOYW1lID09PSBcIklNR1wiID8gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCA6IGUudGFyZ2V0LmlkKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gXCJjYWxlbmRhci1sZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50TW9udGggPSAoKGN1cnJlbnRNb250aCAtIDEpICsgMTIpICUgMTI7XG4gICAgICAgICAgICAgICAgc2V0TW9udGgoY3VycmVudE1vbnRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudE1vbnRoID0gKChjdXJyZW50TW9udGggKyAxKSArIDEyKSAlIDEyO1xuICAgICAgICAgICAgICAgIHNldE1vbnRoKGN1cnJlbnRNb250aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgSW5ib3ggZnJvbSBcIi4vaW5ib3guanNcIjtcbmltcG9ydCBUb2RheSBmcm9tIFwiLi90b2RheS5qc1wiO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuL2NhbGVuZGFyLmpzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnQocHJvamVjdERhdGEpIHtcbiAgICBjb25zdCBjb250ZW50V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudFdyYXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50LXdyYXBwZXJcIik7XG5cbiAgICBjb25zdCByZXNldExheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVzZXRMYXlvdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXNldC1sYXlvdXRcIik7XG4gICAgcmVzZXRMYXlvdXQuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJSZXNldCBMYXlvdXRcIik7XG4gICAgY29uc3QgcmVzZXRQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHJlc2V0UGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvdGVhbV9kYXNoYm9hcmQucG5nXCIpO1xuICAgIHJlc2V0TGF5b3V0LmFwcGVuZENoaWxkKHJlc2V0UGljKTtcbiAgICBjb250ZW50V3JhcC5hcHBlbmRDaGlsZChyZXNldExheW91dCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGNvbnRlbnRXcmFwKTtcblxuICAgIEluYm94KHByb2plY3REYXRhKTtcblxuICAgIGZvciAoY29uc3QgbGluayBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItbGlua1wiKSkge1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC13cmFwcGVyXCIpLmZpcnN0Q2hpbGQ7XG5cbiAgICAgICAgICAgIGlmIChldmVudFRhcmdldC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpICE9PSBjdXJyZW50Q29udGVudC5pZCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiY29udGVudC1kZXNwYXduXCI7XG4gICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuMjVzXCI7XG4gICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQuc3R5bGUuYW5pbWF0aW9uRmlsbE1vZGUgPSBcImZvcndhcmRzXCI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0sIDI1MCk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGV2ZW50VGFyZ2V0LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdJbmJveCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5ib3gocHJvamVjdERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnVG9kYXknOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvZGF5KHByb2plY3REYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NhbGVuZGFyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYWxlbmRhcihwcm9qZWN0RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtd3JhcHBlclwiKS5maXJzdENoaWxkO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImNvbnRlbnQtcmVzcGF3blwiO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29udGVudC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMC4yNXNcIjtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQuc3R5bGUuYW5pbWF0aW9uRmlsbE1vZGUgPSBcImZvcndhcmRzXCI7XG4gICAgICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldC1sYXlvdXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gXCJcIjtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBUYXNrKHByb2plY3REYXRhKTtcbiAgICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHdXR0ZXJzKCkge1xuICAgIGNvbnN0IGd1dHRlckNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3V0dGVyQ29sLmlkID0gXCJndXR0ZXItY29sXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGd1dHRlckNvbCk7XG5cbiAgICBjb25zdCBndXR0ZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGd1dHRlclJvdy5pZCA9IFwiZ3V0dGVyLXJvd1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChndXR0ZXJSb3cpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyVGl0bGVzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLXRpdGxlc1wiKTtcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlclRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLXRpdGxlXCIpO1xuICAgIGhlYWRlclRpdGxlLmlubmVySFRNTCA9IFwiRE9fSVRcIjtcbiAgICBoZWFkZXJUaXRsZXMuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSBcIlRoZSB0by1kbyBhcHAgZm9yIG1hbmFnaW5nIHlvdXIgbGlmZVwiO1xuICAgIGhlYWRlclRpdGxlcy5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlcyk7XG5cbiAgICBjb25zdCBoZWFkZXJCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJCdXR0b25zLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLWJ1dHRvbnNcIik7XG5cbiAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbG9naW5CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dpbi1idXR0b25cIik7XG4gICAgbG9naW5CdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoZWFkZXItYnV0dG9uXCIpO1xuXG4gICAgY29uc3QgbG9naW5QaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxvZ2luUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvYWNjb3VudF9jaXJjbGUucG5nXCIpO1xuICAgIGxvZ2luQnV0dG9uLmFwcGVuZENoaWxkKGxvZ2luUGljKTtcblxuICAgIGNvbnN0IGxvZ2luVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxvZ2luVGV4dC50ZXh0Q29udGVudCA9IFwiU2lnbiBJblwiO1xuICAgIGxvZ2luQnV0dG9uLmFwcGVuZENoaWxkKGxvZ2luVGV4dCk7XG4gICAgaGVhZGVyQnV0dG9ucy5hcHBlbmRDaGlsZChsb2dpbkJ1dHRvbik7XG5cbiAgICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvbWVudS5wbmdcIik7XG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1idXR0b25cIik7XG4gICAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhlYWRlci1idXR0b25cIik7XG4gICAgbWVudUJ1dHRvbi5hcHBlbmRDaGlsZChtZW51SW1nKTtcbiAgICBoZWFkZXJCdXR0b25zLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJCdXR0b25zKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluYm94KHByb2plY3REYXRhKSB7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5ib3hcIik7XG4gICAgaW5ib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWNvbnRlbnRcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3QtdGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza3NcIik7XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdERhdGEpIHtcbiAgICAgICAgaWYgKHByb2plY3Quc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGFzayBvZiBwcm9qZWN0LnRhc2tzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tcIik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICB0YXNrVGV4dC50ZXh0Q29udGVudCA9IHRhc2s7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XG5cbiAgICAgICAgICAgICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluYm94LmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFza1wiKTtcblxuICAgIGNvbnN0IGFkZFRhc2tQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFkZFRhc2tQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9hZGRfdGFzay5wbmdcIik7XG4gICAgYWRkVGFzay5hcHBlbmRDaGlsZChhZGRUYXNrUGljKTtcblxuICAgIGNvbnN0IGFkZFRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWRkVGFza1RleHQudGV4dENvbnRlbnQgPSBcIkFkZCBOZXcgVGFza1wiO1xuICAgIGFkZFRhc2suYXBwZW5kQ2hpbGQoYWRkVGFza1RleHQpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGFkZFRhc2spO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC13cmFwcGVyXCIpO1xuICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGluYm94LCBjb250ZW50LmNoaWxkcmVuWzBdKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbih1c2VyRGF0YSkge1xuICAgIGNvbnN0IGxvZ2luU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dpblNjcmVlbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLXNjcmVlblwiKTtcbiAgICBsb2dpblNjcmVlbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvcHVwLXNjcmVlblwiKTtcblxuICAgIGNvbnN0IGxvZ2luUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dpblByb21wdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLXByb21wdFwiKTtcbiAgICBsb2dpblByb21wdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvcHVwLXByb21wdFwiKTtcblxuICAgIGNvbnN0IGxvZ2luSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxvZ2luSGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9naW4taGVhZGVyXCIpO1xuICAgIGxvZ2luSGVhZGVyLnRleHRDb250ZW50ID0gXCJTaWduIGluIHRvIERvX0l0XCI7XG4gICAgbG9naW5Qcm9tcHQuYXBwZW5kQ2hpbGQobG9naW5IZWFkZXIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgY29uc3QgbG9nTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nTmFtZS5jbGFzc05hbWUgPSBcImlucHV0LWZpZWxkXCI7XG5cbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lOlwiO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb2dpbi1uYW1lXCIpO1xuICAgIGxvZ05hbWUuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcblxuICAgIGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dpbi1uYW1lXCIpO1xuICAgIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibG9naW4tbmFtZVwiKTtcbiAgICBsb2dOYW1lLmFwcGVuZENoaWxkKG5hbWVGaWVsZCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsb2dOYW1lKTtcblxuICAgIGNvbnN0IGxvZ1Bhc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ1Bhc3MuY2xhc3NOYW1lID0gXCJsb2dpbi1maWVsZFwiO1xuXG4gICAgY29uc3QgcGFzc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHBhc3NMYWJlbC50ZXh0Q29udGVudCA9IFwiUGFzc3dvcmQ6XCI7XG4gICAgcGFzc0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvZ2luLXBhc3NcIik7XG4gICAgbG9nUGFzcy5hcHBlbmRDaGlsZChwYXNzTGFiZWwpO1xuXG4gICAgY29uc3QgcGFzc0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHBhc3NGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLXBhc3NcIik7XG4gICAgcGFzc0ZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJsb2dpbi1wYXNzXCIpO1xuICAgIGxvZ1Bhc3MuYXBwZW5kQ2hpbGQocGFzc0ZpZWxkKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ1Bhc3MpO1xuXG4gICAgY29uc3QgbG9naW5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbG9naW5TdWJtaXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dpbi1zdWJtaXRcIik7XG4gICAgbG9naW5TdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBsb2dpblN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxPRyBJTlwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ2luU3VibWl0KTtcbiAgICBsb2dpblByb21wdC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IGNyZWF0ZUFjY291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjcmVhdGVBY2NvdW50LmlubmVySFRNTCA9IFwiTmV3IHVzZXI/IENyZWF0ZSBhbiBhY2NvdW50IGhlcmUhXCI7XG4gICAgbG9naW5Qcm9tcHQuYXBwZW5kQ2hpbGQoY3JlYXRlQWNjb3VudCk7XG5cbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2UuaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgY2xvc2UuaWQgPSBcImNsb3NlLWxvZ2luXCI7XG4gICAgY2xvc2UuY2xhc3NOYW1lID0gXCJidXR0b24tY2xvc2VcIjtcbiAgICBsb2dpblByb21wdC5hcHBlbmRDaGlsZChjbG9zZSk7XG5cbiAgICBsb2dpblNjcmVlbi5hcHBlbmRDaGlsZChsb2dpblByb21wdCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9naW5TY3JlZW4pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJFbnRlcmVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1uYW1lXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdXNlckNoZWNrID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgdXNlciBvZiB1c2VyRGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyLm5hbWUgPT09IHVzZXJFbnRlcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tYnV0dG9uXCIpLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gYEhlbGxvLCAke3VzZXJFbnRlcmVkfWA7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tc2NyZWVuXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB1c2VyQ2hlY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdXNlckNoZWNrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1wcm9tcHRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0Q29udGVudCA9IFwiVGhpcyB1c2VyIGRvZXMgbm90IGV4aXN0XCI7XG4gICAgICAgICAgICAgICAgcHJvbXB0Lmluc2VydEJlZm9yZShlcnJvciwgcHJvbXB0LmNoaWxkcmVuWzJdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1uYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tcGFzc1wiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbG9naW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1uYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tcGFzc1wiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLXNjcmVlblwiKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0RGF0YSkge1xuICAgIGNvbnN0IHByb2pTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2pTY3JlZW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qLXNjcmVlblwiKTtcbiAgICBwcm9qU2NyZWVuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicG9wdXAtc2NyZWVuXCIpO1xuXG4gICAgY29uc3QgcHJvalByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvalByb21wdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2otcHJvbXB0XCIpO1xuICAgIHByb2pQcm9tcHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb3B1cC1wcm9tcHRcIik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICBjb25zdCBsb2dQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dQcm9qLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXQtZmllbGRcIik7XG5cbiAgICBjb25zdCBwcm9qTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJvakxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2otbmFtZVwiKTtcbiAgICBwcm9qTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZTpcIjtcbiAgICBsb2dQcm9qLmFwcGVuZENoaWxkKHByb2pMYWJlbCk7XG5cbiAgICBjb25zdCBwcm9qRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJvakZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvai1uYW1lXCIpO1xuICAgIHByb2pGaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvai1uYW1lXCIpO1xuICAgIGxvZ1Byb2ouYXBwZW5kQ2hpbGQocHJvakZpZWxkKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ1Byb2opO1xuXG4gICAgY29uc3QgcHJvalN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcm9qU3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvai1zdWJtaXRcIik7XG4gICAgcHJvalN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHByb2pTdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJBREQgUFJPSkVDVFwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2pTdWJtaXQpO1xuICAgIHByb2pQcm9tcHQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2UuaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgY2xvc2UuaWQgPSBcImNsb3NlLXByb2pcIjtcbiAgICBjbG9zZS5jbGFzc05hbWUgPSBcImJ1dHRvbi1jbG9zZVwiO1xuICAgIHByb2pQcm9tcHQuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICAgIHByb2pTY3JlZW4uYXBwZW5kQ2hpbGQocHJvalByb21wdCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9qU2NyZWVuKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2otc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qLW5hbWVcIikudmFsdWU7XG4gICAgICAgICAgICBwcm9qZWN0RGF0YS5wdXNoKG5ldyBQcm9qZWN0KHByb2pOYW1lKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgbmV3UHJvai5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qTmFtZSk7XG4gICAgICAgICAgICBuZXdQcm9qLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvai1pdGVtXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIG5ld1Byb2pQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9mb2xkZXIucG5nXCIpXG4gICAgICAgICAgICBuZXdQcm9qUGljLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvai1waWNcIik7XG4gICAgICAgICAgICBuZXdQcm9qLmFwcGVuZENoaWxkKG5ld1Byb2pQaWMpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgICAgIG5ld1Byb2pOYW1lLmlubmVySFRNTCA9IHByb2pOYW1lO1xuICAgICAgICAgICAgbmV3UHJvai5hcHBlbmRDaGlsZChuZXdQcm9qTmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1saXN0XCIpO1xuICAgICAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG5ld1Byb2opO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2otc2NyZWVuXCIpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLXByb2pcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qLXNjcmVlblwiKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2plY3REYXRhO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXJcIik7XG5cbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaW5ib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlYmFyLWluYm94XCIpO1xuICAgIGluYm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1saW5lXCIpO1xuICAgIGluYm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1saW5rXCIpO1xuXG4gICAgY29uc3QgaW5ib3hQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGluYm94UGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvaW5ib3gucG5nXCIpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGluYm94UGljKTtcblxuICAgIGNvbnN0IGluYm94VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBpbmJveFRleHQudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hUZXh0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGluYm94KTtcblxuICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB0b2RheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXItdG9kYXlcIik7XG4gICAgdG9kYXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWxpbmVcIik7XG4gICAgdG9kYXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWxpbmtcIik7XG5cbiAgICBjb25zdCB0b2RheVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdG9kYXlQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy90b2RheS5wbmdcIik7XG4gICAgdG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlQaWMpO1xuXG4gICAgY29uc3QgdG9kYXlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRvZGF5VGV4dC50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICB0b2RheS5hcHBlbmRDaGlsZCh0b2RheVRleHQpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodG9kYXkpO1xuXG4gICAgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbGVuZGFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhci1jYWxlbmRhclwiKTtcbiAgICBjYWxlbmRhci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGViYXItbGluZVwiKTtcbiAgICBjYWxlbmRhci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGViYXItbGlua1wiKTtcblxuICAgIGNvbnN0IGNhbGVuZGFyUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjYWxlbmRhclBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2NhbGVuZGFyLnBuZ1wiKTtcbiAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChjYWxlbmRhclBpYyk7XG5cbiAgICBjb25zdCBjYWxlbmRhclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY2FsZW5kYXJUZXh0LnRleHRDb250ZW50ID0gXCJDYWxlbmRhclwiO1xuICAgIGNhbGVuZGFyLmFwcGVuZENoaWxkKGNhbGVuZGFyVGV4dCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjYWxlbmRhcik7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJvamVjdHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlYmFyLXByb2plY3RzXCIpO1xuICAgIHByb2plY3RzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1saW5lXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdHNQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHByb2plY3RzUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvYXJyb3dfY2lyY2xlX3JpZ2h0LnBuZ1wiKTtcbiAgICBwcm9qZWN0c1BpYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzLXBpY1wiKTtcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0c1BpYyk7XG5cbiAgICBjb25zdCBwcm9qZWN0c1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgcHJvamVjdHNUZXh0LnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RzVGV4dCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG5cbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RzTGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXItbGlzdFwiKTtcbiAgICBwcm9qZWN0c0xpc3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0cy1jbG9zZWRcIik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0xpc3QpO1xuXG4gICAgY29uc3QgYWRkUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkUHJvai5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXItYWRkXCIpO1xuICAgIGFkZFByb2ouc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWxpbmVcIik7XG5cbiAgICBjb25zdCBhZGRQcm9qUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBhZGRQcm9qUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvZm9sZGVyX25ldy5wbmdcIik7XG4gICAgYWRkUHJvai5hcHBlbmRDaGlsZChhZGRQcm9qUGljKTtcblxuICAgIGNvbnN0IGFkZFByb2pUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGFkZFByb2pUZXh0LnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuICAgIGFkZFByb2ouYXBwZW5kQ2hpbGQoYWRkUHJvalRleHQpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvaik7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItcHJvamVjdHNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtcGljXCIpLnNyYztcbiAgICAgICAgY29uc3QgcmVnRXggPSAvZXhwYW5kX2NpcmNsZV9kb3duLnBuZyQvO1xuXG4gICAgICAgIGlmIChyZWdFeC50ZXN0KHN0YXRlKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWxpc3RcIikuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWNsb3NlZFwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtcGljXCIpLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvYXJyb3dfY2lyY2xlX3JpZ2h0LnBuZ1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1saXN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0cy1jbG9zZWRcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXBpY1wiKS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2V4cGFuZF9jaXJjbGVfZG93bi5wbmdcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrKHByb2plY3REYXRhKSB7XG4gICAgY29uc3QgdGFza1NjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1NjcmVlbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stc2NyZWVuXCIpO1xuICAgIHRhc2tTY3JlZW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb3B1cC1zY3JlZW5cIik7XG5cbiAgICBjb25zdCB0YXNrUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrUHJvbXB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1wcm9tcHRcIik7XG4gICAgdGFza1Byb21wdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvcHVwLXByb21wdFwiKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgIGNvbnN0IGxvZ1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ1Rhc2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dC1maWVsZFwiKTtcblxuICAgIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1uYW1lXCIpO1xuICAgIHRhc2tMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzazpcIjtcbiAgICBsb2dUYXNrLmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG5cbiAgICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza0ZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1uYW1lXCIpO1xuICAgIHRhc2tGaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1uYW1lXCIpO1xuICAgIGxvZ1Rhc2suYXBwZW5kQ2hpbGQodGFza0ZpZWxkKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ1Rhc2spO1xuXG4gICAgY29uc3QgbG9nUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nUHJvai5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0LWZpZWxkXCIpO1xuXG4gICAgY29uc3QgcHJvakxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByb2pMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qLW5hbWVcIik7XG4gICAgcHJvakxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0OlwiO1xuICAgIGxvZ1Byb2ouYXBwZW5kQ2hpbGQocHJvakxhYmVsKTtcblxuICAgIGNvbnN0IHByb2pGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJvakZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvai1uYW1lXCIpO1xuICAgIHByb2pGaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvai1uYW1lXCIpO1xuXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3REYXRhKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3QubmFtZTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgIHByb2pGaWVsZC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuICAgIGxvZ1Byb2ouYXBwZW5kQ2hpbGQocHJvakZpZWxkKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ1Byb2opO1xuXG4gICAgY29uc3QgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrU3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1zdWJtaXRcIik7XG4gICAgdGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJBREQgVEFTS1wiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tTdWJtaXQpO1xuICAgIHRhc2tQcm9tcHQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2UuaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgY2xvc2UuaWQgPSBcImNsb3NlLXRhc2tcIjtcbiAgICBjbG9zZS5jbGFzc05hbWUgPSBcImJ1dHRvbi1jbG9zZVwiO1xuICAgIHRhc2tQcm9tcHQuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICAgIHRhc2tTY3JlZW4uYXBwZW5kQ2hpbGQodGFza1Byb21wdCk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhc2tTY3JlZW4pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3REYXRhKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5uYW1lID09PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2otbmFtZVwiKS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RbXCJ0YXNrc1wiXS5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1zY3JlZW5cIikucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLXRhc2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stc2NyZWVuXCIpLnJlbW92ZSgpO1xuICAgIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZGF5KHByb2plY3REYXRhKSB7XG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kYXlcIik7XG4gICAgdG9kYXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWNvbnRlbnRcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3QtdGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgdG9kYXkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC13cmFwcGVyXCIpO1xuICAgIGxpc3QuaW5zZXJ0QmVmb3JlKHRvZGF5LCBsaXN0LmNoaWxkcmVuWzBdKTtcbn0iLCJ2YXIgbnVtZXJpYyA9IGZ1bmN0aW9uICh2YWx1ZSwgdW5pdCkgeyByZXR1cm4gTnVtYmVyKHZhbHVlLnNsaWNlKDAsIC0xICogdW5pdC5sZW5ndGgpKTsgfTtcblxudmFyIHBhcnNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoJ3B4JykpXG4gICAgICAgIHsgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCB0eXBlOiAncHgnLCBudW1lcmljOiBudW1lcmljKHZhbHVlLCAncHgnKSB9IH1cbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoJ2ZyJykpXG4gICAgICAgIHsgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCB0eXBlOiAnZnInLCBudW1lcmljOiBudW1lcmljKHZhbHVlLCAnZnInKSB9IH1cbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoJyUnKSlcbiAgICAgICAgeyByZXR1cm4geyB2YWx1ZTogdmFsdWUsIHR5cGU6ICclJywgbnVtZXJpYzogbnVtZXJpYyh2YWx1ZSwgJyUnKSB9IH1cbiAgICBpZiAodmFsdWUgPT09ICdhdXRvJykgeyByZXR1cm4geyB2YWx1ZTogdmFsdWUsIHR5cGU6ICdhdXRvJyB9IH1cbiAgICByZXR1cm4gbnVsbFxufTtcblxudmFyIHBhcnNlID0gZnVuY3Rpb24gKHJ1bGUpIHsgcmV0dXJuIHJ1bGUuc3BsaXQoJyAnKS5tYXAocGFyc2VWYWx1ZSk7IH07XG5cbnZhciBnZXRTaXplQXRUcmFjayA9IGZ1bmN0aW9uIChpbmRleCwgdHJhY2tzLCBnYXAsIGVuZCkge1xuICAgIGlmICggZ2FwID09PSB2b2lkIDAgKSB7IGdhcCA9IDA7IH1cbiAgICBpZiAoIGVuZCA9PT0gdm9pZCAwICkgeyBlbmQgPSBmYWxzZTsgfVxuXG4gICAgdmFyIG5ld0luZGV4ID0gZW5kID8gaW5kZXggKyAxIDogaW5kZXg7XG4gICAgdmFyIHRyYWNrU3VtID0gdHJhY2tzXG4gICAgICAgIC5zbGljZSgwLCBuZXdJbmRleClcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYWNjdW0sIHZhbHVlKSB7IHJldHVybiBhY2N1bSArIHZhbHVlLm51bWVyaWM7IH0sIDApO1xuICAgIHZhciBnYXBTdW0gPSBnYXAgPyBpbmRleCAqIGdhcCA6IDA7XG5cbiAgICByZXR1cm4gdHJhY2tTdW0gKyBnYXBTdW1cbn07XG5cbnZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiAocnVsZSwgb3duUnVsZXMsIG1hdGNoZWRSdWxlcykgeyByZXR1cm4gb3duUnVsZXMuY29uY2F0KCBtYXRjaGVkUnVsZXMpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIuc3R5bGVbcnVsZV07IH0pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHN0eWxlKSB7IHJldHVybiBzdHlsZSAhPT0gdW5kZWZpbmVkICYmIHN0eWxlICE9PSAnJzsgfSk7IH07XG5cbnZhciBnZXRHYXBWYWx1ZSA9IGZ1bmN0aW9uICh1bml0LCBzaXplKSB7XG4gICAgaWYgKHNpemUuZW5kc1dpdGgodW5pdCkpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcihzaXplLnNsaWNlKDAsIC0xICogdW5pdC5sZW5ndGgpKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxufTtcblxudmFyIGZpcnN0Tm9uWmVybyA9IGZ1bmN0aW9uICh0cmFja3MpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHJhY2tzW2ldLm51bWVyaWMgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gaVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG59O1xuXG52YXIgTk9PUCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9O1xuXG52YXIgZGVmYXVsdFdyaXRlU3R5bGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgZ3JpZFRlbXBsYXRlUHJvcCwgc3R5bGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBlbGVtZW50LnN0eWxlW2dyaWRUZW1wbGF0ZVByb3BdID0gc3R5bGU7XG59O1xuXG52YXIgZ2V0T3B0aW9uID0gZnVuY3Rpb24gKG9wdGlvbnMsIHByb3BOYW1lLCBkZWYpIHtcbiAgICB2YXIgdmFsdWUgPSBvcHRpb25zW3Byb3BOYW1lXTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIGRlZlxufTtcblxuZnVuY3Rpb24gZ2V0TWF0Y2hlZENTU1J1bGVzIChlbCkge1xuICAgICAgICB2YXIgcmVmO1xuXG4gICAgICAgIHJldHVybiAocmVmID0gW10pXG4gICAgICAgIC5jb25jYXQuYXBwbHkoXG4gICAgICAgICAgICByZWYsIEFycmF5LmZyb20oZWwub3duZXJEb2N1bWVudC5zdHlsZVNoZWV0cykubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJ1bGVzID0gW107XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydWxlcyA9IEFycmF5LmZyb20ocy5jc3NSdWxlcyB8fCBbXSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcmVzdWx0cyBvbiBzZWN1cml0eSBlcnJvclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBydWxlc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gZWwubWF0Y2hlcyhyLnNlbGVjdG9yVGV4dCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIG1hdGNoaW5nIGVycm9zXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXG4gICAgICAgIH0pO1xufVxuXG52YXIgZ3JpZFRlbXBsYXRlUHJvcENvbHVtbnMgPSAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJztcbnZhciBncmlkVGVtcGxhdGVQcm9wUm93cyA9ICdncmlkLXRlbXBsYXRlLXJvd3MnO1xuXG52YXIgR3V0dGVyID0gZnVuY3Rpb24gR3V0dGVyKGRpcmVjdGlvbiwgb3B0aW9ucywgcGFyZW50T3B0aW9ucykge1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHRoaXMuZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcbiAgICB0aGlzLnRyYWNrID0gb3B0aW9ucy50cmFjaztcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdjb2x1bW4nKSB7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlUHJvcCA9IGdyaWRUZW1wbGF0ZVByb3BDb2x1bW5zO1xuICAgICAgICB0aGlzLmdyaWRHYXBQcm9wID0gJ2dyaWQtY29sdW1uLWdhcCc7XG4gICAgICAgIHRoaXMuY3Vyc29yID0gZ2V0T3B0aW9uKFxuICAgICAgICAgICAgcGFyZW50T3B0aW9ucyxcbiAgICAgICAgICAgICdjb2x1bW5DdXJzb3InLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdjdXJzb3InLCAnY29sLXJlc2l6ZScpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc25hcE9mZnNldCA9IGdldE9wdGlvbihcbiAgICAgICAgICAgIHBhcmVudE9wdGlvbnMsXG4gICAgICAgICAgICAnY29sdW1uU25hcE9mZnNldCcsXG4gICAgICAgICAgICBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ3NuYXBPZmZzZXQnLCAzMClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kcmFnSW50ZXJ2YWwgPSBnZXRPcHRpb24oXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAgICAgJ2NvbHVtbkRyYWdJbnRlcnZhbCcsXG4gICAgICAgICAgICBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ2RyYWdJbnRlcnZhbCcsIDEpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2xpZW50QXhpcyA9ICdjbGllbnRYJztcbiAgICAgICAgdGhpcy5vcHRpb25TdHlsZSA9IGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnZ3JpZFRlbXBsYXRlQ29sdW1ucycpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncm93Jykge1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVByb3AgPSBncmlkVGVtcGxhdGVQcm9wUm93cztcbiAgICAgICAgdGhpcy5ncmlkR2FwUHJvcCA9ICdncmlkLXJvdy1nYXAnO1xuICAgICAgICB0aGlzLmN1cnNvciA9IGdldE9wdGlvbihcbiAgICAgICAgICAgIHBhcmVudE9wdGlvbnMsXG4gICAgICAgICAgICAncm93Q3Vyc29yJyxcbiAgICAgICAgICAgIGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnY3Vyc29yJywgJ3Jvdy1yZXNpemUnKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNuYXBPZmZzZXQgPSBnZXRPcHRpb24oXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAgICAgJ3Jvd1NuYXBPZmZzZXQnLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdzbmFwT2Zmc2V0JywgMzApXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZHJhZ0ludGVydmFsID0gZ2V0T3B0aW9uKFxuICAgICAgICAgICAgcGFyZW50T3B0aW9ucyxcbiAgICAgICAgICAgICdyb3dEcmFnSW50ZXJ2YWwnLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdkcmFnSW50ZXJ2YWwnLCAxKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNsaWVudEF4aXMgPSAnY2xpZW50WSc7XG4gICAgICAgIHRoaXMub3B0aW9uU3R5bGUgPSBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ2dyaWRUZW1wbGF0ZVJvd3MnKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uRHJhZ1N0YXJ0ID0gZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdvbkRyYWdTdGFydCcsIE5PT1ApO1xuICAgIHRoaXMub25EcmFnRW5kID0gZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdvbkRyYWdFbmQnLCBOT09QKTtcbiAgICB0aGlzLm9uRHJhZyA9IGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnb25EcmFnJywgTk9PUCk7XG4gICAgdGhpcy53cml0ZVN0eWxlID0gZ2V0T3B0aW9uKFxuICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAnd3JpdGVTdHlsZScsXG4gICAgICAgIGRlZmF1bHRXcml0ZVN0eWxlXG4gICAgKTtcblxuICAgIHRoaXMuc3RhcnREcmFnZ2luZyA9IHRoaXMuc3RhcnREcmFnZ2luZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RvcERyYWdnaW5nID0gdGhpcy5zdG9wRHJhZ2dpbmcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYWcgPSB0aGlzLmRyYWcuYmluZCh0aGlzKTtcblxuICAgIHRoaXMubWluU2l6ZVN0YXJ0ID0gb3B0aW9ucy5taW5TaXplU3RhcnQ7XG4gICAgdGhpcy5taW5TaXplRW5kID0gb3B0aW9ucy5taW5TaXplRW5kO1xuXG4gICAgaWYgKG9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zdGFydERyYWdnaW5nKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLnN0YXJ0RHJhZ2dpbmcpO1xuICAgIH1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uIGdldERpbWVuc2lvbnMgKCkge1xuICAgIHZhciByZWYgPSB0aGlzLmdyaWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciB3aWR0aCA9IHJlZi53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IHJlZi5oZWlnaHQ7XG4gICAgICAgIHZhciB0b3AgPSByZWYudG9wO1xuICAgICAgICB2YXIgYm90dG9tID0gcmVmLmJvdHRvbTtcbiAgICAgICAgdmFyIGxlZnQgPSByZWYubGVmdDtcbiAgICAgICAgdmFyIHJpZ2h0ID0gcmVmLnJpZ2h0O1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnY29sdW1uJykge1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdG9wO1xuICAgICAgICB0aGlzLmVuZCA9IGJvdHRvbTtcbiAgICAgICAgdGhpcy5zaXplID0gaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdyb3cnKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLmVuZCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLnNpemUgPSB3aWR0aDtcbiAgICB9XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldFNpemVBdFRyYWNrID0gZnVuY3Rpb24gZ2V0U2l6ZUF0VHJhY2skMSAodHJhY2ssIGVuZCkge1xuICAgIHJldHVybiBnZXRTaXplQXRUcmFjayhcbiAgICAgICAgdHJhY2ssXG4gICAgICAgIHRoaXMuY29tcHV0ZWRQaXhlbHMsXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHMsXG4gICAgICAgIGVuZFxuICAgIClcbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0U2l6ZU9mVHJhY2sgPSBmdW5jdGlvbiBnZXRTaXplT2ZUcmFjayAodHJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5jb21wdXRlZFBpeGVsc1t0cmFja10ubnVtZXJpY1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5nZXRSYXdUcmFja3MgPSBmdW5jdGlvbiBnZXRSYXdUcmFja3MgKCkge1xuICAgIHZhciB0cmFja3MgPSBnZXRTdHlsZXMoXG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlUHJvcCxcbiAgICAgICAgW3RoaXMuZ3JpZF0sXG4gICAgICAgIGdldE1hdGNoZWRDU1NSdWxlcyh0aGlzLmdyaWQpXG4gICAgKTtcbiAgICBpZiAoIXRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uU3R5bGUpIHsgcmV0dXJuIHRoaXMub3B0aW9uU3R5bGUgfVxuXG4gICAgICAgIHRocm93IEVycm9yKCdVbmFibGUgdG8gZGV0ZXJtaW5lIGdyaWQgdGVtcGxhdGUgdHJhY2tzIGZyb20gc3R5bGVzLicpXG4gICAgfVxuICAgIHJldHVybiB0cmFja3NbMF1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0R2FwID0gZnVuY3Rpb24gZ2V0R2FwICgpIHtcbiAgICB2YXIgZ2FwID0gZ2V0U3R5bGVzKFxuICAgICAgICB0aGlzLmdyaWRHYXBQcm9wLFxuICAgICAgICBbdGhpcy5ncmlkXSxcbiAgICAgICAgZ2V0TWF0Y2hlZENTU1J1bGVzKHRoaXMuZ3JpZClcbiAgICApO1xuICAgIGlmICghZ2FwLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gZ2FwWzBdXG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldFJhd0NvbXB1dGVkVHJhY2tzID0gZnVuY3Rpb24gZ2V0UmF3Q29tcHV0ZWRUcmFja3MgKCkge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdyaWQpW3RoaXMuZ3JpZFRlbXBsYXRlUHJvcF1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0UmF3Q29tcHV0ZWRHYXAgPSBmdW5jdGlvbiBnZXRSYXdDb21wdXRlZEdhcCAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ3JpZClbdGhpcy5ncmlkR2FwUHJvcF1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuc2V0VHJhY2tzID0gZnVuY3Rpb24gc2V0VHJhY2tzIChyYXcpIHtcbiAgICB0aGlzLnRyYWNrcyA9IHJhdy5zcGxpdCgnICcpO1xuICAgIHRoaXMudHJhY2tWYWx1ZXMgPSBwYXJzZShyYXcpO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zZXRDb21wdXRlZFRyYWNrcyA9IGZ1bmN0aW9uIHNldENvbXB1dGVkVHJhY2tzIChyYXcpIHtcbiAgICB0aGlzLmNvbXB1dGVkVHJhY2tzID0gcmF3LnNwbGl0KCcgJyk7XG4gICAgdGhpcy5jb21wdXRlZFBpeGVscyA9IHBhcnNlKHJhdyk7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLnNldEdhcCA9IGZ1bmN0aW9uIHNldEdhcCAocmF3KSB7XG4gICAgdGhpcy5nYXAgPSByYXc7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLnNldENvbXB1dGVkR2FwID0gZnVuY3Rpb24gc2V0Q29tcHV0ZWRHYXAgKHJhdykge1xuICAgIHRoaXMuY29tcHV0ZWRHYXAgPSByYXc7XG4gICAgdGhpcy5jb21wdXRlZEdhcFBpeGVscyA9IGdldEdhcFZhbHVlKCdweCcsIHRoaXMuY29tcHV0ZWRHYXApIHx8IDA7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldE1vdXNlUG9zaXRpb24gPSBmdW5jdGlvbiBnZXRNb3VzZVBvc2l0aW9uIChlKSB7XG4gICAgaWYgKCd0b3VjaGVzJyBpbiBlKSB7IHJldHVybiBlLnRvdWNoZXNbMF1bdGhpcy5jbGllbnRBeGlzXSB9XG4gICAgcmV0dXJuIGVbdGhpcy5jbGllbnRBeGlzXVxufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zdGFydERyYWdnaW5nID0gZnVuY3Rpb24gc3RhcnREcmFnZ2luZyAoZSkge1xuICAgIGlmICgnYnV0dG9uJyBpbiBlICYmIGUuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIERvbid0IGFjdHVhbGx5IGRyYWcgdGhlIGVsZW1lbnQuIFdlIGVtdWxhdGUgdGhhdCBpbiB0aGUgZHJhZyBmdW5jdGlvbi5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgdGhpcy5nZXREaW1lbnNpb25zKCk7XG4gICAgdGhpcy5zZXRUcmFja3ModGhpcy5nZXRSYXdUcmFja3MoKSk7XG4gICAgdGhpcy5zZXRDb21wdXRlZFRyYWNrcyh0aGlzLmdldFJhd0NvbXB1dGVkVHJhY2tzKCkpO1xuICAgIHRoaXMuc2V0R2FwKHRoaXMuZ2V0R2FwKCkpO1xuICAgIHRoaXMuc2V0Q29tcHV0ZWRHYXAodGhpcy5nZXRSYXdDb21wdXRlZEdhcCgpKTtcblxuICAgIHZhciB0cmFja1BlcmNlbnRhZ2UgPSB0aGlzLnRyYWNrVmFsdWVzLmZpbHRlcihcbiAgICAgICAgZnVuY3Rpb24gKHRyYWNrKSB7IHJldHVybiB0cmFjay50eXBlID09PSAnJSc7IH1cbiAgICApO1xuICAgIHZhciB0cmFja0ZyID0gdGhpcy50cmFja1ZhbHVlcy5maWx0ZXIoZnVuY3Rpb24gKHRyYWNrKSB7IHJldHVybiB0cmFjay50eXBlID09PSAnZnInOyB9KTtcblxuICAgIHRoaXMudG90YWxGcnMgPSB0cmFja0ZyLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLnRvdGFsRnJzKSB7XG4gICAgICAgIHZhciB0cmFjayA9IGZpcnN0Tm9uWmVybyh0cmFja0ZyKTtcblxuICAgICAgICBpZiAodHJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZnJUb1BpeGVscyA9XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlZFBpeGVsc1t0cmFja10ubnVtZXJpYyAvIHRyYWNrRnJbdHJhY2tdLm51bWVyaWM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHJhY2tQZXJjZW50YWdlLmxlbmd0aCkge1xuICAgICAgICB2YXIgdHJhY2skMSA9IGZpcnN0Tm9uWmVybyh0cmFja1BlcmNlbnRhZ2UpO1xuXG4gICAgICAgIGlmICh0cmFjayQxICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmNlbnRhZ2VUb1BpeGVscyA9XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlZFBpeGVsc1t0cmFjayQxXS5udW1lcmljIC9cbiAgICAgICAgICAgICAgICB0cmFja1BlcmNlbnRhZ2VbdHJhY2skMV0ubnVtZXJpYztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCBzdGFydCBvZiBndXR0ZXIgdHJhY2tcbiAgICB2YXIgZ3V0dGVyU3RhcnQgPSB0aGlzLmdldFNpemVBdFRyYWNrKHRoaXMudHJhY2ssIGZhbHNlKSArIHRoaXMuc3RhcnQ7XG4gICAgdGhpcy5kcmFnU3RhcnRPZmZzZXQgPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oZSkgLSBndXR0ZXJTdGFydDtcblxuICAgIHRoaXMuYVRyYWNrID0gdGhpcy50cmFjayAtIDE7XG5cbiAgICBpZiAodGhpcy50cmFjayA8IHRoaXMudHJhY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5iVHJhY2sgPSB0aGlzLnRyYWNrICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAgIChcIkludmFsaWQgdHJhY2sgaW5kZXg6IFwiICsgKHRoaXMudHJhY2spICsgXCIuIFRyYWNrIG11c3QgYmUgYmV0d2VlbiB0d28gb3RoZXIgdHJhY2tzIGFuZCBvbmx5IFwiICsgKHRoaXMudHJhY2tzLmxlbmd0aCkgKyBcIiB0cmFja3Mgd2VyZSBmb3VuZC5cIilcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHRoaXMuYVRyYWNrU3RhcnQgPSB0aGlzLmdldFNpemVBdFRyYWNrKHRoaXMuYVRyYWNrLCBmYWxzZSkgKyB0aGlzLnN0YXJ0O1xuICAgIHRoaXMuYlRyYWNrRW5kID0gdGhpcy5nZXRTaXplQXRUcmFjayh0aGlzLmJUcmFjaywgdHJ1ZSkgKyB0aGlzLnN0YXJ0O1xuXG4gICAgLy8gU2V0IHRoZSBkcmFnZ2luZyBwcm9wZXJ0eSBvZiB0aGUgcGFpciBvYmplY3QuXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cbiAgICAvLyBBbGwgdGhlIGJpbmRpbmcuIGB3aW5kb3dgIGdldHMgdGhlIHN0b3AgZXZlbnRzIGluIGNhc2Ugd2UgZHJhZyBvdXQgb2YgdGhlIGVsZW1lbnRzLlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZyk7XG5cbiAgICAvLyBEaXNhYmxlIHNlbGVjdGlvbi4gRGlzYWJsZSFcbiAgICB0aGlzLmdyaWQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0c3RhcnQnLCBOT09QKTtcbiAgICB0aGlzLmdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgTk9PUCk7XG5cbiAgICB0aGlzLmdyaWQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICB0aGlzLmdyaWQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICdub25lJztcbiAgICB0aGlzLmdyaWQuc3R5bGUuTW96VXNlclNlbGVjdCA9ICdub25lJztcbiAgICB0aGlzLmdyaWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblxuICAgIC8vIFNldCB0aGUgY3Vyc29yIGF0IG11bHRpcGxlIGxldmVsc1xuICAgIHRoaXMuZ3JpZC5zdHlsZS5jdXJzb3IgPSB0aGlzLmN1cnNvcjtcbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSB0aGlzLmN1cnNvcjtcblxuICAgIHRoaXMub25EcmFnU3RhcnQodGhpcy5kaXJlY3Rpb24sIHRoaXMudHJhY2spO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zdG9wRHJhZ2dpbmcgPSBmdW5jdGlvbiBzdG9wRHJhZ2dpbmcgKCkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIC8vIFJlbW92ZSB0aGUgc3RvcmVkIGV2ZW50IGxpc3RlbmVycy4gVGhpcyBpcyB3aHkgd2Ugc3RvcmUgdGhlbS5cbiAgICB0aGlzLmNsZWFudXAoKTtcblxuICAgIHRoaXMub25EcmFnRW5kKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnRyYWNrKTtcblxuICAgIGlmICh0aGlzLm5lZWRzRGVzdHJveSkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAnbW91c2Vkb3duJyxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAndG91Y2hzdGFydCcsXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdHJveUNiKCk7XG4gICAgICAgIHRoaXMubmVlZHNEZXN0cm95ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVzdHJveUNiID0gbnVsbDtcbiAgICB9XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmRyYWcgPSBmdW5jdGlvbiBkcmFnIChlKSB7XG4gICAgdmFyIG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oZSk7XG5cbiAgICB2YXIgZ3V0dGVyU2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mVHJhY2sodGhpcy50cmFjayk7XG4gICAgdmFyIG1pbk1vdXNlUG9zaXRpb24gPVxuICAgICAgICB0aGlzLmFUcmFja1N0YXJ0ICtcbiAgICAgICAgdGhpcy5taW5TaXplU3RhcnQgK1xuICAgICAgICB0aGlzLmRyYWdTdGFydE9mZnNldCArXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHM7XG4gICAgdmFyIG1heE1vdXNlUG9zaXRpb24gPVxuICAgICAgICB0aGlzLmJUcmFja0VuZCAtXG4gICAgICAgIHRoaXMubWluU2l6ZUVuZCAtXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHMgLVxuICAgICAgICAoZ3V0dGVyU2l6ZSAtIHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0KTtcbiAgICB2YXIgbWluTW91c2VQb3NpdGlvbk9mZnNldCA9IG1pbk1vdXNlUG9zaXRpb24gKyB0aGlzLnNuYXBPZmZzZXQ7XG4gICAgdmFyIG1heE1vdXNlUG9zaXRpb25PZmZzZXQgPSBtYXhNb3VzZVBvc2l0aW9uIC0gdGhpcy5zbmFwT2Zmc2V0O1xuXG4gICAgaWYgKG1vdXNlUG9zaXRpb24gPCBtaW5Nb3VzZVBvc2l0aW9uT2Zmc2V0KSB7XG4gICAgICAgIG1vdXNlUG9zaXRpb24gPSBtaW5Nb3VzZVBvc2l0aW9uO1xuICAgIH1cblxuICAgIGlmIChtb3VzZVBvc2l0aW9uID4gbWF4TW91c2VQb3NpdGlvbk9mZnNldCkge1xuICAgICAgICBtb3VzZVBvc2l0aW9uID0gbWF4TW91c2VQb3NpdGlvbjtcbiAgICB9XG5cbiAgICBpZiAobW91c2VQb3NpdGlvbiA8IG1pbk1vdXNlUG9zaXRpb24pIHtcbiAgICAgICAgbW91c2VQb3NpdGlvbiA9IG1pbk1vdXNlUG9zaXRpb247XG4gICAgfSBlbHNlIGlmIChtb3VzZVBvc2l0aW9uID4gbWF4TW91c2VQb3NpdGlvbikge1xuICAgICAgICBtb3VzZVBvc2l0aW9uID0gbWF4TW91c2VQb3NpdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgYVRyYWNrU2l6ZSA9XG4gICAgICAgIG1vdXNlUG9zaXRpb24gLVxuICAgICAgICB0aGlzLmFUcmFja1N0YXJ0IC1cbiAgICAgICAgdGhpcy5kcmFnU3RhcnRPZmZzZXQgLVxuICAgICAgICB0aGlzLmNvbXB1dGVkR2FwUGl4ZWxzO1xuICAgIHZhciBiVHJhY2tTaXplID1cbiAgICAgICAgdGhpcy5iVHJhY2tFbmQgLVxuICAgICAgICBtb3VzZVBvc2l0aW9uICtcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRPZmZzZXQgLVxuICAgICAgICBndXR0ZXJTaXplIC1cbiAgICAgICAgdGhpcy5jb21wdXRlZEdhcFBpeGVscztcblxuICAgIGlmICh0aGlzLmRyYWdJbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgdmFyIGFUcmFja1NpemVJbnRlcnZhbGVkID1cbiAgICAgICAgICAgIE1hdGgucm91bmQoYVRyYWNrU2l6ZSAvIHRoaXMuZHJhZ0ludGVydmFsKSAqIHRoaXMuZHJhZ0ludGVydmFsO1xuICAgICAgICBiVHJhY2tTaXplIC09IGFUcmFja1NpemVJbnRlcnZhbGVkIC0gYVRyYWNrU2l6ZTtcbiAgICAgICAgYVRyYWNrU2l6ZSA9IGFUcmFja1NpemVJbnRlcnZhbGVkO1xuICAgIH1cblxuICAgIGlmIChhVHJhY2tTaXplIDwgdGhpcy5taW5TaXplU3RhcnQpIHtcbiAgICAgICAgYVRyYWNrU2l6ZSA9IHRoaXMubWluU2l6ZVN0YXJ0O1xuICAgIH1cblxuICAgIGlmIChiVHJhY2tTaXplIDwgdGhpcy5taW5TaXplRW5kKSB7XG4gICAgICAgIGJUcmFja1NpemUgPSB0aGlzLm1pblNpemVFbmQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHJhY2tWYWx1ZXNbdGhpcy5hVHJhY2tdLnR5cGUgPT09ICdweCcpIHtcbiAgICAgICAgdGhpcy50cmFja3NbdGhpcy5hVHJhY2tdID0gYVRyYWNrU2l6ZSArIFwicHhcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMudHJhY2tWYWx1ZXNbdGhpcy5hVHJhY2tdLnR5cGUgPT09ICdmcicpIHtcbiAgICAgICAgaWYgKHRoaXMudG90YWxGcnMgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYVRyYWNrXSA9ICcxZnInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhcmdldEZyID0gYVRyYWNrU2l6ZSAvIHRoaXMuZnJUb1BpeGVscztcbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYVRyYWNrXSA9IHRhcmdldEZyICsgXCJmclwiO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRyYWNrVmFsdWVzW3RoaXMuYVRyYWNrXS50eXBlID09PSAnJScpIHtcbiAgICAgICAgdmFyIHRhcmdldFBlcmNlbnRhZ2UgPSBhVHJhY2tTaXplIC8gdGhpcy5wZXJjZW50YWdlVG9QaXhlbHM7XG4gICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYVRyYWNrXSA9IHRhcmdldFBlcmNlbnRhZ2UgKyBcIiVcIjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50cmFja1ZhbHVlc1t0aGlzLmJUcmFja10udHlwZSA9PT0gJ3B4Jykge1xuICAgICAgICB0aGlzLnRyYWNrc1t0aGlzLmJUcmFja10gPSBiVHJhY2tTaXplICsgXCJweFwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy50cmFja1ZhbHVlc1t0aGlzLmJUcmFja10udHlwZSA9PT0gJ2ZyJykge1xuICAgICAgICBpZiAodGhpcy50b3RhbEZycyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy50cmFja3NbdGhpcy5iVHJhY2tdID0gJzFmcic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0RnIkMSA9IGJUcmFja1NpemUgLyB0aGlzLmZyVG9QaXhlbHM7XG4gICAgICAgICAgICB0aGlzLnRyYWNrc1t0aGlzLmJUcmFja10gPSB0YXJnZXRGciQxICsgXCJmclwiO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRyYWNrVmFsdWVzW3RoaXMuYlRyYWNrXS50eXBlID09PSAnJScpIHtcbiAgICAgICAgdmFyIHRhcmdldFBlcmNlbnRhZ2UkMSA9IGJUcmFja1NpemUgLyB0aGlzLnBlcmNlbnRhZ2VUb1BpeGVscztcbiAgICAgICAgdGhpcy50cmFja3NbdGhpcy5iVHJhY2tdID0gdGFyZ2V0UGVyY2VudGFnZSQxICsgXCIlXCI7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0gdGhpcy50cmFja3Muam9pbignICcpO1xuICAgIHRoaXMud3JpdGVTdHlsZSh0aGlzLmdyaWQsIHRoaXMuZ3JpZFRlbXBsYXRlUHJvcCwgc3R5bGUpO1xuICAgIHRoaXMub25EcmFnKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnRyYWNrLCBzdHlsZSk7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWcpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWcpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICB0aGlzLmdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0c3RhcnQnLCBOT09QKTtcbiAgICAgICAgdGhpcy5ncmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIE5PT1ApO1xuXG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS51c2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG5cbiAgICAgICAgdGhpcy5ncmlkLnN0eWxlLmN1cnNvciA9ICcnO1xuICAgIH1cblxuICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICcnO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoaW1tZWRpYXRlLCBjYikge1xuICAgICAgICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gdHJ1ZTtcblxuICAgIGlmIChpbW1lZGlhdGUgfHwgdGhpcy5kcmFnZ2luZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICdtb3VzZWRvd24nLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5lZWRzRGVzdHJveSA9IHRydWU7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95Q2IgPSBjYjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBnZXRUcmFja09wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zLCB0cmFjaywgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHRyYWNrIGluIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNbdHJhY2tdXG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxufTtcblxudmFyIGNyZWF0ZUd1dHRlciA9IGZ1bmN0aW9uIChkaXJlY3Rpb24sIG9wdGlvbnMpIHsgcmV0dXJuIGZ1bmN0aW9uIChndXR0ZXJPcHRpb25zKSB7XG4gICAgaWYgKGd1dHRlck9wdGlvbnMudHJhY2sgPCAxKSB7XG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgKFwiSW52YWxpZCB0cmFjayBpbmRleDogXCIgKyAoZ3V0dGVyT3B0aW9ucy50cmFjaykgKyBcIi4gVHJhY2sgbXVzdCBiZSBiZXR3ZWVuIHR3byBvdGhlciB0cmFja3MuXCIpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICB2YXIgdHJhY2tNaW5TaXplcyA9XG4gICAgICAgIGRpcmVjdGlvbiA9PT0gJ2NvbHVtbidcbiAgICAgICAgICAgID8gb3B0aW9ucy5jb2x1bW5NaW5TaXplcyB8fCB7fVxuICAgICAgICAgICAgOiBvcHRpb25zLnJvd01pblNpemVzIHx8IHt9O1xuICAgIHZhciB0cmFja01pblNpemUgPSBkaXJlY3Rpb24gPT09ICdjb2x1bW4nID8gJ2NvbHVtbk1pblNpemUnIDogJ3Jvd01pblNpemUnO1xuXG4gICAgcmV0dXJuIG5ldyBHdXR0ZXIoXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwge21pblNpemVTdGFydDogZ2V0VHJhY2tPcHRpb24oXG4gICAgICAgICAgICAgICAgdHJhY2tNaW5TaXplcyxcbiAgICAgICAgICAgICAgICBndXR0ZXJPcHRpb25zLnRyYWNrIC0gMSxcbiAgICAgICAgICAgICAgICBnZXRPcHRpb24oXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrTWluU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uKG9wdGlvbnMsICdtaW5TaXplJywgMClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWluU2l6ZUVuZDogZ2V0VHJhY2tPcHRpb24oXG4gICAgICAgICAgICAgICAgdHJhY2tNaW5TaXplcyxcbiAgICAgICAgICAgICAgICBndXR0ZXJPcHRpb25zLnRyYWNrICsgMSxcbiAgICAgICAgICAgICAgICBnZXRPcHRpb24oXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrTWluU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uKG9wdGlvbnMsICdtaW5TaXplJywgMClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfSxcbiAgICAgICAgICAgIGd1dHRlck9wdGlvbnMpLFxuICAgICAgICBvcHRpb25zXG4gICAgKVxufTsgfTtcblxudmFyIEdyaWQgPSBmdW5jdGlvbiBHcmlkKG9wdGlvbnMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHRoaXMuY29sdW1uR3V0dGVycyA9IHt9O1xuICAgIHRoaXMucm93R3V0dGVycyA9IHt9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwge2NvbHVtbkd1dHRlcnM6IG9wdGlvbnMuY29sdW1uR3V0dGVycyB8fCBbXSxcbiAgICAgICAgcm93R3V0dGVyczogb3B0aW9ucy5yb3dHdXR0ZXJzIHx8IFtdLFxuICAgICAgICBjb2x1bW5NaW5TaXplczogb3B0aW9ucy5jb2x1bW5NaW5TaXplcyB8fCB7fSxcbiAgICAgICAgcm93TWluU2l6ZXM6IG9wdGlvbnMucm93TWluU2l6ZXMgfHwge319LFxuICAgICAgICBvcHRpb25zKTtcblxuICAgIHRoaXMub3B0aW9ucy5jb2x1bW5HdXR0ZXJzLmZvckVhY2goZnVuY3Rpb24gKGd1dHRlck9wdGlvbnMpIHtcbiAgICAgICAgdGhpcyQxLmNvbHVtbkd1dHRlcnNbZ3V0dGVyT3B0aW9ucy50cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICAgICAnY29sdW1uJyxcbiAgICAgICAgICAgIHRoaXMkMS5vcHRpb25zXG4gICAgICAgICkoZ3V0dGVyT3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wdGlvbnMucm93R3V0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChndXR0ZXJPcHRpb25zKSB7XG4gICAgICAgIHRoaXMkMS5yb3dHdXR0ZXJzW2d1dHRlck9wdGlvbnMudHJhY2tdID0gY3JlYXRlR3V0dGVyKFxuICAgICAgICAgICAgJ3JvdycsXG4gICAgICAgICAgICB0aGlzJDEub3B0aW9uc1xuICAgICAgICApKGd1dHRlck9wdGlvbnMpO1xuICAgIH0pO1xufTtcblxuR3JpZC5wcm90b3R5cGUuYWRkQ29sdW1uR3V0dGVyID0gZnVuY3Rpb24gYWRkQ29sdW1uR3V0dGVyIChlbGVtZW50LCB0cmFjaykge1xuICAgIGlmICh0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICdjb2x1bW4nLFxuICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICApKHtcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgIH0pO1xufTtcblxuR3JpZC5wcm90b3R5cGUuYWRkUm93R3V0dGVyID0gZnVuY3Rpb24gYWRkUm93R3V0dGVyIChlbGVtZW50LCB0cmFjaykge1xuICAgIGlmICh0aGlzLnJvd0d1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICdyb3cnLFxuICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICApKHtcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgIH0pO1xufTtcblxuR3JpZC5wcm90b3R5cGUucmVtb3ZlQ29sdW1uR3V0dGVyID0gZnVuY3Rpb24gcmVtb3ZlQ29sdW1uR3V0dGVyICh0cmFjaywgaW1tZWRpYXRlKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgICAgICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10uZGVzdHJveShpbW1lZGlhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzJDEuY29sdW1uR3V0dGVyc1t0cmFja107XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbkdyaWQucHJvdG90eXBlLnJlbW92ZVJvd0d1dHRlciA9IGZ1bmN0aW9uIHJlbW92ZVJvd0d1dHRlciAodHJhY2ssIGltbWVkaWF0ZSkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICAgICAgaWYgKCBpbW1lZGlhdGUgPT09IHZvaWQgMCApIGltbWVkaWF0ZSA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5yb3dHdXR0ZXJzW3RyYWNrXSkge1xuICAgICAgICB0aGlzLnJvd0d1dHRlcnNbdHJhY2tdLmRlc3Ryb3koaW1tZWRpYXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcyQxLnJvd0d1dHRlcnNbdHJhY2tdO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5HcmlkLnByb3RvdHlwZS5oYW5kbGVEcmFnU3RhcnQgPSBmdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQgKGUsIGRpcmVjdGlvbiwgdHJhY2spIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnY29sdW1uJykge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXSkge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdID0gY3JlYXRlR3V0dGVyKFxuICAgICAgICAgICAgJ2NvbHVtbicsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgKSh7XG4gICAgICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdLnN0YXJ0RHJhZ2dpbmcoZSk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyb3cnKSB7XG4gICAgICAgIGlmICh0aGlzLnJvd0d1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgICAgICB0aGlzLnJvd0d1dHRlcnNbdHJhY2tdLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICAgICAncm93JyxcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICApKHtcbiAgICAgICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10uc3RhcnREcmFnZ2luZyhlKTtcbiAgICB9XG59O1xuXG5HcmlkLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoaW1tZWRpYXRlKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgICAgICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gdHJ1ZTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuY29sdW1uR3V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHsgcmV0dXJuIHRoaXMkMS5jb2x1bW5HdXR0ZXJzW3RyYWNrXS5kZXN0cm95KGltbWVkaWF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMkMS5jb2x1bW5HdXR0ZXJzW3RyYWNrXTtcbiAgICAgICAgfSk7IH1cbiAgICApO1xuICAgIE9iamVjdC5rZXlzKHRoaXMucm93R3V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHsgcmV0dXJuIHRoaXMkMS5yb3dHdXR0ZXJzW3RyYWNrXS5kZXN0cm95KGltbWVkaWF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMkMS5yb3dHdXR0ZXJzW3RyYWNrXTtcbiAgICAgICAgfSk7IH1cbiAgICApO1xufTtcblxuZnVuY3Rpb24gaW5kZXggKG9wdGlvbnMpIHsgcmV0dXJuIG5ldyBHcmlkKG9wdGlvbnMpOyB9XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXIuanNcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9sb2dpbi5qc1wiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vc2lkZWJhci5qc1wiO1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29udGVudC5qc1wiO1xuaW1wb3J0IEd1dHRlcnMgZnJvbSBcIi4vZ3V0dGVycy5qc1wiO1xuaW1wb3J0IFNwbGl0IGZyb20gXCJzcGxpdC1ncmlkXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgXCIuLi9kaXN0L2Nzcy9tYWluLmNzc1wiO1xuXG5jb25zdCBwcm9qZWN0RGF0YSA9IFt7XG4gICAgdGl0bGU6IFwiXCIsIFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLCBcbiAgICBzZWxlY3RlZDogdHJ1ZSwgXG4gICAgdGFza3M6IFtdXG59XTtcblxuY29uc3QgdXNlckRhdGEgPSBbXTtcblxuSGVhZGVyKCk7XG5Mb2dpbih1c2VyRGF0YSk7XG5TaWRlYmFyKCk7XG5Db250ZW50KHByb2plY3REYXRhKTtcbkd1dHRlcnMoKTtcblNwbGl0KHtcbiAgICBtYXhTaXplOiAyMDAsXG4gICAgY29sdW1uR3V0dGVyczogW3tcbiAgICAgICAgdHJhY2s6IDEsXG4gICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3V0dGVyLWNvbFwiKVxuICAgIH1dLFxuICAgIHJvd0d1dHRlcnM6IFt7XG4gICAgICAgIHRyYWNrOiAxLFxuICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1dHRlci1yb3dcIilcbiAgICB9XVxufSk7XG5Qcm9qZWN0KHByb2plY3REYXRhKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=