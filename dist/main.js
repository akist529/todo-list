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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@-webkit-keyframes header-spawn {\n  0% {\n    transform: translateY(-500px);\n  }\n  50% {\n    transform: translateY(20px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes header-spawn {\n  0% {\n    transform: translateY(-500px);\n  }\n  50% {\n    transform: translateY(20px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes sidebar-spawn {\n  0% {\n    transform: translateX(-500px);\n  }\n  50% {\n    transform: translateX(20px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n@keyframes sidebar-spawn {\n  0% {\n    transform: translateX(-500px);\n  }\n  50% {\n    transform: translateX(20px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n@-webkit-keyframes list-spawn {\n  from {\n    transform: translateY(1000px);\n  }\n  to {\n    transform: translateY(0px);\n  }\n}\n@keyframes list-spawn {\n  from {\n    transform: translateY(1000px);\n  }\n  to {\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes prompt-spawn {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n@keyframes prompt-spawn {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n@-webkit-keyframes day-spawn {\n  0% {\n    top: 100%;\n    left: 100%;\n  }\n  100% {\n    top: 0%;\n    left: 0%;\n  }\n}\n@keyframes day-spawn {\n  0% {\n    top: 100%;\n    left: 100%;\n  }\n  100% {\n    top: 0%;\n    left: 0%;\n  }\n}\n@-webkit-keyframes content-despawn {\n  0% {\n    opacity: 100%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n@keyframes content-despawn {\n  0% {\n    opacity: 100%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n@-webkit-keyframes content-respawn {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: 0%;\n  }\n}\n@keyframes content-respawn {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: 0%;\n  }\n}\n.button-close {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgb(194, 27, 27);\n  color: white;\n  font-size: 2rem;\n  font-weight: 700;\n  height: 50px;\n  width: 50px;\n  border-top-left-radius: 25px;\n  border-bottom-right-radius: 10px;\n}\n\n.proj-selected {\n  scale: 90%;\n}\n\n.month-toggle:nth-of-type(1) {\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n}\n\n.month-toggle:nth-of-type(2) {\n  border-top-right-radius: 50%;\n  border-bottom-right-radius: 50%;\n}\n\n* {\n  font-family: \"Karla\";\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr;\n  background-color: lightgrey;\n  position: relative;\n}\nbody #content {\n  width: auto;\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 2px 4fr;\n  grid-template-columns: 1fr 2px 4fr;\n  z-index: 0;\n}\nbody #content #header {\n  -webkit-animation: header-spawn;\n          animation: header-spawn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  gap: 0;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  background: lightgrey;\n  padding: 5px 0;\n  transform: translateY(-500px);\n  z-index: 2;\n}\nbody #content #header h1 {\n  font-size: 4rem;\n}\nbody #content #header #header-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\nbody #content #header #header-buttons button {\n  border-style: none;\n  border-radius: 5px;\n  border-color: black;\n  border-width: medium;\n  font-family: \"Roboto Mono\";\n  font-size: 1rem;\n  padding: 20px 40px;\n}\nbody #content #header #header-buttons button:hover {\n  scale: 90%;\n}\nbody #content #header #header-buttons #login-button {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\nbody #content #header #header-buttons #menu-button {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  padding: 20px 40px;\n  transition: 0.25s;\n}\nbody #content #header #header-buttons #menu-button:hover {\n  padding: 20px 120px;\n  transition: 0.25s;\n}\nbody #content #sidebar {\n  -webkit-animation: sidebar-spawn;\n          animation: sidebar-spawn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  display: grid;\n  grid-template-rows: repeat(4, minmax(50px, 80px)) auto minmax(50px, 80px);\n  grid-template-columns: 1fr;\n  grid-row: 3/4;\n  grid-column: 1/2;\n  background: lightgrey;\n  justify-content: center;\n  margin-left: auto;\n  padding: 20px;\n  position: relative;\n  z-index: 1;\n}\nbody #content #sidebar button {\n  border-style: none;\n  border-radius: none;\n  border-color: black;\n  border-width: medium;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  font-family: inherit;\n  font-size: 1.25rem;\n  background: rgba(0, 0, 0, 0);\n}\nbody #content #sidebar button:hover {\n  cursor: pointer;\n  scale: 90%;\n}\nbody #content #sidebar body #content #sidebar-inbox {\n  grid-row: 1/2;\n  grid-column: 1/-1;\n}\nbody #content #sidebar body #content #sidebar-today {\n  grid-row: 2/3;\n  grid-column: 1/-1;\n}\nbody #content #sidebar body #content #sidebar-calendar {\n  grid-row: 3/4;\n  grid-column: 1/-1;\n}\nbody #content #sidebar body #content #sidebar-projects {\n  grid-row: 4/5;\n  grid-column: 1/-1;\n}\nbody #content #sidebar #sidebar-list {\n  grid-row: 5/6;\n  grid-column: 1/-1;\n  height: auto;\n}\nbody #content #sidebar #sidebar-list button {\n  border-style: none;\n  border-radius: none;\n  border-color: black;\n  border-width: medium;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  font-family: \"Roboto Mono\";\n  font-size: 1.25rem;\n  background-color: rgba(0, 0, 0, 0);\n  padding-left: 20%;\n}\nbody #content #sidebar #sidebar-list button img {\n  height: 2rem;\n}\nbody #content #sidebar body #content #sidebar-add {\n  grid-row: 6/7;\n  grid-column: 1/-1;\n}\nbody #content #sidebar .projects-closed {\n  display: none;\n}\nbody #content #sidebar div:empty {\n  display: none;\n}\nbody #content #content-wrapper {\n  -webkit-animation: list-spawn;\n          animation: list-spawn;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  grid-row: 3/4;\n  grid-column: 3/4;\n  min-width: 65vw;\n  min-height: 5vh;\n  background: white;\n  position: relative;\n  z-index: 0;\n}\nbody #content #content-wrapper #reset-layout {\n  border-style: none;\n  border-radius: 0;\n  border-color: black;\n  border-width: medium;\n  top: auto;\n  right: 0%;\n  bottom: 0%;\n  left: auto;\n  background: rgba(0, 0, 0, 0);\n  position: absolute;\n  transition: 0.25s;\n}\nbody #content #content-wrapper #reset-layout:hover {\n  top: auto;\n  right: 2%;\n  bottom: 2%;\n  left: auto;\n  cursor: pointer;\n  scale: 120%;\n}\nbody #content #content-wrapper #inbox {\n  width: auto;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  position: relative;\n}\nbody #content #content-wrapper #today {\n  width: auto;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  position: relative;\n}\nbody #content #content-wrapper #calendar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  position: relative;\n}\nbody #content #content-wrapper #calendar #calendar-grid {\n  width: auto;\n  height: 100%;\n  display: grid;\n  grid-template-rows: 50px 50px 1fr;\n  grid-template-columns: 1fr;\n  position: relative;\n}\nbody #content #content-wrapper #calendar #calendar-grid h2, body #content #content-wrapper #calendar #calendar-grid h3, body #content #content-wrapper #calendar #calendar-grid div {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n}\nbody #content #content-wrapper #calendar #calendar-grid #calendar-month {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n}\nbody #content #content-wrapper #calendar #calendar-grid #calendar-month button {\n  border-style: none;\n  border-radius: 0;\n  border-color: black;\n  border-width: medium;\n  padding: 10px;\n}\nbody #content #content-wrapper #calendar #calendar-grid #calendar-headers {\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: repeat(7, 1fr);\n  grid-row: 2/3;\n  grid-column: 1/-1;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper {\n  border-style: none;\n  border-radius: 25px;\n  border-color: black;\n  border-width: medium;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: stretch;\n  gap: 0;\n  grid-row: 3/4;\n  grid-column: 1/-1;\n  position: relative;\n  overflow: hidden;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #calendar-days {\n  display: grid;\n  grid-template-rows: repeat(6, 65px);\n  grid-template-columns: repeat(7, 65px);\n  position: relative;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #calendar-days button {\n  width: 65px;\n  height: 65px;\n  font-family: inherit;\n  font-size: 1.5rem;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  transition: 0.25s;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #calendar-days button:hover {\n  border-style: none;\n  border-radius: 15%;\n  border-color: black;\n  border-width: medium;\n  font-family: inherit;\n  font-size: 2.5rem;\n  scale: 120%;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected {\n  -webkit-animation: day-spawn;\n          animation: day-spawn;\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  border-style: none;\n  border-radius: 25px;\n  border-color: black;\n  border-width: medium;\n  display: grid;\n  grid-template-rows: 0.1fr 0.1fr;\n  grid-template-columns: 0.9fr;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: lightgrey;\n  position: absolute;\n  z-index: 2;\n  overflow: scroll;\n  grid-auto-rows: 0.1fr;\n  gap: 10px;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected .calendar-task {\n  border-style: solid;\n  border-radius: 0;\n  border-color: rgba(0, 0, 0, 0.4);\n  border-width: 2px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  font-family: inherit;\n  font-size: 1.5rem;\n  background: white;\n  padding: 5px;\n  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected .calendar-task button {\n  border-style: none;\n  border-radius: 0;\n  border-color: black;\n  border-width: medium;\n  background: rgba(0, 0, 0, 0);\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected .calendar-task button img {\n  height: 2rem;\n  transition: 0.2s;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected .calendar-task button img:hover {\n  cursor: pointer;\n  height: 1.75rem;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected .calendar-task .task-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 10px;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected #close-day {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n  position: absolute;\n}\nbody #content #content-wrapper #calendar #calendar-grid #days-wrapper #day-selected #day-num-selected {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  font-family: inherit;\n  font-size: 3rem;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  position: relative;\n  top: 0;\n}\nbody #content #content-wrapper .list-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n}\nbody #content #content-wrapper .list-content #add-task {\n  border-style: none;\n  border-radius: 0;\n  border-color: black;\n  border-width: medium;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-family: inherit;\n  font-size: 1.25rem;\n  padding: 10px 20px;\n}\nbody #content #content-wrapper .list-content #add-task img {\n  height: 36px;\n}\nbody #content #gutter-col {\n  -webkit-animation: sidebar-spawn;\n          animation: sidebar-spawn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  width: 2px;\n  height: auto;\n  grid-row: 3/4;\n  grid-column: 2/3;\n  background: black;\n  justify-self: center;\n  position: relative;\n  transition: 0.5s;\n  z-index: 1;\n}\nbody #content #gutter-col:hover {\n  width: 15px;\n  height: auto;\n  cursor: col-resize;\n}\nbody #content #gutter-row {\n  -webkit-animation: header-spawn;\n          animation: header-spawn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  width: auto;\n  height: 2px;\n  grid-row: 2/3;\n  grid-column: 1/-1;\n  align-self: center;\n  background: black;\n  position: relative;\n  transition: 0.5s;\n  z-index: 2;\n}\nbody #content #gutter-row:hover {\n  width: auto;\n  height: 15px;\n  cursor: row-resize;\n}\nbody .popup-screen {\n  -webkit-animation: prompt-spawn;\n          animation: prompt-spawn;\n  -webkit-animation-duration: 0.25s;\n          animation-duration: 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 0;\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  z-index: 1;\n}\nbody .popup-screen .popup-prompt {\n  -webkit-animation: header-spawn;\n          animation: header-spawn;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  border-style: none;\n  border-radius: 25px;\n  border-color: black;\n  border-width: medium;\n  width: 500px;\n  height: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  background: white;\n  box-shadow: 5px 5px 20px #000000;\n}\nbody .popup-screen .popup-prompt form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 10px;\n}\nbody .popup-screen .popup-prompt form .input-field {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 0;\n}/*# sourceMappingURL=main.css.map */", "",{"version":3,"sources":["webpack://./scss/_reset.scss","webpack://./dist/css/main.css","webpack://./scss/_animations.scss","webpack://./scss/_buttons.scss","webpack://./scss/_colors.scss","webpack://./scss/main.scss","webpack://./scss/_mixins.scss","webpack://./scss/_typography.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;ACGJ;;ACNA;EACI;IACI,6BAAA;EDSN;ECRI;IACE,2BAAA;EDUN;ECTI;IACE,0BAAA;EDWN;AACF;;AClBA;EACI;IACI,6BAAA;EDSN;ECRI;IACE,2BAAA;EDUN;ECTI;IACE,0BAAA;EDWN;AACF;ACRA;EACI;IACI,6BAAA;EDUN;ECRE;IACI,2BAAA;EDUN;ECRE;IACI,0BAAA;EDUN;AACF;ACnBA;EACI;IACI,6BAAA;EDUN;ECRE;IACI,2BAAA;EDUN;ECRE;IACI,0BAAA;EDUN;AACF;ACPA;EACI;IACI,6BAAA;EDSN;ECPE;IACI,0BAAA;EDSN;AACF;ACfA;EACI;IACI,6BAAA;EDSN;ECPE;IACI,0BAAA;EDSN;AACF;ACNA;EACI;IACI,WAAA;EDQN;ECPI;IACE,aAAA;EDSN;AACF;ACdA;EACI;IACI,WAAA;EDQN;ECPI;IACE,aAAA;EDSN;AACF;ACNA;EACI;IACI,SAAA;IACA,UAAA;EDQN;ECPI;IACE,OAAA;IACA,QAAA;EDSN;AACF;AChBA;EACI;IACI,SAAA;IACA,UAAA;EDQN;ECPI;IACE,OAAA;IACA,QAAA;EDSN;AACF;ACNA;EACI;IACI,aAAA;EDQN;ECPI;IACE,WAAA;EDSN;AACF;ACdA;EACI;IACI,aAAA;EDQN;ECPI;IACE,WAAA;EDSN;AACF;ACNA;EACI;IACI,SAAA;EDQN;ECPI;IACE,OAAA;EDSN;AACF;ACdA;EACI;IACI,SAAA;EDQN;ECPI;IACE,OAAA;EDSN;AACF;AErEA;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EAEA,kCCFO;EDGP,YCDS;EDET,eAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,4BAAA;EACA,gCAAA;AFsEJ;;AEnEA;EACI,UAAA;AFsEJ;;AEnEA;EACI,2BAAA;EACA,8BAAA;AFsEJ;;AEnEA;EACI,4BAAA;EACA,+BAAA;AFsEJ;;AI1FA;EACI,oBAAA;AJ6FJ;;AI1FA;ECHI,aAAA;EACA,uBDGc;ECFd,0BDEmB;EACnB,2BDXS;ECYT,kBAAA;AJ+FJ;AI7FI;ECGA,WDFkB;ECGlB,aDHwB;ECTxB,aAAA;EACA,+BDSkB;ECRlB,kCDQ+B;EAC3B,UAAA;AJkGR;AIhGQ;EC2BJ,+BD1B2B;UC0B3B,uBD1B2B;EC2B3B,8BD3ByC;UC2BzC,sBD3ByC;EC4BzC,qCD5B6C;UC4B7C,6BD5B6C;ECtB7C,aAAA;EACA,mBDsBsB;ECrBtB,6BDqB2B;ECpB3B,mBDoByC;ECnBzC,MALkE;EAelE,aDU0B;ECT1B,iBDSkC;EAC1B,qBDvBC;ECwBD,cAAA;EACA,6BAAA;EACA,UAAA;AJyGZ;AIvGY;EACI,eAAA;AJyGhB;AItGY;EClCR,aAAA;EACA,mBDkC0B;ECjC1B,uBDiC+B;EChC/B,mBDgCuC;EC/BvC,SD+B+C;AJ4GnD;AI1GgB;ECIZ,kBDHgC;ECIhC,kBDJsC;ECKtC,mBAHwD;EAIxD,oBAJyC;EAXzC,0BC3BS;ED4BT,eDS2C;EAC3B,kBAAA;AJgHpB;AI9GoB;EACI,UAAA;AJgHxB;AI5GgB;EC/CZ,aAAA;EACA,mBD+C8B;EC9C9B,uBD8CmC;EC7CnC,mBD6C2C;EC5C3C,SD4CmD;AJkHvD;AI/GgB;ECnDZ,aAAA;EACA,mBDmD8B;EClD9B,uBDkDmC;ECjDnC,mBDiD2C;EChD3C,MALkE;EDsDlD,kBAAA;EACA,iBAAA;AJqHpB;AInHoB;EACI,mBAAA;EACA,iBAAA;AJqHxB;AI/GQ;EChBJ,gCDiB2B;UCjB3B,wBDiB2B;EChB3B,8BDgB0C;UChB1C,sBDgB0C;ECf1C,qCDe8C;UCf9C,6BDe8C;ECzD9C,aAAA;EACA,yEDyDsB;ECxDtB,0BDwD6E;ECpD7E,aDqD0B;ECpD1B,gBDoDkC;EAC1B,qBDlEC;ECmED,uBAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;EACA,UAAA;AJsHZ;AIpHY;EClCR,kBDmC4B;EClC5B,mBDkCkC;ECjClC,mBAHwD;EAIxD,oBAJyC;EAxCzC,aAAA;EACA,mBD4E0B;EC3E1B,2BD2E+B;EC1E/B,mBD0E2C;ECzE3C,SDyEmD;EChDnD,oBDiD0B;EChD1B,kBDgDmC;EACvB,4BDhFF;AH8Md;AI5HgB;EACI,eAAA;EACA,UAAA;AJ8HpB;AI1HY;ECzER,aD0E8B;ECzE9B,iBDyEsC;AJ6H1C;AI1HY;EC7ER,aD8E8B;EC7E9B,iBD6EsC;AJ6H1C;AI1HY;ECjFR,aDkF8B;ECjF9B,iBDiFsC;AJ6H1C;AI1HY;ECrFR,aDsF8B;ECrF9B,iBDqFsC;AJ6H1C;AI1HY;ECzFR,aD0F8B;ECzF9B,iBDyFsC;EAC1B,YAAA;AJ6HhB;AI3HgB;EClEZ,kBDmEgC;EClEhC,mBDkEsC;ECjEtC,mBAHwD;EAIxD,oBAJyC;EAxCzC,aAAA;EACA,mBD4G8B;EC3G9B,uBD2GmC;EC1GnC,mBD0G2C;ECzG3C,QDyGmD;EChFnD,0BC3BS;ED4BT,kBDgF2C;EAC3B,kCDhHN;ECiHM,iBAAA;AJqIpB;AInIoB;EACI,YAAA;AJqIxB;AIhIY;EC1GR,aD2G8B;EC1G9B,iBD0GsC;AJmI1C;AIhIY;EACI,aAAA;AJkIhB;AI/HY;EACI,aAAA;AJiIhB;AI7HQ;ECrFJ,6BDsF2B;UCtF3B,qBDsF2B;ECrF3B,gCDqFuC;UCrFvC,wBDqFuC;ECpFvC,qCDoF6C;UCpF7C,6BDoF6C;ECtI7C,aAAA;EACA,mBDsIsB;ECrItB,uBDqI2B;ECpI3B,mBDoImC;ECnInC,MALkE;EAelE,aD0H0B;ECzH1B,gBDyHkC;EChHlC,eDiH0B;EChH1B,eDgHgC;EACxB,iBAAA;EACA,kBAAA;EACA,UAAA;AJuIZ;AIrIY;ECrGR,kBDsG4B;ECrG5B,gBAF+B;EAG/B,mBAHwD;EAIxD,oBAJyC;EANzC,SD8G8B;EC7G9B,SD6GoC;EC5GpC,UD4GwC;EC3GxC,UD2G4C;EAChC,4BDlJF;ECmJE,kBAAA;EACA,iBAAA;AJ6IhB;AI3IgB;ECnHZ,SDoHkC;ECnHlC,SDmHwC;EClHxC,UDkH4C;ECjH5C,UDiHgD;EAChC,eAAA;EACA,WAAA;AJgJpB;AI5IY;ECzIR,WD0I0B;ECzI1B,YDyIgC;EC7JhC,aAAA;EACA,sBD6J0B;EC5J1B,uBD4JkC;EC3JlC,mBD2J0C;EC1J1C,MALkE;EDgKtD,kBAAA;AJmJhB;AIhJY;EC/IR,WDgJ0B;EC/I1B,YD+IgC;ECnKhC,aAAA;EACA,sBDmK0B;EClK1B,uBDkKkC;ECjKlC,mBDiK0C;EChK1C,MALkE;EDsKtD,kBAAA;AJuJhB;AIpJY;ECxKR,aAAA;EACA,sBDwK0B;ECvK1B,uBDuKkC;ECtKlC,mBDsK0C;ECrK1C,MALkE;ED2KtD,kBAAA;AJ0JhB;AIxJgB;ECzJZ,WD0J8B;ECzJ9B,YDyJoC;ECrKpC,aAAA;EACA,iCDqK8B;ECpK9B,0BDoK6C;EAC7B,kBAAA;AJ6JpB;AI3JoB;ECjLhB,aAAA;EACA,mBDiLkC;EChLlC,uBDgLuC;EC/KvC,mBD+K+C;EC9K/C,MALkE;ALoVtE;AI9JoB;ECrLhB,aAAA;EACA,mBDqLkC;ECpLlC,8BDoLuC;ECnLvC,mBDmLsD;EClLtD,MALkE;EAelE,aDyKsC;ECxKtC,iBDwK8C;AJqKlD;AInKwB;EChJpB,kBDiJwC;EChJxC,gBAF+B;EAG/B,mBAHwD;EAIxD,oBAJyC;EDmJjB,aAAA;AJwK5B;AIpKoB;ECvLhB,aAAA;EACA,uBDuLkC;ECtLlC,qCDsLuC;EClLvC,aDmLsC;EClLtC,iBDkL8C;AJyKlD;AItKoB;EC3JhB,kBD4JoC;EC3JpC,mBD2J0C;EC1J1C,mBAHwD;EAIxD,oBAJyC;EAxCzC,aAAA;EACA,mBDqMkC;ECpMlC,uBDoMuC;ECnMvC,oBDmM+C;EClM/C,MALkE;EAelE,aDyLsC;ECxLtC,iBDwL8C;EAC1B,kBAAA;EACA,gBAAA;AJgLxB;AI9KwB;ECnMpB,aAAA;EACA,mCDmMsC;EClMtC,sCDkMuD;EAC/B,kBAAA;AJkL5B;AIhL4B;EC5LxB,WD6L0C;EC5L1C,YD4LgD;ECnLhD,oBDoL0C;ECnL1C,iBDmLmD;EACvB,oCAAA;EACA,iBAAA;AJoLhC;AIlLgC;EC5K5B,kBD6KgD;EC5KhD,kBD4KsD;EC3KtD,mBAHwD;EAIxD,oBAJyC;EAXzC,oBD0L8C;ECzL9C,iBDyLuD;EACvB,WAAA;AJwLpC;AInLwB;EC7KpB,4BD8K2C;UC9K3C,oBD8K2C;EC7K3C,gCD6KsD;UC7KtD,wBD6KsD;EC5KtD,qCD4K4D;UC5K5D,6BD4K4D;ECrL5D,kBDsLwC;ECrLxC,mBDqL8C;ECpL9C,mBAHwD;EAIxD,oBAJyC;EAhCzC,aAAA;EACA,+BDuNsC;ECtNtC,4BDsNmD;EC9LnD,MD+L0C;EC9L1C,QD8L6C;EC7L7C,SD6LgD;EC5LhD,OD4LmD;EAC3B,2BAAA;EACA,kBAAA;EACA,UAAA;EACA,gBAAA;EACA,qBAAA;EACA,SAAA;AJ+L5B;AI7L4B;EChMxB,mBDiM4C;EChM5C,gBDgMmD;EC/LnD,gCD+L2D;EC9L3D,iBD8LsD;EC1OtD,aAAA;EACA,mBD0O0C;ECzO1C,8BDyO+C;ECxO/C,mBDwO8D;ECvO9D,SDuOsE;EC9MtE,oBD+M0C;EC9M1C,iBD8MmD;EACvB,iBAAA;EACA,YAAA;EACA,2CAAA;AJuMhC;AIrMgC;ECxM5B,kBDyMgD;ECxMhD,gBAF+B;EAG/B,mBAHwD;EAIxD,oBAJyC;ED2MT,4BDpPtB;AH8bd;AIxMoC;EACI,YAAA;EACA,gBAAA;AJ0MxC;AIxMwC;EACI,eAAA;EACA,eAAA;AJ0M5C;AIrMgC;EChQ5B,aAAA;EACA,sBDgQ8C;EC/P9C,2BD+PsD;EC9PtD,uBD8PkE;EC7PlE,SD6P8E;AJ2MlF;AIvM4B;ECnOxB,MDoO8C;ECnO9C,WDmOiD;EClOjD,YDkOuD;ECjOvD,ODiO6D;EACjC,kBAAA;AJ4MhC;AIzM4B;EC1QxB,aAAA;EACA,mBD0Q0C;ECzQ1C,uBDyQ+C;ECxQ/C,mBDwQuD;ECvQvD,MALkE;EA8BlE,oBD+O0C;EC9O1C,eD8OmD;EC9PnD,aD+P8C;EC9P9C,iBD8PsD;EAC1B,kBAAA;EACA,MAAA;AJiNhC;AI1MY;ECtRR,aAAA;EACA,sBDsR0B;ECrR1B,uBDqRkC;ECpRlC,mBDoR0C;ECnR1C,MALkE;ALwetE;AI9MgB;EChPZ,kBDiPgC;EChPhC,gBAF+B;EAG/B,mBAHwD;EAIxD,oBAJyC;EAxCzC,aAAA;EACA,mBD0R8B;ECzR9B,uBDyRmC;ECxRnC,mBDwR2C;ECvR3C,SDuRmD;EC9PnD,oBD+P8B;EC9P9B,kBD8PuC;EACvB,kBAAA;AJwNpB;AItNoB;EACI,YAAA;AJwNxB;AIlNQ;ECtPJ,gCDuP2B;UCvP3B,wBDuP2B;ECtP3B,8BDsP0C;UCtP1C,sBDsP0C;ECrP1C,qCDqP8C;UCrP9C,6BDqP8C;ECpR9C,UDqRsB;ECpRtB,YDoR2B;EC1R3B,aD2R0B;EC1R1B,gBD0RkC;EAC1B,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;AJwNZ;AItNY;EC7RR,WD8R0B;EC7R1B,YD6RgC;EACpB,kBAAA;AJyNhB;AIrNQ;ECtQJ,+BDuQ2B;UCvQ3B,uBDuQ2B;ECtQ3B,8BDsQyC;UCtQzC,sBDsQyC;ECrQzC,qCDqQ6C;UCrQ7C,6BDqQ6C;ECpS7C,WDqSsB;ECpStB,WDoS4B;EC1S5B,aD2S0B;EC1S1B,iBD0SkC;EAC1B,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;AJ2NZ;AIzNY;EC7SR,WD8S0B;EC7S1B,YD6SgC;EACpB,kBAAA;AJ4NhB;AIvNI;ECvRA,+BDwRuB;UCxRvB,uBDwRuB;ECvRvB,iCDuRqC;UCvRrC,yBDuRqC;ECtRrC,qCDsR4C;UCtR5C,6BDsR4C;ECrT5C,WDsTkB;ECrTlB,YDqTwB;ECzUxB,aAAA;EACA,mBDyUkB;ECxUlB,uBDwUuB;ECvUvB,mBDuU+B;ECtU/B,MALkE;ED4U9D,8BD3UE;EC4UF,kBAAA;EACA,UAAA;AJgOR;AI9NQ;EC/RJ,+BDgS2B;UChS3B,uBDgS2B;EC/R3B,gCD+RyC;UC/RzC,wBD+RyC;EC9RzC,qCD8R+C;UC9R/C,6BD8R+C;ECvS/C,kBDwSwB;ECvSxB,mBDuS8B;ECtS9B,mBAHwD;EAIxD,oBAJyC;EArBzC,YD+TsB;EC9TtB,aD8T6B;EClV7B,aAAA;EACA,sBDkVsB;ECjVtB,uBDiV8B;EChV9B,mBDgVsC;EC/UtC,QD+U8C;EACtC,iBAAA;EACA,gCAAA;AJ0OZ;AIxOY;ECvVR,aAAA;EACA,sBDuV0B;ECtV1B,6BDsVkC;ECrVlC,mBDqVgD;ECpVhD,SDoVwD;AJ8O5D;AI5OgB;EC1VZ,aAAA;EACA,mBD0V8B;ECzV9B,6BDyVmC;ECxVnC,mBDwViD;ECvVjD,MALkE;AL8kBtE,CAAA,mCAAA","sourceRoot":""}]);
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
            // All months that consist of 30 days
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
            document.getElementById("calendar-days").appendChild(newDay(i));
            // Highlight all days within the month (not previous/subsequent months)
            document.getElementById("calendar-days").lastChild.classList.add("active-day");
        }

        // Add previous month's days to fill the calendar
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

        // Add next month's days to fill the calendar
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
        let project = document.getElementById("proj-name").value;

        if (!task) {
            task = "New Task";
        }

        const newTask = new Task(task, date, project);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDJHQUEyRztBQUMzRyxxR0FBcUc7QUFDckc7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLDJCQUEyQixHQUFHLHFDQUFxQyxRQUFRLG9DQUFvQyxLQUFLLFNBQVMsa0NBQWtDLEtBQUssVUFBVSxpQ0FBaUMsS0FBSyxHQUFHLDZCQUE2QixRQUFRLG9DQUFvQyxLQUFLLFNBQVMsa0NBQWtDLEtBQUssVUFBVSxpQ0FBaUMsS0FBSyxHQUFHLG9DQUFvQyxRQUFRLG9DQUFvQyxLQUFLLFNBQVMsa0NBQWtDLEtBQUssVUFBVSxpQ0FBaUMsS0FBSyxHQUFHLDRCQUE0QixRQUFRLG9DQUFvQyxLQUFLLFNBQVMsa0NBQWtDLEtBQUssVUFBVSxpQ0FBaUMsS0FBSyxHQUFHLGlDQUFpQyxVQUFVLG9DQUFvQyxLQUFLLFFBQVEsaUNBQWlDLEtBQUssR0FBRyx5QkFBeUIsVUFBVSxvQ0FBb0MsS0FBSyxRQUFRLGlDQUFpQyxLQUFLLEdBQUcsbUNBQW1DLFFBQVEsa0JBQWtCLEtBQUssVUFBVSxvQkFBb0IsS0FBSyxHQUFHLDJCQUEyQixRQUFRLGtCQUFrQixLQUFLLFVBQVUsb0JBQW9CLEtBQUssR0FBRyxnQ0FBZ0MsUUFBUSxnQkFBZ0IsaUJBQWlCLEtBQUssVUFBVSxjQUFjLGVBQWUsS0FBSyxHQUFHLHdCQUF3QixRQUFRLGdCQUFnQixpQkFBaUIsS0FBSyxVQUFVLGNBQWMsZUFBZSxLQUFLLEdBQUcsc0NBQXNDLFFBQVEsb0JBQW9CLEtBQUssVUFBVSxrQkFBa0IsS0FBSyxHQUFHLDhCQUE4QixRQUFRLG9CQUFvQixLQUFLLFVBQVUsa0JBQWtCLEtBQUssR0FBRyxzQ0FBc0MsUUFBUSxnQkFBZ0IsS0FBSyxVQUFVLGNBQWMsS0FBSyxHQUFHLDhCQUE4QixRQUFRLGdCQUFnQixLQUFLLFVBQVUsY0FBYyxLQUFLLEdBQUcsaUJBQWlCLHVCQUF1QixXQUFXLFlBQVksdUNBQXVDLGlCQUFpQixvQkFBb0IscUJBQXFCLGlCQUFpQixnQkFBZ0IsaUNBQWlDLHFDQUFxQyxHQUFHLG9CQUFvQixlQUFlLEdBQUcsa0NBQWtDLGdDQUFnQyxtQ0FBbUMsR0FBRyxrQ0FBa0MsaUNBQWlDLG9DQUFvQyxHQUFHLE9BQU8sMkJBQTJCLEdBQUcsVUFBVSxrQkFBa0IsNEJBQTRCLCtCQUErQixnQ0FBZ0MsdUJBQXVCLEdBQUcsaUJBQWlCLGdCQUFnQixrQkFBa0Isa0JBQWtCLG9DQUFvQyx1Q0FBdUMsZUFBZSxHQUFHLHlCQUF5QixvQ0FBb0Msb0NBQW9DLG1DQUFtQyxtQ0FBbUMsMENBQTBDLDBDQUEwQyxrQkFBa0Isd0JBQXdCLGtDQUFrQyx3QkFBd0IsV0FBVyxrQkFBa0Isc0JBQXNCLDBCQUEwQixtQkFBbUIsa0NBQWtDLGVBQWUsR0FBRyw0QkFBNEIsb0JBQW9CLEdBQUcseUNBQXlDLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixjQUFjLEdBQUcsZ0RBQWdELHVCQUF1Qix1QkFBdUIsd0JBQXdCLHlCQUF5QixpQ0FBaUMsb0JBQW9CLHVCQUF1QixHQUFHLHNEQUFzRCxlQUFlLEdBQUcsdURBQXVELGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixjQUFjLEdBQUcsc0RBQXNELGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixXQUFXLHVCQUF1QixzQkFBc0IsR0FBRyw0REFBNEQsd0JBQXdCLHNCQUFzQixHQUFHLDBCQUEwQixxQ0FBcUMscUNBQXFDLG1DQUFtQyxtQ0FBbUMsMENBQTBDLDBDQUEwQyxrQkFBa0IsOEVBQThFLCtCQUErQixrQkFBa0IscUJBQXFCLDBCQUEwQiw0QkFBNEIsc0JBQXNCLGtCQUFrQix1QkFBdUIsZUFBZSxHQUFHLGlDQUFpQyx1QkFBdUIsd0JBQXdCLHdCQUF3Qix5QkFBeUIsa0JBQWtCLHdCQUF3QixnQ0FBZ0Msd0JBQXdCLGNBQWMseUJBQXlCLHVCQUF1QixpQ0FBaUMsR0FBRyx1Q0FBdUMsb0JBQW9CLGVBQWUsR0FBRyx1REFBdUQsa0JBQWtCLHNCQUFzQixHQUFHLHVEQUF1RCxrQkFBa0Isc0JBQXNCLEdBQUcsMERBQTBELGtCQUFrQixzQkFBc0IsR0FBRywwREFBMEQsa0JBQWtCLHNCQUFzQixHQUFHLHdDQUF3QyxrQkFBa0Isc0JBQXNCLGlCQUFpQixHQUFHLCtDQUErQyx1QkFBdUIsd0JBQXdCLHdCQUF3Qix5QkFBeUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLGFBQWEsaUNBQWlDLHVCQUF1Qix1Q0FBdUMsc0JBQXNCLEdBQUcsbURBQW1ELGlCQUFpQixHQUFHLHFEQUFxRCxrQkFBa0Isc0JBQXNCLEdBQUcsMkNBQTJDLGtCQUFrQixHQUFHLG9DQUFvQyxrQkFBa0IsR0FBRyxrQ0FBa0Msa0NBQWtDLGtDQUFrQyxxQ0FBcUMscUNBQXFDLDBDQUEwQywwQ0FBMEMsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLFdBQVcsa0JBQWtCLHFCQUFxQixvQkFBb0Isb0JBQW9CLHNCQUFzQix1QkFBdUIsZUFBZSxHQUFHLGdEQUFnRCx1QkFBdUIscUJBQXFCLHdCQUF3Qix5QkFBeUIsY0FBYyxjQUFjLGVBQWUsZUFBZSxpQ0FBaUMsdUJBQXVCLHNCQUFzQixHQUFHLHNEQUFzRCxjQUFjLGNBQWMsZUFBZSxlQUFlLG9CQUFvQixnQkFBZ0IsR0FBRyx5Q0FBeUMsZ0JBQWdCLGlCQUFpQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsV0FBVyx1QkFBdUIsR0FBRyx5Q0FBeUMsZ0JBQWdCLGlCQUFpQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsV0FBVyx1QkFBdUIsR0FBRyw0Q0FBNEMsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLFdBQVcsdUJBQXVCLEdBQUcsMkRBQTJELGdCQUFnQixpQkFBaUIsa0JBQWtCLHNDQUFzQywrQkFBK0IsdUJBQXVCLEdBQUcsdUxBQXVMLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixXQUFXLEdBQUcsMkVBQTJFLGtCQUFrQix3QkFBd0IsbUNBQW1DLHdCQUF3QixXQUFXLGtCQUFrQixzQkFBc0IsR0FBRyxrRkFBa0YsdUJBQXVCLHFCQUFxQix3QkFBd0IseUJBQXlCLGtCQUFrQixHQUFHLDZFQUE2RSxrQkFBa0IsNEJBQTRCLDBDQUEwQyxrQkFBa0Isc0JBQXNCLEdBQUcseUVBQXlFLHVCQUF1Qix3QkFBd0Isd0JBQXdCLHlCQUF5QixrQkFBa0Isd0JBQXdCLDRCQUE0Qix5QkFBeUIsV0FBVyxrQkFBa0Isc0JBQXNCLHVCQUF1QixxQkFBcUIsR0FBRyx3RkFBd0Ysa0JBQWtCLHdDQUF3QywyQ0FBMkMsdUJBQXVCLEdBQUcsK0ZBQStGLGdCQUFnQixpQkFBaUIseUJBQXlCLHNCQUFzQix5Q0FBeUMsc0JBQXNCLEdBQUcscUdBQXFHLHVCQUF1Qix1QkFBdUIsd0JBQXdCLHlCQUF5Qix5QkFBeUIsc0JBQXNCLGdCQUFnQixHQUFHLHVGQUF1RixpQ0FBaUMsaUNBQWlDLHFDQUFxQyxxQ0FBcUMsMENBQTBDLDBDQUEwQyx1QkFBdUIsd0JBQXdCLHdCQUF3Qix5QkFBeUIsa0JBQWtCLG9DQUFvQyxpQ0FBaUMsV0FBVyxhQUFhLGNBQWMsWUFBWSxnQ0FBZ0MsdUJBQXVCLGVBQWUscUJBQXFCLDBCQUEwQixjQUFjLEdBQUcsc0dBQXNHLHdCQUF3QixxQkFBcUIscUNBQXFDLHNCQUFzQixrQkFBa0Isd0JBQXdCLG1DQUFtQyx3QkFBd0IsY0FBYyx5QkFBeUIsc0JBQXNCLHNCQUFzQixpQkFBaUIsZ0RBQWdELEdBQUcsNkdBQTZHLHVCQUF1QixxQkFBcUIsd0JBQXdCLHlCQUF5QixpQ0FBaUMsR0FBRyxpSEFBaUgsaUJBQWlCLHFCQUFxQixHQUFHLHVIQUF1SCxvQkFBb0Isb0JBQW9CLEdBQUcsaUhBQWlILGtCQUFrQiwyQkFBMkIsZ0NBQWdDLDRCQUE0QixjQUFjLEdBQUcsa0dBQWtHLFdBQVcsZ0JBQWdCLGlCQUFpQixZQUFZLHVCQUF1QixHQUFHLHlHQUF5RyxrQkFBa0Isd0JBQXdCLDRCQUE0Qix3QkFBd0IsV0FBVyx5QkFBeUIsb0JBQW9CLGtCQUFrQixzQkFBc0IsdUJBQXVCLFdBQVcsR0FBRyxnREFBZ0Qsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLFdBQVcsR0FBRywwREFBMEQsdUJBQXVCLHFCQUFxQix3QkFBd0IseUJBQXlCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixjQUFjLHlCQUF5Qix1QkFBdUIsdUJBQXVCLEdBQUcsOERBQThELGlCQUFpQixHQUFHLDZCQUE2QixxQ0FBcUMscUNBQXFDLG1DQUFtQyxtQ0FBbUMsMENBQTBDLDBDQUEwQyxlQUFlLGlCQUFpQixrQkFBa0IscUJBQXFCLHNCQUFzQix5QkFBeUIsdUJBQXVCLHFCQUFxQixlQUFlLEdBQUcsbUNBQW1DLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcsNkJBQTZCLG9DQUFvQyxvQ0FBb0MsbUNBQW1DLG1DQUFtQywwQ0FBMEMsMENBQTBDLGdCQUFnQixnQkFBZ0Isa0JBQWtCLHNCQUFzQix1QkFBdUIsc0JBQXNCLHVCQUF1QixxQkFBcUIsZUFBZSxHQUFHLG1DQUFtQyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixHQUFHLHNCQUFzQixvQ0FBb0Msb0NBQW9DLHNDQUFzQyxzQ0FBc0MsMENBQTBDLDBDQUEwQyxnQkFBZ0IsaUJBQWlCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixXQUFXLG1DQUFtQyx1QkFBdUIsZUFBZSxHQUFHLG9DQUFvQyxvQ0FBb0Msb0NBQW9DLHFDQUFxQyxxQ0FBcUMsMENBQTBDLDBDQUEwQyx1QkFBdUIsd0JBQXdCLHdCQUF3Qix5QkFBeUIsaUJBQWlCLGtCQUFrQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsYUFBYSxzQkFBc0IscUNBQXFDLEdBQUcseUNBQXlDLGtCQUFrQiwyQkFBMkIsa0NBQWtDLHdCQUF3QixjQUFjLEdBQUcsc0RBQXNELGtCQUFrQix3QkFBd0Isa0NBQWtDLHdCQUF3QixXQUFXLEdBQUcsMkNBQTJDLHlUQUF5VCxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLGNBQWMsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLFlBQVksYUFBYSxlQUFlLGVBQWUsYUFBYSxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxhQUFhLGVBQWUsZUFBZSxjQUFjLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLGFBQWEsZUFBZSxlQUFlLGNBQWMsT0FBTyxPQUFPLFdBQVcsYUFBYSxlQUFlLGVBQWUsYUFBYSxhQUFhLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE1BQU0sY0FBYyxlQUFlLGVBQWUsZUFBZSxhQUFhLGFBQWEsWUFBWSxhQUFhLGVBQWUsY0FBYyxlQUFlLGFBQWEsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxjQUFjLGVBQWUsY0FBYyxhQUFhLFlBQVksYUFBYSxlQUFlLGVBQWUsY0FBYyxlQUFlLGVBQWUsYUFBYSxNQUFNLE9BQU8sVUFBVSxVQUFVLE9BQU8sTUFBTSxhQUFhLGVBQWUsT0FBTyxNQUFNLGFBQWEsZUFBZSxPQUFPLE1BQU0sYUFBYSxlQUFlLE9BQU8sTUFBTSxhQUFhLGVBQWUsT0FBTyxNQUFNLGFBQWEsZUFBZSxXQUFXLE9BQU8sT0FBTyxjQUFjLGVBQWUsY0FBYyxhQUFhLFlBQVksYUFBYSxlQUFlLGVBQWUsY0FBYyxjQUFjLGNBQWMsYUFBYSxZQUFZLE9BQU8sT0FBTyxVQUFVLE9BQU8sTUFBTSxhQUFhLGVBQWUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLGNBQWMsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLFlBQVksYUFBYSxlQUFlLGVBQWUsYUFBYSxhQUFhLGVBQWUsY0FBYyxjQUFjLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxjQUFjLGNBQWMsYUFBYSxZQUFZLFdBQVcsT0FBTyxPQUFPLGFBQWEsY0FBYyxjQUFjLGNBQWMsV0FBVyxVQUFVLE9BQU8sTUFBTSxhQUFhLGNBQWMsWUFBWSxhQUFhLGVBQWUsZUFBZSxhQUFhLGFBQWEsT0FBTyxNQUFNLGFBQWEsY0FBYyxZQUFZLGFBQWEsZUFBZSxlQUFlLGFBQWEsYUFBYSxPQUFPLE1BQU0sV0FBVyxhQUFhLGVBQWUsZUFBZSxhQUFhLGFBQWEsT0FBTyxPQUFPLGFBQWEsY0FBYyxZQUFZLGFBQWEsZUFBZSxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsZUFBZSxlQUFlLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxlQUFlLGVBQWUsYUFBYSxhQUFhLGVBQWUsT0FBTyxPQUFPLGVBQWUsY0FBYyxhQUFhLGFBQWEsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGVBQWUsY0FBYyxlQUFlLE9BQU8sT0FBTyxlQUFlLGVBQWUsY0FBYyxhQUFhLFlBQVksYUFBYSxlQUFlLGVBQWUsYUFBYSxhQUFhLGVBQWUsWUFBWSxXQUFXLE9BQU8sT0FBTyxZQUFZLGFBQWEsZUFBZSxZQUFZLE9BQU8sT0FBTyxjQUFjLGNBQWMsZUFBZSxlQUFlLFlBQVksV0FBVyxPQUFPLE9BQU8sZUFBZSxlQUFlLGNBQWMsYUFBYSxjQUFjLGVBQWUsV0FBVyxPQUFPLE9BQU8sZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGNBQWMsYUFBYSxZQUFZLGFBQWEsZUFBZSxjQUFjLGNBQWMsY0FBYyxjQUFjLFlBQVksV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxlQUFlLGVBQWUsZUFBZSxlQUFlLFlBQVksYUFBYSxlQUFlLGVBQWUsY0FBYyxlQUFlLGVBQWUsWUFBWSxVQUFVLFdBQVcsT0FBTyxPQUFPLGVBQWUsY0FBYyxhQUFhLGFBQWEsY0FBYyxNQUFNLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFlBQVksYUFBYSxlQUFlLGVBQWUsY0FBYyxPQUFPLE9BQU8sY0FBYyxjQUFjLGNBQWMsY0FBYyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsZUFBZSxlQUFlLGFBQWEsZUFBZSxjQUFjLGNBQWMsZUFBZSxZQUFZLFVBQVUsT0FBTyxNQUFN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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pTK0I7QUFDQTtBQUNNOztBQUV0QjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHFEQUFLOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDM0ZlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckhlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNaQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQSxVQUFVLFNBQVM7QUFDbkI7QUFDQSxVQUFVLFNBQVM7QUFDbkI7QUFDQSxVQUFVLFNBQVM7QUFDbkIsNEJBQTRCLFNBQVM7QUFDckM7QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0EsNEJBQTRCO0FBQzVCLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLCtCQUErQjtBQUN6RTs7QUFFQTtBQUNBOztBQUVBLDBEQUEwRDtBQUMxRCw0QkFBNEIsdUJBQXVCO0FBQ25ELG1DQUFtQyw2Q0FBNkM7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSw2REFBNkQsNkJBQTZCOztBQUUxRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLEdBQUc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DQUFtQyxHQUFHO0FBQ3RDO0FBQ0Esb0RBQW9EO0FBQ3BELCtDQUErQztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwrREFBK0Q7QUFDL0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSwyQkFBMkI7O0FBRTNCLGlFQUFlLEtBQUssRUFBQzs7Ozs7OztVQ3JxQnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWlDO0FBQ0Y7QUFDSTtBQUNBO0FBQ0E7QUFDSjtBQUNJO0FBQ0w7O0FBRTlCO0FBQ0E7O0FBRUEsc0RBQU07QUFDTixxREFBSztBQUNMLHVEQUFPO0FBQ1AsdURBQU87QUFDUCx1REFBTztBQUNQLHNEQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRCx1REFBTyxjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vZGlzdC9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9kaXN0L2Nzcy9tYWluLmNzcz9hN2I1Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NhbGVuZGFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ndXR0ZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luYm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3NwbGl0LWdyaWQvZGlzdC9zcGxpdC1ncmlkLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytNb25vKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYXJsYSk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBoZWFkZXItc3Bhd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwMHB4KTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBoZWFkZXItc3Bhd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwMHB4KTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHNpZGViYXItc3Bhd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwMHB4KTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzaWRlYmFyLXNwYXduIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDBweCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBsaXN0LXNwYXduIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgbGlzdC1zcGF3biB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHJvbXB0LXNwYXduIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBwcm9tcHQtc3Bhd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZGF5LXNwYXduIHtcXG4gIDAlIHtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRvcDogMCU7XFxuICAgIGxlZnQ6IDAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGRheS1zcGF3biB7XFxuICAwJSB7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgbGVmdDogMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0b3A6IDAlO1xcbiAgICBsZWZ0OiAwJTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGNvbnRlbnQtZGVzcGF3biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgY29udGVudC1kZXNwYXduIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGNvbnRlbnQtcmVzcGF3biB7XFxuICAwJSB7XFxuICAgIHRvcDogMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0b3A6IDAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGNvbnRlbnQtcmVzcGF3biB7XFxuICAwJSB7XFxuICAgIHRvcDogMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0b3A6IDAlO1xcbiAgfVxcbn1cXG4uYnV0dG9uLWNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAyNywgMjcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJvai1zZWxlY3RlZCB7XFxuICBzY2FsZTogOTAlO1xcbn1cXG5cXG4ubW9udGgtdG9nZ2xlOm50aC1vZi10eXBlKDEpIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm1vbnRoLXRvZ2dsZTpudGgtb2YtdHlwZSgyKSB7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIjtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuYm9keSAjY29udGVudCB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMnB4IDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJweCA0ZnI7XFxuICB6LWluZGV4OiAwO1xcbn1cXG5ib2R5ICNjb250ZW50ICNoZWFkZXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGhlYWRlci1zcGF3bjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBoZWFkZXItc3Bhd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwMHB4KTtcXG4gIHotaW5kZXg6IDI7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2hlYWRlciBoMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcbmJvZHkgI2NvbnRlbnQgI2hlYWRlciAjaGVhZGVyLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2hlYWRlciAjaGVhZGVyLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IG1lZGl1bTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMjBweCA0MHB4O1xcbn1cXG5ib2R5ICNjb250ZW50ICNoZWFkZXIgI2hlYWRlci1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICBzY2FsZTogOTAlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNoZWFkZXIgI2hlYWRlci1idXR0b25zICNsb2dpbi1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2hlYWRlciAjaGVhZGVyLWJ1dHRvbnMgI21lbnUtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwO1xcbiAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2hlYWRlciAjaGVhZGVyLWJ1dHRvbnMgI21lbnUtYnV0dG9uOmhvdmVyIHtcXG4gIHBhZGRpbmc6IDIwcHggMTIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuYm9keSAjY29udGVudCAjc2lkZWJhciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc2lkZWJhci1zcGF3bjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBzaWRlYmFyLXNwYXduO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWlubWF4KDUwcHgsIDgwcHgpKSBhdXRvIG1pbm1heCg1MHB4LCA4MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbmJvZHkgI2NvbnRlbnQgI3NpZGViYXIgYnV0dG9uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbmJvZHkgI2NvbnRlbnQgI3NpZGViYXIgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHNjYWxlOiA5MCU7XFxufVxcbmJvZHkgI2NvbnRlbnQgI3NpZGViYXIgYm9keSAjY29udGVudCAjc2lkZWJhci1pbmJveCB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcbmJvZHkgI2NvbnRlbnQgI3NpZGViYXIgYm9keSAjY29udGVudCAjc2lkZWJhci10b2RheSB7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcbmJvZHkgI2NvbnRlbnQgI3NpZGViYXIgYm9keSAjY29udGVudCAjc2lkZWJhci1jYWxlbmRhciB7XFxuICBncmlkLXJvdzogMy80O1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcbmJvZHkgI2NvbnRlbnQgI3NpZGViYXIgYm9keSAjY29udGVudCAjc2lkZWJhci1wcm9qZWN0cyB7XFxuICBncmlkLXJvdzogNC81O1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcbmJvZHkgI2NvbnRlbnQgI3NpZGViYXIgI3NpZGViYXItbGlzdCB7XFxuICBncmlkLXJvdzogNS82O1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbmJvZHkgI2NvbnRlbnQgI3NpZGViYXIgI3NpZGViYXItbGlzdCBidXR0b24ge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IG1lZGl1bTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBNb25vXFxcIjtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBwYWRkaW5nLWxlZnQ6IDIwJTtcXG59XFxuYm9keSAjY29udGVudCAjc2lkZWJhciAjc2lkZWJhci1saXN0IGJ1dHRvbiBpbWcge1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5ib2R5ICNjb250ZW50ICNzaWRlYmFyIGJvZHkgI2NvbnRlbnQgI3NpZGViYXItYWRkIHtcXG4gIGdyaWQtcm93OiA2Lzc7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuYm9keSAjY29udGVudCAjc2lkZWJhciAucHJvamVjdHMtY2xvc2VkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbmJvZHkgI2NvbnRlbnQgI3NpZGViYXIgZGl2OmVtcHR5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbGlzdC1zcGF3bjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBsaXN0LXNwYXduO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDA7XFxuICBncmlkLXJvdzogMy80O1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIG1pbi13aWR0aDogNjV2dztcXG4gIG1pbi1oZWlnaHQ6IDV2aDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMDtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNyZXNldC1sYXlvdXQge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IG1lZGl1bTtcXG4gIHRvcDogYXV0bztcXG4gIHJpZ2h0OiAwJTtcXG4gIGJvdHRvbTogMCU7XFxuICBsZWZ0OiBhdXRvO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI3Jlc2V0LWxheW91dDpob3ZlciB7XFxuICB0b3A6IGF1dG87XFxuICByaWdodDogMiU7XFxuICBib3R0b206IDIlO1xcbiAgbGVmdDogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHNjYWxlOiAxMjAlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2luYm94IHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjdG9kYXkge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggNTBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCBoMiwgYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCBoMywgYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDA7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgI2NhbGVuZGFyLW1vbnRoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMDtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjY2FsZW5kYXItbW9udGggYnV0dG9uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNjYWxlbmRhci1oZWFkZXJzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgI2RheXMtd3JhcHBlciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZ2FwOiAwO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjZGF5cy13cmFwcGVyICNjYWxlbmRhci1kYXlzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCA2NXB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDY1cHgpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNkYXlzLXdyYXBwZXIgI2NhbGVuZGFyLWRheXMgYnV0dG9uIHtcXG4gIHdpZHRoOiA2NXB4O1xcbiAgaGVpZ2h0OiA2NXB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNkYXlzLXdyYXBwZXIgI2NhbGVuZGFyLWRheXMgYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IG1lZGl1bTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBzY2FsZTogMTIwJTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjZGF5cy13cmFwcGVyICNkYXktc2VsZWN0ZWQge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGRheS1zcGF3bjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBkYXktc3Bhd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMC4xZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuOWZyO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBncmlkLWF1dG8tcm93czogMC4xZnI7XFxuICBnYXA6IDEwcHg7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgI2RheXMtd3JhcHBlciAjZGF5LXNlbGVjdGVkIC5jYWxlbmRhci10YXNrIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAjY2FsZW5kYXIgI2NhbGVuZGFyLWdyaWQgI2RheXMtd3JhcHBlciAjZGF5LXNlbGVjdGVkIC5jYWxlbmRhci10YXNrIGJ1dHRvbiB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjZGF5cy13cmFwcGVyICNkYXktc2VsZWN0ZWQgLmNhbGVuZGFyLXRhc2sgYnV0dG9uIGltZyB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNkYXlzLXdyYXBwZXIgI2RheS1zZWxlY3RlZCAuY2FsZW5kYXItdGFzayBidXR0b24gaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMS43NXJlbTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjZGF5cy13cmFwcGVyICNkYXktc2VsZWN0ZWQgLmNhbGVuZGFyLXRhc2sgLnRhc2staW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5ib2R5ICNjb250ZW50ICNjb250ZW50LXdyYXBwZXIgI2NhbGVuZGFyICNjYWxlbmRhci1ncmlkICNkYXlzLXdyYXBwZXIgI2RheS1zZWxlY3RlZCAjY2xvc2UtZGF5IHtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbiAgYm90dG9tOiBhdXRvO1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyICNjYWxlbmRhciAjY2FsZW5kYXItZ3JpZCAjZGF5cy13cmFwcGVyICNkYXktc2VsZWN0ZWQgI2RheS1udW0tc2VsZWN0ZWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDA7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyIC5saXN0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDA7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2NvbnRlbnQtd3JhcHBlciAubGlzdC1jb250ZW50ICNhZGQtdGFzayB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuYm9keSAjY29udGVudCAjY29udGVudC13cmFwcGVyIC5saXN0LWNvbnRlbnQgI2FkZC10YXNrIGltZyB7XFxuICBoZWlnaHQ6IDM2cHg7XFxufVxcbmJvZHkgI2NvbnRlbnQgI2d1dHRlci1jb2wge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNpZGViYXItc3Bhd247XFxuICAgICAgICAgIGFuaW1hdGlvbjogc2lkZWJhci1zcGF3bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5ib2R5ICNjb250ZW50ICNndXR0ZXItY29sOmhvdmVyIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgY3Vyc29yOiBjb2wtcmVzaXplO1xcbn1cXG5ib2R5ICNjb250ZW50ICNndXR0ZXItcm93IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBoZWFkZXItc3Bhd247XFxuICAgICAgICAgIGFuaW1hdGlvbjogaGVhZGVyLXNwYXduO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMnB4O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgei1pbmRleDogMjtcXG59XFxuYm9keSAjY29udGVudCAjZ3V0dGVyLXJvdzpob3ZlciB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMTVweDtcXG4gIGN1cnNvcjogcm93LXJlc2l6ZTtcXG59XFxuYm9keSAucG9wdXAtc2NyZWVuIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwcm9tcHQtc3Bhd247XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHJvbXB0LXNwYXduO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMjVzO1xcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMjVzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxuYm9keSAucG9wdXAtc2NyZWVuIC5wb3B1cC1wcm9tcHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGhlYWRlci1zcGF3bjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBoZWFkZXItc3Bhd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCAjMDAwMDAwO1xcbn1cXG5ib2R5IC5wb3B1cC1zY3JlZW4gLnBvcHVwLXByb21wdCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5ib2R5IC5wb3B1cC1zY3JlZW4gLnBvcHVwLXByb21wdCBmb3JtIC5pbnB1dC1maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMDtcXG59LyojIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc2Nzcy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vZGlzdC9jc3MvbWFpbi5jc3NcIixcIndlYnBhY2s6Ly8uL3Njc3MvX2FuaW1hdGlvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc2Nzcy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zY3NzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc2Nzcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3Njc3MvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zY3NzL190eXBvZ3JhcGh5LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDR0o7O0FDTkE7RUFDSTtJQUNJLDZCQUFBO0VEU047RUNSSTtJQUNFLDJCQUFBO0VEVU47RUNUSTtJQUNFLDBCQUFBO0VEV047QUFDRjs7QUNsQkE7RUFDSTtJQUNJLDZCQUFBO0VEU047RUNSSTtJQUNFLDJCQUFBO0VEVU47RUNUSTtJQUNFLDBCQUFBO0VEV047QUFDRjtBQ1JBO0VBQ0k7SUFDSSw2QkFBQTtFRFVOO0VDUkU7SUFDSSwyQkFBQTtFRFVOO0VDUkU7SUFDSSwwQkFBQTtFRFVOO0FBQ0Y7QUNuQkE7RUFDSTtJQUNJLDZCQUFBO0VEVU47RUNSRTtJQUNJLDJCQUFBO0VEVU47RUNSRTtJQUNJLDBCQUFBO0VEVU47QUFDRjtBQ1BBO0VBQ0k7SUFDSSw2QkFBQTtFRFNOO0VDUEU7SUFDSSwwQkFBQTtFRFNOO0FBQ0Y7QUNmQTtFQUNJO0lBQ0ksNkJBQUE7RURTTjtFQ1BFO0lBQ0ksMEJBQUE7RURTTjtBQUNGO0FDTkE7RUFDSTtJQUNJLFdBQUE7RURRTjtFQ1BJO0lBQ0UsYUFBQTtFRFNOO0FBQ0Y7QUNkQTtFQUNJO0lBQ0ksV0FBQTtFRFFOO0VDUEk7SUFDRSxhQUFBO0VEU047QUFDRjtBQ05BO0VBQ0k7SUFDSSxTQUFBO0lBQ0EsVUFBQTtFRFFOO0VDUEk7SUFDRSxPQUFBO0lBQ0EsUUFBQTtFRFNOO0FBQ0Y7QUNoQkE7RUFDSTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VEUU47RUNQSTtJQUNFLE9BQUE7SUFDQSxRQUFBO0VEU047QUFDRjtBQ05BO0VBQ0k7SUFDSSxhQUFBO0VEUU47RUNQSTtJQUNFLFdBQUE7RURTTjtBQUNGO0FDZEE7RUFDSTtJQUNJLGFBQUE7RURRTjtFQ1BJO0lBQ0UsV0FBQTtFRFNOO0FBQ0Y7QUNOQTtFQUNJO0lBQ0ksU0FBQTtFRFFOO0VDUEk7SUFDRSxPQUFBO0VEU047QUFDRjtBQ2RBO0VBQ0k7SUFDSSxTQUFBO0VEUU47RUNQSTtJQUNFLE9BQUE7RURTTjtBQUNGO0FFckVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUVBLGtDQ0ZPO0VER1AsWUNEUztFREVULGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtBRnNFSjs7QUVuRUE7RUFDSSxVQUFBO0FGc0VKOztBRW5FQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7QUZzRUo7O0FFbkVBO0VBQ0ksNEJBQUE7RUFDQSwrQkFBQTtBRnNFSjs7QUkxRkE7RUFDSSxvQkFBQTtBSjZGSjs7QUkxRkE7RUNISSxhQUFBO0VBQ0EsdUJER2M7RUNGZCwwQkRFbUI7RUFDbkIsMkJEWFM7RUNZVCxrQkFBQTtBSitGSjtBSTdGSTtFQ0dBLFdERmtCO0VDR2xCLGFESHdCO0VDVHhCLGFBQUE7RUFDQSwrQkRTa0I7RUNSbEIsa0NEUStCO0VBQzNCLFVBQUE7QUprR1I7QUloR1E7RUMyQkosK0JEMUIyQjtVQzBCM0IsdUJEMUIyQjtFQzJCM0IsOEJEM0J5QztVQzJCekMsc0JEM0J5QztFQzRCekMscUNENUI2QztVQzRCN0MsNkJENUI2QztFQ3RCN0MsYUFBQTtFQUNBLG1CRHNCc0I7RUNyQnRCLDZCRHFCMkI7RUNwQjNCLG1CRG9CeUM7RUNuQnpDLE1BTGtFO0VBZWxFLGFEVTBCO0VDVDFCLGlCRFNrQztFQUMxQixxQkR2QkM7RUN3QkQsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBSnlHWjtBSXZHWTtFQUNJLGVBQUE7QUp5R2hCO0FJdEdZO0VDbENSLGFBQUE7RUFDQSxtQkRrQzBCO0VDakMxQix1QkRpQytCO0VDaEMvQixtQkRnQ3VDO0VDL0J2QyxTRCtCK0M7QUo0R25EO0FJMUdnQjtFQ0laLGtCREhnQztFQ0loQyxrQkRKc0M7RUNLdEMsbUJBSHdEO0VBSXhELG9CQUp5QztFQVh6QywwQkMzQlM7RUQ0QlQsZURTMkM7RUFDM0Isa0JBQUE7QUpnSHBCO0FJOUdvQjtFQUNJLFVBQUE7QUpnSHhCO0FJNUdnQjtFQy9DWixhQUFBO0VBQ0EsbUJEK0M4QjtFQzlDOUIsdUJEOENtQztFQzdDbkMsbUJENkMyQztFQzVDM0MsU0Q0Q21EO0FKa0h2RDtBSS9HZ0I7RUNuRFosYUFBQTtFQUNBLG1CRG1EOEI7RUNsRDlCLHVCRGtEbUM7RUNqRG5DLG1CRGlEMkM7RUNoRDNDLE1BTGtFO0VEc0RsRCxrQkFBQTtFQUNBLGlCQUFBO0FKcUhwQjtBSW5Ib0I7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FKcUh4QjtBSS9HUTtFQ2hCSixnQ0RpQjJCO1VDakIzQix3QkRpQjJCO0VDaEIzQiw4QkRnQjBDO1VDaEIxQyxzQkRnQjBDO0VDZjFDLHFDRGU4QztVQ2Y5Qyw2QkRlOEM7RUN6RDlDLGFBQUE7RUFDQSx5RUR5RHNCO0VDeER0QiwwQkR3RDZFO0VDcEQ3RSxhRHFEMEI7RUNwRDFCLGdCRG9Ea0M7RUFDMUIscUJEbEVDO0VDbUVELHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FKc0haO0FJcEhZO0VDbENSLGtCRG1DNEI7RUNsQzVCLG1CRGtDa0M7RUNqQ2xDLG1CQUh3RDtFQUl4RCxvQkFKeUM7RUF4Q3pDLGFBQUE7RUFDQSxtQkQ0RTBCO0VDM0UxQiwyQkQyRStCO0VDMUUvQixtQkQwRTJDO0VDekUzQyxTRHlFbUQ7RUNoRG5ELG9CRGlEMEI7RUNoRDFCLGtCRGdEbUM7RUFDdkIsNEJEaEZGO0FIOE1kO0FJNUhnQjtFQUNJLGVBQUE7RUFDQSxVQUFBO0FKOEhwQjtBSTFIWTtFQ3pFUixhRDBFOEI7RUN6RTlCLGlCRHlFc0M7QUo2SDFDO0FJMUhZO0VDN0VSLGFEOEU4QjtFQzdFOUIsaUJENkVzQztBSjZIMUM7QUkxSFk7RUNqRlIsYURrRjhCO0VDakY5QixpQkRpRnNDO0FKNkgxQztBSTFIWTtFQ3JGUixhRHNGOEI7RUNyRjlCLGlCRHFGc0M7QUo2SDFDO0FJMUhZO0VDekZSLGFEMEY4QjtFQ3pGOUIsaUJEeUZzQztFQUMxQixZQUFBO0FKNkhoQjtBSTNIZ0I7RUNsRVosa0JEbUVnQztFQ2xFaEMsbUJEa0VzQztFQ2pFdEMsbUJBSHdEO0VBSXhELG9CQUp5QztFQXhDekMsYUFBQTtFQUNBLG1CRDRHOEI7RUMzRzlCLHVCRDJHbUM7RUMxR25DLG1CRDBHMkM7RUN6RzNDLFFEeUdtRDtFQ2hGbkQsMEJDM0JTO0VENEJULGtCRGdGMkM7RUFDM0Isa0NEaEhOO0VDaUhNLGlCQUFBO0FKcUlwQjtBSW5Jb0I7RUFDSSxZQUFBO0FKcUl4QjtBSWhJWTtFQzFHUixhRDJHOEI7RUMxRzlCLGlCRDBHc0M7QUptSTFDO0FJaElZO0VBQ0ksYUFBQTtBSmtJaEI7QUkvSFk7RUFDSSxhQUFBO0FKaUloQjtBSTdIUTtFQ3JGSiw2QkRzRjJCO1VDdEYzQixxQkRzRjJCO0VDckYzQixnQ0RxRnVDO1VDckZ2Qyx3QkRxRnVDO0VDcEZ2QyxxQ0RvRjZDO1VDcEY3Qyw2QkRvRjZDO0VDdEk3QyxhQUFBO0VBQ0EsbUJEc0lzQjtFQ3JJdEIsdUJEcUkyQjtFQ3BJM0IsbUJEb0ltQztFQ25JbkMsTUFMa0U7RUFlbEUsYUQwSDBCO0VDekgxQixnQkR5SGtDO0VDaEhsQyxlRGlIMEI7RUNoSDFCLGVEZ0hnQztFQUN4QixpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBSnVJWjtBSXJJWTtFQ3JHUixrQkRzRzRCO0VDckc1QixnQkFGK0I7RUFHL0IsbUJBSHdEO0VBSXhELG9CQUp5QztFQU56QyxTRDhHOEI7RUM3RzlCLFNENkdvQztFQzVHcEMsVUQ0R3dDO0VDM0d4QyxVRDJHNEM7RUFDaEMsNEJEbEpGO0VDbUpFLGtCQUFBO0VBQ0EsaUJBQUE7QUo2SWhCO0FJM0lnQjtFQ25IWixTRG9Ia0M7RUNuSGxDLFNEbUh3QztFQ2xIeEMsVURrSDRDO0VDakg1QyxVRGlIZ0Q7RUFDaEMsZUFBQTtFQUNBLFdBQUE7QUpnSnBCO0FJNUlZO0VDeklSLFdEMEkwQjtFQ3pJMUIsWUR5SWdDO0VDN0poQyxhQUFBO0VBQ0Esc0JENkowQjtFQzVKMUIsdUJENEprQztFQzNKbEMsbUJEMkowQztFQzFKMUMsTUFMa0U7RURnS3RELGtCQUFBO0FKbUpoQjtBSWhKWTtFQy9JUixXRGdKMEI7RUMvSTFCLFlEK0lnQztFQ25LaEMsYUFBQTtFQUNBLHNCRG1LMEI7RUNsSzFCLHVCRGtLa0M7RUNqS2xDLG1CRGlLMEM7RUNoSzFDLE1BTGtFO0VEc0t0RCxrQkFBQTtBSnVKaEI7QUlwSlk7RUN4S1IsYUFBQTtFQUNBLHNCRHdLMEI7RUN2SzFCLHVCRHVLa0M7RUN0S2xDLG1CRHNLMEM7RUNySzFDLE1BTGtFO0VEMkt0RCxrQkFBQTtBSjBKaEI7QUl4SmdCO0VDekpaLFdEMEo4QjtFQ3pKOUIsWUR5Sm9DO0VDcktwQyxhQUFBO0VBQ0EsaUNEcUs4QjtFQ3BLOUIsMEJEb0s2QztFQUM3QixrQkFBQTtBSjZKcEI7QUkzSm9CO0VDakxoQixhQUFBO0VBQ0EsbUJEaUxrQztFQ2hMbEMsdUJEZ0x1QztFQy9LdkMsbUJEK0srQztFQzlLL0MsTUFMa0U7QUxvVnRFO0FJOUpvQjtFQ3JMaEIsYUFBQTtFQUNBLG1CRHFMa0M7RUNwTGxDLDhCRG9MdUM7RUNuTHZDLG1CRG1Mc0Q7RUNsTHRELE1BTGtFO0VBZWxFLGFEeUtzQztFQ3hLdEMsaUJEd0s4QztBSnFLbEQ7QUluS3dCO0VDaEpwQixrQkRpSndDO0VDaEp4QyxnQkFGK0I7RUFHL0IsbUJBSHdEO0VBSXhELG9CQUp5QztFRG1KakIsYUFBQTtBSndLNUI7QUlwS29CO0VDdkxoQixhQUFBO0VBQ0EsdUJEdUxrQztFQ3RMbEMscUNEc0x1QztFQ2xMdkMsYURtTHNDO0VDbEx0QyxpQkRrTDhDO0FKeUtsRDtBSXRLb0I7RUMzSmhCLGtCRDRKb0M7RUMzSnBDLG1CRDJKMEM7RUMxSjFDLG1CQUh3RDtFQUl4RCxvQkFKeUM7RUF4Q3pDLGFBQUE7RUFDQSxtQkRxTWtDO0VDcE1sQyx1QkRvTXVDO0VDbk12QyxvQkRtTStDO0VDbE0vQyxNQUxrRTtFQWVsRSxhRHlMc0M7RUN4THRDLGlCRHdMOEM7RUFDMUIsa0JBQUE7RUFDQSxnQkFBQTtBSmdMeEI7QUk5S3dCO0VDbk1wQixhQUFBO0VBQ0EsbUNEbU1zQztFQ2xNdEMsc0NEa011RDtFQUMvQixrQkFBQTtBSmtMNUI7QUloTDRCO0VDNUx4QixXRDZMMEM7RUM1TDFDLFlENExnRDtFQ25MaEQsb0JEb0wwQztFQ25MMUMsaUJEbUxtRDtFQUN2QixvQ0FBQTtFQUNBLGlCQUFBO0FKb0xoQztBSWxMZ0M7RUM1SzVCLGtCRDZLZ0Q7RUM1S2hELGtCRDRLc0Q7RUMzS3RELG1CQUh3RDtFQUl4RCxvQkFKeUM7RUFYekMsb0JEMEw4QztFQ3pMOUMsaUJEeUx1RDtFQUN2QixXQUFBO0FKd0xwQztBSW5Md0I7RUM3S3BCLDRCRDhLMkM7VUM5SzNDLG9CRDhLMkM7RUM3SzNDLGdDRDZLc0Q7VUM3S3RELHdCRDZLc0Q7RUM1S3RELHFDRDRLNEQ7VUM1SzVELDZCRDRLNEQ7RUNyTDVELGtCRHNMd0M7RUNyTHhDLG1CRHFMOEM7RUNwTDlDLG1CQUh3RDtFQUl4RCxvQkFKeUM7RUFoQ3pDLGFBQUE7RUFDQSwrQkR1TnNDO0VDdE50Qyw0QkRzTm1EO0VDOUxuRCxNRCtMMEM7RUM5TDFDLFFEOEw2QztFQzdMN0MsU0Q2TGdEO0VDNUxoRCxPRDRMbUQ7RUFDM0IsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBSitMNUI7QUk3TDRCO0VDaE14QixtQkRpTTRDO0VDaE01QyxnQkRnTW1EO0VDL0xuRCxnQ0QrTDJEO0VDOUwzRCxpQkQ4THNEO0VDMU90RCxhQUFBO0VBQ0EsbUJEME8wQztFQ3pPMUMsOEJEeU8rQztFQ3hPL0MsbUJEd084RDtFQ3ZPOUQsU0R1T3NFO0VDOU10RSxvQkQrTTBDO0VDOU0xQyxpQkQ4TW1EO0VBQ3ZCLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0FKdU1oQztBSXJNZ0M7RUN4TTVCLGtCRHlNZ0Q7RUN4TWhELGdCQUYrQjtFQUcvQixtQkFId0Q7RUFJeEQsb0JBSnlDO0VEMk1ULDRCRHBQdEI7QUg4YmQ7QUl4TW9DO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FKME14QztBSXhNd0M7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBSjBNNUM7QUlyTWdDO0VDaFE1QixhQUFBO0VBQ0Esc0JEZ1E4QztFQy9QOUMsMkJEK1BzRDtFQzlQdEQsdUJEOFBrRTtFQzdQbEUsU0Q2UDhFO0FKMk1sRjtBSXZNNEI7RUNuT3hCLE1Eb084QztFQ25POUMsV0RtT2lEO0VDbE9qRCxZRGtPdUQ7RUNqT3ZELE9EaU82RDtFQUNqQyxrQkFBQTtBSjRNaEM7QUl6TTRCO0VDMVF4QixhQUFBO0VBQ0EsbUJEMFEwQztFQ3pRMUMsdUJEeVErQztFQ3hRL0MsbUJEd1F1RDtFQ3ZRdkQsTUFMa0U7RUE4QmxFLG9CRCtPMEM7RUM5TzFDLGVEOE9tRDtFQzlQbkQsYUQrUDhDO0VDOVA5QyxpQkQ4UHNEO0VBQzFCLGtCQUFBO0VBQ0EsTUFBQTtBSmlOaEM7QUkxTVk7RUN0UlIsYUFBQTtFQUNBLHNCRHNSMEI7RUNyUjFCLHVCRHFSa0M7RUNwUmxDLG1CRG9SMEM7RUNuUjFDLE1BTGtFO0FMd2V0RTtBSTlNZ0I7RUNoUFosa0JEaVBnQztFQ2hQaEMsZ0JBRitCO0VBRy9CLG1CQUh3RDtFQUl4RCxvQkFKeUM7RUF4Q3pDLGFBQUE7RUFDQSxtQkQwUjhCO0VDelI5Qix1QkR5Um1DO0VDeFJuQyxtQkR3UjJDO0VDdlIzQyxTRHVSbUQ7RUM5UG5ELG9CRCtQOEI7RUM5UDlCLGtCRDhQdUM7RUFDdkIsa0JBQUE7QUp3TnBCO0FJdE5vQjtFQUNJLFlBQUE7QUp3TnhCO0FJbE5RO0VDdFBKLGdDRHVQMkI7VUN2UDNCLHdCRHVQMkI7RUN0UDNCLDhCRHNQMEM7VUN0UDFDLHNCRHNQMEM7RUNyUDFDLHFDRHFQOEM7VUNyUDlDLDZCRHFQOEM7RUNwUjlDLFVEcVJzQjtFQ3BSdEIsWURvUjJCO0VDMVIzQixhRDJSMEI7RUMxUjFCLGdCRDBSa0M7RUFDMUIsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FKd05aO0FJdE5ZO0VDN1JSLFdEOFIwQjtFQzdSMUIsWUQ2UmdDO0VBQ3BCLGtCQUFBO0FKeU5oQjtBSXJOUTtFQ3RRSiwrQkR1UTJCO1VDdlEzQix1QkR1UTJCO0VDdFEzQiw4QkRzUXlDO1VDdFF6QyxzQkRzUXlDO0VDclF6QyxxQ0RxUTZDO1VDclE3Qyw2QkRxUTZDO0VDcFM3QyxXRHFTc0I7RUNwU3RCLFdEb1M0QjtFQzFTNUIsYUQyUzBCO0VDMVMxQixpQkQwU2tDO0VBQzFCLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBSjJOWjtBSXpOWTtFQzdTUixXRDhTMEI7RUM3UzFCLFlENlNnQztFQUNwQixrQkFBQTtBSjROaEI7QUl2Tkk7RUN2UkEsK0JEd1J1QjtVQ3hSdkIsdUJEd1J1QjtFQ3ZSdkIsaUNEdVJxQztVQ3ZSckMseUJEdVJxQztFQ3RSckMscUNEc1I0QztVQ3RSNUMsNkJEc1I0QztFQ3JUNUMsV0RzVGtCO0VDclRsQixZRHFUd0I7RUN6VXhCLGFBQUE7RUFDQSxtQkR5VWtCO0VDeFVsQix1QkR3VXVCO0VDdlV2QixtQkR1VStCO0VDdFUvQixNQUxrRTtFRDRVOUQsOEJEM1VFO0VDNFVGLGtCQUFBO0VBQ0EsVUFBQTtBSmdPUjtBSTlOUTtFQy9SSiwrQkRnUzJCO1VDaFMzQix1QkRnUzJCO0VDL1IzQixnQ0QrUnlDO1VDL1J6Qyx3QkQrUnlDO0VDOVJ6QyxxQ0Q4UitDO1VDOVIvQyw2QkQ4UitDO0VDdlMvQyxrQkR3U3dCO0VDdlN4QixtQkR1UzhCO0VDdFM5QixtQkFId0Q7RUFJeEQsb0JBSnlDO0VBckJ6QyxZRCtUc0I7RUM5VHRCLGFEOFQ2QjtFQ2xWN0IsYUFBQTtFQUNBLHNCRGtWc0I7RUNqVnRCLHVCRGlWOEI7RUNoVjlCLG1CRGdWc0M7RUMvVXRDLFFEK1U4QztFQUN0QyxpQkFBQTtFQUNBLGdDQUFBO0FKME9aO0FJeE9ZO0VDdlZSLGFBQUE7RUFDQSxzQkR1VjBCO0VDdFYxQiw2QkRzVmtDO0VDclZsQyxtQkRxVmdEO0VDcFZoRCxTRG9Wd0Q7QUo4TzVEO0FJNU9nQjtFQzFWWixhQUFBO0VBQ0EsbUJEMFY4QjtFQ3pWOUIsNkJEeVZtQztFQ3hWbkMsbUJEd1ZpRDtFQ3ZWakQsTUFMa0U7QUw4a0J0RSxDQUFBLG1DQUFBXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxlbmRhcihwcm9qZWN0RGF0YSkge1xuICAgIGxldCBjdXJyZW50TW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IG1vbnRocyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdO1xuICAgIGNvbnN0IHdlZWtkYXlzID0gW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlc1wiLCBcIldlZFwiLCBcIlRodXJzXCIsIFwiRnJpXCIsIFwiU2F0XCJdO1xuXG4gICAgZnVuY3Rpb24gbmV3RGF5KGRheU51bSkge1xuICAgICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkYXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYWxlbmRhci1kYXlcIik7XG4gICAgICAgIGNvbnN0IGRheVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgICAgIGRheVRleHQudGV4dENvbnRlbnQgPSBkYXlOdW07XG4gICAgICAgIGRheS5hcHBlbmRDaGlsZChkYXlUZXh0KTtcbiAgICAgICAgcmV0dXJuIGRheTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRNb250aChtb250aCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vbnRoLXRleHRcIikudGV4dENvbnRlbnQgPSBtb250aHNbbW9udGhdO1xuICAgICAgICBzZXREYXlzKG1vbnRoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREYXlzKG1vbnRoKSB7XG4gICAgICAgIGxldCBudW1EYXlzID0gKCgpID0+IHtcbiAgICAgICAgICAgIC8vIEFsbCBtb250aHMgdGhhdCBjb25zaXN0IG9mIDMwIGRheXNcbiAgICAgICAgICAgIGNvbnN0IG1vbnRocyA9IFszLCA1LCA4LCAxMF07XG5cbiAgICAgICAgICAgIC8vIEZlYnJ1YXJ5XG4gICAgICAgICAgICBpZiAobW9udGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMjg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcHJpbCwgSnVuZSwgU2VwdGVtYmVyLCBOb3ZlbWJlclxuICAgICAgICAgICAgZWxzZSBpZiAobW9udGhzLmluY2x1ZGVzKG1vbnRoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAzMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEphbnVhcnksIE1hcmNoLCBNYXksIEp1bHksIEF1Z3VzdCwgT2N0b2JlciwgRGVjZW1iZXJcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAzMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtRGF5czsgaSsrKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGVuZGFyLWRheXNcIikuYXBwZW5kQ2hpbGQobmV3RGF5KGkpKTtcbiAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBhbGwgZGF5cyB3aXRoaW4gdGhlIG1vbnRoIChub3QgcHJldmlvdXMvc3Vic2VxdWVudCBtb250aHMpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGVuZGFyLWRheXNcIikubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtZGF5XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHByZXZpb3VzIG1vbnRoJ3MgZGF5cyB0byBmaWxsIHRoZSBjYWxlbmRhclxuICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIG5ld0RhdGUuc2V0TW9udGgobW9udGgpO1xuXG4gICAgICAgIGNvbnN0IGRheU9mZnNldEJlZm9yZSA9IChuZXdEYXRlLmdldERheSgpICsgMSkgLSAobmV3RGF0ZS5nZXREYXRlKCkgJSA3KTtcbiAgICAgICAgbmV3RGF0ZS5zZXREYXRlKDApO1xuICAgICAgICBsZXQgcHJldk9mZnNldCA9IG5ld0RhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5T2Zmc2V0QmVmb3JlOyBpKyspIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsZW5kYXItZGF5c1wiKS5wcmVwZW5kKG5ld0RheShwcmV2T2Zmc2V0KSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGVuZGFyLWRheXNcIikuZmlyc3RDaGlsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImRhcmtncmV5XCI7XG4gICAgICAgICAgICBwcmV2T2Zmc2V0LS07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgbmV4dCBtb250aCdzIGRheXMgdG8gZmlsbCB0aGUgY2FsZW5kYXJcbiAgICAgICAgY29uc3QgZGF5T2Zmc2V0QWZ0ZXIgPSA0MiAtIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsZW5kYXItZGF5c1wiKS5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5T2Zmc2V0QWZ0ZXI7IGkrKykge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxlbmRhci1kYXlzXCIpLmFwcGVuZChuZXdEYXkoaSArIDEpKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsZW5kYXItZGF5c1wiKS5sYXN0Q2hpbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJkYXJrZ3JleVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0QnV0dG9ucygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdERheShtb250aCwgZGF5KSB7XG4gICAgICAgIGNvbnN0IGRheVNlbGVjdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGF5U2VsZWN0ZWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXktc2VsZWN0ZWRcIik7XG4gICAgICAgIGNvbnN0IGRheU51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgZGF5TnVtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF5LW51bS1zZWxlY3RlZFwiKTtcbiAgICAgICAgZGF5TnVtLnRleHRDb250ZW50ID0gYCR7bW9udGhzW21vbnRoIC0gMV19ICR7ZGF5fWA7XG4gICAgICAgIGRheVNlbGVjdGVkLmFwcGVuZENoaWxkKGRheU51bSk7XG5cbiAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjbG9zZS5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICAgICAgY2xvc2UuaWQgPSBcImNsb3NlLWRheVwiO1xuICAgICAgICBjbG9zZS5jbGFzc05hbWUgPSBcImJ1dHRvbi1jbG9zZVwiO1xuICAgICAgICBkYXlTZWxlY3RlZC5hcHBlbmRDaGlsZChjbG9zZSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3REYXRhKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb2pUYXNrIG9mIHByb2plY3QudGFza3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTW9udGggPSBOdW1iZXIocHJvalRhc2suZGF0ZS5zcGxpdChcIi1cIilbMV0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEYXkgPSBwcm9qVGFzay5kYXRlLnNwbGl0KFwiLVwiKVsyXTtcblxuICAgICAgICAgICAgICAgIGlmIChtb250aCA9PT0gdGFza01vbnRoICYmIGRheSA9PT0gdGFza0RheSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhbGVuZGFyLXRhc2tcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrSW5mby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2staW5mb1wiKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza1RleHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLXRleHRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tUZXh0LnRleHRDb250ZW50ID0gcHJvalRhc2sudGFzaztcbiAgICAgICAgICAgICAgICAgICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza1RleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2pJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb2pJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2otaW5wdXRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3REYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHByb2pJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3REYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tUZXh0LnRleHRDb250ZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay50YXNrID09PSB0YXNrVGV4dC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYXRjaCFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHByb2pJbnB1dC52YWx1ZSA9IHByb2pUYXNrLnByb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHByb2pJbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0luZm8pO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0J1dHRvbnMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWJ1dHRvbnNcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRWRpdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stZWRpdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0VkaXQuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJFZGl0IHRhc2tcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tFZGl0UGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0VkaXRQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9lZGl0LnBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0VkaXQuYXBwZW5kQ2hpbGQodGFza0VkaXRQaWMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhc2tFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXRleHRcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGV4dFwiKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1pbnB1dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBwcmV2VGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJldlRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWluZm9cIikucHJlcGVuZCh0YXNrSW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWlucHV0XCIpLmZvY3VzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1pbnB1dFwiKS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWlucHV0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2pWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2otaW5wdXRcIikudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staW5wdXRcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay10ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sudGV4dENvbnRlbnQgPSBuZXdUYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1pbmZvXCIpLnByZXBlbmQodGFzayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLnRhc2sgPT09IHByZXZUYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3QudGl0bGUgPSBwcm9qVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sudGFzayA9IG5ld1Rhc2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhc2tCdXR0b25zLmFwcGVuZENoaWxkKHRhc2tFZGl0KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tUaW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay10aW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrVGltZS5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIkNoYW5nZSBkdWUgZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1RpbWVQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrVGltZVBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2VkaXRfY2FsZW5kYXIucG5nXCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrVGltZS5hcHBlbmRDaGlsZCh0YXNrVGltZVBpYyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tCdXR0b25zLmFwcGVuZENoaWxkKHRhc2tUaW1lKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0RlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stZGVsZXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRGVsLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiRGVsZXRlIHRhc2tcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZWxQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRGVsUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvZGVsZXRlLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0RlbC5hcHBlbmRDaGlsZCh0YXNrRGVsUGljKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0RlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrQnV0dG9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGRheVNlbGVjdGVkLmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF5cy13cmFwcGVyXCIpLmFwcGVuZENoaWxkKGRheVNlbGVjdGVkKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWRheVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRheS1zZWxlY3RlZFwiKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU2hvdyBldmVudHMgb2YgYSBnaXZlbiBkYXkgaWYgY2xpY2tlZCBvblxuICAgIGZ1bmN0aW9uIHNldEJ1dHRvbnMoKSB7XG4gICAgICAgIGZvciAoY29uc3QgYnV0dG9uIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlLWRheVwiKSkge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZERheSA9IGJ1dHRvbi5maXJzdENoaWxkLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIHNlbGVjdERheShjdXJyZW50TW9udGgsIHNlbGVjdGVkRGF5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwZW5kIGNhbGVuZGFyIHRvIERPTVxuICAgIGNvbnN0IGNhbGVuZGFyV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FsZW5kYXJXcmFwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FsZW5kYXJcIik7XG4gICAgY2FsZW5kYXJXcmFwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1jb250ZW50XCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0LXRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJDYWxlbmRhclwiO1xuICAgIGNhbGVuZGFyV3JhcC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBjYWxlbmRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FsZW5kYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYWxlbmRhci1ncmlkXCIpO1xuXG4gICAgLy8gQXBwZW5kIGNhbGVuZGFyIG1vbnRoIHRvIERPTVxuICAgIGNvbnN0IGNhbE1vbnRoV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FsTW9udGhXcmFwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FsZW5kYXItbW9udGhcIik7XG5cbiAgICBjb25zdCBtb250aEFycm93TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbW9udGhBcnJvd0xlZnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYWxlbmRhci1sZWZ0XCIpO1xuICAgIG1vbnRoQXJyb3dMZWZ0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9udGgtdG9nZ2xlXCIpO1xuICAgIGNvbnN0IGFycm93TGVmdFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYXJyb3dMZWZ0UGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMva2V5Ym9hcmRfYXJyb3dfbGVmdC5wbmdcIik7XG4gICAgbW9udGhBcnJvd0xlZnQuYXBwZW5kQ2hpbGQoYXJyb3dMZWZ0UGljKTtcbiAgICBjYWxNb250aFdyYXAuYXBwZW5kQ2hpbGQobW9udGhBcnJvd0xlZnQpO1xuXG4gICAgY29uc3QgY2FsTW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY2FsTW9udGguc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb250aC10ZXh0XCIpO1xuICAgIGNhbE1vbnRoV3JhcC5hcHBlbmRDaGlsZChjYWxNb250aCk7XG5cbiAgICBjb25zdCBtb250aEFycm93UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1vbnRoQXJyb3dSaWdodC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbGVuZGFyLXJpZ2h0XCIpO1xuICAgIG1vbnRoQXJyb3dSaWdodC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vbnRoLXRvZ2dsZVwiKTtcbiAgICBjb25zdCBhcnJvd1JpZ2h0UGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBhcnJvd1JpZ2h0UGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMva2V5Ym9hcmRfYXJyb3dfcmlnaHQucG5nXCIpO1xuICAgIG1vbnRoQXJyb3dSaWdodC5hcHBlbmRDaGlsZChhcnJvd1JpZ2h0UGljKTtcbiAgICBjYWxNb250aFdyYXAuYXBwZW5kQ2hpbGQobW9udGhBcnJvd1JpZ2h0KTtcblxuICAgIGNhbGVuZGFyLmFwcGVuZENoaWxkKGNhbE1vbnRoV3JhcCk7XG5cbiAgICAvLyBBcHBlbmQgY2FsZW5kYXIgd2Vla2RheSBoZWFkZXJzIHRvIERPTVxuICAgIGNvbnN0IGNhbEhlYWRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhbEhlYWRlcnMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYWxlbmRhci1oZWFkZXJzXCIpO1xuXG4gICAgZm9yIChjb25zdCB3ZWVrZGF5IG9mIHdlZWtkYXlzKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FsZW5kYXItaGVhZGVyXCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB3ZWVrZGF5O1xuICAgICAgICBjYWxIZWFkZXJzLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuXG4gICAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQoY2FsSGVhZGVycyk7XG5cbiAgICAvLyBBcHBlbmQgc3BhY2UgZm9yIGNhbGVuZGFyIGRheXMgdG8gRE9NXG4gICAgY29uc3QgY2FsRGF5V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FsRGF5V3JhcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRheXMtd3JhcHBlclwiKTtcblxuICAgIGNvbnN0IGNhbERheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhbERheXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYWxlbmRhci1kYXlzXCIpO1xuXG4gICAgY2FsRGF5V3JhcC5hcHBlbmRDaGlsZChjYWxEYXlzKTtcbiAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChjYWxEYXlXcmFwKTtcbiAgICBjYWxlbmRhcldyYXAuYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtd3JhcHBlclwiKTtcbiAgICBsaXN0Lmluc2VydEJlZm9yZShjYWxlbmRhcldyYXAsIGxpc3QuY2hpbGRyZW5bMF0pO1xuXG4gICAgLy8gU2V0IGluaXRpYWwgY2FsZW5kYXIgbW9udGhcbiAgICBzZXRNb250aChuZXcgRGF0ZSgpLmdldE1vbnRoKCkpO1xuXG4gICAgLy8gQWxsb3cgYXJyb3cgYnV0dG9ucyB0byBjb250cm9sIHRoZSB2aXNpYmxlIGNhbGVuZGFyIG1vbnRoXG4gICAgZm9yIChjb25zdCBidXR0b24gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb250aC10b2dnbGVcIikpIHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxlbmRhci1kYXlzXCIpLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGVuZGFyLWRheXNcIikuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5pZCA9PT0gXCJjYWxlbmRhci1yaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudE1vbnRoID0gKChjdXJyZW50TW9udGggKyAxKSArIDEyKSAlIDEyO1xuICAgICAgICAgICAgICAgIHNldE1vbnRoKGN1cnJlbnRNb250aCAtIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50TW9udGggPSAoKGN1cnJlbnRNb250aCAtIDEpICsgMTIpICUgMTI7XG4gICAgICAgICAgICAgICAgc2V0TW9udGgoY3VycmVudE1vbnRoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgSW5ib3ggZnJvbSBcIi4vaW5ib3guanNcIjtcbmltcG9ydCBUb2RheSBmcm9tIFwiLi90b2RheS5qc1wiO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuL2NhbGVuZGFyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnQocHJvamVjdERhdGEpIHtcbiAgICBjb25zdCBjb250ZW50V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudFdyYXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50LXdyYXBwZXJcIik7XG5cbiAgICBjb25zdCByZXNldExheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVzZXRMYXlvdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXNldC1sYXlvdXRcIik7XG4gICAgcmVzZXRMYXlvdXQuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJSZXNldCBMYXlvdXRcIik7XG4gICAgY29uc3QgcmVzZXRQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHJlc2V0UGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvdGVhbV9kYXNoYm9hcmQucG5nXCIpO1xuICAgIHJlc2V0TGF5b3V0LmFwcGVuZENoaWxkKHJlc2V0UGljKTtcbiAgICBjb250ZW50V3JhcC5hcHBlbmRDaGlsZChyZXNldExheW91dCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGNvbnRlbnRXcmFwKTtcblxuICAgIEluYm94KHByb2plY3REYXRhKTtcblxuICAgIGZvciAoY29uc3QgbGluayBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItbGlua1wiKSkge1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC13cmFwcGVyXCIpLmZpcnN0Q2hpbGQ7XG5cbiAgICAgICAgICAgIGlmIChldmVudFRhcmdldC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpICE9PSBjdXJyZW50Q29udGVudC5pZCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiY29udGVudC1kZXNwYXduXCI7XG4gICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuMjVzXCI7XG4gICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQuc3R5bGUuYW5pbWF0aW9uRmlsbE1vZGUgPSBcImZvcndhcmRzXCI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0sIDI1MCk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGV2ZW50VGFyZ2V0LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdJbmJveCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5ib3gocHJvamVjdERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnVG9kYXknOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvZGF5KHByb2plY3REYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NhbGVuZGFyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYWxlbmRhcihwcm9qZWN0RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtd3JhcHBlclwiKS5maXJzdENoaWxkO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImNvbnRlbnQtcmVzcGF3blwiO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29udGVudC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMC4yNXNcIjtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQuc3R5bGUuYW5pbWF0aW9uRmlsbE1vZGUgPSBcImZvcndhcmRzXCI7XG4gICAgICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldC1sYXlvdXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gXCJcIjtcbiAgICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHdXR0ZXJzKCkge1xuICAgIGNvbnN0IGd1dHRlckNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3V0dGVyQ29sLmlkID0gXCJndXR0ZXItY29sXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGd1dHRlckNvbCk7XG5cbiAgICBjb25zdCBndXR0ZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGd1dHRlclJvdy5pZCA9IFwiZ3V0dGVyLXJvd1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChndXR0ZXJSb3cpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyVGl0bGVzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLXRpdGxlc1wiKTtcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlclRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLXRpdGxlXCIpO1xuICAgIGhlYWRlclRpdGxlLmlubmVySFRNTCA9IFwiRE9fSVRcIjtcbiAgICBoZWFkZXJUaXRsZXMuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSBcIlRoZSB0by1kbyBhcHAgZm9yIG1hbmFnaW5nIHlvdXIgbGlmZVwiO1xuICAgIGhlYWRlclRpdGxlcy5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlcyk7XG5cbiAgICBjb25zdCBoZWFkZXJCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJCdXR0b25zLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLWJ1dHRvbnNcIik7XG5cbiAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbG9naW5CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dpbi1idXR0b25cIik7XG4gICAgbG9naW5CdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoZWFkZXItYnV0dG9uXCIpO1xuXG4gICAgY29uc3QgbG9naW5QaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxvZ2luUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvYWNjb3VudF9jaXJjbGUucG5nXCIpO1xuICAgIGxvZ2luQnV0dG9uLmFwcGVuZENoaWxkKGxvZ2luUGljKTtcblxuICAgIGNvbnN0IGxvZ2luVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxvZ2luVGV4dC50ZXh0Q29udGVudCA9IFwiU2lnbiBJblwiO1xuICAgIGxvZ2luQnV0dG9uLmFwcGVuZENoaWxkKGxvZ2luVGV4dCk7XG4gICAgaGVhZGVyQnV0dG9ucy5hcHBlbmRDaGlsZChsb2dpbkJ1dHRvbik7XG5cbiAgICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvbWVudS5wbmdcIik7XG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1idXR0b25cIik7XG4gICAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhlYWRlci1idXR0b25cIik7XG4gICAgbWVudUJ1dHRvbi5hcHBlbmRDaGlsZChtZW51SW1nKTtcbiAgICBoZWFkZXJCdXR0b25zLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJCdXR0b25zKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufSIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5ib3gocHJvamVjdERhdGEpIHtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5ib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbmJveFwiKTtcbiAgICBpbmJveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3QtY29udGVudFwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdC10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbiAgICBpbmJveC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrc1wiKTtcblxuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0RGF0YSkge1xuICAgICAgICBpZiAocHJvamVjdC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1wiKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgICAgIHRhc2tUZXh0LnRleHRDb250ZW50ID0gdGFzaztcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUZXh0KTtcblxuICAgICAgICAgICAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5ib3guYXBwZW5kQ2hpbGQodGFza0NvbnRlbnQpO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkVGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrXCIpO1xuXG4gICAgY29uc3QgYWRkVGFza1BpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYWRkVGFza1BpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2FkZF90YXNrLnBuZ1wiKTtcbiAgICBhZGRUYXNrLmFwcGVuZENoaWxkKGFkZFRhc2tQaWMpO1xuXG4gICAgY29uc3QgYWRkVGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhZGRUYXNrVGV4dC50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBUYXNrXCI7XG4gICAgYWRkVGFzay5hcHBlbmRDaGlsZChhZGRUYXNrVGV4dCk7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LXdyYXBwZXJcIik7XG4gICAgY29udGVudC5pbnNlcnRCZWZvcmUoaW5ib3gsIGNvbnRlbnQuY2hpbGRyZW5bMF0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFza1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIFRhc2socHJvamVjdERhdGEpO1xuICAgIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKHVzZXJEYXRhKSB7XG4gICAgY29uc3QgbG9naW5TY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ2luU2NyZWVuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9naW4tc2NyZWVuXCIpO1xuICAgIGxvZ2luU2NyZWVuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicG9wdXAtc2NyZWVuXCIpO1xuXG4gICAgY29uc3QgbG9naW5Qcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ2luUHJvbXB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9naW4tcHJvbXB0XCIpO1xuICAgIGxvZ2luUHJvbXB0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicG9wdXAtcHJvbXB0XCIpO1xuXG4gICAgY29uc3QgbG9naW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbG9naW5IZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dpbi1oZWFkZXJcIik7XG4gICAgbG9naW5IZWFkZXIudGV4dENvbnRlbnQgPSBcIlNpZ24gaW4gdG8gRG9fSXRcIjtcbiAgICBsb2dpblByb21wdC5hcHBlbmRDaGlsZChsb2dpbkhlYWRlcik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICBjb25zdCBsb2dOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dOYW1lLmNsYXNzTmFtZSA9IFwiaW5wdXQtZmllbGRcIjtcblxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWU6XCI7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvZ2luLW5hbWVcIik7XG4gICAgbG9nTmFtZS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuXG4gICAgY29uc3QgbmFtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLW5hbWVcIik7XG4gICAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJsb2dpbi1uYW1lXCIpO1xuICAgIGxvZ05hbWUuYXBwZW5kQ2hpbGQobmFtZUZpZWxkKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ05hbWUpO1xuXG4gICAgY29uc3QgbG9nUGFzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nUGFzcy5jbGFzc05hbWUgPSBcImxvZ2luLWZpZWxkXCI7XG5cbiAgICBjb25zdCBwYXNzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcGFzc0xhYmVsLnRleHRDb250ZW50ID0gXCJQYXNzd29yZDpcIjtcbiAgICBwYXNzTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibG9naW4tcGFzc1wiKTtcbiAgICBsb2dQYXNzLmFwcGVuZENoaWxkKHBhc3NMYWJlbCk7XG5cbiAgICBjb25zdCBwYXNzRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcGFzc0ZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9naW4tcGFzc1wiKTtcbiAgICBwYXNzRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImxvZ2luLXBhc3NcIik7XG4gICAgbG9nUGFzcy5hcHBlbmRDaGlsZChwYXNzRmllbGQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobG9nUGFzcyk7XG5cbiAgICBjb25zdCBsb2dpblN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsb2dpblN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ2luLXN1Ym1pdFwiKTtcbiAgICBsb2dpblN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIGxvZ2luU3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTE9HIElOXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobG9naW5TdWJtaXQpO1xuICAgIGxvZ2luUHJvbXB0LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgY3JlYXRlQWNjb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNyZWF0ZUFjY291bnQuaW5uZXJIVE1MID0gXCJOZXcgdXNlcj8gQ3JlYXRlIGFuIGFjY291bnQgaGVyZSFcIjtcbiAgICBsb2dpblByb21wdC5hcHBlbmRDaGlsZChjcmVhdGVBY2NvdW50KTtcblxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjbG9zZS5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICBjbG9zZS5pZCA9IFwiY2xvc2UtbG9naW5cIjtcbiAgICBjbG9zZS5jbGFzc05hbWUgPSBcImJ1dHRvbi1jbG9zZVwiO1xuICAgIGxvZ2luUHJvbXB0LmFwcGVuZENoaWxkKGNsb3NlKTtcblxuICAgIGxvZ2luU2NyZWVuLmFwcGVuZENoaWxkKGxvZ2luUHJvbXB0KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2dpblNjcmVlbik7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1zdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlckVudGVyZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLW5hbWVcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB1c2VyQ2hlY2sgPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyIG9mIHVzZXJEYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIubmFtZSA9PT0gdXNlckVudGVyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1idXR0b25cIikuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBgSGVsbG8sICR7dXNlckVudGVyZWR9YDtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1zY3JlZW5cIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJDaGVjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF1c2VyQ2hlY2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9tcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLXByb21wdFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgICAgIGVycm9yLnRleHRDb250ZW50ID0gXCJUaGlzIHVzZXIgZG9lcyBub3QgZXhpc3RcIjtcbiAgICAgICAgICAgICAgICBwcm9tcHQuaW5zZXJ0QmVmb3JlKGVycm9yLCBwcm9tcHQuY2hpbGRyZW5bMl0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLW5hbWVcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1wYXNzXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1sb2dpblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLW5hbWVcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1wYXNzXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tc2NyZWVuXCIpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3REYXRhKSB7XG4gICAgY29uc3QgcHJvalNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvalNjcmVlbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2otc2NyZWVuXCIpO1xuICAgIHByb2pTY3JlZW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb3B1cC1zY3JlZW5cIik7XG5cbiAgICBjb25zdCBwcm9qUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qUHJvbXB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvai1wcm9tcHRcIik7XG4gICAgcHJvalByb21wdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvcHVwLXByb21wdFwiKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgIGNvbnN0IGxvZ1Byb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ1Byb2ouc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dC1maWVsZFwiKTtcblxuICAgIGNvbnN0IHByb2pMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcm9qTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvai1uYW1lXCIpO1xuICAgIHByb2pMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lOlwiO1xuICAgIGxvZ1Byb2ouYXBwZW5kQ2hpbGQocHJvakxhYmVsKTtcblxuICAgIGNvbnN0IHByb2pGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcm9qRmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qLW5hbWVcIik7XG4gICAgcHJvakZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qLW5hbWVcIik7XG4gICAgcHJvakZpZWxkLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmV3IFByb2plY3RcIik7XG4gICAgbG9nUHJvai5hcHBlbmRDaGlsZChwcm9qRmllbGQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobG9nUHJvaik7XG5cbiAgICBjb25zdCBwcm9qU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByb2pTdWJtaXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qLXN1Ym1pdFwiKTtcbiAgICBwcm9qU3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgcHJvalN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkFERCBQUk9KRUNUXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvalN1Ym1pdCk7XG4gICAgcHJvalByb21wdC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjbG9zZS5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICBjbG9zZS5pZCA9IFwiY2xvc2UtcHJvalwiO1xuICAgIGNsb3NlLmNsYXNzTmFtZSA9IFwiYnV0dG9uLWNsb3NlXCI7XG4gICAgcHJvalByb21wdC5hcHBlbmRDaGlsZChjbG9zZSk7XG4gICAgcHJvalNjcmVlbi5hcHBlbmRDaGlsZChwcm9qUHJvbXB0KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb2pTY3JlZW4pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvai1zdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0IHByb2pOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qLW5hbWVcIikudmFsdWU7XG5cbiAgICAgICAgICAgIGlmICghcHJvak5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qTnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWxpc3RcIikuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgICAgICAgICAgICAgcHJvak5hbWUgPSBgUHJvamVjdCAke3Byb2pOdW0gKyAxfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb2plY3REYXRhLnB1c2gobmV3IFByb2plY3QocHJvak5hbWUpKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBuZXdQcm9qLnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2pOYW1lKTtcbiAgICAgICAgICAgIG5ld1Byb2ouc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qLWl0ZW1cIik7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2pQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgbmV3UHJvalBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2ZvbGRlci5wbmdcIilcbiAgICAgICAgICAgIG5ld1Byb2pQaWMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qLXBpY1wiKTtcbiAgICAgICAgICAgIG5ld1Byb2ouYXBwZW5kQ2hpbGQobmV3UHJvalBpYyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2pOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgICAgICAgICAgbmV3UHJvak5hbWUuaW5uZXJIVE1MID0gcHJvak5hbWU7XG4gICAgICAgICAgICBuZXdQcm9qLmFwcGVuZENoaWxkKG5ld1Byb2pOYW1lKTtcblxuICAgICAgICAgICAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlUHJvaiA9IG5ldyBSZWdFeHAoXCJwcm9qLXNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICghYWN0aXZlUHJvai50ZXN0KG5ld1Byb2ouY2xhc3NMaXN0KSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQcm9qLmNsYXNzTGlzdC5hZGQoXCJwcm9qLXNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qTmFtZSA9IG5ld1Byb2ouY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSBuZXdQcm9qLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdQcm9qLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qLXNlbGVjdGVkXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3QudGl0bGUgPT09IG5ld1Byb2ouaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWxpc3RcIik7XG4gICAgICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobmV3UHJvaik7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvai1zY3JlZW5cIikucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtcHJvalwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2otc2NyZWVuXCIpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNsYXNzIFByb2plY3Qge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvamVjdERhdGE7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhclwiKTtcblxuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBpbmJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXItaW5ib3hcIik7XG4gICAgaW5ib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWxpbmVcIik7XG4gICAgaW5ib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWxpbmtcIik7XG5cbiAgICBjb25zdCBpbmJveFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW5ib3hQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9pbmJveC5wbmdcIik7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hQaWMpO1xuXG4gICAgY29uc3QgaW5ib3hUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGluYm94VGV4dC50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChpbmJveFRleHQpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaW5ib3gpO1xuXG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRvZGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhci10b2RheVwiKTtcbiAgICB0b2RheS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGViYXItbGluZVwiKTtcbiAgICB0b2RheS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGViYXItbGlua1wiKTtcblxuICAgIGNvbnN0IHRvZGF5UGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB0b2RheVBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL3RvZGF5LnBuZ1wiKTtcbiAgICB0b2RheS5hcHBlbmRDaGlsZCh0b2RheVBpYyk7XG5cbiAgICBjb25zdCB0b2RheVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdG9kYXlUZXh0LnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIHRvZGF5LmFwcGVuZENoaWxkKHRvZGF5VGV4dCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0b2RheSk7XG5cbiAgICBjb25zdCBjYWxlbmRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FsZW5kYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlYmFyLWNhbGVuZGFyXCIpO1xuICAgIGNhbGVuZGFyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1saW5lXCIpO1xuICAgIGNhbGVuZGFyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1saW5rXCIpO1xuXG4gICAgY29uc3QgY2FsZW5kYXJQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNhbGVuZGFyUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWFnZXMvY2FsZW5kYXIucG5nXCIpO1xuICAgIGNhbGVuZGFyLmFwcGVuZENoaWxkKGNhbGVuZGFyUGljKTtcblxuICAgIGNvbnN0IGNhbGVuZGFyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjYWxlbmRhclRleHQudGV4dENvbnRlbnQgPSBcIkNhbGVuZGFyXCI7XG4gICAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXJUZXh0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGNhbGVuZGFyKTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXItcHJvamVjdHNcIik7XG4gICAgcHJvamVjdHMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyLWxpbmVcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0c1BpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcHJvamVjdHNQaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9leHBhbmRfY2lyY2xlX2Rvd24ucG5nXCIpO1xuICAgIHByb2plY3RzUGljLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtcGljXCIpO1xuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RzUGljKTtcblxuICAgIGNvbnN0IHByb2plY3RzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9qZWN0c1RleHQudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNUZXh0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcblxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHNMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhci1saXN0XCIpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcblxuICAgIGNvbnN0IGFkZFByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFByb2ouc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlYmFyLWFkZFwiKTtcbiAgICBhZGRQcm9qLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2lkZWJhci1saW5lXCIpO1xuXG4gICAgY29uc3QgYWRkUHJvalBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYWRkUHJvalBpYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2ZvbGRlcl9uZXcucG5nXCIpO1xuICAgIGFkZFByb2ouYXBwZW5kQ2hpbGQoYWRkUHJvalBpYyk7XG5cbiAgICBjb25zdCBhZGRQcm9qVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBhZGRQcm9qVGV4dC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICBhZGRQcm9qLmFwcGVuZENoaWxkKGFkZFByb2pUZXh0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2opO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLXByb2plY3RzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXBpY1wiKS5zcmM7XG4gICAgICAgIGNvbnN0IHJlZ0V4ID0gL2Fycm93X2NpcmNsZV9yaWdodC5wbmckLztcblxuICAgICAgICBpZiAocmVnRXgudGVzdChzdGF0ZSkpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1saXN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0cy1jbG9zZWRcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXBpY1wiKS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1hZ2VzL2V4cGFuZF9jaXJjbGVfZG93bi5wbmdcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItbGlzdFwiKS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtY2xvc2VkXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1waWNcIikuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltYWdlcy9hcnJvd19jaXJjbGVfcmlnaHQucG5nXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFzayhwcm9qZWN0RGF0YSkge1xuICAgIGNvbnN0IHRhc2tTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tTY3JlZW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXNjcmVlblwiKTtcbiAgICB0YXNrU2NyZWVuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicG9wdXAtc2NyZWVuXCIpO1xuXG4gICAgY29uc3QgdGFza1Byb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1Byb21wdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stcHJvbXB0XCIpO1xuICAgIHRhc2tQcm9tcHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb3B1cC1wcm9tcHRcIik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICBjb25zdCBsb2dUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dUYXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXQtZmllbGRcIik7XG5cbiAgICBjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stbmFtZVwiKTtcbiAgICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2s6XCI7XG4gICAgbG9nVGFzay5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuXG4gICAgY29uc3QgdGFza0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stbmFtZVwiKTtcbiAgICB0YXNrRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stbmFtZVwiKTtcbiAgICB0YXNrRmllbGQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgVGFza1wiKTtcbiAgICBsb2dUYXNrLmFwcGVuZENoaWxkKHRhc2tGaWVsZCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsb2dUYXNrKTtcblxuICAgIGNvbnN0IGxvZ0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ0RhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dC1maWVsZFwiKTtcblxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGF0ZS1uYW1lXCIpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCI7XG4gICAgbG9nRGF0ZS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gICAgY29uc3QgZGF0ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGUtbmFtZVwiKTtcbiAgICBkYXRlRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGUtbmFtZVwiKTtcbiAgICBkYXRlRmllbGQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiMjAyMi0xMC0wM1wiKTtcbiAgICBsb2dEYXRlLmFwcGVuZENoaWxkKGRhdGVGaWVsZCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsb2dEYXRlKTtcblxuICAgIGNvbnN0IGxvZ1Byb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ1Byb2ouc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dC1maWVsZFwiKTtcblxuICAgIGNvbnN0IHByb2pMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcm9qTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvai1uYW1lXCIpO1xuICAgIHByb2pMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdDpcIjtcbiAgICBsb2dQcm9qLmFwcGVuZENoaWxkKHByb2pMYWJlbCk7XG5cbiAgICBjb25zdCBwcm9qRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByb2pGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2otbmFtZVwiKTtcbiAgICBwcm9qRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2otbmFtZVwiKTtcblxuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0RGF0YSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgIHByb2pGaWVsZC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuICAgIGxvZ1Byb2ouYXBwZW5kQ2hpbGQocHJvakZpZWxkKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxvZ1Byb2opO1xuXG4gICAgY29uc3QgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrU3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1zdWJtaXRcIik7XG4gICAgdGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJBREQgVEFTS1wiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tTdWJtaXQpO1xuICAgIHRhc2tQcm9tcHQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2UuaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgY2xvc2UuaWQgPSBcImNsb3NlLXRhc2tcIjtcbiAgICBjbG9zZS5jbGFzc05hbWUgPSBcImJ1dHRvbi1jbG9zZVwiO1xuICAgIHRhc2tQcm9tcHQuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICAgIHRhc2tTY3JlZW4uYXBwZW5kQ2hpbGQodGFza1Byb21wdCk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhc2tTY3JlZW4pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtbmFtZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2otbmFtZVwiKS52YWx1ZTtcblxuICAgICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgICAgIHRhc2sgPSBcIk5ldyBUYXNrXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGFzaywgZGF0ZSwgcHJvamVjdCk7XG5cbiAgICAgICAgY29uc3QgdGFza1Byb2ogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2otbmFtZVwiKS52YWx1ZTtcblxuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdERhdGEpIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSB0YXNrUHJvaikge1xuICAgICAgICAgICAgICAgIHByb2plY3RbXCJ0YXNrc1wiXS5wdXNoKG5ld1Rhc2spO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXNjcmVlblwiKS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtdGFza1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1zY3JlZW5cIikucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBjbGFzcyBUYXNrIHtcbiAgICAgICAgY29uc3RydWN0b3IodGFzaywgZGF0ZSwgcHJvamVjdCkge1xuICAgICAgICAgICAgdGhpcy50YXNrID0gdGFzaztcbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZGF5KHByb2plY3REYXRhKSB7XG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kYXlcIik7XG4gICAgdG9kYXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LWNvbnRlbnRcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3QtdGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgdG9kYXkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC13cmFwcGVyXCIpO1xuICAgIGxpc3QuaW5zZXJ0QmVmb3JlKHRvZGF5LCBsaXN0LmNoaWxkcmVuWzBdKTtcbn0iLCJ2YXIgbnVtZXJpYyA9IGZ1bmN0aW9uICh2YWx1ZSwgdW5pdCkgeyByZXR1cm4gTnVtYmVyKHZhbHVlLnNsaWNlKDAsIC0xICogdW5pdC5sZW5ndGgpKTsgfTtcblxudmFyIHBhcnNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoJ3B4JykpXG4gICAgICAgIHsgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCB0eXBlOiAncHgnLCBudW1lcmljOiBudW1lcmljKHZhbHVlLCAncHgnKSB9IH1cbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoJ2ZyJykpXG4gICAgICAgIHsgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCB0eXBlOiAnZnInLCBudW1lcmljOiBudW1lcmljKHZhbHVlLCAnZnInKSB9IH1cbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoJyUnKSlcbiAgICAgICAgeyByZXR1cm4geyB2YWx1ZTogdmFsdWUsIHR5cGU6ICclJywgbnVtZXJpYzogbnVtZXJpYyh2YWx1ZSwgJyUnKSB9IH1cbiAgICBpZiAodmFsdWUgPT09ICdhdXRvJykgeyByZXR1cm4geyB2YWx1ZTogdmFsdWUsIHR5cGU6ICdhdXRvJyB9IH1cbiAgICByZXR1cm4gbnVsbFxufTtcblxudmFyIHBhcnNlID0gZnVuY3Rpb24gKHJ1bGUpIHsgcmV0dXJuIHJ1bGUuc3BsaXQoJyAnKS5tYXAocGFyc2VWYWx1ZSk7IH07XG5cbnZhciBnZXRTaXplQXRUcmFjayA9IGZ1bmN0aW9uIChpbmRleCwgdHJhY2tzLCBnYXAsIGVuZCkge1xuICAgIGlmICggZ2FwID09PSB2b2lkIDAgKSB7IGdhcCA9IDA7IH1cbiAgICBpZiAoIGVuZCA9PT0gdm9pZCAwICkgeyBlbmQgPSBmYWxzZTsgfVxuXG4gICAgdmFyIG5ld0luZGV4ID0gZW5kID8gaW5kZXggKyAxIDogaW5kZXg7XG4gICAgdmFyIHRyYWNrU3VtID0gdHJhY2tzXG4gICAgICAgIC5zbGljZSgwLCBuZXdJbmRleClcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYWNjdW0sIHZhbHVlKSB7IHJldHVybiBhY2N1bSArIHZhbHVlLm51bWVyaWM7IH0sIDApO1xuICAgIHZhciBnYXBTdW0gPSBnYXAgPyBpbmRleCAqIGdhcCA6IDA7XG5cbiAgICByZXR1cm4gdHJhY2tTdW0gKyBnYXBTdW1cbn07XG5cbnZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiAocnVsZSwgb3duUnVsZXMsIG1hdGNoZWRSdWxlcykgeyByZXR1cm4gb3duUnVsZXMuY29uY2F0KCBtYXRjaGVkUnVsZXMpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIuc3R5bGVbcnVsZV07IH0pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHN0eWxlKSB7IHJldHVybiBzdHlsZSAhPT0gdW5kZWZpbmVkICYmIHN0eWxlICE9PSAnJzsgfSk7IH07XG5cbnZhciBnZXRHYXBWYWx1ZSA9IGZ1bmN0aW9uICh1bml0LCBzaXplKSB7XG4gICAgaWYgKHNpemUuZW5kc1dpdGgodW5pdCkpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcihzaXplLnNsaWNlKDAsIC0xICogdW5pdC5sZW5ndGgpKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxufTtcblxudmFyIGZpcnN0Tm9uWmVybyA9IGZ1bmN0aW9uICh0cmFja3MpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHJhY2tzW2ldLm51bWVyaWMgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gaVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG59O1xuXG52YXIgTk9PUCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9O1xuXG52YXIgZGVmYXVsdFdyaXRlU3R5bGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgZ3JpZFRlbXBsYXRlUHJvcCwgc3R5bGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBlbGVtZW50LnN0eWxlW2dyaWRUZW1wbGF0ZVByb3BdID0gc3R5bGU7XG59O1xuXG52YXIgZ2V0T3B0aW9uID0gZnVuY3Rpb24gKG9wdGlvbnMsIHByb3BOYW1lLCBkZWYpIHtcbiAgICB2YXIgdmFsdWUgPSBvcHRpb25zW3Byb3BOYW1lXTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIGRlZlxufTtcblxuZnVuY3Rpb24gZ2V0TWF0Y2hlZENTU1J1bGVzIChlbCkge1xuICAgICAgICB2YXIgcmVmO1xuXG4gICAgICAgIHJldHVybiAocmVmID0gW10pXG4gICAgICAgIC5jb25jYXQuYXBwbHkoXG4gICAgICAgICAgICByZWYsIEFycmF5LmZyb20oZWwub3duZXJEb2N1bWVudC5zdHlsZVNoZWV0cykubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJ1bGVzID0gW107XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydWxlcyA9IEFycmF5LmZyb20ocy5jc3NSdWxlcyB8fCBbXSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcmVzdWx0cyBvbiBzZWN1cml0eSBlcnJvclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBydWxlc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gZWwubWF0Y2hlcyhyLnNlbGVjdG9yVGV4dCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIG1hdGNoaW5nIGVycm9zXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXG4gICAgICAgIH0pO1xufVxuXG52YXIgZ3JpZFRlbXBsYXRlUHJvcENvbHVtbnMgPSAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJztcbnZhciBncmlkVGVtcGxhdGVQcm9wUm93cyA9ICdncmlkLXRlbXBsYXRlLXJvd3MnO1xuXG52YXIgR3V0dGVyID0gZnVuY3Rpb24gR3V0dGVyKGRpcmVjdGlvbiwgb3B0aW9ucywgcGFyZW50T3B0aW9ucykge1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHRoaXMuZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcbiAgICB0aGlzLnRyYWNrID0gb3B0aW9ucy50cmFjaztcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdjb2x1bW4nKSB7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlUHJvcCA9IGdyaWRUZW1wbGF0ZVByb3BDb2x1bW5zO1xuICAgICAgICB0aGlzLmdyaWRHYXBQcm9wID0gJ2dyaWQtY29sdW1uLWdhcCc7XG4gICAgICAgIHRoaXMuY3Vyc29yID0gZ2V0T3B0aW9uKFxuICAgICAgICAgICAgcGFyZW50T3B0aW9ucyxcbiAgICAgICAgICAgICdjb2x1bW5DdXJzb3InLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdjdXJzb3InLCAnY29sLXJlc2l6ZScpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc25hcE9mZnNldCA9IGdldE9wdGlvbihcbiAgICAgICAgICAgIHBhcmVudE9wdGlvbnMsXG4gICAgICAgICAgICAnY29sdW1uU25hcE9mZnNldCcsXG4gICAgICAgICAgICBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ3NuYXBPZmZzZXQnLCAzMClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kcmFnSW50ZXJ2YWwgPSBnZXRPcHRpb24oXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAgICAgJ2NvbHVtbkRyYWdJbnRlcnZhbCcsXG4gICAgICAgICAgICBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ2RyYWdJbnRlcnZhbCcsIDEpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2xpZW50QXhpcyA9ICdjbGllbnRYJztcbiAgICAgICAgdGhpcy5vcHRpb25TdHlsZSA9IGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnZ3JpZFRlbXBsYXRlQ29sdW1ucycpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncm93Jykge1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVByb3AgPSBncmlkVGVtcGxhdGVQcm9wUm93cztcbiAgICAgICAgdGhpcy5ncmlkR2FwUHJvcCA9ICdncmlkLXJvdy1nYXAnO1xuICAgICAgICB0aGlzLmN1cnNvciA9IGdldE9wdGlvbihcbiAgICAgICAgICAgIHBhcmVudE9wdGlvbnMsXG4gICAgICAgICAgICAncm93Q3Vyc29yJyxcbiAgICAgICAgICAgIGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnY3Vyc29yJywgJ3Jvdy1yZXNpemUnKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNuYXBPZmZzZXQgPSBnZXRPcHRpb24oXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAgICAgJ3Jvd1NuYXBPZmZzZXQnLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdzbmFwT2Zmc2V0JywgMzApXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZHJhZ0ludGVydmFsID0gZ2V0T3B0aW9uKFxuICAgICAgICAgICAgcGFyZW50T3B0aW9ucyxcbiAgICAgICAgICAgICdyb3dEcmFnSW50ZXJ2YWwnLFxuICAgICAgICAgICAgZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdkcmFnSW50ZXJ2YWwnLCAxKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNsaWVudEF4aXMgPSAnY2xpZW50WSc7XG4gICAgICAgIHRoaXMub3B0aW9uU3R5bGUgPSBnZXRPcHRpb24ocGFyZW50T3B0aW9ucywgJ2dyaWRUZW1wbGF0ZVJvd3MnKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uRHJhZ1N0YXJ0ID0gZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdvbkRyYWdTdGFydCcsIE5PT1ApO1xuICAgIHRoaXMub25EcmFnRW5kID0gZ2V0T3B0aW9uKHBhcmVudE9wdGlvbnMsICdvbkRyYWdFbmQnLCBOT09QKTtcbiAgICB0aGlzLm9uRHJhZyA9IGdldE9wdGlvbihwYXJlbnRPcHRpb25zLCAnb25EcmFnJywgTk9PUCk7XG4gICAgdGhpcy53cml0ZVN0eWxlID0gZ2V0T3B0aW9uKFxuICAgICAgICBwYXJlbnRPcHRpb25zLFxuICAgICAgICAnd3JpdGVTdHlsZScsXG4gICAgICAgIGRlZmF1bHRXcml0ZVN0eWxlXG4gICAgKTtcblxuICAgIHRoaXMuc3RhcnREcmFnZ2luZyA9IHRoaXMuc3RhcnREcmFnZ2luZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RvcERyYWdnaW5nID0gdGhpcy5zdG9wRHJhZ2dpbmcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYWcgPSB0aGlzLmRyYWcuYmluZCh0aGlzKTtcblxuICAgIHRoaXMubWluU2l6ZVN0YXJ0ID0gb3B0aW9ucy5taW5TaXplU3RhcnQ7XG4gICAgdGhpcy5taW5TaXplRW5kID0gb3B0aW9ucy5taW5TaXplRW5kO1xuXG4gICAgaWYgKG9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zdGFydERyYWdnaW5nKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLnN0YXJ0RHJhZ2dpbmcpO1xuICAgIH1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uIGdldERpbWVuc2lvbnMgKCkge1xuICAgIHZhciByZWYgPSB0aGlzLmdyaWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciB3aWR0aCA9IHJlZi53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IHJlZi5oZWlnaHQ7XG4gICAgICAgIHZhciB0b3AgPSByZWYudG9wO1xuICAgICAgICB2YXIgYm90dG9tID0gcmVmLmJvdHRvbTtcbiAgICAgICAgdmFyIGxlZnQgPSByZWYubGVmdDtcbiAgICAgICAgdmFyIHJpZ2h0ID0gcmVmLnJpZ2h0O1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnY29sdW1uJykge1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdG9wO1xuICAgICAgICB0aGlzLmVuZCA9IGJvdHRvbTtcbiAgICAgICAgdGhpcy5zaXplID0gaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdyb3cnKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLmVuZCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLnNpemUgPSB3aWR0aDtcbiAgICB9XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldFNpemVBdFRyYWNrID0gZnVuY3Rpb24gZ2V0U2l6ZUF0VHJhY2skMSAodHJhY2ssIGVuZCkge1xuICAgIHJldHVybiBnZXRTaXplQXRUcmFjayhcbiAgICAgICAgdHJhY2ssXG4gICAgICAgIHRoaXMuY29tcHV0ZWRQaXhlbHMsXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHMsXG4gICAgICAgIGVuZFxuICAgIClcbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0U2l6ZU9mVHJhY2sgPSBmdW5jdGlvbiBnZXRTaXplT2ZUcmFjayAodHJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5jb21wdXRlZFBpeGVsc1t0cmFja10ubnVtZXJpY1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5nZXRSYXdUcmFja3MgPSBmdW5jdGlvbiBnZXRSYXdUcmFja3MgKCkge1xuICAgIHZhciB0cmFja3MgPSBnZXRTdHlsZXMoXG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlUHJvcCxcbiAgICAgICAgW3RoaXMuZ3JpZF0sXG4gICAgICAgIGdldE1hdGNoZWRDU1NSdWxlcyh0aGlzLmdyaWQpXG4gICAgKTtcbiAgICBpZiAoIXRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uU3R5bGUpIHsgcmV0dXJuIHRoaXMub3B0aW9uU3R5bGUgfVxuXG4gICAgICAgIHRocm93IEVycm9yKCdVbmFibGUgdG8gZGV0ZXJtaW5lIGdyaWQgdGVtcGxhdGUgdHJhY2tzIGZyb20gc3R5bGVzLicpXG4gICAgfVxuICAgIHJldHVybiB0cmFja3NbMF1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0R2FwID0gZnVuY3Rpb24gZ2V0R2FwICgpIHtcbiAgICB2YXIgZ2FwID0gZ2V0U3R5bGVzKFxuICAgICAgICB0aGlzLmdyaWRHYXBQcm9wLFxuICAgICAgICBbdGhpcy5ncmlkXSxcbiAgICAgICAgZ2V0TWF0Y2hlZENTU1J1bGVzKHRoaXMuZ3JpZClcbiAgICApO1xuICAgIGlmICghZ2FwLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gZ2FwWzBdXG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldFJhd0NvbXB1dGVkVHJhY2tzID0gZnVuY3Rpb24gZ2V0UmF3Q29tcHV0ZWRUcmFja3MgKCkge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdyaWQpW3RoaXMuZ3JpZFRlbXBsYXRlUHJvcF1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuZ2V0UmF3Q29tcHV0ZWRHYXAgPSBmdW5jdGlvbiBnZXRSYXdDb21wdXRlZEdhcCAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ3JpZClbdGhpcy5ncmlkR2FwUHJvcF1cbn07XG5cbkd1dHRlci5wcm90b3R5cGUuc2V0VHJhY2tzID0gZnVuY3Rpb24gc2V0VHJhY2tzIChyYXcpIHtcbiAgICB0aGlzLnRyYWNrcyA9IHJhdy5zcGxpdCgnICcpO1xuICAgIHRoaXMudHJhY2tWYWx1ZXMgPSBwYXJzZShyYXcpO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zZXRDb21wdXRlZFRyYWNrcyA9IGZ1bmN0aW9uIHNldENvbXB1dGVkVHJhY2tzIChyYXcpIHtcbiAgICB0aGlzLmNvbXB1dGVkVHJhY2tzID0gcmF3LnNwbGl0KCcgJyk7XG4gICAgdGhpcy5jb21wdXRlZFBpeGVscyA9IHBhcnNlKHJhdyk7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLnNldEdhcCA9IGZ1bmN0aW9uIHNldEdhcCAocmF3KSB7XG4gICAgdGhpcy5nYXAgPSByYXc7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLnNldENvbXB1dGVkR2FwID0gZnVuY3Rpb24gc2V0Q29tcHV0ZWRHYXAgKHJhdykge1xuICAgIHRoaXMuY29tcHV0ZWRHYXAgPSByYXc7XG4gICAgdGhpcy5jb21wdXRlZEdhcFBpeGVscyA9IGdldEdhcFZhbHVlKCdweCcsIHRoaXMuY29tcHV0ZWRHYXApIHx8IDA7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmdldE1vdXNlUG9zaXRpb24gPSBmdW5jdGlvbiBnZXRNb3VzZVBvc2l0aW9uIChlKSB7XG4gICAgaWYgKCd0b3VjaGVzJyBpbiBlKSB7IHJldHVybiBlLnRvdWNoZXNbMF1bdGhpcy5jbGllbnRBeGlzXSB9XG4gICAgcmV0dXJuIGVbdGhpcy5jbGllbnRBeGlzXVxufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zdGFydERyYWdnaW5nID0gZnVuY3Rpb24gc3RhcnREcmFnZ2luZyAoZSkge1xuICAgIGlmICgnYnV0dG9uJyBpbiBlICYmIGUuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIERvbid0IGFjdHVhbGx5IGRyYWcgdGhlIGVsZW1lbnQuIFdlIGVtdWxhdGUgdGhhdCBpbiB0aGUgZHJhZyBmdW5jdGlvbi5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgdGhpcy5nZXREaW1lbnNpb25zKCk7XG4gICAgdGhpcy5zZXRUcmFja3ModGhpcy5nZXRSYXdUcmFja3MoKSk7XG4gICAgdGhpcy5zZXRDb21wdXRlZFRyYWNrcyh0aGlzLmdldFJhd0NvbXB1dGVkVHJhY2tzKCkpO1xuICAgIHRoaXMuc2V0R2FwKHRoaXMuZ2V0R2FwKCkpO1xuICAgIHRoaXMuc2V0Q29tcHV0ZWRHYXAodGhpcy5nZXRSYXdDb21wdXRlZEdhcCgpKTtcblxuICAgIHZhciB0cmFja1BlcmNlbnRhZ2UgPSB0aGlzLnRyYWNrVmFsdWVzLmZpbHRlcihcbiAgICAgICAgZnVuY3Rpb24gKHRyYWNrKSB7IHJldHVybiB0cmFjay50eXBlID09PSAnJSc7IH1cbiAgICApO1xuICAgIHZhciB0cmFja0ZyID0gdGhpcy50cmFja1ZhbHVlcy5maWx0ZXIoZnVuY3Rpb24gKHRyYWNrKSB7IHJldHVybiB0cmFjay50eXBlID09PSAnZnInOyB9KTtcblxuICAgIHRoaXMudG90YWxGcnMgPSB0cmFja0ZyLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLnRvdGFsRnJzKSB7XG4gICAgICAgIHZhciB0cmFjayA9IGZpcnN0Tm9uWmVybyh0cmFja0ZyKTtcblxuICAgICAgICBpZiAodHJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZnJUb1BpeGVscyA9XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlZFBpeGVsc1t0cmFja10ubnVtZXJpYyAvIHRyYWNrRnJbdHJhY2tdLm51bWVyaWM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHJhY2tQZXJjZW50YWdlLmxlbmd0aCkge1xuICAgICAgICB2YXIgdHJhY2skMSA9IGZpcnN0Tm9uWmVybyh0cmFja1BlcmNlbnRhZ2UpO1xuXG4gICAgICAgIGlmICh0cmFjayQxICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmNlbnRhZ2VUb1BpeGVscyA9XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlZFBpeGVsc1t0cmFjayQxXS5udW1lcmljIC9cbiAgICAgICAgICAgICAgICB0cmFja1BlcmNlbnRhZ2VbdHJhY2skMV0ubnVtZXJpYztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCBzdGFydCBvZiBndXR0ZXIgdHJhY2tcbiAgICB2YXIgZ3V0dGVyU3RhcnQgPSB0aGlzLmdldFNpemVBdFRyYWNrKHRoaXMudHJhY2ssIGZhbHNlKSArIHRoaXMuc3RhcnQ7XG4gICAgdGhpcy5kcmFnU3RhcnRPZmZzZXQgPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oZSkgLSBndXR0ZXJTdGFydDtcblxuICAgIHRoaXMuYVRyYWNrID0gdGhpcy50cmFjayAtIDE7XG5cbiAgICBpZiAodGhpcy50cmFjayA8IHRoaXMudHJhY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5iVHJhY2sgPSB0aGlzLnRyYWNrICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAgIChcIkludmFsaWQgdHJhY2sgaW5kZXg6IFwiICsgKHRoaXMudHJhY2spICsgXCIuIFRyYWNrIG11c3QgYmUgYmV0d2VlbiB0d28gb3RoZXIgdHJhY2tzIGFuZCBvbmx5IFwiICsgKHRoaXMudHJhY2tzLmxlbmd0aCkgKyBcIiB0cmFja3Mgd2VyZSBmb3VuZC5cIilcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHRoaXMuYVRyYWNrU3RhcnQgPSB0aGlzLmdldFNpemVBdFRyYWNrKHRoaXMuYVRyYWNrLCBmYWxzZSkgKyB0aGlzLnN0YXJ0O1xuICAgIHRoaXMuYlRyYWNrRW5kID0gdGhpcy5nZXRTaXplQXRUcmFjayh0aGlzLmJUcmFjaywgdHJ1ZSkgKyB0aGlzLnN0YXJ0O1xuXG4gICAgLy8gU2V0IHRoZSBkcmFnZ2luZyBwcm9wZXJ0eSBvZiB0aGUgcGFpciBvYmplY3QuXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cbiAgICAvLyBBbGwgdGhlIGJpbmRpbmcuIGB3aW5kb3dgIGdldHMgdGhlIHN0b3AgZXZlbnRzIGluIGNhc2Ugd2UgZHJhZyBvdXQgb2YgdGhlIGVsZW1lbnRzLlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZyk7XG5cbiAgICAvLyBEaXNhYmxlIHNlbGVjdGlvbi4gRGlzYWJsZSFcbiAgICB0aGlzLmdyaWQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0c3RhcnQnLCBOT09QKTtcbiAgICB0aGlzLmdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgTk9PUCk7XG5cbiAgICB0aGlzLmdyaWQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICB0aGlzLmdyaWQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICdub25lJztcbiAgICB0aGlzLmdyaWQuc3R5bGUuTW96VXNlclNlbGVjdCA9ICdub25lJztcbiAgICB0aGlzLmdyaWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblxuICAgIC8vIFNldCB0aGUgY3Vyc29yIGF0IG11bHRpcGxlIGxldmVsc1xuICAgIHRoaXMuZ3JpZC5zdHlsZS5jdXJzb3IgPSB0aGlzLmN1cnNvcjtcbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSB0aGlzLmN1cnNvcjtcblxuICAgIHRoaXMub25EcmFnU3RhcnQodGhpcy5kaXJlY3Rpb24sIHRoaXMudHJhY2spO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5zdG9wRHJhZ2dpbmcgPSBmdW5jdGlvbiBzdG9wRHJhZ2dpbmcgKCkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIC8vIFJlbW92ZSB0aGUgc3RvcmVkIGV2ZW50IGxpc3RlbmVycy4gVGhpcyBpcyB3aHkgd2Ugc3RvcmUgdGhlbS5cbiAgICB0aGlzLmNsZWFudXAoKTtcblxuICAgIHRoaXMub25EcmFnRW5kKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnRyYWNrKTtcblxuICAgIGlmICh0aGlzLm5lZWRzRGVzdHJveSkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAnbW91c2Vkb3duJyxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAndG91Y2hzdGFydCcsXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdHJveUNiKCk7XG4gICAgICAgIHRoaXMubmVlZHNEZXN0cm95ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVzdHJveUNiID0gbnVsbDtcbiAgICB9XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmRyYWcgPSBmdW5jdGlvbiBkcmFnIChlKSB7XG4gICAgdmFyIG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oZSk7XG5cbiAgICB2YXIgZ3V0dGVyU2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mVHJhY2sodGhpcy50cmFjayk7XG4gICAgdmFyIG1pbk1vdXNlUG9zaXRpb24gPVxuICAgICAgICB0aGlzLmFUcmFja1N0YXJ0ICtcbiAgICAgICAgdGhpcy5taW5TaXplU3RhcnQgK1xuICAgICAgICB0aGlzLmRyYWdTdGFydE9mZnNldCArXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHM7XG4gICAgdmFyIG1heE1vdXNlUG9zaXRpb24gPVxuICAgICAgICB0aGlzLmJUcmFja0VuZCAtXG4gICAgICAgIHRoaXMubWluU2l6ZUVuZCAtXG4gICAgICAgIHRoaXMuY29tcHV0ZWRHYXBQaXhlbHMgLVxuICAgICAgICAoZ3V0dGVyU2l6ZSAtIHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0KTtcbiAgICB2YXIgbWluTW91c2VQb3NpdGlvbk9mZnNldCA9IG1pbk1vdXNlUG9zaXRpb24gKyB0aGlzLnNuYXBPZmZzZXQ7XG4gICAgdmFyIG1heE1vdXNlUG9zaXRpb25PZmZzZXQgPSBtYXhNb3VzZVBvc2l0aW9uIC0gdGhpcy5zbmFwT2Zmc2V0O1xuXG4gICAgaWYgKG1vdXNlUG9zaXRpb24gPCBtaW5Nb3VzZVBvc2l0aW9uT2Zmc2V0KSB7XG4gICAgICAgIG1vdXNlUG9zaXRpb24gPSBtaW5Nb3VzZVBvc2l0aW9uO1xuICAgIH1cblxuICAgIGlmIChtb3VzZVBvc2l0aW9uID4gbWF4TW91c2VQb3NpdGlvbk9mZnNldCkge1xuICAgICAgICBtb3VzZVBvc2l0aW9uID0gbWF4TW91c2VQb3NpdGlvbjtcbiAgICB9XG5cbiAgICBpZiAobW91c2VQb3NpdGlvbiA8IG1pbk1vdXNlUG9zaXRpb24pIHtcbiAgICAgICAgbW91c2VQb3NpdGlvbiA9IG1pbk1vdXNlUG9zaXRpb247XG4gICAgfSBlbHNlIGlmIChtb3VzZVBvc2l0aW9uID4gbWF4TW91c2VQb3NpdGlvbikge1xuICAgICAgICBtb3VzZVBvc2l0aW9uID0gbWF4TW91c2VQb3NpdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgYVRyYWNrU2l6ZSA9XG4gICAgICAgIG1vdXNlUG9zaXRpb24gLVxuICAgICAgICB0aGlzLmFUcmFja1N0YXJ0IC1cbiAgICAgICAgdGhpcy5kcmFnU3RhcnRPZmZzZXQgLVxuICAgICAgICB0aGlzLmNvbXB1dGVkR2FwUGl4ZWxzO1xuICAgIHZhciBiVHJhY2tTaXplID1cbiAgICAgICAgdGhpcy5iVHJhY2tFbmQgLVxuICAgICAgICBtb3VzZVBvc2l0aW9uICtcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRPZmZzZXQgLVxuICAgICAgICBndXR0ZXJTaXplIC1cbiAgICAgICAgdGhpcy5jb21wdXRlZEdhcFBpeGVscztcblxuICAgIGlmICh0aGlzLmRyYWdJbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgdmFyIGFUcmFja1NpemVJbnRlcnZhbGVkID1cbiAgICAgICAgICAgIE1hdGgucm91bmQoYVRyYWNrU2l6ZSAvIHRoaXMuZHJhZ0ludGVydmFsKSAqIHRoaXMuZHJhZ0ludGVydmFsO1xuICAgICAgICBiVHJhY2tTaXplIC09IGFUcmFja1NpemVJbnRlcnZhbGVkIC0gYVRyYWNrU2l6ZTtcbiAgICAgICAgYVRyYWNrU2l6ZSA9IGFUcmFja1NpemVJbnRlcnZhbGVkO1xuICAgIH1cblxuICAgIGlmIChhVHJhY2tTaXplIDwgdGhpcy5taW5TaXplU3RhcnQpIHtcbiAgICAgICAgYVRyYWNrU2l6ZSA9IHRoaXMubWluU2l6ZVN0YXJ0O1xuICAgIH1cblxuICAgIGlmIChiVHJhY2tTaXplIDwgdGhpcy5taW5TaXplRW5kKSB7XG4gICAgICAgIGJUcmFja1NpemUgPSB0aGlzLm1pblNpemVFbmQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHJhY2tWYWx1ZXNbdGhpcy5hVHJhY2tdLnR5cGUgPT09ICdweCcpIHtcbiAgICAgICAgdGhpcy50cmFja3NbdGhpcy5hVHJhY2tdID0gYVRyYWNrU2l6ZSArIFwicHhcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMudHJhY2tWYWx1ZXNbdGhpcy5hVHJhY2tdLnR5cGUgPT09ICdmcicpIHtcbiAgICAgICAgaWYgKHRoaXMudG90YWxGcnMgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYVRyYWNrXSA9ICcxZnInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhcmdldEZyID0gYVRyYWNrU2l6ZSAvIHRoaXMuZnJUb1BpeGVscztcbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYVRyYWNrXSA9IHRhcmdldEZyICsgXCJmclwiO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRyYWNrVmFsdWVzW3RoaXMuYVRyYWNrXS50eXBlID09PSAnJScpIHtcbiAgICAgICAgdmFyIHRhcmdldFBlcmNlbnRhZ2UgPSBhVHJhY2tTaXplIC8gdGhpcy5wZXJjZW50YWdlVG9QaXhlbHM7XG4gICAgICAgIHRoaXMudHJhY2tzW3RoaXMuYVRyYWNrXSA9IHRhcmdldFBlcmNlbnRhZ2UgKyBcIiVcIjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50cmFja1ZhbHVlc1t0aGlzLmJUcmFja10udHlwZSA9PT0gJ3B4Jykge1xuICAgICAgICB0aGlzLnRyYWNrc1t0aGlzLmJUcmFja10gPSBiVHJhY2tTaXplICsgXCJweFwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy50cmFja1ZhbHVlc1t0aGlzLmJUcmFja10udHlwZSA9PT0gJ2ZyJykge1xuICAgICAgICBpZiAodGhpcy50b3RhbEZycyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy50cmFja3NbdGhpcy5iVHJhY2tdID0gJzFmcic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0RnIkMSA9IGJUcmFja1NpemUgLyB0aGlzLmZyVG9QaXhlbHM7XG4gICAgICAgICAgICB0aGlzLnRyYWNrc1t0aGlzLmJUcmFja10gPSB0YXJnZXRGciQxICsgXCJmclwiO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRyYWNrVmFsdWVzW3RoaXMuYlRyYWNrXS50eXBlID09PSAnJScpIHtcbiAgICAgICAgdmFyIHRhcmdldFBlcmNlbnRhZ2UkMSA9IGJUcmFja1NpemUgLyB0aGlzLnBlcmNlbnRhZ2VUb1BpeGVscztcbiAgICAgICAgdGhpcy50cmFja3NbdGhpcy5iVHJhY2tdID0gdGFyZ2V0UGVyY2VudGFnZSQxICsgXCIlXCI7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0gdGhpcy50cmFja3Muam9pbignICcpO1xuICAgIHRoaXMud3JpdGVTdHlsZSh0aGlzLmdyaWQsIHRoaXMuZ3JpZFRlbXBsYXRlUHJvcCwgc3R5bGUpO1xuICAgIHRoaXMub25EcmFnKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnRyYWNrLCBzdHlsZSk7XG59O1xuXG5HdXR0ZXIucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWcpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWcpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICB0aGlzLmdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0c3RhcnQnLCBOT09QKTtcbiAgICAgICAgdGhpcy5ncmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIE5PT1ApO1xuXG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS51c2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG5cbiAgICAgICAgdGhpcy5ncmlkLnN0eWxlLmN1cnNvciA9ICcnO1xuICAgIH1cblxuICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICcnO1xufTtcblxuR3V0dGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoaW1tZWRpYXRlLCBjYikge1xuICAgICAgICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gdHJ1ZTtcblxuICAgIGlmIChpbW1lZGlhdGUgfHwgdGhpcy5kcmFnZ2luZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICdtb3VzZWRvd24nLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5lZWRzRGVzdHJveSA9IHRydWU7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95Q2IgPSBjYjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBnZXRUcmFja09wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zLCB0cmFjaywgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHRyYWNrIGluIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNbdHJhY2tdXG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxufTtcblxudmFyIGNyZWF0ZUd1dHRlciA9IGZ1bmN0aW9uIChkaXJlY3Rpb24sIG9wdGlvbnMpIHsgcmV0dXJuIGZ1bmN0aW9uIChndXR0ZXJPcHRpb25zKSB7XG4gICAgaWYgKGd1dHRlck9wdGlvbnMudHJhY2sgPCAxKSB7XG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgKFwiSW52YWxpZCB0cmFjayBpbmRleDogXCIgKyAoZ3V0dGVyT3B0aW9ucy50cmFjaykgKyBcIi4gVHJhY2sgbXVzdCBiZSBiZXR3ZWVuIHR3byBvdGhlciB0cmFja3MuXCIpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICB2YXIgdHJhY2tNaW5TaXplcyA9XG4gICAgICAgIGRpcmVjdGlvbiA9PT0gJ2NvbHVtbidcbiAgICAgICAgICAgID8gb3B0aW9ucy5jb2x1bW5NaW5TaXplcyB8fCB7fVxuICAgICAgICAgICAgOiBvcHRpb25zLnJvd01pblNpemVzIHx8IHt9O1xuICAgIHZhciB0cmFja01pblNpemUgPSBkaXJlY3Rpb24gPT09ICdjb2x1bW4nID8gJ2NvbHVtbk1pblNpemUnIDogJ3Jvd01pblNpemUnO1xuXG4gICAgcmV0dXJuIG5ldyBHdXR0ZXIoXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwge21pblNpemVTdGFydDogZ2V0VHJhY2tPcHRpb24oXG4gICAgICAgICAgICAgICAgdHJhY2tNaW5TaXplcyxcbiAgICAgICAgICAgICAgICBndXR0ZXJPcHRpb25zLnRyYWNrIC0gMSxcbiAgICAgICAgICAgICAgICBnZXRPcHRpb24oXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrTWluU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uKG9wdGlvbnMsICdtaW5TaXplJywgMClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWluU2l6ZUVuZDogZ2V0VHJhY2tPcHRpb24oXG4gICAgICAgICAgICAgICAgdHJhY2tNaW5TaXplcyxcbiAgICAgICAgICAgICAgICBndXR0ZXJPcHRpb25zLnRyYWNrICsgMSxcbiAgICAgICAgICAgICAgICBnZXRPcHRpb24oXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrTWluU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uKG9wdGlvbnMsICdtaW5TaXplJywgMClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfSxcbiAgICAgICAgICAgIGd1dHRlck9wdGlvbnMpLFxuICAgICAgICBvcHRpb25zXG4gICAgKVxufTsgfTtcblxudmFyIEdyaWQgPSBmdW5jdGlvbiBHcmlkKG9wdGlvbnMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHRoaXMuY29sdW1uR3V0dGVycyA9IHt9O1xuICAgIHRoaXMucm93R3V0dGVycyA9IHt9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwge2NvbHVtbkd1dHRlcnM6IG9wdGlvbnMuY29sdW1uR3V0dGVycyB8fCBbXSxcbiAgICAgICAgcm93R3V0dGVyczogb3B0aW9ucy5yb3dHdXR0ZXJzIHx8IFtdLFxuICAgICAgICBjb2x1bW5NaW5TaXplczogb3B0aW9ucy5jb2x1bW5NaW5TaXplcyB8fCB7fSxcbiAgICAgICAgcm93TWluU2l6ZXM6IG9wdGlvbnMucm93TWluU2l6ZXMgfHwge319LFxuICAgICAgICBvcHRpb25zKTtcblxuICAgIHRoaXMub3B0aW9ucy5jb2x1bW5HdXR0ZXJzLmZvckVhY2goZnVuY3Rpb24gKGd1dHRlck9wdGlvbnMpIHtcbiAgICAgICAgdGhpcyQxLmNvbHVtbkd1dHRlcnNbZ3V0dGVyT3B0aW9ucy50cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICAgICAnY29sdW1uJyxcbiAgICAgICAgICAgIHRoaXMkMS5vcHRpb25zXG4gICAgICAgICkoZ3V0dGVyT3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wdGlvbnMucm93R3V0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChndXR0ZXJPcHRpb25zKSB7XG4gICAgICAgIHRoaXMkMS5yb3dHdXR0ZXJzW2d1dHRlck9wdGlvbnMudHJhY2tdID0gY3JlYXRlR3V0dGVyKFxuICAgICAgICAgICAgJ3JvdycsXG4gICAgICAgICAgICB0aGlzJDEub3B0aW9uc1xuICAgICAgICApKGd1dHRlck9wdGlvbnMpO1xuICAgIH0pO1xufTtcblxuR3JpZC5wcm90b3R5cGUuYWRkQ29sdW1uR3V0dGVyID0gZnVuY3Rpb24gYWRkQ29sdW1uR3V0dGVyIChlbGVtZW50LCB0cmFjaykge1xuICAgIGlmICh0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICdjb2x1bW4nLFxuICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICApKHtcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgIH0pO1xufTtcblxuR3JpZC5wcm90b3R5cGUuYWRkUm93R3V0dGVyID0gZnVuY3Rpb24gYWRkUm93R3V0dGVyIChlbGVtZW50LCB0cmFjaykge1xuICAgIGlmICh0aGlzLnJvd0d1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICdyb3cnLFxuICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICApKHtcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgIH0pO1xufTtcblxuR3JpZC5wcm90b3R5cGUucmVtb3ZlQ29sdW1uR3V0dGVyID0gZnVuY3Rpb24gcmVtb3ZlQ29sdW1uR3V0dGVyICh0cmFjaywgaW1tZWRpYXRlKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgICAgICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgIHRoaXMuY29sdW1uR3V0dGVyc1t0cmFja10uZGVzdHJveShpbW1lZGlhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzJDEuY29sdW1uR3V0dGVyc1t0cmFja107XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbkdyaWQucHJvdG90eXBlLnJlbW92ZVJvd0d1dHRlciA9IGZ1bmN0aW9uIHJlbW92ZVJvd0d1dHRlciAodHJhY2ssIGltbWVkaWF0ZSkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICAgICAgaWYgKCBpbW1lZGlhdGUgPT09IHZvaWQgMCApIGltbWVkaWF0ZSA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5yb3dHdXR0ZXJzW3RyYWNrXSkge1xuICAgICAgICB0aGlzLnJvd0d1dHRlcnNbdHJhY2tdLmRlc3Ryb3koaW1tZWRpYXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcyQxLnJvd0d1dHRlcnNbdHJhY2tdO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5HcmlkLnByb3RvdHlwZS5oYW5kbGVEcmFnU3RhcnQgPSBmdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQgKGUsIGRpcmVjdGlvbiwgdHJhY2spIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnY29sdW1uJykge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXSkge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5HdXR0ZXJzW3RyYWNrXS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdID0gY3JlYXRlR3V0dGVyKFxuICAgICAgICAgICAgJ2NvbHVtbicsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgKSh7XG4gICAgICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbHVtbkd1dHRlcnNbdHJhY2tdLnN0YXJ0RHJhZ2dpbmcoZSk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyb3cnKSB7XG4gICAgICAgIGlmICh0aGlzLnJvd0d1dHRlcnNbdHJhY2tdKSB7XG4gICAgICAgICAgICB0aGlzLnJvd0d1dHRlcnNbdHJhY2tdLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10gPSBjcmVhdGVHdXR0ZXIoXG4gICAgICAgICAgICAncm93JyxcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICApKHtcbiAgICAgICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm93R3V0dGVyc1t0cmFja10uc3RhcnREcmFnZ2luZyhlKTtcbiAgICB9XG59O1xuXG5HcmlkLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoaW1tZWRpYXRlKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgICAgICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gdHJ1ZTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuY29sdW1uR3V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHsgcmV0dXJuIHRoaXMkMS5jb2x1bW5HdXR0ZXJzW3RyYWNrXS5kZXN0cm95KGltbWVkaWF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMkMS5jb2x1bW5HdXR0ZXJzW3RyYWNrXTtcbiAgICAgICAgfSk7IH1cbiAgICApO1xuICAgIE9iamVjdC5rZXlzKHRoaXMucm93R3V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHsgcmV0dXJuIHRoaXMkMS5yb3dHdXR0ZXJzW3RyYWNrXS5kZXN0cm95KGltbWVkaWF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMkMS5yb3dHdXR0ZXJzW3RyYWNrXTtcbiAgICAgICAgfSk7IH1cbiAgICApO1xufTtcblxuZnVuY3Rpb24gaW5kZXggKG9wdGlvbnMpIHsgcmV0dXJuIG5ldyBHcmlkKG9wdGlvbnMpOyB9XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXIuanNcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9sb2dpbi5qc1wiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vc2lkZWJhci5qc1wiO1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29udGVudC5qc1wiO1xuaW1wb3J0IEd1dHRlcnMgZnJvbSBcIi4vZ3V0dGVycy5qc1wiO1xuaW1wb3J0IFNwbGl0IGZyb20gXCJzcGxpdC1ncmlkXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgXCIuLi9kaXN0L2Nzcy9tYWluLmNzc1wiO1xuXG5jb25zdCB1c2VyRGF0YSA9IFtdO1xuY29uc3QgcHJvamVjdERhdGEgPSBbXTtcblxuSGVhZGVyKCk7XG5Mb2dpbih1c2VyRGF0YSk7XG5TaWRlYmFyKCk7XG5Db250ZW50KHByb2plY3REYXRhKTtcbkd1dHRlcnMoKTtcblNwbGl0KHtcbiAgICBtYXhTaXplOiAyMDAsXG4gICAgY29sdW1uR3V0dGVyczogW3tcbiAgICAgICAgdHJhY2s6IDEsXG4gICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3V0dGVyLWNvbFwiKVxuICAgIH1dLFxuICAgIHJvd0d1dHRlcnM6IFt7XG4gICAgICAgIHRyYWNrOiAxLFxuICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1dHRlci1yb3dcIilcbiAgICB9XVxufSk7XG5Qcm9qZWN0KHByb2plY3REYXRhKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=