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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@-webkit-keyframes header-spawn {\n  0% {\n    transform: translateY(-500px);\n  }\n  50% {\n    transform: translateY(20px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes header-spawn {\n  0% {\n    transform: translateY(-500px);\n  }\n  50% {\n    transform: translateY(20px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes sidebar-spawn {\n  0% {\n    transform: translateX(-500px);\n  }\n  50% {\n    transform: translateX(20px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n@keyframes sidebar-spawn {\n  0% {\n    transform: translateX(-500px);\n  }\n  50% {\n    transform: translateX(20px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n@-webkit-keyframes list-spawn {\n  from {\n    transform: translateY(1000px);\n  }\n  to {\n    transform: translateY(0px);\n  }\n}\n@keyframes list-spawn {\n  from {\n    transform: translateY(1000px);\n  }\n  to {\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes prompt-spawn {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n@keyframes prompt-spawn {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n@-webkit-keyframes day-spawn {\n  0% {\n    top: 100%;\n    left: 100%;\n  }\n  100% {\n    top: 0%;\n    left: 0%;\n  }\n}\n@keyframes day-spawn {\n  0% {\n    top: 100%;\n    left: 100%;\n  }\n  100% {\n    top: 0%;\n    left: 0%;\n  }\n}\n@-webkit-keyframes content-despawn {\n  0% {\n    opacity: 100%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n@keyframes content-despawn {\n  0% {\n    opacity: 100%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n@-webkit-keyframes content-respawn {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: 0%;\n  }\n}\n@keyframes content-respawn {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: 0%;\n  }\n}\n.button-close {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgb(194, 27, 27);\n  color: white;\n  font-size: 2rem;\n  font-weight: 700;\n  height: 50px;\n  width: 50px;\n  border-top-left-radius: 25px;\n  border-bottom-right-radius: 10px;\n}\n\n.proj-selected {\n  scale: 90%;\n}\n\n.month-toggle:nth-of-type(1) {\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n}\n\n.month-toggle:nth-of-type(2) {\n  border-top-right-radius: 50%;\n  border-bottom-right-radius: 50%;\n}\n\n* {\n  font-family: \"Karla\";\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr;\n  background-color: lightgrey;\n  position: relative;\n}\nbody #content {\n  width: auto;\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 2px 4fr;\n  grid-template-columns: 1fr 2px 4fr;\n  z-index: 0;\n}\nbody #content #header {\n  -webkit-animation: header-spawn;\n          animation: header-spawn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  gap: 0;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  background: lightgrey;\n  padding: 5px 0;\n  transform: translateY(-500px);\n  z-index: 2;\n}\nbody #content #header h1 {\n  font-size: 4rem;\n}\nbody #content #header #header-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\nbody #content #header #header-buttons button {\n  border-style: none;\n  border-radius: 5px;\n  border-color: black;\n  border-width: medium;\n  font-family: \"Roboto Mono\";\n  font-size: 1rem;\n  padding: 20px 40px;\n}\nbody #content #header #header-buttons button:hover {\n  scale: 90%;\n}\nbody #content #header #header-buttons #login-button {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\nbody #content #header #header-buttons #menu-button {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  padding: 20px 40px;\n  transition: 0.25s;\n}\nbody #content #header #header-buttons #menu-button:hover {\n  padding: 20px 120px;\n  transition: 0.25s;\n}\nbody #content #sidebar {\n  -webkit-animation: sidebar-spawn;\n          animation: sidebar-spawn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  display: grid;\n  grid-template-rows: repeat(4, minmax(50px, 80px)) auto minmax(50px, 80px);\n  grid-template-columns: 1fr;\n  grid-row: 3/4;\n  grid-column: 1/2;\n  background: lightgrey;\n  justify-content: center;\n  margin-left: auto;\n  padding: 20px;\n  position: relative;\n  z-index: 1;\n}\nbody #content #sidebar button {\n  border-style: none;\n  border-radius: none;\n  border-color: black;\n  border-width: medium;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  font-family: inherit;\n  font-size: 1.25rem;\n  background: rgba(0, 0, 0, 0);\n}\nbody #content #sidebar button:hover {\n  cursor: pointer;\n  scale: 90%;\n}\nbody #content #sidebar body #content #sidebar-inbox {\n  grid-row: 1/2;\n  grid-column: 1/-1;\n}\nbody #content #sidebar body #content #sidebar-today {\n  grid-row: 2/3;\n  grid-column: 1/-1;\n}\nbody #content #sidebar body #content #sidebar-calendar {\n  grid-row: 3/4;\n  grid-column: 1/-1;\n}\nbody #content #sidebar body #content #sidebar-projects {\n  grid-row: 4/5;\n  grid-column: 1/-1;\n}\nbody #content #sidebar #sidebar-list {\n  grid-row: 5/6;\n  grid-column: 1/-1;\n  height: auto;\n}\nbody #content #sidebar #sidebar-list button {\n  border-style: none;\n  border-radius: none;\n  border-color: black;\n  border-width: medium;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  font-family: \"Roboto Mono\";\n  font-size: 1.25rem;\n  background-color: rgba(0, 0, 0, 0);\n  padding-left: 20%;\n}\nbody #content #sidebar #sidebar-list button img {\n  height: 2rem;\n}\nbody #content #sidebar body #content #sidebar-add {\n  grid-row: 6/7;\n  grid-column: 1/-1;\n}\nbody #content #sidebar .projects-closed {\n  display: none;\n}\nbody #content #sidebar div:empty {\n  display: none;\n}\nbody #content #content-wrapper {\n  -webkit-animation: list-spawn;\n          animation: list-spawn;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  grid-row: 3/4;\n  grid-column: 3/4;\n  min-width: 65vw;\n  min-height: 5vh;\n  background: white;\n  position: relative;\n  z-index: 0;\n}\nbody #content #content-wrapper #reset-layout {\n  border-style: none;\n  border-radius: none;\n  border-color: black;\n  border-width: medium;\n  top: auto;\n  right: 0%;\n  bottom: 0%;\n  left: auto;\n  background: rgba(0, 0, 0, 0);\n  position: absolute;\n  transition: 0.25s;\n}\nbody #content #content-wrapper #reset-layout:hover {\n  top: auto;\n  right: 2%;\n  bottom: 2%;\n  left: auto;\n  cursor: pointer;\n  scale: 120%;\n}\nbody #content #content-wrapper #inbox {\n  width: auto;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  position: relative;\n}\nbody #content #content-wrapper #today {\n  width: auto;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  position: relative;\n}\nbody #content #content-wrapper #calendar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  position: relative;\n}\nbody #content #content-wrapper #calendar #calendar-grid {\n  width: auto;\n  height: 100%;\n  display: grid;\n  grid-template-rows: 50px 50px 1fr;\n  grid-template-columns: 1fr;\n  position: relative;\n}\nbody #content #content-wrapper #calendar #calendar-grid h2, body #content #content-wrapper #calendar #calendar-grid h3, body #content #content-wrapper #calendar #calendar-grid div {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n}\nbody #content #content-wrapper #calendar #calendar-grid #calendar-month {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n}\nbody #content #content-wrapper #calendar #calendar-grid #calendar-month button {\n  border-style: none;\n  border-radius: none;\n  border-color: black;\n  border-width: medium;\n  padding: 10px;\n}\nbody #content #content-wrapper #calendar #calendar-grid #calendar-headers {\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: repeat(7, 1fr);\n  grid-row: 2/3;\n  grid-column: 1/-1;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper {\n  border-style: none;\n  border-radius: 25px;\n  border-color: black;\n  border-width: medium;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: stretch;\n  gap: 0;\n  grid-row: 3/4;\n  grid-column: 1/-1;\n  position: relative;\n  overflow: hidden;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #calendar-days {\n  display: grid;\n  grid-template-rows: repeat(6, 65px);\n  grid-template-columns: repeat(7, 65px);\n  position: relative;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #calendar-days button {\n  width: 65px;\n  height: 65px;\n  font-family: inherit;\n  font-size: 1.5rem;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  transition: 0.25s;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #calendar-days button:hover {\n  border-style: none;\n  border-radius: 15%;\n  border-color: black;\n  border-width: medium;\n  font-family: inherit;\n  font-size: 2.5rem;\n  scale: 120%;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected {\n  -webkit-animation: day-spawn;\n          animation: day-spawn;\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  border-style: none;\n  border-radius: 25px;\n  border-color: black;\n  border-width: medium;\n  display: grid;\n  grid-template-rows: 80px repeat(auto-fill, 1fr);\n  grid-template-columns: repeat(4, 1fr);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: lightgrey;\n  position: absolute;\n  z-index: 2;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected button {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n  position: absolute;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected .calendar-task {\n  grid-row: 2/3;\n  grid-column: auto;\n  background: white;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected #day-num-selected {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  font-family: inherit;\n  font-size: 3rem;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  position: absolute;\n  top: 0;\n}\nbody #content #content-wrapper .list-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n}\nbody #content #content-wrapper .list-content #add-task {\n  border-style: none;\n  border-radius: none;\n  border-color: black;\n  border-width: medium;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-family: inherit;\n  font-size: 1.25rem;\n  padding: 10px 20px;\n}\nbody #content #content-wrapper .list-content #add-task img {\n  height: 36px;\n}\nbody #content #gutter-col {\n  -webkit-animation: sidebar-spawn;\n          animation: sidebar-spawn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  width: 2px;\n  height: auto;\n  grid-row: 3/4;\n  grid-column: 2/3;\n  background: black;\n  justify-self: center;\n  position: relative;\n  transition: 0.5s;\n  z-index: 1;\n}\nbody #content #gutter-col:hover {\n  width: 15px;\n  height: auto;\n  cursor: col-resize;\n}\nbody #content #gutter-row {\n  -webkit-animation: header-spawn;\n          animation: header-spawn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  width: auto;\n  height: 2px;\n  grid-row: 2/3;\n  grid-column: 1/-1;\n  align-self: center;\n  background: black;\n  position: relative;\n  transition: 0.5s;\n  z-index: 2;\n}\nbody #content #gutter-row:hover {\n  width: auto;\n  height: 15px;\n  cursor: row-resize;\n}\nbody .popup-screen {\n  -webkit-animation: prompt-spawn;\n          animation: prompt-spawn;\n  -webkit-animation-duration: 0.25s;\n          animation-duration: 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  z-index: 1;\n}\nbody .popup-screen .popup-prompt {\n  -webkit-animation: header-spawn;\n          animation: header-spawn;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  border-style: none;\n  border-radius: 25px;\n  border-color: black;\n  border-width: medium;\n  width: 500px;\n  height: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  background: white;\n  box-shadow: 5px 5px 20px #000000;\n}\nbody .popup-screen .popup-prompt form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 10px;\n}\nbody .popup-screen .popup-prompt form .input-field {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 0;\n}/*# sourceMappingURL=main.css.map */", "",{"version":3,"sources":["webpack://./scss/_reset.scss","webpack://./dist/css/main.css","webpack://./scss/_animations.scss","webpack://./scss/_buttons.scss","webpack://./scss/_colors.scss","webpack://./scss/main.scss","webpack://./scss/_mixins.scss","webpack://./scss/_typography.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;ACGJ;;ACNA;EACI;IACI,6BAAA;EDSN;ECRI;IACE,2BAAA;EDUN;ECTI;IACE,0BAAA;EDWN;AACF;;AClBA;EACI;IACI,6BAAA;EDSN;ECRI;IACE,2BAAA;EDUN;ECTI;IACE,0BAAA;EDWN;AACF;ACRA;EACI;IACI,6BAAA;EDUN;ECRE;IACI,2BAAA;EDUN;ECRE;IACI,0BAAA;EDUN;AACF;ACnBA;EACI;IACI,6BAAA;EDUN;ECRE;IACI,2BAAA;EDUN;ECRE;IACI,0BAAA;EDUN;AACF;ACPA;EACI;IACI,6BAAA;EDSN;ECPE;IACI,0BAAA;EDSN;AACF;ACfA;EACI;IACI,6BAAA;EDSN;ECPE;IACI,0BAAA;EDSN;AACF;ACNA;EACI;IACI,WAAA;EDQN;ECPI;IACE,aAAA;EDSN;AACF;ACdA;EACI;IACI,WAAA;EDQN;ECPI;IACE,aAAA;EDSN;AACF;ACNA;EACI;IACI,SAAA;IACA,UAAA;EDQN;ECPI;IACE,OAAA;IACA,QAAA;EDSN;AACF;AChBA;EACI;IACI,SAAA;IACA,UAAA;EDQN;ECPI;IACE,OAAA;IACA,QAAA;EDSN;AACF;ACNA;EACI;IACI,aAAA;EDQN;ECPI;IACE,WAAA;EDSN;AACF;ACdA;EACI;IACI,aAAA;EDQN;ECPI;IACE,WAAA;EDSN;AACF;ACNA;EACI;IACI,SAAA;EDQN;ECPI;IACE,OAAA;EDSN;AACF;ACdA;EACI;IACI,SAAA;EDQN;ECPI;IACE,OAAA;EDSN;AACF;AErEA;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EAEA,kCCFO;EDGP,YCDS;EDET,eAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,4BAAA;EACA,gCAAA;AFsEJ;;AEnEA;EACI,UAAA;AFsEJ;;AEnEA;EACI,2BAAA;EACA,8BAAA;AFsEJ;;AEnEA;EACI,4BAAA;EACA,+BAAA;AFsEJ;;AI1FA;EACI,oBAAA;AJ6FJ;;AI1FA;ECHI,aAAA;EACA,uBDGc;ECFd,0BDEmB;EACnB,2BDXS;ECYT,kBAAA;AJ+FJ;AI7FI;ECGA,WDFkB;ECGlB,aDHwB;ECTxB,aAAA;EACA,+BDSkB;ECRlB,kCDQ+B;EAC3B,UAAA;AJkGR;AIhGQ;EC2BJ,+BD1B2B;UC0B3B,uBD1B2B;EC2B3B,8BD3ByC;UC2BzC,sBD3ByC;EC4BzC,qCD5B6C;UC4B7C,6BD5B6C;ECtB7C,aAAA;EACA,mBDsBsB;ECrBtB,6BDqB2B;ECpB3B,mBDoByC;ECnBzC,MALkE;EAelE,aDU0B;ECT1B,iBDSkC;EAC1B,qBDvBC;ECwBD,cAAA;EACA,6BAAA;EACA,UAAA;AJyGZ;AIvGY;EACI,eAAA;AJyGhB;AItGY;EClCR,aAAA;EACA,mBDkC0B;ECjC1B,uBDiC+B;EChC/B,mBDgCuC;EC/BvC,SD+B+C;AJ4GnD;AI1GgB;ECIZ,kBDHgC;ECIhC,kBDJsC;ECKtC,mBAH2D;EAI3D,oBAJ4C;EAX5C,0BC3BS;ED4BT,eDS2C;EAC3B,kBAAA;AJgHpB;AI9GoB;EACI,UAAA;AJgHxB;AI5GgB;EC/CZ,aAAA;EACA,mBD+C8B;EC9C9B,uBD8CmC;EC7CnC,mBD6C2C;EC5C3C,SD4CmD;AJkHvD;AI/GgB;ECnDZ,aAAA;EACA,mBDmD8B;EClD9B,uBDkDmC;ECjDnC,mBDiD2C;EChD3C,MALkE;EDsDlD,kBAAA;EACA,iBAAA;AJqHpB;AInHoB;EACI,mBAAA;EACA,iBAAA;AJqHxB;AI/GQ;EChBJ,gCDiB2B;UCjB3B,wBDiB2B;EChB3B,8BDgB0C;UChB1C,sBDgB0C;ECf1C,qCDe8C;UCf9C,6BDe8C;ECzD9C,aAAA;EACA,yEDyDsB;ECxDtB,0BDwD6E;ECpD7E,aDqD0B;ECpD1B,gBDoDkC;EAC1B,qBDlEC;ECmED,uBAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;EACA,UAAA;AJsHZ;AIpHY;EClCR,kBDmC4B;EClC5B,mBDkCkC;ECjClC,mBAH2D;EAI3D,oBAJ4C;EAxC5C,aAAA;EACA,mBD4E0B;EC3E1B,2BD2E+B;EC1E/B,mBD0E2C;ECzE3C,SDyEmD;EChDnD,oBDiD0B;EChD1B,kBDgDmC;EACvB,4BDhFF;AH8Md;AI5HgB;EACI,eAAA;EACA,UAAA;AJ8HpB;AI1HY;ECzER,aD0E8B;ECzE9B,iBDyEsC;AJ6H1C;AI1HY;EC7ER,aD8E8B;EC7E9B,iBD6EsC;AJ6H1C;AI1HY;ECjFR,aDkF8B;ECjF9B,iBDiFsC;AJ6H1C;AI1HY;ECrFR,aDsF8B;ECrF9B,iBDqFsC;AJ6H1C;AI1HY;ECzFR,aD0F8B;ECzF9B,iBDyFsC;EAC1B,YAAA;AJ6HhB;AI3HgB;EClEZ,kBDmEgC;EClEhC,mBDkEsC;ECjEtC,mBAH2D;EAI3D,oBAJ4C;EAxC5C,aAAA;EACA,mBD4G8B;EC3G9B,uBD2GmC;EC1GnC,mBD0G2C;ECzG3C,QDyGmD;EChFnD,0BC3BS;ED4BT,kBDgF2C;EAC3B,kCDhHN;ECiHM,iBAAA;AJqIpB;AInIoB;EACI,YAAA;AJqIxB;AIhIY;EC1GR,aD2G8B;EC1G9B,iBD0GsC;AJmI1C;AIhIY;EACI,aAAA;AJkIhB;AI/HY;EACI,aAAA;AJiIhB;AI7HQ;ECrFJ,6BDsF2B;UCtF3B,qBDsF2B;ECrF3B,gCDqFuC;UCrFvC,wBDqFuC;ECpFvC,qCDoF6C;UCpF7C,6BDoF6C;ECtI7C,aAAA;EACA,mBDsIsB;ECrItB,uBDqI2B;ECpI3B,mBDoImC;ECnInC,MALkE;EAelE,aD0H0B;ECzH1B,gBDyHkC;EChHlC,eDiH0B;EChH1B,eDgHgC;EACxB,iBAAA;EACA,kBAAA;EACA,UAAA;AJuIZ;AIrIY;ECrGR,kBDsG4B;ECrG5B,mBAF+B;EAG/B,mBAH2D;EAI3D,oBAJ4C;EAN5C,SD8G8B;EC7G9B,SD6GoC;EC5GpC,UD4GwC;EC3GxC,UD2G4C;EAChC,4BDlJF;ECmJE,kBAAA;EACA,iBAAA;AJ6IhB;AI3IgB;ECnHZ,SDoHkC;ECnHlC,SDmHwC;EClHxC,UDkH4C;ECjH5C,UDiHgD;EAChC,eAAA;EACA,WAAA;AJgJpB;AI5IY;ECzIR,WD0I0B;ECzI1B,YDyIgC;EC7JhC,aAAA;EACA,sBD6J0B;EC5J1B,uBD4JkC;EC3JlC,mBD2J0C;EC1J1C,MALkE;EDgKtD,kBAAA;AJmJhB;AIhJY;EC/IR,WDgJ0B;EC/I1B,YD+IgC;ECnKhC,aAAA;EACA,sBDmK0B;EClK1B,uBDkKkC;ECjKlC,mBDiK0C;EChK1C,MALkE;EDsKtD,kBAAA;AJuJhB;AIpJY;ECxKR,aAAA;EACA,sBDwK0B;ECvK1B,uBDuKkC;ECtKlC,mBDsK0C;ECrK1C,MALkE;ED2KtD,kBAAA;AJ0JhB;AIxJgB;ECzJZ,WD0J8B;ECzJ9B,YDyJoC;ECrKpC,aAAA;EACA,iCDqK8B;ECpK9B,0BDoK6C;EAC7B,kBAAA;AJ6JpB;AI3JoB;ECjLhB,aAAA;EACA,mBDiLkC;EChLlC,uBDgLuC;EC/KvC,mBD+K+C;EC9K/C,MALkE;ALoVtE;AI9JoB;ECrLhB,aAAA;EACA,mBDqLkC;ECpLlC,8BDoLuC;ECnLvC,mBDmLsD;EClLtD,MALkE;EAelE,aDyKsC;ECxKtC,iBDwK8C;AJqKlD;AInKwB;EChJpB,kBDiJwC;EChJxC,mBAF+B;EAG/B,mBAH2D;EAI3D,oBAJ4C;EDmJpB,aAAA;AJwK5B;AIpKoB;ECvLhB,aAAA;EACA,uBDuLkC;ECtLlC,qCDsLuC;EClLvC,aDmLsC;EClLtC,iBDkL8C;AJyKlD;AItKoB;EC3JhB,kBD4JoC;EC3JpC,mBD2J0C;EC1J1C,mBAH2D;EAI3D,oBAJ4C;EAxC5C,aAAA;EACA,mBDqMkC;ECpMlC,uBDoMuC;ECnMvC,oBDmM+C;EClM/C,MALkE;EAelE,aDyLsC;ECxLtC,iBDwL8C;EAC1B,kBAAA;EACA,gBAAA;AJgLxB;AI9KwB;ECnMpB,aAAA;EACA,mCDmMsC;EClMtC,sCDkMuD;EAC/B,kBAAA;AJkL5B;AIhL4B;EC5LxB,WD6L0C;EC5L1C,YD4LgD;ECnLhD,oBDoL0C;ECnL1C,iBDmLmD;EACvB,oCAAA;EACA,iBAAA;AJoLhC;AIlLgC;EC5K5B,kBD6KgD;EC5KhD,kBD4KsD;EC3KtD,mBAH2D;EAI3D,oBAJ4C;EAX5C,oBD0L8C;ECzL9C,iBDyLuD;EACvB,WAAA;AJwLpC;AInLwB;EC7KpB,4BD8K2C;UC9K3C,oBD8K2C;EC7K3C,gCD6KsD;UC7KtD,wBD6KsD;EC5KtD,qCD4K4D;UC5K5D,6BD4K4D;ECrL5D,kBDsLwC;ECrLxC,mBDqL8C;ECpL9C,mBAH2D;EAI3D,oBAJ4C;EAhC5C,aAAA;EACA,+CDuNsC;ECtNtC,qCDsNmE;EC9LnE,MD+L0C;EC9L1C,QD8L6C;EC7L7C,SD6LgD;EC5LhD,OD4LmD;EAC3B,2BAAA;EACA,kBAAA;EACA,UAAA;AJ+L5B;AI7L4B;ECpMxB,MDqM8C;ECpM9C,WDoMiD;ECnMjD,YDmMuD;EClMvD,ODkM6D;EACjC,kBAAA;AJkMhC;AI/L4B;EC7NxB,aD8N8C;EC7N9C,iBAF+B;EDgOH,iBAAA;AJkMhC;AI/L4B;EChPxB,aAAA;EACA,mBDgP0C;EC/O1C,uBD+O+C;EC9O/C,mBD8OuD;EC7OvD,MALkE;EA8BlE,oBDqN0C;ECpN1C,eDoNmD;ECpOnD,aDqO8C;ECpO9C,iBDoOsD;EAC1B,kBAAA;EACA,MAAA;AJuMhC;AIhMY;EC5PR,aAAA;EACA,sBD4P0B;EC3P1B,uBD2PkC;EC1PlC,mBD0P0C;ECzP1C,MALkE;ALoctE;AIpMgB;ECtNZ,kBDuNgC;ECtNhC,mBAF+B;EAG/B,mBAH2D;EAI3D,oBAJ4C;EAxC5C,aAAA;EACA,mBDgQ8B;EC/P9B,uBD+PmC;EC9PnC,mBD8P2C;EC7P3C,SD6PmD;ECpOnD,oBDqO8B;ECpO9B,kBDoOuC;EACvB,kBAAA;AJ8MpB;AI5MoB;EACI,YAAA;AJ8MxB;AIxMQ;EC5NJ,gCD6N2B;UC7N3B,wBD6N2B;EC5N3B,8BD4N0C;UC5N1C,sBD4N0C;EC3N1C,qCD2N8C;UC3N9C,6BD2N8C;EC1P9C,UD2PsB;EC1PtB,YD0P2B;EChQ3B,aDiQ0B;EChQ1B,gBDgQkC;EAC1B,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;AJ8MZ;AI5MY;ECnQR,WDoQ0B;ECnQ1B,YDmQgC;EACpB,kBAAA;AJ+MhB;AI3MQ;EC5OJ,+BD6O2B;UC7O3B,uBD6O2B;EC5O3B,8BD4OyC;UC5OzC,sBD4OyC;EC3OzC,qCD2O6C;UC3O7C,6BD2O6C;EC1Q7C,WD2QsB;EC1QtB,WD0Q4B;EChR5B,aDiR0B;EChR1B,iBDgRkC;EAC1B,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;AJiNZ;AI/MY;ECnRR,WDoR0B;ECnR1B,YDmRgC;EACpB,kBAAA;AJkNhB;AI7MI;EC7PA,+BD8PuB;UC9PvB,uBD8PuB;EC7PvB,iCD6PqC;UC7PrC,yBD6PqC;EC5PrC,qCD4P4C;UC5P5C,6BD4P4C;EC3R5C,WD4RkB;EC3RlB,YD2RwB;EC/SxB,aAAA;EACA,mBD+SkB;EC9SlB,uBD8SuB;EC7SvB,mBD6S+B;EC5S/B,MALkE;EDkT9D,8BDjTE;ECkTF,kBAAA;EACA,UAAA;AJsNR;AIpNQ;ECrQJ,+BDsQ2B;UCtQ3B,uBDsQ2B;ECrQ3B,gCDqQyC;UCrQzC,wBDqQyC;ECpQzC,qCDoQ+C;UCpQ/C,6BDoQ+C;EC7Q/C,kBD8QwB;EC7QxB,mBD6Q8B;EC5Q9B,mBAH2D;EAI3D,oBAJ4C;EArB5C,YDqSsB;ECpStB,aDoS6B;ECxT7B,aAAA;EACA,sBDwTsB;ECvTtB,uBDuT8B;ECtT9B,mBDsTsC;ECrTtC,QDqT8C;EACtC,iBAAA;EACA,gCAAA;AJgOZ;AI9NY;EC7TR,aAAA;EACA,sBD6T0B;EC5T1B,6BD4TkC;EC3TlC,mBD2TgD;EC1ThD,SD0TwD;AJoO5D;AIlOgB;EChUZ,aAAA;EACA,mBDgU8B;EC/T9B,6BD+TmC;EC9TnC,mBD8TiD;EC7TjD,MALkE;AL0iBtE,CAAA,mCAAA","sourceRoot":""}]);
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
    let currentMonth = new Date().getMonth() + 1;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

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
        dayNum.setAttribute("id", "day-num-selected");
        dayNum.textContent = `${months[month - 1]} ${day}`;
        daySelected.appendChild(dayNum);

        const close = document.createElement("button");
        close.innerHTML = "X";
        close.id = "close-day";
        close.className = "button-close";
        daySelected.appendChild(close);

        for (const project of projectData) {
            for (const projTask of project.tasks) {
                const taskMonth = Number(projTask.date.split("-")[1]);
                const taskDay = projTask.date.split("-")[2];

                if (month === taskMonth && day === taskDay) {
                    console.log(projTask);

                    const task = document.createElement("div");
                    task.setAttribute("class", "calendar-task");
                    const taskText = document.createElement("h5");
                    taskText.textContent = projTask.task;
                    task.appendChild(taskText);
                    daySelected.appendChild(task);
                }
            }
        }

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

            if (e.currentTarget.id === "calendar-right") {
                currentMonth = ((currentMonth + 1) + 12) % 12;
                setMonth(currentMonth - 1);
            } else {
                currentMonth = ((currentMonth - 1) + 12) % 12;
                setMonth(currentMonth - 1);
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
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");


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

    document.getElementById("add-task").addEventListener("click", function() {
        (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectData);
    });
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
    projField.setAttribute("placeholder", "New Project");
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

            let projName = document.getElementById("proj-name").value;

            if (!projName) {
                const projNum = document.getElementById("sidebar-list").childElementCount;
                projName = `Project ${projNum + 1}`;
            }

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

            newProj.addEventListener("click", function() {
                const activeProj = new RegExp("proj-selected");
                
                if (!activeProj.test(newProj.classList)) {
                    newProj.classList.add("proj-selected");
                    const projName = newProj.childNodes[1].textContent;

                    for (const project of projectData) {
                        if (project.title === newProj.id) {
                            project.selected = true;
                        }
                    }
                } else {
                    newProj.classList.remove("proj-selected");

                    for (const project of projectData) {
                        if (project.title === newProj.id) {
                            project.selected = false;
                        }
                    }
                }
            });

            const projectsList = document.getElementById("sidebar-list");
            projectsList.appendChild(newProj);

            document.getElementById("proj-screen").remove();
        });

        document.getElementById("close-proj").addEventListener("click", function() {
            document.getElementById("proj-screen").remove();
        });
    });

    class Project {
        constructor(title) {
            this.title = title;
            this.description = "";
            this.selected = false;
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
    projectsPic.setAttribute("src", "../src/images/expand_circle_down.png");
    projectsPic.setAttribute("id", "projects-pic");
    projects.appendChild(projectsPic);

    const projectsText = document.createElement("h3");
    projectsText.textContent = "Projects";
    projects.appendChild(projectsText);
    sidebar.appendChild(projects);

    const projectsList = document.createElement("div");
    projectsList.setAttribute("id", "sidebar-list");
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
        const regEx = /arrow_circle_right.png$/;

        if (regEx.test(state)) {
            document.getElementById("sidebar-list").classList.remove("projects-closed");
            document.getElementById("projects-pic").setAttribute("src", "../src/images/expand_circle_down.png");
        } else {
            document.getElementById("sidebar-list").classList.add("projects-closed");
            document.getElementById("projects-pic").setAttribute("src", "../src/images/arrow_circle_right.png");
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
    taskField.setAttribute("placeholder", "New Task");
    logTask.appendChild(taskField);
    form.appendChild(logTask);

    const logDate = document.createElement("div");
    logDate.setAttribute("class", "input-field");

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "date-name");
    dateLabel.textContent = "Due Date:";
    logDate.appendChild(dateLabel);

    const dateField = document.createElement("input");
    dateField.setAttribute("id", "date-name");
    dateField.setAttribute("name", "date-name");
    dateField.setAttribute("type", "date");
    dateField.setAttribute("value", "2022-10-03");
    logDate.appendChild(dateField);
    form.appendChild(logDate);

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
        option.value = project.title;
        option.textContent = project.title;

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

        let task = document.getElementById("task-name").value;
        let date = document.getElementById("date-name").value;

        if (!task) {
            task = "New Task";
        }

        const newTask = new Task(task, date);

        const taskProj = document.getElementById("proj-name").value;

        for (const project of projectData) {
            if (project.title === taskProj) {
                project["tasks"].push(newTask);
                break;
            }
        }

        document.getElementById("task-screen").remove();
    });

    document.getElementById("close-task").addEventListener("click", function() {
        document.getElementById("task-screen").remove();
    });

    class Task {
        constructor(task, date) {
            this.task = task;
            this.date = date;
        }
    }
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









const userData = [];
const projectData = [];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sY0FBYyxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsWUFBWSxhQUFhLGVBQWUsZUFBZSxhQUFhLFlBQVksYUFBYSxhQUFhLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLGFBQWEsZUFBZSxlQUFlLGNBQWMsT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsYUFBYSxlQUFlLGVBQWUsY0FBYyxPQUFPLE9BQU8sV0FBVyxhQUFhLGVBQWUsZUFBZSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sTUFBTSxjQUFjLGVBQWUsZUFBZSxlQUFlLGFBQWEsYUFBYSxZQUFZLGFBQWEsZUFBZSxjQUFjLGVBQWUsYUFBYSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLGNBQWMsZUFBZSxjQUFjLGFBQWEsWUFBWSxhQUFhLGVBQWUsZUFBZSxjQUFjLGVBQWUsZUFBZSxhQUFhLE1BQU0sT0FBTyxVQUFVLFVBQVUsT0FBTyxNQUFNLGFBQWEsZUFBZSxPQUFPLE1BQU0sYUFBYSxlQUFlLE9BQU8sTUFBTSxhQUFhLGVBQWUsT0FBTyxNQUFNLGFBQWEsZUFBZSxPQUFPLE1BQU0sYUFBYSxlQUFlLFdBQVcsT0FBTyxPQUFPLGNBQWMsZUFBZSxjQUFjLGFBQWEsWUFBWSxhQUFhLGVBQWUsZUFBZSxjQUFjLGNBQWMsY0FBYyxhQUFhLFlBQVksT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLGFBQWEsZUFBZSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sY0FBYyxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsWUFBWSxhQUFhLGVBQWUsZUFBZSxhQUFhLGFBQWEsZUFBZSxjQUFjLGNBQWMsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLGNBQWMsY0FBYyxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsY0FBYyxhQUFhLFlBQVksV0FBVyxPQUFPLE9BQU8sYUFBYSxjQUFjLGNBQWMsY0FBYyxXQUFXLFVBQVUsT0FBTyxNQUFNLGFBQWEsY0FBYyxZQUFZLGFBQWEsZUFBZSxlQUFlLGFBQWEsYUFBYSxPQUFPLE1BQU0sYUFBYSxjQUFjLFlBQVksYUFBYSxlQUFlLGVBQWUsYUFBYSxhQUFhLE9BQU8sTUFBTSxXQUFXLGFBQWEsZUFBZSxlQUFlLGFBQWEsYUFBYSxPQUFPLE9BQU8sYUFBYSxjQUFjLFlBQVksYUFBYSxlQUFlLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxlQUFlLGVBQWUsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLGVBQWUsZUFBZSxhQUFhLGFBQWEsZUFBZSxPQUFPLE9BQU8sZUFBZSxjQUFjLGFBQWEsYUFBYSxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsZUFBZSxjQUFjLGVBQWUsT0FBTyxPQUFPLGVBQWUsZUFBZSxjQUFjLGFBQWEsWUFBWSxhQUFhLGVBQWUsZUFBZSxhQUFhLGFBQWEsZUFBZSxZQUFZLFdBQVcsT0FBTyxPQUFPLFlBQVksYUFBYSxlQUFlLFlBQVksT0FBTyxPQUFPLGNBQWMsY0FBYyxlQUFlLGVBQWUsWUFBWSxXQUFXLE9BQU8sT0FBTyxlQUFlLGVBQWUsY0FBYyxhQUFhLGNBQWMsZUFBZSxXQUFXLE9BQU8sT0FBTyxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsY0FBYyxhQUFhLFlBQVksYUFBYSxlQUFlLGNBQWMsY0FBYyxjQUFjLGNBQWMsWUFBWSxXQUFXLFVBQVUsT0FBTyxPQUFPLGNBQWMsY0FBYyxjQUFjLGNBQWMsWUFBWSxPQUFPLE9BQU8sY0FBYyxjQUFjLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxlQUFlLGVBQWUsYUFBYSxlQUFlLGNBQWMsY0FBYyxlQUFlLFlBQVksVUFBVSxPQUFPLE1BQU0sV0FBVyxhQUFhLGVBQWUsZUFBZSxhQUFhLE9BQU8sT0FBTyxjQUFjLGNBQWMsYUFBYSxhQUFhLFlBQVksYUFBYSxlQUFlLGVBQWUsY0FBYyxlQUFlLGVBQWUsWUFBWSxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sY0FBYyxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsY0FBYyxjQUFjLGNBQWMsZUFBZSxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsY0FBYyxZQUFZLE9BQU8sTUFBTSxjQUFjLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxjQUFjLGNBQWMsY0FBYyxlQUFlLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxjQUFjLFlBQVksT0FBTyxNQUFNLGNBQWMsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGNBQWMsY0FBYyxZQUFZLGFBQWEsZUFBZSxlQUFlLGFBQWEsY0FBYyxZQUFZLFVB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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdHQUFnRyxZQUFZO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUNsR2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsWUFBWTtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoSGU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUMzRmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25IZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWkEsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0EsVUFBVSxTQUFTO0FBQ25CO0FBQ0EsVUFBVSxTQUFTO0FBQ25CO0FBQ0EsVUFBVSxTQUFTO0FBQ25CLDRCQUE0QixTQUFTO0FBQ3JDO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5QjtBQUNBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywrQkFBK0I7QUFDekU7O0FBRUE7QUFDQTs7QUFFQSwwREFBMEQ7QUFDMUQsNEJBQTRCLHVCQUF1QjtBQUNuRCxtQ0FBbUMsNkNBQTZDOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsNkRBQTZELDZCQUE2Qjs7QUFFMUY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixHQUFHO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQ0FBbUMsR0FBRztBQUN0QztBQUNBLG9EQUFvRDtBQUNwRCwrQ0FBK0M7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQStEO0FBQy9EO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQixpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7VUNycUJyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUNGO0FBQ0k7QUFDQTtBQUNBO0FBQ0o7QUFDSTtBQUNMOztBQUU5QjtBQUNBOztBQUVBLHNEQUFNO0FBQ04scURBQUs7QUFDTCx1REFBTztBQUNQLHVEQUFPO0FBQ1AsdURBQU87QUFDUCxzREFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0QsdURBQU8sYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL2Rpc3QvY3NzL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vZGlzdC9jc3MvbWFpbi5jc3M/YTdiNSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZ3V0dGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zcGxpdC1ncmlkL2Rpc3Qvc3BsaXQtZ3JpZC5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rTW9ubyk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2FybGEpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgaGVhZGVyLXNwYXduIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgaGVhZGVyLXNwYXduIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBzaWRlYmFyLXNwYXduIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDBweCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2lkZWJhci1zcGF3biB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGlzdC1zcGF3biB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGxpc3Qtc3Bhd24ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHByb21wdC1zcGF3biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcHJvbXB0LXNwYXduIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGRheS1zcGF3biB7XFxuICAwJSB7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgbGVmdDogMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0b3A6IDAlO1xcbiAgICBsZWZ0OiAwJTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBkYXktc3Bhd24ge1xcbiAgMCUge1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGxlZnQ6IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdG9wOiAwJTtcXG4gICAgbGVmdDogMCU7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBjb250ZW50LWRlc3Bhd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGNvbnRlbnQtZGVzcGF3biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBjb250ZW50LXJlc3Bhd24ge1xcbiAgMCUge1xcbiAgICB0b3A6IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdG9wOiAwJTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBjb250ZW50LXJlc3Bhd24ge1xcbiAgMCUge1xcbiAgICB0b3A6IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdG9wOiAwJTtcXG4gIH1cXG59XFxuLmJ1dHRvbi1jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMjcsIDI3KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLnByb2otc2VsZWN0ZWQge1xcbiAgc2NhbGU6IDkwJTtcXG59XFxuXFxuLm1vbnRoLXRvZ2dsZTpudGgtb2YtdHlwZSgxKSB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxufVxcblxcbi5tb250aC10b2dnbGU6bnRoLW9mLXR5cGUoMikge1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLYXJsYVxcXCI7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmJvZHkgI2NvbnRlbnQge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJweCA0ZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAycHggNGZyO1xcbiAgei1pbmRleDogMDtcXG59XFxuYm9keSAjY29udGVudCAjaGVhZGVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBoZWFkZXItc3Bhd247XFxuICAgICAgICAgIGFuaW1hdGlvbjogaGVhZGVyLXNwYXduO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMDtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5ib2R5ICNjb250ZW50ICNoZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5ib2R5ICNjb250ZW50ICNoZWFkZXIgI2hlYWRlci1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5ib2R5ICNjb250ZW50ICNoZWFkZXIgI2hlYWRlci1idXR0b25zIGJ1dHRvbiB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBNb25vXFxcIjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcXG59XFxuYm9keSAjY29udGVudCAjaGVhZGVyICNoZWFkZXItYnV0dG9ucyBidXR0b246aG92ZXIge1xcbiAgc2NhbGU6IDkwJTtcXG59XFxuYm9keSAjY29udGVudCAjaGVhZGVyICNoZWFkZXItYnV0dG9ucyAjbG9naW4tYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5ib2R5ICNjb250ZW50ICNoZWFkZXIgI2hlYWRlci1idXR0b25zICNtZW51LWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMDtcXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5ib2R5ICNjb250ZW50ICNoZWFkZXIgI2hlYWRlci1idXR0b25zICNtZW51LWJ1dHRvbjpob3ZlciB7XFxuICBwYWRkaW5nOiAyMHB4IDEyMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcbmJvZHkgI2NvbnRlbnQgI3NpZGViYXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNpZGViYXItc3Bhd247XFxuICAgICAgICAgIGFuaW1hdGlvbjogc2lkZWJhci1zcGF3bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbm1heCg1MHB4LCA4MHB4KSkgYXV0byBtaW5tYXgoNTBweCwgODBweCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyIGJ1dHRvbiB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBzY2FsZTogOTAlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyIGJvZHkgI2NvbnRlbnQgI3NpZGViYXItaW5ib3gge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyIGJvZHkgI2NvbnRlbnQgI3NpZGViYXItdG9kYXkge1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyIGJvZHkgI2NvbnRlbnQgI3NpZGViYXItY2FsZW5kYXIge1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyIGJvZHkgI2NvbnRlbnQgI3NpZGViYXItcHJvamVjdHMge1xcbiAgZ3JpZC1yb3c6IDQvNTtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyICNzaWRlYmFyLWxpc3Qge1xcbiAgZ3JpZC1yb3c6IDUvNjtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyICNzaWRlYmFyLWxpc3QgYnV0dG9uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCI7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XFxufVxcbmJvZHkgI2NvbnRlbnQgI3NpZGViYXIgI3NpZGViYXItbGlzdCBidXR0b24gaW1nIHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuYm9keSAjY29udGVudCAjc2lkZWJhciBib2R5ICNjb250ZW50ICNzaWRlYmFyLWFkZCB7XFxuICBncmlkLXJvdzogNi83O1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcbmJvZHkgI2NvbnRlbnQgI3NpZGViYXIgLnByb2plY3RzLWNsb3NlZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyIGRpdjplbXB0eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGxpc3Qtc3Bhd247XFxuICAgICAgICAgIGFuaW1hdGlvbjogbGlzdC1zcGF3bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBtaW4td2lkdGg6IDY1dnc7XFxuICBtaW4taGVpZ2h0OiA1dmg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDA7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjcmVzZXQtbGF5b3V0IHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XFxuICB0b3A6IGF1dG87XFxuICByaWdodDogMCU7XFxuICBib3R0b206IDAlO1xcbiAgbGVmdDogYXV0bztcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNyZXNldC1sYXlvdXQ6aG92ZXIge1xcbiAgdG9wOiBhdXRvO1xcbiAgcmlnaHQ6IDIlO1xcbiAgYm90dG9tOiAyJTtcXG4gIGxlZnQ6IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBzY2FsZTogMTIwJTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNpbmJveCB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI3RvZGF5IHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDUwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgaDIsIGJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgaDMsIGJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNjYWxlbmRhci1tb250aCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDA7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgI2NhbGVuZGFyLW1vbnRoIGJ1dHRvbiB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjY2FsZW5kYXItaGVhZGVycyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNkYXlzLXdyYXBwZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IG1lZGl1bTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGdhcDogMDtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgI2RheXMtd3JhcHBlciAjY2FsZW5kYXItZGF5cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgNjVweCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCA2NXB4KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjZGF5cy13cmFwcGVyICNjYWxlbmRhci1kYXlzIGJ1dHRvbiB7XFxuICB3aWR0aDogNjVweDtcXG4gIGhlaWdodDogNjVweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjZGF5cy13cmFwcGVyICNjYWxlbmRhci1kYXlzIGJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNSU7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgc2NhbGU6IDEyMCU7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgI2RheXMtd3JhcHBlciAjZGF5LXNlbGVjdGVkIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBkYXktc3Bhd247XFxuICAgICAgICAgIGFuaW1hdGlvbjogZGF5LXNwYXduO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IG1lZGl1bTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggcmVwZWF0KGF1dG8tZmlsbCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNkYXlzLXdyYXBwZXIgI2RheS1zZWxlY3RlZCBidXR0b24ge1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxuICBib3R0b206IGF1dG87XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNkYXlzLXdyYXBwZXIgI2RheS1zZWxlY3RlZCAuY2FsZW5kYXItdGFzayB7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZ3JpZC1jb2x1bW46IGF1dG87XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjZGF5cy13cmFwcGVyICNkYXktc2VsZWN0ZWQgI2RheS1udW0tc2VsZWN0ZWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDA7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyIC5saXN0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDA7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAubGlzdC1jb250ZW50ICNhZGQtdGFzayB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyIC5saXN0LWNvbnRlbnQgI2FkZC10YXNrIGltZyB7XFxuICBoZWlnaHQ6IDM2cHg7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2d1dHRlci1jb2wge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNpZGViYXItc3Bhd247XFxuICAgICAgICAgIGFuaW1hdGlvbjogc2lkZWJhci1zcGF3bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5ib2R5ICNjb250ZW50ICNndXR0ZXItY29sOmhvdmVyIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgY3Vyc29yOiBjb2wtcmVzaXplO1xcbn1cXG5ib2R5ICNjb250ZW50ICNndXR0ZXItcm93IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBoZWFkZXItc3Bhd247XFxuICAgICAgICAgIGFuaW1hdGlvbjogaGVhZGVyLXNwYXduO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMnB4O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgei1pbmRleDogMjtcXG59XFxuYm9keSAjY29udGVudCAjZ3V0dGVyLXJvdzpob3ZlciB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMTVweDtcXG4gIGN1cnNvcjogcm93LXJlc2l6ZTtcXG59XFxuYm9keSAucG9wdXAtc2NyZWVuIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwcm9tcHQtc3Bhd247XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHJvbXB0LXNwYXduO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMjVzO1xcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMjVzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxuYm9keSAucG9wdXAtc2NyZWVuIC5wb3B1cC1wcm9tcHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGhlYWRlci1zcGF3bjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBoZWFkZXItc3Bhd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCAjMDAwMDAwO1xcbn1cXG5ib2R5IC5wb3B1cC1zY3JlZW4gLnBvcHVwLXByb21wdCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5ib2R5IC5wb3B1cC1zY3JlZW4gLnBvcHVwLXByb21wdCBmb3JtIC5pbnB1dC1maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMDtcXG59LyojIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc2Nzcy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vZGlzdC9jc3MvbWFpbi5jc3NcIixcIndlYnBhY2s6Ly8uL3Njc3MvX2FuaW1hdGlvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc2Nzcy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zY3NzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc2Nzcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3Njc3MvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zY3NzL190eXBvZ3JhcGh5LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDR0o7O0FDTkE7RUFDSTtJQUNJLDZCQUFBO0VEU047RUNSSTtJQUNFLDJCQUFBO0VEVU47RUNUSTtJQUNFLDBCQUFBO0VEV047QUFDRjs7QUNsQkE7RUFDSTtJQUNJLDZCQUFBO0VEU047RUNSSTtJQUNFLDJCQUFBO0VEVU47RUNUSTtJQUNFLDBCQUFBO0VEV047QUFDRjtBQ1JBO0VBQ0k7SUFDSSw2QkFBQTtFRFVOO0VDUkU7SUFDSSwyQkFBQTtFRFVOO0VDUkU7SUFDSSwwQkFBQTtFRFVOO0FBQ0Y7QUNuQkE7RUFDSTtJQUNJLDZCQUFBO0VEVU47RUNSRTtJQUNJLDJCQUFBO0VEVU47RUNSRTtJQUNJLDBCQUFBO0VEVU47QUFDRjtBQ1BBO0VBQ0k7SUFDSSw2QkFBQTtFRFNOO0VDUEU7SUFDSSwwQkFBQTtFRFNOO0FBQ0Y7QUNmQTtFQUNJO0lBQ0ksNkJBQUE7RURTTjtFQ1BFO0lBQ0ksMEJBQUE7RURTTjtBQUNGO0FDTkE7RUFDSTtJQUNJLFdBQUE7RURRTjtFQ1BJO0lBQ0UsYUFBQTtFRFNOO0FBQ0Y7QUNkQTtFQUNJO0lBQ0ksV0FBQTtFRFFOO0VDUEk7SUFDRSxhQUFBO0VEU047QUFDRjtBQ05BO0VBQ0k7SUFDSSxTQUFBO0lBQ0EsVUFBQTtFRFFOO0VDUEk7SUFDRSxPQUFBO0lBQ0EsUUFBQTtFRFNOO0FBQ0Y7QUNoQkE7RUFDSTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VEUU47RUNQSTtJQUNFLE9BQUE7SUFDQSxRQUFBO0VEU047QUFDRjtBQ05BO0VBQ0k7SUFDSSxhQUFBO0VEUU47RUNQSTtJQUNFLFdBQUE7RURTTjtBQUNGO0FDZEE7RUFDSTtJQUNJLGFBQUE7RURRTjtFQ1BJO0lBQ0UsV0FBQTtFRFNOO0FBQ0Y7QUNOQTtFQUNJO0lBQ0ksU0FBQTtFRFFOO0VDUEk7SUFDRSxPQUFBO0VEU047QUFDRjtBQ2RBO0VBQ0k7SUFDSSxTQUFBO0VEUU47RUNQSTtJQUNFLE9BQUE7RURTTjtBQUNGO0FFckVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUVBLGtDQ0ZPO0VER1AsWUNEUztFREVULGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtBRnNFSjs7QUVuRUE7RUFDSSxVQUFBO0FGc0VKOztBRW5FQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7QUZzRUo7O0FFbkVBO0VBQ0ksNEJBQUE7RUFDQSwrQkFBQTtBRnNFSjs7QUkxRkE7RUFDSSxvQkFBQTtBSjZGSjs7QUkxRkE7RUNISSxhQUFBO0VBQ0EsdUJER2M7RUNGZCwwQkRFbUI7RUFDbkIsMkJEWFM7RUNZVCxrQkFBQTtBSitGSjtBSTdGSTtFQ0dBLFdERmtCO0VDR2xCLGFESHdCO0VDVHhCLGFBQUE7RUFDQSwrQkRTa0I7RUNSbEIsa0NEUStCO0VBQzNCLFVBQUE7QUprR1I7QUloR1E7RUMyQkosK0JEMUIyQjtVQzBCM0IsdUJEMUIyQjtFQzJCM0IsOEJEM0J5QztVQzJCekMsc0JEM0J5QztFQzRCekMscUNENUI2QztVQzRCN0MsNkJENUI2QztFQ3RCN0MsYUFBQTtFQUNBLG1CRHNCc0I7RUNyQnRCLDZCRHFCMkI7RUNwQjNCLG1CRG9CeUM7RUNuQnpDLE1BTGtFO0VBZWxFLGFEVTBCO0VDVDFCLGlCRFNrQztFQUMxQixxQkR2QkM7RUN3QkQsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBSnlHWjtBSXZHWTtFQUNJLGVBQUE7QUp5R2hCO0FJdEdZO0VDbENSLGFBQUE7RUFDQSxtQkRrQzBCO0VDakMxQix1QkRpQytCO0VDaEMvQixtQkRnQ3VDO0VDL0J2QyxTRCtCK0M7QUo0R25EO0FJMUdnQjtFQ0laLGtCREhnQztFQ0loQyxrQkRKc0M7RUNLdEMsbUJBSDJEO0VBSTNELG9CQUo0QztFQVg1QywwQkMzQlM7RUQ0QlQsZURTMkM7RUFDM0Isa0JBQUE7QUpnSHBCO0FJOUdvQjtFQUNJLFVBQUE7QUpnSHhCO0FJNUdnQjtFQy9DWixhQUFBO0VBQ0EsbUJEK0M4QjtFQzlDOUIsdUJEOENtQztFQzdDbkMsbUJENkMyQztFQzVDM0MsU0Q0Q21EO0FKa0h2RDtBSS9HZ0I7RUNuRFosYUFBQTtFQUNBLG1CRG1EOEI7RUNsRDlCLHVCRGtEbUM7RUNqRG5DLG1CRGlEMkM7RUNoRDNDLE1BTGtFO0VEc0RsRCxrQkFBQTtFQUNBLGlCQUFBO0FKcUhwQjtBSW5Ib0I7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FKcUh4QjtBSS9HUTtFQ2hCSixnQ0RpQjJCO1VDakIzQix3QkRpQjJCO0VDaEIzQiw4QkRnQjBDO1VDaEIxQyxzQkRnQjBDO0VDZjFDLHFDRGU4QztVQ2Y5Qyw2QkRlOEM7RUN6RDlDLGFBQUE7RUFDQSx5RUR5RHNCO0VDeER0QiwwQkR3RDZFO0VDcEQ3RSxhRHFEMEI7RUNwRDFCLGdCRG9Ea0M7RUFDMUIscUJEbEVDO0VDbUVELHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FKc0haO0FJcEhZO0VDbENSLGtCRG1DNEI7RUNsQzVCLG1CRGtDa0M7RUNqQ2xDLG1CQUgyRDtFQUkzRCxvQkFKNEM7RUF4QzVDLGFBQUE7RUFDQSxtQkQ0RTBCO0VDM0UxQiwyQkQyRStCO0VDMUUvQixtQkQwRTJDO0VDekUzQyxTRHlFbUQ7RUNoRG5ELG9CRGlEMEI7RUNoRDFCLGtCRGdEbUM7RUFDdkIsNEJEaEZGO0FIOE1kO0FJNUhnQjtFQUNJLGVBQUE7RUFDQSxVQUFBO0FKOEhwQjtBSTFIWTtFQ3pFUixhRDBFOEI7RUN6RTlCLGlCRHlFc0M7QUo2SDFDO0FJMUhZO0VDN0VSLGFEOEU4QjtFQzdFOUIsaUJENkVzQztBSjZIMUM7QUkxSFk7RUNqRlIsYURrRjhCO0VDakY5QixpQkRpRnNDO0FKNkgxQztBSTFIWTtFQ3JGUixhRHNGOEI7RUNyRjlCLGlCRHFGc0M7QUo2SDFDO0FJMUhZO0VDekZSLGFEMEY4QjtFQ3pGOUIsaUJEeUZzQztFQUMxQixZQUFBO0FKNkhoQjtBSTNIZ0I7RUNsRVosa0JEbUVnQztFQ2xFaEMsbUJEa0VzQztFQ2pFdEMsbUJBSDJEO0VBSTNELG9CQUo0QztFQXhDNUMsYUFBQTtFQUNBLG1CRDRHOEI7RUMzRzlCLHVCRDJHbUM7RUMxR25DLG1CRDBHMkM7RUN6RzNDLFFEeUdtRDtFQ2hGbkQsMEJDM0JTO0VENEJULGtCRGdGMkM7RUFDM0Isa0NEaEhOO0VDaUhNLGlCQUFBO0FKcUlwQjtBSW5Jb0I7RUFDSSxZQUFBO0FKcUl4QjtBSWhJWTtFQzFHUixhRDJHOEI7RUMxRzlCLGlCRDBHc0M7QUptSTFDO0FJaElZO0VBQ0ksYUFBQTtBSmtJaEI7QUkvSFk7RUFDSSxhQUFBO0FKaUloQjtBSTdIUTtFQ3JGSiw2QkRzRjJCO1VDdEYzQixxQkRzRjJCO0VDckYzQixnQ0RxRnVDO1VDckZ2Qyx3QkRxRnVDO0VDcEZ2QyxxQ0RvRjZDO1VDcEY3Qyw2QkRvRjZDO0VDdEk3QyxhQUFBO0VBQ0EsbUJEc0lzQjtFQ3JJdEIsdUJEcUkyQjtFQ3BJM0IsbUJEb0ltQztFQ25JbkMsTUFMa0U7RUFlbEUsYUQwSDBCO0VDekgxQixnQkR5SGtDO0VDaEhsQyxlRGlIMEI7RUNoSDFCLGVEZ0hnQztFQUN4QixpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBSnVJWjtBSXJJWTtFQ3JHUixrQkRzRzRCO0VDckc1QixtQkFGK0I7RUFHL0IsbUJBSDJEO0VBSTNELG9CQUo0QztFQU41QyxTRDhHOEI7RUM3RzlCLFNENkdvQztFQzVHcEMsVUQ0R3dDO0VDM0d4QyxVRDJHNEM7RUFDaEMsNEJEbEpGO0VDbUpFLGtCQUFBO0VBQ0EsaUJBQUE7QUo2SWhCO0FJM0lnQjtFQ25IWixTRG9Ia0M7RUNuSGxDLFNEbUh3QztFQ2xIeEMsVURrSDRDO0VDakg1QyxVRGlIZ0Q7RUFDaEMsZUFBQTtFQUNBLFdBQUE7QUpnSnBCO0FJNUlZO0VDeklSLFdEMEkwQjtFQ3pJMUIsWUR5SWdDO0VDN0poQyxhQUFBO0VBQ0Esc0JENkowQjtFQzVKMUIsdUJENEprQztFQzNKbEMsbUJEMkowQztFQzFKMUMsTUFMa0U7RURnS3RELGtCQUFBO0FKbUpoQjtBSWhKWTtFQy9JUixXRGdKMEI7RUMvSTFCLFlEK0lnQztFQ25LaEMsYUFBQTtFQUNBLHNCRG1LMEI7RUNsSzFCLHVCRGtLa0M7RUNqS2xDLG1CRGlLMEM7RUNoSzFDLE1BTGtFO0VEc0t0RCxrQkFBQTtBSnVKaEI7QUlwSlk7RUN4S1IsYUFBQTtFQUNBLHNCRHdLMEI7RUN2SzFCLHVCRHVLa0M7RUN0S2xDLG1CRHNLMEM7RUNySzFDLE1BTGtFO0VEMkt0RCxrQkFBQTtBSjBKaEI7QUl4SmdCO0VDekpaLFdEMEo4QjtFQ3pKOUIsWUR5Sm9DO0VDcktwQyxhQUFBO0VBQ0EsaUNEcUs4QjtFQ3BLOUIsMEJEb0s2QztFQUM3QixrQkFBQTtBSjZKcEI7QUkzSm9CO0VDakxoQixhQUFBO0VBQ0EsbUJEaUxrQztFQ2hMbEMsdUJEZ0x1QztFQy9LdkMsbUJEK0srQztFQzlLL0MsTUFMa0U7QUxvVnRFO0FJOUpvQjtFQ3JMaEIsYUFBQTtFQUNBLG1CRHFMa0M7RUNwTGxDLDhCRG9MdUM7RUNuTHZDLG1CRG1Mc0Q7RUNsTHRELE1BTGtFO0VBZWxFLGFEeUtzQztFQ3hLdEMsaUJEd0s4QztBSnFLbEQ7QUluS3dCO0VDaEpwQixrQkRpSndDO0VDaEp4QyxtQkFGK0I7RUFHL0IsbUJBSDJEO0VBSTNELG9CQUo0QztFRG1KcEIsYUFBQTtBSndLNUI7QUlwS29CO0VDdkxoQixhQUFBO0VBQ0EsdUJEdUxrQztFQ3RMbEMscUNEc0x1QztFQ2xMdkMsYURtTHNDO0VDbEx0QyxpQkRrTDhDO0FKeUtsRDtBSXRLb0I7RUMzSmhCLGtCRDRKb0M7RUMzSnBDLG1CRDJKMEM7RUMxSjFDLG1CQUgyRDtFQUkzRCxvQkFKNEM7RUF4QzVDLGFBQUE7RUFDQSxtQkRxTWtDO0VDcE1sQyx1QkRvTXVDO0VDbk12QyxvQkRtTStDO0VDbE0vQyxNQUxrRTtFQWVsRSxhRHlMc0M7RUN4THRDLGlCRHdMOEM7RUFDMUIsa0JBQUE7RUFDQSxnQkFBQTtBSmdMeEI7QUk5S3dCO0VDbk1wQixhQUFBO0VBQ0EsbUNEbU1zQztFQ2xNdEMsc0NEa011RDtFQUMvQixrQkFBQTtBSmtMNUI7QUloTDRCO0VDNUx4QixXRDZMMEM7RUM1TDFDLFlENExnRDtFQ25MaEQsb0JEb0wwQztFQ25MMUMsaUJEbUxtRDtFQUN2QixvQ0FBQTtFQUNBLGlCQUFBO0FKb0xoQztBSWxMZ0M7RUM1SzVCLGtCRDZLZ0Q7RUM1S2hELGtCRDRLc0Q7RUMzS3RELG1CQUgyRDtFQUkzRCxvQkFKNEM7RUFYNUMsb0JEMEw4QztFQ3pMOUMsaUJEeUx1RDtFQUN2QixXQUFBO0FKd0xwQztBSW5Md0I7RUM3S3BCLDRCRDhLMkM7VUM5SzNDLG9CRDhLMkM7RUM3SzNDLGdDRDZLc0Q7VUM3S3RELHdCRDZLc0Q7RUM1S3RELHFDRDRLNEQ7VUM1SzVELDZCRDRLNEQ7RUNyTDVELGtCRHNMd0M7RUNyTHhDLG1CRHFMOEM7RUNwTDlDLG1CQUgyRDtFQUkzRCxvQkFKNEM7RUFoQzVDLGFBQUE7RUFDQSwrQ0R1TnNDO0VDdE50QyxxQ0RzTm1FO0VDOUxuRSxNRCtMMEM7RUM5TDFDLFFEOEw2QztFQzdMN0MsU0Q2TGdEO0VDNUxoRCxPRDRMbUQ7RUFDM0IsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUorTDVCO0FJN0w0QjtFQ3BNeEIsTURxTThDO0VDcE05QyxXRG9NaUQ7RUNuTWpELFlEbU11RDtFQ2xNdkQsT0RrTTZEO0VBQ2pDLGtCQUFBO0FKa01oQztBSS9MNEI7RUM3TnhCLGFEOE44QztFQzdOOUMsaUJBRitCO0VEZ09ILGlCQUFBO0FKa01oQztBSS9MNEI7RUNoUHhCLGFBQUE7RUFDQSxtQkRnUDBDO0VDL08xQyx1QkQrTytDO0VDOU8vQyxtQkQ4T3VEO0VDN092RCxNQUxrRTtFQThCbEUsb0JEcU4wQztFQ3BOMUMsZURvTm1EO0VDcE9uRCxhRHFPOEM7RUNwTzlDLGlCRG9Pc0Q7RUFDMUIsa0JBQUE7RUFDQSxNQUFBO0FKdU1oQztBSWhNWTtFQzVQUixhQUFBO0VBQ0Esc0JENFAwQjtFQzNQMUIsdUJEMlBrQztFQzFQbEMsbUJEMFAwQztFQ3pQMUMsTUFMa0U7QUxvY3RFO0FJcE1nQjtFQ3ROWixrQkR1TmdDO0VDdE5oQyxtQkFGK0I7RUFHL0IsbUJBSDJEO0VBSTNELG9CQUo0QztFQXhDNUMsYUFBQTtFQUNBLG1CRGdROEI7RUMvUDlCLHVCRCtQbUM7RUM5UG5DLG1CRDhQMkM7RUM3UDNDLFNENlBtRDtFQ3BPbkQsb0JEcU84QjtFQ3BPOUIsa0JEb091QztFQUN2QixrQkFBQTtBSjhNcEI7QUk1TW9CO0VBQ0ksWUFBQTtBSjhNeEI7QUl4TVE7RUM1TkosZ0NENk4yQjtVQzdOM0Isd0JENk4yQjtFQzVOM0IsOEJENE4wQztVQzVOMUMsc0JENE4wQztFQzNOMUMscUNEMk44QztVQzNOOUMsNkJEMk44QztFQzFQOUMsVUQyUHNCO0VDMVB0QixZRDBQMkI7RUNoUTNCLGFEaVEwQjtFQ2hRMUIsZ0JEZ1FrQztFQUMxQixpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUo4TVo7QUk1TVk7RUNuUVIsV0RvUTBCO0VDblExQixZRG1RZ0M7RUFDcEIsa0JBQUE7QUorTWhCO0FJM01RO0VDNU9KLCtCRDZPMkI7VUM3TzNCLHVCRDZPMkI7RUM1TzNCLDhCRDRPeUM7VUM1T3pDLHNCRDRPeUM7RUMzT3pDLHFDRDJPNkM7VUMzTzdDLDZCRDJPNkM7RUMxUTdDLFdEMlFzQjtFQzFRdEIsV0QwUTRCO0VDaFI1QixhRGlSMEI7RUNoUjFCLGlCRGdSa0M7RUFDMUIsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FKaU5aO0FJL01ZO0VDblJSLFdEb1IwQjtFQ25SMUIsWURtUmdDO0VBQ3BCLGtCQUFBO0FKa05oQjtBSTdNSTtFQzdQQSwrQkQ4UHVCO1VDOVB2Qix1QkQ4UHVCO0VDN1B2QixpQ0Q2UHFDO1VDN1ByQyx5QkQ2UHFDO0VDNVByQyxxQ0Q0UDRDO1VDNVA1Qyw2QkQ0UDRDO0VDM1I1QyxXRDRSa0I7RUMzUmxCLFlEMlJ3QjtFQy9TeEIsYUFBQTtFQUNBLG1CRCtTa0I7RUM5U2xCLHVCRDhTdUI7RUM3U3ZCLG1CRDZTK0I7RUM1Uy9CLE1BTGtFO0VEa1Q5RCw4QkRqVEU7RUNrVEYsa0JBQUE7RUFDQSxVQUFBO0FKc05SO0FJcE5RO0VDclFKLCtCRHNRMkI7VUN0UTNCLHVCRHNRMkI7RUNyUTNCLGdDRHFReUM7VUNyUXpDLHdCRHFReUM7RUNwUXpDLHFDRG9RK0M7VUNwUS9DLDZCRG9RK0M7RUM3US9DLGtCRDhRd0I7RUM3UXhCLG1CRDZROEI7RUM1UTlCLG1CQUgyRDtFQUkzRCxvQkFKNEM7RUFyQjVDLFlEcVNzQjtFQ3BTdEIsYURvUzZCO0VDeFQ3QixhQUFBO0VBQ0Esc0JEd1RzQjtFQ3ZUdEIsdUJEdVQ4QjtFQ3RUOUIsbUJEc1RzQztFQ3JUdEMsUURxVDhDO0VBQ3RDLGlCQUFBO0VBQ0EsZ0NBQUE7QUpnT1o7QUk5Tlk7RUM3VFIsYUFBQTtFQUNBLHNCRDZUMEI7RUM1VDFCLDZCRDRUa0M7RUMzVGxDLG1CRDJUZ0Q7RUMxVGhELFNEMFR3RDtBSm9PNUQ7QUlsT2dCO0VDaFVaLGFBQUE7RUFDQSxtQkRnVThCO0VDL1Q5Qiw2QkQrVG1DO0VDOVRuQyxtQkQ4VGlEO0VDN1RqRCxNQUxrRTtBTDBpQnRFLENBQUEsbUNBQUFcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbGVuZGFyKHByb2plY3REYXRhKSB7XG4gICAgbGV0IGN1cnJlbnRNb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgbW9udGhzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG4gICAgY29uc3Qgd2Vla2RheXMgPSBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVzXCIsIFwiV2VkXCIsIFwiVGh1cnNcIiwgXCJGcmlcIiwgXCJTYXRcIl07XG5cbiAgICAvLyBBZGRzIGEgbmV3IGRheSB0byB0aGUgY2FsZW5kYXJcbiAgICBmdW5jdGlvbiBuZXdEYXkoZGF5TnVtKSB7XG4gICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRheS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhbGVuZGFyLWRheVwiKTtcbiAgICAgICAgY29uc3QgZGF5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgZGF5VGV4dC50ZXh0Q29udGVudCA9IGRheU51bTtcbiAgICAgICAgZGF5LmFwcGVuZENoaWxkKGRheVRleHQpO1xuICAgICAgICByZXR1cm4gZGF5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE1vbnRoKG1vbnRoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9udGgtdGV4dFwiKS50ZXh0Q29udGVudCA9IG1vbnRoc1ttb250aF07XG5cbiAgICAgICAgc2V0RGF5cyhtb250aCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RGF5cyhtb250aCkge1xuICAgICAgICBsZXQgbnVtRGF5cyA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb250aHMgPSBbMywgNSwgOCwgMTBdO1xuXG4gICAgICAgICAgICBpZiAobW9udGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMjg7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1vbnRocy5pbmNsdWRlcyhtb250aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMzA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAzMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtRGF5czsgaSsrKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGVuZGFyLWRheXNcIikuYXBwZW5kQ2hpbGQobmV3RGF5KGkpKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsZW5kYXItZGF5c1wiKS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1kYXlcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdGhlIHByZXZpb3VzIG1vbnRoJ3MgZmluYWwgZGF5cyB0byBmaWxsIHRoZSBjYWxlbmRhclxuICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIG5ld0RhdGUuc2V0TW9udGgobW9udGgpO1xuXG4gICAgICAgIGNvbnN0IGRheU9mZnNldEJlZm9yZSA9IChuZXdEYXRlLmdldERheSgpICsgMSkgLSAobmV3RGF0ZS5nZXREYXRlKCkgJSA3KTtcbiAgICAgICAgbmV3RGF0ZS5zZXREYXRlKDApO1xuICAgICAgICBsZXQgcHJldk9mZnNldCA9IG5ld0RhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5T2Zmc2V0QmVmb3JlOyBpKyspIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsZW5kYXItZGF5c1wiKS5wcmVwZW5kKG5ld0RheShwcmV2T2Zmc2V0KSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGVuZGFyLWRheXNcIikuZmlyc3RDaGlsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImRhcmtncmV5XCI7XG4gICAgICAgICAgICBwcmV2T2Zmc2V0LS07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdGhlIG5leHQgbW9udGgncyBiZWdpbm5pbmcgZGF5cyB0byBmaWxsIHRoZSBjYWxlbmRhclxuICAgICAgICBjb25zdCBkYXlPZmZzZXRBZnRlciA9IDQyIC0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxlbmRhci1kYXlzXCIpLmNoaWxkRWxlbWVudENvdW50O1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlPZmZzZXRBZnRlcjsgaSsrKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGVuZGFyLWRheXNcIikuYXBwZW5kKG5ld0RheShpICsgMSkpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxlbmRhci1kYXlzXCIpLmxhc3RDaGlsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImRhcmtncmV5XCI7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRCdXR0b25zKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VsZWN0RGF5KG1vbnRoLCBkYXkpIHtcbiAgICAgICAgY29uc3QgZGF5U2VsZWN0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkYXlTZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRheS1zZWxlY3RlZFwiKTtcbiAgICAgICAgY29uc3QgZGF5TnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgICAgICBkYXlOdW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXktbnVtLXNlbGVjdGVkXCIpO1xuICAgICAgICBkYXlOdW0udGV4dENvbnRlbnQgPSBgJHttb250aHNbbW9udGggLSAxXX0gJHtkYXl9YDtcbiAgICAgICAgZGF5U2VsZWN0ZWQuYXBwZW5kQ2hpbGQoZGF5TnVtKTtcblxuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNsb3NlLmlubmVySFRNTCA9IFwiWFwiO1xuICAgICAgICBjbG9zZS5pZCA9IFwiY2xvc2UtZGF5XCI7XG4gICAgICAgIGNsb3NlLmNsYXNzTmFtZSA9IFwiYnV0dG9uLWNsb3NlXCI7XG4gICAgICAgIGRheVNlbGVjdGVkLmFwcGVuZENoaWxkKGNsb3NlKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdERhdGEpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvalRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tNb250aCA9IE51bWJlcihwcm9qVGFzay5kYXRlLnNwbGl0KFwiLVwiKVsxXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RheSA9IHByb2pUYXNrLmRhdGUuc3BsaXQoXCItXCIpWzJdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1vbnRoID09PSB0YXNrTW9udGggJiYgZGF5ID09PSB0YXNrRGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2pUYXNrKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhbGVuZGFyLXRhc2tcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrVGV4dC50ZXh0Q29udGVudCA9IHByb2pUYXNrLnRhc2s7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RleHQpO1xuICAgICAgICAgICAgICAgICAgICBkYXlTZWxlY3RlZC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRheXMtd3JhcHBlclwiKS5hcHBlbmRDaGlsZChkYXlTZWxlY3RlZCk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1kYXlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXktc2VsZWN0ZWRcIikucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNob3cgZXZlbnRzIG9mIGEgZ2l2ZW4gZGF5IGlmIGNsaWNrZWQgb25cbiAgICBmdW5jdGlvbiBzZXRCdXR0b25zKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjdGl2ZS1kYXlcIikpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXkgPSBidXR0b24uZmlyc3RDaGlsZC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBzZWxlY3REYXkoY3VycmVudE1vbnRoLCBzZWxlY3RlZERheSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFwcGVuZCBjYWxlbmRhciB0byBET01cbiAgICBjb25zdCBjYWxlbmRhcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhbGVuZGFyV3JhcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbGVuZGFyXCIpO1xuICAgIGNhbGVuZGFyV3JhcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3QtY29udGVudFwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdC10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ2FsZW5kYXJcIjtcbiAgICBjYWxlbmRhcldyYXAuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhbGVuZGFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FsZW5kYXItZ3JpZFwiKTtcblxuICAgIC8vIEFwcGVuZCBjYWxlbmRhciBtb250aCB0byBET01cbiAgICBjb25zdCBjYWxNb250aFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhbE1vbnRoV3JhcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbGVuZGFyLW1vbnRoXCIpO1xuXG4gICAgY29uc3QgbW9udGhBcnJvd0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1vbnRoQXJyb3dMZWZ0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FsZW5kYXItbGVmdFwiKTtcbiAgICBtb250aEFycm93TGVmdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vbnRoLXRvZ2dsZVwiKTtcbiAgICBjb25zdCBhcnJvd0xlZnRQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFycm93TGVmdFBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2tleWJvYXJkX2Fycm93X2xlZnQucG5nXCIpO1xuICAgIG1vbnRoQXJyb3dMZWZ0LmFwcGVuZENoaWxkKGFycm93TGVmdFBpYyk7XG4gICAgY2FsTW9udGhXcmFwLmFwcGVuZENoaWxkKG1vbnRoQXJyb3dMZWZ0KTtcblxuICAgIGNvbnN0IGNhbE1vbnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNhbE1vbnRoLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9udGgtdGV4dFwiKTtcbiAgICBjYWxNb250aFdyYXAuYXBwZW5kQ2hpbGQoY2FsTW9udGgpO1xuXG4gICAgY29uc3QgbW9udGhBcnJvd1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtb250aEFycm93UmlnaHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYWxlbmRhci1yaWdodFwiKTtcbiAgICBtb250aEFycm93UmlnaHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb250aC10b2dnbGVcIik7XG4gICAgY29uc3QgYXJyb3dSaWdodFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYXJyb3dSaWdodFBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2tleWJvYXJkX2Fycm93X3JpZ2h0LnBuZ1wiKTtcbiAgICBtb250aEFycm93UmlnaHQuYXBwZW5kQ2hpbGQoYXJyb3dSaWdodFBpYyk7XG4gICAgY2FsTW9udGhXcmFwLmFwcGVuZENoaWxkKG1vbnRoQXJyb3dSaWdodCk7XG5cbiAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChjYWxNb250aFdyYXApO1xuXG4gICAgLy8gQXBwZW5kIGNhbGVuZGFyIHdlZWtkYXkgaGVhZGVycyB0byBET01cbiAgICBjb25zdCBjYWxIZWFkZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYWxIZWFkZXJzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FsZW5kYXItaGVhZGVyc1wiKTtcblxuICAgIGZvciAoY29uc3Qgd2Vla2RheSBvZiB3ZWVrZGF5cykge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhbGVuZGFyLWhlYWRlclwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gd2Vla2RheTtcbiAgICAgICAgY2FsSGVhZGVycy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH1cblxuICAgIGNhbGVuZGFyLmFwcGVuZENoaWxkKGNhbEhlYWRlcnMpO1xuXG4gICAgLy8gQXBwZW5kIHNwYWNlIGZvciBjYWxlbmRhciBkYXlzIHRvIERPTVxuICAgIGNvbnN0IGNhbERheVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhbERheVdyYXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXlzLXdyYXBwZXJcIik7XG5cbiAgICBjb25zdCBjYWxEYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYWxEYXlzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FsZW5kYXItZGF5c1wiKTtcblxuICAgIGNhbERheVdyYXAuYXBwZW5kQ2hpbGQoY2FsRGF5cyk7XG4gICAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQoY2FsRGF5V3JhcCk7XG4gICAgY2FsZW5kYXJXcmFwLmFwcGVuZENoaWxkKGNhbGVuZGFyKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LXdyYXBwZXJcIik7XG4gICAgbGlzdC5pbnNlcnRCZWZvcmUoY2FsZW5kYXJXcmFwLCBsaXN0LmNoaWxkcmVuWzBdKTtcblxuICAgIC8vIFNldCBpbml0aWFsIGNhbGVuZGFyIG1vbnRoXG4gICAgc2V0TW9udGgobmV3IERhdGUoKS5nZXRNb250aCgpKTtcblxuICAgIC8vIEFsbG93IGFycm93IGJ1dHRvbnMgdG8gY29udHJvbCB0aGUgdmlzaWJsZSBjYWxlbmRhciBtb250aFxuICAgIGZvciAoY29uc3QgYnV0dG9uIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9udGgtdG9nZ2xlXCIpKSB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsZW5kYXItZGF5c1wiKS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxlbmRhci1kYXlzXCIpLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuaWQgPT09IFwiY2FsZW5kYXItcmlnaHRcIikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRNb250aCA9ICgoY3VycmVudE1vbnRoICsgMSkgKyAxMikgJSAxMjtcbiAgICAgICAgICAgICAgICBzZXRNb250aChjdXJyZW50TW9udGggLSAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudE1vbnRoID0gKChjdXJyZW50TW9udGggLSAxKSArIDEyKSAlIDEyO1xuICAgICAgICAgICAgICAgIHNldE1vbnRoKGN1cnJlbnRNb250aCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IEluYm94IGZyb20gXCIuL2luYm94LmpzXCI7XG5pbXBvcnQgVG9kYXkgZnJvbSBcIi4vdG9kYXkuanNcIjtcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwiLi9jYWxlbmRhci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50KHByb2plY3REYXRhKSB7XG4gICAgY29uc3QgY29udGVudFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnRXcmFwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudC13cmFwcGVyXCIpO1xuXG4gICAgY29uc3QgcmVzZXRMYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlc2V0TGF5b3V0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVzZXQtbGF5b3V0XCIpO1xuICAgIHJlc2V0TGF5b3V0LnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiUmVzZXQgTGF5b3V0XCIpO1xuICAgIGNvbnN0IHJlc2V0UGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICByZXNldFBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL3RlYW1fZGFzaGJvYXJkLnBuZ1wiKTtcbiAgICByZXNldExheW91dC5hcHBlbmRDaGlsZChyZXNldFBpYyk7XG4gICAgY29udGVudFdyYXAuYXBwZW5kQ2hpbGQocmVzZXRMYXlvdXQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChjb250ZW50V3JhcCk7XG5cbiAgICBJbmJveChwcm9qZWN0RGF0YSk7XG5cbiAgICBmb3IgKGNvbnN0IGxpbmsgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLWxpbmtcIikpIHtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICBsZXQgY3VycmVudENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtd3JhcHBlclwiKS5maXJzdENoaWxkO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnRUYXJnZXQudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSAhPT0gY3VycmVudENvbnRlbnQuaWQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImNvbnRlbnQtZGVzcGF3blwiO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCIwLjI1c1wiO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LnN0eWxlLmFuaW1hdGlvbkZpbGxNb2RlID0gXCJmb3J3YXJkc1wiO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29udGVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9LCAyNTApO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChldmVudFRhcmdldC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnSW5ib3gnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluYm94KHByb2plY3REYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1RvZGF5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2RheShwcm9qZWN0RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdDYWxlbmRhcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FsZW5kYXIocHJvamVjdERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LXdyYXBwZXJcIikuZmlyc3RDaGlsZDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJjb250ZW50LXJlc3Bhd25cIjtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuMjVzXCI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LnN0eWxlLmFuaW1hdGlvbkZpbGxNb2RlID0gXCJmb3J3YXJkc1wiO1xuICAgICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXQtbGF5b3V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IFwiXCI7XG4gICAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3V0dGVycygpIHtcbiAgICBjb25zdCBndXR0ZXJDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGd1dHRlckNvbC5pZCA9IFwiZ3V0dGVyLWNvbFwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChndXR0ZXJDb2wpO1xuXG4gICAgY29uc3QgZ3V0dGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBndXR0ZXJSb3cuaWQgPSBcImd1dHRlci1yb3dcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZ3V0dGVyUm93KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCBoZWFkZXJUaXRsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlclRpdGxlcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci10aXRsZXNcIik7XG5cbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXJUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci10aXRsZVwiKTtcbiAgICBoZWFkZXJUaXRsZS5pbm5lckhUTUwgPSBcIkRPX0lUXCI7XG4gICAgaGVhZGVyVGl0bGVzLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcblxuICAgIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHN1YlRpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgdG8tZG8gYXBwIGZvciBtYW5hZ2luZyB5b3VyIGxpZmVcIjtcbiAgICBoZWFkZXJUaXRsZXMuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZXMpO1xuXG4gICAgY29uc3QgaGVhZGVyQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyQnV0dG9ucy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci1idXR0b25zXCIpO1xuXG4gICAgY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxvZ2luQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9naW4tYnV0dG9uXCIpO1xuICAgIGxvZ2luQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGVhZGVyLWJ1dHRvblwiKTtcblxuICAgIGNvbnN0IGxvZ2luUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsb2dpblBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2FjY291bnRfY2lyY2xlLnBuZ1wiKTtcbiAgICBsb2dpbkJ1dHRvbi5hcHBlbmRDaGlsZChsb2dpblBpYyk7XG5cbiAgICBjb25zdCBsb2dpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsb2dpblRleHQudGV4dENvbnRlbnQgPSBcIlNpZ24gSW5cIjtcbiAgICBsb2dpbkJ1dHRvbi5hcHBlbmRDaGlsZChsb2dpblRleHQpO1xuICAgIGhlYWRlckJ1dHRvbnMuYXBwZW5kQ2hpbGQobG9naW5CdXR0b24pO1xuXG4gICAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWVudUltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL21lbnUucG5nXCIpO1xuXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtYnV0dG9uXCIpO1xuICAgIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoZWFkZXItYnV0dG9uXCIpO1xuICAgIG1lbnVCdXR0b24uYXBwZW5kQ2hpbGQobWVudUltZyk7XG4gICAgaGVhZGVyQnV0dG9ucy5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQnV0dG9ucyk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn0iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluYm94KHByb2plY3REYXRhKSB7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5ib3hcIik7XG4gICAgaW5ib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWNvbnRlbnRcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3QtdGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza3NcIik7XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdERhdGEpIHtcbiAgICAgICAgaWYgKHByb2plY3Quc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGFzayBvZiBwcm9qZWN0LnRhc2tzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tcIik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICB0YXNrVGV4dC50ZXh0Q29udGVudCA9IHRhc2s7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XG5cbiAgICAgICAgICAgICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluYm94LmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFza1wiKTtcblxuICAgIGNvbnN0IGFkZFRhc2tQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFkZFRhc2tQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9hZGRfdGFzay5wbmdcIik7XG4gICAgYWRkVGFzay5hcHBlbmRDaGlsZChhZGRUYXNrUGljKTtcblxuICAgIGNvbnN0IGFkZFRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWRkVGFza1RleHQudGV4dENvbnRlbnQgPSBcIkFkZCBOZXcgVGFza1wiO1xuICAgIGFkZFRhc2suYXBwZW5kQ2hpbGQoYWRkVGFza1RleHQpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGFkZFRhc2spO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC13cmFwcGVyXCIpO1xuICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGluYm94LCBjb250ZW50LmNoaWxkcmVuWzBdKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBUYXNrKHByb2plY3REYXRhKTtcbiAgICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbih1c2VyRGF0YSkge1xuICAgIGNvbnN0IGxvZ2luU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dpblNjcmVlbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLXNjcmVlblwiKTtcbiAgICBsb2dpblNjcmVlbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvcHVwLXNjcmVlblwiKTtcblxuICAgIGNvbnN0IGxvZ2luUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dpblByb21wdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLXByb21wdFwiKTtcbiAgICBsb2dpblByb21wdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvcHVwLXByb21wdFwiKTtcblxuICAgIGNvbnN0IGxvZ2luSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxvZ2luSGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9naW4taGVhZGVyXCIpO1xuICAgIGxvZ2luSGVhZGVyLnRleHRDb250ZW50ID0gXCJTaWduIGluIHRvIERvX0l0XCI7XG4gICAgbG9naW5Qcm9tcHQuYXBwZW5kQ2hpbGQobG9naW5IZWFkZXIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgY29uc3QgbG9nTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nTmFtZS5jbGFzc05hbWUgPSBcImlucHV0LWZpZWxkXCI7XG5cbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lOlwiO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb2dpbi1uYW1lXCIpO1xuICAgIGxvZ05hbWUuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcblxuICAgIGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dpbi1uYW1lXCIpO1xuICAgIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibG9naW4tbmFtZVwiKTtcbiAgICBsb2dOYW1lLmFwcGVuZENoaWxkKG5hbWVGaWVsZCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsb2dOYW1lKTtcblxuICAgIGNvbnN0IGxvZ1Bhc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ1Bhc3MuY2xhc3NOYW1lID0gXCJsb2dpbi1maWVsZFwiO1xuXG4gICAgY29uc3QgcGFzc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHBhc3NMYWJlbC50ZXh0Q29udGVudCA9IFwiUGFzc3dvcmQ6XCI7XG4gICAgcGFzc0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvZ2luLXBhc3NcIik7XG4gICAgbG9nUGFzcy5hcHBlbmRDaGlsZChwYXNzTGFiZWwpO1xuXG4gICAgY29uc3QgcGFzc0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHBhc3NGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLXBhc3NcIik7XG4gICAgcGFzc0ZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJsb2dpbi1wYXNzXCIpO1xuICAgIGxvZ1Bhc3MuYXBwZW5kQ2hpbGQocGFzc0ZpZWxkKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ1Bhc3MpO1xuXG4gICAgY29uc3QgbG9naW5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbG9naW5TdWJtaXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dpbi1zdWJtaXRcIik7XG4gICAgbG9naW5TdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBsb2dpblN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxPRyBJTlwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ2luU3VibWl0KTtcbiAgICBsb2dpblByb21wdC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IGNyZWF0ZUFjY291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjcmVhdGVBY2NvdW50LmlubmVySFRNTCA9IFwiTmV3IHVzZXI/IENyZWF0ZSBhbiBhY2NvdW50IGhlcmUhXCI7XG4gICAgbG9naW5Qcm9tcHQuYXBwZW5kQ2hpbGQoY3JlYXRlQWNjb3VudCk7XG5cbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2UuaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgY2xvc2UuaWQgPSBcImNsb3NlLWxvZ2luXCI7XG4gICAgY2xvc2UuY2xhc3NOYW1lID0gXCJidXR0b24tY2xvc2VcIjtcbiAgICBsb2dpblByb21wdC5hcHBlbmRDaGlsZChjbG9zZSk7XG5cbiAgICBsb2dpblNjcmVlbi5hcHBlbmRDaGlsZChsb2dpblByb21wdCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9naW5TY3JlZW4pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJFbnRlcmVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1uYW1lXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdXNlckNoZWNrID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgdXNlciBvZiB1c2VyRGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyLm5hbWUgPT09IHVzZXJFbnRlcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tYnV0dG9uXCIpLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gYEhlbGxvLCAke3VzZXJFbnRlcmVkfWA7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tc2NyZWVuXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB1c2VyQ2hlY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdXNlckNoZWNrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1wcm9tcHRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0Q29udGVudCA9IFwiVGhpcyB1c2VyIGRvZXMgbm90IGV4aXN0XCI7XG4gICAgICAgICAgICAgICAgcHJvbXB0Lmluc2VydEJlZm9yZShlcnJvciwgcHJvbXB0LmNoaWxkcmVuWzJdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1uYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tcGFzc1wiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbG9naW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1uYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tcGFzc1wiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLXNjcmVlblwiKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0RGF0YSkge1xuICAgIGNvbnN0IHByb2pTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2pTY3JlZW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qLXNjcmVlblwiKTtcbiAgICBwcm9qU2NyZWVuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicG9wdXAtc2NyZWVuXCIpO1xuXG4gICAgY29uc3QgcHJvalByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvalByb21wdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2otcHJvbXB0XCIpO1xuICAgIHByb2pQcm9tcHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb3B1cC1wcm9tcHRcIik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICBjb25zdCBsb2dQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dQcm9qLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXQtZmllbGRcIik7XG5cbiAgICBjb25zdCBwcm9qTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJvakxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2otbmFtZVwiKTtcbiAgICBwcm9qTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZTpcIjtcbiAgICBsb2dQcm9qLmFwcGVuZENoaWxkKHByb2pMYWJlbCk7XG5cbiAgICBjb25zdCBwcm9qRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJvakZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvai1uYW1lXCIpO1xuICAgIHByb2pGaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvai1uYW1lXCIpO1xuICAgIHByb2pGaWVsZC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5ldyBQcm9qZWN0XCIpO1xuICAgIGxvZ1Byb2ouYXBwZW5kQ2hpbGQocHJvakZpZWxkKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ1Byb2opO1xuXG4gICAgY29uc3QgcHJvalN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcm9qU3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvai1zdWJtaXRcIik7XG4gICAgcHJvalN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHByb2pTdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJBREQgUFJPSkVDVFwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2pTdWJtaXQpO1xuICAgIHByb2pQcm9tcHQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2UuaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgY2xvc2UuaWQgPSBcImNsb3NlLXByb2pcIjtcbiAgICBjbG9zZS5jbGFzc05hbWUgPSBcImJ1dHRvbi1jbG9zZVwiO1xuICAgIHByb2pQcm9tcHQuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICAgIHByb2pTY3JlZW4uYXBwZW5kQ2hpbGQocHJvalByb21wdCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9qU2NyZWVuKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2otc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCBwcm9qTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvai1uYW1lXCIpLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoIXByb2pOYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvak51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1saXN0XCIpLmNoaWxkRWxlbWVudENvdW50O1xuICAgICAgICAgICAgICAgIHByb2pOYW1lID0gYFByb2plY3QgJHtwcm9qTnVtICsgMX1gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9qZWN0RGF0YS5wdXNoKG5ldyBQcm9qZWN0KHByb2pOYW1lKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgbmV3UHJvai5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qTmFtZSk7XG4gICAgICAgICAgICBuZXdQcm9qLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvai1pdGVtXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIG5ld1Byb2pQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9mb2xkZXIucG5nXCIpXG4gICAgICAgICAgICBuZXdQcm9qUGljLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvai1waWNcIik7XG4gICAgICAgICAgICBuZXdQcm9qLmFwcGVuZENoaWxkKG5ld1Byb2pQaWMpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgICAgIG5ld1Byb2pOYW1lLmlubmVySFRNTCA9IHByb2pOYW1lO1xuICAgICAgICAgICAgbmV3UHJvai5hcHBlbmRDaGlsZChuZXdQcm9qTmFtZSk7XG5cbiAgICAgICAgICAgIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVByb2ogPSBuZXcgUmVnRXhwKFwicHJvai1zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZVByb2oudGVzdChuZXdQcm9qLmNsYXNzTGlzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvai5jbGFzc0xpc3QuYWRkKFwicHJvai1zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvak5hbWUgPSBuZXdQcm9qLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3REYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gbmV3UHJvai5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Quc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvai5jbGFzc0xpc3QucmVtb3ZlKFwicHJvai1zZWxlY3RlZFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSBuZXdQcm9qLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1saXN0XCIpO1xuICAgICAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG5ld1Byb2opO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2otc2NyZWVuXCIpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLXByb2pcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qLXNjcmVlblwiKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2plY3REYXRhO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXJcIik7XG5cbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaW5ib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlYmFyLWluYm94XCIpO1xuICAgIGluYm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1saW5lXCIpO1xuICAgIGluYm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1saW5rXCIpO1xuXG4gICAgY29uc3QgaW5ib3hQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGluYm94UGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvaW5ib3gucG5nXCIpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGluYm94UGljKTtcblxuICAgIGNvbnN0IGluYm94VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBpbmJveFRleHQudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hUZXh0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGluYm94KTtcblxuICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB0b2RheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXItdG9kYXlcIik7XG4gICAgdG9kYXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWxpbmVcIik7XG4gICAgdG9kYXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWxpbmtcIik7XG5cbiAgICBjb25zdCB0b2RheVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdG9kYXlQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy90b2RheS5wbmdcIik7XG4gICAgdG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlQaWMpO1xuXG4gICAgY29uc3QgdG9kYXlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRvZGF5VGV4dC50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICB0b2RheS5hcHBlbmRDaGlsZCh0b2RheVRleHQpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodG9kYXkpO1xuXG4gICAgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbGVuZGFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhci1jYWxlbmRhclwiKTtcbiAgICBjYWxlbmRhci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGViYXItbGluZVwiKTtcbiAgICBjYWxlbmRhci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGViYXItbGlua1wiKTtcblxuICAgIGNvbnN0IGNhbGVuZGFyUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjYWxlbmRhclBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2NhbGVuZGFyLnBuZ1wiKTtcbiAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChjYWxlbmRhclBpYyk7XG5cbiAgICBjb25zdCBjYWxlbmRhclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY2FsZW5kYXJUZXh0LnRleHRDb250ZW50ID0gXCJDYWxlbmRhclwiO1xuICAgIGNhbGVuZGFyLmFwcGVuZENoaWxkKGNhbGVuZGFyVGV4dCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjYWxlbmRhcik7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJvamVjdHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlYmFyLXByb2plY3RzXCIpO1xuICAgIHByb2plY3RzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1saW5lXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdHNQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHByb2plY3RzUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvZXhwYW5kX2NpcmNsZV9kb3duLnBuZ1wiKTtcbiAgICBwcm9qZWN0c1BpYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzLXBpY1wiKTtcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0c1BpYyk7XG5cbiAgICBjb25zdCBwcm9qZWN0c1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgcHJvamVjdHNUZXh0LnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RzVGV4dCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG5cbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RzTGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXItbGlzdFwiKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdCk7XG5cbiAgICBjb25zdCBhZGRQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRQcm9qLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhci1hZGRcIik7XG4gICAgYWRkUHJvai5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGViYXItbGluZVwiKTtcblxuICAgIGNvbnN0IGFkZFByb2pQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFkZFByb2pQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9mb2xkZXJfbmV3LnBuZ1wiKTtcbiAgICBhZGRQcm9qLmFwcGVuZENoaWxkKGFkZFByb2pQaWMpO1xuXG4gICAgY29uc3QgYWRkUHJvalRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgYWRkUHJvalRleHQudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgYWRkUHJvai5hcHBlbmRDaGlsZChhZGRQcm9qVGV4dCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1wcm9qZWN0c1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1waWNcIikuc3JjO1xuICAgICAgICBjb25zdCByZWdFeCA9IC9hcnJvd19jaXJjbGVfcmlnaHQucG5nJC87XG5cbiAgICAgICAgaWYgKHJlZ0V4LnRlc3Qoc3RhdGUpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItbGlzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdHMtY2xvc2VkXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1waWNcIikuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9leHBhbmRfY2lyY2xlX2Rvd24ucG5nXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWxpc3RcIikuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWNsb3NlZFwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtcGljXCIpLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvYXJyb3dfY2lyY2xlX3JpZ2h0LnBuZ1wiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2socHJvamVjdERhdGEpIHtcbiAgICBjb25zdCB0YXNrU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrU2NyZWVuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1zY3JlZW5cIik7XG4gICAgdGFza1NjcmVlbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvcHVwLXNjcmVlblwiKTtcblxuICAgIGNvbnN0IHRhc2tQcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tQcm9tcHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXByb21wdFwiKTtcbiAgICB0YXNrUHJvbXB0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicG9wdXAtcHJvbXB0XCIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgY29uc3QgbG9nVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nVGFzay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0LWZpZWxkXCIpO1xuXG4gICAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLW5hbWVcIik7XG4gICAgdGFza0xhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrOlwiO1xuICAgIGxvZ1Rhc2suYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcblxuICAgIGNvbnN0IHRhc2tGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrRmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLW5hbWVcIik7XG4gICAgdGFza0ZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLW5hbWVcIik7XG4gICAgdGFza0ZpZWxkLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmV3IFRhc2tcIik7XG4gICAgbG9nVGFzay5hcHBlbmRDaGlsZCh0YXNrRmllbGQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobG9nVGFzayk7XG5cbiAgICBjb25zdCBsb2dEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dEYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXQtZmllbGRcIik7XG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRhdGUtbmFtZVwiKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuICAgIGxvZ0RhdGUuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcblxuICAgIGNvbnN0IGRhdGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlRmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXRlLW5hbWVcIik7XG4gICAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkYXRlLW5hbWVcIik7XG4gICAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIGRhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIjIwMjItMTAtMDNcIik7XG4gICAgbG9nRGF0ZS5hcHBlbmRDaGlsZChkYXRlRmllbGQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobG9nRGF0ZSk7XG5cbiAgICBjb25zdCBsb2dQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dQcm9qLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXQtZmllbGRcIik7XG5cbiAgICBjb25zdCBwcm9qTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJvakxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2otbmFtZVwiKTtcbiAgICBwcm9qTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6XCI7XG4gICAgbG9nUHJvai5hcHBlbmRDaGlsZChwcm9qTGFiZWwpO1xuXG4gICAgY29uc3QgcHJvakZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcm9qRmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qLW5hbWVcIik7XG4gICAgcHJvakZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qLW5hbWVcIik7XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdERhdGEpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAgICAgICBwcm9qRmllbGQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG5cbiAgICBsb2dQcm9qLmFwcGVuZENoaWxkKHByb2pGaWVsZCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsb2dQcm9qKTtcblxuICAgIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stc3VibWl0XCIpO1xuICAgIHRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICB0YXNrU3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQUREIFRBU0tcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrU3VibWl0KTtcbiAgICB0YXNrUHJvbXB0LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlLmlubmVySFRNTCA9IFwiWFwiO1xuICAgIGNsb3NlLmlkID0gXCJjbG9zZS10YXNrXCI7XG4gICAgY2xvc2UuY2xhc3NOYW1lID0gXCJidXR0b24tY2xvc2VcIjtcbiAgICB0YXNrUHJvbXB0LmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICB0YXNrU2NyZWVuLmFwcGVuZENoaWxkKHRhc2tQcm9tcHQpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YXNrU2NyZWVuKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1zdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIikudmFsdWU7XG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLW5hbWVcIikudmFsdWU7XG5cbiAgICAgICAgaWYgKCF0YXNrKSB7XG4gICAgICAgICAgICB0YXNrID0gXCJOZXcgVGFza1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2ssIGRhdGUpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tQcm9qID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qLW5hbWVcIikudmFsdWU7XG5cbiAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3REYXRhKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gdGFza1Byb2opIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0W1widGFza3NcIl0ucHVzaChuZXdUYXNrKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1zY3JlZW5cIikucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLXRhc2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stc2NyZWVuXCIpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgY2xhc3MgVGFzayB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRhc2ssIGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZGF5KHByb2plY3REYXRhKSB7XG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kYXlcIik7XG4gICAgdG9kYXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWNvbnRlbnRcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3QtdGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgdG9kYXkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC13cmFwcGVyXCIpO1xuICAgIGxpc3QuaW5zZXJ0QmVmb3JlKHRvZGF5LCBsaXN0LmNoaWxkcmVuWzBdKTtcbn0iLCJ2YXIgbnVtZXJpYyA9IGZ1bmN0aW9uICh2YWx1ZSwgdW5pdCkgeyByZXR1cm4gTnVtYmVyKHZhbHVlLnNsaWNlKDAsIC0xICogdW5pdC5sZW5ndGgpKTsgfTtcblxudmFyIHBhcnNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoJ3B4JykpXG4gICAgICAgIHsgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCB0eXBlOiAncHgnLCBudW1lcmljOiBudW1lcmljKHZhbHVlLCAncHgnKSB9IH1cbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoJ2ZyJykpXG4gICAgICAgIHsgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCB0eXBlOiAnZnInLCBudW1lcmljOiBudW1lcmljKHZhbHVlLCAnZnInKSB9IH1cbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoJyUnKSlcbiAgICAgICAgeyByZXR1cm4geyB2YWx1ZTogdmFsdWUsIHR5cGU6ICclJywgbnVtZXJpYzogbnVtZXJpYyh2YWx1ZSwgJyUnKSB9IH1cbiAgICBpZiAodmFsdWUgPT09ICdhdXRvJykgeyByZXR1cm4geyB2YWx1ZTogdmFsdWUsIHR5cGU6ICdhdXRvJyB9IH1cbiAgICByZXR1cm4gbnVsbFxufTtcblxudmFyIHBhcnNlID0gZnVuY3Rpb24gKHJ1bGUpIHsgcmV0dXJuIHJ1bGUuc3BsaXQoJyAnKS5tYXAocGFyc2VWYWx1ZSk7IH07XG5cbnZhciBnZXRTaXplQXRUcmFjayA9IGZ1bmN0aW9uIChpbmRleCwgdHJhY2tzLCBnYXAsIGVuZCkge1xuICAgIGlmICggZ2FwID09PSB2b2lkIDAgKSB7IGdhcCA9IDA7IH1cbiAgICBpZiAoIGVuZCA9PT0gdm9pZCAwICkgeyBlbmQgPSBmYWxzZTsgfVxuXG4gICAgdmFyIG5ld0luZGV4ID0gZW5kID8gaW5kZXggKyAxIDogaW5kZXg7XG4gICAgdmFyIHRyYWNrU3VtID0gdHJhY2tzXG4gICAgICAgIC5zbGljZSgwLCBuZXdJbmRleClcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYWNjdW0sIHZhbHVlKSB7IHJldHVybiBhY2N1bSArIHZhbHVlLm51bWVyaWM7IH0sIDApO1xuICAgIHZhciBnYXBTdW0gPSBnYXAgPyBpbmRleCAqIGdhcCA6IDA7XG5cbiAgICByZXR1cm4gdHJhY2tTdW0gKyBnYXBTdW1cbn07XG5cbnZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiAocnVsZSwgb3duUnVsZXMsIG1hdGNoZWRSdWxlcykgeyByZXR1cm4gb3duUnVsZXMuY29uY2F0KCBtYXRjaGVkUnVsZXMpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIuc3R5bGVbcnVsZV07IH0pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHN0eWxlKSB7IHJldHVybiBzdHlsZSAhPT0gdW5kZWZpbmVkICYmIHN0eWxlICE9PSAnJzsgfSk7IH07XG5cbnZhciBnZXRHYXBWYWx1ZSA9IGZ1bmN0aW9uICh1bml0LCBzaXplKSB7XG4gICAgaWYgKHNpemUuZW5kc1dpdGgodW5pdCkpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcihzaXplLnNsaWNlKDAsIC0xICogdW5pdC5sZW5ndGgpKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxufTtcblxudmFyIGZpcnN0Tm9uWmVybyA9IGZ1bmN0aW9uICh0cmFja3MpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHJhY2tzW2ldLm51bWVyaWMgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gaVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG59O1xuXG52YXIgTk9PUCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9O1xuXG52YXIgZGVmYXVsdFdyaXRlU3R5bGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgZ3JpZFRlbXBsYXRlUHJvcCwgc3R5bGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBlbGVtZW50LnN0eWxlW2dyaWRUZW1wbGF0ZVByb3BdID0gc3R5bGU7XG59O1xuXG52YXIgZ2V0T3B0aW9uID0gZnVuY3Rpb24gKG9wdGlvbnMsIHByb3BOYW1lLCBkZWYpIHtcbiAgICB2YXIgdmFsdWUgPSBvcHRpb25zW3Byb3BOYW1lXTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIGRlZlxufTtcblxuZnVuY3Rpb24gZ2V0TWF0Y2hlZENTU1J1bGVzIChlbCkge1xuICAgICAgICB2YXIgcmVmO1xuXG4gICAgICAgIHJldHVybiAocmVmID0gW10pXG4gICAgICAgIC5jb25jYXQuYXBwbHkoXG4gICAgICAgICAgICByZWYsIEFycmF5LmZyb20oZWwub3duZXJEb2N1bWVudC5zdHlsZVNoZWV0cykubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJ1bGVzID0gW107XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydWxlcyA9IEFycmF5LmZyb20ocy5jc3NSdWxlcyB8fCBbXSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcmVzdWx0cyBvbiBzZWN1cml0eSBlcnJvclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBydWxlc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gZWwubWF0Y2hlcyhyLnNlbGVjdG9yVGV4dCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIG1hdGNoaW5nIGVycm9zXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXG4gICAgICAgIH0pO1xufVxuXG52YXIgZ3JpZFRlbXBsYXRlUHJvcENvbHVtbnMgPSAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJztcbnZhciBncmlkVGVtcGxhdGVQcm9wUm93cyA9ICdncmlkLXRlbXBsYXRlLXJvd3MnO1xuXG52YXIgR3V0dGVyID0gZnVuY3Rpb24gR3V0dGVyKGRpcmVjdGlvbiwgb3B0aW9ucywgcGFyZW50T3B0aW9ucykge1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHRoaXMuZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcbiAgICB0aGlzLnRyYWNrID0gb3B0aW9ucy50cmFjaztcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdjb2x1bW4nKSB7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlUHJvcCA9IGdyaWRUZW1wbGF0ZVByb3BDb2x1bW5zO1xuICAgICAgICB0aGlzLmdyaWRHYXBQcm9wID0gJ2dyaWQtY29sdW1uLWdhcCc7XG4gICAgICAgIHRoaXMuY3Vyc29yID0gZ2V0T3B0aW9uKFxuICAgICAgICAgICAgcGFyZW50T3B0aW9ucyxcbiAgICAgICAgICAgICdjb2x1bW5DdXJzb3InLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdjdXJzb3InLCAnY29sLXJlc2l6ZScpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc25hcE9mZnNldCA9IGdldE9wdGlvbihcbiAgICAgICAgICAgIHBhcmVudE9wdGlvbnMsXG4gICAgICAgICAgICAnY29sdW1uU25hcE9mZnNldCcsXG4gICAgICAgICAgICBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ3NuYXBPZmZzZXQnLCAzMClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kcmFnSW50ZXJ2YWwgPSBnZXRPcHRpb24oXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAgICAgJ2NvbHVtbkRyYWdJbnRlcnZhbCcsXG4gICAgICAgICAgICBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ2RyYWdJbnRlcnZhbCcsIDEpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2xpZW50QXhpcyA9ICdjbGllbnRYJztcbiAgICAgICAgdGhpcy5vcHRpb25TdHlsZSA9IGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnZ3JpZFRlbXBsYXRlQ29sdW1ucycpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncm93Jykge1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVByb3AgPSBncmlkVGVtcGxhdGVQcm9wUm93cztcbiAgICAgICAgdGhpcy5ncmlkR2FwUHJvcCA9ICdncmlkLXJvdy1nYXAnO1xuICAgICAgICB0aGlzLmN1cnNvciA9IGdldE9wdGlvbihcbiAgICAgICAgICAgIHBhcmVudE9wdGlvbnMsXG4gICAgICAgICAgICAncm93Q3Vyc29yJyxcbiAgICAgICAgICAgIGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnY3Vyc29yJywgJ3Jvdy1yZXNpemUnKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNuYXBPZmZzZXQgPSBnZXRPcHRpb24oXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAgICAgJ3Jvd1NuYXBPZmZzZXQnLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdzbmFwT2Zmc2V0JywgMzApXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZHJhZ0ludGVydmFsID0gZ2V0T3B0aW9uKFxuICAgICAgICAgICAgcGFyZW50T3B0aW9ucyxcbiAgICAgICAgICAgICdyb3dEcmFnSW50ZXJ2YWwnLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdkcmFnSW50ZXJ2YWwnLCAxKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNsaWVudEF4aXMgPSAnY2xpZW50WSc7XG4gICAgICAgIHRoaXMub3B0aW9uU3R5bGUgPSBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ2dyaWRUZW1wbGF0ZVJvd3MnKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uRHJhZ1N0YXJ0ID0gZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdvbkRyYWdTdGFydCcsIE5PT1ApO1xuICAgIHRoaXMub25EcmFnRW5kID0gZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdvbkRyYWdFbmQnLCBOT09QKTtcbiAgICB0aGlzLm9uRHJhZyA9IGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnb25EcmFnJywgTk9PUCk7XG4gICAgdGhpcy53cml0ZVN0eWxlID0gZ2V0T3B0aW9uKFxuICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAnd3JpdGVTdHlsZScsXG4gICAgICAgIGRlZmF1bHRXcml0ZVN0eWxlXG4gICAgKTtcblxuICAgIHRoaXMuc3RhcnREcmFnZ2luZyA9IHRoaXMuc3RhcnREcmFnZ2luZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RvcERyYWdnaW5nID0gdGhpcy5zdG9wRHJhZ2dpbmcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYWcgPSB0aGlzLmRyYWcuYmluZCh0aGlzKTtcblxuICAgIHRoaXMubWluU2l6ZVN0YXJ0ID0gb3B0aW9ucy5taW5TaXplU3RhcnQ7XG4gICAgdGhpcy5taW5TaXplRW5kID0gb3B0aW9ucy5taW5TaXplRW5kO1xuXG4gICAgaWYgKG9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zdGFydERyYWdnaW5nKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLnN0YXJ0RHJhZ2dpbmcpO1xuICAgIH1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uIGdldERpbWVuc2lvbnMgKCkge1xuICAgIHZhciByZWYgPSB0aGlzLmdyaWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciB3aWR0aCA9IHJlZi53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IHJlZi5oZWlnaHQ7XG4gICAgICAgIHZhciB0b3AgPSByZWYudG9wO1xuICAgICAgICB2YXIgYm90dG9tID0gcmVmLmJvdHRvbTtcbiAgICAgICAgdmFyIGxlZnQgPSByZWYubGVmdDtcbiAgICAgICAgdmFyIHJpZ2h0ID0gcmVmLnJpZ2h0O1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnY29sdW1uJykge1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdG9wO1xuICAgICAgICB0aGlzLmVuZCA9IGJvdHRvbTtcbiAgICAgICAgdGhpcy5zaXplID0gaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdyb3cnKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLmVuZCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLnNpemUgPSB3aWR0aDtcbiAgICB9XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldFNpemVBdFRyYWNrID0gZnVuY3Rpb24gZ2V0U2l6ZUF0VHJhY2skMSAodHJhY2ssIGVuZCkge1xuICAgIHJldHVybiBnZXRTaXplQXRUcmFjayhcbiAgICAgICAgdHJhY2ssXG4gICAgICAgIHRoaXMuY29tcHV0ZWRQaXhlbHMsXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHMsXG4gICAgICAgIGVuZFxuICAgIClcbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0U2l6ZU9mVHJhY2sgPSBmdW5jdGlvbiBnZXRTaXplT2ZUcmFjayAodHJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5jb21wdXRlZFBpeGVsc1t0cmFja10ubnVtZXJpY1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5nZXRSYXdUcmFja3MgPSBmdW5jdGlvbiBnZXRSYXdUcmFja3MgKCkge1xuICAgIHZhciB0cmFja3MgPSBnZXRTdHlsZXMoXG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlUHJvcCxcbiAgICAgICAgW3RoaXMuZ3JpZF0sXG4gICAgICAgIGdldE1hdGNoZWRDU1NSdWxlcyh0aGlzLmdyaWQpXG4gICAgKTtcbiAgICBpZiAoIXRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uU3R5bGUpIHsgcmV0dXJuIHRoaXMub3B0aW9uU3R5bGUgfVxuXG4gICAgICAgIHRocm93IEVycm9yKCdVbmFibGUgdG8gZGV0ZXJtaW5lIGdyaWQgdGVtcGxhdGUgdHJhY2tzIGZyb20gc3R5bGVzLicpXG4gICAgfVxuICAgIHJldHVybiB0cmFja3NbMF1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0R2FwID0gZnVuY3Rpb24gZ2V0R2FwICgpIHtcbiAgICB2YXIgZ2FwID0gZ2V0U3R5bGVzKFxuICAgICAgICB0aGlzLmdyaWRHYXBQcm9wLFxuICAgICAgICBbdGhpcy5ncmlkXSxcbiAgICAgICAgZ2V0TWF0Y2hlZENTU1J1bGVzKHRoaXMuZ3JpZClcbiAgICApO1xuICAgIGlmICghZ2FwLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gZ2FwWzBdXG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldFJhd0NvbXB1dGVkVHJhY2tzID0gZnVuY3Rpb24gZ2V0UmF3Q29tcHV0ZWRUcmFja3MgKCkge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdyaWQpW3RoaXMuZ3JpZFRlbXBsYXRlUHJvcF1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0UmF3Q29tcHV0ZWRHYXAgPSBmdW5jdGlvbiBnZXRSYXdDb21wdXRlZEdhcCAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ3JpZClbdGhpcy5ncmlkR2FwUHJvcF1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuc2V0VHJhY2tzID0gZnVuY3Rpb24gc2V0VHJhY2tzIChyYXcpIHtcbiAgICB0aGlzLnRyYWNrcyA9IHJhdy5zcGxpdCgnICcpO1xuICAgIHRoaXMudHJhY2tWYWx1ZXMgPSBwYXJzZShyYXcpO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zZXRDb21wdXRlZFRyYWNrcyA9IGZ1bmN0aW9uIHNldENvbXB1dGVkVHJhY2tzIChyYXcpIHtcbiAgICB0aGlzLmNvbXB1dGVkVHJhY2tzID0gcmF3LnNwbGl0KCcgJyk7XG4gICAgdGhpcy5jb21wdXRlZFBpeGVscyA9IHBhcnNlKHJhdyk7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLnNldEdhcCA9IGZ1bmN0aW9uIHNldEdhcCAocmF3KSB7XG4gICAgdGhpcy5nYXAgPSByYXc7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLnNldENvbXB1dGVkR2FwID0gZnVuY3Rpb24gc2V0Q29tcHV0ZWRHYXAgKHJhdykge1xuICAgIHRoaXMuY29tcHV0ZWRHYXAgPSByYXc7XG4gICAgdGhpcy5jb21wdXRlZEdhcFBpeGVscyA9IGdldEdhcFZhbHVlKCdweCcsIHRoaXMuY29tcHV0ZWRHYXApIHx8IDA7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldE1vdXNlUG9zaXRpb24gPSBmdW5jdGlvbiBnZXRNb3VzZVBvc2l0aW9uIChlKSB7XG4gICAgaWYgKCd0b3VjaGVzJyBpbiBlKSB7IHJldHVybiBlLnRvdWNoZXNbMF1bdGhpcy5jbGllbnRBeGlzXSB9XG4gICAgcmV0dXJuIGVbdGhpcy5jbGllbnRBeGlzXVxufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zdGFydERyYWdnaW5nID0gZnVuY3Rpb24gc3RhcnREcmFnZ2luZyAoZSkge1xuICAgIGlmICgnYnV0dG9uJyBpbiBlICYmIGUuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIERvbid0IGFjdHVhbGx5IGRyYWcgdGhlIGVsZW1lbnQuIFdlIGVtdWxhdGUgdGhhdCBpbiB0aGUgZHJhZyBmdW5jdGlvbi5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgdGhpcy5nZXREaW1lbnNpb25zKCk7XG4gICAgdGhpcy5zZXRUcmFja3ModGhpcy5nZXRSYXdUcmFja3MoKSk7XG4gICAgdGhpcy5zZXRDb21wdXRlZFRyYWNrcyh0aGlzLmdldFJhd0NvbXB1dGVkVHJhY2tzKCkpO1xuICAgIHRoaXMuc2V0R2FwKHRoaXMuZ2V0R2FwKCkpO1xuICAgIHRoaXMuc2V0Q29tcHV0ZWRHYXAodGhpcy5nZXRSYXdDb21wdXRlZEdhcCgpKTtcblxuICAgIHZhciB0cmFja1BlcmNlbnRhZ2UgPSB0aGlzLnRyYWNrVmFsdWVzLmZpbHRlcihcbiAgICAgICAgZnVuY3Rpb24gKHRyYWNrKSB7IHJldHVybiB0cmFjay50eXBlID09PSAnJSc7IH1cbiAgICApO1xuICAgIHZhciB0cmFja0ZyID0gdGhpcy50cmFja1ZhbHVlcy5maWx0ZXIoZnVuY3Rpb24gKHRyYWNrKSB7IHJldHVybiB0cmFjay50eXBlID09PSAnZnInOyB9KTtcblxuICAgIHRoaXMudG90YWxGcnMgPSB0cmFja0ZyLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLnRvdGFsRnJzKSB7XG4gICAgICAgIHZhciB0cmFjayA9IGZpcnN0Tm9uWmVybyh0cmFja0ZyKTtcblxuICAgICAgICBpZiAodHJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZnJUb1BpeGVscyA9XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlZFBpeGVsc1t0cmFja10ubnVtZXJpYyAvIHRyYWNrRnJbdHJhY2tdLm51bWVyaWM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHJhY2tQZXJjZW50YWdlLmxlbmd0aCkge1xuICAgICAgICB2YXIgdHJhY2skMSA9IGZpcnN0Tm9uWmVybyh0cmFja1BlcmNlbnRhZ2UpO1xuXG4gICAgICAgIGlmICh0cmFjayQxICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmNlbnRhZ2VUb1BpeGVscyA9XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlZFBpeGVsc1t0cmFjayQxXS5udW1lcmljIC9cbiAgICAgICAgICAgICAgICB0cmFja1BlcmNlbnRhZ2VbdHJhY2skMV0ubnVtZXJpYztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCBzdGFydCBvZiBndXR0ZXIgdHJhY2tcbiAgICB2YXIgZ3V0dGVyU3RhcnQgPSB0aGlzLmdldFNpemVBdFRyYWNrKHRoaXMudHJhY2ssIGZhbHNlKSArIHRoaXMuc3RhcnQ7XG4gICAgdGhpcy5kcmFnU3RhcnRPZmZzZXQgPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oZSkgLSBndXR0ZXJTdGFydDtcblxuICAgIHRoaXMuYVRyYWNrID0gdGhpcy50cmFjayAtIDE7XG5cbiAgICBpZiAodGhpcy50cmFjayA8IHRoaXMudHJhY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5iVHJhY2sgPSB0aGlzLnRyYWNrICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAgIChcIkludmFsaWQgdHJhY2sgaW5kZXg6IFwiICsgKHRoaXMudHJhY2spICsgXCIuIFRyYWNrIG11c3QgYmUgYmV0d2VlbiB0d28gb3RoZXIgdHJhY2tzIGFuZCBvbmx5IFwiICsgKHRoaXMudHJhY2tzLmxlbmd0aCkgKyBcIiB0cmFja3Mgd2VyZSBmb3VuZC5cIilcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHRoaXMuYVRyYWNrU3RhcnQgPSB0aGlzLmdldFNpemVBdFRyYWNrKHRoaXMuYVRyYWNrLCBmYWxzZSkgKyB0aGlzLnN0YXJ0O1xuICAgIHRoaXMuYlRyYWNrRW5kID0gdGhpcy5nZXRTaXplQXRUcmFjayh0aGlzLmJUcmFjaywgdHJ1ZSkgKyB0aGlzLnN0YXJ0O1xuXG4gICAgLy8gU2V0IHRoZSBkcmFnZ2luZyBwcm9wZXJ0eSBvZiB0aGUgcGFpciBvYmplY3QuXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cbiAgICAvLyBBbGwgdGhlIGJpbmRpbmcuIGB3aW5kb3dgIGdldHMgdGhlIHN0b3AgZXZlbnRzIGluIGNhc2Ugd2UgZHJhZyBvdXQgb2YgdGhlIGVsZW1lbnRzLlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZyk7XG5cbiAgICAvLyBEaXNhYmxlIHNlbGVjdGlvbi4gRGlzYWJsZSFcbiAgICB0aGlzLmdyaWQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0c3RhcnQnLCBOT09QKTtcbiAgICB0aGlzLmdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgTk9PUCk7XG5cbiAgICB0aGlzLmdyaWQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICB0aGlzLmdyaWQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICdub25lJztcbiAgICB0aGlzLmdyaWQuc3R5bGUuTW96VXNlclNlbGVjdCA9ICdub25lJztcbiAgICB0aGlzLmdyaWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblxuICAgIC8vIFNldCB0aGUgY3Vyc29yIGF0IG11bHRpcGxlIGxldmVsc1xuICAgIHRoaXMuZ3JpZC5zdHlsZS5jdXJzb3IgPSB0aGlzLmN1cnNvcjtcbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSB0aGlzLmN1cnNvcjtcblxuICAgIHRoaXMub25EcmFnU3RhcnQodGhpcy5kaXJlY3Rpb24sIHRoaXMudHJhY2spO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zdG9wRHJhZ2dpbmcgPSBmdW5jdGlvbiBzdG9wRHJhZ2dpbmcgKCkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIC8vIFJlbW92ZSB0aGUgc3RvcmVkIGV2ZW50IGxpc3RlbmVycy4gVGhpcyBpcyB3aHkgd2Ugc3RvcmUgdGhlbS5cbiAgICB0aGlzLmNsZWFudXAoKTtcblxuICAgIHRoaXMub25EcmFnRW5kKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnRyYWNrKTtcblxuICAgIGlmICh0aGlzLm5lZWRzRGVzdHJveSkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAnbW91c2Vkb3duJyxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAndG91Y2hzdGFydCcsXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdHJveUNiKCk7XG4gICAgICAgIHRoaXMubmVlZHNEZXN0cm95ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVzdHJveUNiID0gbnVsbDtcbiAgICB9XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmRyYWcgPSBmdW5jdGlvbiBkcmFnIChlKSB7XG4gICAgdmFyIG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oZSk7XG5cbiAgICB2YXIgZ3V0dGVyU2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mVHJhY2sodGhpcy50cmFjayk7XG4gICAgdmFyIG1pbk1vdXNlUG9zaXRpb24gPVxuICAgICAgICB0aGlzLmFUcmFja1N0YXJ0ICtcbiAgICAgICAgdGhpcy5taW5TaXplU3RhcnQgK1xuICAgICAgICB0aGlzLmRyYWdTdGFydE9mZnNldCArXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHM7XG4gICAgdmFyIG1heE1vdXNlUG9zaXRpb24gPVxuICAgICAgICB0aGlzLmJUcmFja0VuZCAtXG4gICAgICAgIHRoaXMubWluU2l6ZUVuZCAtXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHMgLVxuICAgICAgICAoZ3V0dGVyU2l6ZSAtIHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0KTtcbiAgICB2YXIgbWluTW91c2VQb3NpdGlvbk9mZnNldCA9IG1pbk1vdXNlUG9zaXRpb24gKyB0aGlzLnNuYXBPZmZzZXQ7XG4gICAgdmFyIG1heE1vdXNlUG9zaXRpb25PZmZzZXQgPSBtYXhNb3VzZVBvc2l0aW9uIC0gdGhpcy5zbmFwT2Zmc2V0O1xuXG4gICAgaWYgKG1vdXNlUG9zaXRpb24gPCBtaW5Nb3VzZVBvc2l0aW9uT2Zmc2V0KSB7XG4gICAgICAgIG1vdXNlUG9zaXRpb24gPSBtaW5Nb3VzZVBvc2l0aW9uO1xuICAgIH1cblxuICAgIGlmIChtb3VzZVBvc2l0aW9uID4gbWF4TW91c2VQb3NpdGlvbk9mZnNldCkge1xuICAgICAgICBtb3VzZVBvc2l0aW9uID0gbWF4TW91c2VQb3NpdGlvbjtcbiAgICB9XG5cbiAgICBpZiAobW91c2VQb3NpdGlvbiA8IG1pbk1vdXNlUG9zaXRpb24pIHtcbiAgICAgICAgbW91c2VQb3NpdGlvbiA9IG1pbk1vdXNlUG9zaXRpb247XG4gICAgfSBlbHNlIGlmIChtb3VzZVBvc2l0aW9uID4gbWF4TW91c2VQb3NpdGlvbikge1xuICAgICAgICBtb3VzZVBvc2l0aW9uID0gbWF4TW91c2VQb3NpdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgYVRyYWNrU2l6ZSA9XG4gICAgICAgIG1vdXNlUG9zaXRpb24gLVxuICAgICAgICB0aGlzLmFUcmFja1N0YXJ0IC1cbiAgICAgICAgdGhpcy5kcmFnU3RhcnRPZmZzZXQgLVxuICAgICAgICB0aGlzLmNvbXB1dGVkR2FwUGl4ZWxzO1xuICAgIHZhciBiVHJhY2tTaXplID1cbiAgICAgICAgdGhpcy5iVHJhY2tFbmQgLVxuICAgICAgICBtb3VzZVBvc2l0aW9uICtcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRPZmZzZXQgLVxuICAgICAgICBndXR0ZXJTaXplIC1cbiAgICAgICAgdGhpcy5jb21wdXRlZEdhcFBpeGVscztcblxuICAgIGlmICh0aGlzLmRyYWdJbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgdmFyIGFUcmFja1NpemVJbnRlcnZhbGVkID1cbiAgICAgICAgICAgIE1hdGgucm91bmQoYVRyYWNrU2l6ZSAvIHRoaXMuZHJhZ0ludGVydmFsKSAqIHRoaXMuZHJhZ0ludGVydmFsO1xuICAgICAgICBiVHJhY2tTaXplIC09IGFUcmFja1NpemVJbnRlcnZhbGVkIC0gYVRyYWNrU2l6ZTtcbiAgICAgICAgYVRyYWNrU2l6ZSA9IGFUcmFja1NpemVJbnRlcnZhbGVkO1xuICAgIH1cblxuICAgIGlmIChhVHJhY2tTaXplIDwgdGhpcy5taW5TaXplU3RhcnQpIHtcbiAgICAgICAgYVRyYWNrU2l6ZSA9IHRoaXMubWluU2l6ZVN0YXJ0O1xuICAgIH1cblxuICAgIGlmIChiVHJhY2tTaXplIDwgdGhpcy5taW5TaXplRW5kKSB7XG4gICAgICAgIGJUcmFja1NpemUgPSB0aGlzLm1pblNpemVFbmQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHJhY2tWYWx1ZXNbdGhpcy5hVHJhY2tdLnR5cGUgPT09ICdweCcpIHtcbiAgICAgICAgdGhpcy50cmFja3NbdGhpcy5hVHJhY2tdID0gYVRyYWNrU2l6ZSArIFwicHhcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMudHJhY2tWYWx1ZXNbdGhpcy5hVHJhY2tdLnR5cGUgPT09ICdmcicpIHtcbiAgICAgICAgaWYgKHRoaXMudG90YWxGcnMgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYVRyYWNrXSA9ICcxZnInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhcmdldEZyID0gYVRyYWNrU2l6ZSAvIHRoaXMuZnJUb1BpeGVscztcbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYVRyYWNrXSA9IHRhcmdldEZyICsgXCJmclwiO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRyYWNrVmFsdWVzW3RoaXMuYVRyYWNrXS50eXBlID09PSAnJScpIHtcbiAgICAgICAgdmFyIHRhcmdldFBlcmNlbnRhZ2UgPSBhVHJhY2tTaXplIC8gdGhpcy5wZXJjZW50YWdlVG9QaXhlbHM7XG4gICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYVRyYWNrXSA9IHRhcmdldFBlcmNlbnRhZ2UgKyBcIiVcIjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50cmFja1ZhbHVlc1t0aGlzLmJUcmFja10udHlwZSA9PT0gJ3B4Jykge1xuICAgICAgICB0aGlzLnRyYWNrc1t0aGlzLmJUcmFja10gPSBiVHJhY2tTaXplICsgXCJweFwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy50cmFja1ZhbHVlc1t0aGlzLmJUcmFja10udHlwZSA9PT0gJ2ZyJykge1xuICAgICAgICBpZiAodGhpcy50b3RhbEZycyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy50cmFja3NbdGhpcy5iVHJhY2tdID0gJzFmcic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0RnIkMSA9IGJUcmFja1NpemUgLyB0aGlzLmZyVG9QaXhlbHM7XG4gICAgICAgICAgICB0aGlzLnRyYWNrc1t0aGlzLmJUcmFja10gPSB0YXJnZXRGciQxICsgXCJmclwiO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRyYWNrVmFsdWVzW3RoaXMuYlRyYWNrXS50eXBlID09PSAnJScpIHtcbiAgICAgICAgdmFyIHRhcmdldFBlcmNlbnRhZ2UkMSA9IGJUcmFja1NpemUgLyB0aGlzLnBlcmNlbnRhZ2VUb1BpeGVscztcbiAgICAgICAgdGhpcy50cmFja3NbdGhpcy5iVHJhY2tdID0gdGFyZ2V0UGVyY2VudGFnZSQxICsgXCIlXCI7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0gdGhpcy50cmFja3Muam9pbignICcpO1xuICAgIHRoaXMud3JpdGVTdHlsZSh0aGlzLmdyaWQsIHRoaXMuZ3JpZFRlbXBsYXRlUHJvcCwgc3R5bGUpO1xuICAgIHRoaXMub25EcmFnKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnRyYWNrLCBzdHlsZSk7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWcpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWcpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICB0aGlzLmdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0c3RhcnQnLCBOT09QKTtcbiAgICAgICAgdGhpcy5ncmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIE5PT1ApO1xuXG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS51c2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG5cbiAgICAgICAgdGhpcy5ncmlkLnN0eWxlLmN1cnNvciA9ICcnO1xuICAgIH1cblxuICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICcnO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoaW1tZWRpYXRlLCBjYikge1xuICAgICAgICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gdHJ1ZTtcblxuICAgIGlmIChpbW1lZGlhdGUgfHwgdGhpcy5kcmFnZ2luZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICdtb3VzZWRvd24nLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5lZWRzRGVzdHJveSA9IHRydWU7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95Q2IgPSBjYjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBnZXRUcmFja09wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zLCB0cmFjaywgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHRyYWNrIGluIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNbdHJhY2tdXG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxufTtcblxudmFyIGNyZWF0ZUd1dHRlciA9IGZ1bmN0aW9uIChkaXJlY3Rpb24sIG9wdGlvbnMpIHsgcmV0dXJuIGZ1bmN0aW9uIChndXR0ZXJPcHRpb25zKSB7XG4gICAgaWYgKGd1dHRlck9wdGlvbnMudHJhY2sgPCAxKSB7XG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgKFwiSW52YWxpZCB0cmFjayBpbmRleDogXCIgKyAoZ3V0dGVyT3B0aW9ucy50cmFjaykgKyBcIi4gVHJhY2sgbXVzdCBiZSBiZXR3ZWVuIHR3byBvdGhlciB0cmFja3MuXCIpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICB2YXIgdHJhY2tNaW5TaXplcyA9XG4gICAgICAgIGRpcmVjdGlvbiA9PT0gJ2NvbHVtbidcbiAgICAgICAgICAgID8gb3B0aW9ucy5jb2x1bW5NaW5TaXplcyB8fCB7fVxuICAgICAgICAgICAgOiBvcHRpb25zLnJvd01pblNpemVzIHx8IHt9O1xuICAgIHZhciB0cmFja01pblNpemUgPSBkaXJlY3Rpb24gPT09ICdjb2x1bW4nID8gJ2NvbHVtbk1pblNpemUnIDogJ3Jvd01pblNpemUnO1xuXG4gICAgcmV0dXJuIG5ldyBHdXR0ZXIoXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwge21pblNpemVTdGFydDogZ2V0VHJhY2tPcHRpb24oXG4gICAgICAgICAgICAgICAgdHJhY2tNaW5TaXplcyxcbiAgICAgICAgICAgICAgICBndXR0ZXJPcHRpb25zLnRyYWNrIC0gMSxcbiAgICAgICAgICAgICAgICBnZXRPcHRpb24oXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrTWluU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uKG9wdGlvbnMsICdtaW5TaXplJywgMClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWluU2l6ZUVuZDogZ2V0VHJhY2tPcHRpb24oXG4gICAgICAgICAgICAgICAgdHJhY2tNaW5TaXplcyxcbiAgICAgICAgICAgICAgICBndXR0ZXJPcHRpb25zLnRyYWNrICsgMSxcbiAgICAgICAgICAgICAgICBnZXRPcHRpb24oXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrTWluU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uKG9wdGlvbnMsICdtaW5TaXplJywgMClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfSxcbiAgICAgICAgICAgIGd1dHRlck9wdGlvbnMpLFxuICAgICAgICBvcHRpb25zXG4gICAgKVxufTsgfTtcblxudmFyIEdyaWQgPSBmdW5jdGlvbiBHcmlkKG9wdGlvbnMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHRoaXMuY29sdW1uR3V0dGVycyA9IHt9O1xuICAgIHRoaXMucm93R3V0dGVycyA9IHt9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwge2NvbHVtbkd1dHRlcnM6IG9wdGlvbnMuY29sdW1uR3V0dGVycyB8fCBbXSxcbiAgICAgICAgcm93R3V0dGVyczogb3B0aW9ucy5yb3dHdXR0ZXJzIHx8IFtdLFxuICAgICAgICBjb2x1bW5NaW5TaXplczogb3B0aW9ucy5jb2x1bW5NaW5TaXplcyB8fCB7fSxcbiAgICAgICAgcm93TWluU2l6ZXM6IG9wdGlvbnMucm93TWluU2l6ZXMgfHwge319LFxuICAgICAgICBvcHRpb25zKTtcblxuICAgIHRoaXMub3B0aW9ucy5jb2x1bW5HdXR0ZXJzLmZvckVhY2goZnVuY3Rpb24gKGd1dHRlck9wdGlvbnMpIHtcbiAgICAgICAgdGhpcyQxLmNvbHVtbkd1dHRlcnNbZ3V0dGVyT3B0aW9ucy50cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICAgICAnY29sdW1uJyxcbiAgICAgICAgICAgIHRoaXMkMS5vcHRpb25zXG4gICAgICAgICkoZ3V0dGVyT3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wdGlvbnMucm93R3V0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChndXR0ZXJPcHRpb25zKSB7XG4gICAgICAgIHRoaXMkMS5yb3dHdXR0ZXJzW2d1dHRlck9wdGlvbnMudHJhY2tdID0gY3JlYXRlR3V0dGVyKFxuICAgICAgICAgICAgJ3JvdycsXG4gICAgICAgICAgICB0aGlzJDEub3B0aW9uc1xuICAgICAgICApKGd1dHRlck9wdGlvbnMpO1xuICAgIH0pO1xufTtcblxuR3JpZC5wcm90b3R5cGUuYWRkQ29sdW1uR3V0dGVyID0gZnVuY3Rpb24gYWRkQ29sdW1uR3V0dGVyIChlbGVtZW50LCB0cmFjaykge1xuICAgIGlmICh0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICdjb2x1bW4nLFxuICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICApKHtcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgIH0pO1xufTtcblxuR3JpZC5wcm90b3R5cGUuYWRkUm93R3V0dGVyID0gZnVuY3Rpb24gYWRkUm93R3V0dGVyIChlbGVtZW50LCB0cmFjaykge1xuICAgIGlmICh0aGlzLnJvd0d1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICdyb3cnLFxuICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICApKHtcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgIH0pO1xufTtcblxuR3JpZC5wcm90b3R5cGUucmVtb3ZlQ29sdW1uR3V0dGVyID0gZnVuY3Rpb24gcmVtb3ZlQ29sdW1uR3V0dGVyICh0cmFjaywgaW1tZWRpYXRlKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgICAgICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10uZGVzdHJveShpbW1lZGlhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzJDEuY29sdW1uR3V0dGVyc1t0cmFja107XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbkdyaWQucHJvdG90eXBlLnJlbW92ZVJvd0d1dHRlciA9IGZ1bmN0aW9uIHJlbW92ZVJvd0d1dHRlciAodHJhY2ssIGltbWVkaWF0ZSkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICAgICAgaWYgKCBpbW1lZGlhdGUgPT09IHZvaWQgMCApIGltbWVkaWF0ZSA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5yb3dHdXR0ZXJzW3RyYWNrXSkge1xuICAgICAgICB0aGlzLnJvd0d1dHRlcnNbdHJhY2tdLmRlc3Ryb3koaW1tZWRpYXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcyQxLnJvd0d1dHRlcnNbdHJhY2tdO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5HcmlkLnByb3RvdHlwZS5oYW5kbGVEcmFnU3RhcnQgPSBmdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQgKGUsIGRpcmVjdGlvbiwgdHJhY2spIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnY29sdW1uJykge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXSkge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdID0gY3JlYXRlR3V0dGVyKFxuICAgICAgICAgICAgJ2NvbHVtbicsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgKSh7XG4gICAgICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdLnN0YXJ0RHJhZ2dpbmcoZSk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyb3cnKSB7XG4gICAgICAgIGlmICh0aGlzLnJvd0d1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgICAgICB0aGlzLnJvd0d1dHRlcnNbdHJhY2tdLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICAgICAncm93JyxcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICApKHtcbiAgICAgICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10uc3RhcnREcmFnZ2luZyhlKTtcbiAgICB9XG59O1xuXG5HcmlkLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoaW1tZWRpYXRlKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgICAgICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gdHJ1ZTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuY29sdW1uR3V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHsgcmV0dXJuIHRoaXMkMS5jb2x1bW5HdXR0ZXJzW3RyYWNrXS5kZXN0cm95KGltbWVkaWF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMkMS5jb2x1bW5HdXR0ZXJzW3RyYWNrXTtcbiAgICAgICAgfSk7IH1cbiAgICApO1xuICAgIE9iamVjdC5rZXlzKHRoaXMucm93R3V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHsgcmV0dXJuIHRoaXMkMS5yb3dHdXR0ZXJzW3RyYWNrXS5kZXN0cm95KGltbWVkaWF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMkMS5yb3dHdXR0ZXJzW3RyYWNrXTtcbiAgICAgICAgfSk7IH1cbiAgICApO1xufTtcblxuZnVuY3Rpb24gaW5kZXggKG9wdGlvbnMpIHsgcmV0dXJuIG5ldyBHcmlkKG9wdGlvbnMpOyB9XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXIuanNcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9sb2dpbi5qc1wiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vc2lkZWJhci5qc1wiO1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29udGVudC5qc1wiO1xuaW1wb3J0IEd1dHRlcnMgZnJvbSBcIi4vZ3V0dGVycy5qc1wiO1xuaW1wb3J0IFNwbGl0IGZyb20gXCJzcGxpdC1ncmlkXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgXCIuLi9kaXN0L2Nzcy9tYWluLmNzc1wiO1xuXG5jb25zdCB1c2VyRGF0YSA9IFtdO1xuY29uc3QgcHJvamVjdERhdGEgPSBbXTtcblxuSGVhZGVyKCk7XG5Mb2dpbih1c2VyRGF0YSk7XG5TaWRlYmFyKCk7XG5Db250ZW50KHByb2plY3REYXRhKTtcbkd1dHRlcnMoKTtcblNwbGl0KHtcbiAgICBtYXhTaXplOiAyMDAsXG4gICAgY29sdW1uR3V0dGVyczogW3tcbiAgICAgICAgdHJhY2s6IDEsXG4gICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3V0dGVyLWNvbFwiKVxuICAgIH1dLFxuICAgIHJvd0d1dHRlcnM6IFt7XG4gICAgICAgIHRyYWNrOiAxLFxuICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1dHRlci1yb3dcIilcbiAgICB9XVxufSk7XG5Qcm9qZWN0KHByb2plY3REYXRhKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=