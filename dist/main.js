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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@-webkit-keyframes header-spawn {\n  0% {\n    transform: translateY(-500px);\n  }\n  50% {\n    transform: translateY(20px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes header-spawn {\n  0% {\n    transform: translateY(-500px);\n  }\n  50% {\n    transform: translateY(20px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes sidebar-spawn {\n  0% {\n    transform: translateX(-500px);\n  }\n  50% {\n    transform: translateX(20px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n@keyframes sidebar-spawn {\n  0% {\n    transform: translateX(-500px);\n  }\n  50% {\n    transform: translateX(20px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n@-webkit-keyframes list-spawn {\n  from {\n    transform: translateY(1000px);\n  }\n  to {\n    transform: translateY(0px);\n  }\n}\n@keyframes list-spawn {\n  from {\n    transform: translateY(1000px);\n  }\n  to {\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes prompt-spawn {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n@keyframes prompt-spawn {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n@-webkit-keyframes day-spawn {\n  0% {\n    top: 100%;\n    left: 100%;\n  }\n  100% {\n    top: 0%;\n    left: 0%;\n  }\n}\n@keyframes day-spawn {\n  0% {\n    top: 100%;\n    left: 100%;\n  }\n  100% {\n    top: 0%;\n    left: 0%;\n  }\n}\n@-webkit-keyframes content-despawn {\n  0% {\n    opacity: 100%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n@keyframes content-despawn {\n  0% {\n    opacity: 100%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n@-webkit-keyframes content-respawn {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: 0%;\n  }\n}\n@keyframes content-respawn {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: 0%;\n  }\n}\n.button-close {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgb(194, 27, 27);\n  color: white;\n  font-size: 2rem;\n  font-weight: 700;\n  height: 50px;\n  width: 50px;\n  border-top-left-radius: 25px;\n  border-bottom-right-radius: 10px;\n}\n\n.proj-selected {\n  scale: 90%;\n}\n\n.month-toggle:nth-of-type(1) {\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n}\n\n.month-toggle:nth-of-type(2) {\n  border-top-right-radius: 50%;\n  border-bottom-right-radius: 50%;\n}\n\n* {\n  font-family: \"Karla\";\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr;\n  background-color: lightgrey;\n  position: relative;\n}\nbody #content {\n  width: auto;\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 2px 4fr;\n  grid-template-columns: 1fr 2px 4fr;\n  z-index: 0;\n}\nbody #content #header {\n  -webkit-animation: header-spawn;\n          animation: header-spawn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  gap: 0;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  background: lightgrey;\n  padding: 5px 0;\n  transform: translateY(-500px);\n  z-index: 2;\n}\nbody #content #header h1 {\n  font-size: 4rem;\n}\nbody #content #header #header-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\nbody #content #header #header-buttons button {\n  border-style: none;\n  border-radius: 5px;\n  border-color: black;\n  border-width: medium;\n  font-family: \"Roboto Mono\";\n  font-size: 1rem;\n  padding: 20px 40px;\n}\nbody #content #header #header-buttons button:hover {\n  scale: 90%;\n}\nbody #content #header #header-buttons #login-button {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\nbody #content #header #header-buttons #menu-button {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  padding: 20px 40px;\n  transition: 0.25s;\n}\nbody #content #header #header-buttons #menu-button:hover {\n  padding: 20px 120px;\n  transition: 0.25s;\n}\nbody #content #sidebar {\n  -webkit-animation: sidebar-spawn;\n          animation: sidebar-spawn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  display: grid;\n  grid-template-rows: repeat(4, minmax(50px, 80px)) auto minmax(50px, 80px);\n  grid-template-columns: 1fr;\n  grid-row: 3/4;\n  grid-column: 1/2;\n  background: lightgrey;\n  justify-content: center;\n  margin-left: auto;\n  padding: 20px;\n  position: relative;\n  z-index: 1;\n}\nbody #content #sidebar button {\n  border-style: none;\n  border-radius: none;\n  border-color: black;\n  border-width: medium;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  font-family: inherit;\n  font-size: 1.25rem;\n  background: rgba(0, 0, 0, 0);\n}\nbody #content #sidebar button:hover {\n  cursor: pointer;\n  scale: 90%;\n}\nbody #content #sidebar body #content #sidebar-inbox {\n  grid-row: 1/2;\n  grid-column: 1/-1;\n}\nbody #content #sidebar body #content #sidebar-today {\n  grid-row: 2/3;\n  grid-column: 1/-1;\n}\nbody #content #sidebar body #content #sidebar-calendar {\n  grid-row: 3/4;\n  grid-column: 1/-1;\n}\nbody #content #sidebar body #content #sidebar-projects {\n  grid-row: 4/5;\n  grid-column: 1/-1;\n}\nbody #content #sidebar #sidebar-list {\n  grid-row: 5/6;\n  grid-column: 1/-1;\n  height: auto;\n}\nbody #content #sidebar #sidebar-list button {\n  border-style: none;\n  border-radius: none;\n  border-color: black;\n  border-width: medium;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  font-family: \"Roboto Mono\";\n  font-size: 1.25rem;\n  background-color: rgba(0, 0, 0, 0);\n  padding-left: 20%;\n}\nbody #content #sidebar #sidebar-list button img {\n  height: 2rem;\n}\nbody #content #sidebar body #content #sidebar-add {\n  grid-row: 6/7;\n  grid-column: 1/-1;\n}\nbody #content #sidebar .projects-closed {\n  display: none;\n}\nbody #content #sidebar div:empty {\n  display: none;\n}\nbody #content #content-wrapper {\n  -webkit-animation: list-spawn;\n          animation: list-spawn;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  grid-row: 3/4;\n  grid-column: 3/4;\n  min-width: 65vw;\n  min-height: 5vh;\n  background: white;\n  position: relative;\n  z-index: 0;\n}\nbody #content #content-wrapper #reset-layout {\n  border-style: none;\n  border-radius: 0;\n  border-color: black;\n  border-width: medium;\n  top: auto;\n  right: 0%;\n  bottom: 0%;\n  left: auto;\n  background: rgba(0, 0, 0, 0);\n  position: absolute;\n  transition: 0.25s;\n}\nbody #content #content-wrapper #reset-layout:hover {\n  top: auto;\n  right: 2%;\n  bottom: 2%;\n  left: auto;\n  cursor: pointer;\n  scale: 120%;\n}\nbody #content #content-wrapper #inbox {\n  width: auto;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  position: relative;\n}\nbody #content #content-wrapper #today {\n  width: auto;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  position: relative;\n}\nbody #content #content-wrapper #calendar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  position: relative;\n}\nbody #content #content-wrapper #calendar #calendar-grid {\n  width: auto;\n  height: 100%;\n  display: grid;\n  grid-template-rows: 50px 50px 1fr;\n  grid-template-columns: 1fr;\n  position: relative;\n}\nbody #content #content-wrapper #calendar #calendar-grid h2, body #content #content-wrapper #calendar #calendar-grid h3, body #content #content-wrapper #calendar #calendar-grid div {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n}\nbody #content #content-wrapper #calendar #calendar-grid #calendar-month {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n}\nbody #content #content-wrapper #calendar #calendar-grid #calendar-month button {\n  border-style: none;\n  border-radius: 0;\n  border-color: black;\n  border-width: medium;\n  padding: 10px;\n}\nbody #content #content-wrapper #calendar #calendar-grid #calendar-headers {\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: repeat(7, 1fr);\n  grid-row: 2/3;\n  grid-column: 1/-1;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper {\n  border-style: none;\n  border-radius: 25px;\n  border-color: black;\n  border-width: medium;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: stretch;\n  gap: 0;\n  grid-row: 3/4;\n  grid-column: 1/-1;\n  position: relative;\n  overflow: hidden;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #calendar-days {\n  display: grid;\n  grid-template-rows: repeat(6, 65px);\n  grid-template-columns: repeat(7, 65px);\n  position: relative;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #calendar-days button {\n  width: 65px;\n  height: 65px;\n  font-family: inherit;\n  font-size: 1.5rem;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  transition: 0.25s;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #calendar-days button:hover {\n  border-style: none;\n  border-radius: 15%;\n  border-color: black;\n  border-width: medium;\n  font-family: inherit;\n  font-size: 2.5rem;\n  scale: 120%;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected {\n  -webkit-animation: day-spawn;\n          animation: day-spawn;\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  border-style: none;\n  border-radius: 25px;\n  border-color: black;\n  border-width: medium;\n  display: grid;\n  grid-template-rows: 0.1fr 0.1fr 0.1fr;\n  grid-template-columns: 0.9fr;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: lightgrey;\n  position: absolute;\n  z-index: 2;\n  overflow: scroll;\n  grid-auto-rows: 0.1fr;\n  gap: 10px;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected .calendar-task {\n  border-style: solid;\n  border-radius: 0;\n  border-color: rgba(0, 0, 0, 0.4);\n  border-width: 2px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  font-family: inherit;\n  font-size: 1.5rem;\n  background: white;\n  padding: 5px;\n  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected .calendar-task button {\n  border-style: none;\n  border-radius: 0;\n  border-color: black;\n  border-width: medium;\n  background: rgba(0, 0, 0, 0);\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected .calendar-task button img {\n  height: 2rem;\n  transition: 0.2s;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected .calendar-task button img:hover {\n  cursor: pointer;\n  height: 1.75rem;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected .calendar-task .task-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 10px;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected #add-task {\n  grid-row: 2/3;\n  grid-column: 1/-1;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected #day-num-selected {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  font-family: inherit;\n  font-size: 3rem;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  position: relative;\n  top: 0;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected #close-day {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n  position: absolute;\n}\nbody #content #content-wrapper .list-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n}\nbody #content #content-wrapper .list-content #add-task {\n  border-style: none;\n  border-radius: 0;\n  border-color: black;\n  border-width: medium;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-family: inherit;\n  font-size: 1.25rem;\n  padding: 10px 20px;\n}\nbody #content #content-wrapper .list-content #add-task img {\n  height: 36px;\n}\nbody #content #gutter-col {\n  -webkit-animation: sidebar-spawn;\n          animation: sidebar-spawn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  width: 2px;\n  height: auto;\n  grid-row: 3/4;\n  grid-column: 2/3;\n  background: black;\n  justify-self: center;\n  position: relative;\n  transition: 0.5s;\n  z-index: 1;\n}\nbody #content #gutter-col:hover {\n  width: 15px;\n  height: auto;\n  cursor: col-resize;\n}\nbody #content #gutter-row {\n  -webkit-animation: header-spawn;\n          animation: header-spawn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  width: auto;\n  height: 2px;\n  grid-row: 2/3;\n  grid-column: 1/-1;\n  align-self: center;\n  background: black;\n  position: relative;\n  transition: 0.5s;\n  z-index: 2;\n}\nbody #content #gutter-row:hover {\n  width: auto;\n  height: 15px;\n  cursor: row-resize;\n}\nbody .popup-screen {\n  -webkit-animation: prompt-spawn;\n          animation: prompt-spawn;\n  -webkit-animation-duration: 0.25s;\n          animation-duration: 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  z-index: 1;\n}\nbody .popup-screen .popup-prompt {\n  -webkit-animation: header-spawn;\n          animation: header-spawn;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  border-style: none;\n  border-radius: 25px;\n  border-color: black;\n  border-width: medium;\n  width: 500px;\n  height: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  background: white;\n  box-shadow: 5px 5px 20px #000000;\n}\nbody .popup-screen .popup-prompt form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 10px;\n}\nbody .popup-screen .popup-prompt form .input-field {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 0;\n}/*# sourceMappingURL=main.css.map */", "",{"version":3,"sources":["webpack://./scss/_reset.scss","webpack://./dist/css/main.css","webpack://./scss/_animations.scss","webpack://./scss/_buttons.scss","webpack://./scss/_colors.scss","webpack://./scss/main.scss","webpack://./scss/_mixins.scss","webpack://./scss/_typography.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;ACGJ;;ACNA;EACI;IACI,6BAAA;EDSN;ECRI;IACE,2BAAA;EDUN;ECTI;IACE,0BAAA;EDWN;AACF;;AClBA;EACI;IACI,6BAAA;EDSN;ECRI;IACE,2BAAA;EDUN;ECTI;IACE,0BAAA;EDWN;AACF;ACRA;EACI;IACI,6BAAA;EDUN;ECRE;IACI,2BAAA;EDUN;ECRE;IACI,0BAAA;EDUN;AACF;ACnBA;EACI;IACI,6BAAA;EDUN;ECRE;IACI,2BAAA;EDUN;ECRE;IACI,0BAAA;EDUN;AACF;ACPA;EACI;IACI,6BAAA;EDSN;ECPE;IACI,0BAAA;EDSN;AACF;ACfA;EACI;IACI,6BAAA;EDSN;ECPE;IACI,0BAAA;EDSN;AACF;ACNA;EACI;IACI,WAAA;EDQN;ECPI;IACE,aAAA;EDSN;AACF;ACdA;EACI;IACI,WAAA;EDQN;ECPI;IACE,aAAA;EDSN;AACF;ACNA;EACI;IACI,SAAA;IACA,UAAA;EDQN;ECPI;IACE,OAAA;IACA,QAAA;EDSN;AACF;AChBA;EACI;IACI,SAAA;IACA,UAAA;EDQN;ECPI;IACE,OAAA;IACA,QAAA;EDSN;AACF;ACNA;EACI;IACI,aAAA;EDQN;ECPI;IACE,WAAA;EDSN;AACF;ACdA;EACI;IACI,aAAA;EDQN;ECPI;IACE,WAAA;EDSN;AACF;ACNA;EACI;IACI,SAAA;EDQN;ECPI;IACE,OAAA;EDSN;AACF;ACdA;EACI;IACI,SAAA;EDQN;ECPI;IACE,OAAA;EDSN;AACF;AErEA;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EAEA,kCCFO;EDGP,YCDS;EDET,eAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,4BAAA;EACA,gCAAA;AFsEJ;;AEnEA;EACI,UAAA;AFsEJ;;AEnEA;EACI,2BAAA;EACA,8BAAA;AFsEJ;;AEnEA;EACI,4BAAA;EACA,+BAAA;AFsEJ;;AI1FA;EACI,oBAAA;AJ6FJ;;AI1FA;ECHI,aAAA;EACA,uBDGc;ECFd,0BDEmB;EACnB,2BDXS;ECYT,kBAAA;AJ+FJ;AI7FI;ECGA,WDFkB;ECGlB,aDHwB;ECTxB,aAAA;EACA,+BDSkB;ECRlB,kCDQ+B;EAC3B,UAAA;AJkGR;AIhGQ;EC2BJ,+BD1B2B;UC0B3B,uBD1B2B;EC2B3B,8BD3ByC;UC2BzC,sBD3ByC;EC4BzC,qCD5B6C;UC4B7C,6BD5B6C;ECtB7C,aAAA;EACA,mBDsBsB;ECrBtB,6BDqB2B;ECpB3B,mBDoByC;ECnBzC,MALkE;EAelE,aDU0B;ECT1B,iBDSkC;EAC1B,qBDvBC;ECwBD,cAAA;EACA,6BAAA;EACA,UAAA;AJyGZ;AIvGY;EACI,eAAA;AJyGhB;AItGY;EClCR,aAAA;EACA,mBDkC0B;ECjC1B,uBDiC+B;EChC/B,mBDgCuC;EC/BvC,SD+B+C;AJ4GnD;AI1GgB;ECIZ,kBDHgC;ECIhC,kBDJsC;ECKtC,mBAHwD;EAIxD,oBAJyC;EAXzC,0BC3BS;ED4BT,eDS2C;EAC3B,kBAAA;AJgHpB;AI9GoB;EACI,UAAA;AJgHxB;AI5GgB;EC/CZ,aAAA;EACA,mBD+C8B;EC9C9B,uBD8CmC;EC7CnC,mBD6C2C;EC5C3C,SD4CmD;AJkHvD;AI/GgB;ECnDZ,aAAA;EACA,mBDmD8B;EClD9B,uBDkDmC;ECjDnC,mBDiD2C;EChD3C,MALkE;EDsDlD,kBAAA;EACA,iBAAA;AJqHpB;AInHoB;EACI,mBAAA;EACA,iBAAA;AJqHxB;AI/GQ;EChBJ,gCDiB2B;UCjB3B,wBDiB2B;EChB3B,8BDgB0C;UChB1C,sBDgB0C;ECf1C,qCDe8C;UCf9C,6BDe8C;ECzD9C,aAAA;EACA,yEDyDsB;ECxDtB,0BDwD6E;ECpD7E,aDqD0B;ECpD1B,gBDoDkC;EAC1B,qBDlEC;ECmED,uBAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;EACA,UAAA;AJsHZ;AIpHY;EClCR,kBDmC4B;EClC5B,mBDkCkC;ECjClC,mBAHwD;EAIxD,oBAJyC;EAxCzC,aAAA;EACA,mBD4E0B;EC3E1B,2BD2E+B;EC1E/B,mBD0E2C;ECzE3C,SDyEmD;EChDnD,oBDiD0B;EChD1B,kBDgDmC;EACvB,4BDhFF;AH8Md;AI5HgB;EACI,eAAA;EACA,UAAA;AJ8HpB;AI1HY;ECzER,aD0E8B;ECzE9B,iBDyEsC;AJ6H1C;AI1HY;EC7ER,aD8E8B;EC7E9B,iBD6EsC;AJ6H1C;AI1HY;ECjFR,aDkF8B;ECjF9B,iBDiFsC;AJ6H1C;AI1HY;ECrFR,aDsF8B;ECrF9B,iBDqFsC;AJ6H1C;AI1HY;ECzFR,aD0F8B;ECzF9B,iBDyFsC;EAC1B,YAAA;AJ6HhB;AI3HgB;EClEZ,kBDmEgC;EClEhC,mBDkEsC;ECjEtC,mBAHwD;EAIxD,oBAJyC;EAxCzC,aAAA;EACA,mBD4G8B;EC3G9B,uBD2GmC;EC1GnC,mBD0G2C;ECzG3C,QDyGmD;EChFnD,0BC3BS;ED4BT,kBDgF2C;EAC3B,kCDhHN;ECiHM,iBAAA;AJqIpB;AInIoB;EACI,YAAA;AJqIxB;AIhIY;EC1GR,aD2G8B;EC1G9B,iBD0GsC;AJmI1C;AIhIY;EACI,aAAA;AJkIhB;AI/HY;EACI,aAAA;AJiIhB;AI7HQ;ECrFJ,6BDsF2B;UCtF3B,qBDsF2B;ECrF3B,gCDqFuC;UCrFvC,wBDqFuC;ECpFvC,qCDoF6C;UCpF7C,6BDoF6C;ECtI7C,aAAA;EACA,mBDsIsB;ECrItB,uBDqI2B;ECpI3B,mBDoImC;ECnInC,MALkE;EAelE,aD0H0B;ECzH1B,gBDyHkC;EChHlC,eDiH0B;EChH1B,eDgHgC;EACxB,iBAAA;EACA,kBAAA;EACA,UAAA;AJuIZ;AIrIY;ECrGR,kBDsG4B;ECrG5B,gBAF+B;EAG/B,mBAHwD;EAIxD,oBAJyC;EANzC,SD8G8B;EC7G9B,SD6GoC;EC5GpC,UD4GwC;EC3GxC,UD2G4C;EAChC,4BDlJF;ECmJE,kBAAA;EACA,iBAAA;AJ6IhB;AI3IgB;ECnHZ,SDoHkC;ECnHlC,SDmHwC;EClHxC,UDkH4C;ECjH5C,UDiHgD;EAChC,eAAA;EACA,WAAA;AJgJpB;AI5IY;ECzIR,WD0I0B;ECzI1B,YDyIgC;EC7JhC,aAAA;EACA,sBD6J0B;EC5J1B,uBD4JkC;EC3JlC,mBD2J0C;EC1J1C,MALkE;EDgKtD,kBAAA;AJmJhB;AIhJY;EC/IR,WDgJ0B;EC/I1B,YD+IgC;ECnKhC,aAAA;EACA,sBDmK0B;EClK1B,uBDkKkC;ECjKlC,mBDiK0C;EChK1C,MALkE;EDsKtD,kBAAA;AJuJhB;AIpJY;ECxKR,aAAA;EACA,sBDwK0B;ECvK1B,uBDuKkC;ECtKlC,mBDsK0C;ECrK1C,MALkE;ED2KtD,kBAAA;AJ0JhB;AIxJgB;ECzJZ,WD0J8B;ECzJ9B,YDyJoC;ECrKpC,aAAA;EACA,iCDqK8B;ECpK9B,0BDoK6C;EAC7B,kBAAA;AJ6JpB;AI3JoB;ECjLhB,aAAA;EACA,mBDiLkC;EChLlC,uBDgLuC;EC/KvC,mBD+K+C;EC9K/C,MALkE;ALoVtE;AI9JoB;ECrLhB,aAAA;EACA,mBDqLkC;ECpLlC,8BDoLuC;ECnLvC,mBDmLsD;EClLtD,MALkE;EAelE,aDyKsC;ECxKtC,iBDwK8C;AJqKlD;AInKwB;EChJpB,kBDiJwC;EChJxC,gBAF+B;EAG/B,mBAHwD;EAIxD,oBAJyC;EDmJjB,aAAA;AJwK5B;AIpKoB;ECvLhB,aAAA;EACA,uBDuLkC;ECtLlC,qCDsLuC;EClLvC,aDmLsC;EClLtC,iBDkL8C;AJyKlD;AItKoB;EC3JhB,kBD4JoC;EC3JpC,mBD2J0C;EC1J1C,mBAHwD;EAIxD,oBAJyC;EAxCzC,aAAA;EACA,mBDqMkC;ECpMlC,uBDoMuC;ECnMvC,oBDmM+C;EClM/C,MALkE;EAelE,aDyLsC;ECxLtC,iBDwL8C;EAC1B,kBAAA;EACA,gBAAA;AJgLxB;AI9KwB;ECnMpB,aAAA;EACA,mCDmMsC;EClMtC,sCDkMuD;EAC/B,kBAAA;AJkL5B;AIhL4B;EC5LxB,WD6L0C;EC5L1C,YD4LgD;ECnLhD,oBDoL0C;ECnL1C,iBDmLmD;EACvB,oCAAA;EACA,iBAAA;AJoLhC;AIlLgC;EC5K5B,kBD6KgD;EC5KhD,kBD4KsD;EC3KtD,mBAHwD;EAIxD,oBAJyC;EAXzC,oBD0L8C;ECzL9C,iBDyLuD;EACvB,WAAA;AJwLpC;AInLwB;EC7KpB,4BD8K2C;UC9K3C,oBD8K2C;EC7K3C,gCD6KsD;UC7KtD,wBD6KsD;EC5KtD,qCD4K4D;UC5K5D,6BD4K4D;ECrL5D,kBDsLwC;ECrLxC,mBDqL8C;ECpL9C,mBAHwD;EAIxD,oBAJyC;EAhCzC,aAAA;EACA,qCDuNsC;ECtNtC,4BDsNyD;EC9LzD,MD+L0C;EC9L1C,QD8L6C;EC7L7C,SD6LgD;EC5LhD,OD4LmD;EAC3B,2BAAA;EACA,kBAAA;EACA,UAAA;EACA,gBAAA;EACA,qBAAA;EACA,SAAA;AJ+L5B;AI7L4B;EChMxB,mBDiM4C;EChM5C,gBDgMmD;EC/LnD,gCD+L2D;EC9L3D,iBD8LsD;EC1OtD,aAAA;EACA,mBD0O0C;ECzO1C,8BDyO+C;ECxO/C,mBDwO8D;ECvO9D,SDuOsE;EC9MtE,oBD+M0C;EC9M1C,iBD8MmD;EACvB,iBAAA;EACA,YAAA;EACA,2CAAA;AJuMhC;AIrMgC;ECxM5B,kBDyMgD;ECxMhD,gBAF+B;EAG/B,mBAHwD;EAIxD,oBAJyC;ED2MT,4BDpPtB;AH8bd;AIxMoC;EACI,YAAA;EACA,gBAAA;AJ0MxC;AIxMwC;EACI,eAAA;EACA,eAAA;AJ0M5C;AIrMgC;EChQ5B,aAAA;EACA,sBDgQ8C;EC/P9C,2BD+PsD;EC9PtD,uBD8PkE;EC7PlE,SD6P8E;AJ2MlF;AIvM4B;ECvPxB,aDwP8C;ECvP9C,iBDuPsD;AJ0M1D;AIvM4B;ECzQxB,aAAA;EACA,mBDyQ0C;ECxQ1C,uBDwQ+C;ECvQ/C,mBDuQuD;ECtQvD,MALkE;EA8BlE,oBD8O0C;EC7O1C,eD6OmD;EC7PnD,aD8P8C;EC7P9C,iBD6PsD;EAC1B,kBAAA;EACA,MAAA;AJ+MhC;AI5M4B;EC/OxB,MDgP8C;EC/O9C,WD+OiD;EC9OjD,YD8OuD;EC7OvD,OD6O6D;EACjC,kBAAA;AJiNhC;AI1MY;EC1RR,aAAA;EACA,sBD0R0B;ECzR1B,uBDyRkC;ECxRlC,mBDwR0C;ECvR1C,MALkE;AL4etE;AI9MgB;ECpPZ,kBDqPgC;ECpPhC,gBAF+B;EAG/B,mBAHwD;EAIxD,oBAJyC;EAxCzC,aAAA;EACA,mBD8R8B;EC7R9B,uBD6RmC;EC5RnC,mBD4R2C;EC3R3C,SD2RmD;EClQnD,oBDmQ8B;EClQ9B,kBDkQuC;EACvB,kBAAA;AJwNpB;AItNoB;EACI,YAAA;AJwNxB;AIlNQ;EC1PJ,gCD2P2B;UC3P3B,wBD2P2B;EC1P3B,8BD0P0C;UC1P1C,sBD0P0C;ECzP1C,qCDyP8C;UCzP9C,6BDyP8C;ECxR9C,UDyRsB;ECxRtB,YDwR2B;EC9R3B,aD+R0B;EC9R1B,gBD8RkC;EAC1B,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;AJwNZ;AItNY;ECjSR,WDkS0B;ECjS1B,YDiSgC;EACpB,kBAAA;AJyNhB;AIrNQ;EC1QJ,+BD2Q2B;UC3Q3B,uBD2Q2B;EC1Q3B,8BD0QyC;UC1QzC,sBD0QyC;ECzQzC,qCDyQ6C;UCzQ7C,6BDyQ6C;ECxS7C,WDySsB;ECxStB,WDwS4B;EC9S5B,aD+S0B;EC9S1B,iBD8SkC;EAC1B,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;AJ2NZ;AIzNY;ECjTR,WDkT0B;ECjT1B,YDiTgC;EACpB,kBAAA;AJ4NhB;AIvNI;EC3RA,+BD4RuB;UC5RvB,uBD4RuB;EC3RvB,iCD2RqC;UC3RrC,yBD2RqC;EC1RrC,qCD0R4C;UC1R5C,6BD0R4C;ECzT5C,WD0TkB;ECzTlB,YDyTwB;EC7UxB,aAAA;EACA,mBD6UkB;EC5UlB,uBD4UuB;EC3UvB,mBD2U+B;EC1U/B,MALkE;EDgV9D,8BD/UE;ECgVF,kBAAA;EACA,UAAA;AJgOR;AI9NQ;ECnSJ,+BDoS2B;UCpS3B,uBDoS2B;ECnS3B,gCDmSyC;UCnSzC,wBDmSyC;EClSzC,qCDkS+C;UClS/C,6BDkS+C;EC3S/C,kBD4SwB;EC3SxB,mBD2S8B;EC1S9B,mBAHwD;EAIxD,oBAJyC;EArBzC,YDmUsB;EClUtB,aDkU6B;ECtV7B,aAAA;EACA,sBDsVsB;ECrVtB,uBDqV8B;ECpV9B,mBDoVsC;ECnVtC,QDmV8C;EACtC,iBAAA;EACA,gCAAA;AJ0OZ;AIxOY;EC3VR,aAAA;EACA,sBD2V0B;EC1V1B,6BD0VkC;ECzVlC,mBDyVgD;ECxVhD,SDwVwD;AJ8O5D;AI5OgB;EC9VZ,aAAA;EACA,mBD8V8B;EC7V9B,6BD6VmC;EC5VnC,mBD4ViD;EC3VjD,MALkE;ALklBtE,CAAA,mCAAA","sourceRoot":""}]);
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

/***/ "./src/account.js":
/*!************************!*\
  !*** ./src/account.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Account)
/* harmony export */ });
function Account() {
    document.getElementById("login-header").innerText = "Create an Account";
}

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
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");


function Calendar(projectData) {
    let currentMonth = new Date().getMonth() + 1;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    function newDay(dayNum) {
        const day = document.createElement("button");
        day.setAttribute("class", "calendar-day");

            const dayText = document.createElement("h4");
            dayText.textContent = dayNum;
        
        day.appendChild(dayText);
        return day;
    }

    function setMonth(month) {
        calMonth.textContent = months[month];
        setDays(month);
    }

    function setDays(month) {
        let numDays = (() => {
            // All months that consist of 30 days
            const february = 1;
            const months = [3, 5, 8, 10];

            // February
            if (month === 1) {
                return 28;
            }
            // April, June, September, November
            else if (months.includes(month)) {
                return 30;
            }
            // January, March, May, July, August, October, December
            else {
                return 31;
            }
        })();
    
        for (let i = 1; i <= numDays; i++) {
            calDays.appendChild(newDay(i));
            // Highlight all days within the month (not previous/subsequent months)
            calDays.lastChild.classList.add("active-day");
        }

        // Add previous month's days to fill the calendar
        let newDate = new Date();
        newDate.setMonth(month);

        const dayOffsetBefore = (newDate.getDay() + 1) - (newDate.getDate() % 7);
        newDate.setDate(0);
        let prevOffset = newDate.getDate();

        for (let i = 0; i < dayOffsetBefore; i++) {
            calDays.prepend(newDay(prevOffset));
            calDays.firstChild.style.backgroundColor = "darkgrey";
            prevOffset--;
        }

        // Add next month's days to fill the calendar
        const dayOffsetAfter = 42 - calDays.childElementCount;
        
        for (let i = 0; i < dayOffsetAfter; i++) {
            calDays.append(newDay(i + 1));
            calDays.lastChild.style.backgroundColor = "darkgrey";
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

        const addTask = document.createElement("button");
        addTask.setAttribute("id", "add-task");
        const addTaskPic = document.createElement("img");
        addTaskPic.setAttribute("src", "../src/images/add_task.png");
        addTask.appendChild(addTaskPic);
        const addTaskText = document.createElement("p");
        addTaskText.textContent = "Add New Task";
        addTask.appendChild(addTaskText);
        daySelected.appendChild(addTask);

        addTask.addEventListener("click", function() {
            (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectData);
        });

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
                    const task = document.createElement("div");
                    task.setAttribute("class", "calendar-task");

                    const taskInfo = document.createElement("div");
                    taskInfo.setAttribute("class", "task-info");

                    const taskText = document.createElement("h5");
                    taskText.setAttribute("class", "task-text");
                    taskText.textContent = projTask.task;
                    taskInfo.appendChild(taskText);

                    const projInput = document.createElement("select");
                    projInput.setAttribute("class", "proj-input");

                    for (const project of projectData) {
                        const option = document.createElement("option");
                        option.value = project.title;
                        option.textContent = project.title;
                
                        projInput.appendChild(option);
                    }

                    projInput.addEventListener("change", function() {
                        for (const project of projectData) {
                            for (const task of project.tasks) {
                                console.log(task);
                                console.log(taskText.textContent);

                                if (task.task === taskText.textContent) {
                                    console.log("Match!");
                                }
                            }
                        }
                    });

                    projInput.value = projTask.project;
                    taskInfo.appendChild(projInput);
                    task.appendChild(taskInfo);

                    const taskButtons = document.createElement("div");
                    taskButtons.setAttribute("class", "task-buttons");

                    const taskEdit = document.createElement("button");
                    taskEdit.setAttribute("class", "task-edit");
                    taskEdit.setAttribute("title", "Edit task");
                    const taskEditPic = document.createElement("img");
                    taskEditPic.setAttribute("src", "../src/images/edit.png");
                    taskEdit.appendChild(taskEditPic);
                    taskButtons.appendChild(taskEdit);

                    const taskTime = document.createElement("button");
                    taskTime.setAttribute("class", "task-time");
                    taskTime.setAttribute("title", "Change due date");
                    const taskTimePic = document.createElement("img");
                    taskTimePic.setAttribute("src", "../src/images/edit_calendar.png");
                    taskTime.appendChild(taskTimePic);
                    taskButtons.appendChild(taskTime);
                    const taskDel = document.createElement("button");
                    taskDel.setAttribute("class", "task-delete");
                    taskDel.setAttribute("title", "Delete task");
                    const taskDelPic = document.createElement("img");
                    taskDelPic.setAttribute("src", "../src/images/delete.png");
                    taskDel.appendChild(taskDelPic);
                    taskButtons.appendChild(taskDel);
                    task.appendChild(taskButtons);
                    daySelected.appendChild(task);

                    taskEdit.addEventListener("click", function() {
                        const prevTask = document.querySelector(".task-text").textContent;
                        document.querySelector(".task-text").remove();

                        const taskInput = document.createElement("input");
                        taskInput.setAttribute("class", "task-input");
                        taskInput.setAttribute("placeholder", prevTask);
                        taskInput.setAttribute("value", prevTask);
                        document.querySelector(".task-info").prepend(taskInput);
                        document.querySelector(".task-input").focus();

                        document.querySelector(".task-input").addEventListener("blur", function() {
                            const newTask = document.querySelector(".task-input").value;
                            const projVal = document.querySelector(".proj-input").value;

                            document.querySelector(".task-input").remove();
                            
                            const task = document.createElement("h5");
                            task.setAttribute("class", "task-text");
                            task.textContent = newTask;
                            document.querySelector(".task-info").prepend(task);

                            for (const project of projectData) {
                                for (const task of project.tasks) {
                                    if (task.task === prevTask) {
                                        if (project.title = projVal) {
                                            task.task = newTask;
                                        }
                                    }
                                }
                            }
                        });
                    });

                    taskTime.addEventListener("click", function() {
                        const prevDate = `2022-${taskMonth}-${taskDay}`;

                        const dateInput = document.createElement("input");
                        dateInput.setAttribute("type", "date");
                        dateInput.setAttribute("value", prevDate);
                        dateInput.setAttribute("class", "task-date");
                        taskInfo.appendChild(dateInput);
                        document.querySelector(".task-date").focus();

                        dateInput.addEventListener("blur", function() {
                            const newDate = dateInput.value;
                            dateInput.remove();
                            projTask.date = newDate;

                            if (newDate !== prevDate) {
                                task.remove();
                            }
                        });
                    });

                    taskDel.addEventListener("click", function() {
                        const indexOfTask = project["tasks"].indexOf(projTask);
                        project["tasks"].splice(indexOfTask, 1);
                        task.remove();
                    });
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

                // Allow arrow buttons to control the visible calendar month
                for (const button of [monthArrowLeft, monthArrowRight]) {
                    button.addEventListener("click", function(e) {
                        while (calDays.firstChild) {
                            calDays.firstChild.remove();
                        }

                        if (e.currentTarget === monthArrowRight) {
                            currentMonth = ((currentMonth + 1) + 12) % 12;
                            setMonth(currentMonth - 1);
                        } else {
                            currentMonth = ((currentMonth - 1) + 12) % 12;
                            setMonth(currentMonth - 1);
                        }
                    });
                }

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
        resetLayout.addEventListener("click", function() {
            document.getElementById("content").style.gridTemplateColumns = "";
            document.getElementById("content").style.gridTemplateRows = "";
        });

            const resetPic = document.createElement("img");
            resetPic.setAttribute("src", "../src/images/team_dashboard.png");

        resetLayout.appendChild(resetPic);

    contentWrap.appendChild(resetLayout);
    document.getElementById("content").appendChild(contentWrap);

    (0,_inbox_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectData);

    for (const link of document.querySelectorAll(".sidebar-link")) {
        link.addEventListener("click", function(e) {
            const eventTarget = e.currentTarget;
            let currentContent = contentWrap.firstChild;

            if (eventTarget !== currentContent) {
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
                        default: // Do nothing
                    }

                    currentContent = contentWrap.firstChild;
                    currentContent.style.animation = "content-respawn";
                    currentContent.style.animationDuration = "0.25s";
                    currentContent.style.animationFillMode = "forwards";
                }, 250);
            }
        });
    }
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
    gutterCol.setAttribute("id", "gutter-col");
    document.getElementById("content").appendChild(gutterCol);

    const gutterRow = document.createElement("div");
    gutterRow.setAttribute("id", "gutter-row");
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
/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.js */ "./src/login.js");


function Header(userData) {
    const header = document.createElement("div");
    header.setAttribute("id", "header");

        const headerTitles = document.createElement("div");
        headerTitles.setAttribute("id", "header-titles");

            const headerTitle = document.createElement("h1");
            headerTitle.setAttribute("id", "header-title");
            headerTitle.textContent = "DO_IT";

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
            loginButton.addEventListener("click", () => (0,_login_js__WEBPACK_IMPORTED_MODULE_0__["default"])(userData));

                const loginPic = document.createElement("img");
                loginPic.setAttribute("src", "../src/images/account_circle.png");
                
            loginButton.appendChild(loginPic);

                const loginText = document.createElement("p");
                loginText.textContent = "Sign In";

            loginButton.appendChild(loginText);

        headerButtons.appendChild(loginButton);

            const menuButton = document.createElement("button");
            menuButton.setAttribute("id", "menu-button");
            menuButton.setAttribute("class", "header-button");

                const menuImg = document.createElement("img");
                menuImg.setAttribute("src", "../src/images/menu.png");

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
                            taskText.textContent = task.task;
                            taskDiv.appendChild(taskText);

                        taskContent.appendChild(taskDiv);
                    }
                }
            }

    inbox.appendChild(taskContent);

        const addTask = document.createElement("button");
        addTask.setAttribute("id", "add-task");
        addTask.addEventListener("click", () => (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectData));

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
/* harmony import */ var _account_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.js */ "./src/account.js");


function Login(userData) {
    // Shorthand function for document.getElementById()
    const $ = function(id) {
        return document.getElementById(id);
    };

    function loginDOM() {
        const loginScreen = document.createElement("div");
        loginScreen.setAttribute("id", "login-screen");
        loginScreen.setAttribute("class", "popup-screen");
    
            const loginPrompt = document.createElement("div");
            loginPrompt.setAttribute("id", "login-prompt");
            loginPrompt.setAttribute("class", "popup-prompt");
    
                const loginHeader = document.createElement("h1");
                loginHeader.setAttribute("id", "login-header");

                const form = document.createElement("form");

                    const logName = document.createElement("div");
                    logName.className = "input-field";

                        const nameLabel = document.createElement("label");
                        nameLabel.setAttribute("id", "name-label");
                        nameLabel.setAttribute("for", "login-name");

                        const nameField = document.createElement("input");
                        nameField.setAttribute("id", "login-name");
                        nameField.setAttribute("name", "login-name");

                    logName.appendChild(nameLabel);
                    logName.appendChild(nameField);

                    const logPass = document.createElement("div");
                    logPass.className = "login-field";

                        const passLabel = document.createElement("label");
                        passLabel.setAttribute("id", "pass-label");
                        passLabel.setAttribute("for", "login-pass");

                        const passField = document.createElement("input");
                        passField.setAttribute("id", "login-pass");
                        passField.setAttribute("name", "login-pass");

                    logPass.appendChild(passLabel);
                    logPass.appendChild(passField);

                    const loginSubmit = document.createElement("input");
                    loginSubmit.setAttribute("id", "login-submit");
                    loginSubmit.setAttribute("type", "submit");
                    loginSubmit.setAttribute("value", "LOG IN");

                form.appendChild(logName);
                form.appendChild(logPass);
                form.appendChild(loginSubmit);

                const accountLink = document.createElement("a");
                accountLink.setAttribute("id", "account-link");
                accountLink.setAttribute("href", "");
                accountLink.setAttribute("target", "_blank");

                const createAccount = document.createElement("p");
                createAccount.innerHTML = "New user? Create an account ";
                createAccount.appendChild(accountLink);
                accountLink.addEventListener("click", function(e) {
                    e.preventDefault();
                    (0,_account_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
                });

                const close = document.createElement("button");
                close.setAttribute("id", "close-login");
                close.setAttribute("class", "button-close");

            loginPrompt.appendChild(loginHeader);
            loginPrompt.appendChild(form);
            loginPrompt.appendChild(createAccount);
            loginPrompt.appendChild(close);

        loginScreen.appendChild(loginPrompt);
        document.body.appendChild(loginScreen);
    }

    function loginText() {
        $("login-header").innerText = "Sign in to Do_It";
        $("name-label").innerText = "Name:";
        $("pass-label").innerText = "Password:";
        $("account-link").innerText = "here";
        $("close-login").innerText = "X";
    }

    function loginEvents() {
        $("login-button").addEventListener("click", function() {
            $("login-submit").addEventListener("click", function(e) {
                e.preventDefault();
    
                let userCheck = false;
    
                for (const user of userData) {
                    if (user.name === $("login-name").value) {
                        $("login-button").children[1].textContent = `Hello, ${userEntered}`;
                        $("login-screen").remove();
                        userCheck = true;
                        break;
                    }
                }
    
                if (!userCheck) {
                    const error = document.createElement("p");
                    error.innerText = "This user does not exist";
                    loginPrompt.insertBefore(error, $("login-prompt").children[2]);
                }
    
                $("login-name").value = "";
                $("login-pass").value = "";
            });
    
            $("close-login").addEventListener("click", function() {
                $("login-name").value = "";
                $("login-pass").value = "";
                $("login-screen").remove();
            });
        });
    }

    (() => {
        loginDOM();
        loginText();
        loginEvents();
    })();
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

                    const projField = document.createElement("input");
                    projField.setAttribute("id", "proj-name");
                    projField.setAttribute("name", "proj-name");
                    projField.setAttribute("placeholder", "New Project");

                logProj.appendChild(projLabel);
                logProj.appendChild(projField);

                const projSubmit = document.createElement("input");
                projSubmit.setAttribute("id", "proj-submit");
                projSubmit.setAttribute("type", "submit");
                projSubmit.setAttribute("value", "ADD PROJECT");

            form.appendChild(logProj);
            form.appendChild(projSubmit);

            const close = document.createElement("button");
            close.innerHTML = "X";
            close.id = "close-proj";
            close.className = "button-close";
            close.addEventListener("click", function() {
                projScreen.remove();
            });

        projPrompt.appendChild(form);
        projPrompt.appendChild(close);

    projScreen.appendChild(projPrompt);

    document.getElementById("sidebar-add").addEventListener("click", function() {
        document.body.appendChild(projScreen);

        projSubmit.addEventListener("click", function(e) {
            e.preventDefault();

            let projName = projField.value;

            if (!projName) {
                const projNum = document.getElementById("sidebar-list").childElementCount;
                projName = `Project ${projNum + 1}`;
            }

            projectData.push(new Project(projName));

            const newProj = document.createElement("button");
            newProj.setAttribute("id", projName);
            newProj.setAttribute("class", "proj-item");
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

                const newProjPic = document.createElement("img");
                newProjPic.setAttribute("src", "../src/images/folder.png")
                newProjPic.setAttribute("class", "proj-pic");

                const newProjName = document.createElement("h4");
                newProjName.innerHTML = projName;

            newProj.appendChild(newProjPic);
            newProj.appendChild(newProjName);

            const projectsList = document.getElementById("sidebar-list");
            projectsList.appendChild(newProj);
            projScreen.remove();
        });
    });

    class Project {
        constructor(title) {
            this.title = title;
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

            const inboxText = document.createElement("h3");
            inboxText.textContent = "Inbox";

        inbox.appendChild(inboxPic);
        inbox.appendChild(inboxText);

        const today = document.createElement("button");
        today.setAttribute("id", "sidebar-today");
        today.setAttribute("class", "sidebar-line");
        today.setAttribute("class", "sidebar-link");

            const todayPic = document.createElement("img");
            todayPic.setAttribute("src", "../src/images/today.png");

            const todayText = document.createElement("h3");
            todayText.textContent = "Today";

        today.appendChild(todayPic);
        today.appendChild(todayText);

        const calendar = document.createElement("button");
        calendar.setAttribute("id", "sidebar-calendar");
        calendar.setAttribute("class", "sidebar-line");
        calendar.setAttribute("class", "sidebar-link");

            const calendarPic = document.createElement("img");
            calendarPic.setAttribute("src", "../src/images/calendar.png");

            const calendarText = document.createElement("h3");
            calendarText.textContent = "Calendar";

        calendar.appendChild(calendarPic);
        calendar.appendChild(calendarText);

        const projects = document.createElement("button");
        projects.setAttribute("id", "sidebar-projects");
        projects.setAttribute("class", "sidebar-line");

            const projectsPic = document.createElement("img");
            projectsPic.setAttribute("src", "../src/images/expand_circle_down.png");
            projectsPic.setAttribute("id", "projects-pic");

            const projectsText = document.createElement("h3");
            projectsText.textContent = "Projects";

        projects.appendChild(projectsPic);
        projects.appendChild(projectsText);

        const projectsList = document.createElement("div");
        projectsList.setAttribute("id", "sidebar-list");

        const addProj = document.createElement("button");
        addProj.setAttribute("id", "sidebar-add");
        addProj.setAttribute("class", "sidebar-line");

            const addProjPic = document.createElement("img");
            addProjPic.setAttribute("src", "../src/images/folder_new.png");

            const addProjText = document.createElement("h3");
            addProjText.textContent = "Add Project";

        addProj.appendChild(addProjPic);
        addProj.appendChild(addProjText);

    sidebar.appendChild(inbox);
    sidebar.appendChild(today);
    sidebar.appendChild(calendar);
    sidebar.appendChild(projects);
    sidebar.appendChild(projectsList);
    sidebar.appendChild(addProj);
    document.getElementById("content").appendChild(sidebar);

    document.getElementById("sidebar-projects").addEventListener("click", function() {
        const state = projectsPic.src;
        const regEx = /arrow_circle_right.png$/;

        if (regEx.test(state)) {
            document.getElementById("sidebar-list").classList.remove("projects-closed");
            projectsPic.setAttribute("src", "../src/images/expand_circle_down.png");
        } else {
            document.getElementById("sidebar-list").classList.add("projects-closed");
            projectsPic.setAttribute("src", "../src/images/arrow_circle_right.png");
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

                    const taskField = document.createElement("input");
                    taskField.setAttribute("id", "task-name");
                    taskField.setAttribute("name", "task-name");
                    taskField.setAttribute("placeholder", "New Task");

                logTask.appendChild(taskLabel);
                logTask.appendChild(taskField);

                const logDate = document.createElement("div");
                logDate.setAttribute("class", "input-field");

                    const dateLabel = document.createElement("label");
                    dateLabel.setAttribute("for", "date-name");
                    dateLabel.textContent = "Due Date:";

                    const dateField = document.createElement("input");
                    dateField.setAttribute("id", "date-name");
                    dateField.setAttribute("name", "date-name");
                    dateField.setAttribute("type", "date");
                    dateField.setAttribute("value", "2022-10-03");

                logDate.appendChild(dateLabel);
                logDate.appendChild(dateField);

                const logProj = document.createElement("div");
                logProj.setAttribute("class", "input-field");

                    const projLabel = document.createElement("label");
                    projLabel.setAttribute("for", "proj-name");
                    projLabel.textContent = "Project:";

                    const projField = document.createElement("select");
                    projField.setAttribute("id", "proj-name");
                    projField.setAttribute("name", "proj-name");

                        for (const project of projectData) {
                            const option = document.createElement("option");
                            option.value = project.title;
                            option.textContent = project.title;

                            projField.appendChild(option);
                        }

                logProj.appendChild(projLabel);
                logProj.appendChild(projField);

                const taskSubmit = document.createElement("input");
                taskSubmit.setAttribute("id", "task-submit");
                taskSubmit.setAttribute("type", "submit");
                taskSubmit.setAttribute("value", "ADD TASK");

            form.appendChild(logTask);
            form.appendChild(logDate);
            form.appendChild(logProj);
            form.appendChild(taskSubmit);

            const close = document.createElement("button");
            close.setAttribute("id", "close-task");
            close.setAttribute("class", "button-close");
            close.innerHTML = "X";
            close.addEventListener("click", function() {
                taskScreen.remove();
            });

        taskPrompt.appendChild(form);
        taskPrompt.appendChild(close);

    taskScreen.appendChild(taskPrompt);
    document.body.appendChild(taskScreen);

    document.getElementById("task-submit").addEventListener("click", function(e) {
        e.preventDefault();

        let task = taskField.value;
        let date = dateField.value;
        let taskProj = projField.value;

        if (!task) {
            task = "New Task";
        }

        const newTask = new Task(task, date, taskProj);

        for (const project of projectData) {
            if (project.title === taskProj) {
                project["tasks"].push(newTask);
                break;
            }
        }

        taskScreen.remove();
    });

    class Task {
        constructor(task, date, project) {
            this.task = task;
            this.date = date;
            this.project = project;
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
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.js */ "./src/content.js");
/* harmony import */ var _gutters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gutters.js */ "./src/gutters.js");
/* harmony import */ var split_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! split-grid */ "./node_modules/split-grid/dist/split-grid.mjs");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _dist_css_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dist/css/main.css */ "./dist/css/main.css");








const userData = [];
const projectData = [];

(0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])(userData);
(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_content_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projectData);
(0,_gutters_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,split_grid__WEBPACK_IMPORTED_MODULE_4__["default"])({
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
(0,_project_js__WEBPACK_IMPORTED_MODULE_5__["default"])(projectData);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDJHQUEyRztBQUMzRyxxR0FBcUc7QUFDckc7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLDJCQUEyQixHQUFHLHFDQUFxQyxRQUFRLG9DQUFvQyxLQUFLLFNBQVMsa0NBQWtDLEtBQUssVUFBVSxpQ0FBaUMsS0FBSyxHQUFHLDZCQUE2QixRQUFRLG9DQUFvQyxLQUFLLFNBQVMsa0NBQWtDLEtBQUssVUFBVSxpQ0FBaUMsS0FBSyxHQUFHLG9DQUFvQyxRQUFRLG9DQUFvQyxLQUFLLFNBQVMsa0NBQWtDLEtBQUssVUFBVSxpQ0FBaUMsS0FBSyxHQUFHLDRCQUE0QixRQUFRLG9DQUFvQyxLQUFLLFNBQVMsa0NBQWtDLEtBQUssVUFBVSxpQ0FBaUMsS0FBSyxHQUFHLGlDQUFpQyxVQUFVLG9DQUFvQyxLQUFLLFFBQVEsaUNBQWlDLEtBQUssR0FBRyx5QkFBeUIsVUFBVSxvQ0FBb0MsS0FBSyxRQUFRLGlDQUFpQyxLQUFLLEdBQUcsbUNBQW1DLFFBQVEsa0JBQWtCLEtBQUssVUFBVSxvQkFBb0IsS0FBSyxHQUFHLDJCQUEyQixRQUFRLGtCQUFrQixLQUFLLFVBQVUsb0JBQW9CLEtBQUssR0FBRyxnQ0FBZ0MsUUFBUSxnQkFBZ0IsaUJBQWlCLEtBQUssVUFBVSxjQUFjLGVBQWUsS0FBSyxHQUFHLHdCQUF3QixRQUFRLGdCQUFnQixpQkFBaUIsS0FBSyxVQUFVLGNBQWMsZUFBZSxLQUFLLEdBQUcsc0NBQXNDLFFBQVEsb0JBQW9CLEtBQUssVUFBVSxrQkFBa0IsS0FBSyxHQUFHLDhCQUE4QixRQUFRLG9CQUFvQixLQUFLLFVBQVUsa0JBQWtCLEtBQUssR0FBRyxzQ0FBc0MsUUFBUSxnQkFBZ0IsS0FBSyxVQUFVLGNBQWMsS0FBSyxHQUFHLDhCQUE4QixRQUFRLGdCQUFnQixLQUFLLFVBQVUsY0FBYyxLQUFLLEdBQUcsaUJBQWlCLHVCQUF1QixXQUFXLFlBQVksdUNBQXVDLGlCQUFpQixvQkFBb0IscUJBQXFCLGlCQUFpQixnQkFBZ0IsaUNBQWlDLHFDQUFxQyxHQUFHLG9CQUFvQixlQUFlLEdBQUcsa0NBQWtDLGdDQUFnQyxtQ0FBbUMsR0FBRyxrQ0FBa0MsaUNBQWlDLG9DQUFvQyxHQUFHLE9BQU8sMkJBQTJCLEdBQUcsVUFBVSxrQkFBa0IsNEJBQTRCLCtCQUErQixnQ0FBZ0MsdUJBQXVCLEdBQUcsaUJBQWlCLGdCQUFnQixrQkFBa0Isa0JBQWtCLG9DQUFvQyx1Q0FBdUMsZUFBZSxHQUFHLHlCQUF5QixvQ0FBb0Msb0NBQW9DLG1DQUFtQyxtQ0FBbUMsMENBQTBDLDBDQUEwQyxrQkFBa0Isd0JBQXdCLGtDQUFrQyx3QkFBd0IsV0FBVyxrQkFBa0Isc0JBQXNCLDBCQUEwQixtQkFBbUIsa0NBQWtDLGVBQWUsR0FBRyw0QkFBNEIsb0JBQW9CLEdBQUcseUNBQXlDLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixjQUFjLEdBQUcsZ0RBQWdELHVCQUF1Qix1QkFBdUIsd0JBQXdCLHlCQUF5QixpQ0FBaUMsb0JBQW9CLHVCQUF1QixHQUFHLHNEQUFzRCxlQUFlLEdBQUcsdURBQXVELGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixjQUFjLEdBQUcsc0RBQXNELGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixXQUFXLHVCQUF1QixzQkFBc0IsR0FBRyw0REFBNEQsd0JBQXdCLHNCQUFzQixHQUFHLDBCQUEwQixxQ0FBcUMscUNBQXFDLG1DQUFtQyxtQ0FBbUMsMENBQTBDLDBDQUEwQyxrQkFBa0IsOEVBQThFLCtCQUErQixrQkFBa0IscUJBQXFCLDBCQUEwQiw0QkFBNEIsc0JBQXNCLGtCQUFrQix1QkFBdUIsZUFBZSxHQUFHLGlDQUFpQyx1QkFBdUIsd0JBQXdCLHdCQUF3Qix5QkFBeUIsa0JBQWtCLHdCQUF3QixnQ0FBZ0Msd0JBQXdCLGNBQWMseUJBQXlCLHVCQUF1QixpQ0FBaUMsR0FBRyx1Q0FBdUMsb0JBQW9CLGVBQWUsR0FBRyx1REFBdUQsa0JBQWtCLHNCQUFzQixHQUFHLHVEQUF1RCxrQkFBa0Isc0JBQXNCLEdBQUcsMERBQTBELGtCQUFrQixzQkFBc0IsR0FBRywwREFBMEQsa0JBQWtCLHNCQUFzQixHQUFHLHdDQUF3QyxrQkFBa0Isc0JBQXNCLGlCQUFpQixHQUFHLCtDQUErQyx1QkFBdUIsd0JBQXdCLHdCQUF3Qix5QkFBeUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLGFBQWEsaUNBQWlDLHVCQUF1Qix1Q0FBdUMsc0JBQXNCLEdBQUcsbURBQW1ELGlCQUFpQixHQUFHLHFEQUFxRCxrQkFBa0Isc0JBQXNCLEdBQUcsMkNBQTJDLGtCQUFrQixHQUFHLG9DQUFvQyxrQkFBa0IsR0FBRyxrQ0FBa0Msa0NBQWtDLGtDQUFrQyxxQ0FBcUMscUNBQXFDLDBDQUEwQywwQ0FBMEMsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLFdBQVcsa0JBQWtCLHFCQUFxQixvQkFBb0Isb0JBQW9CLHNCQUFzQix1QkFBdUIsZUFBZSxHQUFHLGdEQUFnRCx1QkFBdUIscUJBQXFCLHdCQUF3Qix5QkFBeUIsY0FBYyxjQUFjLGVBQWUsZUFBZSxpQ0FBaUMsdUJBQXVCLHNCQUFzQixHQUFHLHNEQUFzRCxjQUFjLGNBQWMsZUFBZSxlQUFlLG9CQUFvQixnQkFBZ0IsR0FBRyx5Q0FBeUMsZ0JBQWdCLGlCQUFpQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsV0FBVyx1QkFBdUIsR0FBRyx5Q0FBeUMsZ0JBQWdCLGlCQUFpQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsV0FBVyx1QkFBdUIsR0FBRyw0Q0FBNEMsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLFdBQVcsdUJBQXVCLEdBQUcsMkRBQTJELGdCQUFnQixpQkFBaUIsa0JBQWtCLHNDQUFzQywrQkFBK0IsdUJBQXVCLEdBQUcsdUxBQXVMLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixXQUFXLEdBQUcsMkVBQTJFLGtCQUFrQix3QkFBd0IsbUNBQW1DLHdCQUF3QixXQUFXLGtCQUFrQixzQkFBc0IsR0FBRyxrRkFBa0YsdUJBQXVCLHFCQUFxQix3QkFBd0IseUJBQXlCLGtCQUFrQixHQUFHLDZFQUE2RSxrQkFBa0IsNEJBQTRCLDBDQUEwQyxrQkFBa0Isc0JBQXNCLEdBQUcseUVBQXlFLHVCQUF1Qix3QkFBd0Isd0JBQXdCLHlCQUF5QixrQkFBa0Isd0JBQXdCLDRCQUE0Qix5QkFBeUIsV0FBVyxrQkFBa0Isc0JBQXNCLHVCQUF1QixxQkFBcUIsR0FBRyx3RkFBd0Ysa0JBQWtCLHdDQUF3QywyQ0FBMkMsdUJBQXVCLEdBQUcsK0ZBQStGLGdCQUFnQixpQkFBaUIseUJBQXlCLHNCQUFzQix5Q0FBeUMsc0JBQXNCLEdBQUcscUdBQXFHLHVCQUF1Qix1QkFBdUIsd0JBQXdCLHlCQUF5Qix5QkFBeUIsc0JBQXNCLGdCQUFnQixHQUFHLHVGQUF1RixpQ0FBaUMsaUNBQWlDLHFDQUFxQyxxQ0FBcUMsMENBQTBDLDBDQUEwQyx1QkFBdUIsd0JBQXdCLHdCQUF3Qix5QkFBeUIsa0JBQWtCLDBDQUEwQyxpQ0FBaUMsV0FBVyxhQUFhLGNBQWMsWUFBWSxnQ0FBZ0MsdUJBQXVCLGVBQWUscUJBQXFCLDBCQUEwQixjQUFjLEdBQUcsc0dBQXNHLHdCQUF3QixxQkFBcUIscUNBQXFDLHNCQUFzQixrQkFBa0Isd0JBQXdCLG1DQUFtQyx3QkFBd0IsY0FBYyx5QkFBeUIsc0JBQXNCLHNCQUFzQixpQkFBaUIsZ0RBQWdELEdBQUcsNkdBQTZHLHVCQUF1QixxQkFBcUIsd0JBQXdCLHlCQUF5QixpQ0FBaUMsR0FBRyxpSEFBaUgsaUJBQWlCLHFCQUFxQixHQUFHLHVIQUF1SCxvQkFBb0Isb0JBQW9CLEdBQUcsaUhBQWlILGtCQUFrQiwyQkFBMkIsZ0NBQWdDLDRCQUE0QixjQUFjLEdBQUcsaUdBQWlHLGtCQUFrQixzQkFBc0IsR0FBRyx5R0FBeUcsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLFdBQVcseUJBQXlCLG9CQUFvQixrQkFBa0Isc0JBQXNCLHVCQUF1QixXQUFXLEdBQUcsa0dBQWtHLFdBQVcsZ0JBQWdCLGlCQUFpQixZQUFZLHVCQUF1QixHQUFHLGdEQUFnRCxrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsV0FBVyxHQUFHLDBEQUEwRCx1QkFBdUIscUJBQXFCLHdCQUF3Qix5QkFBeUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLGNBQWMseUJBQXlCLHVCQUF1Qix1QkFBdUIsR0FBRyw4REFBOEQsaUJBQWlCLEdBQUcsNkJBQTZCLHFDQUFxQyxxQ0FBcUMsbUNBQW1DLG1DQUFtQywwQ0FBMEMsMENBQTBDLGVBQWUsaUJBQWlCLGtCQUFrQixxQkFBcUIsc0JBQXNCLHlCQUF5Qix1QkFBdUIscUJBQXFCLGVBQWUsR0FBRyxtQ0FBbUMsZ0JBQWdCLGlCQUFpQix1QkFBdUIsR0FBRyw2QkFBNkIsb0NBQW9DLG9DQUFvQyxtQ0FBbUMsbUNBQW1DLDBDQUEwQywwQ0FBMEMsZ0JBQWdCLGdCQUFnQixrQkFBa0Isc0JBQXNCLHVCQUF1QixzQkFBc0IsdUJBQXVCLHFCQUFxQixlQUFlLEdBQUcsbUNBQW1DLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcsc0JBQXNCLG9DQUFvQyxvQ0FBb0Msc0NBQXNDLHNDQUFzQywwQ0FBMEMsMENBQTBDLGdCQUFnQixpQkFBaUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLFdBQVcsbUNBQW1DLHVCQUF1QixlQUFlLEdBQUcsb0NBQW9DLG9DQUFvQyxvQ0FBb0MscUNBQXFDLHFDQUFxQywwQ0FBMEMsMENBQTBDLHVCQUF1Qix3QkFBd0Isd0JBQXdCLHlCQUF5QixpQkFBaUIsa0JBQWtCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixhQUFhLHNCQUFzQixxQ0FBcUMsR0FBRyx5Q0FBeUMsa0JBQWtCLDJCQUEyQixrQ0FBa0Msd0JBQXdCLGNBQWMsR0FBRyxzREFBc0Qsa0JBQWtCLHdCQUF3QixrQ0FBa0Msd0JBQXdCLFdBQVcsR0FBRywyQ0FBMkMseVRBQXlULFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sY0FBYyxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsWUFBWSxhQUFhLGVBQWUsZUFBZSxhQUFhLFlBQVksYUFBYSxhQUFhLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLGFBQWEsZUFBZSxlQUFlLGNBQWMsT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsYUFBYSxlQUFlLGVBQWUsY0FBYyxPQUFPLE9BQU8sV0FBVyxhQUFhLGVBQWUsZUFBZSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sTUFBTSxjQUFjLGVBQWUsZUFBZSxlQUFlLGFBQWEsYUFBYSxZQUFZLGFBQWEsZUFBZSxjQUFjLGVBQWUsYUFBYSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLGNBQWMsZUFBZSxjQUFjLGFBQWEsWUFBWSxhQUFhLGVBQWUsZUFBZSxjQUFjLGVBQWUsZUFBZSxhQUFhLE1BQU0sT0FBTyxVQUFVLFVBQVUsT0FBTyxNQUFNLGFBQWEsZUFBZSxPQUFPLE1BQU0sYUFBYSxlQUFlLE9BQU8sTUFBTSxhQUFhLGVBQWUsT0FBTyxNQUFNLGFBQWEsZUFBZSxPQUFPLE1BQU0sYUFBYSxlQUFlLFdBQVcsT0FBTyxPQUFPLGNBQWMsZUFBZSxjQUFjLGFBQWEsWUFBWSxhQUFhLGVBQWUsZUFBZSxjQUFjLGNBQWMsY0FBYyxhQUFhLFlBQVksT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLGFBQWEsZUFBZSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sY0FBYyxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsWUFBWSxhQUFhLGVBQWUsZUFBZSxhQUFhLGFBQWEsZUFBZSxjQUFjLGNBQWMsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLGNBQWMsY0FBYyxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsY0FBYyxhQUFhLFlBQVksV0FBVyxPQUFPLE9BQU8sYUFBYSxjQUFjLGNBQWMsY0FBYyxXQUFXLFVBQVUsT0FBTyxNQUFNLGFBQWEsY0FBYyxZQUFZLGFBQWEsZUFBZSxlQUFlLGFBQWEsYUFBYSxPQUFPLE1BQU0sYUFBYSxjQUFjLFlBQVksYUFBYSxlQUFlLGVBQWUsYUFBYSxhQUFhLE9BQU8sTUFBTSxXQUFXLGFBQWEsZUFBZSxlQUFlLGFBQWEsYUFBYSxPQUFPLE9BQU8sYUFBYSxjQUFjLFlBQVksYUFBYSxlQUFlLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxlQUFlLGVBQWUsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLGVBQWUsZUFBZSxhQUFhLGFBQWEsZUFBZSxPQUFPLE9BQU8sZUFBZSxjQUFjLGFBQWEsYUFBYSxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsZUFBZSxjQUFjLGVBQWUsT0FBTyxPQUFPLGVBQWUsZUFBZSxjQUFjLGFBQWEsWUFBWSxhQUFhLGVBQWUsZUFBZSxhQUFhLGFBQWEsZUFBZSxZQUFZLFdBQVcsT0FBTyxPQUFPLFlBQVksYUFBYSxlQUFlLFlBQVksT0FBTyxPQUFPLGNBQWMsY0FBYyxlQUFlLGVBQWUsWUFBWSxXQUFXLE9BQU8sT0FBTyxlQUFlLGVBQWUsY0FBYyxhQUFhLGNBQWMsZUFBZSxXQUFXLE9BQU8sT0FBTyxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsY0FBYyxhQUFhLFlBQVksYUFBYSxlQUFlLGNBQWMsY0FBYyxjQUFjLGNBQWMsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLGVBQWUsZUFBZSxlQUFlLGVBQWUsWUFBWSxhQUFhLGVBQWUsZUFBZSxjQUFjLGVBQWUsZUFBZSxZQUFZLFVBQVUsV0FBVyxPQUFPLE9BQU8sZUFBZSxjQUFjLGFBQWEsYUFBYSxjQUFjLE1BQU0sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sWUFBWSxhQUFhLGVBQWUsZUFBZSxjQUFjLE9BQU8sT0FBTyxjQUFjLGVBQWUsT0FBTyxPQUFPLFlBQVksYUFBYSxlQUFlLGVBQWUsYUFBYSxlQUFlLGNBQWMsY0FBYyxlQUFlLFlBQVksVUFB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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7O0FBRXJCO0FBQ0EsaURBQWlELFVBQVUsR0FBRyxRQUFROztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFD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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLFlBQVk7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakhlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNB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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsNkRBQTZELDZCQUE2Qjs7QUFFMUY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixHQUFHO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQ0FBbUMsR0FBRztBQUN0QztBQUNBLG9EQUFvRDtBQUNwRCwrQ0FBK0M7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQStEO0FBQy9EO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQixpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7VUNycUJyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWlDO0FBQ0U7QUFDQTtBQUNBO0FBQ0o7QUFDSTtBQUNMOztBQUU5QjtBQUNBOztBQUVBLHNEQUFNO0FBQ04sdURBQU87QUFDUCx1REFBTztBQUNQLHVEQUFPO0FBQ1Asc0RBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNELHVEQUFPLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9kaXN0L2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL2Rpc3QvY3NzL21haW4uY3NzP2E3YjUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2d1dHRlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2luLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3BsaXQtZ3JpZC9kaXN0L3NwbGl0LWdyaWQubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm8pO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthcmxhKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGhlYWRlci1zcGF3biB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhlYWRlci1zcGF3biB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2lkZWJhci1zcGF3biB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNpZGViYXItc3Bhd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwMHB4KTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGxpc3Qtc3Bhd24ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBsaXN0LXNwYXduIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBwcm9tcHQtc3Bhd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHByb21wdC1zcGF3biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBkYXktc3Bhd24ge1xcbiAgMCUge1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGxlZnQ6IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdG9wOiAwJTtcXG4gICAgbGVmdDogMCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZGF5LXNwYXduIHtcXG4gIDAlIHtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRvcDogMCU7XFxuICAgIGxlZnQ6IDAlO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgY29udGVudC1kZXNwYXduIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBjb250ZW50LWRlc3Bhd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgY29udGVudC1yZXNwYXduIHtcXG4gIDAlIHtcXG4gICAgdG9wOiAxMDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRvcDogMCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgY29udGVudC1yZXNwYXduIHtcXG4gIDAlIHtcXG4gICAgdG9wOiAxMDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRvcDogMCU7XFxuICB9XFxufVxcbi5idXR0b24tY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDI3LCAyNyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wcm9qLXNlbGVjdGVkIHtcXG4gIHNjYWxlOiA5MCU7XFxufVxcblxcbi5tb250aC10b2dnbGU6bnRoLW9mLXR5cGUoMSkge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubW9udGgtdG9nZ2xlOm50aC1vZi10eXBlKDIpIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5ib2R5ICNjb250ZW50IHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAycHggNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMnB4IDRmcjtcXG4gIHotaW5kZXg6IDA7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2hlYWRlciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaGVhZGVyLXNwYXduO1xcbiAgICAgICAgICBhbmltYXRpb246IGhlYWRlci1zcGF3bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDA7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xcbiAgei1pbmRleDogMjtcXG59XFxuYm9keSAjY29udGVudCAjaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuYm9keSAjY29udGVudCAjaGVhZGVyICNoZWFkZXItYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuYm9keSAjY29udGVudCAjaGVhZGVyICNoZWFkZXItYnV0dG9ucyBidXR0b24ge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2hlYWRlciAjaGVhZGVyLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gIHNjYWxlOiA5MCU7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2hlYWRlciAjaGVhZGVyLWJ1dHRvbnMgI2xvZ2luLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuYm9keSAjY29udGVudCAjaGVhZGVyICNoZWFkZXItYnV0dG9ucyAjbWVudS1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDA7XFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuYm9keSAjY29udGVudCAjaGVhZGVyICNoZWFkZXItYnV0dG9ucyAjbWVudS1idXR0b246aG92ZXIge1xcbiAgcGFkZGluZzogMjBweCAxMjBweDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzaWRlYmFyLXNwYXduO1xcbiAgICAgICAgICBhbmltYXRpb246IHNpZGViYXItc3Bhd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW5tYXgoNTBweCwgODBweCkpIGF1dG8gbWlubWF4KDUwcHgsIDgwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXJvdzogMy80O1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuYm9keSAjY29udGVudCAjc2lkZWJhciBidXR0b24ge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IG1lZGl1bTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuYm9keSAjY29udGVudCAjc2lkZWJhciBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgc2NhbGU6IDkwJTtcXG59XFxuYm9keSAjY29udGVudCAjc2lkZWJhciBib2R5ICNjb250ZW50ICNzaWRlYmFyLWluYm94IHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuYm9keSAjY29udGVudCAjc2lkZWJhciBib2R5ICNjb250ZW50ICNzaWRlYmFyLXRvZGF5IHtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuYm9keSAjY29udGVudCAjc2lkZWJhciBib2R5ICNjb250ZW50ICNzaWRlYmFyLWNhbGVuZGFyIHtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuYm9keSAjY29udGVudCAjc2lkZWJhciBib2R5ICNjb250ZW50ICNzaWRlYmFyLXByb2plY3RzIHtcXG4gIGdyaWQtcm93OiA0LzU7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuYm9keSAjY29udGVudCAjc2lkZWJhciAjc2lkZWJhci1saXN0IHtcXG4gIGdyaWQtcm93OiA1LzY7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuYm9keSAjY29udGVudCAjc2lkZWJhciAjc2lkZWJhci1saXN0IGJ1dHRvbiB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIHBhZGRpbmctbGVmdDogMjAlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyICNzaWRlYmFyLWxpc3QgYnV0dG9uIGltZyB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcbmJvZHkgI2NvbnRlbnQgI3NpZGViYXIgYm9keSAjY29udGVudCAjc2lkZWJhci1hZGQge1xcbiAgZ3JpZC1yb3c6IDYvNztcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyIC5wcm9qZWN0cy1jbG9zZWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuYm9keSAjY29udGVudCAjc2lkZWJhciBkaXY6ZW1wdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsaXN0LXNwYXduO1xcbiAgICAgICAgICBhbmltYXRpb246IGxpc3Qtc3Bhd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMDtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgbWluLXdpZHRoOiA2NXZ3O1xcbiAgbWluLWhlaWdodDogNXZoO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAwO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI3Jlc2V0LWxheW91dCB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xcbiAgdG9wOiBhdXRvO1xcbiAgcmlnaHQ6IDAlO1xcbiAgYm90dG9tOiAwJTtcXG4gIGxlZnQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjcmVzZXQtbGF5b3V0OmhvdmVyIHtcXG4gIHRvcDogYXV0bztcXG4gIHJpZ2h0OiAyJTtcXG4gIGJvdHRvbTogMiU7XFxuICBsZWZ0OiBhdXRvO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgc2NhbGU6IDEyMCU7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjaW5ib3gge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICN0b2RheSB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCA1MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkIGgyLCBib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkIGgzLCBib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMDtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjY2FsZW5kYXItbW9udGgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNjYWxlbmRhci1tb250aCBidXR0b24ge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IG1lZGl1bTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgI2NhbGVuZGFyLWhlYWRlcnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjZGF5cy13cmFwcGVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBnYXA6IDA7XFxuICBncmlkLXJvdzogMy80O1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNkYXlzLXdyYXBwZXIgI2NhbGVuZGFyLWRheXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDY1cHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgNjVweCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgI2RheXMtd3JhcHBlciAjY2FsZW5kYXItZGF5cyBidXR0b24ge1xcbiAgd2lkdGg6IDY1cHg7XFxuICBoZWlnaHQ6IDY1cHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgI2RheXMtd3JhcHBlciAjY2FsZW5kYXItZGF5cyBidXR0b246aG92ZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHNjYWxlOiAxMjAlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNkYXlzLXdyYXBwZXIgI2RheS1zZWxlY3RlZCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZGF5LXNwYXduO1xcbiAgICAgICAgICBhbmltYXRpb246IGRheS1zcGF3bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjFmciAwLjFmciAwLjFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC45ZnI7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIGdyaWQtYXV0by1yb3dzOiAwLjFmcjtcXG4gIGdhcDogMTBweDtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjZGF5cy13cmFwcGVyICNkYXktc2VsZWN0ZWQgLmNhbGVuZGFyLXRhc2sge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjZGF5cy13cmFwcGVyICNkYXktc2VsZWN0ZWQgLmNhbGVuZGFyLXRhc2sgYnV0dG9uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNkYXlzLXdyYXBwZXIgI2RheS1zZWxlY3RlZCAuY2FsZW5kYXItdGFzayBidXR0b24gaW1nIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgI2RheXMtd3JhcHBlciAjZGF5LXNlbGVjdGVkIC5jYWxlbmRhci10YXNrIGJ1dHRvbiBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNkYXlzLXdyYXBwZXIgI2RheS1zZWxlY3RlZCAuY2FsZW5kYXItdGFzayAudGFzay1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDEwcHg7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgI2RheXMtd3JhcHBlciAjZGF5LXNlbGVjdGVkICNhZGQtdGFzayB7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgI2RheXMtd3JhcHBlciAjZGF5LXNlbGVjdGVkICNkYXktbnVtLXNlbGVjdGVkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDA7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgI2RheXMtd3JhcHBlciAjZGF5LXNlbGVjdGVkICNjbG9zZS1kYXkge1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxuICBib3R0b206IGF1dG87XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgLmxpc3QtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMDtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyIC5saXN0LWNvbnRlbnQgI2FkZC10YXNrIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgLmxpc3QtY29udGVudCAjYWRkLXRhc2sgaW1nIHtcXG4gIGhlaWdodDogMzZweDtcXG59XFxuYm9keSAjY29udGVudCAjZ3V0dGVyLWNvbCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc2lkZWJhci1zcGF3bjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBzaWRlYmFyLXNwYXduO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIHotaW5kZXg6IDE7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2d1dHRlci1jb2w6aG92ZXIge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBjdXJzb3I6IGNvbC1yZXNpemU7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2d1dHRlci1yb3cge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGhlYWRlci1zcGF3bjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBoZWFkZXItc3Bhd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5ib2R5ICNjb250ZW50ICNndXR0ZXItcm93OmhvdmVyIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgY3Vyc29yOiByb3ctcmVzaXplO1xcbn1cXG5ib2R5IC5wb3B1cC1zY3JlZW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHByb21wdC1zcGF3bjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBwcm9tcHQtc3Bhd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4yNXM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4yNXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5ib2R5IC5wb3B1cC1zY3JlZW4gLnBvcHVwLXByb21wdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaGVhZGVyLXNwYXduO1xcbiAgICAgICAgICBhbmltYXRpb246IGhlYWRlci1zcGF3bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4ICMwMDAwMDA7XFxufVxcbmJvZHkgLnBvcHVwLXNjcmVlbiAucG9wdXAtcHJvbXB0IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbmJvZHkgLnBvcHVwLXNjcmVlbiAucG9wdXAtcHJvbXB0IGZvcm0gLmlucHV0LWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwO1xcbn0vKiMgc291cmNlTWFwcGluZ1VSTD1tYWluLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zY3NzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9kaXN0L2Nzcy9tYWluLmNzc1wiLFwid2VicGFjazovLy4vc2Nzcy9fYW5pbWF0aW9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zY3NzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3Njc3MvX2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zY3NzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc2Nzcy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3Njc3MvX3R5cG9ncmFwaHkuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNHSjs7QUNOQTtFQUNJO0lBQ0ksNkJBQUE7RURTTjtFQ1JJO0lBQ0UsMkJBQUE7RURVTjtFQ1RJO0lBQ0UsMEJBQUE7RURXTjtBQUNGOztBQ2xCQTtFQUNJO0lBQ0ksNkJBQUE7RURTTjtFQ1JJO0lBQ0UsMkJBQUE7RURVTjtFQ1RJO0lBQ0UsMEJBQUE7RURXTjtBQUNGO0FDUkE7RUFDSTtJQUNJLDZCQUFBO0VEVU47RUNSRTtJQUNJLDJCQUFBO0VEVU47RUNSRTtJQUNJLDBCQUFBO0VEVU47QUFDRjtBQ25CQTtFQUNJO0lBQ0ksNkJBQUE7RURVTjtFQ1JFO0lBQ0ksMkJBQUE7RURVTjtFQ1JFO0lBQ0ksMEJBQUE7RURVTjtBQUNGO0FDUEE7RUFDSTtJQUNJLDZCQUFBO0VEU047RUNQRTtJQUNJLDBCQUFBO0VEU047QUFDRjtBQ2ZBO0VBQ0k7SUFDSSw2QkFBQTtFRFNOO0VDUEU7SUFDSSwwQkFBQTtFRFNOO0FBQ0Y7QUNOQTtFQUNJO0lBQ0ksV0FBQTtFRFFOO0VDUEk7SUFDRSxhQUFBO0VEU047QUFDRjtBQ2RBO0VBQ0k7SUFDSSxXQUFBO0VEUU47RUNQSTtJQUNFLGFBQUE7RURTTjtBQUNGO0FDTkE7RUFDSTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VEUU47RUNQSTtJQUNFLE9BQUE7SUFDQSxRQUFBO0VEU047QUFDRjtBQ2hCQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFVBQUE7RURRTjtFQ1BJO0lBQ0UsT0FBQTtJQUNBLFFBQUE7RURTTjtBQUNGO0FDTkE7RUFDSTtJQUNJLGFBQUE7RURRTjtFQ1BJO0lBQ0UsV0FBQTtFRFNOO0FBQ0Y7QUNkQTtFQUNJO0lBQ0ksYUFBQTtFRFFOO0VDUEk7SUFDRSxXQUFBO0VEU047QUFDRjtBQ05BO0VBQ0k7SUFDSSxTQUFBO0VEUU47RUNQSTtJQUNFLE9BQUE7RURTTjtBQUNGO0FDZEE7RUFDSTtJQUNJLFNBQUE7RURRTjtFQ1BJO0lBQ0UsT0FBQTtFRFNOO0FBQ0Y7QUVyRUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsa0NDRk87RURHUCxZQ0RTO0VERVQsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0FGc0VKOztBRW5FQTtFQUNJLFVBQUE7QUZzRUo7O0FFbkVBO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtBRnNFSjs7QUVuRUE7RUFDSSw0QkFBQTtFQUNBLCtCQUFBO0FGc0VKOztBSTFGQTtFQUNJLG9CQUFBO0FKNkZKOztBSTFGQTtFQ0hJLGFBQUE7RUFDQSx1QkRHYztFQ0ZkLDBCREVtQjtFQUNuQiwyQkRYUztFQ1lULGtCQUFBO0FKK0ZKO0FJN0ZJO0VDR0EsV0RGa0I7RUNHbEIsYURId0I7RUNUeEIsYUFBQTtFQUNBLCtCRFNrQjtFQ1JsQixrQ0RRK0I7RUFDM0IsVUFBQTtBSmtHUjtBSWhHUTtFQzJCSiwrQkQxQjJCO1VDMEIzQix1QkQxQjJCO0VDMkIzQiw4QkQzQnlDO1VDMkJ6QyxzQkQzQnlDO0VDNEJ6QyxxQ0Q1QjZDO1VDNEI3Qyw2QkQ1QjZDO0VDdEI3QyxhQUFBO0VBQ0EsbUJEc0JzQjtFQ3JCdEIsNkJEcUIyQjtFQ3BCM0IsbUJEb0J5QztFQ25CekMsTUFMa0U7RUFlbEUsYURVMEI7RUNUMUIsaUJEU2tDO0VBQzFCLHFCRHZCQztFQ3dCRCxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FKeUdaO0FJdkdZO0VBQ0ksZUFBQTtBSnlHaEI7QUl0R1k7RUNsQ1IsYUFBQTtFQUNBLG1CRGtDMEI7RUNqQzFCLHVCRGlDK0I7RUNoQy9CLG1CRGdDdUM7RUMvQnZDLFNEK0IrQztBSjRHbkQ7QUkxR2dCO0VDSVosa0JESGdDO0VDSWhDLGtCREpzQztFQ0t0QyxtQkFId0Q7RUFJeEQsb0JBSnlDO0VBWHpDLDBCQzNCUztFRDRCVCxlRFMyQztFQUMzQixrQkFBQTtBSmdIcEI7QUk5R29CO0VBQ0ksVUFBQTtBSmdIeEI7QUk1R2dCO0VDL0NaLGFBQUE7RUFDQSxtQkQrQzhCO0VDOUM5Qix1QkQ4Q21DO0VDN0NuQyxtQkQ2QzJDO0VDNUMzQyxTRDRDbUQ7QUprSHZEO0FJL0dnQjtFQ25EWixhQUFBO0VBQ0EsbUJEbUQ4QjtFQ2xEOUIsdUJEa0RtQztFQ2pEbkMsbUJEaUQyQztFQ2hEM0MsTUFMa0U7RURzRGxELGtCQUFBO0VBQ0EsaUJBQUE7QUpxSHBCO0FJbkhvQjtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUpxSHhCO0FJL0dRO0VDaEJKLGdDRGlCMkI7VUNqQjNCLHdCRGlCMkI7RUNoQjNCLDhCRGdCMEM7VUNoQjFDLHNCRGdCMEM7RUNmMUMscUNEZThDO1VDZjlDLDZCRGU4QztFQ3pEOUMsYUFBQTtFQUNBLHlFRHlEc0I7RUN4RHRCLDBCRHdENkU7RUNwRDdFLGFEcUQwQjtFQ3BEMUIsZ0JEb0RrQztFQUMxQixxQkRsRUM7RUNtRUQsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUpzSFo7QUlwSFk7RUNsQ1Isa0JEbUM0QjtFQ2xDNUIsbUJEa0NrQztFQ2pDbEMsbUJBSHdEO0VBSXhELG9CQUp5QztFQXhDekMsYUFBQTtFQUNBLG1CRDRFMEI7RUMzRTFCLDJCRDJFK0I7RUMxRS9CLG1CRDBFMkM7RUN6RTNDLFNEeUVtRDtFQ2hEbkQsb0JEaUQwQjtFQ2hEMUIsa0JEZ0RtQztFQUN2Qiw0QkRoRkY7QUg4TWQ7QUk1SGdCO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUo4SHBCO0FJMUhZO0VDekVSLGFEMEU4QjtFQ3pFOUIsaUJEeUVzQztBSjZIMUM7QUkxSFk7RUM3RVIsYUQ4RThCO0VDN0U5QixpQkQ2RXNDO0FKNkgxQztBSTFIWTtFQ2pGUixhRGtGOEI7RUNqRjlCLGlCRGlGc0M7QUo2SDFDO0FJMUhZO0VDckZSLGFEc0Y4QjtFQ3JGOUIsaUJEcUZzQztBSjZIMUM7QUkxSFk7RUN6RlIsYUQwRjhCO0VDekY5QixpQkR5RnNDO0VBQzFCLFlBQUE7QUo2SGhCO0FJM0hnQjtFQ2xFWixrQkRtRWdDO0VDbEVoQyxtQkRrRXNDO0VDakV0QyxtQkFId0Q7RUFJeEQsb0JBSnlDO0VBeEN6QyxhQUFBO0VBQ0EsbUJENEc4QjtFQzNHOUIsdUJEMkdtQztFQzFHbkMsbUJEMEcyQztFQ3pHM0MsUUR5R21EO0VDaEZuRCwwQkMzQlM7RUQ0QlQsa0JEZ0YyQztFQUMzQixrQ0RoSE47RUNpSE0saUJBQUE7QUpxSXBCO0FJbklvQjtFQUNJLFlBQUE7QUpxSXhCO0FJaElZO0VDMUdSLGFEMkc4QjtFQzFHOUIsaUJEMEdzQztBSm1JMUM7QUloSVk7RUFDSSxhQUFBO0FKa0loQjtBSS9IWTtFQUNJLGFBQUE7QUppSWhCO0FJN0hRO0VDckZKLDZCRHNGMkI7VUN0RjNCLHFCRHNGMkI7RUNyRjNCLGdDRHFGdUM7VUNyRnZDLHdCRHFGdUM7RUNwRnZDLHFDRG9GNkM7VUNwRjdDLDZCRG9GNkM7RUN0STdDLGFBQUE7RUFDQSxtQkRzSXNCO0VDckl0Qix1QkRxSTJCO0VDcEkzQixtQkRvSW1DO0VDbkluQyxNQUxrRTtFQWVsRSxhRDBIMEI7RUN6SDFCLGdCRHlIa0M7RUNoSGxDLGVEaUgwQjtFQ2hIMUIsZURnSGdDO0VBQ3hCLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FKdUlaO0FJcklZO0VDckdSLGtCRHNHNEI7RUNyRzVCLGdCQUYrQjtFQUcvQixtQkFId0Q7RUFJeEQsb0JBSnlDO0VBTnpDLFNEOEc4QjtFQzdHOUIsU0Q2R29DO0VDNUdwQyxVRDRHd0M7RUMzR3hDLFVEMkc0QztFQUNoQyw0QkRsSkY7RUNtSkUsa0JBQUE7RUFDQSxpQkFBQTtBSjZJaEI7QUkzSWdCO0VDbkhaLFNEb0hrQztFQ25IbEMsU0RtSHdDO0VDbEh4QyxVRGtINEM7RUNqSDVDLFVEaUhnRDtFQUNoQyxlQUFBO0VBQ0EsV0FBQTtBSmdKcEI7QUk1SVk7RUN6SVIsV0QwSTBCO0VDekkxQixZRHlJZ0M7RUM3SmhDLGFBQUE7RUFDQSxzQkQ2SjBCO0VDNUoxQix1QkQ0SmtDO0VDM0psQyxtQkQySjBDO0VDMUoxQyxNQUxrRTtFRGdLdEQsa0JBQUE7QUptSmhCO0FJaEpZO0VDL0lSLFdEZ0owQjtFQy9JMUIsWUQrSWdDO0VDbktoQyxhQUFBO0VBQ0Esc0JEbUswQjtFQ2xLMUIsdUJEa0trQztFQ2pLbEMsbUJEaUswQztFQ2hLMUMsTUFMa0U7RURzS3RELGtCQUFBO0FKdUpoQjtBSXBKWTtFQ3hLUixhQUFBO0VBQ0Esc0JEd0swQjtFQ3ZLMUIsdUJEdUtrQztFQ3RLbEMsbUJEc0swQztFQ3JLMUMsTUFMa0U7RUQyS3RELGtCQUFBO0FKMEpoQjtBSXhKZ0I7RUN6SlosV0QwSjhCO0VDeko5QixZRHlKb0M7RUNyS3BDLGFBQUE7RUFDQSxpQ0RxSzhCO0VDcEs5QiwwQkRvSzZDO0VBQzdCLGtCQUFBO0FKNkpwQjtBSTNKb0I7RUNqTGhCLGFBQUE7RUFDQSxtQkRpTGtDO0VDaExsQyx1QkRnTHVDO0VDL0t2QyxtQkQrSytDO0VDOUsvQyxNQUxrRTtBTG9WdEU7QUk5Sm9CO0VDckxoQixhQUFBO0VBQ0EsbUJEcUxrQztFQ3BMbEMsOEJEb0x1QztFQ25MdkMsbUJEbUxzRDtFQ2xMdEQsTUFMa0U7RUFlbEUsYUR5S3NDO0VDeEt0QyxpQkR3SzhDO0FKcUtsRDtBSW5Ld0I7RUNoSnBCLGtCRGlKd0M7RUNoSnhDLGdCQUYrQjtFQUcvQixtQkFId0Q7RUFJeEQsb0JBSnlDO0VEbUpqQixhQUFBO0FKd0s1QjtBSXBLb0I7RUN2TGhCLGFBQUE7RUFDQSx1QkR1TGtDO0VDdExsQyxxQ0RzTHVDO0VDbEx2QyxhRG1Mc0M7RUNsTHRDLGlCRGtMOEM7QUp5S2xEO0FJdEtvQjtFQzNKaEIsa0JENEpvQztFQzNKcEMsbUJEMkowQztFQzFKMUMsbUJBSHdEO0VBSXhELG9CQUp5QztFQXhDekMsYUFBQTtFQUNBLG1CRHFNa0M7RUNwTWxDLHVCRG9NdUM7RUNuTXZDLG9CRG1NK0M7RUNsTS9DLE1BTGtFO0VBZWxFLGFEeUxzQztFQ3hMdEMsaUJEd0w4QztFQUMxQixrQkFBQTtFQUNBLGdCQUFBO0FKZ0x4QjtBSTlLd0I7RUNuTXBCLGFBQUE7RUFDQSxtQ0RtTXNDO0VDbE10QyxzQ0RrTXVEO0VBQy9CLGtCQUFBO0FKa0w1QjtBSWhMNEI7RUM1THhCLFdENkwwQztFQzVMMUMsWUQ0TGdEO0VDbkxoRCxvQkRvTDBDO0VDbkwxQyxpQkRtTG1EO0VBQ3ZCLG9DQUFBO0VBQ0EsaUJBQUE7QUpvTGhDO0FJbExnQztFQzVLNUIsa0JENktnRDtFQzVLaEQsa0JENEtzRDtFQzNLdEQsbUJBSHdEO0VBSXhELG9CQUp5QztFQVh6QyxvQkQwTDhDO0VDekw5QyxpQkR5THVEO0VBQ3ZCLFdBQUE7QUp3THBDO0FJbkx3QjtFQzdLcEIsNEJEOEsyQztVQzlLM0Msb0JEOEsyQztFQzdLM0MsZ0NENktzRDtVQzdLdEQsd0JENktzRDtFQzVLdEQscUNENEs0RDtVQzVLNUQsNkJENEs0RDtFQ3JMNUQsa0JEc0x3QztFQ3JMeEMsbUJEcUw4QztFQ3BMOUMsbUJBSHdEO0VBSXhELG9CQUp5QztFQWhDekMsYUFBQTtFQUNBLHFDRHVOc0M7RUN0TnRDLDRCRHNOeUQ7RUM5THpELE1EK0wwQztFQzlMMUMsUUQ4TDZDO0VDN0w3QyxTRDZMZ0Q7RUM1TGhELE9ENExtRDtFQUMzQiwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FKK0w1QjtBSTdMNEI7RUNoTXhCLG1CRGlNNEM7RUNoTTVDLGdCRGdNbUQ7RUMvTG5ELGdDRCtMMkQ7RUM5TDNELGlCRDhMc0Q7RUMxT3RELGFBQUE7RUFDQSxtQkQwTzBDO0VDek8xQyw4QkR5TytDO0VDeE8vQyxtQkR3TzhEO0VDdk85RCxTRHVPc0U7RUM5TXRFLG9CRCtNMEM7RUM5TTFDLGlCRDhNbUQ7RUFDdkIsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7QUp1TWhDO0FJck1nQztFQ3hNNUIsa0JEeU1nRDtFQ3hNaEQsZ0JBRitCO0VBRy9CLG1CQUh3RDtFQUl4RCxvQkFKeUM7RUQyTVQsNEJEcFB0QjtBSDhiZDtBSXhNb0M7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUowTXhDO0FJeE13QztFQUNJLGVBQUE7RUFDQSxlQUFBO0FKME01QztBSXJNZ0M7RUNoUTVCLGFBQUE7RUFDQSxzQkRnUThDO0VDL1A5QywyQkQrUHNEO0VDOVB0RCx1QkQ4UGtFO0VDN1BsRSxTRDZQOEU7QUoyTWxGO0FJdk00QjtFQ3ZQeEIsYUR3UDhDO0VDdlA5QyxpQkR1UHNEO0FKME0xRDtBSXZNNEI7RUN6UXhCLGFBQUE7RUFDQSxtQkR5UTBDO0VDeFExQyx1QkR3UStDO0VDdlEvQyxtQkR1UXVEO0VDdFF2RCxNQUxrRTtFQThCbEUsb0JEOE8wQztFQzdPMUMsZUQ2T21EO0VDN1BuRCxhRDhQOEM7RUM3UDlDLGlCRDZQc0Q7RUFDMUIsa0JBQUE7RUFDQSxNQUFBO0FKK01oQztBSTVNNEI7RUMvT3hCLE1EZ1A4QztFQy9POUMsV0QrT2lEO0VDOU9qRCxZRDhPdUQ7RUM3T3ZELE9ENk82RDtFQUNqQyxrQkFBQTtBSmlOaEM7QUkxTVk7RUMxUlIsYUFBQTtFQUNBLHNCRDBSMEI7RUN6UjFCLHVCRHlSa0M7RUN4UmxDLG1CRHdSMEM7RUN2UjFDLE1BTGtFO0FMNGV0RTtBSTlNZ0I7RUNwUFosa0JEcVBnQztFQ3BQaEMsZ0JBRitCO0VBRy9CLG1CQUh3RDtFQUl4RCxvQkFKeUM7RUF4Q3pDLGFBQUE7RUFDQSxtQkQ4UjhCO0VDN1I5Qix1QkQ2Um1DO0VDNVJuQyxtQkQ0UjJDO0VDM1IzQyxTRDJSbUQ7RUNsUW5ELG9CRG1ROEI7RUNsUTlCLGtCRGtRdUM7RUFDdkIsa0JBQUE7QUp3TnBCO0FJdE5vQjtFQUNJLFlBQUE7QUp3TnhCO0FJbE5RO0VDMVBKLGdDRDJQMkI7VUMzUDNCLHdCRDJQMkI7RUMxUDNCLDhCRDBQMEM7VUMxUDFDLHNCRDBQMEM7RUN6UDFDLHFDRHlQOEM7VUN6UDlDLDZCRHlQOEM7RUN4UjlDLFVEeVJzQjtFQ3hSdEIsWUR3UjJCO0VDOVIzQixhRCtSMEI7RUM5UjFCLGdCRDhSa0M7RUFDMUIsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FKd05aO0FJdE5ZO0VDalNSLFdEa1MwQjtFQ2pTMUIsWURpU2dDO0VBQ3BCLGtCQUFBO0FKeU5oQjtBSXJOUTtFQzFRSiwrQkQyUTJCO1VDM1EzQix1QkQyUTJCO0VDMVEzQiw4QkQwUXlDO1VDMVF6QyxzQkQwUXlDO0VDelF6QyxxQ0R5UTZDO1VDelE3Qyw2QkR5UTZDO0VDeFM3QyxXRHlTc0I7RUN4U3RCLFdEd1M0QjtFQzlTNUIsYUQrUzBCO0VDOVMxQixpQkQ4U2tDO0VBQzFCLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBSjJOWjtBSXpOWTtFQ2pUUixXRGtUMEI7RUNqVDFCLFlEaVRnQztFQUNwQixrQkFBQTtBSjROaEI7QUl2Tkk7RUMzUkEsK0JENFJ1QjtVQzVSdkIsdUJENFJ1QjtFQzNSdkIsaUNEMlJxQztVQzNSckMseUJEMlJxQztFQzFSckMscUNEMFI0QztVQzFSNUMsNkJEMFI0QztFQ3pUNUMsV0QwVGtCO0VDelRsQixZRHlUd0I7RUM3VXhCLGFBQUE7RUFDQSxtQkQ2VWtCO0VDNVVsQix1QkQ0VXVCO0VDM1V2QixtQkQyVStCO0VDMVUvQixNQUxrRTtFRGdWOUQsOEJEL1VFO0VDZ1ZGLGtCQUFBO0VBQ0EsVUFBQTtBSmdPUjtBSTlOUTtFQ25TSiwrQkRvUzJCO1VDcFMzQix1QkRvUzJCO0VDblMzQixnQ0RtU3lDO1VDblN6Qyx3QkRtU3lDO0VDbFN6QyxxQ0RrUytDO1VDbFMvQyw2QkRrUytDO0VDM1MvQyxrQkQ0U3dCO0VDM1N4QixtQkQyUzhCO0VDMVM5QixtQkFId0Q7RUFJeEQsb0JBSnlDO0VBckJ6QyxZRG1Vc0I7RUNsVXRCLGFEa1U2QjtFQ3RWN0IsYUFBQTtFQUNBLHNCRHNWc0I7RUNyVnRCLHVCRHFWOEI7RUNwVjlCLG1CRG9Wc0M7RUNuVnRDLFFEbVY4QztFQUN0QyxpQkFBQTtFQUNBLGdDQUFBO0FKME9aO0FJeE9ZO0VDM1ZSLGFBQUE7RUFDQSxzQkQyVjBCO0VDMVYxQiw2QkQwVmtDO0VDelZsQyxtQkR5VmdEO0VDeFZoRCxTRHdWd0Q7QUo4TzVEO0FJNU9nQjtFQzlWWixhQUFBO0VBQ0EsbUJEOFY4QjtFQzdWOUIsNkJENlZtQztFQzVWbkMsbUJENFZpRDtFQzNWakQsTUFMa0U7QUxrbEJ0RSxDQUFBLG1DQUFBXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4taGVhZGVyXCIpLmlubmVyVGV4dCA9IFwiQ3JlYXRlIGFuIEFjY291bnRcIjtcbn0iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbGVuZGFyKHByb2plY3REYXRhKSB7XG4gICAgbGV0IGN1cnJlbnRNb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgbW9udGhzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG4gICAgY29uc3Qgd2Vla2RheXMgPSBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVzXCIsIFwiV2VkXCIsIFwiVGh1cnNcIiwgXCJGcmlcIiwgXCJTYXRcIl07XG5cbiAgICBmdW5jdGlvbiBuZXdEYXkoZGF5TnVtKSB7XG4gICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRheS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhbGVuZGFyLWRheVwiKTtcblxuICAgICAgICAgICAgY29uc3QgZGF5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgICAgIGRheVRleHQudGV4dENvbnRlbnQgPSBkYXlOdW07XG4gICAgICAgIFxuICAgICAgICBkYXkuYXBwZW5kQ2hpbGQoZGF5VGV4dCk7XG4gICAgICAgIHJldHVybiBkYXk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TW9udGgobW9udGgpIHtcbiAgICAgICAgY2FsTW9udGgudGV4dENvbnRlbnQgPSBtb250aHNbbW9udGhdO1xuICAgICAgICBzZXREYXlzKG1vbnRoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREYXlzKG1vbnRoKSB7XG4gICAgICAgIGxldCBudW1EYXlzID0gKCgpID0+IHtcbiAgICAgICAgICAgIC8vIEFsbCBtb250aHMgdGhhdCBjb25zaXN0IG9mIDMwIGRheXNcbiAgICAgICAgICAgIGNvbnN0IGZlYnJ1YXJ5ID0gMTtcbiAgICAgICAgICAgIGNvbnN0IG1vbnRocyA9IFszLCA1LCA4LCAxMF07XG5cbiAgICAgICAgICAgIC8vIEZlYnJ1YXJ5XG4gICAgICAgICAgICBpZiAobW9udGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMjg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcHJpbCwgSnVuZSwgU2VwdGVtYmVyLCBOb3ZlbWJlclxuICAgICAgICAgICAgZWxzZSBpZiAobW9udGhzLmluY2x1ZGVzKG1vbnRoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAzMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEphbnVhcnksIE1hcmNoLCBNYXksIEp1bHksIEF1Z3VzdCwgT2N0b2JlciwgRGVjZW1iZXJcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAzMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtRGF5czsgaSsrKSB7XG4gICAgICAgICAgICBjYWxEYXlzLmFwcGVuZENoaWxkKG5ld0RheShpKSk7XG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgYWxsIGRheXMgd2l0aGluIHRoZSBtb250aCAobm90IHByZXZpb3VzL3N1YnNlcXVlbnQgbW9udGhzKVxuICAgICAgICAgICAgY2FsRGF5cy5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1kYXlcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgcHJldmlvdXMgbW9udGgncyBkYXlzIHRvIGZpbGwgdGhlIGNhbGVuZGFyXG4gICAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbmV3RGF0ZS5zZXRNb250aChtb250aCk7XG5cbiAgICAgICAgY29uc3QgZGF5T2Zmc2V0QmVmb3JlID0gKG5ld0RhdGUuZ2V0RGF5KCkgKyAxKSAtIChuZXdEYXRlLmdldERhdGUoKSAlIDcpO1xuICAgICAgICBuZXdEYXRlLnNldERhdGUoMCk7XG4gICAgICAgIGxldCBwcmV2T2Zmc2V0ID0gbmV3RGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlPZmZzZXRCZWZvcmU7IGkrKykge1xuICAgICAgICAgICAgY2FsRGF5cy5wcmVwZW5kKG5ld0RheShwcmV2T2Zmc2V0KSk7XG4gICAgICAgICAgICBjYWxEYXlzLmZpcnN0Q2hpbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJkYXJrZ3JleVwiO1xuICAgICAgICAgICAgcHJldk9mZnNldC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIG5leHQgbW9udGgncyBkYXlzIHRvIGZpbGwgdGhlIGNhbGVuZGFyXG4gICAgICAgIGNvbnN0IGRheU9mZnNldEFmdGVyID0gNDIgLSBjYWxEYXlzLmNoaWxkRWxlbWVudENvdW50O1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlPZmZzZXRBZnRlcjsgaSsrKSB7XG4gICAgICAgICAgICBjYWxEYXlzLmFwcGVuZChuZXdEYXkoaSArIDEpKTtcbiAgICAgICAgICAgIGNhbERheXMubGFzdENoaWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZGFya2dyZXlcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEJ1dHRvbnMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZWxlY3REYXkobW9udGgsIGRheSkge1xuICAgICAgICBjb25zdCBkYXlTZWxlY3RlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRheVNlbGVjdGVkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF5LXNlbGVjdGVkXCIpO1xuXG4gICAgICAgIGNvbnN0IGRheU51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgZGF5TnVtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF5LW51bS1zZWxlY3RlZFwiKTtcbiAgICAgICAgZGF5TnVtLnRleHRDb250ZW50ID0gYCR7bW9udGhzW21vbnRoIC0gMV19ICR7ZGF5fWA7XG4gICAgICAgIGRheVNlbGVjdGVkLmFwcGVuZENoaWxkKGRheU51bSk7XG5cbiAgICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGFkZFRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFza1wiKTtcbiAgICAgICAgY29uc3QgYWRkVGFza1BpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGFkZFRhc2tQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9hZGRfdGFzay5wbmdcIik7XG4gICAgICAgIGFkZFRhc2suYXBwZW5kQ2hpbGQoYWRkVGFza1BpYyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGFkZFRhc2tUZXh0LnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFRhc2tcIjtcbiAgICAgICAgYWRkVGFzay5hcHBlbmRDaGlsZChhZGRUYXNrVGV4dCk7XG4gICAgICAgIGRheVNlbGVjdGVkLmFwcGVuZENoaWxkKGFkZFRhc2spO1xuXG4gICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgVGFzayhwcm9qZWN0RGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgICAgIGNsb3NlLmlkID0gXCJjbG9zZS1kYXlcIjtcbiAgICAgICAgY2xvc2UuY2xhc3NOYW1lID0gXCJidXR0b24tY2xvc2VcIjtcbiAgICAgICAgZGF5U2VsZWN0ZWQuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG4gICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0RGF0YSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9qVGFzayBvZiBwcm9qZWN0LnRhc2tzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza01vbnRoID0gTnVtYmVyKHByb2pUYXNrLmRhdGUuc3BsaXQoXCItXCIpWzFdKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF5ID0gcHJvalRhc2suZGF0ZS5zcGxpdChcIi1cIilbMl07XG5cbiAgICAgICAgICAgICAgICBpZiAobW9udGggPT09IHRhc2tNb250aCAmJiBkYXkgPT09IHRhc2tEYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYWxlbmRhci10YXNrXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0luZm8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWluZm9cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay10ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrVGV4dC50ZXh0Q29udGVudCA9IHByb2pUYXNrLnRhc2s7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tUZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qSW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qLWlucHV0XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvaklucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwcm9qSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdGFzayBvZiBwcm9qZWN0LnRhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrVGV4dC50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sudGFzayA9PT0gdGFza1RleHQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWF0Y2ghXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBwcm9qSW5wdXQudmFsdWUgPSBwcm9qVGFzay5wcm9qZWN0O1xuICAgICAgICAgICAgICAgICAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChwcm9qSW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tCdXR0b25zLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1idXR0b25zXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0VkaXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWVkaXRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tFZGl0LnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiRWRpdCB0YXNrXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRWRpdFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tFZGl0UGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvZWRpdC5wbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tFZGl0LmFwcGVuZENoaWxkKHRhc2tFZGl0UGljKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0VkaXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza1RpbWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLXRpbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tUaW1lLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiQ2hhbmdlIGR1ZSBkYXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGltZVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tUaW1lUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvZWRpdF9jYWxlbmRhci5wbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tUaW1lLmFwcGVuZENoaWxkKHRhc2tUaW1lUGljKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza1RpbWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0RlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stZGVsZXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRGVsLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiRGVsZXRlIHRhc2tcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZWxQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRGVsUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvZGVsZXRlLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0RlbC5hcHBlbmRDaGlsZCh0YXNrRGVsUGljKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0RlbCk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0J1dHRvbnMpO1xuICAgICAgICAgICAgICAgICAgICBkYXlTZWxlY3RlZC5hcHBlbmRDaGlsZCh0YXNrKTtcblxuICAgICAgICAgICAgICAgICAgICB0YXNrRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10ZXh0XCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXRleHRcIikucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2staW5wdXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgcHJldlRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByZXZUYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1pbmZvXCIpLnByZXBlbmQodGFza0lucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1pbnB1dFwiKS5mb2N1cygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staW5wdXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1pbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qVmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qLWlucHV0XCIpLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWlucHV0XCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stdGV4dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnRleHRDb250ZW50ID0gbmV3VGFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staW5mb1wiKS5wcmVwZW5kKHRhc2spO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3REYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdGFzayBvZiBwcm9qZWN0LnRhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay50YXNrID09PSBwcmV2VGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID0gcHJvalZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnRhc2sgPSBuZXdUYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB0YXNrVGltZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2RGF0ZSA9IGAyMDIyLSR7dGFza01vbnRofS0ke3Rhc2tEYXl9YDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByZXZEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGF0ZVwiKS5mb2N1cygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlSW5wdXQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvalRhc2suZGF0ZSA9IG5ld0RhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3RGF0ZSAhPT0gcHJldkRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFza0RlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleE9mVGFzayA9IHByb2plY3RbXCJ0YXNrc1wiXS5pbmRleE9mKHByb2pUYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RbXCJ0YXNrc1wiXS5zcGxpY2UoaW5kZXhPZlRhc2ssIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXlzLXdyYXBwZXJcIikuYXBwZW5kQ2hpbGQoZGF5U2VsZWN0ZWQpO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtZGF5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF5LXNlbGVjdGVkXCIpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTaG93IGV2ZW50cyBvZiBhIGdpdmVuIGRheSBpZiBjbGlja2VkIG9uXG4gICAgZnVuY3Rpb24gc2V0QnV0dG9ucygpIHtcbiAgICAgICAgZm9yIChjb25zdCBidXR0b24gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmUtZGF5XCIpKSB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGF5ID0gYnV0dG9uLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgc2VsZWN0RGF5KGN1cnJlbnRNb250aCwgc2VsZWN0ZWREYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBlbmQgY2FsZW5kYXIgdG8gRE9NXG4gICAgY29uc3QgY2FsZW5kYXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYWxlbmRhcldyYXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYWxlbmRhclwiKTtcbiAgICBjYWxlbmRhcldyYXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWNvbnRlbnRcIik7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdC10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNhbGVuZGFyXCI7XG4gICAgICAgIFxuICAgIGNhbGVuZGFyV3JhcC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYWxlbmRhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbGVuZGFyLWdyaWRcIik7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCBjYWxlbmRhciBtb250aCB0byBET01cbiAgICAgICAgICAgIGNvbnN0IGNhbE1vbnRoV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjYWxNb250aFdyYXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYWxlbmRhci1tb250aFwiKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoQXJyb3dMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICBtb250aEFycm93TGVmdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbGVuZGFyLWxlZnRcIik7XG4gICAgICAgICAgICAgICAgbW9udGhBcnJvd0xlZnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb250aC10b2dnbGVcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJyb3dMZWZ0UGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBhcnJvd0xlZnRQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9rZXlib2FyZF9hcnJvd19sZWZ0LnBuZ1wiKTtcbiAgICAgICAgICAgICAgICBtb250aEFycm93TGVmdC5hcHBlbmRDaGlsZChhcnJvd0xlZnRQaWMpO1xuXG4gICAgICAgICAgICBjYWxNb250aFdyYXAuYXBwZW5kQ2hpbGQobW9udGhBcnJvd0xlZnQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FsTW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgICAgICAgICAgY2FsTW9udGguc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb250aC10ZXh0XCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYWxNb250aFdyYXAuYXBwZW5kQ2hpbGQoY2FsTW9udGgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGhBcnJvd1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICBtb250aEFycm93UmlnaHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYWxlbmRhci1yaWdodFwiKTtcbiAgICAgICAgICAgICAgICBtb250aEFycm93UmlnaHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb250aC10b2dnbGVcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJyb3dSaWdodFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgYXJyb3dSaWdodFBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2tleWJvYXJkX2Fycm93X3JpZ2h0LnBuZ1wiKTtcbiAgICAgICAgICAgICAgICBtb250aEFycm93UmlnaHQuYXBwZW5kQ2hpbGQoYXJyb3dSaWdodFBpYyk7XG5cbiAgICAgICAgICAgIGNhbE1vbnRoV3JhcC5hcHBlbmRDaGlsZChtb250aEFycm93UmlnaHQpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWxsb3cgYXJyb3cgYnV0dG9ucyB0byBjb250cm9sIHRoZSB2aXNpYmxlIGNhbGVuZGFyIG1vbnRoXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBidXR0b24gb2YgW21vbnRoQXJyb3dMZWZ0LCBtb250aEFycm93UmlnaHRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGNhbERheXMuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbERheXMuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldCA9PT0gbW9udGhBcnJvd1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE1vbnRoID0gKChjdXJyZW50TW9udGggKyAxKSArIDEyKSAlIDEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vbnRoKGN1cnJlbnRNb250aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TW9udGggPSAoKGN1cnJlbnRNb250aCAtIDEpICsgMTIpICUgMTI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9udGgoY3VycmVudE1vbnRoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChjYWxNb250aFdyYXApO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgY2FsZW5kYXIgd2Vla2RheSBoZWFkZXJzIHRvIERPTVxuICAgICAgICAgICAgY29uc3QgY2FsSGVhZGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjYWxIZWFkZXJzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FsZW5kYXItaGVhZGVyc1wiKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCB3ZWVrZGF5IG9mIHdlZWtkYXlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FsZW5kYXItaGVhZGVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB3ZWVrZGF5O1xuICAgICAgICAgICAgICAgIGNhbEhlYWRlcnMuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChjYWxIZWFkZXJzKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHNwYWNlIGZvciBjYWxlbmRhciBkYXlzIHRvIERPTVxuICAgICAgICAgICAgY29uc3QgY2FsRGF5V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjYWxEYXlXcmFwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF5cy13cmFwcGVyXCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FsRGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgY2FsRGF5cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbGVuZGFyLWRheXNcIik7XG5cbiAgICAgICAgICAgIGNhbERheVdyYXAuYXBwZW5kQ2hpbGQoY2FsRGF5cyk7XG5cbiAgICAgICAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQoY2FsRGF5V3JhcCk7XG5cbiAgICBjYWxlbmRhcldyYXAuYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtd3JhcHBlclwiKTtcbiAgICBsaXN0Lmluc2VydEJlZm9yZShjYWxlbmRhcldyYXAsIGxpc3QuY2hpbGRyZW5bMF0pO1xuXG4gICAgLy8gU2V0IGluaXRpYWwgY2FsZW5kYXIgbW9udGhcbiAgICBzZXRNb250aChuZXcgRGF0ZSgpLmdldE1vbnRoKCkpO1xufSIsImltcG9ydCBJbmJveCBmcm9tIFwiLi9pbmJveC5qc1wiO1xuaW1wb3J0IFRvZGF5IGZyb20gXCIuL3RvZGF5LmpzXCI7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4vY2FsZW5kYXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudChwcm9qZWN0RGF0YSkge1xuICAgIGNvbnN0IGNvbnRlbnRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50V3JhcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnQtd3JhcHBlclwiKTtcblxuICAgICAgICBjb25zdCByZXNldExheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHJlc2V0TGF5b3V0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVzZXQtbGF5b3V0XCIpO1xuICAgICAgICByZXNldExheW91dC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIlJlc2V0IExheW91dFwiKTtcbiAgICAgICAgcmVzZXRMYXlvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBcIlwiO1xuICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgcmVzZXRQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgcmVzZXRQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy90ZWFtX2Rhc2hib2FyZC5wbmdcIik7XG5cbiAgICAgICAgcmVzZXRMYXlvdXQuYXBwZW5kQ2hpbGQocmVzZXRQaWMpO1xuXG4gICAgY29udGVudFdyYXAuYXBwZW5kQ2hpbGQocmVzZXRMYXlvdXQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChjb250ZW50V3JhcCk7XG5cbiAgICBJbmJveChwcm9qZWN0RGF0YSk7XG5cbiAgICBmb3IgKGNvbnN0IGxpbmsgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLWxpbmtcIikpIHtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICBsZXQgY3VycmVudENvbnRlbnQgPSBjb250ZW50V3JhcC5maXJzdENoaWxkO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnRUYXJnZXQgIT09IGN1cnJlbnRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJjb250ZW50LWRlc3Bhd25cIjtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29udGVudC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMC4yNXNcIjtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29udGVudC5zdHlsZS5hbmltYXRpb25GaWxsTW9kZSA9IFwiZm9yd2FyZHNcIjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSwgMjUwKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goZXZlbnRUYXJnZXQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0luYm94JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmJveChwcm9qZWN0RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdUb2RheSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9kYXkocHJvamVjdERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ2FsZW5kYXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbGVuZGFyKHByb2plY3REYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IC8vIERvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50ID0gY29udGVudFdyYXAuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJjb250ZW50LXJlc3Bhd25cIjtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuMjVzXCI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LnN0eWxlLmFuaW1hdGlvbkZpbGxNb2RlID0gXCJmb3J3YXJkc1wiO1xuICAgICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHdXR0ZXJzKCkge1xuICAgIGNvbnN0IGd1dHRlckNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3V0dGVyQ29sLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ3V0dGVyLWNvbFwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZ3V0dGVyQ29sKTtcblxuICAgIGNvbnN0IGd1dHRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3V0dGVyUm93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ3V0dGVyLXJvd1wiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZ3V0dGVyUm93KTtcbn0iLCJpbXBvcnQgTG9naW4gZnJvbSBcIi4vbG9naW4uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHVzZXJEYXRhKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyVGl0bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaGVhZGVyVGl0bGVzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLXRpdGxlc1wiKTtcblxuICAgICAgICAgICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgICAgICBoZWFkZXJUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci10aXRsZVwiKTtcbiAgICAgICAgICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJET19JVFwiO1xuXG4gICAgICAgIGhlYWRlclRpdGxlcy5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICAgICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSBcIlRoZSB0by1kbyBhcHAgZm9yIG1hbmFnaW5nIHlvdXIgbGlmZVwiO1xuXG4gICAgICAgIGhlYWRlclRpdGxlcy5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGVzKTtcblxuICAgICAgICBjb25zdCBoZWFkZXJCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci1idXR0b25zXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBsb2dpbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGxvZ2luQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGVhZGVyLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBMb2dpbih1c2VyRGF0YSkpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbG9naW5QaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIGxvZ2luUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvYWNjb3VudF9jaXJjbGUucG5nXCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgbG9naW5CdXR0b24uYXBwZW5kQ2hpbGQobG9naW5QaWMpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbG9naW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICAgICAgbG9naW5UZXh0LnRleHRDb250ZW50ID0gXCJTaWduIEluXCI7XG5cbiAgICAgICAgICAgIGxvZ2luQnV0dG9uLmFwcGVuZENoaWxkKGxvZ2luVGV4dCk7XG5cbiAgICAgICAgaGVhZGVyQnV0dG9ucy5hcHBlbmRDaGlsZChsb2dpbkJ1dHRvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtYnV0dG9uXCIpO1xuICAgICAgICAgICAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhlYWRlci1idXR0b25cIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBtZW51SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvbWVudS5wbmdcIik7XG5cbiAgICAgICAgICAgIG1lbnVCdXR0b24uYXBwZW5kQ2hpbGQobWVudUltZyk7XG4gICAgICAgICAgICBcbiAgICAgICAgaGVhZGVyQnV0dG9ucy5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJCdXR0b25zKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn0iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluYm94KHByb2plY3REYXRhKSB7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5ib3hcIik7XG4gICAgaW5ib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWNvbnRlbnRcIik7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdC10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG4gICAgICAgIGluYm94LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tDb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza3NcIik7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0RGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdGFzayBvZiBwcm9qZWN0LnRhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrVGV4dC50ZXh0Q29udGVudCA9IHRhc2sudGFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICBpbmJveC5hcHBlbmRDaGlsZCh0YXNrQ29udGVudCk7XG5cbiAgICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGFkZFRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFza1wiKTtcbiAgICAgICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gVGFzayhwcm9qZWN0RGF0YSkpO1xuXG4gICAgICAgICAgICBjb25zdCBhZGRUYXNrUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGFkZFRhc2tQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9hZGRfdGFzay5wbmdcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgYWRkVGFzay5hcHBlbmRDaGlsZChhZGRUYXNrUGljKTtcblxuICAgICAgICAgICAgY29uc3QgYWRkVGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIGFkZFRhc2tUZXh0LnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFRhc2tcIjtcbiAgICAgICAgICAgIFxuICAgICAgICBhZGRUYXNrLmFwcGVuZENoaWxkKGFkZFRhc2tUZXh0KTtcbiAgICAgICAgICAgIFxuICAgIGluYm94LmFwcGVuZENoaWxkKGFkZFRhc2spO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC13cmFwcGVyXCIpO1xuICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGluYm94LCBjb250ZW50LmNoaWxkcmVuWzBdKTtcbn0iLCJpbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9hY2NvdW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKHVzZXJEYXRhKSB7XG4gICAgLy8gU2hvcnRoYW5kIGZ1bmN0aW9uIGZvciBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgpXG4gICAgY29uc3QgJCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxvZ2luRE9NKCkge1xuICAgICAgICBjb25zdCBsb2dpblNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxvZ2luU2NyZWVuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9naW4tc2NyZWVuXCIpO1xuICAgICAgICBsb2dpblNjcmVlbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvcHVwLXNjcmVlblwiKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGxvZ2luUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGxvZ2luUHJvbXB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9naW4tcHJvbXB0XCIpO1xuICAgICAgICAgICAgbG9naW5Qcm9tcHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb3B1cC1wcm9tcHRcIik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgbG9naW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgICAgICAgICAgbG9naW5IZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dpbi1oZWFkZXJcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9nTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIGxvZ05hbWUuY2xhc3NOYW1lID0gXCJpbnB1dC1maWVsZFwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYW1lLWxhYmVsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvZ2luLW5hbWVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLW5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImxvZ2luLW5hbWVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgbG9nTmFtZS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBsb2dOYW1lLmFwcGVuZENoaWxkKG5hbWVGaWVsZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9nUGFzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIGxvZ1Bhc3MuY2xhc3NOYW1lID0gXCJsb2dpbi1maWVsZFwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXNzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzTGFiZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwYXNzLWxhYmVsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvZ2luLXBhc3NcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhc3NGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLXBhc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImxvZ2luLXBhc3NcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgbG9nUGFzcy5hcHBlbmRDaGlsZChwYXNzTGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBsb2dQYXNzLmFwcGVuZENoaWxkKHBhc3NGaWVsZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9naW5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2luU3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9naW4tc3VibWl0XCIpO1xuICAgICAgICAgICAgICAgICAgICBsb2dpblN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgICAgICAgICAgICAgICAgICBsb2dpblN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxPRyBJTlwiKTtcblxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobG9nTmFtZSk7XG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsb2dQYXNzKTtcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ2luU3VibWl0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICAgICAgYWNjb3VudExpbmsuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhY2NvdW50LWxpbmtcIik7XG4gICAgICAgICAgICAgICAgYWNjb3VudExpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBhY2NvdW50TGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVBY2NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlQWNjb3VudC5pbm5lckhUTUwgPSBcIk5ldyB1c2VyPyBDcmVhdGUgYW4gYWNjb3VudCBcIjtcbiAgICAgICAgICAgICAgICBjcmVhdGVBY2NvdW50LmFwcGVuZENoaWxkKGFjY291bnRMaW5rKTtcbiAgICAgICAgICAgICAgICBhY2NvdW50TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnQoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICBjbG9zZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNsb3NlLWxvZ2luXCIpO1xuICAgICAgICAgICAgICAgIGNsb3NlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uLWNsb3NlXCIpO1xuXG4gICAgICAgICAgICBsb2dpblByb21wdC5hcHBlbmRDaGlsZChsb2dpbkhlYWRlcik7XG4gICAgICAgICAgICBsb2dpblByb21wdC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgICAgIGxvZ2luUHJvbXB0LmFwcGVuZENoaWxkKGNyZWF0ZUFjY291bnQpO1xuICAgICAgICAgICAgbG9naW5Qcm9tcHQuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG4gICAgICAgIGxvZ2luU2NyZWVuLmFwcGVuZENoaWxkKGxvZ2luUHJvbXB0KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2dpblNjcmVlbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9naW5UZXh0KCkge1xuICAgICAgICAkKFwibG9naW4taGVhZGVyXCIpLmlubmVyVGV4dCA9IFwiU2lnbiBpbiB0byBEb19JdFwiO1xuICAgICAgICAkKFwibmFtZS1sYWJlbFwiKS5pbm5lclRleHQgPSBcIk5hbWU6XCI7XG4gICAgICAgICQoXCJwYXNzLWxhYmVsXCIpLmlubmVyVGV4dCA9IFwiUGFzc3dvcmQ6XCI7XG4gICAgICAgICQoXCJhY2NvdW50LWxpbmtcIikuaW5uZXJUZXh0ID0gXCJoZXJlXCI7XG4gICAgICAgICQoXCJjbG9zZS1sb2dpblwiKS5pbm5lclRleHQgPSBcIlhcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2dpbkV2ZW50cygpIHtcbiAgICAgICAgJChcImxvZ2luLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwibG9naW4tc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgICAgICAgICAgICAgIGxldCB1c2VyQ2hlY2sgPSBmYWxzZTtcbiAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHVzZXIgb2YgdXNlckRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIubmFtZSA9PT0gJChcImxvZ2luLW5hbWVcIikudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCJsb2dpbi1idXR0b25cIikuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBgSGVsbG8sICR7dXNlckVudGVyZWR9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCJsb2dpbi1zY3JlZW5cIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyQ2hlY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyQ2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuaW5uZXJUZXh0ID0gXCJUaGlzIHVzZXIgZG9lcyBub3QgZXhpc3RcIjtcbiAgICAgICAgICAgICAgICAgICAgbG9naW5Qcm9tcHQuaW5zZXJ0QmVmb3JlKGVycm9yLCAkKFwibG9naW4tcHJvbXB0XCIpLmNoaWxkcmVuWzJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgJChcImxvZ2luLW5hbWVcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICQoXCJsb2dpbi1wYXNzXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgJChcImNsb3NlLWxvZ2luXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKFwibG9naW4tbmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgJChcImxvZ2luLXBhc3NcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICQoXCJsb2dpbi1zY3JlZW5cIikucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgKCgpID0+IHtcbiAgICAgICAgbG9naW5ET00oKTtcbiAgICAgICAgbG9naW5UZXh0KCk7XG4gICAgICAgIGxvZ2luRXZlbnRzKCk7XG4gICAgfSkoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3REYXRhKSB7XG4gICAgY29uc3QgcHJvalNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvalNjcmVlbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2otc2NyZWVuXCIpO1xuICAgIHByb2pTY3JlZW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb3B1cC1zY3JlZW5cIik7XG5cbiAgICAgICAgY29uc3QgcHJvalByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2pQcm9tcHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qLXByb21wdFwiKTtcbiAgICAgICAgcHJvalByb21wdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvcHVwLXByb21wdFwiKTtcblxuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbG9nUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgbG9nUHJvai5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0LWZpZWxkXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2pMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvakxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2otbmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvakxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWU6XCI7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvakZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qRmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qLW5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb2pGaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvai1uYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qRmllbGQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgUHJvamVjdFwiKTtcblxuICAgICAgICAgICAgICAgIGxvZ1Byb2ouYXBwZW5kQ2hpbGQocHJvakxhYmVsKTtcbiAgICAgICAgICAgICAgICBsb2dQcm9qLmFwcGVuZENoaWxkKHByb2pGaWVsZCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIHByb2pTdWJtaXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qLXN1Ym1pdFwiKTtcbiAgICAgICAgICAgICAgICBwcm9qU3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgICAgICAgICAgICAgcHJvalN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkFERCBQUk9KRUNUXCIpO1xuXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ1Byb2opO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qU3VibWl0KTtcblxuICAgICAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgICAgICAgICBjbG9zZS5pZCA9IFwiY2xvc2UtcHJvalwiO1xuICAgICAgICAgICAgY2xvc2UuY2xhc3NOYW1lID0gXCJidXR0b24tY2xvc2VcIjtcbiAgICAgICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwcm9qU2NyZWVuLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvalByb21wdC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgcHJvalByb21wdC5hcHBlbmRDaGlsZChjbG9zZSk7XG5cbiAgICBwcm9qU2NyZWVuLmFwcGVuZENoaWxkKHByb2pQcm9tcHQpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWFkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvalNjcmVlbik7XG5cbiAgICAgICAgcHJvalN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgcHJvak5hbWUgPSBwcm9qRmllbGQudmFsdWU7XG5cbiAgICAgICAgICAgIGlmICghcHJvak5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qTnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWxpc3RcIikuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgICAgICAgICAgICAgcHJvak5hbWUgPSBgUHJvamVjdCAke3Byb2pOdW0gKyAxfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb2plY3REYXRhLnB1c2gobmV3IFByb2plY3QocHJvak5hbWUpKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBuZXdQcm9qLnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2pOYW1lKTtcbiAgICAgICAgICAgIG5ld1Byb2ouc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qLWl0ZW1cIik7XG4gICAgICAgICAgICBuZXdQcm9qLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVQcm9qID0gbmV3IFJlZ0V4cChcInByb2otc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmVQcm9qLnRlc3QobmV3UHJvai5jbGFzc0xpc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb2ouY2xhc3NMaXN0LmFkZChcInByb2otc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2pOYW1lID0gbmV3UHJvai5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3QudGl0bGUgPT09IG5ld1Byb2ouaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb2ouY2xhc3NMaXN0LnJlbW92ZShcInByb2otc2VsZWN0ZWRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3REYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gbmV3UHJvai5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Quc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvalBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgbmV3UHJvalBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2ZvbGRlci5wbmdcIilcbiAgICAgICAgICAgICAgICBuZXdQcm9qUGljLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvai1waWNcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qTmFtZS5pbm5lckhUTUwgPSBwcm9qTmFtZTtcblxuICAgICAgICAgICAgbmV3UHJvai5hcHBlbmRDaGlsZChuZXdQcm9qUGljKTtcbiAgICAgICAgICAgIG5ld1Byb2ouYXBwZW5kQ2hpbGQobmV3UHJvak5hbWUpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItbGlzdFwiKTtcbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChuZXdQcm9qKTtcbiAgICAgICAgICAgIHByb2pTY3JlZW4ucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY2xhc3MgUHJvamVjdCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvamVjdERhdGE7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhclwiKTtcblxuICAgICAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGluYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhci1pbmJveFwiKTtcbiAgICAgICAgaW5ib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWxpbmVcIik7XG4gICAgICAgIGluYm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1saW5rXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBpbmJveFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBpbmJveFBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2luYm94LnBuZ1wiKTtcblxuICAgICAgICAgICAgY29uc3QgaW5ib3hUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICAgICAgaW5ib3hUZXh0LnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuXG4gICAgICAgIGluYm94LmFwcGVuZENoaWxkKGluYm94UGljKTtcbiAgICAgICAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hUZXh0KTtcblxuICAgICAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRvZGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhci10b2RheVwiKTtcbiAgICAgICAgdG9kYXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWxpbmVcIik7XG4gICAgICAgIHRvZGF5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1saW5rXCIpO1xuXG4gICAgICAgICAgICBjb25zdCB0b2RheVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICB0b2RheVBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL3RvZGF5LnBuZ1wiKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kYXlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICAgICAgdG9kYXlUZXh0LnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuXG4gICAgICAgIHRvZGF5LmFwcGVuZENoaWxkKHRvZGF5UGljKTtcbiAgICAgICAgdG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlUZXh0KTtcblxuICAgICAgICBjb25zdCBjYWxlbmRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNhbGVuZGFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhci1jYWxlbmRhclwiKTtcbiAgICAgICAgY2FsZW5kYXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWxpbmVcIik7XG4gICAgICAgIGNhbGVuZGFyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1saW5rXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBjYWxlbmRhclBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBjYWxlbmRhclBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2NhbGVuZGFyLnBuZ1wiKTtcblxuICAgICAgICAgICAgY29uc3QgY2FsZW5kYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICAgICAgY2FsZW5kYXJUZXh0LnRleHRDb250ZW50ID0gXCJDYWxlbmRhclwiO1xuXG4gICAgICAgIGNhbGVuZGFyLmFwcGVuZENoaWxkKGNhbGVuZGFyUGljKTtcbiAgICAgICAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXJUZXh0KTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHByb2plY3RzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhci1wcm9qZWN0c1wiKTtcbiAgICAgICAgcHJvamVjdHMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWxpbmVcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIHByb2plY3RzUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvZXhwYW5kX2NpcmNsZV9kb3duLnBuZ1wiKTtcbiAgICAgICAgICAgIHByb2plY3RzUGljLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtcGljXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgICAgICBwcm9qZWN0c1RleHQudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cbiAgICAgICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNQaWMpO1xuICAgICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0c1RleHQpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RzTGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXItbGlzdFwiKTtcblxuICAgICAgICBjb25zdCBhZGRQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYWRkUHJvai5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXItYWRkXCIpO1xuICAgICAgICBhZGRQcm9qLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1saW5lXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBhZGRQcm9qUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGFkZFByb2pQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9mb2xkZXJfbmV3LnBuZ1wiKTtcblxuICAgICAgICAgICAgY29uc3QgYWRkUHJvalRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgICAgICBhZGRQcm9qVGV4dC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcblxuICAgICAgICBhZGRQcm9qLmFwcGVuZENoaWxkKGFkZFByb2pQaWMpO1xuICAgICAgICBhZGRQcm9qLmFwcGVuZENoaWxkKGFkZFByb2pUZXh0KTtcblxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaW5ib3gpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodG9kYXkpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2opO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1wcm9qZWN0c1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gcHJvamVjdHNQaWMuc3JjO1xuICAgICAgICBjb25zdCByZWdFeCA9IC9hcnJvd19jaXJjbGVfcmlnaHQucG5nJC87XG5cbiAgICAgICAgaWYgKHJlZ0V4LnRlc3Qoc3RhdGUpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItbGlzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdHMtY2xvc2VkXCIpO1xuICAgICAgICAgICAgcHJvamVjdHNQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9leHBhbmRfY2lyY2xlX2Rvd24ucG5nXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWxpc3RcIikuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWNsb3NlZFwiKTtcbiAgICAgICAgICAgIHByb2plY3RzUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvYXJyb3dfY2lyY2xlX3JpZ2h0LnBuZ1wiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2socHJvamVjdERhdGEpIHtcbiAgICBjb25zdCB0YXNrU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrU2NyZWVuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1zY3JlZW5cIik7XG4gICAgdGFza1NjcmVlbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvcHVwLXNjcmVlblwiKTtcblxuICAgICAgICBjb25zdCB0YXNrUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza1Byb21wdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stcHJvbXB0XCIpO1xuICAgICAgICB0YXNrUHJvbXB0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicG9wdXAtcHJvbXB0XCIpO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBsb2dUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBsb2dUYXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXQtZmllbGRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1uYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2s6XCI7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLW5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tGaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1uYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRmllbGQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgVGFza1wiKTtcblxuICAgICAgICAgICAgICAgIGxvZ1Rhc2suYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcbiAgICAgICAgICAgICAgICBsb2dUYXNrLmFwcGVuZENoaWxkKHRhc2tGaWVsZCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBsb2dEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBsb2dEYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXQtZmllbGRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGF0ZS1uYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZS1uYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGUtbmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlRmllbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIyMDIyLTEwLTAzXCIpO1xuXG4gICAgICAgICAgICAgICAgbG9nRGF0ZS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgICAgICAgICAgICAgIGxvZ0RhdGUuYXBwZW5kQ2hpbGQoZGF0ZUZpZWxkKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGxvZ1Byb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGxvZ1Byb2ouc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dC1maWVsZFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb2pMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qLW5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb2pMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdDpcIjtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qRmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qLW5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb2pGaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvai1uYW1lXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2pGaWVsZC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbG9nUHJvai5hcHBlbmRDaGlsZChwcm9qTGFiZWwpO1xuICAgICAgICAgICAgICAgIGxvZ1Byb2ouYXBwZW5kQ2hpbGQocHJvakZpZWxkKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgdGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stc3VibWl0XCIpO1xuICAgICAgICAgICAgICAgIHRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICAgICAgICAgICAgICB0YXNrU3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQUREIFRBU0tcIik7XG5cbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobG9nVGFzayk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ0RhdGUpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsb2dQcm9qKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza1N1Ym1pdCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGNsb3NlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2xvc2UtdGFza1wiKTtcbiAgICAgICAgICAgIGNsb3NlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uLWNsb3NlXCIpO1xuICAgICAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGFza1NjcmVlbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRhc2tQcm9tcHQuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgIHRhc2tQcm9tcHQuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG4gICAgdGFza1NjcmVlbi5hcHBlbmRDaGlsZCh0YXNrUHJvbXB0KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhc2tTY3JlZW4pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IHRhc2sgPSB0YXNrRmllbGQudmFsdWU7XG4gICAgICAgIGxldCBkYXRlID0gZGF0ZUZpZWxkLnZhbHVlO1xuICAgICAgICBsZXQgdGFza1Byb2ogPSBwcm9qRmllbGQudmFsdWU7XG5cbiAgICAgICAgaWYgKCF0YXNrKSB7XG4gICAgICAgICAgICB0YXNrID0gXCJOZXcgVGFza1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2ssIGRhdGUsIHRhc2tQcm9qKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdERhdGEpIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSB0YXNrUHJvaikge1xuICAgICAgICAgICAgICAgIHByb2plY3RbXCJ0YXNrc1wiXS5wdXNoKG5ld1Rhc2spO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFza1NjcmVlbi5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGNsYXNzIFRhc2sge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0YXNrLCBkYXRlLCBwcm9qZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xuICAgICAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kYXkocHJvamVjdERhdGEpIHtcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RheVwiKTtcbiAgICB0b2RheS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3QtY29udGVudFwiKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0LXRpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICAgICAgXG4gICAgdG9kYXkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC13cmFwcGVyXCIpO1xuICAgIGxpc3QuaW5zZXJ0QmVmb3JlKHRvZGF5LCBsaXN0LmNoaWxkcmVuWzBdKTtcbn0iLCJ2YXIgbnVtZXJpYyA9IGZ1bmN0aW9uICh2YWx1ZSwgdW5pdCkgeyByZXR1cm4gTnVtYmVyKHZhbHVlLnNsaWNlKDAsIC0xICogdW5pdC5sZW5ndGgpKTsgfTtcblxudmFyIHBhcnNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoJ3B4JykpXG4gICAgICAgIHsgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCB0eXBlOiAncHgnLCBudW1lcmljOiBudW1lcmljKHZhbHVlLCAncHgnKSB9IH1cbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoJ2ZyJykpXG4gICAgICAgIHsgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCB0eXBlOiAnZnInLCBudW1lcmljOiBudW1lcmljKHZhbHVlLCAnZnInKSB9IH1cbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoJyUnKSlcbiAgICAgICAgeyByZXR1cm4geyB2YWx1ZTogdmFsdWUsIHR5cGU6ICclJywgbnVtZXJpYzogbnVtZXJpYyh2YWx1ZSwgJyUnKSB9IH1cbiAgICBpZiAodmFsdWUgPT09ICdhdXRvJykgeyByZXR1cm4geyB2YWx1ZTogdmFsdWUsIHR5cGU6ICdhdXRvJyB9IH1cbiAgICByZXR1cm4gbnVsbFxufTtcblxudmFyIHBhcnNlID0gZnVuY3Rpb24gKHJ1bGUpIHsgcmV0dXJuIHJ1bGUuc3BsaXQoJyAnKS5tYXAocGFyc2VWYWx1ZSk7IH07XG5cbnZhciBnZXRTaXplQXRUcmFjayA9IGZ1bmN0aW9uIChpbmRleCwgdHJhY2tzLCBnYXAsIGVuZCkge1xuICAgIGlmICggZ2FwID09PSB2b2lkIDAgKSB7IGdhcCA9IDA7IH1cbiAgICBpZiAoIGVuZCA9PT0gdm9pZCAwICkgeyBlbmQgPSBmYWxzZTsgfVxuXG4gICAgdmFyIG5ld0luZGV4ID0gZW5kID8gaW5kZXggKyAxIDogaW5kZXg7XG4gICAgdmFyIHRyYWNrU3VtID0gdHJhY2tzXG4gICAgICAgIC5zbGljZSgwLCBuZXdJbmRleClcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYWNjdW0sIHZhbHVlKSB7IHJldHVybiBhY2N1bSArIHZhbHVlLm51bWVyaWM7IH0sIDApO1xuICAgIHZhciBnYXBTdW0gPSBnYXAgPyBpbmRleCAqIGdhcCA6IDA7XG5cbiAgICByZXR1cm4gdHJhY2tTdW0gKyBnYXBTdW1cbn07XG5cbnZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiAocnVsZSwgb3duUnVsZXMsIG1hdGNoZWRSdWxlcykgeyByZXR1cm4gb3duUnVsZXMuY29uY2F0KCBtYXRjaGVkUnVsZXMpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIuc3R5bGVbcnVsZV07IH0pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHN0eWxlKSB7IHJldHVybiBzdHlsZSAhPT0gdW5kZWZpbmVkICYmIHN0eWxlICE9PSAnJzsgfSk7IH07XG5cbnZhciBnZXRHYXBWYWx1ZSA9IGZ1bmN0aW9uICh1bml0LCBzaXplKSB7XG4gICAgaWYgKHNpemUuZW5kc1dpdGgodW5pdCkpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcihzaXplLnNsaWNlKDAsIC0xICogdW5pdC5sZW5ndGgpKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxufTtcblxudmFyIGZpcnN0Tm9uWmVybyA9IGZ1bmN0aW9uICh0cmFja3MpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHJhY2tzW2ldLm51bWVyaWMgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gaVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG59O1xuXG52YXIgTk9PUCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9O1xuXG52YXIgZGVmYXVsdFdyaXRlU3R5bGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgZ3JpZFRlbXBsYXRlUHJvcCwgc3R5bGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBlbGVtZW50LnN0eWxlW2dyaWRUZW1wbGF0ZVByb3BdID0gc3R5bGU7XG59O1xuXG52YXIgZ2V0T3B0aW9uID0gZnVuY3Rpb24gKG9wdGlvbnMsIHByb3BOYW1lLCBkZWYpIHtcbiAgICB2YXIgdmFsdWUgPSBvcHRpb25zW3Byb3BOYW1lXTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIGRlZlxufTtcblxuZnVuY3Rpb24gZ2V0TWF0Y2hlZENTU1J1bGVzIChlbCkge1xuICAgICAgICB2YXIgcmVmO1xuXG4gICAgICAgIHJldHVybiAocmVmID0gW10pXG4gICAgICAgIC5jb25jYXQuYXBwbHkoXG4gICAgICAgICAgICByZWYsIEFycmF5LmZyb20oZWwub3duZXJEb2N1bWVudC5zdHlsZVNoZWV0cykubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJ1bGVzID0gW107XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydWxlcyA9IEFycmF5LmZyb20ocy5jc3NSdWxlcyB8fCBbXSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcmVzdWx0cyBvbiBzZWN1cml0eSBlcnJvclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBydWxlc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gZWwubWF0Y2hlcyhyLnNlbGVjdG9yVGV4dCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIG1hdGNoaW5nIGVycm9zXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXG4gICAgICAgIH0pO1xufVxuXG52YXIgZ3JpZFRlbXBsYXRlUHJvcENvbHVtbnMgPSAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJztcbnZhciBncmlkVGVtcGxhdGVQcm9wUm93cyA9ICdncmlkLXRlbXBsYXRlLXJvd3MnO1xuXG52YXIgR3V0dGVyID0gZnVuY3Rpb24gR3V0dGVyKGRpcmVjdGlvbiwgb3B0aW9ucywgcGFyZW50T3B0aW9ucykge1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHRoaXMuZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcbiAgICB0aGlzLnRyYWNrID0gb3B0aW9ucy50cmFjaztcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdjb2x1bW4nKSB7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlUHJvcCA9IGdyaWRUZW1wbGF0ZVByb3BDb2x1bW5zO1xuICAgICAgICB0aGlzLmdyaWRHYXBQcm9wID0gJ2dyaWQtY29sdW1uLWdhcCc7XG4gICAgICAgIHRoaXMuY3Vyc29yID0gZ2V0T3B0aW9uKFxuICAgICAgICAgICAgcGFyZW50T3B0aW9ucyxcbiAgICAgICAgICAgICdjb2x1bW5DdXJzb3InLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdjdXJzb3InLCAnY29sLXJlc2l6ZScpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc25hcE9mZnNldCA9IGdldE9wdGlvbihcbiAgICAgICAgICAgIHBhcmVudE9wdGlvbnMsXG4gICAgICAgICAgICAnY29sdW1uU25hcE9mZnNldCcsXG4gICAgICAgICAgICBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ3NuYXBPZmZzZXQnLCAzMClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kcmFnSW50ZXJ2YWwgPSBnZXRPcHRpb24oXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAgICAgJ2NvbHVtbkRyYWdJbnRlcnZhbCcsXG4gICAgICAgICAgICBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ2RyYWdJbnRlcnZhbCcsIDEpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2xpZW50QXhpcyA9ICdjbGllbnRYJztcbiAgICAgICAgdGhpcy5vcHRpb25TdHlsZSA9IGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnZ3JpZFRlbXBsYXRlQ29sdW1ucycpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncm93Jykge1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVByb3AgPSBncmlkVGVtcGxhdGVQcm9wUm93cztcbiAgICAgICAgdGhpcy5ncmlkR2FwUHJvcCA9ICdncmlkLXJvdy1nYXAnO1xuICAgICAgICB0aGlzLmN1cnNvciA9IGdldE9wdGlvbihcbiAgICAgICAgICAgIHBhcmVudE9wdGlvbnMsXG4gICAgICAgICAgICAncm93Q3Vyc29yJyxcbiAgICAgICAgICAgIGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnY3Vyc29yJywgJ3Jvdy1yZXNpemUnKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNuYXBPZmZzZXQgPSBnZXRPcHRpb24oXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAgICAgJ3Jvd1NuYXBPZmZzZXQnLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdzbmFwT2Zmc2V0JywgMzApXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZHJhZ0ludGVydmFsID0gZ2V0T3B0aW9uKFxuICAgICAgICAgICAgcGFyZW50T3B0aW9ucyxcbiAgICAgICAgICAgICdyb3dEcmFnSW50ZXJ2YWwnLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdkcmFnSW50ZXJ2YWwnLCAxKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNsaWVudEF4aXMgPSAnY2xpZW50WSc7XG4gICAgICAgIHRoaXMub3B0aW9uU3R5bGUgPSBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ2dyaWRUZW1wbGF0ZVJvd3MnKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uRHJhZ1N0YXJ0ID0gZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdvbkRyYWdTdGFydCcsIE5PT1ApO1xuICAgIHRoaXMub25EcmFnRW5kID0gZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdvbkRyYWdFbmQnLCBOT09QKTtcbiAgICB0aGlzLm9uRHJhZyA9IGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnb25EcmFnJywgTk9PUCk7XG4gICAgdGhpcy53cml0ZVN0eWxlID0gZ2V0T3B0aW9uKFxuICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAnd3JpdGVTdHlsZScsXG4gICAgICAgIGRlZmF1bHRXcml0ZVN0eWxlXG4gICAgKTtcblxuICAgIHRoaXMuc3RhcnREcmFnZ2luZyA9IHRoaXMuc3RhcnREcmFnZ2luZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RvcERyYWdnaW5nID0gdGhpcy5zdG9wRHJhZ2dpbmcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYWcgPSB0aGlzLmRyYWcuYmluZCh0aGlzKTtcblxuICAgIHRoaXMubWluU2l6ZVN0YXJ0ID0gb3B0aW9ucy5taW5TaXplU3RhcnQ7XG4gICAgdGhpcy5taW5TaXplRW5kID0gb3B0aW9ucy5taW5TaXplRW5kO1xuXG4gICAgaWYgKG9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zdGFydERyYWdnaW5nKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLnN0YXJ0RHJhZ2dpbmcpO1xuICAgIH1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uIGdldERpbWVuc2lvbnMgKCkge1xuICAgIHZhciByZWYgPSB0aGlzLmdyaWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciB3aWR0aCA9IHJlZi53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IHJlZi5oZWlnaHQ7XG4gICAgICAgIHZhciB0b3AgPSByZWYudG9wO1xuICAgICAgICB2YXIgYm90dG9tID0gcmVmLmJvdHRvbTtcbiAgICAgICAgdmFyIGxlZnQgPSByZWYubGVmdDtcbiAgICAgICAgdmFyIHJpZ2h0ID0gcmVmLnJpZ2h0O1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnY29sdW1uJykge1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdG9wO1xuICAgICAgICB0aGlzLmVuZCA9IGJvdHRvbTtcbiAgICAgICAgdGhpcy5zaXplID0gaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdyb3cnKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLmVuZCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLnNpemUgPSB3aWR0aDtcbiAgICB9XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldFNpemVBdFRyYWNrID0gZnVuY3Rpb24gZ2V0U2l6ZUF0VHJhY2skMSAodHJhY2ssIGVuZCkge1xuICAgIHJldHVybiBnZXRTaXplQXRUcmFjayhcbiAgICAgICAgdHJhY2ssXG4gICAgICAgIHRoaXMuY29tcHV0ZWRQaXhlbHMsXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHMsXG4gICAgICAgIGVuZFxuICAgIClcbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0U2l6ZU9mVHJhY2sgPSBmdW5jdGlvbiBnZXRTaXplT2ZUcmFjayAodHJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5jb21wdXRlZFBpeGVsc1t0cmFja10ubnVtZXJpY1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5nZXRSYXdUcmFja3MgPSBmdW5jdGlvbiBnZXRSYXdUcmFja3MgKCkge1xuICAgIHZhciB0cmFja3MgPSBnZXRTdHlsZXMoXG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlUHJvcCxcbiAgICAgICAgW3RoaXMuZ3JpZF0sXG4gICAgICAgIGdldE1hdGNoZWRDU1NSdWxlcyh0aGlzLmdyaWQpXG4gICAgKTtcbiAgICBpZiAoIXRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uU3R5bGUpIHsgcmV0dXJuIHRoaXMub3B0aW9uU3R5bGUgfVxuXG4gICAgICAgIHRocm93IEVycm9yKCdVbmFibGUgdG8gZGV0ZXJtaW5lIGdyaWQgdGVtcGxhdGUgdHJhY2tzIGZyb20gc3R5bGVzLicpXG4gICAgfVxuICAgIHJldHVybiB0cmFja3NbMF1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0R2FwID0gZnVuY3Rpb24gZ2V0R2FwICgpIHtcbiAgICB2YXIgZ2FwID0gZ2V0U3R5bGVzKFxuICAgICAgICB0aGlzLmdyaWRHYXBQcm9wLFxuICAgICAgICBbdGhpcy5ncmlkXSxcbiAgICAgICAgZ2V0TWF0Y2hlZENTU1J1bGVzKHRoaXMuZ3JpZClcbiAgICApO1xuICAgIGlmICghZ2FwLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gZ2FwWzBdXG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldFJhd0NvbXB1dGVkVHJhY2tzID0gZnVuY3Rpb24gZ2V0UmF3Q29tcHV0ZWRUcmFja3MgKCkge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdyaWQpW3RoaXMuZ3JpZFRlbXBsYXRlUHJvcF1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0UmF3Q29tcHV0ZWRHYXAgPSBmdW5jdGlvbiBnZXRSYXdDb21wdXRlZEdhcCAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ3JpZClbdGhpcy5ncmlkR2FwUHJvcF1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuc2V0VHJhY2tzID0gZnVuY3Rpb24gc2V0VHJhY2tzIChyYXcpIHtcbiAgICB0aGlzLnRyYWNrcyA9IHJhdy5zcGxpdCgnICcpO1xuICAgIHRoaXMudHJhY2tWYWx1ZXMgPSBwYXJzZShyYXcpO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zZXRDb21wdXRlZFRyYWNrcyA9IGZ1bmN0aW9uIHNldENvbXB1dGVkVHJhY2tzIChyYXcpIHtcbiAgICB0aGlzLmNvbXB1dGVkVHJhY2tzID0gcmF3LnNwbGl0KCcgJyk7XG4gICAgdGhpcy5jb21wdXRlZFBpeGVscyA9IHBhcnNlKHJhdyk7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLnNldEdhcCA9IGZ1bmN0aW9uIHNldEdhcCAocmF3KSB7XG4gICAgdGhpcy5nYXAgPSByYXc7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLnNldENvbXB1dGVkR2FwID0gZnVuY3Rpb24gc2V0Q29tcHV0ZWRHYXAgKHJhdykge1xuICAgIHRoaXMuY29tcHV0ZWRHYXAgPSByYXc7XG4gICAgdGhpcy5jb21wdXRlZEdhcFBpeGVscyA9IGdldEdhcFZhbHVlKCdweCcsIHRoaXMuY29tcHV0ZWRHYXApIHx8IDA7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldE1vdXNlUG9zaXRpb24gPSBmdW5jdGlvbiBnZXRNb3VzZVBvc2l0aW9uIChlKSB7XG4gICAgaWYgKCd0b3VjaGVzJyBpbiBlKSB7IHJldHVybiBlLnRvdWNoZXNbMF1bdGhpcy5jbGllbnRBeGlzXSB9XG4gICAgcmV0dXJuIGVbdGhpcy5jbGllbnRBeGlzXVxufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zdGFydERyYWdnaW5nID0gZnVuY3Rpb24gc3RhcnREcmFnZ2luZyAoZSkge1xuICAgIGlmICgnYnV0dG9uJyBpbiBlICYmIGUuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIERvbid0IGFjdHVhbGx5IGRyYWcgdGhlIGVsZW1lbnQuIFdlIGVtdWxhdGUgdGhhdCBpbiB0aGUgZHJhZyBmdW5jdGlvbi5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgdGhpcy5nZXREaW1lbnNpb25zKCk7XG4gICAgdGhpcy5zZXRUcmFja3ModGhpcy5nZXRSYXdUcmFja3MoKSk7XG4gICAgdGhpcy5zZXRDb21wdXRlZFRyYWNrcyh0aGlzLmdldFJhd0NvbXB1dGVkVHJhY2tzKCkpO1xuICAgIHRoaXMuc2V0R2FwKHRoaXMuZ2V0R2FwKCkpO1xuICAgIHRoaXMuc2V0Q29tcHV0ZWRHYXAodGhpcy5nZXRSYXdDb21wdXRlZEdhcCgpKTtcblxuICAgIHZhciB0cmFja1BlcmNlbnRhZ2UgPSB0aGlzLnRyYWNrVmFsdWVzLmZpbHRlcihcbiAgICAgICAgZnVuY3Rpb24gKHRyYWNrKSB7IHJldHVybiB0cmFjay50eXBlID09PSAnJSc7IH1cbiAgICApO1xuICAgIHZhciB0cmFja0ZyID0gdGhpcy50cmFja1ZhbHVlcy5maWx0ZXIoZnVuY3Rpb24gKHRyYWNrKSB7IHJldHVybiB0cmFjay50eXBlID09PSAnZnInOyB9KTtcblxuICAgIHRoaXMudG90YWxGcnMgPSB0cmFja0ZyLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLnRvdGFsRnJzKSB7XG4gICAgICAgIHZhciB0cmFjayA9IGZpcnN0Tm9uWmVybyh0cmFja0ZyKTtcblxuICAgICAgICBpZiAodHJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZnJUb1BpeGVscyA9XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlZFBpeGVsc1t0cmFja10ubnVtZXJpYyAvIHRyYWNrRnJbdHJhY2tdLm51bWVyaWM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHJhY2tQZXJjZW50YWdlLmxlbmd0aCkge1xuICAgICAgICB2YXIgdHJhY2skMSA9IGZpcnN0Tm9uWmVybyh0cmFja1BlcmNlbnRhZ2UpO1xuXG4gICAgICAgIGlmICh0cmFjayQxICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmNlbnRhZ2VUb1BpeGVscyA9XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlZFBpeGVsc1t0cmFjayQxXS5udW1lcmljIC9cbiAgICAgICAgICAgICAgICB0cmFja1BlcmNlbnRhZ2VbdHJhY2skMV0ubnVtZXJpYztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCBzdGFydCBvZiBndXR0ZXIgdHJhY2tcbiAgICB2YXIgZ3V0dGVyU3RhcnQgPSB0aGlzLmdldFNpemVBdFRyYWNrKHRoaXMudHJhY2ssIGZhbHNlKSArIHRoaXMuc3RhcnQ7XG4gICAgdGhpcy5kcmFnU3RhcnRPZmZzZXQgPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oZSkgLSBndXR0ZXJTdGFydDtcblxuICAgIHRoaXMuYVRyYWNrID0gdGhpcy50cmFjayAtIDE7XG5cbiAgICBpZiAodGhpcy50cmFjayA8IHRoaXMudHJhY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5iVHJhY2sgPSB0aGlzLnRyYWNrICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAgIChcIkludmFsaWQgdHJhY2sgaW5kZXg6IFwiICsgKHRoaXMudHJhY2spICsgXCIuIFRyYWNrIG11c3QgYmUgYmV0d2VlbiB0d28gb3RoZXIgdHJhY2tzIGFuZCBvbmx5IFwiICsgKHRoaXMudHJhY2tzLmxlbmd0aCkgKyBcIiB0cmFja3Mgd2VyZSBmb3VuZC5cIilcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHRoaXMuYVRyYWNrU3RhcnQgPSB0aGlzLmdldFNpemVBdFRyYWNrKHRoaXMuYVRyYWNrLCBmYWxzZSkgKyB0aGlzLnN0YXJ0O1xuICAgIHRoaXMuYlRyYWNrRW5kID0gdGhpcy5nZXRTaXplQXRUcmFjayh0aGlzLmJUcmFjaywgdHJ1ZSkgKyB0aGlzLnN0YXJ0O1xuXG4gICAgLy8gU2V0IHRoZSBkcmFnZ2luZyBwcm9wZXJ0eSBvZiB0aGUgcGFpciBvYmplY3QuXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cbiAgICAvLyBBbGwgdGhlIGJpbmRpbmcuIGB3aW5kb3dgIGdldHMgdGhlIHN0b3AgZXZlbnRzIGluIGNhc2Ugd2UgZHJhZyBvdXQgb2YgdGhlIGVsZW1lbnRzLlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZyk7XG5cbiAgICAvLyBEaXNhYmxlIHNlbGVjdGlvbi4gRGlzYWJsZSFcbiAgICB0aGlzLmdyaWQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0c3RhcnQnLCBOT09QKTtcbiAgICB0aGlzLmdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgTk9PUCk7XG5cbiAgICB0aGlzLmdyaWQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICB0aGlzLmdyaWQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICdub25lJztcbiAgICB0aGlzLmdyaWQuc3R5bGUuTW96VXNlclNlbGVjdCA9ICdub25lJztcbiAgICB0aGlzLmdyaWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblxuICAgIC8vIFNldCB0aGUgY3Vyc29yIGF0IG11bHRpcGxlIGxldmVsc1xuICAgIHRoaXMuZ3JpZC5zdHlsZS5jdXJzb3IgPSB0aGlzLmN1cnNvcjtcbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSB0aGlzLmN1cnNvcjtcblxuICAgIHRoaXMub25EcmFnU3RhcnQodGhpcy5kaXJlY3Rpb24sIHRoaXMudHJhY2spO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zdG9wRHJhZ2dpbmcgPSBmdW5jdGlvbiBzdG9wRHJhZ2dpbmcgKCkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIC8vIFJlbW92ZSB0aGUgc3RvcmVkIGV2ZW50IGxpc3RlbmVycy4gVGhpcyBpcyB3aHkgd2Ugc3RvcmUgdGhlbS5cbiAgICB0aGlzLmNsZWFudXAoKTtcblxuICAgIHRoaXMub25EcmFnRW5kKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnRyYWNrKTtcblxuICAgIGlmICh0aGlzLm5lZWRzRGVzdHJveSkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAnbW91c2Vkb3duJyxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAndG91Y2hzdGFydCcsXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdHJveUNiKCk7XG4gICAgICAgIHRoaXMubmVlZHNEZXN0cm95ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVzdHJveUNiID0gbnVsbDtcbiAgICB9XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmRyYWcgPSBmdW5jdGlvbiBkcmFnIChlKSB7XG4gICAgdmFyIG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oZSk7XG5cbiAgICB2YXIgZ3V0dGVyU2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mVHJhY2sodGhpcy50cmFjayk7XG4gICAgdmFyIG1pbk1vdXNlUG9zaXRpb24gPVxuICAgICAgICB0aGlzLmFUcmFja1N0YXJ0ICtcbiAgICAgICAgdGhpcy5taW5TaXplU3RhcnQgK1xuICAgICAgICB0aGlzLmRyYWdTdGFydE9mZnNldCArXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHM7XG4gICAgdmFyIG1heE1vdXNlUG9zaXRpb24gPVxuICAgICAgICB0aGlzLmJUcmFja0VuZCAtXG4gICAgICAgIHRoaXMubWluU2l6ZUVuZCAtXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHMgLVxuICAgICAgICAoZ3V0dGVyU2l6ZSAtIHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0KTtcbiAgICB2YXIgbWluTW91c2VQb3NpdGlvbk9mZnNldCA9IG1pbk1vdXNlUG9zaXRpb24gKyB0aGlzLnNuYXBPZmZzZXQ7XG4gICAgdmFyIG1heE1vdXNlUG9zaXRpb25PZmZzZXQgPSBtYXhNb3VzZVBvc2l0aW9uIC0gdGhpcy5zbmFwT2Zmc2V0O1xuXG4gICAgaWYgKG1vdXNlUG9zaXRpb24gPCBtaW5Nb3VzZVBvc2l0aW9uT2Zmc2V0KSB7XG4gICAgICAgIG1vdXNlUG9zaXRpb24gPSBtaW5Nb3VzZVBvc2l0aW9uO1xuICAgIH1cblxuICAgIGlmIChtb3VzZVBvc2l0aW9uID4gbWF4TW91c2VQb3NpdGlvbk9mZnNldCkge1xuICAgICAgICBtb3VzZVBvc2l0aW9uID0gbWF4TW91c2VQb3NpdGlvbjtcbiAgICB9XG5cbiAgICBpZiAobW91c2VQb3NpdGlvbiA8IG1pbk1vdXNlUG9zaXRpb24pIHtcbiAgICAgICAgbW91c2VQb3NpdGlvbiA9IG1pbk1vdXNlUG9zaXRpb247XG4gICAgfSBlbHNlIGlmIChtb3VzZVBvc2l0aW9uID4gbWF4TW91c2VQb3NpdGlvbikge1xuICAgICAgICBtb3VzZVBvc2l0aW9uID0gbWF4TW91c2VQb3NpdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgYVRyYWNrU2l6ZSA9XG4gICAgICAgIG1vdXNlUG9zaXRpb24gLVxuICAgICAgICB0aGlzLmFUcmFja1N0YXJ0IC1cbiAgICAgICAgdGhpcy5kcmFnU3RhcnRPZmZzZXQgLVxuICAgICAgICB0aGlzLmNvbXB1dGVkR2FwUGl4ZWxzO1xuICAgIHZhciBiVHJhY2tTaXplID1cbiAgICAgICAgdGhpcy5iVHJhY2tFbmQgLVxuICAgICAgICBtb3VzZVBvc2l0aW9uICtcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRPZmZzZXQgLVxuICAgICAgICBndXR0ZXJTaXplIC1cbiAgICAgICAgdGhpcy5jb21wdXRlZEdhcFBpeGVscztcblxuICAgIGlmICh0aGlzLmRyYWdJbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgdmFyIGFUcmFja1NpemVJbnRlcnZhbGVkID1cbiAgICAgICAgICAgIE1hdGgucm91bmQoYVRyYWNrU2l6ZSAvIHRoaXMuZHJhZ0ludGVydmFsKSAqIHRoaXMuZHJhZ0ludGVydmFsO1xuICAgICAgICBiVHJhY2tTaXplIC09IGFUcmFja1NpemVJbnRlcnZhbGVkIC0gYVRyYWNrU2l6ZTtcbiAgICAgICAgYVRyYWNrU2l6ZSA9IGFUcmFja1NpemVJbnRlcnZhbGVkO1xuICAgIH1cblxuICAgIGlmIChhVHJhY2tTaXplIDwgdGhpcy5taW5TaXplU3RhcnQpIHtcbiAgICAgICAgYVRyYWNrU2l6ZSA9IHRoaXMubWluU2l6ZVN0YXJ0O1xuICAgIH1cblxuICAgIGlmIChiVHJhY2tTaXplIDwgdGhpcy5taW5TaXplRW5kKSB7XG4gICAgICAgIGJUcmFja1NpemUgPSB0aGlzLm1pblNpemVFbmQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHJhY2tWYWx1ZXNbdGhpcy5hVHJhY2tdLnR5cGUgPT09ICdweCcpIHtcbiAgICAgICAgdGhpcy50cmFja3NbdGhpcy5hVHJhY2tdID0gYVRyYWNrU2l6ZSArIFwicHhcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMudHJhY2tWYWx1ZXNbdGhpcy5hVHJhY2tdLnR5cGUgPT09ICdmcicpIHtcbiAgICAgICAgaWYgKHRoaXMudG90YWxGcnMgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYVRyYWNrXSA9ICcxZnInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhcmdldEZyID0gYVRyYWNrU2l6ZSAvIHRoaXMuZnJUb1BpeGVscztcbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYVRyYWNrXSA9IHRhcmdldEZyICsgXCJmclwiO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRyYWNrVmFsdWVzW3RoaXMuYVRyYWNrXS50eXBlID09PSAnJScpIHtcbiAgICAgICAgdmFyIHRhcmdldFBlcmNlbnRhZ2UgPSBhVHJhY2tTaXplIC8gdGhpcy5wZXJjZW50YWdlVG9QaXhlbHM7XG4gICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYVRyYWNrXSA9IHRhcmdldFBlcmNlbnRhZ2UgKyBcIiVcIjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50cmFja1ZhbHVlc1t0aGlzLmJUcmFja10udHlwZSA9PT0gJ3B4Jykge1xuICAgICAgICB0aGlzLnRyYWNrc1t0aGlzLmJUcmFja10gPSBiVHJhY2tTaXplICsgXCJweFwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy50cmFja1ZhbHVlc1t0aGlzLmJUcmFja10udHlwZSA9PT0gJ2ZyJykge1xuICAgICAgICBpZiAodGhpcy50b3RhbEZycyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy50cmFja3NbdGhpcy5iVHJhY2tdID0gJzFmcic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0RnIkMSA9IGJUcmFja1NpemUgLyB0aGlzLmZyVG9QaXhlbHM7XG4gICAgICAgICAgICB0aGlzLnRyYWNrc1t0aGlzLmJUcmFja10gPSB0YXJnZXRGciQxICsgXCJmclwiO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRyYWNrVmFsdWVzW3RoaXMuYlRyYWNrXS50eXBlID09PSAnJScpIHtcbiAgICAgICAgdmFyIHRhcmdldFBlcmNlbnRhZ2UkMSA9IGJUcmFja1NpemUgLyB0aGlzLnBlcmNlbnRhZ2VUb1BpeGVscztcbiAgICAgICAgdGhpcy50cmFja3NbdGhpcy5iVHJhY2tdID0gdGFyZ2V0UGVyY2VudGFnZSQxICsgXCIlXCI7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0gdGhpcy50cmFja3Muam9pbignICcpO1xuICAgIHRoaXMud3JpdGVTdHlsZSh0aGlzLmdyaWQsIHRoaXMuZ3JpZFRlbXBsYXRlUHJvcCwgc3R5bGUpO1xuICAgIHRoaXMub25EcmFnKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnRyYWNrLCBzdHlsZSk7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWcpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWcpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICB0aGlzLmdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0c3RhcnQnLCBOT09QKTtcbiAgICAgICAgdGhpcy5ncmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIE5PT1ApO1xuXG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS51c2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG5cbiAgICAgICAgdGhpcy5ncmlkLnN0eWxlLmN1cnNvciA9ICcnO1xuICAgIH1cblxuICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICcnO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoaW1tZWRpYXRlLCBjYikge1xuICAgICAgICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gdHJ1ZTtcblxuICAgIGlmIChpbW1lZGlhdGUgfHwgdGhpcy5kcmFnZ2luZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICdtb3VzZWRvd24nLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5lZWRzRGVzdHJveSA9IHRydWU7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95Q2IgPSBjYjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBnZXRUcmFja09wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zLCB0cmFjaywgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHRyYWNrIGluIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNbdHJhY2tdXG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxufTtcblxudmFyIGNyZWF0ZUd1dHRlciA9IGZ1bmN0aW9uIChkaXJlY3Rpb24sIG9wdGlvbnMpIHsgcmV0dXJuIGZ1bmN0aW9uIChndXR0ZXJPcHRpb25zKSB7XG4gICAgaWYgKGd1dHRlck9wdGlvbnMudHJhY2sgPCAxKSB7XG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgKFwiSW52YWxpZCB0cmFjayBpbmRleDogXCIgKyAoZ3V0dGVyT3B0aW9ucy50cmFjaykgKyBcIi4gVHJhY2sgbXVzdCBiZSBiZXR3ZWVuIHR3byBvdGhlciB0cmFja3MuXCIpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICB2YXIgdHJhY2tNaW5TaXplcyA9XG4gICAgICAgIGRpcmVjdGlvbiA9PT0gJ2NvbHVtbidcbiAgICAgICAgICAgID8gb3B0aW9ucy5jb2x1bW5NaW5TaXplcyB8fCB7fVxuICAgICAgICAgICAgOiBvcHRpb25zLnJvd01pblNpemVzIHx8IHt9O1xuICAgIHZhciB0cmFja01pblNpemUgPSBkaXJlY3Rpb24gPT09ICdjb2x1bW4nID8gJ2NvbHVtbk1pblNpemUnIDogJ3Jvd01pblNpemUnO1xuXG4gICAgcmV0dXJuIG5ldyBHdXR0ZXIoXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwge21pblNpemVTdGFydDogZ2V0VHJhY2tPcHRpb24oXG4gICAgICAgICAgICAgICAgdHJhY2tNaW5TaXplcyxcbiAgICAgICAgICAgICAgICBndXR0ZXJPcHRpb25zLnRyYWNrIC0gMSxcbiAgICAgICAgICAgICAgICBnZXRPcHRpb24oXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrTWluU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uKG9wdGlvbnMsICdtaW5TaXplJywgMClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWluU2l6ZUVuZDogZ2V0VHJhY2tPcHRpb24oXG4gICAgICAgICAgICAgICAgdHJhY2tNaW5TaXplcyxcbiAgICAgICAgICAgICAgICBndXR0ZXJPcHRpb25zLnRyYWNrICsgMSxcbiAgICAgICAgICAgICAgICBnZXRPcHRpb24oXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrTWluU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uKG9wdGlvbnMsICdtaW5TaXplJywgMClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfSxcbiAgICAgICAgICAgIGd1dHRlck9wdGlvbnMpLFxuICAgICAgICBvcHRpb25zXG4gICAgKVxufTsgfTtcblxudmFyIEdyaWQgPSBmdW5jdGlvbiBHcmlkKG9wdGlvbnMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHRoaXMuY29sdW1uR3V0dGVycyA9IHt9O1xuICAgIHRoaXMucm93R3V0dGVycyA9IHt9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwge2NvbHVtbkd1dHRlcnM6IG9wdGlvbnMuY29sdW1uR3V0dGVycyB8fCBbXSxcbiAgICAgICAgcm93R3V0dGVyczogb3B0aW9ucy5yb3dHdXR0ZXJzIHx8IFtdLFxuICAgICAgICBjb2x1bW5NaW5TaXplczogb3B0aW9ucy5jb2x1bW5NaW5TaXplcyB8fCB7fSxcbiAgICAgICAgcm93TWluU2l6ZXM6IG9wdGlvbnMucm93TWluU2l6ZXMgfHwge319LFxuICAgICAgICBvcHRpb25zKTtcblxuICAgIHRoaXMub3B0aW9ucy5jb2x1bW5HdXR0ZXJzLmZvckVhY2goZnVuY3Rpb24gKGd1dHRlck9wdGlvbnMpIHtcbiAgICAgICAgdGhpcyQxLmNvbHVtbkd1dHRlcnNbZ3V0dGVyT3B0aW9ucy50cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICAgICAnY29sdW1uJyxcbiAgICAgICAgICAgIHRoaXMkMS5vcHRpb25zXG4gICAgICAgICkoZ3V0dGVyT3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wdGlvbnMucm93R3V0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChndXR0ZXJPcHRpb25zKSB7XG4gICAgICAgIHRoaXMkMS5yb3dHdXR0ZXJzW2d1dHRlck9wdGlvbnMudHJhY2tdID0gY3JlYXRlR3V0dGVyKFxuICAgICAgICAgICAgJ3JvdycsXG4gICAgICAgICAgICB0aGlzJDEub3B0aW9uc1xuICAgICAgICApKGd1dHRlck9wdGlvbnMpO1xuICAgIH0pO1xufTtcblxuR3JpZC5wcm90b3R5cGUuYWRkQ29sdW1uR3V0dGVyID0gZnVuY3Rpb24gYWRkQ29sdW1uR3V0dGVyIChlbGVtZW50LCB0cmFjaykge1xuICAgIGlmICh0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICdjb2x1bW4nLFxuICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICApKHtcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgIH0pO1xufTtcblxuR3JpZC5wcm90b3R5cGUuYWRkUm93R3V0dGVyID0gZnVuY3Rpb24gYWRkUm93R3V0dGVyIChlbGVtZW50LCB0cmFjaykge1xuICAgIGlmICh0aGlzLnJvd0d1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICdyb3cnLFxuICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICApKHtcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgIH0pO1xufTtcblxuR3JpZC5wcm90b3R5cGUucmVtb3ZlQ29sdW1uR3V0dGVyID0gZnVuY3Rpb24gcmVtb3ZlQ29sdW1uR3V0dGVyICh0cmFjaywgaW1tZWRpYXRlKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgICAgICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10uZGVzdHJveShpbW1lZGlhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzJDEuY29sdW1uR3V0dGVyc1t0cmFja107XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbkdyaWQucHJvdG90eXBlLnJlbW92ZVJvd0d1dHRlciA9IGZ1bmN0aW9uIHJlbW92ZVJvd0d1dHRlciAodHJhY2ssIGltbWVkaWF0ZSkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICAgICAgaWYgKCBpbW1lZGlhdGUgPT09IHZvaWQgMCApIGltbWVkaWF0ZSA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5yb3dHdXR0ZXJzW3RyYWNrXSkge1xuICAgICAgICB0aGlzLnJvd0d1dHRlcnNbdHJhY2tdLmRlc3Ryb3koaW1tZWRpYXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcyQxLnJvd0d1dHRlcnNbdHJhY2tdO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5HcmlkLnByb3RvdHlwZS5oYW5kbGVEcmFnU3RhcnQgPSBmdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQgKGUsIGRpcmVjdGlvbiwgdHJhY2spIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnY29sdW1uJykge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXSkge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdID0gY3JlYXRlR3V0dGVyKFxuICAgICAgICAgICAgJ2NvbHVtbicsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgKSh7XG4gICAgICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdLnN0YXJ0RHJhZ2dpbmcoZSk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyb3cnKSB7XG4gICAgICAgIGlmICh0aGlzLnJvd0d1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgICAgICB0aGlzLnJvd0d1dHRlcnNbdHJhY2tdLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICAgICAncm93JyxcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICApKHtcbiAgICAgICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10uc3RhcnREcmFnZ2luZyhlKTtcbiAgICB9XG59O1xuXG5HcmlkLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoaW1tZWRpYXRlKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgICAgICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gdHJ1ZTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuY29sdW1uR3V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHsgcmV0dXJuIHRoaXMkMS5jb2x1bW5HdXR0ZXJzW3RyYWNrXS5kZXN0cm95KGltbWVkaWF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMkMS5jb2x1bW5HdXR0ZXJzW3RyYWNrXTtcbiAgICAgICAgfSk7IH1cbiAgICApO1xuICAgIE9iamVjdC5rZXlzKHRoaXMucm93R3V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHsgcmV0dXJuIHRoaXMkMS5yb3dHdXR0ZXJzW3RyYWNrXS5kZXN0cm95KGltbWVkaWF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMkMS5yb3dHdXR0ZXJzW3RyYWNrXTtcbiAgICAgICAgfSk7IH1cbiAgICApO1xufTtcblxuZnVuY3Rpb24gaW5kZXggKG9wdGlvbnMpIHsgcmV0dXJuIG5ldyBHcmlkKG9wdGlvbnMpOyB9XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXIuanNcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL3NpZGViYXIuanNcIjtcbmltcG9ydCBDb250ZW50IGZyb20gXCIuL2NvbnRlbnQuanNcIjtcbmltcG9ydCBHdXR0ZXJzIGZyb20gXCIuL2d1dHRlcnMuanNcIjtcbmltcG9ydCBTcGxpdCBmcm9tIFwic3BsaXQtZ3JpZFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IFwiLi4vZGlzdC9jc3MvbWFpbi5jc3NcIjtcblxuY29uc3QgdXNlckRhdGEgPSBbXTtcbmNvbnN0IHByb2plY3REYXRhID0gW107XG5cbkhlYWRlcih1c2VyRGF0YSk7XG5TaWRlYmFyKCk7XG5Db250ZW50KHByb2plY3REYXRhKTtcbkd1dHRlcnMoKTtcblNwbGl0KHtcbiAgICBtYXhTaXplOiAyMDAsXG4gICAgY29sdW1uR3V0dGVyczogW3tcbiAgICAgICAgdHJhY2s6IDEsXG4gICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3V0dGVyLWNvbFwiKVxuICAgIH1dLFxuICAgIHJvd0d1dHRlcnM6IFt7XG4gICAgICAgIHRyYWNrOiAxLFxuICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1dHRlci1yb3dcIilcbiAgICB9XVxufSk7XG5Qcm9qZWN0KHByb2plY3REYXRhKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=