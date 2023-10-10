(self["webpackChunkverdant"] = self["webpackChunkverdant"] || []).push([["lib_index_js"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./style/activity.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/activity.css ***!
  \******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "/* Date CSS */\n\n.Verdant-events-date {\n}\n\n.Verdant-events-date-header {\n  padding: var(--jp-cell-padding);\n  border-bottom: 1px solid var(--jp-border-color3);\n  text-transform: uppercase;\n  font-size: var(--jp-content-font-size0);\n  padding-top: 1.5em;\n  position: sticky;\n  top: 0px;\n  background: var(--jp-layout-color0);\n  z-index: 2;\n  display: flex;\n  justify-content: space-between;\n}\n\n.Verdant-events-date-header-label {\n  margin-left: 1.5em;\n  margin-top: 2px;\n}\n\n.Verdant-events-date-header-collapse {\n  display: flex;\n  flex-direction: row;\n  text-align: center;\n}\n\n/* Bundle CSS */\n\n.Verdant-events-bundle-single {\n  margin-right: 4px;\n}\n\n.Verdant-events-bundle-multi-header {\n  display: flex;\n  flex-direction: row;\n}\n\n.Verdant-events-bundle-multi-header-arrow {\n  margin-right: 0.5em;\n  padding-left: var(--jp-cell-padding);\n  padding-top: calc(1em - 8px);\n}\n\n.Verdant-events-bundle-multi-header-arrow.open {\n  margin-right: 0.5em;\n  padding-left: var(--jp-cell-padding);\n  padding-top: 0px;\n}\n\n.Verdant-events-bundle-multi-header-container {\n  flex: 1 1 auto;\n  margin-right: 4px;\n}\n\n.Verdant-events-bundle-multi-header-container.open {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n}\n\n.Verdant-events-bundle-multi-header-container.open::before {\n  content: \"\";\n  flex: 1;\n  border-bottom: 1px solid;\n  margin-right: 0.25em;\n}\n\n.Verdant-events-bundle-multi-header-container.open::after {\n  content: \"\";\n  flex: 1;\n  border-bottom: 1px solid;\n  margin-left: 0.25em;\n}\n\n.Verdant-events-bundle-multi-body {\n  background-color: #f6f6f6;\n  margin-right: 4px;\n}\n\n.Verdant-events-bundle-multi-footer {\n  display: flex;\n}\n\n.Verdant-events-bundle-multi-footer-line {\n  content: \"\";\n  margin-right: 4px;\n  border-bottom: 1px solid;\n}\n\n.Verdant-events-bundle-multi-footer-spacer {\n  content: \"\";\n  width: 10%;\n}\n\n/* Event CSS */\n\n.Verdant-events-event {\n  display: flex;\n  flex-direction: row;\n  padding-left: calc(var(--jp-cell-padding) + 0.5em + 7px);\n}\n\n.Verdant-events-event.bundle {\n  padding-left: 0px;\n}\n\n.Verdant-events-event.ghostOpen {\n  background: var(--verdant-ghost-color0);\n}\n\n.Verdant-events-event-stamp {\n  flex: 0 0 5em; /* to prevent weird date text cropping */\n  min-width: 5em;\n  max-width: 5em;\n}\n\n.Verdant-events-event-row-index {\n  flex: 0 0 5em;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 0.5em;\n}\n\n.Verdant-events-event-row-map {\n  flex: 1 1 auto;\n  padding-top: 0.5em;\n}\n\n/* Event Label CSS */\n\n.Verdant-events-label {\n  display: inline-block;\n  flex: 1 1 auto;\n  color: var(--jp-content-font-color2);\n  padding: var(--jp-cell-padding);\n  padding-left: 0px;\n  max-width: calc(100% - 2 * var(--jp-cell-padding));\n}\n\n/* Event Map CSS */\n\n.Verdant-events-map {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  flex: 1 1 auto;\n  vertical-align: baseline;\n  padding-left: var(--jp-cell-padding);\n}\n\n.Verdant-events-map-cell {\n  display: inline-block;\n  width: 1px;\n  margin: 2px 1px;\n  height: 1em;\n}\n\n.Verdant-events-map-cell.highlight {\n  border-color: white;\n}\n\n/* This is the default tick, for a cell that was just run */\n.Verdant-events-map-cell.target {\n  width: 2px;\n  margin-left: 0px;\n  margin-right: 1px;\n  display: flex;\n  height: 1.5em;\n  position: absolute;\n  margin-top: -0.125em;\n}\n\n/*\n CHANGED = \"edited\",\n  REMOVED = \"removed\",\n  ADDED = \"added\",\n  SAME = \"no change\",\n  MOVED = \"moved\",\n  SAME = \"n/a\",\n  TYPE_CHANGED = \"type changed\",\n*/\n.Verdant-events-map-cell.target.tic {\n  flex: 1 1 auto;\n  border-radius: 5px;\n}\n\n.Verdant-events-map-cell.target.tic.added {\n  background-color: var(--verdant-cell-add-color1);\n}\n\n.Verdant-events-map-cell.target.tic.removed {\n  background-color: var(--verdant-cell-remove-color1);\n}\n\n.Verdant-events-map-cell.target.tic.edited {\n  background-color: var(--verdant-cell-change-color2);\n}\n\n.Verdant-events-map-cell.target.tic.moved {\n  background-color: peru;\n}\n\n.Verdant-events-map-cell.target.tic.type_changed {\n  background-color: cadetblue;\n}\n\n.Verdant-events-map-cell.target.tic.output_changed {\n  background-color: #b6aeb8;\n}\n\n.Verdant-events-map-background {\n  background: var(--jp-border-color3);\n  display: inline-block;\n  height: 1.25em;\n  position: relative;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/artifact-details.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/artifact-details.css ***!
  \**************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".v-VerdantPanel-tab-header-outLink {\n  padding: 2px;\n  padding-right: 0.5em;\n  white-space: pre;\n  font-size: var(--jp-ui-font-size0);\n  padding-top: 0.25em;\n}\n\n.v-VerdantPanel-crumbMenu {\n  flex: 1 1 auto;\n  padding: 2px;\n  padding-left: 0.5em;\n  text-overflow: ellipsis;\n  white-space: pre;\n  overflow: hidden;\n}\n\n.v-VerdantPanel-crumbMenu-item {\n  display: inline-block;\n  font-size: var(--jp-ui-font-size0);\n  text-transform: uppercase;\n  margin-right: 5px;\n  color: var(--jp-ui-font-color2);\n  vertical-align: middle;\n}\n\n.v-VerdantPanel-crumbMenu-item.verdant-link {\n  color: var(--jp-content-link-color);\n}\n\n.v-VerdantPanel-crumbMenu-seperator {\n  display: inline-block;\n  color: var(--jp-ui-font-color3);\n  margin-right: 4px;\n}\n\n.v-VerdantPanel-details-versionPair {\n  display: flex;\n}\n\n.v-VerdantPanel-details-versionPair.open {\n  border-bottom: 1px solid var(--jp-border-color1);\n  box-shadow: 0px 1px 2px 0px var(--jp-border-color2);\n  margin-bottom: 4px;\n}\n\n.v-VerdantPanel-details-versionPair-header {\n  display: flex;\n}\n\n.v-VerdantPanel-details-versionPair-col {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  max-width: 100%;\n}\n.v-VerdantPanel-details-versionPair-col.open {\n  min-width: 50%;\n}\n.v-VerdantPanel-details-versionPair-col:nth-child(2) {\n  border-left: 1px solid var(--jp-border-color1);\n}\n\n.v-VerdantPanel-details-versionPair-col.open\n  .v-VerdantPanel-details-version:last-child {\n  border-bottom: 0px;\n}\n\n.v-VerdantPanel-details-origin-header {\n  background: var(--jp-layout-color2);\n  padding: 6px;\n  text-align: center;\n  border-bottom: 1px solid var(--jp-border-color2);\n  box-shadow: 0px 2px 7px 0px var(--jp-border-color3);\n  color: var(--jp-ui-font-color2);\n}\n\n.v-VerdantPanel-details-version {\n  border-bottom: 1px solid var(--jp-border-color2);\n}\n\n.v-VerdantPanel-details-version-header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1 0 auto;\n  padding: 6px;\n  color: var(--jp-ui-font-color2);\n  font-size: var(--jp-ui-font-size0);\n  border-bottom: 1px solid var(--jp-border-color3);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.v-VerdantPanel-details-version-header.selected {\n  background-color: var(--verdant-ghost-color0);\n  border-top: 2px solid;\n}\n\n.v-VerdantPanel-details-version-header.dependent {\n  border-left: 1px solid var(--jp-border-color1);\n}\n.v-VerdantPanel-details-version-header.dependent.open {\n  flex: 0 0 auto;\n  border-left: 0px;\n  padding-top: 6px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--jp-border-color3);\n}\n\n.v-VerdantPanel-details-version-header b {\n  color: var(--jp-ui-font-color0);\n}\n\n.v-VerdantPanel-details-version-header i {\n  margin: 0px 0.25em;\n}\n\n.v-VerdantPanel-details-version-header-labelRow.date {\n  line-height: 1.5em;\n}\n\n.v-VerdantPanel-details-version-header-labelRow.dependent {\n  display: flex;\n  justify-content: space-between;\n}\n\n.v-VerdantPanel-details-version-sample {\n  padding-top: 0.5em;\n  padding-bottom: 1em;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/ghost.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/ghost.css ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "/* Ghost Book CSS */\n\n.v-Verdant-GhostBook {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n  background: var(--jp-layout-color0);\n  background-size: 40px 40px;\n}\n\n/* Ghost Toolbar CSS */\n\n.v-Verdant-GhostBook-header {\n  font-size: var(--jp-content-font-size0);\n  font-family: var(--jp-content-font-family);\n  color: var(--jp-content-font-color0);\n  flex-direction: column;\n  position: sticky;\n  top: 0px;\n  z-index: 5;\n}\n\n.v-Verdant-GhostBook-header-row {\n  display: flex;\n  justify-content: space-evenly;\n  color: var(--jp-content-font-color2);\n  margin-bottom: 0.25em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-wrap: wrap;\n  padding: 2px;\n  padding-top: 0.25em;\n  padding-left: 6px;\n  overflow: visible;\n  border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);\n  box-shadow: var(--jp-toolbar-box-shadow);\n  background: var(--jp-toolbar-background);\n  min-height: var(--jp-toolbar-micro-height);\n}\n\n.v-Verdant-GhostBook-versionSwitch-label {\n  display: inline-block;\n  margin: 0px 1em;\n  color: var(--jp-ui-font-color1);\n  font-size: var(--jp-ui-font-size1);\n  vertical-align: top;\n}\n\n.v-Verdant-GhostBook-header-timestamp {\n  flex: auto;\n  margin-left: 2em;\n  text-decoration: underline;\n  color: var(--jp-content-link-color);\n}\n\n.v-Verdant-GhostBook-diffOptions {\n  display: flex;\n  color: var(--jp-ui-font-color1);\n}\n\n.v-Verdant-GhostBook-diffOptions-dropdown {\n  display: flex;\n  position: relative;\n  width: 10em;\n  margin: 0px 8px;\n  padding: 0px 4px;\n  border-radius: var(--jp-border-radius);\n  border: 1px solid;\n  color: var(--jp-ui-font-color2);\n}\n.v-Verdant-GhostBook-diffOptions-dropdown svg {\n  fill: var(--jp-ui-font-color2);\n  margin-top: 1px;\n}\n\n.v-Verdant-GhostBook-diffOptions-dropdown-list {\n  position: absolute;\n  top: 1.5em;\n  background: var(--jp-layout-color0);\n  border: 1px solid var(--jp-border-color1);\n  border-radius: var(--jp-border-radius);\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  width: calc(10em + 4px);\n  right: 1px;\n}\n\n.v-Verdant-GhostBook-diffOptions-option {\n  flex: 1 1 auto;\n}\n.v-Verdant-GhostBook-diffOptions-dropdown-list\n  .v-Verdant-GhostBook-diffOptions-option {\n  padding: 4px;\n}\n.v-Verdant-GhostBook-diffOptions-dropdown-list\n  .v-Verdant-GhostBook-diffOptions-option:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.v-Verdant-GhostBook-exportOptions {\n  padding: 0px 8px;\n  color: var(--jp-ui-font-color1);\n  border: 1px solid var(--jp-border-color1);\n  border-radius: var(--jp-border-radius);\n  margin: 0px 4px;\n}\n\n.v-Verdant-GhostBook-exportOptions .verdant-icon-export {\n  margin-right: 6px;\n}\n\n.v-Verdant-GhostBook-export-msg {\n  text-align: center;\n  color: var(--jp-layout-color0);\n  background: var(--jp-inverse-layout-color3);\n  width: 100%;\n  padding: 5px 0px;\n  margin-top: -3px;\n  font-size: small;\n  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */\n  -moz-animation: fadein 2s; /* Firefox < 16 */\n  -ms-animation: fadein 2s; /* Internet Explorer */\n  -o-animation: fadein 2s; /* Opera < 12.1 */\n  animation: fadein 2s;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Firefox < 16 */\n@-moz-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Internet Explorer */\n@-ms-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Opera < 12.1 */\n@-o-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Ghost Cell CSS */\n\n.v-Verdant-GhostBook-container {\n  padding: var(--jp-cell-padding)\n    calc(var(--jp-cell-padding) + var(--jp-notebook-padding));\n  display: flex;\n  flex-direction: row;\n  border: 1px solid var(--jp-layout-color0);\n}\n\n.v-Verdant-GhostBook-container.added {\n  background-color: var(--verdant-cell-add-color0);\n}\n.v-Verdant-GhostBook-container.edited {\n  background-color: var(--verdant-ghost-color0);\n}\n.v-Verdant-GhostBook-container.removed {\n  background-color: var(--verdant-cell-remove-color0);\n}\n\n.v-Verdant-GhostBook-container-stack {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  width: calc(100% - 8px);\n}\n\n.v-Verdant-GhostBook-cell {\n  background: var(--jp-layout-color0);\n  color: var(--jp-content-font-color1);\n  font-family: var(--jp-content-font-family);\n  font-size: var(--jp-content-font-size1);\n  line-height: var(--jp-content-line-height);\n  min-height: 2em;\n}\n\n.v-Verdant-GhostBook-cell.code {\n  font-family: var(--jp-code-font-family);\n  font-size: var(--jp-code-font-size);\n  line-height: var(--jp-code-line-height);\n  background: var(--jp-cell-editor-background);\n  overflow-x: auto;\n  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);\n  white-space: pre;\n}\n\n.v-Verdant-GhostBook-cell.code.active {\n  box-shadow: var(--jp-input-box-shadow);\n  background-color: var(--jp-cell-editor-active-background);\n  border-color: var(--jp-cell-editor-active-border-color);\n}\n\n.v-Verdant-GhostBook-cell.markdown {\n  height: 100%;\n}\n\n.v-Verdant-GhostBook-cell.added {\n  border: var(--jp-border-width) solid lawngreen;\n}\n\n.v-Verdant-GhostBook-cell.removed {\n  border: var(--jp-border-width) solid red;\n}\n\n.v-Verdant-GhostBook-cell-band {\n  flex: 1 1 var(--jp-cell-collapser-width);\n  padding: 0px;\n  margin: 0px;\n  margin-right: 4px;\n  border: none;\n  outline: none;\n  background: transparent;\n  border-radius: var(--jp-border-radius);\n  opacity: 1;\n  min-width: 8px;\n}\n\n.v-Verdant-GhostBook-cell-band.active {\n  background: var(--jp-brand-color1);\n}\n\n.v-Verdant-GhostBook-cell-container {\n  display: flex;\n  flex-direction: row;\n  position: relative;\n}\n\n.v-Verdant-GhostBook-cell-container.output {\n  padding-top: 5px;\n}\n.v-Verdant-GhostBook-cell-container.output.changed {\n  background-color: var(--verdant-ghost-color0);\n}\n\n.v-Verdant-GhostBook-cell-container.hoverInspect:hover,\n.v-Verdant-GhostBook-cell-container.output.hoverInspect:hover,\n.v-Verdant-GhostBook-cell-container.output.changed:hover,\n.v-Verdant-GhostBook-cell-container.hoverInspect:hover\n  .v-Verdant-GhostBook-cell,\n.v-Verdant-GhostBook-cell-container.hoverInspect:hover\n  .v-Verdant-GhostBook-cell-header,\n.v-Verdant-GhostBook-cell-container.hoverInspect:hover\n  .v-Verdant-GhostBook-cell-content,\n.v-Verdant-GhostBook-cell-container.output.hoverInspect:hover\n  .v-Verdant-GhostBook-cell,\n.v-Verdant-GhostBook-cell-container.output.hoverInspect:hover\n  .v-Verdant-GhostBook-cell-header,\n.v-Verdant-GhostBook-cell-container.output.hoverInspect:hover\n  .v-Verdant-GhostBook-cell-content {\n  background-color: var(--verdant-ghost-color0);\n}\n\n.v-Verdant-GhostBook-cell-content {\n  flex: 1 1 100%;\n  max-width: calc(100% - var(--jp-cell-prompt-width));\n  background: var(--jp-cell-editor-background);\n  display: flex;\n  flex-direction: column;\n}\n\n/* Ghost Output CSS */\n\n/* Ghost Label CSS */\n\n.v-Verdant-GhostBook-cell-header {\n  position: relative;\n  min-width: var(--jp-cell-prompt-width);\n  max-width: var(--jp-cell-prompt-width);\n  opacity: 0.8;\n  box-sizing: border-box;\n  padding: var(--jp-cell-padding);\n}\n\n.v-Verdant-GhostBook-cell-label {\n  position: absolute;\n  z-index: 3;\n  left: calc(1px - var(--jp-notebook-padding) - var(--jp-cell-padding));\n  border: 1px solid var(--jp-border-color0);\n  padding: 4px 8px;\n  text-align: center;\n  font-size: var(--jp-ui-font-size0);\n  font-family: var(--jp-ui-font-family);\n  color: var(--jp-content-link-color);\n  text-decoration: underline;\n}\n\n/* Ghost (ghost.ts) CSS */\n\n.v-Verdant-GhostBook-icon {\n  background-image: var(--verdant-icon-ghostbook);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/index.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/index.css ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./img/log-icon-4.svg */ "./style/img/log-icon-4.svg?ba03");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./img/ghost-book.svg */ "./style/img/ghost-book.svg");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./img/search.svg */ "./style/img/search.svg");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./img/time-inspect.svg */ "./style/img/time-inspect.svg");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ./img/chevron-right.svg */ "./style/img/chevron-right.svg");
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ./img/chevron-down.svg */ "./style/img/chevron-down.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
// Module
exports.push([module.id, "/*-----------------------------------------------------------------------------\n| Variables\n|----------------------------------------------------------------------------*/\n\n:root {\n  --jp-private-verdant-manager-tab-height: 24px;\n\n  --verdant-icon-logo: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\n  --verdant-icon-ghostbook: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  --verdant-icon-search: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\n  --verdant-icon-timeinspect: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n\n  --verdant-icon-datearrow-closed: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  --verdant-icon-datearrow-open: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n\n  --verdant-ghost-color0: rgba(140, 204, 237, 0.21);\n  --verdant-ghost-color1: rgba(140, 204, 237, 0.5);\n  --verdant-ghost-color2: #8ccced;\n  --verdant-cell-change-color1: #92cbef;\n  --verdant-cell-change-color2: #2199f1;\n  --verdant-cell-remove-color0: rgb(255, 125, 125, 0.5);\n  --verdant-cell-remove-color1: #ff7d7d;\n  --verdant-cell-remove-color2: #ce1d1d;\n  --verdant-cell-add-color0: rgba(210, 252, 157, 0.5);\n  --verdant-cell-add-color1: #9dfcb6;\n  --verdant-cell-add-color2: #107e5a;\n}\n\n/*-----------------------------------------------------------------------------\n| Verdant in the dock panel, copied css from tabs-extension\n|----------------------------------------------------------------------------*/\n.verdant-log-icon svg {\n  fill: var(--jp-inverse-layout-color3);\n}\n\n.verdant-icon-chevron {\n  height: 16px;\n  flex: 0 0 auto; /* prevents icon shrinking in flex context */\n  vertical-align: middle;\n  fill: var(--jp-ui-font-color1);\n}\n\n.verdant-icon-big-chevron {\n  height: 16px;\n  flex: 0 0 auto; /* prevents icon shrinking in flex context */\n  vertical-align: middle;\n  stroke: var(--jp-ui-font-color2);\n  margin: 0px 6px;\n}\n.verdant-icon-big-chevron:hover {\n  stroke: var(--jp-ui-font-color1);\n}\n\n.verdant-icon-x {\n  fill: var(--jp-ui-font-color1);\n  height: 16px;\n  flex: 0 0 auto; /* prevents icon shrinking in flex context */\n  vertical-align: middle;\n}\n\n.verdant-icon-export {\n  fill: var(--jp-ui-font-color1);\n  height: 14px;\n  flex: 0 0 auto; /* prevents icon shrinking in flex context */\n  vertical-align: bottom;\n}\n\n.verdant-icon-missingImage {\n  fill: var(--jp-ui-font-color1);\n  height: 14px;\n  flex: 0 0 auto; /* prevents icon shrinking in flex context */\n  vertical-align: middle;\n}\n\n.verdant-link {\n  text-decoration: underline;\n  color: var(--jp-content-link-color);\n}\n\n.v-Verdant-tooltip {\n  position: absolute;\n  padding: 4px 8px;\n  background-color: var(--jp-layout-color2);\n  color: var(--jp-ui-font-color1);\n  font-size: var(--jp-ui-font-size2);\n  border-radius: var(--jp-border-radius);\n}\n\n.v-Verdant-sidePanel {\n  display: flex;\n  flex-direction: column;\n  min-width: var(--jp-sidebar-min-width);\n  color: var(--jp-ui-font-color1);\n  background: var(--jp-layout-color1);\n  /* This is needed so that all font sizing of children done in ems is\n   * relative to this base size */\n  font-size: var(--jp-ui-font-size1);\n}\n\n#v-VerdantPanel header {\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);\n  width: 100%;\n  font-size: var(--jp-ui-font-size0);\n  font-weight: 600;\n  letter-spacing: 1px;\n  margin: 0px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  padding-left: 12px;\n  text-transform: uppercase;\n  display: inline-flex;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/landing.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/landing.css ***!
  \*****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "#verdant-landing {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  text-align: center;\n  padding: 0px 10%;\n}\n\n#verdant-landing-message {\n  color: var(--jp-ui-font-color2);\n  font-style: italic;\n  font-size: var(--jp-content-font-size1);\n}\n\n#verdant-landing-img {\n  background-image: var(--verdant-icon-logo);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 3em;\n  margin-top: 20px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/sampler.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/sampler.css ***!
  \*****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".v-VerdantPanel-cellList-sample {\n  white-space: nowrap;\n  padding: var(--jp-code-padding);\n  width: calc(100% - var(--jp-code-padding));\n  text-overflow: ellipsis;\n  margin: 0px;\n  overflow: hidden;\n  /*height: calc(2em + var(--jp-code-padding));*/\n  min-height: 1em;\n}\n\n.v-VerdantPanel-cellList-sample.highlight {\n  margin-left: calc(0.5em - 2px);\n  border-color: var(--jp-brand-color1);\n  border-width: 4px;\n  border-radius: var(--jp-border-radius);\n}\n.v-VerdantPanel-cellList-sample.c {\n  font-family: var(--jp-code-font-family);\n  font-size: var(--jp-code-font-size);\n  padding: var(--jp-code-padding);\n  line-height: var(--jp-code-line-height);\n}\n\n.v-VerdantPanel-cellList-sample h1,\n.v-VerdantPanel-cellList-sample h2,\n.v-VerdantPanel-cellList-sample h3,\n.v-VerdantPanel-cellList-sample h4,\n.v-VerdantPanel-cellList-sample h5,\n.v-VerdantPanel-cellList-sample h6,\n.v-VerdantPanel-cellList-sample p {\n  padding: 0px;\n  margin: 0px;\n}\n\n.v-VerdantPanel-sampler-content {\n  -webkit-margin-before: 5px;\n  -webkit-margin-after: 0px;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 0px;\n}\n\n.v-VerdantPanel-sampler-version-content {\n  width: max-content;\n  padding-left: var(--jp-code-padding);\n}\n.v-VerdantPanel-sampler-version-content.overflow {\n  border-bottom: 1px solid var(--jp-warn-color0);\n  margin-bottom: 10px;\n}\n\n.v-VerdantPanel-sampler-version-content.markdown {\n  font-family: var(--jp-content-font-family);\n}\n\n.v-Verdant-sampler-markdown-linebreak {\n}\n\n.v-VerdantPanel-sampler-version-content.code {\n  white-space: nowrap;\n  font-family: var(--jp-code-font-family);\n  padding: var(--jp-code-padding);\n}\n\n.v-VerdantPanel-sampler-version-content.output pre {\n  /*white-space: nowrap;*/\n}\n\n.v-VerdantPanel-sampler-version {\n  display: flex;\n  font-size: var(--jp-code-font-size);\n  line-height: var(--jp-code-line-height);\n  letter-spacing: var(--jp-cell-prompt-letter-spacing);\n  font-family: var(--jp-cell-prompt-font-family);\n  text-align: left;\n  overflow-x: auto;\n}\n.v-VerdantPanel-sampler-version.code {\n  background: var(--jp-cell-editor-background);\n}\n.v-VerdantPanel-sampler-version.last {\n  border-bottom: var(--jp-border-width) solid transparent;\n}\n.v-VerdantPanel-sampler-version.markdown {\n  font-size: var(--jp-ui-font-size1);\n  color: var(--jp-ui-font-color1);\n  font-family: var(--jp-ui-font-family);\n}\n\n.v-VerdantPanel-cellList-sample .jp-RenderedSVG img,\n.v-VerdantPanel-sampler-version .jp-RenderedSVG img {\n  height: 16px;\n  width: 2em;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  flex: 0 0 auto; /* prevents icon shrinking in flex context */\n  vertical-align: middle;\n}\n\n.markdown-sample {\n  padding: 4px;\n}\n.markdown-sample h1,\n.markdown-sample h2,\n.markdown-sample h3,\n.markdown-sample h4 {\n  margin: 2px;\n  font-size: initial;\n}\n\n.v-Verdant-sampler-code-same {\n  display: inline-block;\n}\n.v-Verdant-sampler-code-added {\n  /*tested for accessibility */\n  color: #1a4936;\n  display: inline-block;\n  background: #e8ffd5;\n}\n.v-Verdant-sampler-code-removed {\n  color: red;\n  text-decoration: line-through;\n  display: inline-block;\n  background-color: var(--verdant-cell-remove-color0);\n}\n\n.v-VerdantPanel-sample-searchResult {\n  background-color: #f7b500;\n}\n\n.v-VerdantPanel-sampler-version-header {\n  font-size: var(--jp-ui-font-size0);\n  padding-left: var(--jp-cell-padding);\n  padding-top: var(--jp-cell-padding);\n  color: var(--jp-content-font-color2);\n  text-transform: uppercase;\n  border-top: 1px solid var(--jp-border-color2);\n}\n.v-VerdantPanel-sampler-version-header.search {\n  border-top: 0px;\n}\n.v-VerdantPanel-sampler-version-header.searchVerLabel {\n  padding-inline-start: 2em;\n  border-top: 0px;\n}\n\n.v-VerdantPanel-sampler-version-header-link {\n  text-decoration: underline;\n  color: var(--jp-content-link-color);\n}\n\n.v-VerdantPanel-wishbone-highlight {\n  background-color: var(--jp-editor-selected-focused-background);\n  opacity: 0.4;\n}\n.v-VerdantPanel-wishbone-code {\n  z-index: 14;\n}\n.v-VerdantPanel-wishbone-code-mask {\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  position: absolute;\n  z-index: 12;\n  top: 0px;\n  left: 0px;\n  cursor: default;\n}\n.v-VerdantPanel-wishbone-code-mask.highlight {\n  background-color: var(--jp-editor-selected-focused-background);\n  opacity: 0.4;\n}\n\n.v-VerdantPanel-wishbone-code-highlight {\n  background: var(--jp-editor-selected-focused-background) !important;\n  background-color: var(--jp-editor-selected-focused-background);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/search.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/search.css ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".v-VerdantPanel-search {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.v-VerdantPanel-searchContainer {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  vertical-align: text-bottom;\n  padding: 18px 12px;\n  background: var(--jp-layout-color0);\n}\n\n.v-VerdantPanel-searchIcon {\n  display: inline-block;\n  width: 14px;\n  flex: 0 0 auto; /* prevents icon shrinking in flex context */\n  margin-right: 4px;\n  fill: var(--jp-content-font-color2);\n}\n\n.v-VerdantPanel-searchContainer .v-VerdantPanel-searchIcon {\n  width: calc(1.75em - 2px);\n  fill: var(--jp-layout-color4);\n  margin-right: 1em;\n}\n\n.v-VerdantPanel-searchContainer .verdant-icon-x {\n  margin-top: 3px;\n  z-index: 2;\n  fill: var(--jp-ui-font-color2);\n  padding: 3px;\n  border-radius: 5px;\n  background: var(--verdant-ghost-color1);\n}\n\n.v-VerdantPanel-searchText {\n  display: inline-block;\n  flex: 1 1 auto;\n  height: 1.75em;\n  vertical-align: text-bottom;\n  outline: transparent;\n  color: var(--jp-ui-font-color0);\n  background: var(--jp-layout-color0);\n  padding-left: 5px;\n  border: 1px solid var(--jp-layout-color4);\n  border-radius: var(--jp-border-radius);\n}\n\n.v-VerdantPanel-searchContent {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n\n.VerdantPanel-search-results-message {\n  text-align: center;\n  padding: var(--jp-cell-padding);\n  font-style: italic;\n}\n\n.VerdantPanel-search-results-header {\n  display: flex;\n  padding: 14px 10px;\n  background: var(--jp-layout-color0);\n  color: var(--jp-ui-font-color1);\n}\n.VerdantPanel-search-results-header.open {\n  border-bottom: 1px solid var(--jp-layout-color2);\n  box-shadow: 0px 0px 2px var(--jp-inverse-layout-color2);\n}\n\n.VerdantPanel-search-results-header-title {\n  margin-left: 2em;\n}\n\n.VerdantPanel-search-results-category {\n  flex: 0 0 auto;\n  min-height: calc(24px + 1.5em);\n  overflow: hidden;\n  border-bottom: 2px solid var(--jp-layout-color3);\n}\n.VerdantPanel-search-results-category.open {\n  flex: 0 1 auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.VerdantPanel-search-results-category-content {\n  overflow: scroll;\n}\n\n.VerdantPanel-search-results-category-footer {\n  border: 4px solid var(--jp-layout-color0);\n  border-bottom: 6px solid var(--jp-layout-color0);\n  border-top: 0px;\n  text-align: right;\n  padding: var(--jp-cell-padding);\n  padding-top: 0px;\n  display: none;\n}\n\n.VerdantPanel-search-results-category-footer:hover {\n  background: var(--jp-rendermime-table-row-background);\n}\n\n.VerdantPanel-search-results-artifact-header {\n  display: flex;\n  justify-content: space-between;\n  padding: 4px 10px;\n  font-size: var(--jp-content-font-size0);\n  color: var(--jp-ui-font-color2);\n}\n\n.VerdantPanel-search-results-artifact-header.list-result {\n  justify-content: flex-end;\n}\n\n.VerdantPanel-search-results-artifact-header.open-artifact {\n  position: sticky;\n  top: 0px;\n  background: var(--jp-layout-color0);\n  z-index: 5;\n}\n\n.VerdantPanel-search-results-artifact-cell-title svg {\n  margin-right: 1em;\n}\n\n.VerdantPanel-search-results-artifact {\n  margin-top: 20px;\n  border-bottom: 1px solid var(--jp-border-color3);\n  padding-bottom: 10px;\n}\n\n.VerdantPanel-search-results-artifact.open {\n  padding-bottom: 20px;\n  border-color: var(--jp-border-color0);\n}\n\n.VerdantPanel-search-results-artifact:last-child,\n.VerdantPanel-search-results-artifact.open:last-child {\n  border-color: transparent;\n}\n\n.VerdantPanel-search-results-header-button {\n  padding-top: 2px;\n  width: 12px;\n  font-size: 1em;\n  opacity: 0.7;\n  display: inline-block;\n  float: left;\n}\n\n.VerdantPanel-search-results-header-button .circle {\n  position: relative;\n  width: 12px;\n  height: 12px;\n}\n.VerdantPanel-search-results-header-button .circle .horizontal {\n  position: absolute;\n  background-color: var(--jp-content-font-color1);\n  width: 8px;\n  height: 2px;\n  left: 50%;\n  margin-left: -4px;\n  top: 50%;\n  margin-top: 2px;\n}\n.VerdantPanel-search-results-header-button .circle .vertical {\n  position: absolute;\n  background-color: var(--jp-content-font-color1);\n  width: 2px;\n  height: 8px;\n  left: 50%;\n  margin-left: -1px;\n  top: 50%;\n  margin-top: -6px;\n}\n\n.v-VerdantPanel-search-version {\n  margin: 2px 10px;\n  border: 1px solid var(--jp-content-link-color);\n  border-radius: var(--jp-border-radius);\n  max-height: 50vh;\n  overflow: scroll;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/summary.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/summary.css ***!
  \*****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".v-VerdantPanel-Summary-title {\n  width: 100%;\n  padding: 8px;\n  padding-top: 12px;\n  text-align: center;\n}\n\n.v-VerdantPanel-Summary-header {\n  display: inline-block;\n  width: calc(100% - 10px);\n  padding: 5px;\n  border-bottom: 1px solid var(--jp-border-color3);\n  margin: 0px;\n  color: var(--jp-ui-font-color3);\n}\n.v-VerdantPanel-Summary-header-label {\n  display: inline-block;\n  text-align: center;\n}\n.v-VerdantPanel-Summary-header-label.cell {\n  width: 25%;\n}\n.v-VerdantPanel-Summary-header-label.r {\n  color: var(--jp-ui-font-color0);\n  width: 15%;\n}\n.v-VerdantPanel-Summary-header-label.preview {\n  width: 60%;\n}\n\n.v-VerdantPanel-Summary-table {\n  display: inline-flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: hidden scroll;\n}\n\n.v-VerdantPanel-Summary-table-row {\n  position: relative;\n  width: 100%;\n  border-bottom: 1px solid var(--jp-border-color2);\n  max-height: 50vh;\n  overflow: hidden;\n}\n.v-VerdantPanel-Summary-table-row:hover,\n.v-VerdantPanel-Summary-table-row.c:hover {\n  background-color: var(--verdant-ghost-color0);\n}\n.v-VerdantPanel-Summary-table-row.c {\n  background-color: var(--jp-cell-editor-background);\n}\n.v-VerdantPanel-Summary-table-row.focused:before {\n  position: absolute;\n  content: \"\";\n  height: 100%;\n  width: var(--jp-cell-collapser-width);\n  background-color: var(--jp-brand-color1);\n  border-radius: var(--jp-border-radius);\n}\n\n.v-VerdantPanel-Summary-table-row-name {\n  display: inline-block;\n  width: 25%;\n  text-align: center;\n}\n.v-VerdantPanel-Summary-table-row-name.o {\n  vertical-align: top;\n}\n.v-VerdantPanel-Summary-table-row-version {\n  display: inline-block;\n  width: 15%;\n  text-align: center;\n  font-weight: bold;\n}\n\n.v-VerdantPanel-Summary-table-row-sample {\n  display: inline-block;\n  width: calc(60% - 1px);\n  vertical-align: middle;\n  border-left: 1px solid var(--jp-border-color2);\n}\n\n.v-VerdantPanel-Summary-table-row-outputLabel {\n  display: inline-block;\n  position: relative;\n  border-left: 1px solid var(--jp-content-font-color2);\n  border-bottom: 1px solid var(--jp-content-font-color2);\n  padding: 0.25em 0.5em;\n  margin-bottom: 6px;\n  margin-left: calc(50% - 0.5em);\n  font-size: smaller;\n}\n.v-VerdantPanel-Summary-table-row-outputLabel:after {\n  position: absolute;\n  content: \"\";\n  bottom: -4px;\n  right: -6px;\n  width: 0;\n  height: 0;\n  border-top: 4px solid transparent;\n  border-bottom: 4px solid transparent;\n  border-left: 6px solid var(--jp-content-font-color2);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/verdant-panel.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/verdant-panel.css ***!
  \***********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".v-VerdantPanel {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.v-VerdantPanel-content {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.v-VerdantPanel-content-container {\n  overflow: hidden;\n  height: 100%;\n}\n\n.v-VerdantPanel-inspectorButton {\n  position: sticky;\n  width: 100%;\n  bottom: 0px;\n  background: var(--jp-layout-color0);\n  border-top: 1px solid var(--jp-border-color0);\n  box-shadow: 0px 0px 4px var(--jp-inverse-layout-color4);\n}\n.v-VerdantPanel-inspectorButton:hover {\n  background: var(--jp-layout-color2);\n}\n.v-VerdantPanel-inspectorButton.active {\n  background-color: var(--jp-cell-editor-active-border-color);\n  color: white;\n}\n.v-VerdantPanel-inspectorButton.active:hover {\n  background-color: var(--jp-brand-color0);\n}\n\n.v-VerdantPanel-inspectorButton-label {\n  display: inline-block;\n  width: calc(100% - 16px);\n  text-align: center;\n  padding: 8px;\n}\n\n.v-VerdantPanel-inspectorButton-icon {\n  width: 20px;\n  vertical-align: middle;\n  fill: var(--jp-content-font-color2);\n  margin-left: 1em;\n}\n.v-VerdantPanel-inspectorButton.active .v-VerdantPanel-inspectorButton-icon {\n  fill: white;\n}\n\n.v-VerdantPanel-tabContainer {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  min-height: 2em;\n}\n\n.v-VerdantPanel-tab {\n  display: inline-block;\n  padding: var(--jp-cell-padding);\n  border: var(--jp-border-width) solid var(--jp-border-color1);\n  flex: 1 1 auto;\n  background: var(--jp-layout-color2);\n  border-left-width: 0px;\n  text-align: center;\n  user-select: none;\n  border-top-width: 0px;\n}\n.v-VerdantPanel-tab.active {\n  background: var(--jp-layout-color0);\n  border-bottom-color: transparent;\n  /*border-top: var(--jp-private-horizontal-tab-active-top-border) solid\n    var(--jp-brand-color1);*/\n}\n\n.v-VerdantPanel-tab-header {\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid var(--jp-border-color2);\n  padding-bottom: 4px;\n  position: sticky;\n  top: 0px;\n  background: var(--jp-layout-color0);\n  z-index: 2;\n  box-shadow: 0px 2px 7px 0px var(--jp-border-color3);\n}\n\n/*\n* Animated button\n*/\n\n.vertical {\n  transform: rotate(-45deg);\n}\n.horizontal {\n  transform: rotate(-45deg);\n  opacity: 1;\n}\n\n.opened .circle {\n  transition: all 0.25s ease-in-out;\n  transform: rotate(90deg);\n}\n\n.closed .circle {\n  transition: all 0.25s ease-in-out;\n  transform: rotate(0deg);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./style/img/log-icon-4.svg?8a27":
/*!**********************************!*\
  !*** ./style/img/log-icon-4.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 350 360\">\n  <path fill-rule=\"nonzero\" d=\"M305.47188 0c5.84159 17.7574 2.14145 39.38545-11.10041 64.88417-11.8438 22.80657-29.10644 45.41865-51.78794 67.83624l-.31516 2.21034-.3207 2.13668-.22416 1.43097-.2386 1.47272-.25307 1.51451-.2675 1.5563-.28196 1.59812-.45003 2.47562-.31808 1.70274-.33254 1.74462-.15073.77297 18.694.00096c3.18043 0 6.20076.64547 8.2952 1.78206l.2798.15802c2.275 1.2346 3.325 2.82194 3.15 4.49747l-.30725 2.00958-.30684 1.92541-.20412 1.23727-.30524 1.787-.30373 1.70506-.20144 1.09158-.3003 1.57033-.19879 1.00253-.29573 1.43789-.19535.91501-.19376.88044-.19206.8461-.28463 1.20533-.18726.76135-.18513.72787-.18287.69465-.1805.66167h36.4c34.64212 1.054 44.1878 45.90346 46.8005 72.35272l.1641 1.73534c.05142.5689.0996 1.12804.14477 1.67673l.1266 1.61402.10967 1.54721.0939 1.47632.0939 1.6787.07485 1.5627.03093.7356.07 2.01305.03025 1.17164.02602 1.48397.00951 1.13428v.2962c0 23.01646-4.025 44.62194-11.2 61.02447-8.75 19.84178-21 29.45401-37.8 29.45401H49c-36.0094 0-45.5789-46.481-48.10417-73.12604l-.15979-1.76549a210.6136 210.6136 0 01-.0723-.8588l-.13025-1.66687-.11221-1.59548-.0955-1.51958-.08008-1.43916-.09257-1.96082-.06633-1.76278-.03698-1.25798-.02502-1.1147-.01981-1.38727L0 268.71207c0-23.01646 4.025-44.62195 11.2-61.02448 8.75-19.84177 21-29.454 37.8-29.454h82.425l1.87746-.3416 1.84584-.3432 1.81446-.3447 1.78333-.34606 1.75244-.34732 1.72181-.34846 1.69143-.34948 2.4807-.52588 1.61654-.35152 1.58702-.35212 2.32571-.52908 1.5143-.35314 1.48566-.35334 1.45725-.35342 1.42908-.35338 2.09139-.52975 2.02942-.52901 1.31894-.35207 1.92801-.52689 1.25212-.35029 1.82893-.52367 1.7706-.52121 1.1484-.34591 1.67524-.51624 1.61913-.51271 2.07301-.67747 1.49148-.50297.96464-.33265.9412-.33038.918-.328 1.33403-.48726.86108-.32152 1.24982-.477 1.2004-.47031.77324-.30963 1.11992-.45829 1.07273-.45054 1.02639-.4424.98088-.43386.9362-.42492 1.05744-.49367c.51343-.24341 1.00408-.48162 1.47277-.71424l.9083-.45768.43261-.22305.82305-.43408.76798-.41752.71432-.40028.97396-.56663.86115-.5241.5138-.32464.46719-.30407.6165-.41605.51957-.36598.42741-.31365.34003-.25907.51569-.40685c1.75-2.20464 5.95-3.52742 10.85-3.52742l16.585-.00096.13858-.69608.50536-2.61316.31891-1.68924.30453-1.64691.29014-1.60458.27574-1.56221.26136-1.51984.24696-1.47744.23257-1.43503.21818-1.3926.53115-3.59112.545-3.90444.67985-5.08459.83797-6.49936.16354-1.30854c-22.2354-16.15689-38.16027-33.18246-47.77463-51.07672l-3.39907-6.33741-5.59032-10.48595-3.78866-7.17764-2.66144-5.10423-1.80466-3.51452-.9025-1.78623-.74572-1.50057-.44184-.90574-.38095-.79683L168 25.9371c21.62542 8.57138 38.78116 21.33706 51.46722 38.29704 9.2215 12.32823 16.77715 26.1715 22.66695 41.5298 5.24027-17.6801 12.0726-33.05379 20.49607-46.12121C276.18632 38.61303 290.46687 18.73213 305.47188 0zM266.7 336.7032l-1.09123.0284-2.16996.06347-2.15312.07224-2.13604.0809-2.11876.08937-2.10125.09774-2.08351.10594-2.06557.114-2.04739.12192-3.03653.19742-2.001.14109-1.98204.1485-2.93706.23636-1.93372.16641-1.914.17333-1.89405.1801-1.8739.18673-1.85352.1932-1.8329.19955-1.8121.20574-1.79104.21179-1.76978.2177-1.7483.22345-1.72658.22908-1.70466.23455-1.6825.23988-2.48176.3695-1.62617.25259-1.60325.2574-1.5801.2621-1.55675.26664-1.53316.27103-1.50935.27528-1.48532.2794-1.46108.28335-1.43661.28719-1.41193.29086-1.387.29439-1.36189.29778-1.33653.30103-1.31096.30413-1.918.4617-1.24606.31127-1.21971.31385-1.19315.31632-1.16636.31863-1.13935.3208h89.95c-2.8-3.0865-5.425-6.61393-7.525-10.4941zM138.55045 202.40141l-2.13314.00605a350.72507 350.72507 0 00-4.187.04942l-2.05447.04261-2.0289.05406-2.0036.0651c-.6637.02352-1.32322.0488-1.97864.0758l-1.95399.08611-1.92963.09604-2.8495.16184-2.79647.18208-1.83538.132-1.8126.14005-1.79012.14771-1.76796.15502-1.74611.16193-1.72458.16848-1.70336.17465-1.68244.18044-1.66185.18585-1.64155.1909-2.42498.29496-1.5922.20184-2.35242.30962-1.5448.21044-1.52639.21322-2.25573.32422-2.21606.32836-2.17743.33123-3.54609.55497-2.765.44322-2.03347.33-6.48741 1.0654-2.51647.40769-2.4901.39398-2.46542.37742c-8.99673 1.35007-17.53003 2.309-25.97519 2.24642-.175.26456-.175.52912-.35.79368-2.275 6.52573-4.375 14.02151-5.95 22.0464 6.301.53979 11.55838 1.46828 16.0989 2.62493l1.16844.3068c1.1526.31177 2.25836.63812 3.32307.9762l.98828.32094a79.7274 79.7274 0 01.9652.32733l.94318.33317a82.33345 82.33345 0 011.37584.50958l.89283.3455.87455.3495.85736.353.84121.35596.82615.3584.81215.3603 1.19431.5429 1.16883.54423 1.9012.90526 1.1185.53917 1.8897.90187 1.20173.56617 1.51772.6998.9229.41452.93483.4097.949.40424.96538.39812.6538.2617.66274.2585 1.01233.38135.68798.24967.69925.2458.71116.24174.72374.23749.73698.23304.75088.2284.76544.22358.78067.21856.79656.21334 1.22606.30981.83917.19947 1.07463.24104 1.10436.23147.90577.17802.92628.17148.47104.08321 1.44572.23929.9918.15064 1.01497.14333.51638.06885 1.05095.13197 1.07577.12417 1.10124.11617 1.12739.10798 1.15419.0996 1.18165.09102 1.20977.08225.61564.03778 1.2532.06875 1.28299.0595 1.31342.05007c.44295.01509.89109.02858 1.34452.04043l1.37628.03061a187.464 187.464 0 001.40871.0206l1.4418.01039.73351.0013c.68793 0 1.36775-.00157 2.03974-.0047l1.99282-.014 1.94765-.02318.95744-.01499 1.88322-.0367 1.84247-.04555 2.69116-.08464 1.74832-.06712 1.71376-.0755 1.68094-.08378 1.6499-.09191 2.42052-.15283 1.58002-.11168 1.55516-.11936 1.53207-.12691 1.51073-.13433 1.49117-.14162 1.47336-.14878 2.18052-.2363 2.1504-.25168 1.41981-.17612 1.41083-.18262 1.40362-.189 1.39817-.19524 1.3945-.20137 2.08869-.31323 1.39301-.2161c3.5-.5291 7.175.44093 8.225 2.20465 1.05 1.76371-.875 3.6156-4.375 4.14472l-1.44393.21455-2.14883.31115-2.12357.2967-2.12874.28537-1.42479.18368-1.43122.17824-1.4393.17265-1.44902.1669-1.46041.16098-1.47344.1549-1.48813.14869-1.50446.14228-2.29092.2011-2.33696.18581-1.5863.11512-1.6109.10794-2.46605.14808-2.53066.13101-1.72576.0776-2.65073.10136-2.7302.08286-1.86704.0447-1.90648.03607-1.94758.0273-3.00203.02412-2.05755.00464c-3.1325 0-6.08125-.06173-8.86305-.17831l-1.64918-.07648-1.60992-.0893-.79049-.04937-1.55254-.10795-1.51529-.11995a148.72991 148.72991 0 01-2.20487-.20172l-1.4257-.14853a133.97077 133.97077 0 01-2.07427-.24304l-1.34116-.17504-1.30876-.18507-1.27715-.19477a113.99511 113.99511 0 01-1.24636-.20413l-1.21637-.21317a105.76084 105.76084 0 01-1.77009-.33598l-1.14493-.23433a98.37006 98.37006 0 01-1.6667-.36615l-1.07853-.25341-1.05338-.26046-1.02903-.2672-.50564-.136-.99404-.27666a88.0546 88.0546 0 01-.9717-.28256l-.95018-.28813-.46727-.14605-.91942-.29587-.8999-.30061-.88122-.30503-.86332-.30911-.84623-.31287-.82995-.31629-1.21617-.48013-1.18408-.48598-1.15471-.49072-.75483-.32922-1.1118-.49613-1.0897-.4979-1.42323-.66466L53.025 250.634c-.85556-.41153-1.70247-.8187-2.54962-1.21911l-1.27202-.59523-.8515-.39027-.8566-.38441-1.08092-.47146-1.09582-.46041-.88997-.35967-.90395-.35139a66.79132 66.79132 0 00-.9199-.34257l-.93783-.33322c-4.4214-1.53235-9.4928-2.74155-16.11687-3.3817-.175 1.67552-.525 3.43923-.7 5.11476l1.61018.27427 1.27627.23504 1.21806.24056.93339.19619.45324.09928.87996.20081.84516.20369.81101.20637.77752.20888.74469.21122.7125.21337c.23222.07146.45918.14325.68099.21534l.65011.21715.6199.21876.59033.22021.56144.22148.53318.22256.5056.22348.47864.2242c.07757.03742.15404.07486.22943.11232l.43947.22498.2102.1126.40177.22534.19173.11268.36553.2253.3422.22506.31952.22463a11.0937 11.0937 0 01.2975.22403l.27612.22325.13025.11128.2453.22175c.15688.14745.30061.29408.43206.43966l.18807.21755.1703.21579.0787.10718.14488.21282c.02278.03529.0449.0705.06635.1056l.12094.20945a4.49172 4.49172 0 01.1058.20699l.0913.20434.07746.20151.06429.19852.07315.29176.04103.23723.02427.2315.00822.18085.0006.0889-.01125.2604-.02912.25045-.02824.16114c-.51042 2.41776-3.58142 4.53544-8.41408 6.10798l-.70227.22091-.72573.21334c-.36864.10475-.74588.2066-1.13143.30546l-.78209.1937a53.98737 53.98737 0 01-1.21354.27527l-.83522.17307-.42526.08335-.86554.16023-.8851.15146-.90416.14254-.9227.13345-.9407.1242-.9582.11481-.97518.10525a86.91088 86.91088 0 01-.4938.04899v3.26287h9.8c3.675 0 6.475 1.49915 6.475 3.26287 0 1.76371-2.975 3.26287-6.475 3.26287h-9.8c.04375.6173.07656 1.2346.10664 1.8519l.09023 1.8519c.06563 1.2346.15313 2.4692.32813 3.7038l3.06566.02929 4.6414.06074 3.85796.06406 4.14803.08187 5.1664.12033 3.88117.10377 4.84016.1457 5.01149.17047 2.56071.09506 4.33648.17375 4.40735.19376 3.56537.1701 3.0954.15694 2.5771.13673 2.53967.14116 2.5022.14562 3.683.22675 2.4084.15672 2.37082.16117 3.48569.25009 2.27672.17228 2.23901.17672 2.2013.18117 3.2311.28008 2.1068.19228 3.08923.29676 3.00396.30675 1.9552.21006 1.91722.2145 1.8792.21895 1.84115.2234.9063.11335 2.6617.34676 1.7268.23673 2.51857.36342 1.63126.24783 1.98526.31605 1.9254.323.75337.13113 1.47798.26562a187.302 187.302 0 011.43957.27006l1.40114.2745 1.36266.27895c.67171.14058 1.32898.28284 1.97179.42676l1.26634.29006c1.24704.29228 2.4362.59123 3.56733.89684l1.11178.30784 1.07305.31229c3.16104.94351 5.79885 1.94703 7.90935 3.01055 4.725 2.38101 7 5.02658 7 8.0249 0 11.54724-28.1986 16.74808-61.95489 19.0876l-2.71193.18113a584.9727 584.9727 0 01-2.73307.16931l-2.75163.1579a663.0537 663.0537 0 01-2.76761.14688l-2.78102.13626-2.79186.12603-2.8001.1162c-.46724.01857-.9347.03675-1.40235.05454l-2.80767.1022a900.8922 900.8922 0 01-1.40468.04776l-2.80942.0891-2.80738.08085-2.80275.073c-.4666.01154-.9329.02276-1.39884.03369l-3.53114.07728-3.51232.06647-3.48827.05646-3.459.04725-3.4245.03885-3.38476.03125-4.99125.03439-4.87248.02182-4.73608.01196.43526.98887.43658.95988c.43712.9455.8757 1.84807 1.3142 2.70934l.43842.84757.43801.8204.43727.79361.43618.76718.43474.74112.43296.71542c.072.11712.1439.23318.2157.3482l.42965.67756c.1428.2217.28515.43928.427.65278l.42403.62837.4207.60433.41701.58064.413.55733.20488.27003.40633.52305.501.62234.49272.58807.38774.44625.38166.42513.37523.40439.36845.384.36134.36398.35387.34434.34607.32504.17.15541.33371.29681.32505.27844.31603.26044.30667.2428.29698.22554.28693.20863.27653.1921.2658.17592.37783.23438.23747.1371.3337.17786.20696.10057.19417.0866.09217.03818h112c6.94575-3.27786 15.8884-6.06571 26.04578-8.38284l1.75302-.39261 1.77594-.38342c1.48926-.31568 3.00148-.6218 4.5344-.91842l1.84927-.35139 1.86826-.34227a305.59739 305.59739 0 011.88636-.3332l2.11614-.3596 2.1362-.34843 2.15508-.33731 2.17274-.32622a370.58972 370.58972 0 012.18921-.31515l2.20448-.3041 1.1076-.14793 2.22512-.28761 2.2374-.27665 2.24845-.26571a435.61265 435.61265 0 012.25831-.25481l2.26698-.24394a455.75498 455.75498 0 012.27444-.23309l2.28069-.22227 2.28575-.2115 2.2896-.20072 1.14588-.09635 2.29314-.18465c.38229-.02989.76462-.05933 1.14696-.08832l2.29397-.16865 1.1467-.08033 2.29209-.1527 1.14509-.07237 2.28751-.13682a511.04112 511.04112 0 013.42236-.18547l3.40806-.16183 2.2621-.0948 2.25274-.08438 2.24218-.07397c-1.575-3.52743-2.975-7.31941-4.025-11.0232l-1.12367.0083-2.20839.0226-2.15735.03046-2.10736.0382-2.0584.04581-2.01051.0533-1.96365.06065-1.91784.06788-1.87307.07497-1.82936.08194-1.7867.08879-1.74506.0955-1.70449.10207-1.66495.10853-1.62648.11485-1.58904.12106-1.55264.12712-1.5173.13306-1.48301.13888-1.44976.14456-1.41755.1501-1.3864.15555-2.02345.2432-1.31308.16853-1.28558.17352-1.25913.17836-1.23373.18308-1.20938.18768-1.77069.28983-1.15307.19859-1.69113.3056-1.1033.2087-1.62138.32016-1.06007.218-1.56145.33353-1.02338.2265-1.51133.34568-1.48596.35238-1.46412.35867-.9657.24238-2.38554.61649-1.41686.37646-2.34867.637-4.09002 1.13097-3.85818 1.10126-2.64395.73785-2.03427.55326-1.38512.36811-1.41104.3671-1.43938.36575-1.4701.36401-1.88448.45205-1.9409.44808a225.9071 225.9071 0 01-1.59648.35515l-1.63798.3518-1.68186.3481-1.72816.34403-1.77683.3396-.90742.16804-1.85433.3323c-1.56773.27475-3.1924.54396-4.88023.80668l-2.05613.3121-1.71157.24799-1.16465.16283-1.78333.24036-2.44762.31295-1.88974.2288-1.93746.22353-1.98645.21806-2.03673.21241-2.79602.27408-1.43332.133-2.19516.19428-2.25052.18787-2.30715.18125-2.36504.17445-2.42423.16745-1.64965.10765-2.52567.15537-2.58824.14786-2.65208.14017-3.6376.17459-1.86315.08189-1.89323.07822-2.89703.1103-2.96682.10172-3.03786.09294-3.11018.08397-2.11426.0509-3.23354.0686-2.19768.04047-2.23171.0362-2.26611.03187-3.4645.03958-3.54403.02952-3.62483.01927-3.7069.00884c-.4165.0004-.83452.00059-1.2541.00059-3.675 0-6.475-1.49916-6.475-3.26287 0-1.76371 2.975-3.26287 6.475-3.26287l4.52036-.00766 2.21111-.0095 5.38737-.04004 3.13783-.03495 4.07578-.05908 3.95483-.07304 2.88837-.06374 3.74966-.09668 2.7376-.0811 2.67487-.0883 3.4709-.12873 3.36413-.14096 3.26005-.15288 2.37836-.1223 3.0844-.17295 2.24974-.13696 2.1965-.14303 2.1444-.14896 2.09346-.15473 2.04364-.1604 1.99496-.1659 2.5174-.2232 2.07875-.19661 2.02427-.20275a347.20064 347.20064 0 001.97131-.2087l1.9199-.21445c.31578-.0362.62948-.07265.94114-.10933l1.84561-.22275c.3036-.03758.6052-.07537.90487-.11338l1.77478-.23064c.29198-.03886.58207-.07794.8703-.11721l1.70738-.23811 1.66436-.24285c.27389-.04086.54605-.08192.81652-.12315l1.8814-.29414 1.82749-.30002 1.77609-.3056a225.59984 225.59984 0 003.4079-.62678l1.63679-.32057.80269-.16195 1.57552-.32703a217.45984 217.45984 0 001.5378-.33097l2.24137-.50317 1.45433-.33949 1.42531-.34237 1.39876-.34495 2.05382-.52162 1.34328-.35009 1.98224-.52792 2.59505-.70749 7.0378-1.94926 3.22026-.87434 1.62595-.4315 1.6424-.42684 1.66325-.42156 1.12261-.2778 1.13517-.27495 1.14902-.27195 1.1642-.26874 1.18067-.26534 1.80478-.39123 1.2276-.25602 1.24869-.25195 1.27105-.2477 1.9514-.36316 1.33274-.23623 2.05006-.34506 1.4026-.22357 1.43284-.21817.72817-.107 1.48065-.20973 2.28424-.30351 1.5669-.19468.79717-.09498 1.62258-.18508.82574-.09007 1.68121-.17506a271.90222 271.90222 0 011.72193-.16814l1.76397-.16104a299.75636 299.75636 0 012.72763-.2278l1.87478-.14241c.31632-.0231.63457-.04586.9548-.0683l1.9452-.13069c.32821-.0211.65845-.04189.99074-.06232l2.01857-.11852 2.06913-.11016 2.12099-.10163 2.17416-.09289 2.22864-.08397 2.28443-.07486 1.16355-.03396 2.37058-.06084 2.42965-.05125 1.23739-.02197 2.5207-.0365a609.7337 609.7337 0 011.28366-.0145c-.81667-3.01791-1.4216-5.98247-1.9795-8.93518l-.4705-2.52896-2.41233-.0385-2.36456-.04796-2.3177-.05728-2.27176-.06642-2.22674-.0754-1.09678-.04101-2.16093-.08855a436.36253 436.36253 0 01-1.06439-.0475l-2.09718-.10132-2.05584-.10964-2.0154-.1178-1.9759-.12576-2.41569-.16818-2.35718-.18007-.92689-.07528-1.82701-.15604-1.7921-.16318-1.75808-.17017a301.52395 301.52395 0 01-.86657-.08766l-2.55124-.27298-1.66157-.19013-1.63124-.19645-1.60181-.20261a263.99918 263.99918 0 01-1.57332-.2086l-1.54574-.21443-1.51907-.22008-1.49333-.22558-1.4685-.2309-1.44458-.23607-1.4216-.24106-1.39952-.24589-1.37836-.25055-1.35813-.25505-1.3388-.25938-1.3204-.26355-1.30291-.26755-1.28635-.27138-1.2707-.27505-1.25596-.27855-1.85834-.42403-1.83035-.43098-1.20621-.2909-2.38293-.58966-1.76498-.44846-2.90852-.75763-2.30527-.61377-2.52063-.68063-5.9876-1.63017-3.45462-.92992-2.04728-.54162-2.07336-.53869-2.10495-.53484-1.42357-.35398-1.4417-.3516-2.2001-.52232-1.49415-.34445-1.51799-.34111-1.54345-.33751-2.36651-.49892-1.61427-.32732-1.64546-.32277-1.67827-.31794-.85196-.15708-1.73055-.3102-1.76746-.30472-.89807-.1502-1.82587-.29596-1.86684-.28977a291.1568 291.1568 0 00-2.88067-.4225l-1.97644-.27316a310.97301 310.97301 0 00-2.02313-.26603l-2.07145-.25864-2.12141-.25098-2.173-.24304-2.22623-.23484c-3.38008-.34596-6.9453-.66332-10.72045-.94796l-2.54814-.18487c-3.43971-.2399-7.04966-.45324-10.84725-.63712l-2.88364-.13233a614.3373 614.3373 0 00-4.46098-.1772l-3.0667-.10353-2.61364-.07713-2.66741-.06863a737.79497 737.79497 0 00-1.35417-.0311l-2.74985-.0556a787.27011 787.27011 0 00-1.39592-.0245l-2.83441-.04223a848.65799 848.65799 0 00-2.89198-.03313l-3.54767-.0275-2.71702-.0117-2.76602-.00392c-3.675 0-6.475-1.49916-6.475-3.26287 0-1.76371 2.975-3.26287 6.475-3.26287l3.45617.00594 3.38389.01768 3.3128.0292 3.2429.04054 3.17425.05164 3.10677.06255 2.03429.04765 2.997.08027 2.93273.09061 1.92006.06606 2.82831.1074 2.76728.1172 1.81153.08347 2.6682.13306 1.7466.09385 1.72126.0979 2.53514.1543 2.48012.16305 2.4263.1716 2.3737.17993 2.32228.18806 2.27208.19598 1.48743.13495 1.46601.13832 2.15963.21366 1.41402.14647 2.08333.22558 1.36427.15423 2.38847.28281c3.14456.3833 6.13061.79114 8.97985 1.21977l2.11161.32531c2.78218.4388 5.43296.89744 7.97403 1.3722l1.88557.35902 1.84646.36472.9092.18438 1.7916.3726 1.75757.3774 1.72558.38186 1.69562.38597 1.66768.38972 1.6418.39314 1.61792.39618 1.59609.3989 1.5763.40123 2.33176.6055 3.0587.81229 9.78685 2.6583 3.0901.82804 2.64558.69337 2.1401.5467 2.1682.53837 1.64857.39762 1.11125.26188 1.12198.25916 1.70486.38333 1.15237.25174 1.16597.24852 1.77624.36642 1.20354.23985 1.22001.23613 1.2373.23228 1.2554.22827 1.27435.22413 1.29408.21985 1.31466.21542 1.33604.21086 1.35826.20615 1.38129.20129 1.40514.1963 1.42981.19117 1.4553.18588 1.48163.18047 1.50875.1749 1.53671.16921 1.56549.16336 1.59508.15737 1.6255.15124 1.65673.14497 1.6888.13856 1.72166.132 1.75537.12531 1.78989.11847 1.82523.11149 1.86139.10436 1.89837.0971 1.93617.0897 1.9748.08214 3.0364.10875 3.12792.09097 2.13749.05053 2.18021.04228-.34352-2.8742c-.22037-1.88783-.41481-3.71033-.53148-5.41526l-.89258-.0145-1.78504-.0367a303.12348 303.12348 0 01-1.7837-.04707l-1.78088-.0576-1.7766-.06829a281.06435 281.06435 0 01-1.77088-.0791l-1.76367-.09009-1.755-.1012a254.39872 254.39872 0 01-1.7449-.11248l-1.7333-.12389a232.16978 232.16978 0 01-2.57504-.20757l-1.69795-.15309c-1.97149-.18554-3.90888-.39544-5.80173-.63078l-1.6113-.20797c-1.0666-.14283-2.11767-.29406-3.1513-.4539l-1.53707-.24622-.97248-.16497-.96068-.17039-.9485-.17585-.93595-.18134-.92299-.18689-.90965-.19245-.89592-.19808-.8818-.20372-.86732-.20942a84.71722 84.71722 0 01-.4281-.10686l-.84482-.21804-.82937-.22382a72.64808 72.64808 0 01-.40876-.1141l-.80544-.23259a65.97029 65.97029 0 01-.39658-.1185l-.78064-.24143-.76363-.24738a55.75796 55.75796 0 01-.3753-.12594l-.73738-.25638a50.11005 50.11005 0 01-.36197-.13045l-.71026-.26547-.6917-.27157c-6.36798-2.56326-10.25982-5.9294-10.25982-10.24192 0-7.23123 5.425-12.346 16.625-15.78523a64.19597 64.19597 0 01.9161-.27277l.9393-.2648.96285-.25688.98671-.249 1.01092-.24117 1.03547-.23338c1.04786-.22951 2.13304-.44742 3.25706-.65392l1.13702-.20272 1.16324-.19516c.78432-.1276 1.58635-.2502 2.40653-.36785l1.24395-.17278 1.27153-.16541c.42847-.05391.8616-.1066 1.29944-.1581l1.32768-.1508 1.35627-.1436 1.38519-.1364 1.41444-.12927 1.44404-.12218 1.47397-.11513 1.50423-.10814 1.53483-.10118 1.56578-.09428 1.59705-.08742 1.62866-.08061 1.66061-.07384 1.6929-.06713 1.72551-.06044 2.65018-.07826 1.80854-.04397c.35-3.79198.875-7.4076 1.575-11.0232-12.54815.73161-23.12977 2.5471-33.3108 4.91427l-1.90463.45018-.9495.2297-1.89486.4681a349.68544 349.68544 0 00-1.8912.4791l-1.88983.4893-1.89076.49872-2.84292.76404-2.85793.78085-4.81757 1.33164-1.575.44093c-3.15.88186-7.175.35274-8.925-1.32278-.525-.52912-.875-1.05823-.875-1.58735 0-1.1464 1.225-2.29282 3.325-2.91012l2.89027-.80642 3.93484-1.09014 2.62046-.7186 2.62418-.70942 1.75402-.4667 1.75943-.46092 2.6526-.67907 1.77957-.4435a309.84846 309.84846 0 011.79025-.43535l1.80244-.42652c1.20603-.28125 2.4212-.55616 3.6475-.82383l1.84805-.39595c10.21303-2.1466 21.25264-3.76934 34.24639-4.36046 1.05-4.67384 2.275-9.1713 3.675-13.40422-10.84291.49114-20.83767-.8128-31.1652-2.8109l-2.14186-.42294-2.08619-.42657-2.09939-.44116-2.1147-.45378-2.13214-.46442-8.59141-1.89138-2.74525-.59386-2.79728-.59236-2.13536-.44132-2.16992-.43723-1.46694-.28855-1.48399-.2857-1.5017-.28247-1.5201-.2788-1.53916-.27474-1.5589-.27026-1.9774-.3309-2.01061-.32247-1.63327-.25136-2.4928-.36504-1.69145-.23478-1.71588-.22743a277.69647 277.69647 0 00-1.741-.21966l-1.7668-.2115a277.11199 277.11199 0 00-.89328-.10256l-1.80674-.19847-.91363-.09581-1.8482-.18452a280.49038 280.49038 0 00-.93475-.08861l-1.89117-.16965-.9566-.08094-1.93567-.15386-1.96616-.14281-1.99733-.13136c-3.01971-.18825-6.1469-.33646-9.39177-.4384l-1.086-.03225a370.3569 370.3569 0 00-4.51284-.1104l-2.2146-.0339-2.18713-.02022a348.04888 348.04888 0 00-2.15998-.00689zM301 190.4914l-.24046.13188-.25175.14688-.26269.16222-.27329.17793-.42906.2971-.2983.21872-.30769.23565-.31676.25294-.32548.27057-.33386.28855-.34189.3069-.34959.32558-.53805.52419-.36733.37384-.37382.39376-.37998.41404-.3858.43465-.39125.45564-.3964.47695-.60345.7562-.51028.66826-.51628.70366-.41691.58885a50.30569 50.30569 0 00-.41999.6123l-.42272.63608-.42511.66021-.42717.68471-.42888.70955-.21497.3642-.4308.74746-.43165.7732-.43217.79925-.43234.82568-.43217.85246-.43165.87958c-.3594.74438-.71792 1.51739-1.07465 2.31993l-.42717.9773-.42511 1.006-.52799 1.2984-.10509.26518c-5.95 15.07975-9.275 34.65697-9.275 55.11604 0 20.45907 3.325 39.9481 9.275 55.11603l.4214 1.04972c.07045.1725.14102.3438.21168.51387l.42511 1.006c.35517.82632.71247 1.62274 1.07102 2.39017l.4308.90706.21574.4432.43195.86597a71.0771 71.0771 0 00.64847 1.24854l.43217.79926.43165.77319.4308.74747.21497.3642.42888.70954.42717.68471.42511.66022.42272.63608c.07024.10402.14036.20705.21036.3091l.41849.60053.5185.718.51276.68234.20335.2631.40344.5096.5964.72355.58487.67556.38293.4243.37694.40385.37062.38376.36395.36402.35693.34462.3496.32559.34188.30689.33386.28856.32548.27056.31676.25294.45804.3471.29347.2104.28354.19397.2733.17793.38994.23757.24615.13933a9.7245 9.7245 0 00.1188.06409l.24046-.13188.25175-.14688.26269-.16223.27329-.17793.28354-.19398.29347-.21038.30304-.22715.31227-.24425.32116-.2617.32971-.27952.33792-.29768.17193-.15576.34959-.32559.35694-.34462.36394-.36401.37062-.38376.37694-.40386.38293-.4243.38857-.4451.39387-.46625.39883-.48775.20116-.25205.40563-.52066.61602-.82307.41524-.57727.20886-.29734.41999-.6123.21104-.31504.42396-.6481.42618-.67242a57.36087 57.36087 0 00.21382-.34544l.42888-.70954a61.5221 61.5221 0 00.43024-.73474l.43127-.76029a66.48439 66.48439 0 00.43195-.78617l.4323-.81243.4323-.83903.43195-.86597.43127-.89328c.35901-.75587.71695-1.54054 1.07294-2.35494l.42618-.9916.42396-1.02048c.14092-.34501.2814-.6949.4214-1.04972 5.95-15.07975 9.275-34.65696 9.275-55.11603 0-20.37089-3.325-39.9481-9.275-55.11604a94.80862 94.80862 0 00-.4214-1.04971l-.42396-1.02049-.42618-.9916c-.35599-.8144-.71393-1.59907-1.07294-2.35494l-.43127-.89328a74.51827 74.51827 0 00-.43195-.86597l-.4323-.83902c-.28823-.55045-.57647-1.08316-.86425-1.59861l-.43127-.76028a61.5221 61.5221 0 00-.43024-.73474l-.42888-.70955-.21382-.34544-.42618-.67241-.635-.96315-.41999-.6123-.4169-.58885-.2072-.28575-.41165-.55437-.40772-.5318-.40344-.50961a40.04763 40.04763 0 00-.20002-.24659l-.39639-.47696-.39126-.45563-.57653-.64423-.37694-.40385-.37062-.38376-.54331-.53873-.3533-.33506-.34579-.3162-.33792-.29767-.3297-.27952-.32117-.26171-.31227-.24425-.451-.3344-.28854-.20215-.27846-.1859-.39803-.24921-.25175-.14688-.24046-.13188zM25.025 290.22936l.525 4.40929c6.68168.18051 12.7659.40084 18.306.65409l3.25918.15584a716.92926 716.92926 0 011.58141.08078l3.0681.16707c7.51389.42666 13.86342.9196 19.22845 1.45556l2.09393.21662c23.14582 2.47978 26.552 5.77955 26.9764 7.72952l.03292.18882.017.1795.00472.16973-.01288.30821-.03148.36624-.02203.1629-.03238.17214a2.7307 2.7307 0 01-.04604.18085l-.063.18904-.03396.08564-.0808.17555-.0999.18096a3.05023 3.05023 0 01-.12123.18602l-.14483.1907c-1.33774 1.64002-5.47722 3.7507-18.65137 5.35154l-1.59196.18592c-2.4516.27517-5.19215.53328-8.25593.76891l-2.09078.1537a340.3313 340.3313 0 01-1.08201.07425l-2.23867.14306-2.34007.13551c-1.19577.06581-2.4304.12866-3.70519.18835l-2.60346.1151c-2.65773.11077-5.47942.20836-8.47521.29118l-3.0542.07784a763.04835 763.04835 0 01-1.57134.03511l-3.23253.0624-3.35424.05165-3.4782.04057a1026.97206 1026.97206 0 01-3.60442.02912c.25 1.00784.58929 1.97068.95408 2.95281l.44592 1.19192 4.01068-.00316 5.55769-.01627 5.76627-.034 2.9506-.02502 2.98986-.03108 4.54895-.05916 4.61306-.07585 3.10383-.06074 3.12156-.0695 3.135-.07883 1.5712-.04307 3.93446-.1189 3.93698-.1358 1.57362-.05927 3.14226-.12743 1.56757-.0683 3.12533-.14607c5.19618-.25423 10.32293-.56306 15.29063-.93778l3.38553-.26232 2.55912-.2133 1.28743-.11372 2.58362-.2421 1.93988-.1947 1.93652-.20632 1.92846-.21821 1.27882-.15224 1.27176-.15774 1.26328-.16335 1.25343-.16903 1.8586-.26442 1.22267-.18364 1.20793-.18965 1.1918-.19573 1.17425-.20192 1.15534-.20818c.3818-.07045.76022-.14195 1.13502-.21454l1.38807-.27724 1.35142-.28749 1.05292-.23748 1.02632-.24423.50275-.12468.98382-.25454.95374-.26152.37457-.1071.73353-.21766.7121-.2223.68995-.22697.66707-.2317.64347-.23649c4.20952-1.59256 6.79726-3.50654 6.79726-5.80352 0-1.14641-1.05-2.20464-3.15-3.26287-.72383-.36475-1.53689-.7187-2.43313-1.06217l-.68769-.25564a40.96455 40.96455 0 00-.35536-.12635l-.73342-.24978-.7632-.24592-.79241-.24209-.82107-.23827a70.33343 70.33343 0 00-.84915-.2345l-.87667-.23075-.90362-.22703a92.38237 92.38237 0 00-.46174-.11212l-.943-.2215-.96852-.21784-.9935-.21423-1.01791-.21062-1.04176-.20707-1.6061-.30396-1.09887-.19827-1.12075-.1948-1.72087-.28578-1.17293-.18626-1.1928-.1829-1.82526-.26808-1.8668-.26068-1.90646-.25335-1.29205-.16488-1.96828-.24137-2.6778-.31084-1.36052-.15078-2.06622-.22046-2.09504-.21368-2.12197-.207-2.86785-.26576-3.5722-.31037-1.43697-.11884-2.89644-.22978-1.45842-.11098-2.93457-.2143-2.95473-.20425a834.5125 834.5125 0 00-2.97066-.1944l-2.98237-.18478-2.98988-.17536-2.99317-.16615-1.4965-.07969-2.99018-.15273-2.98293-.14406-2.97145-.1356-2.95576-.12734-2.93585-.1193-2.91173-.11146-2.88339-.10385-4.26271-.14195-2.79409-.08572-5.45465-.15103-3.95755-.09623-5.07178-.10695-3.63166-.06513-3.46826-.05297-2.21438-.02893zm1.575 11.0232c.525 2.64558 1.05 5.20296 1.575 7.67216l2.8862-.01987 3.71485-.03857 2.68743-.0376 2.60398-.04468 3.34398-.0701 2.41336-.06009 3.09363-.08953 1.4943-.0486 3.58504-.13202 2.04924-.08596 2.61577-.12186 3.08586-.16298 2.32464-.13804 2.1993-.14408 2.07645-.1494 1.4782-.11513 1.41154-.11741 2.20729-.19998 1.63786-.16304 1.52683-.16498 1.07373-.1246 1.01372-.12498.95475-.12508 1.18309-.1664 1.0826-.16533.98461-.16354L84 305.75004l-.84636-.17259-1.19702-.22417-1.07238-.18522-1.17754-.18968-.9539-.14477-1.7282-.24514-1.1219-.14892-1.18717-.14994-1.68648-.20096-1.34413-.15112-1.41344-.15113-1.48397-.15084-2.09043-.20015-1.65327-.149-2.3206-.1966-1.8292-.1455-2.5596-.19088-2.70015-.18663-2.84358-.18166-2.22857-.13257-2.31208-.12907-3.21483-.16615-2.51173-.11976-2.59932-.11528-3.60412-.14619-2.80845-.10363-2.9001-.09813-4.01148-.1218zm226.1-46.29746c-.7817.01933-1.55022.0407-2.30578.06408l-2.22806.0761-2.15167.08778c-3.5232.15588-6.73363.35917-9.65909.60326l-1.7213.1513-1.65422.16078c-19.99411 2.04003-24.99043 6.17005-26.23895 9.71594l-.09324.28617a6.53612 6.53612 0 00-.04088.14203l-.0711.28174a6.9687 6.9687 0 00-.03056.13963l-.05933.32127-.04462.31602-.03202.31027-.02149.30404-.01307.2973-.00674.29007-.00288.56192c0 1.64637 1.31682 3.08538 3.65113 4.32707l.49738.2541c.42642.2094.88247.41295 1.36662.61071l.59437.23454c.20255.07726.4095.15359.62076.229l.64655.22347.67176.21798.69638.21249c.11808.03496.23716.06969.35724.1042l.7322.2043c.12398.0336.24892.06697.37482.10011l.7667.19616.78896.19076.81064.18538a73.6106 73.6106 0 00.41326.09068l.84204.17734.86224.172 1.05701.19875 1.08406.19119.55186.09276 1.12275.1799 1.14727.17241 1.7647.24466 1.20417.15385.61003.07416 1.2353.14282 1.2548.1355 1.91652.18961 1.2991.11737 1.31507.11016 1.33001.103 1.34396.09588 1.3569.08879 2.05738.11994 1.38483.0712 2.09456.09372 2.11233.07814 1.4164.0435 1.42179.03665 1.42615.02985-.05986-.9463-.07634-1.35883-.06162-1.2829-.06198-1.58624-.04235-1.4364-.03489-1.85516-.01086-1.25321-.0021-1.1278c0-4.67384.175-9.2595.525-13.75696zM24.325 254.426l-.14592 1.45365c-.1148 1.22251-.20408 2.4643-.20408 3.66111l.73214-.10424a43.446 43.446 0 00.69643-.11058l.66072-.11606.625-.1207.58928-.12447.81697-.19189.5-.13014.46428-.13092.42857-.13083.5759-.1942.33928-.12687.30357-.12378.32924-.14908.27344-.14125.09375-.05392.16072-.10287c.19047-.13244.28571-.24522.28571-.3292l-.00744-.02558-.02298-.03499-.03954-.04405-.05711-.05276-.0757-.06112-.15061-.10659-.19813-.12343-.16017-.09105-.18383-.09766-.20849-.10391-.3612-.16683-.27458-.11801-.46508-.18633-.34702-.12992-.37775-.13407-.40951-.13787-.44228-.1413-.72709-.21767-.52864-.14839-.56495-.1506-.60229-.15248-.64063-.154-.67998-.15515zm148.4-39.77173c8.75 2.02827 14.175 6.34936 14.175 11.19958 0 4.59462-4.7353 8.59269-12.70965 10.73755l-.41535.10928c-37.59525 9.95263-71.58863 10.31145-100.79153 1.07646l-.88347-.28279c-7.04455-2.25114-11.22129-6.03242-11.37084-10.25884l-.00416-.23525c0-2.82194 1.75-5.37933 5.25-7.58397 25.725-15.87342 73.5-12.52236 106.75-4.76202zM76.3 223.73738c-1.49625.92154-2.36075 2.08184-2.44346 3.25408l-.00654.18516c0 2.02827 1.925 3.79198 5.25 4.85021 24.9375 8.02857 54.3307 7.76677 87.50125-.7854l1.04875-.27283c3.85-.97004 6.125-2.91012 6.125-5.02658 0-2.23249-2.32275-4.13056-6.32207-5.12437l-.32793-.07858c-46.2-10.84684-77.7-5.20296-90.825 2.9983zm143.85-60.49536l-.54458.38562-.3851.26548-.40307.27204-.63893.42007-.68095.43405-.72394.4476-.76788.46067-.5368.31416-.84324.48146-.58793.32759-.92126.50097-.64083.34017-1.00193.5192-.6955.3519-1.08527.53618-1.13654.54574-.78665.36892-.81016.37283-1.2599.56629-.87014.38202-.89463.38546-.9194.38876-.94445.39193-1.46429.59354-1.00833.39926-1.0344.40194-1.06071.4045-1.08734.40693-1.68152.61464-1.15512.41238-1.18272.41433-1.21061.41614-1.86883.6273-1.28159.42008c-.43199.14026-.8688.28073-1.31046.42141h9.1c6.475 0 11.9 2.64557 11.9 5.99663 0 3.35105-5.25 5.99662-11.9 5.99662H49.875l-.1011.0404-.21517.09342-.23197.11063-.2482.12837-.26387.14662-.27899.16539-.29354.18467-.30752.20446a16.48872 16.48872 0 00-.32095.22478l-.3338.24562-.34612.26695-.35784.28882-.36902.31119-.47614.42123-.4916.45801-.4037.39357-.41235.41825-.52672.55833-.53825.59874c-.28995.33027-.58435.6782-.88244 1.0445l-.44982.56329c-.1508.1924-.30244.3895-.4548.59133l-.45924.6199a45.4975 45.4975 0 00-.6959.98452l-.46784.69355-.47028.7239c-1.0212 1.60175-2.05573 3.42094-3.07783 5.48116 5.0575-.14991 10.39597-.72459 16.1428-1.53147l2.04544-.2941 2.08061-.31152 2.117-.32703 3.2465-.51553 11.13602-1.80637 2.76934-.43797 2.83115-.43698 2.89532-.43339 1.47245-.21453 2.24052-.3182 2.27959-.31288 1.54193-.2051 1.56003-.20194 2.37463-.29624 1.60658-.1926 1.62572-.18827 1.64514-.18365 2.50479-.26609 1.695-.17065 1.71547-.16488 1.73622-.1588 1.75726-.15237 1.77862-.14564 1.80024-.13857 1.82219-.13118 1.8444-.12346 1.86693-.11543 1.88975-.10705 2.87804-.1442 1.94808-.08473 1.97192-.07522.995-.03395 2.00824-.06037 2.03283-.05006 2.0577-.03941 2.08288-.02846a381.37534 381.37534 0 012.10834-.01717l2.1341-.00556 1.07681.00168 2.1733.01247a397.18113 397.18113 0 015.54982.08622l2.26733.05737 1.14397.03375c1.0747.03112 2.1383.06708 3.19097.10766l2.09087.08727a323.72334 323.72334 0 013.08257.1532l2.01975.11647 1.99196.1275 1.96452.13815 1.93746.14843.9587.07796 1.89756.16316 1.87142.17251 1.84565.1815 1.82026.1901 1.79522.19834 1.77056.2062 2.17908.26826 2.14185.27923 1.68715.2308 1.66416.23699 1.64152.2428 1.61926.24826 2.38797.38177 2.33995.39193 2.29319.40084.75422.13537 2.23278.41074 1.46407.27723 2.16038.42 2.1186.42388 1.3898.28412 2.05175.42755 2.01329.42808 2.62672.56942 9.91525 2.1991 2.63199.57416 2.56839.5479 1.67983.34907 1.65595.33498.81956.1619 1.62338.31204c9.67997 1.82367 18.30574 2.75607 27.57744 1.85757l.42-1.05258c.21-.52065.42-1.0286.63-1.5048 0-.08818.175-.26456.175-.35274-1.64826-.37838-3.2256-.7838-4.73022-1.21515l-.9923-.2914-.97062-.299-.94884-.30655a68.02513 68.02513 0 01-.92693-.314l-.90492-.3214c-9.9815-3.62992-15.82181-8.62845-16.77617-14.53689-5.075-.70549-8.75-2.99831-8.75-5.73207 0-3.26287 5.25-5.99662 11.9-5.99662h1.75l.16102-.59578.16487-.63329.16874-.6714.17259-.71008.26611-1.13897.18223-.8094.1861-.85016.18994-.89149.1938-.93343.29793-1.48005.30661-1.57771.3153-1.67736.215-1.17459.32976-1.84785h-25.2v-.26456zm54.075 26.98481h-23.8c.93586 3.4584 4.51315 6.91678 12.96226 9.62588l.90747.28237c.30855.09318.6232.1854.94403.27664l.96506.2664.49618.13099c2.275-4.05654 4.725-7.58397 7.525-10.58228z\"/>\n</svg>\n");

/***/ }),

/***/ "./lib/handler.js":
/*!************************!*\
  !*** ./lib/handler.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.requestAPI = void 0;
const coreutils_1 = __webpack_require__(/*! @jupyterlab/coreutils */ "webpack/sharing/consume/default/@jupyterlab/coreutils");
const services_1 = __webpack_require__(/*! @jupyterlab/services */ "webpack/sharing/consume/default/@jupyterlab/services");
/**
 * Call the jupyter API extension
 *
 * @param endPoint API REST end point for the extension
 * @param init Initial values for the request
 * @returns The response body interpreted as JSON
 */
function requestAPI(endPoint = '', init = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        // Make request to Jupyter API
        const settings = services_1.ServerConnection.makeSettings();
        const requestUrl = coreutils_1.URLExt.join(settings.baseUrl, 'verdant', // API Namespace
        endPoint);
        let response;
        try {
            response = yield services_1.ServerConnection.makeRequest(requestUrl, init, settings);
        }
        catch (error) {
            throw new services_1.ServerConnection.NetworkError(error);
        }
        let data = yield response.text();
        if (data.length > 0) {
            try {
                data = JSON.parse(data);
            }
            catch (error) {
                console.log('Not a JSON response body.', response);
            }
        }
        if (!response.ok) {
            throw new services_1.ServerConnection.ResponseError(response, data.message || data);
        }
        return data;
    });
}
exports.requestAPI = requestAPI;


/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const algorithm_1 = __webpack_require__(/*! @lumino/algorithm */ "webpack/sharing/consume/default/@lumino/algorithm");
const instance_manager_1 = __webpack_require__(/*! ./instance-manager */ "./lib/instance-manager.js");
const ghost_1 = __webpack_require__(/*! ./verdant-ui/ghost-book/ghost */ "./lib/verdant-ui/ghost-book/ghost.js");
const rendermime_1 = __webpack_require__(/*! @jupyterlab/rendermime */ "webpack/sharing/consume/default/@jupyterlab/rendermime");
const docmanager_1 = __webpack_require__(/*! @jupyterlab/docmanager */ "webpack/sharing/consume/default/@jupyterlab/docmanager");
const notebook_1 = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
const file_manager_1 = __webpack_require__(/*! ./verdant-model/jupyter-hooks/file-manager */ "./lib/verdant-model/jupyter-hooks/file-manager.js");
const renderers = __importStar(__webpack_require__(/*! @jupyterlab/rendermime */ "webpack/sharing/consume/default/@jupyterlab/rendermime"));
const signaling_1 = __webpack_require__(/*! @lumino/signaling */ "webpack/sharing/consume/default/@lumino/signaling");
const handler_1 = __webpack_require__(/*! ./handler */ "./lib/handler.js");
/*
 * Load styles for all components
 */
__webpack_require__(/*! ../style/index.css */ "./style/index.css");
__webpack_require__(/*! ../style/ghost.css */ "./style/ghost.css");
__webpack_require__(/*! ../style/sampler.css */ "./style/sampler.css");
__webpack_require__(/*! ../style/activity.css */ "./style/activity.css");
__webpack_require__(/*! ../style/verdant-panel.css */ "./style/verdant-panel.css");
__webpack_require__(/*! ../style/summary.css */ "./style/summary.css");
__webpack_require__(/*! ../style/landing.css */ "./style/landing.css");
__webpack_require__(/*! ../style/search.css */ "./style/search.css");
__webpack_require__(/*! ../style/artifact-details.css */ "./style/artifact-details.css");
const render_baby_1 = __webpack_require__(/*! ./verdant-model/jupyter-hooks/render-baby */ "./lib/verdant-model/jupyter-hooks/render-baby.js");
const verdant_ui_1 = __webpack_require__(/*! ./verdant-ui */ "./lib/verdant-ui/index.js");
const _sc_service_1 = __webpack_require__(/*! ./verdant-model/sc/ sc-service */ "./lib/verdant-model/sc/ sc-service.js");
/**
 * Initialization data for the Verdant extension.
 */
const extension = {
    id: "Verdant",
    activate: (app, docManager, rendermime, latexTypesetter) => {
        /**
         * Get the Science Capsule API URL which is stored
         * in an environment variable and shared via the sc_api_url server route.
         * Then store this value in scService so it can be used in other parts of the frontend.
         */
        handler_1.requestAPI('sc_api_url')
            .then(res => {
            console.log(res);
            _sc_service_1.scService.apiUrl = res.data;
        })
            .catch(reason => {
            console.error(`The verdant server extension appears to be missing.\n${reason}`);
        });
        /*
         * Create app-level functions
         */
        const linkHandler = {
            handleLink: (node, path) => {
                app.commandLinker.connectNode(node, "docmanager:open", { path: path });
            },
        };
        const fileManager = new file_manager_1.FileManager(docManager, app.serviceManager.contents);
        const renderBaby = new render_baby_1.RenderBaby(rendermime, latexTypesetter, linkHandler, fileManager);
        const openGhostBook = (ghostWidget, store, ver) => __openGhostBook(app, ghostWidget, store, ver);
        const shutDownInstance = (panel) => __shutDownInstance(app, panel, manager);
        /*
         * Create instance manager to change what the app shows based on
         * which notebook is open
         */
        const sidePanel = new verdant_ui_1.VerdantUI();
        const manager = new instance_manager_1.VerdantInstanceManager(sidePanel, renderBaby, fileManager, openGhostBook, shutDownInstance);
        /*
         * Create app UI
         */
        app.shell.add(sidePanel, "left", { rank: 600 });
        // Connect signal handlers for editor view change.
        app.shell.activeChanged.connect(() => updateVerdantView(app, manager));
        // Connect signal to shutdown everything
        app.shell.disposed.connect(() => {
            manager.dispose();
            signaling_1.Signal.clearData(this);
        });
        // Populate Verdant if a notebook is open
        updateVerdantView(app, manager);
    },
    autoStart: true,
    requires: [docmanager_1.IDocumentManager, rendermime_1.IRenderMimeRegistry, renderers.ILatexTypesetter],
};
/*
 * Determine if a notebook is showing and update Verdant to
 * show appropriate content for the user's current view
 */
function updateVerdantView(app, manager) {
    let widget = app.shell.currentWidget;
    // normal notebook
    if (widget instanceof notebook_1.NotebookPanel) {
        // open Verdant for this current notebook
        let verInst = manager.getInstance(widget);
        manager.switchNotebook(verInst);
    }
    else {
        // hide Verdant content if notebook is not showing
        manager.activeInstance = undefined;
    }
    // log new layout
    manager.logCurrentLayout();
}
/*
 * Close a Verdant instance
 */
function __shutDownInstance(app, panel, manager) {
    var _a;
    const index = manager.instances.findIndex((i) => i.panel === panel);
    if (index) {
        const inst = manager.instances[index];
        const path = inst.panel.sessionContext.path;
        if (manager.activeInstance === inst)
            manager.activeInstance = null;
        // dispose instance only if it's notebook is not open in another tab
        setTimeout(() => {
            // wait 2 minutes to see if they're gonna open up this tab again
            let openNotebook = algorithm_1.toArray(app.shell.widgets("main")).find((widg) => {
                if (widg instanceof notebook_1.NotebookPanel)
                    return widg.sessionContext.path === path;
            });
            if (!openNotebook) {
                let rem = manager.instances.splice(index, 1);
                rem.forEach((inst) => inst.notebook.dispose());
            }
        }, 120000);
        (_a = inst === null || inst === void 0 ? void 0 : inst.logger) === null || _a === void 0 ? void 0 : _a.log("Notebook Closed");
        updateVerdantView(app, manager);
    }
}
/*
 * Open Ghost Book for any given Verdant instance
 */
function __openGhostBook(app, ghostWidget, store, ver) {
    // initial ghost book
    if (!ghostWidget) {
        ghostWidget = new ghost_1.Ghost(store, ver);
    }
    // changing notebook
    else
        ghostWidget.initStore(store, ver);
    if (!ghostWidget.isAttached) {
        // Attach the widget to the main work area if it's not there
        app.shell.add(ghostWidget, "main");
    }
    // Activate the widget
    app.shell.activateById(ghostWidget.id);
    return ghostWidget;
}
exports["default"] = extension;


/***/ }),

/***/ "./lib/instance-manager.js":
/*!*********************************!*\
  !*** ./lib/instance-manager.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VerdantInstanceManager = void 0;
const redux_1 = __webpack_require__(/*! redux */ "webpack/sharing/consume/default/redux/redux?83b6");
const logger_1 = __webpack_require__(/*! ./verdant-ui/logger */ "./lib/verdant-ui/logger.js");
const redux_2 = __webpack_require__(/*! ./verdant-ui/redux/ */ "./lib/verdant-ui/redux/index.js");
const ast_1 = __webpack_require__(/*! ./verdant-model/analysis/ast */ "./lib/verdant-model/analysis/ast.js");
const verdant_notebook_1 = __webpack_require__(/*! ./verdant-ui/verdant-notebook */ "./lib/verdant-ui/verdant-notebook.js");
const history_1 = __webpack_require__(/*! ./verdant-model/history */ "./lib/verdant-model/history/index.js");
class VerdantInstanceManager {
    constructor(ui, renderBaby, fileManager, openGhostBook, shutDownInstance) {
        this.ui = ui;
        this.renderBaby = renderBaby;
        this.fileManager = fileManager;
        this.openGhostBook = openGhostBook;
        this.shutDownInstance = shutDownInstance;
        this.instances = [];
        this.__activeInstance = undefined;
    }
    dispose() {
        this.instances.forEach((inst) => { var _a; return (_a = inst === null || inst === void 0 ? void 0 : inst.notebook) === null || _a === void 0 ? void 0 : _a.dispose(); });
        this.instances = [];
    }
    get activeInstance() {
        return this.__activeInstance;
    }
    set activeInstance(inst) {
        this.__activeInstance = inst;
        this.ui.activeInstance = inst;
        this.ui.update();
    }
    /*
     * Retrieve a Verdant instance
     */
    getInstance(panel) {
        // be careful since 2+ panels can open for the same notebook
        let whichNotebook = panel.sessionContext.path;
        let verInst = this.instances.find((inst) => inst.panel.sessionContext.path === whichNotebook);
        /*
         * This is important, if the panels don't match, we need to make sure
         * this instance has the right panel for the open notebook, or things like
         * inspector won't work
         */
        if (verInst && verInst.panel !== panel) {
            verInst.panel = panel; //update to new panel
            verInst.notebook.setPanel(panel); // update to new panel
        }
        if (!verInst) {
            verInst = this.createVerdantInstance(panel);
            this.instances.push(verInst);
        }
        return verInst;
    }
    /*
     * Create new Verdant instance
     */
    createVerdantInstance(panel) {
        let logger = new logger_1.VerdantLog();
        let log_redux = logger.getReduxLogger();
        let history = new history_1.History(this.renderBaby, this.fileManager);
        const getHistory = () => history;
        let analysis = new ast_1.AST(history);
        const initialState = redux_2.createInitialState(getHistory);
        // create store for UI behavior
        let store = redux_1.createStore(redux_2.verdantReducer, initialState, redux_1.applyMiddleware(log_redux));
        // set up notebook
        let notebook = new verdant_notebook_1.VerdantNotebook(history, analysis, panel, store, logger);
        // set up ghost book for this notebook
        store.dispatch(redux_2.setGhostOpener((ver) => {
            this.ghostPanel = this.openGhostBook(this.ghostPanel, store, ver);
        }));
        // set up listener to close notebook
        panel.disposed.connect((_) => this.shutDownInstance(panel));
        // return new Verdant instance
        return { history, analysis, notebook, panel, logger, store };
    }
    /*
     * Switch Verdant instance
     */
    switchNotebook(verInst) {
        // check if we need to switch Verdant from a prior notebook
        if (!this.activeInstance || this.activeInstance !== verInst) {
            verInst.logger.log("Jupyter Lab switching Notebook to " + verInst.notebook.name);
            this.fileManager.activeNotebook = verInst.notebook;
            this.activeInstance = verInst;
        }
    }
    /*
     * Log which system features are showing on layout change
     */
    logCurrentLayout() {
        // Log: what is showing?
        this.instances.map((ver) => {
            // start logging once there is an active instance
            let showing = {
                ghost: this.ghostPanel
                    ? this.ghostPanel.isVisible &&
                        this.ghostPanel.getFile() === ver.notebook.path
                    : false,
                sideBar: this.ui
                    ? this.ui.isVisible && ver === this.activeInstance
                    : false,
                notebook: ver.panel ? ver.panel.isVisible : false,
            };
            ver.logger.log("Jupyter Lab layout change:", JSON.stringify(showing));
        });
    }
}
exports.VerdantInstanceManager = VerdantInstanceManager;


/***/ }),

/***/ "./lib/verdant-model/analysis/ast-create.js":
/*!**************************************************!*\
  !*** ./lib/verdant-model/analysis/ast-create.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ASTCreate = void 0;
const cells_1 = __webpack_require__(/*! @jupyterlab/cells */ "webpack/sharing/consume/default/@jupyterlab/cells");
const ast_utils_1 = __webpack_require__(/*! ./ast-utils */ "./lib/verdant-model/analysis/ast-utils.js");
const nodey_1 = __webpack_require__(/*! ../nodey */ "./lib/verdant-model/nodey/index.js");
class ASTCreate {
    constructor(history) {
        this.history = history;
    }
    createNotebook(options) {
        let notebook = new nodey_1.NodeyNotebook(options);
        this.history.store.store(notebook);
        return notebook;
    }
    createMarkdown(options) {
        let nodey = new nodey_1.NodeyMarkdown(options);
        this.history.store.store(nodey);
        return nodey;
    }
    createCode(options) {
        let n = new nodey_1.NodeyCode(options);
        this.history.store.store(n);
        if ("content" in options)
            this.unpackContent(options, n);
        return n;
    }
    createCodeCell(options) {
        let n = new nodey_1.NodeyCodeCell(options);
        this.history.store.store(n);
        if ("content" in options)
            this.unpackContent(options, n);
        return n;
    }
    createSyntaxToken(tok) {
        return new nodey_1.SyntaxToken(tok);
    }
    createOutput(options, parent) {
        let output = new nodey_1.NodeyOutput(options);
        this.history.store.store(output);
        let cell_history = this.history.store.getHistoryOf(parent);
        cell_history.addOutput(parent.version, output);
        return output;
    }
    createRawCell(options) {
        let nodey = new nodey_1.NodeyRawCell(options);
        this.history.store.store(nodey);
        return nodey;
    }
    fromCell(cell, checkpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            let nodey = null;
            if (cell instanceof cells_1.CodeCell) {
                // First, create code cell from text
                let text = cell.editor.model.value.text;
                if (text.length > 0)
                    nodey = yield this.generateCodeNodey(text, checkpoint.id);
                else {
                    nodey = this.createCodeCell({
                        start: { line: 1, ch: 0 },
                        end: { line: 1, ch: 0 },
                        type: "Module",
                        created: checkpoint.id,
                    });
                }
                // Next, create output if there is output
                let output_raw = cell.outputArea.model.toJSON();
                if (output_raw.length > 0) {
                    this.createOutput({
                        raw: output_raw,
                        created: checkpoint.id,
                        parent: nodey.name,
                    }, nodey);
                }
            }
            else if (cell instanceof cells_1.MarkdownCell) {
                // create markdown cell from text
                let text = cell.model.value.text;
                nodey = this.createMarkdown({ markdown: text, created: checkpoint.id });
            }
            else if (cell instanceof cells_1.RawCell) {
                // create raw cell from text
                let text = cell.editor.model.value.text;
                nodey = this.createRawCell({ literal: text, created: checkpoint.id });
            }
            return nodey;
        });
    }
    generateCodeNodey(code, checkpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            let dict = yield ast_utils_1.ASTUtils.parseRequest(code);
            dict["created"] = checkpoint;
            let nodey = this.createCodeCell(dict);
            return nodey;
        });
    }
    unpackContent(dict, parent) {
        let prior = null;
        parent.content = [];
        for (let item in dict.content) {
            let raw = dict.content[item];
            raw["created"] = dict["created"];
            raw["prior"] = prior;
            raw["parent"] = parent.name;
            let child = null;
            if (nodey_1.SyntaxToken.KEY in raw)
                parent.content.push(this.createSyntaxToken(raw[nodey_1.SyntaxToken.KEY]));
            else {
                child = this.createCode(raw);
                if (prior)
                    prior.right = child.name;
                prior = child;
                parent.content.push(child.name);
            }
        }
        return parent;
    }
}
exports.ASTCreate = ASTCreate;


/***/ }),

/***/ "./lib/verdant-model/analysis/ast-utils.js":
/*!*************************************************!*\
  !*** ./lib/verdant-model/analysis/ast-utils.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ASTUtils = void 0;
const notebook_1 = __webpack_require__(/*! ../notebook */ "./lib/verdant-model/notebook.js");
/*
 *
 */
var ASTUtils;
(function (ASTUtils) {
    function parseRequest(rawText = "") {
        return __awaiter(this, void 0, void 0, function* () {
            /*let text = Private.cleanCodeString(rawText);
            let fullRequest = {
              method: "POST",
              body: JSON.stringify({ code: text }),
            };
            let serverSettings = ServerConnection.makeSettings();
        
            let fullUrl = URLExt.join(serverSettings.baseUrl, "/lilgit/parse");
        
            log("To parse:", fullUrl, fullRequest);
            /*return new Promise<jsn>(accept => {
              ServerConnection.makeRequest(fullUrl, fullRequest, serverSettings).then(
                response => {
                  if (response.status !== 200) {
                    response.text().then(data => {
                      console.error(
                        "A parser error occured on:\n " + text + "\n" + data
                      );
                      accept(failSafeParse(rawText));
                    });
                  } else response.text().then(data => accept(JSON.parse(data)));
                }
              );
            });*/
            return failSafeParse(rawText);
        });
    }
    ASTUtils.parseRequest = parseRequest;
    function failSafeParse(code) {
        let failsafe = {
            type: "Module",
            start: { line: 0, ch: 0 },
            end: { line: 0, ch: 0 },
            literal: code,
        };
        let lines = code.split("\n");
        let lastCh = lines[lines.length - 1].length;
        failsafe["end"] = { line: lines.length - 1, ch: lastCh - 1 };
        return failsafe;
    }
    /*
     *
     */
    function findNodeAtRange(nodey, change, history) {
        return Private._findNodeAtRange(nodey, 0, Math.max(0, nodey.getChildren().length - 1), change, history);
    }
    ASTUtils.findNodeAtRange = findNodeAtRange;
    /*
     * goal: get rid of wrappers or any types called Module
     */
    function reduceASTDict(ast) {
        if (ast.content && ast.content.length === 1) {
            // check if this node is a wrapper or not
            var child = ast.content[0];
            return reduceASTDict(child);
        }
        else if (ast.type === "Module")
            ast.type = "_"; // wildcard
        return ast;
    }
    ASTUtils.reduceASTDict = reduceASTDict;
})(ASTUtils = exports.ASTUtils || (exports.ASTUtils = {}));
var Private;
(function (Private) {
    function cleanCodeString(code) {
        // annoying but important: make sure docstrings do not interrupt the string literal
        var newCode = code.replace(/""".*"""/g, (str) => {
            return "'" + str + "'";
        });
        // turn ipython magics commands into comments
        let magics = /(%)(\w)+(\s)*(\w)*(\n|$)/g; // regex to avoid styled strings that use %
        let matches = magics.exec(newCode);
        if (matches)
            newCode = newCode.replace(matches[0][0], "#");
        // remove any triple quotes, which will mess us up
        newCode = newCode.replace(/"""/g, "'''");
        // make sure newline inside strings doesn't cause an EOL error
        // and make sure any special characters are escaped correctly
        newCode = newCode.replace(/(").*?(\\.).*?(?=")/g, (str) => {
            return str.replace(/\\/g, "\\\\");
        });
        newCode = newCode.replace(/(').*?(\\.).*?(?=')/g, (str) => {
            return str.replace(/\\/g, "\\\\");
        });
        //log("cleaned code is ", newCode);
        return newCode;
    }
    Private.cleanCodeString = cleanCodeString;
    /*
     *
     */
    //return 0 for match, 1 for to the right, -1 for to the left, 2 for both
    function inRange(nodey, change) {
        var _a;
        var val = 0;
        if (!((_a = nodey === null || nodey === void 0 ? void 0 : nodey.start) === null || _a === void 0 ? void 0 : _a.line) || !change.start || !change.end || !(nodey === null || nodey === void 0 ? void 0 : nodey.end.ch))
            return 2; //error case only
        if (change.start.line < nodey.start.line)
            val = -1;
        else if (change.start.line === nodey.start.line &&
            change.start.ch < nodey.start.ch)
            val = -1;
        if (change.end.line > nodey.end.line) {
            if (val === -1)
                val = 2;
            else
                val = 1;
        }
        else if (change.end.line === nodey.end.line &&
            change.end.ch > nodey.end.ch) {
            if (val === -1)
                val = 2;
            else
                val = 1;
        }
        return val;
    }
    /*
     *
     */
    function _findNodeAtRange(node, min, max, change, history) {
        notebook_1.log("Looking for node at", change, node);
        var children = node.getChildren();
        if (min > max || max < min || children.length < 1)
            return node;
        var match = null;
        var mid = Math.floor((max - min) / 2) + min;
        notebook_1.log("CHILDREN", children, mid, children[mid]);
        var midNodey = history.store.getLatestOf(children[mid]);
        var direction = inRange(midNodey, change);
        notebook_1.log("checking mid range", midNodey, direction, change);
        if (direction === 0) {
            var midChildren = midNodey.getChildren();
            // it's in this node, check for children to be more specific
            if (midChildren.length < 1)
                match = midNodey;
            // found!
            else
                match =
                    _findNodeAtRange(midNodey, 0, Math.max(0, midChildren.length - 1), change, history) || midNodey; // found!
        }
        else if (direction === 2)
            return null;
        // there is no match at this level
        else if (direction === -1)
            // check the left
            match = _findNodeAtRange(node, min, mid - 1, change, history);
        else if (direction === 1)
            // check the right
            match = _findNodeAtRange(node, mid + 1, max, change, history);
        if (match) {
            // if there's a match, now find it's closest parsable parent
            return match; //TODO
        }
        return null;
    }
    Private._findNodeAtRange = _findNodeAtRange;
})(Private || (Private = {}));


/***/ }),

/***/ "./lib/verdant-model/analysis/ast.js":
/*!*******************************************!*\
  !*** ./lib/verdant-model/analysis/ast.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AST = void 0;
const cells_1 = __webpack_require__(/*! @jupyterlab/cells */ "webpack/sharing/consume/default/@jupyterlab/cells");
const checkpoint_1 = __webpack_require__(/*! ../checkpoint */ "./lib/verdant-model/checkpoint/index.js");
const nodey_1 = __webpack_require__(/*! ../nodey */ "./lib/verdant-model/nodey/index.js");
const ast_create_1 = __webpack_require__(/*! ./ast-create */ "./lib/verdant-model/analysis/ast-create.js");
const notebook_1 = __webpack_require__(/*! ../notebook */ "./lib/verdant-model/notebook.js");
class AST {
    constructor(history) {
        this.history = history;
        this.create = new ast_create_1.ASTCreate(history);
    }
    /*
     * Should send a series of
     */
    coldStartNotebook(notebook_view, checkpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            let changedCells = [];
            // create a new notebook
            let notebook = this.create.createNotebook({
                created: checkpoint.id,
                cells: [],
            });
            // create new cells
            yield Promise.all(notebook_view.widgets.map((item, index) => __awaiter(this, void 0, void 0, function* () {
                if (item instanceof cells_1.Cell)
                    return this.create.fromCell(item, checkpoint).then((nodey) => {
                        if (!nodey)
                            console.log("CREATED NO NODEY???", nodey, item);
                        notebook.cells[index] = nodey.name;
                        nodey.parent = notebook.name;
                        changedCells.push({
                            cell: nodey.name,
                            changeType: checkpoint_1.ChangeType.ADDED,
                        });
                    });
            })));
            // update checkpoint
            checkpoint.notebook = notebook.version;
            checkpoint.targetCells.push(...changedCells);
            this.history.checkpoints.add(checkpoint);
            return notebook;
        });
    }
    hotStartNotebook(notebook_history, notebook_view, checkpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            // just match up exact matches
            let toMatch = [];
            let matchCount = 0;
            notebook_history.cells.forEach((name) => {
                let nodey = this.history.store.get(name);
                let oldText = this.getText(nodey);
                let match = notebook_view.widgets.findIndex((cell, index) => {
                    let newText = this.getText(cell);
                    return oldText === newText && !toMatch[index];
                });
                if (match > -1 && !toMatch[match]) {
                    toMatch[match] = nodey;
                    matchCount++;
                }
                else {
                    notebook_1.log("Could not match old cell", nodey);
                }
            });
            // other cells exist
            if (matchCount !== notebook_view.widgets.length) {
                let changedCells = [];
                let newNotebook = this.createNotebookVersion(checkpoint);
                // create all other cells
                for (let i = 0; i < notebook_view.widgets.length; i++) {
                    let nodey = toMatch[i];
                    if (!nodey) {
                        // create new cell for unknown cell
                        nodey = yield this.create.fromCell(notebook_view.widgets[i], checkpoint);
                        changedCells.push({
                            cell: nodey.name,
                            changeType: checkpoint_1.ChangeType.ADDED,
                        });
                    }
                    newNotebook.cells[i] = nodey.name;
                    nodey.parent = newNotebook.name;
                }
                // return updated notebook
                checkpoint.targetCells.push(...changedCells);
                this.history.checkpoints.add(checkpoint);
                return newNotebook;
            }
            else {
                // everything is exactly the same
                return notebook_history;
            }
        });
    }
    createNotebookVersion(checkpoint) {
        let oldNotebook = this.history.store.currentNotebook;
        let newNotebook = new nodey_1.NodeyNotebook({
            id: oldNotebook === null || oldNotebook === void 0 ? void 0 : oldNotebook.id,
            created: checkpoint.id,
            cells: (oldNotebook === null || oldNotebook === void 0 ? void 0 : oldNotebook.cells.slice(0)) || [],
        });
        let notebookHist = this.history.store.getHistoryOf(oldNotebook);
        notebookHist === null || notebookHist === void 0 ? void 0 : notebookHist.addVersion(newNotebook);
        checkpoint.notebook = newNotebook === null || newNotebook === void 0 ? void 0 : newNotebook.version;
        return newNotebook;
    }
    getText(n) {
        if (n instanceof nodey_1.NodeyCodeCell)
            return n.literal || "";
        if (n instanceof nodey_1.NodeyMarkdown)
            return n.markdown || "";
        if (n instanceof nodey_1.NodeyRawCell)
            return n.literal || "";
        if (n instanceof cells_1.CodeCell || n instanceof cells_1.RawCell)
            return n.editor.model.value.text || "";
        if (n instanceof cells_1.MarkdownCell)
            return n.model.value.text || "";
        return "";
    }
}
exports.AST = AST;


/***/ }),

/***/ "./lib/verdant-model/cell.js":
/*!***********************************!*\
  !*** ./lib/verdant-model/cell.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VerCell = void 0;
const nodey_1 = __webpack_require__(/*! ./nodey */ "./lib/verdant-model/nodey/index.js");
const cells_1 = __webpack_require__(/*! @jupyterlab/cells */ "webpack/sharing/consume/default/@jupyterlab/cells");
/**
 * Verdant's cell component VerCell acts as an intermediary between
 * Jupyter's representation and our model's representation of a cell.
 */
class VerCell {
    /**
     * Constructs a cell
     */
    constructor(notebook, cell, modelName) {
        /**
         * last seen text for when the cell is deleted
         */
        this.lastSeenText = "";
        this.notebook = notebook;
        this.view = cell;
        this.modelName = modelName;
    }
    /**
     * Gets the Nodey representation of this cell
     */
    get model() {
        var _a, _b;
        if (this.modelName)
            return (_b = (_a = this.notebook) === null || _a === void 0 ? void 0 : _a.history) === null || _b === void 0 ? void 0 : _b.store.getLatestOf(this.modelName);
    }
    /**
     * Updates the reference name for this cell
     * @hidden
     */
    setModel(name) {
        this.modelName = name;
    }
    /**
     * Gets the cell's current order in the notebook's list of cells,
     * based on the order the cells appear on screen
     */
    get currentIndex() {
        return this.notebook.cells.findIndex((item) => item === this);
    }
    /**
     * Ges output if the cell has it
     */
    get output() {
        if (this.model instanceof nodey_1.NodeyCodeCell) {
            let output = this.notebook.history.store.getOutput(this.model);
            if (output)
                return output.latest;
        }
    }
    /**
     * Gets output area if the cell has it
     */
    get outputArea() {
        if (this.view instanceof cells_1.CodeCell)
            return this.view.outputArea;
    }
    getText() {
        var _a, _b, _c;
        let text = this.lastSeenText;
        // check cell wasn't just deleted
        if (this.view.inputArea) {
            text = ((_c = (_b = (_a = this.view.editor) === null || _a === void 0 ? void 0 : _a.model) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.text) || this.lastSeenText;
        }
        return text;
    }
}
exports.VerCell = VerCell;


/***/ }),

/***/ "./lib/verdant-model/checkpoint/checkpoint-history.js":
/*!************************************************************!*\
  !*** ./lib/verdant-model/checkpoint/checkpoint-history.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HistoryCheckpoints = void 0;
const notebook_1 = __webpack_require__(/*! ../notebook */ "./lib/verdant-model/notebook.js");
const checkpoint_1 = __webpack_require__(/*! ./checkpoint */ "./lib/verdant-model/checkpoint/checkpoint.js");
const DEBUG = false;
class HistoryCheckpoints {
    constructor(history) {
        this.history = history;
        this.checkpointList = [];
        this.timeTable = {};
    }
    all() {
        return this.checkpointList;
    }
    get(timestamp) {
        if (timestamp !== undefined) {
            let index = this.timeTable[timestamp];
            return this.checkpointList[index];
        }
        return null;
    }
    getForNotebook(notebook) {
        var _a;
        let checkpoints = [];
        let created = notebook.created;
        let index = this.timeTable[created];
        while (((_a = this.checkpointList[index]) === null || _a === void 0 ? void 0 : _a.notebook) === (notebook === null || notebook === void 0 ? void 0 : notebook.version)) {
            checkpoints.push(this.checkpointList[index]);
            index++;
        }
        return checkpoints;
    }
    add(checkpoint) {
        // don't permit multiple checkpoints with the same timestamp
        if (!this.timeTable[checkpoint.timestamp]) {
            let index = this.checkpointList.push(checkpoint) - 1;
            this.timeTable[checkpoint.timestamp] = index;
        }
    }
    generateCheckpoint() {
        let timestamp = Date.now();
        // check if checkpoint already exists
        if (this.timeTable[timestamp])
            return this.checkpointList[this.timeTable[timestamp]];
        let checkpoint = new checkpoint_1.Checkpoint({
            timestamp: timestamp,
            targetCells: [],
            notebookId: undefined,
        });
        return checkpoint;
    }
    fromJSON(data) {
        if (DEBUG)
            notebook_1.log("CHECKPOINTS FROM JSON", data);
        this.checkpointList = data.map((item, index) => {
            let checkpoint = checkpoint_1.Checkpoint.fromJSON(item);
            this.timeTable[checkpoint.timestamp] = index;
            return checkpoint;
        });
        if (DEBUG)
            notebook_1.log("CHECKPOINTS LOADED", this.checkpointList);
    }
    toJSON() {
        return this.checkpointList.map((item) => {
            return item.toJSON();
        });
    }
    slice(fromTime, toTime) {
        let slice = [];
        let i = this.timeTable[fromTime];
        let j = this.timeTable[toTime];
        if (i !== undefined && j !== undefined) {
            slice = this.checkpointList.slice(i, j) || [];
        }
        return slice;
    }
}
exports.HistoryCheckpoints = HistoryCheckpoints;


/***/ }),

/***/ "./lib/verdant-model/checkpoint/checkpoint.js":
/*!****************************************************!*\
  !*** ./lib/verdant-model/checkpoint/checkpoint.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Checkpoint = void 0;
class Checkpoint {
    //runID, timestamp, notebook, runCells, output
    constructor(options) {
        this.timestamp = options.timestamp;
        this.notebook = options.notebook;
        this.targetCells = options.targetCells;
    }
    get id() {
        return this.timestamp;
    }
    toJSON() {
        return {
            timestamp: this.timestamp,
            notebook: this.notebook,
            targetCells: this.targetCells,
        };
    }
}
exports.Checkpoint = Checkpoint;
(function (Checkpoint) {
    function fromJSON(dat) {
        return new Checkpoint({
            timestamp: dat.timestamp,
            notebook: dat.notebook,
            targetCells: dat.targetCells,
        });
    }
    Checkpoint.fromJSON = fromJSON;
    function formatTime(date) {
        if (date === null || date === undefined)
            return "";
        if (typeof date == "number")
            date = new Date(date);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        return hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ampm;
    }
    Checkpoint.formatTime = formatTime;
    function formatDate(date) {
        if (date === null || date === undefined)
            return "";
        if (typeof date == "number")
            date = new Date(date);
        var monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        var dayNames = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        var today = new Date();
        var yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        var dateDesc = "";
        if (sameDay(today, date))
            dateDesc = "today ";
        else if (sameDay(yesterday, date))
            dateDesc = "yesterday ";
        else
            dateDesc = dayNames[date.getDay()] + " ";
        dateDesc +=
            monthNames[date.getMonth()] +
                " " +
                date.getDate() +
                " " +
                date.getFullYear();
        return dateDesc;
    }
    Checkpoint.formatDate = formatDate;
    function formatShortDate(date) {
        if (date === null || date === undefined)
            return "";
        if (typeof date == "number")
            date = new Date(date);
        var monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
        ];
        return (monthNames[date.getMonth()] +
            " " +
            date.getDate() +
            ", " +
            date.getFullYear());
    }
    Checkpoint.formatShortDate = formatShortDate;
    function sameDay(d1, d2) {
        if (typeof d1 == "number")
            d1 = new Date(d1);
        if (typeof d2 == "number")
            d2 = new Date(d2);
        return (d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate());
    }
    Checkpoint.sameDay = sameDay;
    function beforeDay(d1, d2) {
        return (!this.sameDay(d1, d2) &&
            d1.getFullYear() <= d2.getFullYear() &&
            d1.getMonth() <= d2.getMonth() &&
            d1.getDate() <= d2.getDate());
    }
    Checkpoint.beforeDay = beforeDay;
    function sameMinute(d1, d2) {
        return (d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate() &&
            d1.getHours() === d2.getHours() &&
            d1.getMinutes() === d2.getMinutes());
    }
    Checkpoint.sameMinute = sameMinute;
    function dateNow() {
        var d = new Date();
        d.setHours(12, 0, 0); // set to default time since we only want the day
        return d;
    }
    Checkpoint.dateNow = dateNow;
})(Checkpoint = exports.Checkpoint || (exports.Checkpoint = {}));


/***/ }),

/***/ "./lib/verdant-model/checkpoint/constants.js":
/*!***************************************************!*\
  !*** ./lib/verdant-model/checkpoint/constants.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GREATER_CHANGETYPE = exports.ChangeType = void 0;
// made verbose for log readability
var ChangeType;
(function (ChangeType) {
    ChangeType["CHANGED"] = "edited";
    ChangeType["REMOVED"] = "removed";
    ChangeType["ADDED"] = "added";
    ChangeType["MOVED"] = "moved";
    ChangeType["NONE"] = "none";
    ChangeType["OUTPUT_CHANGED"] = "output changed";
    ChangeType["TYPE_CHANGED"] = "type changed";
})(ChangeType = exports.ChangeType || (exports.ChangeType = {}));
const changeVal = {
    none: 0,
    "type changed": 1,
    moved: 1,
    edited: 2,
    "output changed": 2,
    added: 3,
    removed: 4,
};
exports.GREATER_CHANGETYPE = (a, b) => changeVal[a] > changeVal[b] ? a : b;


/***/ }),

/***/ "./lib/verdant-model/checkpoint/index.js":
/*!***********************************************!*\
  !*** ./lib/verdant-model/checkpoint/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./checkpoint */ "./lib/verdant-model/checkpoint/checkpoint.js"), exports);
__exportStar(__webpack_require__(/*! ./constants */ "./lib/verdant-model/checkpoint/constants.js"), exports);
__exportStar(__webpack_require__(/*! ./checkpoint-history */ "./lib/verdant-model/checkpoint/checkpoint-history.js"), exports);


/***/ }),

/***/ "./lib/verdant-model/history/history.js":
/*!**********************************************!*\
  !*** ./lib/verdant-model/history/history.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.History = void 0;
const notebook_1 = __webpack_require__(/*! ../notebook */ "./lib/verdant-model/notebook.js");
const coreutils_1 = __webpack_require__(/*! @lumino/coreutils */ "webpack/sharing/consume/default/@lumino/coreutils");
const sampler_1 = __webpack_require__(/*! ../sampler */ "./lib/verdant-model/sampler/index.js");
const _1 = __webpack_require__(/*! . */ "./lib/verdant-model/history/index.js");
const checkpoint_history_1 = __webpack_require__(/*! ../checkpoint/checkpoint-history */ "./lib/verdant-model/checkpoint/checkpoint-history.js");
class History {
    constructor(renderBaby, fileManager) {
        this._ready = new coreutils_1.PromiseDelegate();
        this._inspector = new sampler_1.Sampler(this, renderBaby);
        this.store = new _1.HistoryStore(this, fileManager);
        this.stage = new _1.HistoryStage(this, fileManager);
        this.checkpoints = new checkpoint_history_1.HistoryCheckpoints(this);
    }
    init(notebook) {
        return __awaiter(this, void 0, void 0, function* () {
            // check if there is an existing history file for this notebook
            this.notebook = notebook;
            var data = yield this.store.fileManager.loadFromFile(notebook);
            if (data) {
                var history = JSON.parse(data);
                notebook_1.log("FOUND HISTORY", history);
                this.fromJSON(history);
                this._ready.resolve(undefined);
                return true;
            }
            this._ready.resolve(undefined);
            return false;
        });
    }
    get ready() {
        return this._ready.promise;
    }
    get inspector() {
        return this._inspector;
    }
    // de-serializes history loaded from a file
    fromJSON(data) {
        this.checkpoints.fromJSON(data.checkpoints);
        this.store.fromJSON(data);
    }
    // serializes history for storage in a file
    toJSON() {
        let store = this.store.toJSON();
        return Object.assign({ checkpoints: this.checkpoints.toJSON() }, store);
    }
    /*
     * Returns the equivalent of toJSON() for a slice of history
     * starting at fromVer and ending (non-inclusive) at toVer
     * versions of the whole notebook.
     *
     * returns null if given an invalid fromVer/toVer pair
     */
    slice(fromVer, toVer) {
        var _a, _b;
        // check for valid toVer fromVer
        if (fromVer < toVer) {
            const fromTime = (_a = this.store.getNotebook(fromVer)) === null || _a === void 0 ? void 0 : _a.created;
            const toTime = (_b = this.store.getNotebook(toVer)) === null || _b === void 0 ? void 0 : _b.created;
            // verify valid notebook versions
            if (fromTime && toTime) {
                const checkpointSlice = this.checkpoints.slice(fromTime, toTime);
                const storeSlice = this.store.slice(fromVer, toVer);
                return Object.assign({ checkpoints: checkpointSlice }, storeSlice);
            }
        }
        return null; // error case
    }
    // used for debug only
    dump() {
        notebook_1.log(this.store.toJSON());
    }
}
exports.History = History;


/***/ }),

/***/ "./lib/verdant-model/history/index.js":
/*!********************************************!*\
  !*** ./lib/verdant-model/history/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./history */ "./lib/verdant-model/history/history.js"), exports);
__exportStar(__webpack_require__(/*! ./stage */ "./lib/verdant-model/history/stage/index.js"), exports);
__exportStar(__webpack_require__(/*! ./store */ "./lib/verdant-model/history/store/index.js"), exports);


/***/ }),

/***/ "./lib/verdant-model/history/stage/commit.js":
/*!***************************************************!*\
  !*** ./lib/verdant-model/history/stage/commit.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Commit = void 0;
const checkpoint_1 = __webpack_require__(/*! ../../checkpoint */ "./lib/verdant-model/checkpoint/index.js");
const nodey_1 = __webpack_require__(/*! ../../nodey */ "./lib/verdant-model/nodey/index.js");
const stage_1 = __webpack_require__(/*! ./stage */ "./lib/verdant-model/history/stage/stage.js");
class Commit {
    constructor(checkpoint, history, fileManager) {
        this.checkpoint = checkpoint;
        this.history = history;
        this.stage = new stage_1.Stage(history, fileManager);
    }
    markAsPossiblyEdited(nodey) {
        this.stage.dirty_nodey.push(nodey.name);
    }
    addCell(added, index) {
        // first see if this commit can be combined with a prior one
        const merged = this.attemptMergeWithPriorCheckpoint([added], [index]);
        // add cell is an event that changes notebook version
        if (!this.notebook)
            this.createNotebookVersion();
        // make sure new cell's parent is this newNotebook
        added.parent = this.notebook.name;
        let name = added.name;
        // make sure new cell's checkpoint is this one
        added.created = this.checkpoint.timestamp;
        // add added cell to notebook
        this.notebook.cells.splice(index, 0, name);
        // update checkpoint
        let cellDat = {
            cell: name,
            changeType: checkpoint_1.ChangeType.ADDED,
        };
        this.checkpoint.targetCells.push(cellDat);
        // record checkpoint
        if (!merged)
            this.history.checkpoints.add(this.checkpoint);
    }
    deleteCell(deleted) {
        var _a;
        let oldNotebook = this.history.store.currentNotebook;
        let index = ((_a = oldNotebook === null || oldNotebook === void 0 ? void 0 : oldNotebook.cells) === null || _a === void 0 ? void 0 : _a.indexOf(deleted === null || deleted === void 0 ? void 0 : deleted.name)) || -1;
        // first see if this commit can be combined with a prior one
        const merged = this.attemptMergeWithPriorCheckpoint([deleted], [index]);
        // delete cell is an event that changes notebook version
        if (!this.notebook)
            this.createNotebookVersion();
        // remove deleted cell from notebook
        index = this.notebook.cells.indexOf(deleted.name);
        if (index > -1)
            this.notebook.cells.splice(index, 1);
        // update checkpoint
        let cellDat = {
            cell: deleted.name,
            changeType: checkpoint_1.ChangeType.REMOVED,
            index,
        };
        this.checkpoint.targetCells.push(cellDat);
        // record checkpoint
        if (!merged)
            this.history.checkpoints.add(this.checkpoint);
    }
    moveCell(moved, newPos) {
        // get position
        let name = moved.name;
        let oldNotebook = this.history.store.currentNotebook;
        let index = oldNotebook.cells.indexOf(name);
        // first see if this commit can be combined with a prior one
        const merged = this.attemptMergeWithPriorCheckpoint([moved], [index]);
        // moving a cell is an event that changes notebook version
        if (!this.notebook)
            this.createNotebookVersion();
        // move cell in the notebook
        if (index > -1)
            this.notebook.cells.splice(index, 1); // delete the pointer
        this.notebook.cells.splice(newPos, 0, name); // re-add in correct place
        // update checkpoint
        let cellDat = {
            cell: name,
            changeType: checkpoint_1.ChangeType.MOVED,
            index: newPos,
        };
        this.checkpoint.targetCells.push(cellDat);
        // record checkpoint
        if (!merged)
            this.history.checkpoints.add(this.checkpoint);
    }
    changeCellType(oldCell, newCell) {
        // get position
        let name = oldCell.name;
        let oldNotebook = this.history.store.currentNotebook;
        let index = oldNotebook.cells.indexOf(name);
        // first see if this commit can be combined with a prior one
        const merged = this.attemptMergeWithPriorCheckpoint([oldCell, newCell], [index]);
        // changing a cell type is an event that changes notebook version
        if (!this.notebook)
            this.createNotebookVersion();
        // make sure new cell's parent is this newNotebook
        newCell.parent = this.notebook.name;
        // now update cells of notebook
        let oldName = oldCell.name;
        let newName = newCell.name;
        let i = this.notebook.cells.indexOf(oldName);
        if (i > -1)
            this.notebook.cells.splice(i, 1, newName);
        // update checkpoint
        let cellDat = {
            cell: newCell.name,
            changeType: checkpoint_1.ChangeType.TYPE_CHANGED,
        };
        this.checkpoint.targetCells.push(cellDat);
        // record checkpoint
        if (!merged)
            this.history.checkpoints.add(this.checkpoint);
    }
    // returns true if there are changes such that a new commit is recorded
    commit(options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.stage.stage(options);
            if (this.stage.isEdited()) {
                const allStaged = this.stage.getAllStaged();
                // get indices
                let oldNotebook = this.history.store.currentNotebook;
                let indices = allStaged.map((s) => {
                    const name = s.name;
                    return oldNotebook.cells.indexOf(name);
                });
                // first see if this commit can be combined with a prior one
                const merged = this.attemptMergeWithPriorCheckpoint(allStaged, indices);
                // if there are real edits, make sure we have a new notebook
                if (!this.notebook)
                    this.createNotebookVersion();
                this.commitStaged();
                // record checkpoint
                if (!merged)
                    this.history.checkpoints.add(this.checkpoint);
            }
        });
    }
    commitStaged() {
        // now go through an update existing cells
        this.notebook.cells = this.notebook.cells.map((c) => {
            let cell = this.history.store.get(c);
            let instructions = cell ? this.stage.getStaging(cell) : null;
            if (instructions) {
                let newCell;
                if (cell instanceof nodey_1.NodeyCodeCell)
                    newCell = this.createCodeCellVersion(cell.artifactName, instructions);
                else if (cell instanceof nodey_1.NodeyMarkdown)
                    newCell = this.createMarkdownVersion(cell.artifactName, instructions);
                else if (cell instanceof nodey_1.NodeyRawCell)
                    newCell = this.createRawCellVersion(cell.artifactName, instructions);
                return (newCell === null || newCell === void 0 ? void 0 : newCell.name) || c; // return unchanged cell if error occurred
            }
            else {
                // otherwise assume this cell is unchanged in this commit
                return c;
            }
        });
    }
    attemptMergeWithPriorCheckpoint(targetedCells, indicies) {
        var _a;
        /*
         * We will try to add new changes to an existing notebook version if
         * 1) no changes on this commit conflict with existing changes on this notebook
         * version.
         * 2) changes on this commit occur within 5 minutes of existing changes on this
         * notebook version.
         *
         * The goal of this merge is to compress the number of overall notebook versions so
         * that there is less sparse information to shift through, and more meaty versions.
         */
        let pass = false;
        let oldNotebook = this.history.store.currentNotebook;
        let oldCheckpoints = this.history.checkpoints.getForNotebook(oldNotebook);
        if (oldCheckpoints.length > 0) {
            let latestCheckpoint = oldCheckpoints[oldCheckpoints.length - 1];
            // check that the latest checkpoint is within 5 min of this one
            pass = checkTimeDiff(latestCheckpoint, this.checkpoint);
            console.log("CHECK_TIME", pass);
            // check that the older checkpoint does not affect the same cells as this one
            if (pass) {
                pass = false;
                let oldTargets = (_a = latestCheckpoint === null || latestCheckpoint === void 0 ? void 0 : latestCheckpoint.targetCells) === null || _a === void 0 ? void 0 : _a.map((target) => this.history.store.get(target === null || target === void 0 ? void 0 : target.cell));
                if (oldTargets) {
                    pass = checkArtfiactOverlap(targetedCells, oldTargets);
                }
                // check that the older checkpoint does not affect the same cell indices as this one
                if (pass && indicies) {
                    pass = latestCheckpoint.targetCells.every((target) => {
                        if (target.index)
                            return indicies.indexOf(target.index) < 0;
                        return true;
                    });
                }
            }
            // OK to merge
            if (pass) {
                this.notebook = oldNotebook;
                this.checkpoint = latestCheckpoint;
            }
        }
        console.log("CHECK_RETURN", pass);
        return pass;
    }
    createNotebookVersion() {
        var _a;
        let oldNotebook = this.history.store.currentNotebook;
        let newNotebook = new nodey_1.NodeyNotebook({
            id: oldNotebook === null || oldNotebook === void 0 ? void 0 : oldNotebook.id,
            created: this.checkpoint.id,
            cells: (oldNotebook === null || oldNotebook === void 0 ? void 0 : oldNotebook.cells.slice(0)) || [],
        });
        let notebookHist = this.history.store.getHistoryOf(oldNotebook);
        notebookHist === null || notebookHist === void 0 ? void 0 : notebookHist.addVersion(newNotebook);
        this.notebook = newNotebook;
        this.checkpoint.notebook = (_a = this.notebook) === null || _a === void 0 ? void 0 : _a.version;
    }
    createMarkdownVersion(artifactName, instructions) {
        // first create the new Markdown version
        let nodeyHistory = this.history.store.getHistoryOf(artifactName);
        let oldNodey = nodeyHistory === null || nodeyHistory === void 0 ? void 0 : nodeyHistory.latest;
        if (nodeyHistory && oldNodey) {
            let newNodey = new nodey_1.NodeyMarkdown({
                id: oldNodey.id,
                created: this.checkpoint.id,
                markdown: instructions.markdown,
                parent: this.notebook.name,
            });
            nodeyHistory.addVersion(newNodey);
            // then add the update to checkpoint
            let cellDat = {
                cell: newNodey.name,
                changeType: checkpoint_1.ChangeType.CHANGED,
            };
            this.checkpoint.targetCells.push(cellDat);
            // finally return updated new version
            return newNodey;
        }
        console.error("Failed to create new markdown version of ", artifactName, instructions);
    }
    createRawCellVersion(artifactName, instructions) {
        // first create the new Raw Cell version
        let nodeyHistory = this.history.store.getHistoryOf(artifactName);
        let oldNodey = nodeyHistory === null || nodeyHistory === void 0 ? void 0 : nodeyHistory.latest;
        if (nodeyHistory && oldNodey) {
            let newNodey = new nodey_1.NodeyRawCell({
                id: oldNodey.id,
                created: this.checkpoint.id,
                literal: instructions.literal,
                parent: this.notebook.name,
            });
            nodeyHistory === null || nodeyHistory === void 0 ? void 0 : nodeyHistory.addVersion(newNodey);
            // then add the update to checkpoint
            let cellDat = {
                cell: newNodey.name,
                changeType: checkpoint_1.ChangeType.CHANGED,
            };
            this.checkpoint.targetCells.push(cellDat);
            // finally return updated new version
            return newNodey;
        }
        else
            console.error("Failed to create new raw cell version of ", artifactName, instructions);
    }
    createCodeCellVersion(artifactName, instructions) {
        var _a, _b;
        // build base code cell
        let nodeyHistory = this.history.store.getHistoryOf(artifactName);
        let oldNodey = nodeyHistory === null || nodeyHistory === void 0 ? void 0 : nodeyHistory.latest;
        let newNodey;
        // error case only
        if (!nodeyHistory || !oldNodey) {
            console.error("Failed to create new code cell version of ", artifactName, instructions);
            return;
        }
        // check do we need a new cell version other than output?
        if (instructions["literal"] || instructions["content"]) {
            newNodey = new nodey_1.NodeyCodeCell({
                id: oldNodey.id,
                created: this.checkpoint.id,
                literal: instructions["literal"],
                parent: this.notebook.name,
            });
            nodeyHistory.addVersion(newNodey);
        }
        else
            newNodey = oldNodey;
        // now check if there is output to build
        let newOut;
        if (instructions["output"]) {
            // see if we already have an output history to add to
            let oldOutputHist = this.history.store.getOutput(newNodey);
            if (oldOutputHist) {
                let oldOut = oldOutputHist.latest;
                newOut = new nodey_1.NodeyOutput({
                    id: oldOut.id,
                    created: (_a = this.checkpoint) === null || _a === void 0 ? void 0 : _a.id,
                    parent: newNodey.name,
                    raw: instructions["output"],
                });
                oldOutputHist.addVersion(newOut);
            }
            else {
                // if there is no output history, create a new one
                // but only if raw is not empty
                if (instructions["output"].length > 0) {
                    newOut = new nodey_1.NodeyOutput({
                        created: (_b = this.checkpoint) === null || _b === void 0 ? void 0 : _b.id,
                        parent: newNodey.name,
                        raw: instructions["output"],
                    });
                    this.history.store.store(newOut);
                    nodeyHistory.addOutput(newNodey.version, newOut);
                }
            }
        }
        let changed = oldNodey.version !== newNodey.version;
        let changeKind;
        if (changed)
            changeKind = checkpoint_1.ChangeType.CHANGED;
        if (!changed && newOut)
            changeKind = checkpoint_1.ChangeType.OUTPUT_CHANGED;
        // update the checkpoint
        if (changeKind) {
            let cellDat = {
                cell: newNodey.name,
                changeType: changeKind,
                output: newOut ? [newOut.name] : [],
            };
            this.checkpoint.targetCells.push(cellDat);
        }
        // finally return updated new version
        return newNodey;
    }
}
exports.Commit = Commit;
// helper functions
function checkTimeDiff(A, B) {
    let minutes_elapsed = Math.abs(A.timestamp - B.timestamp) / 1000 / 60;
    return minutes_elapsed < 6;
}
function checkArtfiactOverlap(targets_A, targets_B) {
    let B = targets_B === null || targets_B === void 0 ? void 0 : targets_B.map((target) => target.artifactName);
    if (B) {
        return targets_A.every((nodey) => {
            let artifactName = nodey.artifactName;
            return B.indexOf(artifactName) < 0;
        });
    }
    return false;
}


/***/ }),

/***/ "./lib/verdant-model/history/stage/history-stage.js":
/*!**********************************************************!*\
  !*** ./lib/verdant-model/history/stage/history-stage.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HistoryStage = void 0;
const commit_1 = __webpack_require__(/*! ./commit */ "./lib/verdant-model/history/stage/commit.js");
const notebook_1 = __webpack_require__(/*! ../../notebook */ "./lib/verdant-model/notebook.js");
class HistoryStage {
    constructor(history, fileManager) {
        this.history = history;
        this.fileManager = fileManager;
        this.open_commits = [];
    }
    // ABDOU
    // verdant-model/notebook-events/run-cell.ts:17:50 
    // verdant-model/notebook-events/save-notebook.ts
    commit(checkpoint, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let c = this.getCommit(checkpoint);
            // if commit was *actually* verified to be needed, it will record new versions
            try {
                yield c.commit(options);
            }
            catch (error) {
                console.error("Verdant: Error in making commit: ", error);
            }
            this.closeCommit(c);
            return c.checkpoint;
        });
    }
    markAsPossiblyEdited(nodey, checkpoint) {
        let c = this.getCommit(checkpoint);
        c.markAsPossiblyEdited(nodey);
    }
    commitCellAdded(added, index, checkpoint) {
        let c = this.getCommit(checkpoint);
        c.addCell(added, index);
        this.closeCommit(c);
        return c.checkpoint;
    }
    commitCellDeleted(deleted, checkpoint) {
        let c = this.getCommit(checkpoint);
        c.deleteCell(deleted);
        this.closeCommit(c);
        return c.checkpoint;
    }
    commitCellMoved(moved, newPos, checkpoint) {
        let c = this.getCommit(checkpoint);
        c.moveCell(moved, newPos);
        this.closeCommit(c);
        return c.checkpoint;
    }
    commitCellTypeChanged(oldCell, newCell, checkpoint) {
        let c = this.getCommit(checkpoint);
        c.changeCellType(oldCell, newCell);
        this.closeCommit(c);
        return c.checkpoint;
    }
    getCommit(checkpoint) {
        let c = this.open_commits.find((c) => c.checkpoint.id === checkpoint.id);
        if (!c) {
            c = new commit_1.Commit(checkpoint, this.history, this.fileManager);
            this.open_commits.push(c);
        }
        return c;
    }
    closeCommit(commit) {
        let i = this.open_commits.indexOf(commit);
        if (i > -1)
            this.open_commits.splice(i, 1);
        let notebook = this.history.store.getNotebook(commit.checkpoint.notebook);
        notebook_1.log("Commit complete:", commit.checkpoint, notebook, this.history);
    }
}
exports.HistoryStage = HistoryStage;


/***/ }),

/***/ "./lib/verdant-model/history/stage/index.js":
/*!**************************************************!*\
  !*** ./lib/verdant-model/history/stage/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./history-stage */ "./lib/verdant-model/history/stage/history-stage.js"), exports);
__exportStar(__webpack_require__(/*! ./commit */ "./lib/verdant-model/history/stage/commit.js"), exports);


/***/ }),

/***/ "./lib/verdant-model/history/stage/stage.js":
/*!**************************************************!*\
  !*** ./lib/verdant-model/history/stage/stage.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Stage = void 0;
const nodey_1 = __webpack_require__(/*! ../../nodey */ "./lib/verdant-model/nodey/index.js");
const store_1 = __webpack_require__(/*! ../store */ "./lib/verdant-model/history/store/index.js");
/*
 * Stage is responsible for figuring out which *potentially* changed nodey
 * are really edited and how, by verifying changes and working with the AST
 * module to figure out the exact changes to code nodey
 */
class Stage {
    constructor(history, fileManager) {
        /*
         * Dirty nodey lists nodey that *might* be changed, but we'll need to verify
         * when it's time to stage changes
         */
        this.dirty_nodey = [];
        /*
         * Staged data structures contain the instructions and data we need to create a
         * new updated version of the nodey in the history data store. Each instruction
         * is recorded by the cell name, which is the base artifact name of the cell
         * such as C5 or M4
         */
        this.staged_total = [];
        this.staged_codeCell = {};
        this.staged_markdown = {};
        this.staged_rawCell = {};
        this.history = history;
        this.fileManager = fileManager;
    }
    getAllStaged() {
        return this.staged_total;
    }
    getStaging(cell) {
        if (cell instanceof nodey_1.NodeyCodeCell)
            return this.staged_codeCell[cell.artifactName];
        if (cell instanceof nodey_1.NodeyMarkdown)
            return this.staged_markdown[cell.artifactName];
        if (cell instanceof nodey_1.NodeyRawCell)
            return this.staged_rawCell[cell.artifactName];
    }
    stage(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            // create staging lists
            yield Promise.all(this.dirty_nodey.map((name) => __awaiter(this, void 0, void 0, function* () {
                // get potentially dirty nodey
                let nodey = this.history.store.get(name);
                if (nodey instanceof nodey_1.NodeyCode) {
                    let nodeyCell;
                    if (nodey instanceof nodey_1.NodeyCodeCell)
                        nodeyCell = nodey;
                    else
                        nodeyCell = this.history.store.getCellParent(nodey);
                    this.checkCodeCellNodey(nodeyCell);
                    // HACK see image on-save issue
                    if (!options["ignore_output"])
                        yield this.checkOutputNodey(nodeyCell);
                }
                else if (nodey instanceof nodey_1.NodeyMarkdown) {
                    this.checkMarkdownNodey(nodey);
                }
                else if (nodey instanceof nodey_1.NodeyRawCell) {
                    this.checkRawCellNodey(nodey);
                }
            })));
            // empty after all have been considered
            this.dirty_nodey = [];
        });
    }
    isEdited() {
        let codeCells = Object.keys(this.staged_codeCell);
        let markdownCells = Object.keys(this.staged_markdown);
        let rawCells = Object.keys(this.staged_rawCell);
        return codeCells.length + markdownCells.length + rawCells.length > 0;
    }
    checkCodeCellNodey(nodey) {
        let cell = this.history.notebook.getCellByNode(nodey);
        let newText = (cell === null || cell === void 0 ? void 0 : cell.getText()) || "";
        let oldText = nodey.literal || ""; // assuming no AST level data
        if (oldText !== newText) {
            // store instructions for a new version of nodey in staging
            if (!this.staged_codeCell[nodey.artifactName]) {
                this.staged_codeCell[nodey.artifactName] = { literal: newText };
                this.staged_total.push(nodey);
            }
            this.staged_codeCell[nodey.artifactName]["literal"] = newText;
        }
    }
    checkOutputNodey(nodey) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // get current (new) output if any
            let cell = this.history.notebook.getCellByNode(nodey);
            let outputArea = cell === null || cell === void 0 ? void 0 : cell.outputArea;
            let raw = []; // no output
            if (outputArea)
                raw = ((_a = cell === null || cell === void 0 ? void 0 : cell.outputArea) === null || _a === void 0 ? void 0 : _a.model.toJSON()) || []; // output if present
            // get prior output if any
            let oldOutput = cell === null || cell === void 0 ? void 0 : cell.output;
            // first, don't record this output if it is completely errors
            let onlyErrors = store_1.OutputHistory.checkForAllErrors(raw);
            if (!onlyErrors) {
                // compare to see if output has changed
                let same = yield store_1.OutputHistory.isSame(oldOutput, raw, this.fileManager);
                if (!same) {
                    // make instructions for a new Output in staging
                    if (!this.staged_codeCell[nodey.artifactName]) {
                        this.staged_codeCell[nodey.artifactName] = {};
                        this.staged_total.push(nodey);
                    }
                    this.staged_codeCell[nodey.artifactName]["output"] = raw;
                }
            }
        });
    }
    checkMarkdownNodey(nodey) {
        let cell = this.history.notebook.getCellByNode(nodey);
        let newText = (cell === null || cell === void 0 ? void 0 : cell.getText()) || "";
        let oldText = nodey.markdown;
        if (oldText != newText) {
            // store instructions for a new version of nodey in staging
            if (!this.staged_markdown[nodey.artifactName]) {
                this.staged_markdown[nodey.artifactName] = { markdown: newText };
                this.staged_total.push(nodey);
            }
            else
                this.staged_markdown[nodey.artifactName]["markdown"] = newText;
        }
    }
    checkRawCellNodey(nodey) {
        let cell = this.history.notebook.getCellByNode(nodey);
        let newText = (cell === null || cell === void 0 ? void 0 : cell.getText()) || "";
        let oldText = nodey.literal || "";
        if (oldText !== newText) {
            // store instructions for a new version of nodey in staging
            if (!this.staged_rawCell[nodey.artifactName]) {
                this.staged_rawCell[nodey.artifactName] = { literal: newText };
                this.staged_total.push(nodey);
            }
            else
                this.staged_rawCell[nodey.artifactName]["literal"] = newText;
        }
    }
}
exports.Stage = Stage;


/***/ }),

/***/ "./lib/verdant-model/history/store/code-history.js":
/*!*********************************************************!*\
  !*** ./lib/verdant-model/history/store/code-history.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeHistory = void 0;
const node_history_1 = __webpack_require__(/*! ./node-history */ "./lib/verdant-model/history/store/node-history.js");
/*
 * Goal is to keep track of all of the output that go with this code,
 * since different code versions will have different output history.
 */
class CodeHistory extends node_history_1.NodeHistory {
    constructor() {
        super(...arguments);
        // these are entire output histories
        this.output_histories = {};
    }
    addOutput(code_ver, out) {
        if (this.output_histories[code_ver])
            throw new Error("code version already has an output history associated with it");
        this.output_histories[code_ver] = out.typeChar + "." + out.id;
    }
    getOutput(code_ver) {
        return this.output_histories[code_ver];
    }
    get allOutput() {
        return Array.from(Object.values(this.output_histories));
    }
    fromJSON(jsn, factory, id) {
        super.fromJSON(jsn, factory, id);
        this.output_histories = jsn.output_histories;
    }
    // helper method
    serialize(vers) {
        let data = super.serialize(vers);
        return Object.assign({ output_histories: this.output_histories }, data);
    }
}
exports.CodeHistory = CodeHistory;


/***/ }),

/***/ "./lib/verdant-model/history/store/history-store.js":
/*!**********************************************************!*\
  !*** ./lib/verdant-model/history/store/history-store.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HistoryStore = void 0;
const nodey_1 = __webpack_require__(/*! ../../nodey */ "./lib/verdant-model/nodey/index.js");
const notebook_1 = __webpack_require__(/*! ../../notebook */ "./lib/verdant-model/notebook.js");
const __1 = __webpack_require__(/*! .. */ "./lib/verdant-model/history/index.js");
const search_1 = __webpack_require__(/*! ./search */ "./lib/verdant-model/history/store/search.js");
class HistoryStore {
    constructor(history, fileManager) {
        this._codeCellStore = [];
        this._markdownStore = [];
        this._rawCellStore = [];
        this._outputStore = [];
        this._snippetStore = [];
        this.history = history;
        this.fileManager = fileManager;
    }
    get currentNotebook() {
        var _a;
        return (_a = this._notebookHistory) === null || _a === void 0 ? void 0 : _a.latest;
    }
    getNotebook(ver) {
        return this._notebookHistory.getVersion(ver);
    }
    get cells() {
        let notebook = this.currentNotebook;
        if (!notebook)
            return []; // error case only
        return notebook.cells.map((name) => this.get(name));
    }
    getHistoryOf(name) {
        if (!name)
            return; // error case only
        let typeChar = "???"; // error case only
        let id;
        if (typeof name === "string") {
            var idVal;
            [typeChar, idVal] = name.split(".");
            id = parseInt(idVal);
        }
        else if (name instanceof nodey_1.Nodey) {
            typeChar = name.typeChar;
            id = name.id === undefined ? -1 : name.id;
        }
        switch (typeChar) {
            case "n":
                return this._notebookHistory;
            case "c":
                return this._codeCellStore[id];
            case "o":
                return this._outputStore[id];
            case "s":
                return this._snippetStore[id];
            case "m":
                return this._markdownStore[id];
            case "r":
                return this._rawCellStore[id];
            default:
                console.error("nodey type not found" + name + " " + typeof name);
        }
    }
    getLatestOf(name) {
        let nodeHist = this.getHistoryOf(name);
        if (nodeHist === undefined)
            // error case only
            console.error("No history found for " + name + " " + typeof name);
        else
            return nodeHist.latest;
    }
    getPriorVersion(name) {
        if (!name)
            return; // error case only
        let ver = -1; // error case only
        if (name instanceof nodey_1.Nodey) {
            if (name.version !== undefined)
                ver = name.version - 1;
        }
        else {
            let [, , verVal] = name.split(".");
            ver = parseInt(verVal) - 1;
        }
        let nodeHist = this.getHistoryOf(name);
        if (ver > -1 && nodeHist)
            return nodeHist.getVersion(ver);
        else
            return;
    }
    get(name) {
        if (!name)
            return; // error case only
        //log("attempting to find", name);
        let [, , verVal] = name.split(".");
        let ver = verVal ? parseInt(verVal) : undefined;
        let nodeHist = this.getHistoryOf(name);
        if (ver !== undefined)
            return nodeHist === null || nodeHist === void 0 ? void 0 : nodeHist.getVersion(ver);
        return nodeHist === null || nodeHist === void 0 ? void 0 : nodeHist.latest;
    }
    getOutput(nodey) {
        if (!nodey)
            return;
        let cell;
        if (nodey instanceof nodey_1.NodeyCodeCell)
            cell = nodey;
        else
            cell = this.getCellParent(nodey);
        let cellHistory = this.getHistoryOf(cell);
        let outName = cellHistory === null || cellHistory === void 0 ? void 0 : cellHistory.getOutput(cell === null || cell === void 0 ? void 0 : cell.version);
        if (outName)
            return this.getHistoryOf(outName);
        return;
    }
    // returns output that was specifically created or present in a given notebook
    getOutputForNotebook(nodey, relativeTo) {
        if (!nodey || !relativeTo)
            return;
        let outputHist = this.getOutput(nodey);
        if (!outputHist)
            return;
        let out = outputHist.find((output) => output.created === relativeTo.created);
        if (!out) {
            // no output was created in this notebook, so find any output that would
            // have been present
            let outBefore = outputHist.filter((output) => output.created < relativeTo.created);
            out = outBefore[outBefore.length - 1];
        }
        return out;
    }
    getAllOutput(nodey) {
        if (!nodey)
            return;
        let cell;
        if (nodey instanceof nodey_1.NodeyCodeCell)
            cell = nodey;
        else {
            let parent = this.getCellParent(nodey);
            if (parent)
                cell = parent;
        }
        let cellHistory = this.getHistoryOf(cell);
        let outNames = cellHistory === null || cellHistory === void 0 ? void 0 : cellHistory.allOutput;
        return outNames === null || outNames === void 0 ? void 0 : outNames.map((name) => this.getHistoryOf(name));
    }
    store(nodey) {
        if (nodey instanceof nodey_1.NodeyNotebook) {
            let id = 0;
            nodey.id = id;
            // if this is the first version
            if (!this._notebookHistory)
                this._notebookHistory = new __1.NodeHistory();
            this._notebookHistory.addVersion(nodey);
        }
        else {
            let store = this._getStoreFor(nodey);
            if (store) {
                let history = this._makeHistoryFor(nodey);
                if (history) {
                    let id = store.push(history) - 1;
                    nodey.id = id;
                    store[nodey.id].addVersion(nodey);
                }
                else
                    console.error("Failed to create new history for nodey: ", nodey);
            }
            else
                console.error("Failed to find existing history store for nodey ", nodey);
        }
    }
    /*
     * Search
     */
    search(query) {
        return search_1.Search.search(query, this.history.inspector, this._markdownStore, this._codeCellStore, this._outputStore);
    }
    /**
     * newNodey and oldNodey are nodeys with two seperate histories.
     * This function creates a back pointer between the first version
     * of newNodey back to the history, version v of oldNodey.
     **/
    linkBackHistories(newNodey, oldNodey) {
        let history = this.getHistoryOf(newNodey);
        if (history)
            history.addOriginPointer(oldNodey);
        else
            console.error("Failed to link back histories between ", newNodey, " and ", oldNodey);
    }
    _getStoreFor(nodey) {
        if (nodey instanceof nodey_1.NodeyCodeCell)
            return this._codeCellStore;
        else if (nodey instanceof nodey_1.NodeyMarkdown)
            return this._markdownStore;
        else if (nodey instanceof nodey_1.NodeyOutput)
            return this._outputStore;
        else if (nodey instanceof nodey_1.NodeyCode)
            return this._snippetStore;
        else if (nodey instanceof nodey_1.NodeyRawCell)
            return this._rawCellStore;
    }
    _makeHistoryFor(nodey) {
        if (nodey instanceof nodey_1.NodeyMarkdown || nodey instanceof nodey_1.NodeyRawCell)
            return new __1.NodeHistory();
        else if (nodey instanceof nodey_1.NodeyCodeCell)
            return new __1.CodeHistory();
        else if (nodey instanceof nodey_1.NodeyOutput)
            return new __1.OutputHistory(this.fileManager);
        else if (nodey instanceof nodey_1.NodeyCode)
            return new __1.NodeHistory();
    }
    registerTiedNodey(nodey, forceTie) {
        let oldNodey = this.get(forceTie);
        let history = this.getHistoryOf(oldNodey);
        if (history) {
            history.addVersion(nodey);
            nodey.id = oldNodey.id;
        }
        else {
            console.error("Failed to register tied history between ", nodey.artifactName, " and ", forceTie);
        }
    }
    getCellParent(relativeTo) {
        //log("get cell parent of ", relativeTo);
        if (relativeTo instanceof nodey_1.NodeyCodeCell)
            return relativeTo;
        else if (relativeTo.parent) {
            const latest = this.getLatestOf(relativeTo.parent);
            if (latest)
                return this.getCellParent(latest);
        }
    }
    getNotebookOf(relativeTo) {
        let created = relativeTo === null || relativeTo === void 0 ? void 0 : relativeTo.created;
        if (created !== undefined) {
            // error case if undefined
            let event = this.history.checkpoints.get(created);
            if (event) {
                // error case if undefined
                let notebook_id = event.notebook;
                if (notebook_id !== undefined)
                    return this.getNotebook(notebook_id);
            }
        }
        return;
    }
    getForNotebook(nodeyHist, relativeTo) {
        const notebook = this.getNotebook(relativeTo);
        const nextNotebook = this.getNotebook(relativeTo + 1);
        const endCheck = (nextNotebook === null || nextNotebook === void 0 ? void 0 : nextNotebook.created) || (notebook === null || notebook === void 0 ? void 0 : notebook.created) + 1 || -1;
        if (nodeyHist && endCheck !== -1) {
            let max = -1;
            nodeyHist.foreach((ver) => {
                if (ver.created < endCheck)
                    max = ver.version;
            });
            return nodeyHist.getVersion(max);
        }
    }
    writeToFile() {
        this.fileManager.writeToFile();
    }
    dump() {
        //TODO only for debug
        notebook_1.log(this._codeCellStore);
    }
    toJSON() {
        return {
            notebook: this._notebookHistory.toJSON(),
            codeCells: this._codeCellStore.map((hist) => hist.toJSON()),
            markdownCells: this._markdownStore.map((hist) => hist.toJSON()),
            rawCells: this._rawCellStore.map((hist) => hist.toJSON()),
            snippets: this._snippetStore.map((hist) => hist.toJSON()),
            output: this._outputStore.map((hist) => hist.toJSON()),
        };
    }
    fromJSON(data) {
        this._codeCellStore = data.codeCells.map((item, id) => {
            let hist = new __1.CodeHistory();
            hist.fromJSON(item, nodey_1.NodeyCodeCell.fromJSON, id);
            return hist;
        });
        this._markdownStore = data.markdownCells.map((item, id) => {
            let hist = new __1.NodeHistory();
            hist.fromJSON(item, nodey_1.NodeyMarkdown.fromJSON, id);
            return hist;
        });
        if (data.rawCells)
            this._rawCellStore = data.rawCells.map((item, id) => {
                let hist = new __1.NodeHistory();
                hist.fromJSON(item, nodey_1.NodeyRawCell.fromJSON, id);
                return hist;
            });
        this._snippetStore = data.snippets.map((item, id) => {
            let hist = new __1.NodeHistory();
            hist.fromJSON(item, nodey_1.NodeyCode.fromJSON, id);
            return hist;
        });
        this._outputStore = data.output.map((item, id) => {
            let hist = new __1.OutputHistory(this.fileManager);
            hist.fromJSON(item, nodey_1.NodeyOutput.fromJSON, id);
            return hist;
        });
        this._notebookHistory = new __1.NodeHistory();
        this._notebookHistory.fromJSON(data.notebook, nodey_1.NodeyNotebook.fromJSON, 0 // all notebooks have an id of 0, it's a singleton
        );
    }
    /*
     * Returns the equivalent of toJSON() for a slice of history
     * starting at fromVer and ending (non-inclusive) at toVer
     * versions of the whole notebook.
     *
     * returns null if given an invalid fromVer/toVer pair
     */
    slice(fromVer, toVer) {
        var _a, _b;
        if (fromVer > toVer)
            return null; // error case
        const fromTime = (_a = this.getNotebook(fromVer)) === null || _a === void 0 ? void 0 : _a.created;
        const toTime = (_b = this.getNotebook(toVer)) === null || _b === void 0 ? void 0 : _b.created;
        if (!fromTime || !toTime)
            return null; // error case
        // slice all available histories
        let notebookList = this._notebookHistory.sliceByVer(fromVer, toVer);
        let codeCells = this.sliceStore(this._codeCellStore, fromTime, toTime);
        let markdownCells = this.sliceStore(this._markdownStore, fromTime, toTime);
        let rawCells = this.sliceStore(this._rawCellStore, fromTime, toTime);
        let output = this.sliceStore(this._outputStore, fromTime, toTime);
        return {
            notebook: notebookList,
            codeCells,
            markdownCells,
            rawCells,
            snippets: [],
            output,
        };
    }
    // helper method
    sliceStore(store, fromTime, toTime) {
        let slice = [];
        store.forEach((history) => {
            let data = history.sliceByTime(fromTime, toTime);
            if (data && data.versions.length > 0)
                slice.push(data);
        });
        return slice;
    }
}
exports.HistoryStore = HistoryStore;


/***/ }),

/***/ "./lib/verdant-model/history/store/index.js":
/*!**************************************************!*\
  !*** ./lib/verdant-model/history/store/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./history-store */ "./lib/verdant-model/history/store/history-store.js"), exports);
__exportStar(__webpack_require__(/*! ./node-history */ "./lib/verdant-model/history/store/node-history.js"), exports);
__exportStar(__webpack_require__(/*! ./origin-pointer */ "./lib/verdant-model/history/store/origin-pointer.js"), exports);
__exportStar(__webpack_require__(/*! ./output-history */ "./lib/verdant-model/history/store/output-history.js"), exports);
__exportStar(__webpack_require__(/*! ./code-history */ "./lib/verdant-model/history/store/code-history.js"), exports);


/***/ }),

/***/ "./lib/verdant-model/history/store/node-history.js":
/*!*********************************************************!*\
  !*** ./lib/verdant-model/history/store/node-history.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeHistory = void 0;
const origin_pointer_1 = __webpack_require__(/*! ./origin-pointer */ "./lib/verdant-model/history/store/origin-pointer.js");
const notebook_1 = __webpack_require__(/*! ../../notebook */ "./lib/verdant-model/notebook.js");
const DEBUG = false;
/*
 * Just a container for a list of nodey versions
 */
class NodeHistory {
    constructor() {
        this.originPointer = null;
        this.versions = [];
    }
    getAllVersions() {
        return this.versions.slice(0);
    }
    addVersion(nodey) {
        let ver = this.versions.push(nodey);
        nodey.version = ver - 1;
    }
    getVersion(ver) {
        return ver > -1 ? this.versions[ver] : undefined;
    }
    find(callbackfn) {
        return this.versions.find(callbackfn);
    }
    foreach(callbackfn) {
        return this.versions.forEach(callbackfn);
    }
    // wrap to allow override implementation of filter
    filter(callbackfn) {
        return this.versions.filter(callbackfn);
    }
    // wrap to allow override implementation of map
    map(callbackfn) {
        return this.versions.map(callbackfn);
    }
    get name() {
        let latest = this.versions[this.versions.length - 1];
        if (latest)
            return (latest.typeChar + "." + (latest.id !== undefined ? latest.id : "???"));
    }
    get latest() {
        return this.versions[this.versions.length - 1];
    }
    get length() {
        return this.versions.length;
    }
    addOriginPointer(origin) {
        this.originPointer = new origin_pointer_1.OriginPointer(origin);
    }
    toJSON() {
        return this.serialize(this.versions);
    }
    fromJSON(jsn, factory, id) {
        if (DEBUG)
            notebook_1.log("FACTORY DATA", jsn);
        this.versions = jsn.versions.map((nodeDat, version) => {
            if (nodeDat.origin)
                this.originPointer = new origin_pointer_1.OriginPointer(nodeDat.origin);
            let nodey = factory(nodeDat);
            nodey.id = id;
            nodey.version = version;
            //log("MADE NODEY FROM DATA", nodey, nodeDat);
            return nodey;
        });
    }
    sliceByTime(fromTime, toTime) {
        let slice = [];
        // get the first index of versions that happen on or after fromTime
        let i = this.versions.findIndex((nodey) => {
            return nodey.created >= fromTime && nodey.created < toTime;
        });
        let nodey = this.versions[i]; // check each nodey to see if it is within time
        while (nodey && nodey.created >= fromTime && nodey.created < toTime) {
            slice.push(nodey);
            i++;
            nodey = this.versions[i];
        }
        return this.serialize(slice);
    }
    sliceByVer(fromVer, toVer) {
        let slice = this.versions.slice(fromVer, toVer);
        return this.serialize(slice);
    }
    // helper method
    serialize(vers) {
        let data = vers.map((node) => node.toJSON());
        if (this.originPointer && data.length > 0)
            data[data.length - 1].origin = this.originPointer.origin;
        return { artifact_name: this.name || "", versions: data };
    }
}
exports.NodeHistory = NodeHistory;


/***/ }),

/***/ "./lib/verdant-model/history/store/origin-pointer.js":
/*!***********************************************************!*\
  !*** ./lib/verdant-model/history/store/origin-pointer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OriginPointer = void 0;
const nodey_1 = __webpack_require__(/*! ../../nodey */ "./lib/verdant-model/nodey/index.js");
/*
 * an Origin Pointer
 */
class OriginPointer {
    constructor(originNode) {
        if (originNode instanceof nodey_1.Nodey)
            this.origin = originNode.name;
        else
            this.origin = originNode;
    }
}
exports.OriginPointer = OriginPointer;


/***/ }),

/***/ "./lib/verdant-model/history/store/output-history.js":
/*!***********************************************************!*\
  !*** ./lib/verdant-model/history/store/output-history.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OutputHistory = void 0;
const node_history_1 = __webpack_require__(/*! ./node-history */ "./lib/verdant-model/history/store/node-history.js");
const nodey_1 = __webpack_require__(/*! ../../nodey */ "./lib/verdant-model/nodey/index.js");
const nbformat = __importStar(__webpack_require__(/*! @jupyterlab/nbformat */ "webpack/sharing/consume/default/@jupyterlab/nbformat"));
/*
 * Goal is to store image or larger output externally in a folder without
 * the rest of the system needing to know that it's stored offsite
 */
/*
 * Note on nodey.raw:
 * Each output can have a list of different raw outputs. We'll need to handle them individually
 * in order to store images and charts externally.
 */
class OutputHistory extends node_history_1.NodeHistory {
    constructor(fileManager) {
        super();
        this.fileManager = fileManager;
    }
    // send large/image output to external folder
    addVersion(nodey) {
        super.addVersion(nodey);
        let ver = nodey.version;
        let fixedRaw = nodey.raw.map((out, index) => {
            let imageTag = OutputHistory.isImage(out);
            if (imageTag)
                return this.sendImageToFile(ver, index, out, imageTag);
            return out;
        });
        this.versions[ver].raw = fixedRaw;
        return ver;
    }
    static isSame(A = [], B = [], fileManager) {
        return __awaiter(this, void 0, void 0, function* () {
            let outList_a = A instanceof nodey_1.NodeyOutput ? A.raw : A;
            let outList_b = B instanceof nodey_1.NodeyOutput ? B.raw : B;
            // now check that they have the same number of outputs
            if (outList_a.length !== outList_b.length)
                return false;
            else {
                // helper function
                const asyncEvery = (arr, predicate) => __awaiter(this, void 0, void 0, function* () {
                    for (let i = 0; i < arr.length; i++) {
                        const e = arr[i];
                        if (!(yield predicate(e, i)))
                            return false;
                    }
                    return true;
                });
                // now check that every output matches in a and b
                return yield asyncEvery(outList_a, (a, index) => __awaiter(this, void 0, void 0, function* () {
                    let b = outList_b[index];
                    // Important! ignore the execution count, only compare
                    // the data (or text) field of the output
                    let raw_a = a.data ? a.data : a.text ? a.text : a;
                    let raw_b = b.data ? b.data : b.text ? b.text : b;
                    // if HTML format, get the raw text to compare
                    if (raw_a && raw_a["text/plain"])
                        raw_a = raw_a["text/plain"];
                    if (raw_b && raw_b["text/plain"])
                        raw_b = raw_b["text/plain"];
                    // retrieve from storage if needed
                    if (OutputHistory.isOffsite(a)) {
                        a = yield fileManager.getOutput(a);
                        if (a)
                            raw_a = a;
                    }
                    if (b instanceof nodey_1.NodeyOutput && OutputHistory.isOffsite(b)) {
                        b = yield fileManager.getOutput(b);
                        if (b)
                            raw_b = a;
                    }
                    // get image tags if images, assuming other metadata doesn't matter
                    let image_a = OutputHistory.isImage(a);
                    if (image_a && (a === null || a === void 0 ? void 0 : a.data))
                        raw_a = a.data[image_a] || raw_a;
                    let image_b = OutputHistory.isImage(b);
                    if (image_b && (b === null || b === void 0 ? void 0 : b.data))
                        raw_b = b.data[image_b] || raw_b;
                    /*
                     * TODO
                     * images pulled from an offsite file have extra header data (?) which makes
                     * their raw data larger and not match a fresh output. So we need special
                     * tactics to compare images
                     */
                    // finally stringify data to compare it
                    const str_a = JSON.stringify(raw_a);
                    const str_b = JSON.stringify(raw_b);
                    return str_a === str_b;
                }));
            }
        });
    }
    static isImage(out) {
        if (out.data) {
            let keys = Object.keys(out.data);
            return Array.from(keys).find((k) => k.includes("image"));
        }
    }
    static isOffsite(output) {
        return (output.fileType !== undefined &&
            output.offsite !== undefined);
    }
    // returns true if this output is only errors
    static checkForAllErrors(output) {
        if (output.length < 1)
            return false; // not anything here
        // must have at least 1 non-error
        let nonError = output === null || output === void 0 ? void 0 : output.find((out) => {
            var _a;
            // check for error type
            if (nbformat.isError(out))
                return false;
            // check for warnings
            if (nbformat.isStream(out))
                return ((_a = out) === null || _a === void 0 ? void 0 : _a.name) !== "stderr";
            // not an error
            return true;
        });
        return nonError === undefined;
    }
    sendImageToFile(ver, index, out, imageTag) {
        let fileType = imageTag.split("/")[1]; // e.g. png
        let data = out.data[imageTag];
        let filename = `output_${this.versions[0].id}_${ver}_${index}.${fileType}`;
        this.fileManager.writeOutput(filename, data);
        return { output_type: "offsite image", offsite: filename, fileType };
    }
}
exports.OutputHistory = OutputHistory;


/***/ }),

/***/ "./lib/verdant-model/history/store/search.js":
/*!***************************************************!*\
  !*** ./lib/verdant-model/history/store/search.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Search = void 0;
const nodey_1 = __webpack_require__(/*! ../../nodey */ "./lib/verdant-model/nodey/index.js");
const _1 = __webpack_require__(/*! . */ "./lib/verdant-model/history/store/index.js");
const VISUAL_KEYWORDS = [
    "plot",
    "hist",
    "chart",
    "histogram",
    "image",
    "matplotlib",
    "graphs",
    "diagram",
    "map",
];
const EMPTY_CODE = {
    label: "code cell",
    count: 0,
    results: [],
};
const EMPTY_MARKDOWN = {
    label: "markdown cell",
    count: 0,
    results: [],
};
const EMPTY_OUTPUT = {
    label: "output",
    count: 0,
    results: [],
};
var Search;
(function (Search) {
    function search(query, sampler, _markdownStore, _codeCellStore, _outputStore) {
        let markdown_results, code_results, output_results;
        if (query === null || query === void 0 ? void 0 : query.startsWith("=")) {
            // exact artifact search
            const name = formatName(query);
            console.log("ARTIFACT SEARCH FOR ", query, name);
            markdown_results = findArtifactMarkdown(name, _markdownStore);
            code_results = findArtifactCode(name, _codeCellStore);
            output_results = findArtifactOutput(name, _outputStore);
        }
        else {
            // keyword search
            markdown_results = findMarkdown(query, _markdownStore);
            code_results = findCode(query, _codeCellStore, sampler);
            output_results = findOutput(query, _outputStore, sampler);
            return [code_results, markdown_results, output_results];
        }
        return [code_results, markdown_results, output_results];
    }
    Search.search = search;
    function formatName(query) {
        var _a, _b;
        let name = (_a = query.substring(1)) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        let typeChar;
        let id;
        let ver;
        if (name.startsWith("out")) {
            /*
             * output image file formatted as output_10_27_0
             * `output_${this.versions[0].id}_${ver}_${index}.${fileType}`
             */
            typeChar = nodey_1.NodeyOutput.typeChar;
            const dot_split = name.split(".");
            const _split = (_b = dot_split[0]) === null || _b === void 0 ? void 0 : _b.split("_");
            id = parseInt(_split[1]);
            ver = parseInt(_split[2]);
        }
        else {
            /*
             * assume normal formatted name
             * typeChar + "." + id + "." + version
             */
            const dot_split = name.split(".");
            typeChar = fixTypeChar(dot_split[0]);
            id = parseInt(dot_split[1]);
            ver = parseInt(dot_split[2]);
        }
        return [typeChar, id, ver];
    }
    function fixTypeChar(typeChar) {
        if (typeChar === nodey_1.NodeyCode.typeChar || typeChar === "code") {
            return nodey_1.NodeyCode.typeChar;
        }
        else if (typeChar === nodey_1.NodeyMarkdown.typeChar || typeChar === "markdown") {
            return nodey_1.NodeyMarkdown.typeChar;
        }
        else if (typeChar === nodey_1.NodeyOutput.typeChar ||
            ["o", "out", "output"].includes(typeChar)) {
            return nodey_1.NodeyOutput.typeChar;
        }
    }
    function findAllOfType(store, result) {
        store.forEach((history) => {
            let all = history.getAllVersions();
            if (all.length > 0) {
                result.count += all === null || all === void 0 ? void 0 : all.length;
                result.results.push(all);
            }
        });
    }
    function findArtifact(id, ver, store, result_acc) {
        result_acc.count = 0;
        result_acc.results = [];
        let history = store[id];
        if (history) {
            // get specific markdown
            let nodey = history.getVersion(ver);
            if (nodey) {
                // get the single markdown with this ID & version
                result_acc.count = 1;
                result_acc.results.push([nodey]);
            }
            else {
                // get all markdown with this ID
                let all = history.getAllVersions();
                if (all.length > 0) {
                    result_acc.count = all.length;
                    result_acc.results.push(all);
                }
            }
        }
        else {
            // get all markdown
            findAllOfType(store, result_acc);
        }
    }
    function findArtifactMarkdown(name, _markdownStore) {
        let [typeChar, id, ver] = name;
        let result_acc = Object.assign({}, EMPTY_MARKDOWN);
        if (typeChar === nodey_1.NodeyMarkdown.typeChar) {
            findArtifact(id, ver, _markdownStore, result_acc);
        }
        return result_acc;
    }
    /*
     * Returns a list of Markdown artifacts, each with a list
     * of all the versions of that artifact that match the query
     */
    function findMarkdown(query, _markdownStore) {
        let result_acc = Object.assign({}, EMPTY_MARKDOWN);
        let results = [];
        let resultCount = 0;
        let text = query.toLowerCase().split(" ");
        _markdownStore.forEach((history) => {
            let match = history.filter((item) => {
                if (!item.markdown)
                    return false;
                let matchesText = text.some((keyword) => item.markdown.toLowerCase().indexOf(keyword) > -1);
                return matchesText;
            });
            if (match.length > 0) {
                results.push(match);
                resultCount += match.length;
            }
        });
        result_acc.results = results;
        result_acc.count += resultCount;
        return result_acc;
    }
    function findArtifactCode(name, _codeCellStore) {
        let [typeChar, id, ver] = name;
        let result_acc = Object.assign({}, EMPTY_CODE);
        if (typeChar === nodey_1.NodeyCode.typeChar) {
            findArtifact(id, ver, _codeCellStore, result_acc);
        }
        return result_acc;
    }
    /*
     * Returns a list of code artifacts, each with a list
     * of all the versions of that artifact that match the query
     */
    function findCode(query, _codeCellStore, sampler) {
        let result_acc = Object.assign({}, EMPTY_CODE);
        let results = [];
        let resultCount = 0;
        let text = query.toLowerCase().split(" ");
        _codeCellStore.forEach((history) => {
            let matches = history.filter((cell) => {
                let sourceText = sampler.nodeToText(cell) || "";
                if (text.some((keyword) => sourceText.toLowerCase().indexOf(keyword) > -1)) {
                    return true;
                }
                return false;
            });
            if (matches.length > 0) {
                results.push(matches);
                resultCount += matches.length;
            }
        });
        result_acc.results = results;
        result_acc.count += resultCount;
        return result_acc;
    }
    function findArtifactOutput(name, _outputStore) {
        let [typeChar, id, ver] = name;
        let result_acc = Object.assign({}, EMPTY_OUTPUT);
        if (typeChar === nodey_1.NodeyOutput.typeChar) {
            findArtifact(id, ver, _outputStore, result_acc);
        }
        return result_acc;
    }
    /*
     * Returns a list of output artifacts, each with a list
     * of all the versions of that artifact that match the query
     */
    function findOutput(query, _outputStore, sampler) {
        let result_acc = Object.assign({}, EMPTY_OUTPUT);
        let results = [];
        let resultCount = 0;
        let text = query.toLowerCase().split(" ");
        const FIND_IMAGES = text.some((word) => VISUAL_KEYWORDS.includes(word))
            ? true
            : false;
        _outputStore.forEach((history) => {
            let matches = history.filter((output) => {
                var _a;
                // search for (any) image
                if (FIND_IMAGES) {
                    const isImage = (_a = output === null || output === void 0 ? void 0 : output.raw) === null || _a === void 0 ? void 0 : _a.some((out) => _1.OutputHistory.isOffsite(out));
                    if (isImage)
                        return true;
                }
                // search text
                let sourceText = sampler.nodeToText(output) || "";
                return text.some((keyword) => sourceText.toLowerCase().indexOf(keyword) > -1);
            });
            if (matches.length > 0) {
                results.push(matches);
                resultCount += matches.length;
            }
        });
        result_acc.results = results;
        result_acc.count += resultCount;
        return result_acc;
    }
})(Search = exports.Search || (exports.Search = {}));


/***/ }),

/***/ "./lib/verdant-model/jupyter-hooks/file-manager.js":
/*!*********************************************************!*\
  !*** ./lib/verdant-model/jupyter-hooks/file-manager.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OutputSaveModel = exports.FileManager = void 0;
const coreutils_1 = __webpack_require__(/*! @jupyterlab/coreutils */ "webpack/sharing/consume/default/@jupyterlab/coreutils");
const notebook_1 = __webpack_require__(/*! ../notebook */ "./lib/verdant-model/notebook.js");
const ghost_to_ipynb_1 = __webpack_require__(/*! ./ghost-to-ipynb */ "./lib/verdant-model/jupyter-hooks/ghost-to-ipynb.js");
class FileManager {
    constructor(docManager, contentsMananger, test = false) {
        this.docManager = docManager;
        this.test_mode = test;
        this.contentsManager = contentsMananger;
    }
    set activeNotebook(notebook) {
        this._activeNotebook = notebook;
    }
    writeToFile() {
        if (this.test_mode)
            return;
        return new Promise((accept, reject) => {
            var notebookPath = this._activeNotebook.path;
            if (notebookPath) {
                //log("notebook path is", notebookPath)
                var name = coreutils_1.PathExt.basename(notebookPath);
                name = name.substring(0, name.indexOf(".")) + ".ipyhistory";
                //log("name is", name)
                var path = "/" +
                    notebookPath.substring(0, notebookPath.lastIndexOf("/") + 1) +
                    name;
                //log("goal path is ", path)
                this.contentsManager
                    .save(path, {
                    type: "file",
                    format: "text",
                    content: JSON.stringify(this._activeNotebook.history.toJSON(), null, 1),
                })
                    .then(() => {
                    notebook_1.log("Model written to file", path);
                    accept();
                })
                    .catch((rej) => {
                    //here when you reject the promise if the filesave fails
                    console.error(rej);
                    accept();
                });
            }
            else {
                console.error("Failed to find valid notebook path to save history to!");
                accept();
            }
        });
    }
    loadFromFile(notebook) {
        return new Promise((accept) => {
            var notebookPath = notebook.path;
            if (notebookPath) {
                //log("notebook path is", notebookPath)
                var name = coreutils_1.PathExt.basename(notebookPath);
                name = name.substring(0, name.indexOf(".")) + ".ipyhistory";
                //log("name is", name)
                var path = "/" +
                    notebookPath.substring(0, notebookPath.lastIndexOf("/") + 1) +
                    name;
                this.contentsManager
                    .get(path)
                    .then((res) => {
                    notebook_1.log("Found a model ", res);
                    accept(res.content);
                })
                    .catch(() => {
                    //here when you reject the promise if the filesave fails
                    //console.error(rej);
                    accept(null);
                });
            }
            else {
                console.error("Unable to find valid notebook path to load history from.");
                accept(null);
            }
        });
    }
    saveGhostBook(history, notebook) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.test_mode)
                return;
            let model = yield ghost_to_ipynb_1.GhostToNotebookConverter.convert(history, notebook);
            let historyData = history.slice(0, notebook.version);
            // prepare the path and file name
            var notebookPath = this._activeNotebook.path;
            if (notebookPath) {
                let basename = coreutils_1.PathExt.basename(notebookPath);
                basename =
                    basename.substring(0, basename.indexOf(".")) +
                        "-v" +
                        (notebook.version + 1);
                let historyName = basename + ".ipyhistory";
                let notebookName = basename + ".ipynb";
                let path = "/" + notebookPath.substring(0, notebookPath.lastIndexOf("/") + 1);
                // save notebook
                this.contentsManager
                    .save(path + notebookName, {
                    type: "file",
                    format: "text",
                    content: model.toString(),
                })
                    .then(() => {
                    notebook_1.log("GhostBook written to file", notebookName);
                })
                    .catch((rej) => {
                    //here when you reject the promise if the filesave fails
                    console.error(rej);
                });
                // save history too
                this.contentsManager
                    .save(path + historyName, {
                    type: "file",
                    format: "text",
                    content: JSON.stringify(historyData, null, 1),
                })
                    .then(() => {
                    notebook_1.log("GhostBook history written to file", historyName);
                })
                    .catch((rej) => {
                    //here when you reject the promise if the filesave fails
                    console.error(rej);
                });
            }
            else {
                console.error("No valid notebook path found for ", this._activeNotebook);
            }
        });
    }
    getOutput(output) {
        return __awaiter(this, void 0, void 0, function* () {
            let fileDat;
            var path = this.getOutputPath();
            if (path) {
                path += "/" + output.offsite;
                try {
                    fileDat = yield this.contentsManager.get(path);
                }
                catch (error) {
                    // file is missing, that's ok.
                }
            }
            else {
                // file is missing, that's ok
            }
            let retrieved = {
                output_type: "display_data",
                data: {},
                metadata: {
                    verdant_trust_plz: true,
                    isolated: true,
                },
            };
            if (fileDat) {
                retrieved.data[`image/${output.fileType}`] = fileDat.content + "";
            }
            else {
                retrieved.data["image/svg+xml"] = MISSING_IMAGE_SVG;
            }
            return retrieved;
        });
    }
    writeOutput(filename, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.test_mode)
                return;
            var path = this.getOutputPath();
            if (path !== undefined) {
                path += "/" + filename;
                yield this.makeOutputFolder();
                this.contentsManager.save(path, {
                    type: "file",
                    format: "base64",
                    content: data,
                });
            }
            else
                console.error("Failed to find a valid path to save output history to!", filename);
        });
    }
    getOutputPath() {
        let name = this._activeNotebook.name;
        let notebookPath = this._activeNotebook.path;
        let path = notebookPath.substring(0, notebookPath.lastIndexOf("/") + 1);
        if (name)
            return path + name.substring(0, name.indexOf(".")) + "_output";
    }
    makeOutputFolder() {
        if (this.test_mode)
            return;
        let path = this.getOutputPath();
        if (path) {
            let name = path.substring(2);
            return this.contentsManager.save(path, {
                path,
                name,
                type: "directory",
            });
        }
        else {
            console.error("Failed to make output folder to store output history in.");
        }
    }
}
exports.FileManager = FileManager;
class OutputSaveModel {
    constructor(name, path, createDate, modDate, content) {
        this.type = "file";
        this.writable = true;
        this.mimetype = null;
        this.format = "text";
        this.name = name;
        this.path = path;
        this.created = createDate;
        this.last_modified = modDate;
        this.content = content;
    }
}
exports.OutputSaveModel = OutputSaveModel;
const MISSING_IMAGE_SVG = `<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 29"
aria-labelledby="title"
className="verdant-icon-missingImage"
>
<title id="title">Missing Image Icon</title>
<g>
  <circle cx="6" cy="11" r="2" />
  <path d="M17.908 5l-.593 2H22v15h-9.129l-.593 2H24V5z" />
  <path d="M13.167 21H21v-2.857c-1.997-2.776-2.954-6.657-4.883-7.098L13.167 21zM15.041.716L13.771 5H0v19h8.143l-1.102 3.716 1.918.568 8-27-1.918-.568zM10.31 16.682c-.668-.861-1.34-1.396-2.06-1.396-1.955 0-2.674 4.157-5.25 4.999V21H9.031l-.296 1H2V7h11.18l-2.87 9.682z" />
</g>
</svg>`;


/***/ }),

/***/ "./lib/verdant-model/jupyter-hooks/ghost-to-ipynb.js":
/*!***********************************************************!*\
  !*** ./lib/verdant-model/jupyter-hooks/ghost-to-ipynb.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GhostToNotebookConverter = void 0;
const notebook_1 = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
const history_1 = __webpack_require__(/*! ../history */ "./lib/verdant-model/history/index.js");
const nodey_1 = __webpack_require__(/*! ../nodey */ "./lib/verdant-model/nodey/index.js");
var GhostToNotebookConverter;
(function (GhostToNotebookConverter) {
    function convert(history, notebook) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const ver_notebook = history.notebook;
            // first match language of notebook
            let metadata = ver_notebook.metadata;
            let options = {};
            let lang = metadata === null || metadata === void 0 ? void 0 : metadata.get("language_info");
            if (lang)
                options["languagePreference"] = lang.name;
            let model = new notebook_1.NotebookModel(options);
            // now create cells
            yield Promise.all((_a = notebook === null || notebook === void 0 ? void 0 : notebook.cells) === null || _a === void 0 ? void 0 : _a.map((name, index) => __awaiter(this, void 0, void 0, function* () {
                let cell = history.store.get(name);
                let val;
                // create a CellModel with the Nodey's text
                if (cell instanceof nodey_1.NodeyCodeCell) {
                    val = model.contentFactory.createCodeCell({});
                    val.value.text = cell.literal || "";
                    // create outputs if needed
                    let output = history.store.getOutput(cell);
                    if (output) {
                        let nodeyOut = output.latest;
                        let rawList = yield Promise.all(nodeyOut.raw.map((raw) => __awaiter(this, void 0, void 0, function* () {
                            if (raw) {
                                if (history_1.OutputHistory.isOffsite(raw)) {
                                    raw = yield history.store.fileManager.getOutput(raw);
                                }
                                return raw;
                            }
                            return null;
                        })));
                        rawList.forEach((raw, index) => {
                            if (raw) {
                                let out = val.outputs.contentFactory.createOutputModel({ value: raw });
                                val.outputs.set(index, out.toJSON());
                            }
                        });
                    }
                    //(val as ICodeCellModel).outputs.contentFactory.createOutputModel({})
                }
                else if (cell instanceof nodey_1.NodeyMarkdown) {
                    val = model.contentFactory.createMarkdownCell({});
                    val.value.text = cell.markdown || "";
                }
                else if (cell instanceof nodey_1.NodeyRawCell) {
                    val = model.contentFactory.createRawCell({});
                    val.value.text = cell.literal || "";
                }
                if (val)
                    model.cells.insert(index, val);
            })));
            return model;
        });
    }
    GhostToNotebookConverter.convert = convert;
})(GhostToNotebookConverter = exports.GhostToNotebookConverter || (exports.GhostToNotebookConverter = {}));


/***/ }),

/***/ "./lib/verdant-model/jupyter-hooks/notebook-listen.js":
/*!************************************************************!*\
  !*** ./lib/verdant-model/jupyter-hooks/notebook-listen.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotebookListen = void 0;
const notebook_1 = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
const cells_1 = __webpack_require__(/*! @jupyterlab/cells */ "webpack/sharing/consume/default/@jupyterlab/cells");
const coreutils_1 = __webpack_require__(/*! @lumino/coreutils */ "webpack/sharing/consume/default/@lumino/coreutils");
const signaling_1 = __webpack_require__(/*! @lumino/signaling */ "webpack/sharing/consume/default/@lumino/signaling");
const notebook_2 = __webpack_require__(/*! ../notebook */ "./lib/verdant-model/notebook.js");
const cell_1 = __webpack_require__(/*! ../cell */ "./lib/verdant-model/cell.js");
const notebook_events_1 = __webpack_require__(/*! ../notebook-events */ "./lib/verdant-model/notebook-events/index.js");
class NotebookListen {
    constructor(notebookPanel, verNotebook) {
        this.activeCell = null;
        this._ready = new coreutils_1.PromiseDelegate();
        this._notebookPanel = notebookPanel;
        this.verNotebook = verNotebook;
        this.init();
    }
    dispose() {
        signaling_1.Signal.clearData(this);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._notebookPanel.revealed;
            this._notebook = this._notebookPanel.content;
            notebook_2.log("Notebook panel", this._notebookPanel);
            notebook_2.log("Notebook", this._notebook);
            this.listen();
            this._ready.resolve(undefined);
        });
    }
    get elem() {
        return this._notebook.node;
    }
    get panel() {
        return this._notebookPanel;
    }
    setPanel(panel) {
        // update to a new panel
        this._notebookPanel = panel;
        this.init();
    }
    get notebook() {
        return this._notebook;
    }
    get ready() {
        return this._ready.promise;
    }
    get metadata() {
        var _a;
        return (_a = this._notebook.model) === null || _a === void 0 ? void 0 : _a.metadata;
    }
    get nbformatMinor() {
        var _a, _b;
        return (_b = (_a = this._notebook) === null || _a === void 0 ? void 0 : _a.model) === null || _b === void 0 ? void 0 : _b.nbformatMinor;
    }
    get nbformat() {
        var _a, _b;
        return (_b = (_a = this._notebook) === null || _a === void 0 ? void 0 : _a.model) === null || _b === void 0 ? void 0 : _b.nbformat;
    }
    focusCell(cell = this._notebook.activeCell) {
        notebook_2.log("GOT_FOCUS", cell);
        if (!cell)
            return; //cell was just deleted
        if (!cell.model)
            return; //cell was just deleted
        if (cell instanceof cells_1.CodeCell || cell instanceof cells_1.MarkdownCell) {
            this.verNotebook.focusCell(cell);
        }
    }
    listen() {
        var _a, _b, _c, _d;
        /**
         * fileChanged is "A signal emitted when the model is saved or reverted.""
         */
        (_b = (_a = this._notebookPanel) === null || _a === void 0 ? void 0 : _a.context) === null || _b === void 0 ? void 0 : _b.fileChanged.connect(() => {
            notebook_2.log("FILE_CHANGED", this.verNotebook);
            let saveEvent = new notebook_events_1.SaveNotebook(this.verNotebook);
            this.verNotebook.handleNotebookEvent(saveEvent);
        });
        (_d = (_c = this._notebook.model) === null || _c === void 0 ? void 0 : _c.cells) === null || _d === void 0 ? void 0 : _d.changed.connect((sender, data) => {
            // to avoid duplicates during load wait til load is complete
            // log("DEBUG_LIST_CHANGED_EVENT", sender, data);
            if (!this.verNotebook.ready) {
                notebook_2.log("LOST_LIST_CHANGED_EVENT", "NOT_READY", sender, data);
                return;
            }
            var newIndex = data.newIndex;
            var newValues = data.newValues;
            var oldIndex = data.oldIndex;
            var oldValues = data.oldValues;
            switch (data.type) {
                case "add":
                    this._addNewCells(newIndex, newValues);
                    break;
                case "remove":
                    this._removeCells(oldIndex, oldValues);
                    break;
                case "move":
                    this._cellsMoved(oldIndex, newIndex, newValues);
                    break;
                case "set":
                    this._cellTypeChanged(oldIndex, newIndex, oldValues);
                    break;
                default:
                    notebook_2.log("LOST_LIST_CHANGED_EVENT", "TYPE_NOT)SUPPORTED", sender, data);
                    // log("cell list changed!!!!", sender, data);
                    break;
            }
        });
        this._notebook.activeCellChanged.connect((_, cell) => {
            this.focusCell(cell);
        });
        notebook_1.NotebookActions.executed.connect((_, args) => __awaiter(this, void 0, void 0, function* () {
            //waaat can get execution signals from other notebooks
            if (args.notebook.id === this._notebook.id) {
                const cell = args.cell;
                let verCell = this.verNotebook.getCell(cell.model);
                if (verCell && verCell.model) {
                    let runEvent = new notebook_events_1.RunCell(this.verNotebook, verCell.model);
                    this.verNotebook.handleNotebookEvent(runEvent);
                }
                else {
                    // error case, this cell is missing a history model!
                    try {
                        // to fix create a new cell nodey and checkpoint to record this event
                        let index = this.notebook.widgets.findIndex((w) => w.model.id === cell.model.id);
                        let checkpoint = this.verNotebook.history.checkpoints.generateCheckpoint();
                        let nodey = yield this.verNotebook.ast.create.fromCell(cell, checkpoint);
                        if (!verCell) {
                            // create ver cell if that's missing too
                            this.verNotebook.cells.splice(index, 0, new cell_1.VerCell(this.verNotebook, cell, nodey.name));
                        }
                        else
                            verCell.setModel(nodey.name);
                        this.verNotebook.history.stage.commitCellAdded(nodey, index, checkpoint);
                    }
                    catch (error) {
                        console.error("Verdant: Error with mysterious cell run: ", cell, error);
                    }
                }
            }
        }));
    }
    _addNewCells(newIndex, newValues) {
        /*
            newValues.forEach((value, index) => {
               log("adding cell",newIndex + index, value.toJSON());
            });
        */
        newValues.forEach((_, index) => __awaiter(this, void 0, void 0, function* () {
            var cell = this._notebook.widgets[newIndex + index];
            let createCellEvent = new notebook_events_1.CreateCell(this.verNotebook, cell, newIndex, false);
            this.verNotebook.handleNotebookEvent(createCellEvent);
        }));
    }
    _removeCells(oldIndex, oldValues) {
        notebook_2.log("removing cells", oldIndex, oldValues);
        oldValues.forEach((value) => {
            notebook_2.log("removing cell", oldIndex, value, this.verNotebook);
        });
        oldValues.forEach(() => {
            let deleteCellEvent = new notebook_events_1.DeleteCell(this.verNotebook, oldIndex);
            this.verNotebook.handleNotebookEvent(deleteCellEvent);
        });
    }
    _cellsMoved(oldIndex, newIndex, newValues) {
        newValues.forEach((item) => __awaiter(this, void 0, void 0, function* () {
            let verCell = this.verNotebook.getCell(item);
            if (verCell) {
                notebook_2.log("moving cell", oldIndex, newIndex, newValues);
                let moveCellEvent = new notebook_events_1.MoveCell(this.verNotebook, verCell, oldIndex, newIndex);
                this.verNotebook.handleNotebookEvent(moveCellEvent);
            }
            else
                console.error("Cell not found in notebook history: ", item);
        }));
    }
    _cellTypeChanged(_, newIndex, oldValues) {
        oldValues.forEach((_, index) => {
            var cell = this._notebook.widgets[newIndex + index];
            let switchCellEvent = new notebook_events_1.SwitchCellType(this.verNotebook, cell, newIndex + index);
            this.verNotebook.handleNotebookEvent(switchCellEvent);
        });
    }
}
exports.NotebookListen = NotebookListen;


/***/ }),

/***/ "./lib/verdant-model/jupyter-hooks/render-baby.js":
/*!********************************************************!*\
  !*** ./lib/verdant-model/jupyter-hooks/render-baby.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderBaby = void 0;
const renderers = __importStar(__webpack_require__(/*! @jupyterlab/rendermime */ "webpack/sharing/consume/default/@jupyterlab/rendermime"));
const outputarea_1 = __webpack_require__(/*! @jupyterlab/outputarea */ "webpack/sharing/consume/default/@jupyterlab/outputarea");
const widgets_1 = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
const rendermime_1 = __webpack_require__(/*! @jupyterlab/rendermime */ "webpack/sharing/consume/default/@jupyterlab/rendermime");
const history_1 = __webpack_require__(/*! ../history */ "./lib/verdant-model/history/index.js");
/*
 *  Render baby exposes some basic markdown and code rendermine capability from JupyterLab.
 *  It's a baby because it is only a small bit of Jupyter's rendermime system
 */
class RenderBaby {
    constructor(rendermime, latexTypesetter, linkHandler, fileManager) {
        this.latexTypesetter = latexTypesetter;
        this.linkHandler = linkHandler;
        this.rendermime = rendermime;
        this.fileManager = fileManager;
    }
    renderMarkdown(div, text) {
        return __awaiter(this, void 0, void 0, function* () {
            return renderers.renderMarkdown({
                host: div,
                source: text,
                shouldTypeset: true,
                trusted: true,
                sanitizer: undefined,
                resolver: null,
                linkHandler: this.linkHandler,
                latexTypesetter: this.latexTypesetter,
            });
        });
    }
    createModel(data) {
        return new rendermime_1.MimeModel({ data });
    }
    // returns a string if this is a plaintext output, undefined otherwise
    plaintextOutput(raw) {
        if (raw) {
            const data = raw === null || raw === void 0 ? void 0 : raw.data;
            if (data) {
                const plaintext = data["text/plain"]
                    ? data["text/plain"]
                    : undefined;
                return plaintext;
            }
            else if (raw === null || raw === void 0 ? void 0 : raw.text) {
                return raw.text.toString();
            }
        }
    }
    renderOutput(nodey) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Promise.all(nodey.raw.map((output) => __awaiter(this, void 0, void 0, function* () {
                return this.renderOutputRaw(output);
            })));
        });
    }
    renderOutputRaw(output) {
        return __awaiter(this, void 0, void 0, function* () {
            let widget;
            // check if output is actually stored offsite
            if (history_1.OutputHistory.isOffsite(output)) {
                let retrieved = yield this.fileManager.getOutput(output);
                widget = yield this.renderMimeOutput(retrieved);
            }
            else {
                widget = yield this.renderMimeOutput(output);
            }
            if (!widget) {
                // could not be rendered
                widget = new widgets_1.Widget();
                widget.node.innerHTML =
                    `No renderer could be ` +
                        "found for output. It has the following keys: " +
                        Object.keys(output).join(", ");
            }
            return widget;
        });
    }
    renderMimeOutput(output) {
        return __awaiter(this, void 0, void 0, function* () {
            let trusted = (output === null || output === void 0 ? void 0 : output.metadata) ? output === null || output === void 0 ? void 0 : output.metadata["verdant_trust_plz"] : null;
            let opts = trusted ? { trusted: true } : {};
            let area = new outputarea_1.OutputAreaModel(opts);
            area.fromJSON([output]);
            let model = area.get(0);
            let mimeType = this.rendermime.preferredMimeType(model.data, "any");
            if (mimeType) {
                let outputNode = this.rendermime.createRenderer(mimeType);
                yield outputNode.renderModel(model).catch((error) => {
                    // Manually append error message to output
                    outputNode.node.innerHTML = `<pre>Javascript Error: ${error.message}</pre>`;
                    // Remove mime-type-specific CSS classes
                    outputNode.node.className = "p-Widget jp-RenderedText";
                    outputNode.node.setAttribute("data-mime-type", "application/vnd.jupyter.stderr");
                });
                return outputNode;
            }
            return undefined;
        });
    }
}
exports.RenderBaby = RenderBaby;


/***/ }),

/***/ "./lib/verdant-model/nodey/index.js":
/*!******************************************!*\
  !*** ./lib/verdant-model/nodey/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./nodey */ "./lib/verdant-model/nodey/nodey.js"), exports);
__exportStar(__webpack_require__(/*! ./nodey-code */ "./lib/verdant-model/nodey/nodey-code.js"), exports);
__exportStar(__webpack_require__(/*! ./nodey-code-cell */ "./lib/verdant-model/nodey/nodey-code-cell.js"), exports);
__exportStar(__webpack_require__(/*! ./nodey-markdown */ "./lib/verdant-model/nodey/nodey-markdown.js"), exports);
__exportStar(__webpack_require__(/*! ./nodey-notebook */ "./lib/verdant-model/nodey/nodey-notebook.js"), exports);
__exportStar(__webpack_require__(/*! ./nodey-output */ "./lib/verdant-model/nodey/nodey-output.js"), exports);
__exportStar(__webpack_require__(/*! ./nodey-raw */ "./lib/verdant-model/nodey/nodey-raw.js"), exports);


/***/ }),

/***/ "./lib/verdant-model/nodey/nodey-code-cell.js":
/*!****************************************************!*\
  !*** ./lib/verdant-model/nodey/nodey-code-cell.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeyCodeCell = void 0;
const nodey_code_1 = __webpack_require__(/*! ./nodey-code */ "./lib/verdant-model/nodey/nodey-code.js");
/*
 * Code Cell-level nodey
 */
class NodeyCodeCell extends nodey_code_1.NodeyCode {
    get typeChar() {
        return "c";
    }
    // Note this is simplified from Nodey Code
    toJSON() {
        let jsn = super.toJSON();
        if (this.literal)
            jsn.literal = this.literal;
        jsn.start = this.start;
        jsn.end = this.end;
        return jsn;
    }
}
exports.NodeyCodeCell = NodeyCodeCell;
(function (NodeyCodeCell) {
    function fromJSON(dat) {
        return new NodeyCodeCell({
            parent: dat.parent,
            created: dat.start_checkpoint,
            type: dat.type || "Module",
            content: dat.content || [],
            literal: dat.literal,
            start: dat.start,
            end: dat.end,
        });
    }
    NodeyCodeCell.fromJSON = fromJSON;
})(NodeyCodeCell = exports.NodeyCodeCell || (exports.NodeyCodeCell = {}));


/***/ }),

/***/ "./lib/verdant-model/nodey/nodey-code.js":
/*!***********************************************!*\
  !*** ./lib/verdant-model/nodey/nodey-code.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SyntaxToken = exports.NodeyCode = void 0;
const nodey_1 = __webpack_require__(/*! ./nodey */ "./lib/verdant-model/nodey/nodey.js");
/*
 * Code holds AST details
 */
class NodeyCode extends nodey_1.Nodey {
    constructor(options) {
        super(options);
        this.type = "module"; // default top-level AST type is module
        this.content = [];
        this.updateState(options);
    }
    updateState(options) {
        super.updateState(options);
        this.type = options.type || "module";
        if (options.content && options.content.length > 0) {
            this.content = options.content.slice(0);
            this.content = this.content.map((item) => {
                if (item instanceof SyntaxToken)
                    return item;
                if (typeof item == "string")
                    return item;
                else
                    return new SyntaxToken(item); // fresh from a JSON file
            });
        }
        this.literal = options.literal;
        this.start = options.start;
        this.end = options.end;
        this.right = options.right;
    }
    toJSON() {
        let jsn = super.toJSON();
        // jsn.type = this.type;
        // if (this.content) jsn.content = this.content;
        if (this.literal)
            jsn.literal = this.literal;
        if (this.start)
            jsn.start = this.start;
        if (this.end)
            jsn.end = this.end;
        return jsn;
    }
    get typeChar() {
        return "s";
    }
    positionRelativeTo(target) {
        if (!target)
            return;
        //may run into historical targets that do not have position info
        this.start = this.start || { line: 0, ch: 0 };
        this.end = this.end || { line: 0, ch: 0 };
        if (target.start && target.end) {
            var deltaLine = Math.max(target.start.line - this.start.line, 0);
            var deltaCh = Math.max(target.start.ch - this.start.ch, 0);
            this.start = {
                line: deltaLine + this.start.line,
                ch: deltaCh + this.start.ch,
            };
            this.end = { line: deltaLine + this.end.line, ch: deltaCh + this.end.ch };
        }
    }
    hasChild(name) {
        return this.content.find((item) => item instanceof SyntaxToken === false && item === name);
    }
    getChildren() {
        if (!this.content || this.content.length === 0)
            return [];
        return this.content.filter((item) => !(item instanceof SyntaxToken));
    }
}
exports.NodeyCode = NodeyCode;
(function (NodeyCode) {
    NodeyCode.EMPTY = () => {
        return new NodeyCode({ type: "EMPTY", content: [] });
    };
    NodeyCode.typeChar = "c";
    function fromJSON(dat) {
        return new NodeyCode({
            parent: dat.parent,
            created: dat.start_checkpoint,
            type: dat.type,
            content: dat.content,
            literal: dat.literal,
            start: dat.start,
            end: dat.end,
        });
    }
    NodeyCode.fromJSON = fromJSON;
})(NodeyCode = exports.NodeyCode || (exports.NodeyCode = {}));
/*
 *  does not do anything. For syntax punctuation and new lines only
 */
class SyntaxToken {
    constructor(tokens) {
        if (typeof tokens == "string")
            this.tokens = tokens;
        else
            this.tokens = tokens.tokens;
    }
}
exports.SyntaxToken = SyntaxToken;
(function (SyntaxToken) {
    SyntaxToken.KEY = "syntok";
})(SyntaxToken = exports.SyntaxToken || (exports.SyntaxToken = {}));


/***/ }),

/***/ "./lib/verdant-model/nodey/nodey-markdown.js":
/*!***************************************************!*\
  !*** ./lib/verdant-model/nodey/nodey-markdown.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeyMarkdown = void 0;
const nodey_1 = __webpack_require__(/*! ./nodey */ "./lib/verdant-model/nodey/nodey.js");
/*
 * Markdown nodey
 */
class NodeyMarkdown extends nodey_1.Nodey {
    constructor(options) {
        super(options);
        this.updateState(options);
    }
    updateState(options) {
        super.updateState(options);
        if (options.markdown)
            this.markdown = options.markdown;
    }
    toJSON() {
        let jsn = super.toJSON();
        if (this.markdown)
            jsn.markdown = this.markdown;
        return jsn;
    }
    get typeChar() {
        return "m";
    }
}
exports.NodeyMarkdown = NodeyMarkdown;
(function (NodeyMarkdown) {
    NodeyMarkdown.typeChar = "m";
    function fromJSON(dat) {
        return new NodeyMarkdown({
            parent: dat.parent,
            created: dat.start_checkpoint,
            markdown: dat.markdown,
        });
    }
    NodeyMarkdown.fromJSON = fromJSON;
})(NodeyMarkdown = exports.NodeyMarkdown || (exports.NodeyMarkdown = {}));


/***/ }),

/***/ "./lib/verdant-model/nodey/nodey-notebook.js":
/*!***************************************************!*\
  !*** ./lib/verdant-model/nodey/nodey-notebook.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeyNotebook = void 0;
const nodey_1 = __webpack_require__(/*! ./nodey */ "./lib/verdant-model/nodey/nodey.js");
/*
 * Notebook holds a list of cells
 */
class NodeyNotebook extends nodey_1.Nodey {
    constructor(options) {
        super(options);
        this.cells = [];
        this.updateState(options);
    }
    updateState(options) {
        super.updateState(options);
        if (options.cells && options.cells.length > 0)
            this.cells = options.cells.slice(0);
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { cells: this.cells });
    }
    get typeChar() {
        return "n";
    }
}
exports.NodeyNotebook = NodeyNotebook;
(function (NodeyNotebook) {
    function fromJSON(dat) {
        return new NodeyNotebook({
            created: dat.start_checkpoint,
            cells: dat.cells,
        });
    }
    NodeyNotebook.fromJSON = fromJSON;
})(NodeyNotebook = exports.NodeyNotebook || (exports.NodeyNotebook = {}));


/***/ }),

/***/ "./lib/verdant-model/nodey/nodey-output.js":
/*!*************************************************!*\
  !*** ./lib/verdant-model/nodey/nodey-output.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeyOutput = void 0;
const nodey_1 = __webpack_require__(/*! ./nodey */ "./lib/verdant-model/nodey/nodey.js");
const notebook_1 = __webpack_require__(/*! ../notebook */ "./lib/verdant-model/notebook.js");
/*
 * Output holds raw output
 */
class NodeyOutput extends nodey_1.Nodey {
    constructor(options) {
        super(options);
        this.raw = [];
        this.updateState(options);
    }
    updateState(options) {
        super.updateState(options);
        if (options.raw)
            this.raw = options.raw;
    }
    toJSON() {
        let jsn = super.toJSON();
        jsn.raw = this.raw;
        return jsn;
    }
    get typeChar() {
        return NodeyOutput.typeChar;
    }
}
exports.NodeyOutput = NodeyOutput;
(function (NodeyOutput) {
    NodeyOutput.EMPTY = () => new NodeyOutput({ raw: [] });
    NodeyOutput.typeChar = "o";
    function fromJSON(dat) {
        return new NodeyOutput({
            raw: dat.raw,
            parent: dat.parent,
            created: dat.start_checkpoint,
        });
    }
    NodeyOutput.fromJSON = fromJSON;
    // ref: https://stackoverflow.com/questions/26049303/how-to-compare-two-json-have-the-same-properties-without-order
    function equals(a, b) {
        notebook_1.log("COMPARING", a, b);
        if (a === null || a === undefined || b === null || b === undefined) {
            return a === b;
        }
        if (a === b) {
            return true;
        }
        /*log("TYPE OF A", typeof a, typeof b);
        if (
          typeof a === "object" &&
          typeof b === "object" &&
          a.valueOf() === b.valueOf()
        ) {
          return true;
        }*/
        // if one of them is date, they must had equal valueOf
        if (a instanceof Date) {
            return false;
        }
        if (b instanceof Date) {
            return false;
        }
        // if they are not function or strictly equal, they both need to be Objects
        if (!(a instanceof Object)) {
            return false;
        }
        if (!(b instanceof Object)) {
            return false;
        }
        var p = Object.keys(a);
        return Object.keys(b).every(function (i) {
            return p.indexOf(i) !== -1;
        })
            ? p.every(function (i) {
                return NodeyOutput.equals(a[i], b[i]);
            })
            : false;
    }
    NodeyOutput.equals = equals;
})(NodeyOutput = exports.NodeyOutput || (exports.NodeyOutput = {}));


/***/ }),

/***/ "./lib/verdant-model/nodey/nodey-raw.js":
/*!**********************************************!*\
  !*** ./lib/verdant-model/nodey/nodey-raw.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeyRawCell = void 0;
const nodey_1 = __webpack_require__(/*! ./nodey */ "./lib/verdant-model/nodey/nodey.js");
/*
 * Simple raw cell type (rare, since most cells are code or markdown)
 */
class NodeyRawCell extends nodey_1.Nodey {
    constructor(options) {
        super(options);
        this.updateState(options);
    }
    updateState(options) {
        super.updateState(options);
        if (options.literal)
            this.literal = options.literal;
    }
    toJSON() {
        let jsn = super.toJSON();
        if (this.literal)
            jsn.literal = this.literal;
        return jsn;
    }
    get typeChar() {
        return "r";
    }
}
exports.NodeyRawCell = NodeyRawCell;
(function (NodeyRawCell) {
    function fromJSON(dat) {
        return new NodeyRawCell({
            parent: dat.parent,
            created: dat.start_checkpoint,
            literal: dat.literal,
        });
    }
    NodeyRawCell.fromJSON = fromJSON;
})(NodeyRawCell = exports.NodeyRawCell || (exports.NodeyRawCell = {}));


/***/ }),

/***/ "./lib/verdant-model/nodey/nodey.js":
/*!******************************************!*\
  !*** ./lib/verdant-model/nodey/nodey.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Nodey = void 0;
class Nodey {
    constructor(options) {
        this.id = options.id;
        if (options.created !== undefined)
            this.created = options.created;
        if (options.parent !== undefined)
            this.parent = options.parent + "";
    }
    get name() {
        return this.typeChar + "." + this.id + "." + this.version;
    }
    get artifactName() {
        return this.typeChar + "." + this.id;
    }
    updateState(_) { }
    toJSON() {
        let jsn = {};
        if (this.created)
            jsn["start_checkpoint"] = this.created;
        if (this.parent)
            jsn["parent"] = this.parent;
        return jsn;
    }
}
exports.Nodey = Nodey;


/***/ }),

/***/ "./lib/verdant-model/notebook-events/create-cell.js":
/*!**********************************************************!*\
  !*** ./lib/verdant-model/notebook-events/create-cell.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCell = void 0;
const _1 = __webpack_require__(/*! . */ "./lib/verdant-model/notebook-events/index.js");
const cell_1 = __webpack_require__(/*! ../cell */ "./lib/verdant-model/cell.js");
const notebook_1 = __webpack_require__(/*! ../notebook */ "./lib/verdant-model/notebook.js");
class CreateCell extends _1.NotebookEvent {
    constructor(notebook, cell, cell_index, match) {
        super(notebook);
        this.cell = cell;
        this.cell_index = cell_index;
        this.match = match;
    }
    modelUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            // create the representation of the new cell
            let nodey = yield this.notebook.ast.create.fromCell(this.cell, this.checkpoint);
            let newCell = new cell_1.VerCell(this.notebook, this.cell, nodey.name);
            this.notebook.cells.splice(this.cell_index, 0, newCell);
            // update the notebook nodey
            this.checkpoint = this.history.stage.commitCellAdded(nodey, this.cell_index, this.checkpoint);
            notebook_1.log("CELL CREATED", newCell, this.notebook.cells, this.cell_index);
        });
    }
    endEvent() {
        notebook_1.log("CELL CREATED_END", this.cell, this.notebook.cells, this.cell_index);
    }
}
exports.CreateCell = CreateCell;


/***/ }),

/***/ "./lib/verdant-model/notebook-events/delete-cell.js":
/*!**********************************************************!*\
  !*** ./lib/verdant-model/notebook-events/delete-cell.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteCell = void 0;
const _1 = __webpack_require__(/*! . */ "./lib/verdant-model/notebook-events/index.js");
class DeleteCell extends _1.NotebookEvent {
    constructor(notebook, cell_index) {
        super(notebook);
        this.cell_index = cell_index;
    }
    modelUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            let oldCell = this.notebook.cells.splice(this.cell_index, 1)[0];
            if (oldCell.model)
                this.checkpoint = this.history.stage.commitCellDeleted(oldCell.model, this.checkpoint);
        });
    }
}
exports.DeleteCell = DeleteCell;


/***/ }),

/***/ "./lib/verdant-model/notebook-events/index.js":
/*!****************************************************!*\
  !*** ./lib/verdant-model/notebook-events/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// expose classes for this module
__exportStar(__webpack_require__(/*! ./notebook-event */ "./lib/verdant-model/notebook-events/notebook-event.js"), exports);
__exportStar(__webpack_require__(/*! ./create-cell */ "./lib/verdant-model/notebook-events/create-cell.js"), exports);
__exportStar(__webpack_require__(/*! ./delete-cell */ "./lib/verdant-model/notebook-events/delete-cell.js"), exports);
__exportStar(__webpack_require__(/*! ./load-notebook */ "./lib/verdant-model/notebook-events/load-notebook.js"), exports);
__exportStar(__webpack_require__(/*! ./move-cell */ "./lib/verdant-model/notebook-events/move-cell.js"), exports);
__exportStar(__webpack_require__(/*! ./run-cell */ "./lib/verdant-model/notebook-events/run-cell.js"), exports);
__exportStar(__webpack_require__(/*! ./save-notebook */ "./lib/verdant-model/notebook-events/save-notebook.js"), exports);
__exportStar(__webpack_require__(/*! ./switch-cell-type */ "./lib/verdant-model/notebook-events/switch-cell-type.js"), exports);


/***/ }),

/***/ "./lib/verdant-model/notebook-events/load-notebook.js":
/*!************************************************************!*\
  !*** ./lib/verdant-model/notebook-events/load-notebook.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoadNotebook = void 0;
const _1 = __webpack_require__(/*! . */ "./lib/verdant-model/notebook-events/index.js");
const cells_1 = __webpack_require__(/*! @jupyterlab/cells */ "webpack/sharing/consume/default/@jupyterlab/cells");
const cell_1 = __webpack_require__(/*! ../cell */ "./lib/verdant-model/cell.js");
const notebook_1 = __webpack_require__(/*! ../notebook */ "./lib/verdant-model/notebook.js");
class LoadNotebook extends _1.NotebookEvent {
    constructor(notebook, matchPrior) {
        super(notebook);
        this.matchPrior = matchPrior;
    }
    modelUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            let newNotebook;
            if (this.matchPrior && this.notebook.model) {
                newNotebook = yield this.notebook.ast.hotStartNotebook(this.notebook.model, this.notebook.view.notebook, this.checkpoint);
            }
            else
                newNotebook = yield this.notebook.ast.coldStartNotebook(this.notebook.view.notebook, this.checkpoint);
            // initialize the cells of the notebook
            this.notebook.cells = [];
            this.notebook.view.notebook.widgets.forEach((item, index) => {
                if (item instanceof cells_1.Cell) {
                    let name = newNotebook.cells[index];
                    let cell = new cell_1.VerCell(this.notebook, item, name);
                    this.notebook.cells.push(cell);
                }
            });
            notebook_1.log("cell names", this.notebook.cells, this.checkpoint);
        });
    }
}
exports.LoadNotebook = LoadNotebook;


/***/ }),

/***/ "./lib/verdant-model/notebook-events/move-cell.js":
/*!********************************************************!*\
  !*** ./lib/verdant-model/notebook-events/move-cell.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveCell = void 0;
const _1 = __webpack_require__(/*! . */ "./lib/verdant-model/notebook-events/index.js");
class MoveCell extends _1.NotebookEvent {
    constructor(notebook, cell, oldPos, newPos) {
        super(notebook);
        this.cell = cell;
        this.oldPos = oldPos;
        this.newPos = newPos;
    }
    modelUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            this.notebook.cells.splice(this.oldPos, 1);
            this.notebook.cells.splice(this.newPos, 0, this.cell);
            // make sure cell is moved in the model
            if (this.cell.model)
                this.checkpoint = this.history.stage.commitCellMoved(this.cell.model, this.newPos, this.checkpoint);
        });
    }
}
exports.MoveCell = MoveCell;


/***/ }),

/***/ "./lib/verdant-model/notebook-events/notebook-event.js":
/*!*************************************************************!*\
  !*** ./lib/verdant-model/notebook-events/notebook-event.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotebookEvent = void 0;
// 1. event begins
// 2. trigger update to history model
// 4. event ends
class NotebookEvent {
    constructor(notebook) {
        this.notebook = notebook;
        this.history = notebook.history;
    }
    runEvent() {
        let ev = new Promise((accept) => __awaiter(this, void 0, void 0, function* () {
            // create a checkpoint to record this event
            this.checkpoint = this.history.checkpoints.generateCheckpoint();
            // evaluate what updates are needed to the model caused by this event
            yield this.modelUpdate();
            // any wrap-up steps specific to this event
            this.endEvent();
            // finish event and return
            accept(this.checkpoint);
        }));
        return ev;
    }
    modelUpdate() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    endEvent() { }
}
exports.NotebookEvent = NotebookEvent;


/***/ }),

/***/ "./lib/verdant-model/notebook-events/run-cell.js":
/*!*******************************************************!*\
  !*** ./lib/verdant-model/notebook-events/run-cell.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RunCell = void 0;
const _1 = __webpack_require__(/*! . */ "./lib/verdant-model/notebook-events/index.js");
class RunCell extends _1.NotebookEvent {
    constructor(notebook, nodey) {
        super(notebook);
        this.nodey = nodey;
    }
    modelUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.nodey) {
                // commit the notebook if the cell has changed
                this.history.stage.markAsPossiblyEdited(this.nodey, this.checkpoint);
                this.checkpoint = yield this.history.stage.commit(this.checkpoint);
            }
        });
    }
}
exports.RunCell = RunCell;


/***/ }),

/***/ "./lib/verdant-model/notebook-events/save-notebook.js":
/*!************************************************************!*\
  !*** ./lib/verdant-model/notebook-events/save-notebook.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SaveNotebook = void 0;
const _1 = __webpack_require__(/*! . */ "./lib/verdant-model/notebook-events/index.js");
class SaveNotebook extends _1.NotebookEvent {
    modelUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            // look through cells for potential unsaved changes
            this.notebook.cells.forEach((cell) => {
                if (cell.model) {
                    this.history.stage.markAsPossiblyEdited(cell.model, this.checkpoint);
                }
            });
            // !!! HACK: avoiding saving duplicate images assuming if it hasn't been
            // run it can't be a new output
            this.checkpoint = yield this.history.stage.commit(this.checkpoint, {
                ignore_output: true,
            });
        });
    }
    endEvent() {
        this.notebook.saveToFile();
    }
}
exports.SaveNotebook = SaveNotebook;


/***/ }),

/***/ "./lib/verdant-model/notebook-events/switch-cell-type.js":
/*!***************************************************************!*\
  !*** ./lib/verdant-model/notebook-events/switch-cell-type.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwitchCellType = void 0;
const _1 = __webpack_require__(/*! . */ "./lib/verdant-model/notebook-events/index.js");
class SwitchCellType extends _1.NotebookEvent {
    constructor(notebook, cell, cell_index) {
        super(notebook);
        this.cell = cell;
        this.cell_index = cell_index;
    }
    modelUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            // this is going to create and store the new nodey
            let newNodey = yield this.notebook.ast.create.fromCell(this.cell, this.checkpoint);
            let verCell = this.notebook.cells[this.cell_index];
            // make pointer in history from old type to new type
            let oldNodey = verCell === null || verCell === void 0 ? void 0 : verCell.model;
            this.history.store.linkBackHistories(newNodey, oldNodey);
            if (newNodey.name)
                verCell === null || verCell === void 0 ? void 0 : verCell.setModel(newNodey.name);
            verCell.view = this.cell;
            // make sure cell is added to notebook model
            this.checkpoint = this.history.stage.commitCellTypeChanged(oldNodey, newNodey, this.checkpoint);
        });
    }
}
exports.SwitchCellType = SwitchCellType;


/***/ }),

/***/ "./lib/verdant-model/notebook.js":
/*!***************************************!*\
  !*** ./lib/verdant-model/notebook.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.error = exports.log = exports.VerNotebook = void 0;
const coreutils_1 = __webpack_require__(/*! @jupyterlab/coreutils */ "webpack/sharing/consume/default/@jupyterlab/coreutils");
const coreutils_2 = __webpack_require__(/*! @lumino/coreutils */ "webpack/sharing/consume/default/@lumino/coreutils");
const notebook_listen_1 = __webpack_require__(/*! ./jupyter-hooks/notebook-listen */ "./lib/verdant-model/jupyter-hooks/notebook-listen.js");
const notebook_events_1 = __webpack_require__(/*! ./notebook-events */ "./lib/verdant-model/notebook-events/index.js");
const sc_client_1 = __webpack_require__(/*! ./sc/sc-client */ "./lib/verdant-model/sc/sc-client.js");
/*
 * Notebook holds a list of cells
 */
class VerNotebook {
    constructor(history, ast, notebookPanel) {
        this.eventQueue = [];
        this.modelMapping = new Map();
        this._ready = new coreutils_2.PromiseDelegate();
        this.history = history;
        this.ast = ast;
        this.view = new notebook_listen_1.NotebookListen(notebookPanel, this);
        this.cells = [];
        this.init();
    }
    get ready() {
        return this._ready.promise;
    }
    setPanel(panel) {
        // update if the active panel changes
        this.view.setPanel(panel);
        // update cells
        this.init();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.view.ready;
            //load in prior data if exists
            var prior = yield this.history.init(this);
            // load in the notebook model from data
            let loadEvent = new notebook_events_1.LoadNotebook(this, prior);
            yield this.handleNotebookEvent(loadEvent);
            // finish initialization
            log("Loaded Notebook", this.view.notebook, this.model);
            const tempMapping = new Map();
            for (var i = 0; i < this.cells.length; ++i) {
                var cell = this.cells[i];
                var name = cell.model.name;
                if (cell.view && cell.view.model) {
                    var info = JSON.stringify(cell.view.model.toJSON());
                    console.log("LOADED_MODELS:", name, info);
                    var key = name.substring(0, name.lastIndexOf("."));
                    var id = cell.view.model.id;
                    var state = { id: id, index: i, msg: info };
                    tempMapping.set(key, state);
                }
            }
            this.modelMapping = tempMapping;
            this.dump();
            this._ready.resolve(undefined);
            // update views to show notebook is loaded
            this.view.focusCell();
        });
    }
    handleNotebookEvent(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Promise.all(this.eventQueue).then(() => (this.eventQueue = []));
                let ev = event.runEvent();
                this.eventQueue.push(ev);
                return ev;
            }
            catch (error) {
                console.error("Verdant: Error on event ", event, error);
            }
        });
    }
    get model() {
        return this.history.store.currentNotebook;
    }
    get path() {
        var _a, _b;
        return (_b = (_a = this.view.panel) === null || _a === void 0 ? void 0 : _a.sessionContext) === null || _b === void 0 ? void 0 : _b.path;
    }
    get name() {
        if (this.path)
            return coreutils_1.PathExt.basename(this.path);
    }
    get metadata() {
        return this.view.metadata;
    }
    saveToFile() {
        // save the data to file
        this.history.store.writeToFile();
    }
    getCell(cell) {
        return this.cells.find((item) => {
            if (item.view && item.view.model)
                return item.view.model.id === cell.id;
        });
    }
    getCellByNode(cell) {
        return this.cells.find((item) => { var _a, _b; return (cell === null || cell === void 0 ? void 0 : cell.name) === ((_a = item === null || item === void 0 ? void 0 : item.model) === null || _a === void 0 ? void 0 : _a.name) && ((_b = item === null || item === void 0 ? void 0 : item.model) === null || _b === void 0 ? void 0 : _b.name) !== undefined; });
    }
    focusCell(cell) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(this.eventQueue).then(() => (this.eventQueue = []));
            let ev = new Promise((accept) => {
                let verCell = this.getCell(cell.model);
                if (verCell) {
                    this.view.activeCell = cell;
                }
                else
                    this.view.activeCell = null;
                accept(verCell);
            });
            this.eventQueue.push(ev);
            return ev;
        });
    }
    dump() {
        return this.history.dump();
    }
}
exports.VerNotebook = VerNotebook;
function log(...msg) {
    sc_client_1.logit(...msg);
}
exports.log = log;
function error(...msg) {
    console.error("VERDANT ERROR: ", ...msg);
}
exports.error = error;


/***/ }),

/***/ "./lib/verdant-model/sampler/cell-map.js":
/*!***********************************************!*\
  !*** ./lib/verdant-model/sampler/cell-map.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CellMap = void 0;
const checkpoint_1 = __webpack_require__(/*! ../checkpoint */ "./lib/verdant-model/checkpoint/index.js");
var CellMap;
(function (CellMap) {
    function addChange(cell, change) {
        if (cell.changes.indexOf(change) < 0)
            cell.changes.push(change);
        return cell;
    }
    function build(checkpointList, history) {
        let cellMap = [];
        if (!Array.isArray(checkpointList))
            checkpointList = [checkpointList];
        checkpointList.forEach((checkpoint) => {
            let notebook = history.store.getNotebook(checkpoint.notebook);
            let targets = checkpoint.targetCells;
            if (notebook) {
                notebook.cells.forEach((name, index) => {
                    // initialize a cell with no changes
                    if (!cellMap[index])
                        cellMap[index] = { name, changes: [] };
                    // see if anything happened to this cell at this checkpoint
                    let match = targets.find((item) => item.cell === name);
                    if (match) {
                        let change = match.changeType;
                        // add change to cell's list of changes
                        cellMap[index] = addChange(cellMap[index], change);
                    }
                });
                // for deleted cells
                targets.forEach((t) => {
                    if (t.changeType === checkpoint_1.ChangeType.REMOVED && t.index) {
                        // if already in the map, just replace, if not splice in
                        if (cellMap[t.index] && cellMap[t.index].name === t.cell)
                            cellMap[t.index].changes.push(checkpoint_1.ChangeType.REMOVED);
                        else
                            cellMap.splice(t.index, 0, {
                                name: t.cell,
                                changes: [checkpoint_1.ChangeType.REMOVED],
                            });
                    }
                });
            }
        });
        return cellMap;
    }
    CellMap.build = build;
})(CellMap = exports.CellMap || (exports.CellMap = {}));


/***/ }),

/***/ "./lib/verdant-model/sampler/diff.js":
/*!*******************************************!*\
  !*** ./lib/verdant-model/sampler/diff.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Diff = exports.DIFF_TYPE = void 0;
const JSDiff = __importStar(__webpack_require__(/*! diff */ "webpack/sharing/consume/default/diff/diff"));
const nodey_1 = __webpack_require__(/*! ../nodey */ "./lib/verdant-model/nodey/index.js");
const _1 = __webpack_require__(/*! . */ "./lib/verdant-model/sampler/index.js");
const checkpoint_1 = __webpack_require__(/*! ../checkpoint */ "./lib/verdant-model/checkpoint/index.js");
var DIFF_TYPE;
(function (DIFF_TYPE) {
    DIFF_TYPE[DIFF_TYPE["NO_DIFF"] = 0] = "NO_DIFF";
    DIFF_TYPE[DIFF_TYPE["CHANGE_DIFF"] = 1] = "CHANGE_DIFF";
    DIFF_TYPE[DIFF_TYPE["PRESENT_DIFF"] = 2] = "PRESENT_DIFF";
})(DIFF_TYPE = exports.DIFF_TYPE || (exports.DIFF_TYPE = {}));
const CHANGE_SAME_CLASS = "v-Verdant-sampler-code-same";
const CHANGE_ADDED_CLASS = "v-Verdant-sampler-code-added";
const CHANGE_REMOVED_CLASS = "v-Verdant-sampler-code-removed";
const MARKDOWN_LINEBREAK = "v-Verdant-sampler-markdown-linebreak";
const MAX_WORD_DIFFS = 4;
class Diff {
    constructor(sampler) {
        this.sampler = sampler;
        this.history = sampler.history;
        this.renderBaby = sampler.renderBaby;
    }
    renderNotebook(notebook_ver, diffKind) {
        return __awaiter(this, void 0, void 0, function* () {
            /*
             * First set up the basics that we'll need regardless of what kind of
             * diff we're doing
             */
            let focusedNotebook = this.history.store.getNotebook(notebook_ver);
            let relativeToNotebook = notebook_ver;
            if (relativeToNotebook < 0)
                relativeToNotebook = undefined;
            let cellMap = [];
            /*
             * Based on the diff kind, build a list of cells with changes
             */
            if (diffKind === DIFF_TYPE.CHANGE_DIFF) {
                let checkpoints = this.history.checkpoints.getForNotebook(focusedNotebook);
                cellMap = _1.CellMap.build(checkpoints, this.history);
            }
            else if (diffKind === DIFF_TYPE.PRESENT_DIFF) {
                let currentNotebook = this.history.store.currentNotebook;
                relativeToNotebook = currentNotebook === null || currentNotebook === void 0 ? void 0 : currentNotebook.version;
                cellMap = this.zipNotebooks(focusedNotebook, currentNotebook);
            }
            else if (diffKind === DIFF_TYPE.NO_DIFF) {
                cellMap = focusedNotebook.cells.map((name) => {
                    return { name, changes: [] };
                });
            }
            /*
             * For each cell, render line-level diff notation
             */
            return Promise.all(cellMap.map((value) => __awaiter(this, void 0, void 0, function* () {
                const name = value.name;
                const status = value.changes;
                let cell = this.history.store.get(name);
                let diff = diffKind;
                if (status.includes(checkpoint_1.ChangeType.REMOVED))
                    diff = DIFF_TYPE.NO_DIFF;
                const sample = yield this.renderCell(cell, diff, relativeToNotebook);
                return { sample, status, name };
            })));
        });
    }
    renderCell(nodey, diffKind = DIFF_TYPE.NO_DIFF, relativeToNotebook) {
        return __awaiter(this, void 0, void 0, function* () {
            const [sample, elem] = this.sampler.makeSampleDivs(nodey);
            if (nodey instanceof nodey_1.NodeyCode) {
                this.diffCode(nodey, elem, diffKind, relativeToNotebook);
            }
            else if (nodey instanceof nodey_1.NodeyMarkdown) {
                yield this.diffMarkdown(nodey, elem, diffKind, relativeToNotebook);
            }
            else if (nodey instanceof nodey_1.NodeyRawCell) {
                // raw can be treated the same as code
                this.diffCode(nodey, elem, diffKind, relativeToNotebook);
            }
            else if (nodey instanceof nodey_1.NodeyOutput) {
                yield this.diffOutput(nodey, elem, diffKind, relativeToNotebook);
            }
            return sample;
        });
    }
    getOldNewText(nodey, diffKind, relativeToNotebook) {
        // first get text of the current nodey
        let newText = this.sampler.nodeToText(nodey);
        // now get text of prior nodey
        let [priorNodey, fixedDiffKind] = this.getPrior(nodey, diffKind, relativeToNotebook);
        let oldText = ""; // default to no string if no prior nodey
        // otherwise make oldText the value of priorNodey
        if (priorNodey)
            oldText = this.sampler.nodeToText(priorNodey);
        return [newText, oldText, fixedDiffKind];
    }
    getPrior(nodey, diffKind, relativeToNotebook) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        // now get text of prior nodey
        let nodeyHistory = (_a = this.history.store) === null || _a === void 0 ? void 0 : _a.getHistoryOf(nodey);
        let priorNodey = undefined;
        let cellParent = undefined;
        if (nodey instanceof nodey_1.NodeyOutput) {
            cellParent = (_b = this.history.store) === null || _b === void 0 ? void 0 : _b.get(nodey.parent);
        }
        if (diffKind === DIFF_TYPE.CHANGE_DIFF) {
            priorNodey = nodeyHistory === null || nodeyHistory === void 0 ? void 0 : nodeyHistory.getVersion(nodey.version - 1);
            /*
             * If relative to a checkpoint, check that changes to this nodey occurs
             * no earlier than the checkpoint immediately previous so that we
             * don't get irrelevant old changes showing up in diffs (ghost book only)
             */
            if (relativeToNotebook !== undefined) {
                let notebook = (_c = this.history) === null || _c === void 0 ? void 0 : _c.store.getNotebookOf(nodey);
                if (!notebook || (notebook === null || notebook === void 0 ? void 0 : notebook.version) < relativeToNotebook) {
                    priorNodey = undefined;
                    diffKind = DIFF_TYPE.NO_DIFF;
                }
                else {
                    if (!priorNodey && cellParent) {
                        let rel = (_d = this.history) === null || _d === void 0 ? void 0 : _d.store.getNotebook(relativeToNotebook);
                        priorNodey = (_f = (_e = this.history) === null || _e === void 0 ? void 0 : _e.store) === null || _f === void 0 ? void 0 : _f.getOutputForNotebook(cellParent, rel);
                    }
                }
            }
        }
        else if (diffKind === DIFF_TYPE.PRESENT_DIFF) {
            if (cellParent) {
                // output
                let curr = (_g = this.history) === null || _g === void 0 ? void 0 : _g.store.currentNotebook;
                let latestParent = (_h = this.history.store.getHistoryOf(cellParent)) === null || _h === void 0 ? void 0 : _h.latest;
                priorNodey = (_k = (_j = this.history) === null || _j === void 0 ? void 0 : _j.store) === null || _k === void 0 ? void 0 : _k.getOutputForNotebook(latestParent, curr);
            }
            else
                priorNodey = nodeyHistory === null || nodeyHistory === void 0 ? void 0 : nodeyHistory.latest;
        }
        return [priorNodey, diffKind];
    }
    diffCode(nodey, elem, diffKind = DIFF_TYPE.NO_DIFF, relativeToNotebook) {
        let [newText, oldText, fixedDiffKind] = this.getOldNewText(nodey, diffKind, relativeToNotebook);
        diffKind = fixedDiffKind;
        // If no diff necessary, use plain code
        if (diffKind === DIFF_TYPE.NO_DIFF) {
            return this.sampler.plainCode(elem, newText);
        }
        if (diffKind === DIFF_TYPE.PRESENT_DIFF) {
            // swap old and new, since "old" is actually the present notebook
            return this.diffText(newText, oldText, elem);
        }
        return this.diffText(oldText, newText, elem);
    }
    diffText(oldText, newText, elem) {
        // Split new text into lines
        let newLines = (newText || "").split("\n");
        // Split old text into lines
        let oldLines = (oldText || "").split("\n");
        // Loop over lines and append diffs to elem
        const maxLength = Math.max(newLines.length, oldLines.length);
        for (let i = 0; i < maxLength; i++) {
            let newLine = newLines[i] || "";
            let oldLine = oldLines[i] || "";
            elem.appendChild(this.diffLine(oldLine, newLine));
        }
        return elem;
    }
    diffLine(oldText, newText) {
        /* Diffs a single line. */
        let line = document.createElement("div");
        let innerHTML = "";
        let diff = JSDiff.diffWords(oldText, newText);
        if (diff.length > MAX_WORD_DIFFS)
            diff = JSDiff.diffLines(oldText, newText);
        diff.forEach((part) => {
            let partDiv = document.createElement("span");
            //log("DIFF", part);
            partDiv.textContent = part.value;
            if (part.added) {
                partDiv.classList.add(CHANGE_ADDED_CLASS);
                innerHTML += partDiv.outerHTML;
            }
            else if (part.removed) {
                partDiv.classList.add(CHANGE_REMOVED_CLASS);
                innerHTML += partDiv.outerHTML;
            }
            else {
                innerHTML += part.value;
            }
        });
        line.innerHTML = innerHTML;
        return line;
    }
    diffMarkdown(nodey, elem, diffKind = DIFF_TYPE.NO_DIFF, relativeToNotebook) {
        return __awaiter(this, void 0, void 0, function* () {
            let [newText, oldText, fixedDiffKind] = this.getOldNewText(nodey, diffKind, relativeToNotebook);
            diffKind = fixedDiffKind;
            if (diffKind === DIFF_TYPE.PRESENT_DIFF) {
                // swap old and new, since "old" is actually the present notebook
                let temp = oldText;
                oldText = newText;
                newText = temp;
            }
            // If no diff necessary, use plain markdown
            if (diffKind === DIFF_TYPE.NO_DIFF)
                yield this.renderBaby.renderMarkdown(elem, newText);
            else {
                let diff = JSDiff.diffWords(oldText, newText);
                if (diff.length > MAX_WORD_DIFFS) {
                    diff = JSDiff.diffLines(oldText, newText, { newlineIsToken: true });
                }
                const divs = diff.map((part) => __awaiter(this, void 0, void 0, function* () {
                    let partDiv;
                    if (part.value === "\n") {
                        partDiv = document.createElement("br");
                        partDiv.classList.add(MARKDOWN_LINEBREAK);
                    }
                    else {
                        partDiv = document.createElement("span");
                        yield this.renderBaby.renderMarkdown(partDiv, part.value);
                        partDiv.classList.add(CHANGE_SAME_CLASS);
                        if (part.added) {
                            partDiv.classList.add(CHANGE_ADDED_CLASS);
                        }
                        else if (part.removed) {
                            partDiv.classList.add(CHANGE_REMOVED_CLASS);
                        }
                    }
                    return partDiv;
                }));
                yield Promise.all(divs).then((elems) => elems.forEach((e) => elem.appendChild(e)));
            }
            return elem;
        });
    }
    diffOutput(nodey, elem, diffKind, relativeToNotebook) {
        return __awaiter(this, void 0, void 0, function* () {
            let [priorNodey, fixedDiffType] = this.getPrior(nodey, diffKind, relativeToNotebook);
            if (diffKind === DIFF_TYPE.PRESENT_DIFF) {
                // swap old and new, since "old" is actually the present notebook
                let temp = priorNodey;
                priorNodey = nodey;
                nodey = temp;
            }
            if (fixedDiffType === DIFF_TYPE.NO_DIFF || (priorNodey === null || priorNodey === void 0 ? void 0 : priorNodey.name) === (nodey === null || nodey === void 0 ? void 0 : nodey.name))
                yield this.sampler.renderOutput(nodey, elem);
            else {
                // just show side by side
                let old = document.createElement("div");
                old.classList.add("v-Verdant-output-sideBySide");
                old.classList.add(CHANGE_REMOVED_CLASS);
                if (priorNodey)
                    yield this.sampler.renderOutput(priorNodey, old);
                elem.appendChild(old);
                let newOut = document.createElement("div");
                newOut.classList.add("v-Verdant-output-sideBySide");
                newOut.classList.add(CHANGE_ADDED_CLASS);
                yield this.sampler.renderOutput(nodey, newOut);
                elem.appendChild(newOut);
            }
            return elem;
        });
    }
    zipNotebooks(A, B) {
        let cellMap = [];
        let cellsInA = A.cells.map((name) => {
            var _a;
            return (_a = this.history.store.get(name)) === null || _a === void 0 ? void 0 : _a.artifactName;
        });
        let cellsInB = B.cells.map((name) => {
            var _a;
            return (_a = this.history.store.get(name)) === null || _a === void 0 ? void 0 : _a.artifactName;
        });
        let diff = JSDiff.diffArrays(cellsInA, cellsInB);
        let indexA = 0;
        let indexB = 0;
        diff.map((part) => {
            if (part.added) {
                // these cells are only in B
                part.value.forEach(() => {
                    let cellB = B.cells[indexB];
                    cellMap.push({ name: cellB, changes: [checkpoint_1.ChangeType.ADDED] });
                    indexB++;
                });
            }
            else if (part.removed) {
                // these cells are only in A
                part.value.forEach(() => {
                    let cellA = A.cells[indexA];
                    cellMap.push({ name: cellA, changes: [checkpoint_1.ChangeType.REMOVED] });
                    indexA++;
                });
            }
            else {
                // these cells are in both notebooks
                part.value.forEach(() => {
                    let cellA = A.cells[indexA];
                    let cellB = B.cells[indexB];
                    let status = cellA === cellB ? checkpoint_1.ChangeType.NONE : checkpoint_1.ChangeType.CHANGED;
                    // Check has output changed?
                    if (status === checkpoint_1.ChangeType.NONE) {
                        // assuming they're the same version, is this cell code
                        let nodey = this.history.store.get(cellA);
                        if (nodey instanceof nodey_1.NodeyCode) {
                            let outA = this.history.store.getOutputForNotebook(nodey, A);
                            let outB = this.history.store.getOutputForNotebook(nodey, B);
                            if (outA && outB && outA !== outB) {
                                status = checkpoint_1.ChangeType.OUTPUT_CHANGED;
                            }
                        }
                    }
                    cellMap.push({ name: cellA, changes: [status] });
                    indexA++;
                    indexB++;
                });
            }
        });
        //console.log("CURRENT DIFF CELL MAP", cellMap);
        return cellMap;
    }
}
exports.Diff = Diff;


/***/ }),

/***/ "./lib/verdant-model/sampler/index.js":
/*!********************************************!*\
  !*** ./lib/verdant-model/sampler/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./sampler */ "./lib/verdant-model/sampler/sampler.js"), exports);
__exportStar(__webpack_require__(/*! ./namer */ "./lib/verdant-model/sampler/namer.js"), exports);
__exportStar(__webpack_require__(/*! ./cell-map */ "./lib/verdant-model/sampler/cell-map.js"), exports);
__exportStar(__webpack_require__(/*! ./diff */ "./lib/verdant-model/sampler/diff.js"), exports);


/***/ }),

/***/ "./lib/verdant-model/sampler/namer.js":
/*!********************************************!*\
  !*** ./lib/verdant-model/sampler/namer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Namer = void 0;
const nodey_1 = __webpack_require__(/*! ../nodey */ "./lib/verdant-model/nodey/index.js");
const checkpoint_1 = __webpack_require__(/*! ../checkpoint */ "./lib/verdant-model/checkpoint/index.js");
/*
 * Remember that versions and ids are 1 indexed for display, but 0 indexed in storage
 */
var Namer;
(function (Namer) {
    function getVersionTitle(n) {
        if (!n || n.id === undefined || n.version === undefined)
            return "???";
        //TODO
        let kind = n.typeChar.toUpperCase();
        return `${kind}${n.id + 1}.r${n.version + 1}`;
    }
    Namer.getVersionTitle = getVersionTitle;
    function getCellTitle(n) {
        if (!n)
            return "???";
        let kind;
        if (n instanceof nodey_1.NodeyMarkdown)
            kind = "Markdown";
        else if (n instanceof nodey_1.NodeyCodeCell)
            kind = "Code Cell";
        else if (n instanceof nodey_1.NodeyRawCell)
            kind = "Raw Cell";
        return `${kind} ${n.id === undefined ? "???" : n.id + 1}`;
    }
    Namer.getCellTitle = getCellTitle;
    function getCellShortTitle(n) {
        if (!n)
            return "???";
        return `${n.typeChar.toUpperCase()}${n.id === undefined ? "???" : n.id + 1}`;
    }
    Namer.getCellShortTitle = getCellShortTitle;
    function getCellVersionTitle(n) {
        if (!n)
            return "???";
        return `${n.typeChar.toUpperCase()}${n.id === undefined ? "???" : n.id + 1}.r${n.version === undefined ? "???" : n.version + 1}`;
    }
    Namer.getCellVersionTitle = getCellVersionTitle;
    function getOutputTitle(n, history) {
        if (!n || !history)
            return "???";
        let cell = history.store.get(n.parent);
        if (!cell)
            return "???";
        return `${Namer.getCellTitle(cell)} Output`;
    }
    Namer.getOutputTitle = getOutputTitle;
    function getOutputVersionTitle(n, history) {
        if (!n || !history)
            return "???";
        let cell = history.store.get(n.parent);
        if (!cell)
            return "???";
        return `${Namer.getCellVersionTitle(cell)}.o${n.version === undefined ? "???" : n.version + 1}`;
    }
    Namer.getOutputVersionTitle = getOutputVersionTitle;
    function getCodeSnippetTitle(n) {
        if (n)
            return `${n.type.toUpperCase} ${n.version === undefined ? "???" : n.version + 1}`;
        return "???";
    }
    Namer.getCodeSnippetTitle = getCodeSnippetTitle;
    function getNotebookTitle(n) {
        return `Notebook v${n ? (n.version === undefined ? "???" : n.version + 1) : "?"}`;
    }
    Namer.getNotebookTitle = getNotebookTitle;
    function getNotebookVersionLabel(n) {
        return `v${n ? (n.version === undefined ? "???" : n.version + 1) : "?"}`;
    }
    Namer.getNotebookVersionLabel = getNotebookVersionLabel;
    function getVersionNumberLabel(n) {
        if (n !== undefined)
            return `${n + 1}`;
        return "???";
    }
    Namer.getVersionNumberLabel = getVersionNumberLabel;
    function describeChange(nodey, changes) {
        if (changes[0] === checkpoint_1.ChangeType.OUTPUT_CHANGED)
            return `${Namer.getCellTitle(nodey)}'s ${changes.join(", ")}`;
        return `${Namer.getCellTitle(nodey)} was ${changes.join(", ")}`;
    }
    Namer.describeChange = describeChange;
})(Namer = exports.Namer || (exports.Namer = {}));


/***/ }),

/***/ "./lib/verdant-model/sampler/sampler.js":
/*!**********************************************!*\
  !*** ./lib/verdant-model/sampler/sampler.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sampler = void 0;
const nodey_1 = __webpack_require__(/*! ../nodey */ "./lib/verdant-model/nodey/index.js");
const target_1 = __webpack_require__(/*! ./target */ "./lib/verdant-model/sampler/target.js");
const search_1 = __webpack_require__(/*! ./search */ "./lib/verdant-model/sampler/search.js");
const diff_1 = __webpack_require__(/*! ./diff */ "./lib/verdant-model/sampler/diff.js");
const INSPECT_VERSION = "v-VerdantPanel-sampler-version";
const INSPECT_VERSION_CONTENT = "v-VerdantPanel-sampler-version-content";
class Sampler {
    constructor(historyModel, renderBaby) {
        this.history = historyModel;
        this.renderBaby = renderBaby;
        this.target = new target_1.Target(historyModel);
        this.search = new search_1.Search(this);
        this.diff = new diff_1.Diff(this);
    }
    sampleNode(nodey, textFocus) {
        // goal get the first line of the node
        if (nodey instanceof nodey_1.NodeyMarkdown) {
            if (!nodey.markdown)
                return ["", 0];
            let lines = nodey.markdown.split("\n");
            if (textFocus) {
                let index = -1;
                let focusLine = lines.find((ln) => {
                    let i = ln
                        .toLowerCase()
                        .indexOf(textFocus.toLowerCase().split(" ")[0]);
                    if (i > -1)
                        index = i;
                    return i > -1;
                }) || "";
                return [focusLine, index];
            }
            else
                return [lines[0], 0];
        }
        else {
            let nodeyCode = nodey;
            if (textFocus) {
                let index = -1;
                let lines = this.nodeToText(nodeyCode).toLowerCase().split("\n");
                let focusLine = lines.find((ln) => {
                    let i = ln.toLowerCase().indexOf(textFocus.split(" ")[0]);
                    if (i > -1)
                        index = i;
                    return i > -1;
                }) || "";
                return [focusLine, index];
            }
            else {
                let lineNum = 0;
                if (nodeyCode.start)
                    lineNum = nodeyCode.start.line;
                let line = "";
                return [this.getLineContent(lineNum, line, nodeyCode), 0];
            }
        }
    }
    getLineContent(lineNum, line, nodeyCode) {
        if (nodeyCode.literal) {
            line += nodeyCode.literal.split("\n")[0];
        }
        else if (nodeyCode.content) {
            nodeyCode.content.forEach((name) => {
                if (name instanceof nodey_1.SyntaxToken) {
                    line += name.tokens;
                }
                else {
                    var child = this.history.store.get(name);
                    if (child.start && child.start.line === lineNum) {
                        line = this.getLineContent(lineNum, line, child);
                    }
                    else {
                        line = this.getLineContent(lineNum, line, child);
                        let ls = line.split("\n");
                        if (ls.length > 1)
                            return ls[0];
                    }
                }
            });
        }
        return line;
    }
    nodeToText(nodey) {
        if (nodey instanceof nodey_1.NodeyCode)
            return this.codeToText(nodey);
        else if (nodey instanceof nodey_1.NodeyMarkdown)
            return nodey.markdown || "";
        else if (nodey instanceof nodey_1.NodeyRawCell)
            return nodey.literal;
        else if (nodey instanceof nodey_1.NodeyOutput)
            return this.outputToText(nodey);
        return "";
    }
    codeToText(nodey) {
        let literal = nodey.literal || "";
        if (nodey.content) {
            nodey.content.forEach((name) => {
                if (name instanceof nodey_1.SyntaxToken) {
                    literal += name.tokens;
                }
                else {
                    let child = this.history.store.get(name);
                    literal += this.codeToText(child);
                }
            });
        }
        return literal;
    }
    outputToText(nodey) {
        return nodey.raw
            .map((out) => this.renderBaby.plaintextOutput(out) || "")
            .join();
    }
    renderArtifactCell(nodey, elem) {
        return __awaiter(this, void 0, void 0, function* () {
            if (nodey instanceof nodey_1.NodeyCode) {
                this.plainCode(elem, nodey.literal);
            }
            else if (nodey instanceof nodey_1.NodeyOutput) {
                yield this.renderOutput(nodey, elem);
            }
            else if (nodey instanceof nodey_1.NodeyMarkdown) {
                yield this.renderBaby.renderMarkdown(elem, nodey.markdown);
            }
            else if (nodey instanceof nodey_1.NodeyRawCell) {
                this.plainCode(elem, nodey.literal);
            }
            return elem;
        });
    }
    // Methods for rendering code cells
    plainCode(elem, newText) {
        /* Inserts code data to elem */
        // Split new text into lines
        newText === null || newText === void 0 ? void 0 : newText.split("\n").forEach((line) => {
            // Append a div with line contents to elem
            let div = document.createElement("div");
            div.innerHTML = line;
            elem.appendChild(div);
        });
        return elem;
    }
    // Methods for rendering output cells
    renderOutput(nodey, elem) {
        return __awaiter(this, void 0, void 0, function* () {
            let widgetList = yield this.renderBaby.renderOutput(nodey);
            widgetList.forEach((widget) => {
                elem.appendChild(widget.node);
            });
            return elem;
        });
    }
    makeSampleDivs(nodey) {
        let sample = document.createElement("div");
        sample.classList.add(INSPECT_VERSION);
        let content = document.createElement("div");
        content.classList.add(INSPECT_VERSION_CONTENT);
        sample.appendChild(content);
        // check we have valid input
        if (nodey && history) {
            if (nodey.typeChar === "c") {
                content.classList.add("code");
                sample.classList.add("code");
            }
            else if (nodey.typeChar === "m") {
                content.classList.add("markdown");
                content.classList.add("jp-RenderedHTMLCommon");
            }
            else {
                content.classList.add("output");
            }
        }
        return [sample, content];
    }
}
exports.Sampler = Sampler;


/***/ }),

/***/ "./lib/verdant-model/sampler/search.js":
/*!*********************************************!*\
  !*** ./lib/verdant-model/sampler/search.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Search = void 0;
const SEARCH_FILTER_RESULTS = "v-VerdantPanel-sample-searchResult";
class Search {
    constructor(sampler) {
        this.sampler = sampler;
    }
    renderSearchCell(nodey, query) {
        return __awaiter(this, void 0, void 0, function* () {
            let [sample, elem] = this.sampler.makeSampleDivs(nodey);
            yield this.sampler.renderArtifactCell(nodey, elem);
            if (query) {
                elem = this.highlightText(query, elem);
            }
            return sample;
        });
    }
    // Helper method for search cells
    highlightText(textFocus, elem) {
        let words = textFocus.split(" ");
        let elemHTML = elem.outerHTML;
        words.forEach((w) => {
            elemHTML = this.highlightWord(w, elemHTML);
        });
        elem.outerHTML = elemHTML;
        return elem;
    }
    highlightWord(textFocus, text) {
        /* Highlight text in an HTML element */
        let textFocus_safe = this.escapeRegex(textFocus);
        let word = new RegExp(textFocus_safe, "i");
        let regex = new RegExp(">[^<]*" + textFocus_safe + "[^>]*<", "gi");
        //console.log("TEST", regex.exec(text));
        let match;
        let newText = text;
        let step = 0;
        while ((match = regex.exec(text)) != null) {
            let index = match.index + step;
            //console.log("MATCH", match, index);
            let substring = match[0].slice(1, match[0].length - 1);
            substring = substring.replace(word, `<span class="${SEARCH_FILTER_RESULTS}">${textFocus}</span>`);
            newText =
                newText.slice(0, index + 1) +
                    substring +
                    newText.slice(index + match[0].length - 1);
            step = newText.length - text.length;
        }
        return newText; // finally return element html
    }
    escapeRegex(string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
}
exports.Search = Search;


/***/ }),

/***/ "./lib/verdant-model/sampler/target.js":
/*!*********************************************!*\
  !*** ./lib/verdant-model/sampler/target.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Target = void 0;
const notebook_1 = __webpack_require__(/*! ../notebook */ "./lib/verdant-model/notebook.js");
const nodey_1 = __webpack_require__(/*! ../nodey */ "./lib/verdant-model/nodey/index.js");
const ast_utils_1 = __webpack_require__(/*! ../analysis/ast-utils */ "./lib/verdant-model/analysis/ast-utils.js");
const signaling_1 = __webpack_require__(/*! @lumino/signaling */ "webpack/sharing/consume/default/@lumino/signaling");
class Target {
    constructor(history) {
        this._targetChanged = new signaling_1.Signal(this);
        this._target = null;
        this.history = history;
    }
    dispose() {
        signaling_1.Signal.clearData(this);
    }
    get notebook() {
        return this.history.notebook;
    }
    get() {
        var _a;
        if (!this._target) {
            if (this.notebook.view.activeCell) {
                this._target =
                    ((_a = this.notebook.getCell(this.notebook.view.activeCell.model)) === null || _a === void 0 ? void 0 : _a.model) ||
                        null;
            }
        }
        return this._target;
    }
    set(nodey) {
        notebook_1.log("new target!", nodey);
        this._target = nodey;
        this._targetChanged.emit(this._target);
    }
    changed() {
        return this._targetChanged;
    }
    clear() {
        this._target = null;
    }
    figureOutTarget(parent, cell, elem) {
        if (parent instanceof nodey_1.NodeyCodeCell) {
            if (elem instanceof HTMLElement)
                return this.figureOut_byElem(parent, cell, elem);
            else {
                let res = this.figureOut_byText(parent, elem);
                if (res instanceof nodey_1.NodeyCode)
                    return res;
                else
                    return undefined;
            }
        }
        else
            return parent;
    }
    figureOut_byText(parent, text) {
        let rend = "";
        if (parent.literal) {
            rend = parent.literal;
        }
        else if (parent.content.length > 0) {
            for (var i = 0; i < parent.content.length; i++) {
                let name = parent.content[i];
                if (name instanceof nodey_1.SyntaxToken)
                    rend += name.tokens;
                else {
                    let nodey = this.history.store.get(name);
                    let res = this.figureOut_byText(nodey, text);
                    if (res instanceof nodey_1.Nodey)
                        return res;
                    else
                        rend += res + "";
                }
            }
        }
        if (rend === text || rend.indexOf(text) > -1)
            return parent;
        else
            return rend;
    }
    figureOut_byElem(parent, cell, elem) {
        var _a;
        notebook_1.log("figuring out target");
        let codeBlock = this.findAncestor(elem, "CodeMirror-code");
        let lineCount = codeBlock.getElementsByClassName("CodeMirror-line").length;
        let lineDiv = this.findAncestor(elem, "CodeMirror-line");
        let lineNum = Math.round((lineDiv.offsetTop / codeBlock.offsetHeight) * lineCount);
        let lineText = ((_a = cell === null || cell === void 0 ? void 0 : cell.editor) === null || _a === void 0 ? void 0 : _a.getLine(lineNum)) || "";
        let res;
        let startCh = 0;
        let endCh = lineText.length - 1;
        if (!elem.hasAttribute("role")) {
            // not a full line in Code Mirror
            let spanRol = this.findAncestorByAttr(elem, "role");
            startCh = Math.round((elem.offsetLeft / spanRol.offsetWidth) * lineText.length);
            endCh = Math.round(((elem.offsetLeft + elem.offsetWidth) / spanRol.offsetWidth) *
                lineText.length);
            endCh = Math.min(endCh, lineText.length - 1);
        }
        res = ast_utils_1.ASTUtils.findNodeAtRange(parent, {
            start: { line: lineNum, ch: startCh },
            end: { line: lineNum, ch: endCh },
        }, this.history);
        return res || parent; //just in case no more specific result is found
    }
    findAncestorByAttr(el, attr) {
        if (el.hasAttribute(attr))
            return el;
        while (el.parentElement &&
            (el = el.parentElement) &&
            !el.hasAttribute(attr))
            ;
        return el;
    }
    findAncestor(el, cls) {
        if (el.classList.contains(cls))
            return el;
        while (el.parentElement &&
            (el = el.parentElement) &&
            !el.classList.contains(cls))
            ;
        return el;
    }
}
exports.Target = Target;


/***/ }),

/***/ "./lib/verdant-model/sc/ sc-service.js":
/*!*********************************************!*\
  !*** ./lib/verdant-model/sc/ sc-service.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scService = void 0;
/**
 * Service to maintain the apiUrl state which is
 * requested asynchronously on start and subsequently
 * used by in the sc-client functions.
 */
exports.scService = {
    apiUrl: null
};
//# sourceMappingURL= sc-service.js.map

/***/ }),

/***/ "./lib/verdant-model/sc/sc-client.js":
/*!*******************************************!*\
  !*** ./lib/verdant-model/sc/sc-client.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logit = void 0;
const _sc_service_1 = __webpack_require__(/*! ./ sc-service */ "./lib/verdant-model/sc/ sc-service.js");
function sendGetRequest(url) {
    return fetch(url).then(resp => {
        if (resp.status !== 200) {
            throw new Error("GetLFailed" + resp.status);
        }
        return resp.json();
    });
}
function sendPostRequest(url, data) {
    let opts = { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } };
    return fetch(url, opts).then(resp => {
        if (resp.status !== 200) {
            throw new Error("PostFailed" + resp.status);
        }
        return resp.json();
    });
}
function sendEvent(topic, message) {
    console.log(_sc_service_1.scService.apiUrl);
    console.log("SYNC:******************** BEGIN  **********************");
    var url = `${_sc_service_1.scService.apiUrl}/sc/pubsub/simple/connect?name=sc-verdant`;
    var resp = sendGetRequest(url);
    resp.then(data => {
        var client_id = data.properties.client_id;
        url = `${_sc_service_1.scService.apiUrl}/sc/pubsub/simple/send/${client_id}/${topic}`;
        resp = sendPostRequest(url, message);
        resp.then(data => {
            url = `${_sc_service_1.scService.apiUrl}/sc/pubsub/simple/disconnect?client_id=${client_id}`;
            resp = sendGetRequest(url);
            resp.then(data => {
            });
        });
    });
    console.log("SYNC:******************** END **********************");
}
function logit(...msg) {
    console.log("+++++++++++++++++++++++++ BEGIN: ", msg[0], "+++++++++++++++++++++");
    console.log("VERDANT: ", ...msg);
    if (msg[0] == "Commit complete:") {
        var history = null;
        var checkpoint = null;
        if (msg.length > 2) {
            checkpoint = msg[1];
        }
        if (msg.length > 3) {
            history = msg[3];
        }
        if (history && checkpoint) {
            console.log("+++++++++++++++++++++++++ DCOMMIT_BEGIN +++++++++++++++++++++");
            // var version = checkpoint.notebook + 1
            // console.log("COMMIT_CHECKPOINT:", version);
            var notebook = history.notebook;
            var path = notebook.path;
            var events = [];
            // console.log("DCOMMIT_VERNOTEBOOK:", Array.from(notebook.cells))
            const tempMapping = new Map();
            for (var i = 0; i < notebook.cells.length; ++i) {
                var cell = notebook.cells[i];
                var name = cell.model.name;
                if (cell.view && cell.view.model) {
                    console.log("VIEW_MODEL_TYPE:", typeof cell.view.model);
                    console.log("VIEW_MODEL:", cell.view.model);
                    console.log("VIEW_MODEL_EXECUTION_COUNT:", cell.view.model.executionCount);
                    var info = JSON.stringify(cell.view.model.toJSON());
                    console.log("VIEW_MODEL_AS_STRING:", name, info);
                    // console.log("DCOMMIT_MODEL:", name, info)
                    var key = name.substring(0, name.lastIndexOf("."));
                    var id = cell.view.model.id;
                    var state = { id: id, index: i, msg: info };
                    tempMapping.set(key, state);
                }
            }
            var modelMapping = notebook.modelMapping;
            // console.log("DCOMMIT_MAPPING_M:", modelMapping)
            // console.log("DCOMMIT_MAPPING_T:", tempMapping)
            for (let entry of tempMapping.entries()) {
                if (!modelMapping.has(entry[0])) {
                    // const event = {time:new Date(),nb:path,name:entry[0],action:"added", ...entry[1]}
                    const event = Object.assign({ time: new Date().toLocaleString(), nb: path, name: entry[0], action: "added" }, entry[1]);
                    events.push(event);
                    console.log("DCOMMIT_EVENT_ADDED", event);
                }
                else {
                    var state1 = modelMapping.get(entry[0]);
                    var state2 = entry[1];
                    if (state1.msg != state2.msg) {
                        var json_msg1 = JSON.parse(state1.msg);
                        var json_msg2 = JSON.parse(state2.msg);
                        if (json_msg1.execution_count != json_msg2.execution_count) {
                            const event = Object.assign({ time: new Date(), nb: path, name: entry[0], action: "executed" }, entry[1]);
                            events.push(event);
                            console.log("DCOMMIT_EVENT_EXEXCUTED", event);
                        }
                        else {
                            const event = Object.assign({ time: new Date(), nb: path, name: entry[0], action: "edited" }, entry[1]);
                            events.push(event);
                            console.log("DCOMMIT_EVENT_EDIT", event);
                        }
                    }
                }
            }
            for (let entry of modelMapping.entries()) {
                if (!tempMapping.has(entry[0])) {
                    const event = Object.assign({ time: new Date(), nb: path, name: entry[0], action: "deleted" }, entry[1]);
                    events.push(event);
                    console.log("DCOMMIT_EVENT_DELETED", event);
                }
            }
            notebook.modelMapping = tempMapping;
            events.forEach(function (event) {
                sendEvent('verdant', event);
            });
            console.log("+++++++++++++++++++++++++ DCOMMIT_END +++++++++++++++++++++");
        }
    }
    console.log("+++++++++++++++++++++++++ END: ", msg[0], "+++++++++++++++++++++");
}
exports.logit = logit;


/***/ }),

/***/ "./lib/verdant-ui/ghost-book/ghost-book.js":
/*!*************************************************!*\
  !*** ./lib/verdant-ui/ghost-book/ghost-book.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GhostBook = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const ghost_cell_1 = __importDefault(__webpack_require__(/*! ./ghost-cell */ "./lib/verdant-ui/ghost-book/ghost-cell.js"));
const ghost_toolbar_1 = __importDefault(__webpack_require__(/*! ./ghost-toolbar */ "./lib/verdant-ui/ghost-book/ghost-toolbar.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const react_redux_2 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
class GhostBook extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_redux_2.Provider, { store: this.props.store },
            react_1.default.createElement(GhostCellContainer, null)));
    }
}
exports.GhostBook = GhostBook;
/*
 * Make a sub class to contain cells to make updates work across notebooks better
 */
class CellContainer extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: [],
        };
        this._isMounted = false;
    }
    componentDidMount() {
        this._isMounted = true;
        this.loadCells();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    componentDidUpdate(priorProps) {
        if (this._isMounted)
            if (priorProps.diffKind !== this.props.diffKind ||
                (priorProps.notebook_ver !== this.props.notebook_ver &&
                    this.props.notebook_ver > 0))
                this.loadCells();
    }
    render() {
        return (react_1.default.createElement("div", { className: "v-Verdant-GhostBook" },
            react_1.default.createElement(ghost_toolbar_1.default, null),
            react_1.default.createElement("div", { className: "v-Verdant-GhostBook-cellArea" }, this.showCells())));
    }
    loadCells() {
        return __awaiter(this, void 0, void 0, function* () {
            this.props.history.inspector.diff
                .renderNotebook(this.props.notebook_ver, this.props.diffKind)
                .then((cells) => {
                if (cells)
                    this.setState({ cells });
            });
        });
    }
    showCells() {
        /* Map cells to GhostCells */
        return this.state.cells.map((cell, index) => {
            if (this.props.scrollFocus === cell.name) {
                const ref = react_1.default.createRef();
                return (react_1.default.createElement("div", { key: index, ref: ref },
                    react_1.default.createElement(ghost_cell_1.default, { cell: cell, scrollTo: () => { var _a; return (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                        }); } })));
            }
            else {
                return (react_1.default.createElement("div", { key: index },
                    react_1.default.createElement(ghost_cell_1.default, { cell: cell })));
            }
        });
    }
}
const mapStateToProps = (state) => {
    const history = state.getHistory();
    const notebook_ver = state.ghostBook.notebook_ver;
    const diffKind = state.ghostBook.diff;
    return {
        history,
        notebook_ver,
        diffKind,
        scrollFocus: state.ghostBook.scroll_focus || "",
    };
};
const GhostCellContainer = react_redux_1.connect(mapStateToProps)(CellContainer);


/***/ }),

/***/ "./lib/verdant-ui/ghost-book/ghost-cell-output.js":
/*!********************************************************!*\
  !*** ./lib/verdant-ui/ghost-book/ghost-cell-output.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const sampler_1 = __webpack_require__(/*! ../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
const nodey_1 = __webpack_require__(/*! ../../verdant-model/nodey */ "./lib/verdant-model/nodey/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const redux_1 = __webpack_require__(/*! ../redux/ */ "./lib/verdant-ui/redux/index.js");
class GhostCellOutput extends React.Component {
    /*
     * Component to render output of a code ghost cell.
     * */
    constructor(props) {
        /* Explicit constructor to initialize state */
        // Required super call
        super(props);
        // Set state
        this.state = {
            sample: "",
        };
        this._isMounted = false;
    }
    componentDidMount() {
        this._isMounted = true;
        if (this.props.output && this.state.sample === "")
            this.updateSample();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    componentDidUpdate(priorProps) {
        var _a, _b;
        if (this._isMounted)
            if (((_a = this.props.output) === null || _a === void 0 ? void 0 : _a.name) !== ((_b = priorProps.output) === null || _b === void 0 ? void 0 : _b.name) ||
                this.props.diff !== priorProps.diff) {
                this.setState({ sample: "" });
                this.updateSample();
            }
    }
    render() {
        /* Render cell output */
        let output = this.props.output;
        if (!output)
            return null;
        return (React.createElement("div", { className: `v-Verdant-GhostBook-cell-container output${this.props.inspectOn ? " hoverInspect" : ""}${this.props.changed ? " changed" : ""}`, onClick: () => {
                if (this.props.inspectOn)
                    this.props.showDetail(output);
            } },
            React.createElement("div", { className: "v-Verdant-GhostBook-cell-label", onClick: () => this.props.showDetail(output) }, sampler_1.Namer.getOutputVersionTitle(output, this.props.history)),
            " ",
            React.createElement("div", { className: "v-Verdant-GhostBook-cell-header" }),
            React.createElement("div", { className: "v-Verdant-GhostBook-cell-content" },
                React.createElement("div", { className: "v-Verdant-GhostBook-cell" },
                    React.createElement("div", { dangerouslySetInnerHTML: { __html: this.state.sample } })))));
    }
    updateSample() {
        return __awaiter(this, void 0, void 0, function* () {
            /* Update the sample HTML if it has changed */
            let newSample = yield this.getSample();
            if (newSample && this._isMounted)
                this.setState({ sample: newSample.outerHTML });
        });
    }
    getSample() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let output = this.props.output;
            if (output && ((_a = output === null || output === void 0 ? void 0 : output.raw) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                let notebook = this.props.notebookVer;
                if (this.props.diff === sampler_1.DIFF_TYPE.PRESENT_DIFF)
                    notebook = this.props.history.store.currentNotebook.version;
                let sample = yield this.props.history.inspector.diff.renderCell(output, this.props.diff, notebook);
                return sample;
            }
        });
    }
}
const mapStateToProps = (state, ownProps) => {
    var _a, _b;
    const diff = state.ghostBook.diff;
    const history = state.getHistory();
    const notebookVer = state.ghostBook.notebook_ver;
    const outputHistory = ownProps.cell instanceof nodey_1.NodeyCodeCell
        ? (_a = history === null || history === void 0 ? void 0 : history.store) === null || _a === void 0 ? void 0 : _a.getOutput(ownProps.cell) : null;
    let output = (_b = history === null || history === void 0 ? void 0 : history.store) === null || _b === void 0 ? void 0 : _b.getForNotebook(outputHistory, notebookVer);
    // special case for comparing to the present if there was no output in the past
    if (!output && diff === sampler_1.DIFF_TYPE.PRESENT_DIFF)
        output = outputHistory === null || outputHistory === void 0 ? void 0 : outputHistory.latest;
    return {
        diff,
        history,
        inspectOn: state.artifactView.inspectOn,
        notebookVer,
        output,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        showDetail: (n) => dispatch(redux_1.showDetailOfNode(n)),
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(GhostCellOutput);


/***/ }),

/***/ "./lib/verdant-ui/ghost-book/ghost-cell.js":
/*!*************************************************!*\
  !*** ./lib/verdant-ui/ghost-book/ghost-cell.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const sampler_1 = __webpack_require__(/*! ../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
const ghost_cell_output_1 = __importDefault(__webpack_require__(/*! ./ghost-cell-output */ "./lib/verdant-ui/ghost-book/ghost-cell-output.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const redux_1 = __webpack_require__(/*! ../redux/ */ "./lib/verdant-ui/redux/index.js");
const checkpoint_1 = __webpack_require__(/*! ../../verdant-model/checkpoint */ "./lib/verdant-model/checkpoint/index.js");
/* CSS Constants */
const CONTAINER = "v-Verdant-GhostBook-container";
const CONTAINER_STACK = `${CONTAINER}-stack`;
const CELL = "v-Verdant-GhostBook-cell";
const CELL_BAND = `${CELL}-band`;
const CELL_CONTAINER = `${CELL}-container`;
const CELL_CONTENT = `${CELL}-content`;
class GhostCell extends React.Component {
    render() {
        /* Render cell */
        var _a, _b;
        if (!this.props.cell) {
            // ERROR case
            console.log("ERROR: CAN'T FIND GHOST CELL", this.props.cell.name);
            return null;
        }
        const active = this.props.hasFocus() ? "active" : "";
        return (React.createElement("div", { className: `${CONTAINER} ${active} ${this.props.cell.status}`, onClick: () => this.props.clickEv() },
            React.createElement("div", { className: CONTAINER_STACK },
                React.createElement("div", { className: "v-Verdant-GhostBook-cell-label", onClick: () => this.props.showDetail(this.props.nodey) }, sampler_1.Namer.getCellVersionTitle(this.props.nodey)),
                React.createElement("div", { className: `${CELL_CONTAINER}${this.props.inspectOn ? " hoverInspect" : ""}`, onClick: () => {
                        if (this.props.inspectOn)
                            this.props.showDetail(this.props.nodey);
                    } },
                    React.createElement("div", { className: "v-Verdant-GhostBook-cell-header" }),
                    React.createElement("div", { className: `${CELL_BAND} ${active}` }),
                    React.createElement("div", { className: `${CELL_CONTENT} ${active}` },
                        React.createElement("div", { className: `${CELL} ${((_b = (_a = this.props) === null || _a === void 0 ? void 0 : _a.nodey) === null || _b === void 0 ? void 0 : _b.typeChar) === "c" ? "code" : "markdown"}  ${active}`, dangerouslySetInnerHTML: {
                                __html: this.props.cell.sample.outerHTML,
                            } }))),
                React.createElement(ghost_cell_output_1.default, { cell: this.props.nodey, changed: this.props.cell.status.includes(checkpoint_1.ChangeType.OUTPUT_CHANGED) }))));
    }
}
const mapStateToProps = (state, ownProps) => {
    var _a;
    const history = state.getHistory();
    const nodey = (_a = history === null || history === void 0 ? void 0 : history.store) === null || _a === void 0 ? void 0 : _a.get(ownProps.cell.name);
    return {
        nodey,
        diff: state.ghostBook.diff,
        hasFocus: () => state.ghostBook.active_cell === ownProps.cell.name,
        scrollFocus: state.ghostBook.scroll_focus,
        inspectOn: state.artifactView.inspectOn,
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clickEv: () => ownProps.cell.name ? dispatch(redux_1.focusGhostCell(ownProps.cell.name)) : null,
        showDetail: (n) => dispatch(redux_1.showDetailOfNode(n)),
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(GhostCell);


/***/ }),

/***/ "./lib/verdant-ui/ghost-book/ghost-toolbar.js":
/*!****************************************************!*\
  !*** ./lib/verdant-ui/ghost-book/ghost-toolbar.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const checkpoint_1 = __webpack_require__(/*! ../../verdant-model/checkpoint */ "./lib/verdant-model/checkpoint/index.js");
const redux_1 = __webpack_require__(/*! ../redux/ */ "./lib/verdant-ui/redux/index.js");
const sampler_1 = __webpack_require__(/*! ../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
const icons_1 = __webpack_require__(/*! ../icons */ "./lib/verdant-ui/icons/index.js");
const sampler_2 = __webpack_require__(/*! ../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdown_open: false, export_msg_open: false };
        let diffLabels = [];
        diffLabels[sampler_1.DIFF_TYPE.CHANGE_DIFF] = "from prior";
        diffLabels[sampler_1.DIFF_TYPE.PRESENT_DIFF] = "from current";
        diffLabels[sampler_1.DIFF_TYPE.NO_DIFF] = "none";
        this.diffLabels = diffLabels;
    }
    render() {
        // ignore rendering if no ghost book is showing
        if (this.props.ver === -1)
            return null;
        return (React.createElement("div", { className: "v-Verdant-GhostBook-header" },
            React.createElement("div", { className: "v-Verdant-GhostBook-header-row" },
                this.showVersionSwitch(),
                this.showTimestamp(),
                this.showDiffOptions(),
                this.showExportOptions()),
            this.showExportMessage()));
    }
    showVersionSwitch() {
        return (React.createElement("div", { className: "v-Verdant-GhostBook-versionSwitch" },
            React.createElement("span", { onClick: () => this.props.openGhostBook(this.props.ver - 1) },
                React.createElement(icons_1.ChevronLeftIcon, null)),
            React.createElement("span", { className: "v-Verdant-GhostBook-versionSwitch-label" }, `v${sampler_2.Namer.getVersionNumberLabel(this.props.ver)}`),
            React.createElement("span", { onClick: () => this.props.openGhostBook(this.props.ver + 1) },
                React.createElement(icons_1.ChevronRightIcon, null))));
    }
    showTimestamp() {
        let notebook = this.props.history.store.getNotebook(this.props.ver);
        let created = this.props.history.checkpoints.get(notebook.created);
        let time;
        if (created)
            // error save from older log format
            time =
                checkpoint_1.Checkpoint.formatDate(created.timestamp) +
                    " " +
                    checkpoint_1.Checkpoint.formatTime(created.timestamp);
        return (React.createElement("div", { className: "v-Verdant-GhostBook-header-timestamp", onClick: () => this.props.openEvent(created) }, time ? time : ""));
    }
    showDiffOptions() {
        return (React.createElement("div", { className: "v-Verdant-GhostBook-diffOptions", onClick: () => this.setState({ dropdown_open: !this.state.dropdown_open }) },
            React.createElement("span", null, "show differences"),
            React.createElement("div", { className: "v-Verdant-GhostBook-diffOptions-dropdown" },
                React.createElement("div", { className: "v-Verdant-GhostBook-diffOptions-option" }, this.diffLabels[this.props.diff]),
                React.createElement(icons_1.ChevronDownIcon, null),
                this.showDropdownList())));
    }
    showDropdownList() {
        if (this.state.dropdown_open) {
            return (React.createElement("div", { className: "v-Verdant-GhostBook-diffOptions-dropdown-list" }, this.diffLabels.map((option, index) => {
                return (React.createElement("div", { key: index, className: "v-Verdant-GhostBook-diffOptions-option", onClick: (ev) => {
                        ev.stopPropagation();
                        this.props.setDiff(index);
                        this.setState({ dropdown_open: false });
                        return false;
                    } }, option));
            })));
        }
        return null;
    }
    showExportOptions() {
        return (React.createElement("div", { className: "v-Verdant-GhostBook-exportOptions", onClick: () => {
                this.setState({ export_msg_open: true });
                const notebook = this.props.history.store.getNotebook(this.props.ver);
                this.props.history.store.fileManager.saveGhostBook(this.props.history, notebook);
            } },
            React.createElement(icons_1.ExportIcon, null),
            React.createElement("span", null, "Export")));
    }
    showExportMessage() {
        if (this.state.export_msg_open) {
            const notebook = this.props.history.store.getNotebook(this.props.ver);
            let name = this.props.history.notebook.name;
            if (name) {
                name =
                    name.substring(0, name.indexOf(".")) +
                        "-" +
                        sampler_2.Namer.getNotebookVersionLabel(notebook) +
                        ".ipynb";
                // hide after export is done or after a short delay
                setTimeout(() => this.setState({ export_msg_open: false }), 2000);
                return (React.createElement("div", { className: "v-Verdant-GhostBook-export-msg" }, `Exporting notebook to ${name}`));
            }
        }
        return null;
    }
}
const mapStateToProps = (state) => {
    return {
        history: state.getHistory(),
        ver: state.ghostBook.notebook_ver,
        diff: state.ghostBook.diff,
        openGhostBook: state.openGhostBook,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        openEvent: (c) => dispatch(redux_1.showEvent(c)),
        setDiff: (diff) => dispatch(redux_1.changeDiffType(diff)),
    };
};
const GhostToolbar = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Toolbar);
exports["default"] = GhostToolbar;


/***/ }),

/***/ "./lib/verdant-ui/ghost-book/ghost.js":
/*!********************************************!*\
  !*** ./lib/verdant-ui/ghost-book/ghost.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ghost = void 0;
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const ReactDOM = __importStar(__webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom"));
const redux_1 = __webpack_require__(/*! ../redux/ */ "./lib/verdant-ui/redux/index.js");
const widgets_1 = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
const ghost_book_1 = __webpack_require__(/*! ./ghost-book */ "./lib/verdant-ui/ghost-book/ghost-book.js");
const sampler_1 = __webpack_require__(/*! ../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
const GHOST_BOOK_ICON = "v-Verdant-GhostBook-icon";
class Ghost extends widgets_1.Widget {
    constructor(store, ver) {
        super();
        this.getFile = () => store.getState().getHistory().notebook.name;
        this.id = "ghostbook-verdant";
        this.title.iconClass = GHOST_BOOK_ICON;
        this.title.closable = true;
        this.store = store;
        this.initStore(store, ver);
    }
    onCloseRequest(msg) {
        super.onCloseRequest(msg);
        this.store.dispatch(redux_1.closeGhostBook());
    }
    initStore(store, ver) {
        var _a, _b;
        //update store to that of a different notebook if needed
        this.store = store;
        // first, make sure ver is in range of available notebook versions
        ver = Math.max(0, ver);
        let max = ((_b = (_a = store.getState()) === null || _a === void 0 ? void 0 : _a.notebookArtifact) === null || _b === void 0 ? void 0 : _b.ver) ||
            Number.MAX_SAFE_INTEGER;
        ver = Math.min(max, ver);
        let changeTitle = (ver) => {
            this.title.label =
                "v" + sampler_1.Namer.getVersionNumberLabel(ver) + " of " + this.getFile();
        };
        const initialState = {
            notebook_ver: ver,
            active_cell: undefined,
            changeGhostTitle: changeTitle.bind(this),
            link_artifact: (name) => {
                let history = store.getState().getHistory();
                let nodey = history.store.get(name);
                store.dispatch(redux_1.showDetailOfNode(nodey));
            },
        };
        store.dispatch(redux_1.initGhostBook(initialState));
        changeTitle(ver);
        ReactDOM.render(React.createElement(ghost_book_1.GhostBook, {
            store: store,
        }, null), this.node);
    }
}
exports.Ghost = Ghost;


/***/ }),

/***/ "./lib/verdant-ui/icons/index.js":
/*!***************************************!*\
  !*** ./lib/verdant-ui/icons/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExportIcon = exports.XIcon = exports.BigChevronLeftIcon = exports.BigChevronRightIcon = exports.SearchIcon = exports.ChevronLeftIcon = exports.ChevronRightIcon = exports.ChevronDownIcon = exports.InspectIcon = void 0;
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
class InspectIcon extends React.Component {
    render() {
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 19 18", "aria-labelledby": "title", className: "v-VerdantPanel-inspectorButton-icon" },
            React.createElement("title", { id: "title" }, "Inspector Icon"),
            React.createElement("path", { d: "M7 0a7 7 0 016.84 8.494l4.53 1.976a.67.67 0 01.028 1.223l-.098.037-3.69 1.12a.67.67 0 00-.374.284l-.046.086-1.55 3.53a.67.67 0 01-1.223.018l-.037-.098-1.052-3.51A7 7 0 117 0zm6.5 12.91c.167-.38.492-.67.89-.79l3.49-1.06-4.24-1.84-4.27-1.85L12 16.25zM7.504 3.5H6.497v3.625l-3.135.896.277.958 3.865-1.096V3.5z" })));
    }
}
exports.InspectIcon = InspectIcon;
class ChevronDownIcon extends React.Component {
    render() {
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 16", "aria-labelledby": "title", className: "verdant-icon-chevron" },
            React.createElement("title", { id: "title" }, "Chevron Down Icon"),
            React.createElement("path", { d: "M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z" })));
    }
}
exports.ChevronDownIcon = ChevronDownIcon;
class ChevronRightIcon extends React.Component {
    render() {
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 -3 7 16", "aria-labelledby": "title", className: "verdant-icon-chevron" },
            React.createElement("title", { id: "title" }, "Chevron Right Icon"),
            React.createElement("path", { d: "M6.5 5l-5 5L0 8.5 3.75 5 0 1.5 1.5 0z" })));
    }
}
exports.ChevronRightIcon = ChevronRightIcon;
class ChevronLeftIcon extends React.Component {
    render() {
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 -3 7 16", "aria-labelledby": "title", className: "verdant-icon-chevron" },
            React.createElement("title", { id: "title" }, "Chevron Left Icon"),
            React.createElement("path", { d: "M.5 5l5 5L7 8.5 3.25 5 7 1.5 5.5 0z" })));
    }
}
exports.ChevronLeftIcon = ChevronLeftIcon;
class SearchIcon extends React.Component {
    render() {
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 17 19", "aria-labelledby": "title", className: "v-VerdantPanel-searchIcon" },
            React.createElement("title", { id: "title" }, "Search Icon"),
            React.createElement("path", { d: "M9.45.14a7.05 7.05 0 013.253 12.246l3.747 4.864a.81.81 0 01-.15 1.12.79.79 0 01-.46.16.76.76 0 01-.63-.31l-3.82-4.934a7.04 7.04 0 01-3.29.824h-.03A7.49 7.49 0 016.66 14a7.05 7.05 0 01-5.52-8.34A7.05 7.05 0 019.45.14zM8.058 1.6h.012a5.43 5.43 0 00-3 .91 5.45 5.45 0 00-1.52 7.55 5.44 5.44 0 009.798-1.711l.052-.229A5.45 5.45 0 009.14 1.7a6.8 6.8 0 00-.725-.086L8.058 1.6z" })));
    }
}
exports.SearchIcon = SearchIcon;
class BigChevronRightIcon extends React.Component {
    render() {
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", "aria-labelledby": "title", className: "verdant-icon-big-chevron", viewBox: "0 0 9 16" },
            React.createElement("title", { id: "title" }, "Large Chevron Right Icon"),
            React.createElement("path", { fill: "none", strokeWidth: "2", d: "M1.375 1l6 7-6 7" })));
    }
}
exports.BigChevronRightIcon = BigChevronRightIcon;
class BigChevronLeftIcon extends React.Component {
    render() {
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", "aria-labelledby": "title", className: "verdant-icon-big-chevron", viewBox: "0 0 9 16" },
            React.createElement("title", { id: "title" }, "Large Chevron Left Icon"),
            React.createElement("path", { fill: "none", strokeWidth: "2", d: "M7.625 1l-6 7 6 7" })));
    }
}
exports.BigChevronLeftIcon = BigChevronLeftIcon;
class XIcon extends React.Component {
    render() {
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 16", "aria-labelledby": "title", className: "verdant-icon-x" },
            React.createElement("title", { id: "title" }, "X Cancel Icon"),
            React.createElement("path", { fillRule: "evenodd", d: "M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z" })));
    }
}
exports.XIcon = XIcon;
class ExportIcon extends React.Component {
    render() {
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 11 13", "aria-labelledby": "title", className: "verdant-icon-export" },
            React.createElement("title", { id: "title" }, "Export Icon"),
            React.createElement("path", { fillRule: "nonzero", d: "M6 1.7071V8.5c0 .27614-.22386.5-.5.5S5 8.77614 5 8.5V1.7071L3.85355 2.85356c-.19526.19527-.51184.19527-.7071 0-.19527-.19526-.19527-.51184 0-.7071l2-2c.19526-.19527.51184-.19527.7071 0l2 2c.19527.19526.19527.51184 0 .7071-.19526.19527-.51184.19527-.7071 0L6 1.70711zm1.5 4.23734c-.27614 0-.5-.22385-.5-.5 0-.27614.22386-.5.5-.5h3c.27614 0 .5.22386.5.5v6.11112c0 .27614-.22386.5-.5.5H.5c-.27614 0-.5-.22386-.5-.5V5.5c0-.27253.21826-.49487.49074-.49991l3-.05556c.2761-.00511.50406.21456.50917.49066.00512.2761-.21456.50406-.49065.50917L1 5.99083v5.06473h9V5.94444H7.5z" })));
    }
}
exports.ExportIcon = ExportIcon;


/***/ }),

/***/ "./lib/verdant-ui/index.js":
/*!*********************************!*\
  !*** ./lib/verdant-ui/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VerdantUI = exports.verdantIcon = void 0;
const apputils_1 = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const panel_1 = __importDefault(__webpack_require__(/*! ./panel */ "./lib/verdant-ui/panel/index.js"));
const ui_components_1 = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/*
 * Icon for Verdant
 */
const verdantIconSvgStr = __webpack_require__(/*! ../../style/img/log-icon-4.svg */ "./style/img/log-icon-4.svg?8a27");
exports.verdantIcon = new ui_components_1.LabIcon({
    name: "verdant",
    svgstr: verdantIconSvgStr.default,
});
/*
 * A class to show the current showing Verdant Instance
 */
class VerdantUI extends apputils_1.ReactWidget {
    constructor() {
        super();
        this.activeInstance = undefined;
        // set up JupyterLab Widget boilerplate
        this.id = "v-VerdantPanel";
        this.addClass("v-Verdant-sidePanel");
        this.title.icon = exports.verdantIcon;
        this.title.iconClass = "verdant-log-icon";
        this.title.caption = "Verdant Log";
    }
    dispose() {
        var _a, _b;
        (_b = (_a = this.activeInstance) === null || _a === void 0 ? void 0 : _a.notebook) === null || _b === void 0 ? void 0 : _b.dispose();
        super.dispose();
    }
    render() {
        if (this.activeInstance)
            return React.createElement(VerdantPanel, { store: this.activeInstance.store });
        return React.createElement(VerdantLanding, null);
    }
}
exports.VerdantUI = VerdantUI;
function VerdantLanding() {
    return (React.createElement("div", { id: "verdant-landing" },
        React.createElement("div", { id: "verdant-landing-message" },
            React.createElement("div", null, "Open up a notebook to see its history."),
            React.createElement("div", { id: "verdant-landing-img" }))));
}
function VerdantPanel(props) {
    return (React.createElement(react_redux_1.Provider, { store: props.store },
        React.createElement(panel_1.default, null)));
}


/***/ }),

/***/ "./lib/verdant-ui/logger.js":
/*!**********************************!*\
  !*** ./lib/verdant-ui/logger.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VerdantLog = void 0;
const services_1 = __webpack_require__(/*! @jupyterlab/services */ "webpack/sharing/consume/default/@jupyterlab/services");
const DEBUG = false;
const RECORD = false;
class VerdantLog {
    constructor() {
        this.notebook = null;
        this.logStore = "";
        this.logPending = [];
        this.fileIO = null;
    }
    log(msg, ...msg_list) {
        if (DEBUG) {
            // print to browser console
            console.log(msg);
            if (msg_list.length > 0)
                console.log(msg_list.join(", "));
        }
        if (RECORD) {
            let str = `${Date.now()} ${msg} ${msg_list.join(", ")}`;
            this.logPending.push(str);
        }
    }
    setNotebook(notebook) {
        return __awaiter(this, void 0, void 0, function* () {
            this.notebook = notebook;
            this.logStore = (yield this.loadLog()) + this.logStore;
        });
    }
    recordAction(action, store) {
        let state = store.getState();
        let record = {
            currentEvent: state.currentEvent,
            activeTab: state.activeTab,
            inspectOn: state.inspectOn,
            inspecting: state.inspectTarget,
            searchQuery: state.searchQuery,
        };
        this.log("Redux state: ", JSON.stringify(record));
        this.log("Dispatching redux action: ", JSON.stringify(action));
        //console.log("Redux", JSON.stringify(action), store);
    }
    getReduxLogger() {
        return verLogger.bind(this, this);
    }
    getFile() {
        var _a;
        let name = (_a = this.notebook) === null || _a === void 0 ? void 0 : _a.name;
        name = name ? name.substring(0, name.indexOf(".")) + ".ipylog" : undefined;
        return name;
    }
    getPath() {
        var _a;
        let path = (_a = this.notebook) === null || _a === void 0 ? void 0 : _a.path;
        path = path
            ? "/" + path.substring(0, path.lastIndexOf("/") + 1)
            : undefined;
        return path;
    }
    loadLog() {
        if (RECORD && this.notebook) {
            return new Promise((accept) => {
                const name = this.getFile();
                let path = this.getPath();
                if (path && name) {
                    path += name;
                    let contents = new services_1.ContentsManager();
                    contents
                        .get(path)
                        .then((res) => {
                        accept(res.content);
                    })
                        .catch(() => {
                        // we won't care if the file isn't found
                        accept("");
                    });
                }
            });
        }
    }
    saveLog() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.notebook && this.logPending.length > 0) {
                this.logStore += this.logPending.join("\n");
                this.logPending = [];
                // make saving thing
                if (!this.fileIO)
                    this.fileIO = new services_1.ContentsManager();
                // make file data
                let name = this.getFile();
                let path = this.getPath();
                if (path && name) {
                    path += name;
                    var saveModel = new LoggerSaveModel(name, path, "today", "today", this.logStore);
                    // save
                    return this.fileIO.save(path, saveModel);
                }
            }
        });
    }
}
exports.VerdantLog = VerdantLog;
/* Function for redux middleware */
const verLogger = (log, store) => (next) => (action) => {
    log.recordAction(action, store);
    let result = next(action);
    return result;
};
class LoggerSaveModel {
    constructor(name, path, createDate, modDate, content) {
        this.type = "file";
        this.writable = true;
        this.mimetype = "application/json";
        this.format = "text";
        this.name = name;
        this.path = path;
        this.created = createDate;
        this.last_modified = modDate;
        this.content = content;
    }
}


/***/ }),

/***/ "./lib/verdant-ui/panel/details/artifact-origin.js":
/*!*********************************************************!*\
  !*** ./lib/verdant-ui/panel/details/artifact-origin.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const sampler_1 = __webpack_require__(/*! ../../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
const artifact_1 = __importDefault(__webpack_require__(/*! ./artifact */ "./lib/verdant-ui/panel/details/artifact.js"));
class ArtifactOrigin extends React.Component {
    render() {
        return (React.createElement("div", { className: "v-VerdantPanel-details-artifact" },
            React.createElement("div", { key: 1 },
                React.createElement("div", { className: "v-VerdantPanel-details-origin-header" }, `${sampler_1.Namer.getCellShortTitle(this.props.derived)} was created from ${sampler_1.Namer.getCellTitle(this.props.nodey)}`)),
            React.createElement(artifact_1.default, { nodey: this.props.nodey })));
    }
}
exports["default"] = ArtifactOrigin;


/***/ }),

/***/ "./lib/verdant-ui/panel/details/artifact.js":
/*!**************************************************!*\
  !*** ./lib/verdant-ui/panel/details/artifact.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const nodey_1 = __webpack_require__(/*! ../../../verdant-model/nodey */ "./lib/verdant-model/nodey/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const version_detail_1 = __importDefault(__webpack_require__(/*! ./version-detail */ "./lib/verdant-ui/panel/details/version-detail.js"));
const version_pair_1 = __importDefault(__webpack_require__(/*! ./version-pair */ "./lib/verdant-ui/panel/details/version-pair.js"));
class Artifact extends React.Component {
    render() {
        let elems = [];
        // show a single column simple artifact without dependencies
        if (!this.props.nodey_dependents ||
            this.props.nodey_dependents.length < 1) {
            for (let i = this.props.nodey_versions.length - 1; i > -1; i--) {
                elems.push(React.createElement(version_detail_1.default, { key: i, nodey: this.props.nodey_versions[i] }));
            }
        }
        // show two column artifact with a dependency pair
        else {
            for (let i = this.props.nodey_versions.length - 1; i > -1; i--) {
                // some artifact versions may not have dependency (e.g. code w/o output)
                if (Array.isArray(this.props.nodey_dependents[i]) &&
                    this.props.nodey_dependents[i].length < 1) {
                    elems.push(React.createElement(version_detail_1.default, { key: i, nodey: this.props.nodey_versions[i] }));
                }
                else {
                    elems.push(React.createElement(version_pair_1.default, { key: i, nodey: this.props.nodey_versions[i], dependent: this.props.nodey_dependents[i] }));
                }
            }
        }
        return React.createElement("div", { className: "v-VerdantPanel-details-artifact" }, elems);
    }
}
function calculateVersionMapping(nodey, history) {
    let nodey_versions = [];
    let nodey_dependents = [];
    // one to many mapping between code and output
    if (nodey instanceof nodey_1.NodeyCode) {
        let hist = history.store.getHistoryOf(nodey);
        nodey_versions = (hist === null || hist === void 0 ? void 0 : hist.getAllVersions()) || [];
        if (nodey_versions)
            nodey_dependents = nodey_versions.map((ver) => {
                let outHist = history.store.getOutput(ver);
                if (outHist)
                    return outHist.getAllVersions();
                else
                    return [];
            });
    }
    // many to one mapping between output and code
    else if (nodey instanceof nodey_1.NodeyOutput) {
        let cellParent = history.store.getCellParent(nodey);
        if (cellParent) {
            let allOutput = history.store.getAllOutput(cellParent);
            if (allOutput) {
                nodey_versions = allOutput.map((hist) => hist.getAllVersions() || []);
                allOutput.map((hist) => {
                    let out = hist.latest;
                    // return the code cell parent, which should be the same for every output
                    // in this output history
                    if (out) {
                        let parent = history.store.get(out.parent);
                        if (parent)
                            nodey_dependents.push(parent);
                    }
                });
            }
        }
    }
    // otherwise (for now) assume no dependents with markdown or raw cells
    else {
        let hist = history.store.getHistoryOf(nodey);
        if (hist)
            nodey_versions = hist.getAllVersions();
    }
    return [nodey_versions, nodey_dependents];
}
const mapStateToProps = (state, ownProps) => {
    let history = state.getHistory();
    let [nodey_versions, nodey_dependents] = ownProps.nodey
        ? calculateVersionMapping(ownProps.nodey, history)
        : [[], []];
    return {
        history,
        nodey_versions,
        nodey_dependents,
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, null)(Artifact);


/***/ }),

/***/ "./lib/verdant-ui/panel/details/crumbMenu.js":
/*!***************************************************!*\
  !*** ./lib/verdant-ui/panel/details/crumbMenu.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const nodey_1 = __webpack_require__(/*! ../../../verdant-model/nodey */ "./lib/verdant-model/nodey/index.js");
const redux_1 = __webpack_require__(/*! ../../redux/ */ "./lib/verdant-ui/redux/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const sampler_1 = __webpack_require__(/*! ../../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
class CrumbMenu extends React.Component {
    render() {
        return (React.createElement("div", { className: "v-VerdantPanel-crumbMenu" },
            React.createElement(Item, { label: "Notebook", onClick: () => this.props.showSummary() }),
            React.createElement(Seperator, null),
            this.buildLabels()));
    }
    buildLabels() {
        if (this.props.target) {
            if (this.props.target instanceof nodey_1.NodeyCode)
                return this.pathToCode();
            else if (this.props.target instanceof nodey_1.NodeyMarkdown)
                return React.createElement(Item, { label: sampler_1.Namer.getCellTitle(this.props.target) });
            else if (this.props.target instanceof nodey_1.NodeyOutput)
                return this.pathToOutput();
        }
        return null;
    }
    pathToOutput() {
        if (this.props.target) {
            let cell = this.props.history.store.getCellParent(this.props.target);
            return (React.createElement("span", null,
                React.createElement(Item, { label: sampler_1.Namer.getCellTitle(cell), onClick: () => this.props.showDetails(cell) }),
                React.createElement(Seperator, null),
                React.createElement(Item, { label: "Output" })));
        }
        return null;
    }
    pathToCode() {
        if (this.props.target) {
            if (this.props.target instanceof nodey_1.NodeyCodeCell) {
                return React.createElement(Item, { label: sampler_1.Namer.getCellTitle(this.props.target) });
            }
            else {
                let cell = this.props.history.store.getCellParent(this.props.target);
                return (React.createElement("span", null,
                    React.createElement(Item, { label: sampler_1.Namer.getCellTitle(cell), onClick: () => (cell ? this.props.showDetails(cell) : null) }),
                    React.createElement(Seperator, null),
                    React.createElement(Item, { label: sampler_1.Namer.getCodeSnippetTitle(this.props.target) })));
            }
        }
    }
}
class Seperator extends React.Component {
    render() {
        return React.createElement("div", { className: "v-VerdantPanel-crumbMenu-seperator" }, ">");
    }
}
class Item extends React.Component {
    render() {
        let link = this.props.onClick;
        return (React.createElement("div", { className: `v-VerdantPanel-crumbMenu-item ${link ? "verdant-link" : ""}`, onClick: this.props.onClick }, this.props.label));
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showSummary: () => {
            dispatch(redux_1.switchTab(redux_1.ActiveTab.Artifacts));
        },
        showDetails: (n) => {
            dispatch(redux_1.showDetailOfNode(n));
        },
    };
};
const mapStateToProps = (state) => {
    return {
        history: state.getHistory(),
        target: state.artifactView.inspectTarget,
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CrumbMenu);


/***/ }),

/***/ "./lib/verdant-ui/panel/details/index.js":
/*!***********************************************!*\
  !*** ./lib/verdant-ui/panel/details/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const inspector_button_1 = __importDefault(__webpack_require__(/*! ../inspector-button */ "./lib/verdant-ui/panel/inspector-button.js"));
const crumbMenu_1 = __importDefault(__webpack_require__(/*! ./crumbMenu */ "./lib/verdant-ui/panel/details/crumbMenu.js"));
const artifact_1 = __importDefault(__webpack_require__(/*! ./artifact */ "./lib/verdant-ui/panel/details/artifact.js"));
const artifact_origin_1 = __importDefault(__webpack_require__(/*! ./artifact-origin */ "./lib/verdant-ui/panel/details/artifact-origin.js"));
const nodey_1 = __webpack_require__(/*! ../../../verdant-model/nodey */ "./lib/verdant-model/nodey/index.js");
const redux_1 = __webpack_require__(/*! ../../redux */ "./lib/verdant-ui/redux/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
class ArtifactDetails extends React.Component {
    render() {
        return (React.createElement("div", { className: "v-VerdantPanel-content" },
            React.createElement("div", { className: "v-VerdantPanel-tab-header" },
                React.createElement(crumbMenu_1.default, null),
                this.showOutputLink()),
            React.createElement("div", { className: "v-VerdantPanel-content" },
                this.props.target ? React.createElement(artifact_1.default, { nodey: this.props.target }) : null,
                this.showOrigins()),
            React.createElement(inspector_button_1.default, null)));
    }
    showOutputLink() {
        if (this.props.target && this.props.target instanceof nodey_1.NodeyCode) {
            let out = this.props.history.store.getAllOutput(this.props.target);
            if (out && out.length > 0) {
                return (React.createElement("span", { className: "v-VerdantPanel-tab-header-outLink verdant-link", onClick: () => out[0].latest ? this.props.showDetails(out[0].latest) : null }, "show all output"));
            }
        }
        return null;
    }
    showOrigins() {
        if (this.props.target) {
            let prior = this.props.target;
            return this.props.origins.map((nodey, i) => {
                let origin = React.createElement(artifact_origin_1.default, { key: i, derived: prior, nodey: nodey });
                prior = nodey;
                return origin;
            });
        }
        return null;
    }
}
function findOrigins(nodey, history) {
    let origins = [];
    let versions = history.store.getHistoryOf(nodey);
    while (versions && versions.originPointer) {
        let o = history.store.get(versions.originPointer.origin);
        if (o) {
            origins.push(o);
        }
        versions = history.store.getHistoryOf(o);
    }
    return origins;
}
const mapDispatchToProps = (dispatch) => {
    return {
        showDetails: (n) => {
            dispatch(redux_1.showDetailOfNode(n));
        },
    };
};
const mapStateToProps = (state) => {
    let history = state.getHistory();
    let target = state.artifactView.inspectTarget;
    let origins = target ? findOrigins(target, history) : [];
    return {
        history,
        target,
        origins,
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ArtifactDetails);


/***/ }),

/***/ "./lib/verdant-ui/panel/details/version-detail.js":
/*!********************************************************!*\
  !*** ./lib/verdant-ui/panel/details/version-detail.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const nodey_1 = __webpack_require__(/*! ../../../verdant-model/nodey */ "./lib/verdant-model/nodey/index.js");
const sampler_1 = __webpack_require__(/*! ../../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
const version_header_1 = __importDefault(__webpack_require__(/*! ./version-header */ "./lib/verdant-ui/panel/details/version-header.js"));
const redux_1 = __webpack_require__(/*! ../../redux/ */ "./lib/verdant-ui/redux/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
class VersionDetail extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {
            sample: "",
        };
        this.myRef = React.createRef(); // todo test
    }
    componentDidMount() {
        this._isMounted = true;
        this.getSample();
        if (this.props.selected) {
            setTimeout(() => {
                if (this.myRef.current)
                    this.myRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                    });
            }, 1000);
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    componentDidUpdate(prevProps) {
        var _a, _b, _c, _d;
        if (this._isMounted && ((_a = this.props) === null || _a === void 0 ? void 0 : _a.nodey) &&
            ((_c = (_b = this.props) === null || _b === void 0 ? void 0 : _b.nodey) === null || _c === void 0 ? void 0 : _c.name) !== ((_d = prevProps === null || prevProps === void 0 ? void 0 : prevProps.nodey) === null || _d === void 0 ? void 0 : _d.name))
            this.getSample();
    }
    render() {
        return (React.createElement("div", { ref: this.myRef, className: "v-VerdantPanel-details-version", onClick: () => this.props.selectArtifact() },
            this.showHeader(),
            React.createElement("div", { className: "v-VerdantPanel-details-version-sample", dangerouslySetInnerHTML: { __html: this.state.sample } })));
    }
    showHeader() {
        if (!this.props.no_header)
            return React.createElement(version_header_1.default, { nodey: this.props.nodey });
        return null;
    }
    getSample() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.props.history.ready;
            let s = yield this.props.history.inspector.diff.renderCell(this.props.nodey, this.props.nodey instanceof nodey_1.NodeyOutput
                ? sampler_1.DIFF_TYPE.NO_DIFF
                : sampler_1.DIFF_TYPE.CHANGE_DIFF);
            this.setState({ sample: s.outerHTML });
        });
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectArtifact: () => ownProps.nodey
            ? dispatch(redux_1.selectArtifactDetail(ownProps.nodey.name))
            : null,
    };
};
const mapStateToProps = (state, ownProps) => {
    var _a, _b, _c, _d;
    return {
        history: state.getHistory(),
        no_header: ownProps.no_header,
        selected: ((_a = ownProps.nodey) === null || _a === void 0 ? void 0 : _a.name) != undefined &&
            ((_b = state.artifactView) === null || _b === void 0 ? void 0 : _b.selectedArtifactDetail) != undefined &&
            ((_c = state.artifactView) === null || _c === void 0 ? void 0 : _c.selectedArtifactDetail) === ((_d = ownProps.nodey) === null || _d === void 0 ? void 0 : _d.name),
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(VersionDetail);


/***/ }),

/***/ "./lib/verdant-ui/panel/details/version-header.js":
/*!********************************************************!*\
  !*** ./lib/verdant-ui/panel/details/version-header.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const nodey_1 = __webpack_require__(/*! ../../../verdant-model/nodey */ "./lib/verdant-model/nodey/index.js");
const checkpoint_1 = __webpack_require__(/*! ../../../verdant-model/checkpoint */ "./lib/verdant-model/checkpoint/index.js");
const redux_1 = __webpack_require__(/*! ../../redux/ */ "./lib/verdant-ui/redux/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const sampler_1 = __webpack_require__(/*! ../../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
class VersionHeader extends React.Component {
    render() {
        var _a;
        let origin_notebook = this.props.history.store.getNotebookOf(this.props.nodey);
        let created = this.props.history.checkpoints.get((_a = this.props.nodey) === null || _a === void 0 ? void 0 : _a.created);
        return (React.createElement("div", { className: `v-VerdantPanel-details-version-header${this.props.selected ? " selected" : ""}` },
            React.createElement("div", { className: "v-VerdantPanel-details-version-header-labelRow" },
                this.showNodeyName(),
                React.createElement("i", null, " created in "),
                React.createElement("span", { className: "verdant-link", onClick: () => {
                        if (origin_notebook) {
                            this.props.openGhostBook(origin_notebook.version);
                            this.props.scrollGhostToNodey(this.props.nodey);
                        }
                    } }, origin_notebook ? sampler_1.Namer.getNotebookTitle(origin_notebook) : "")),
            React.createElement("div", { className: "v-VerdantPanel-details-version-header-labelRow date", onClick: () => {
                    if (created)
                        this.props.openEvent(created);
                } },
                React.createElement("span", { className: "verdant-link" }, `${checkpoint_1.Checkpoint.formatTime(created === null || created === void 0 ? void 0 : created.timestamp)} ${checkpoint_1.Checkpoint.formatShortDate(created === null || created === void 0 ? void 0 : created.timestamp)}`))));
    }
    showNodeyName() {
        let name = sampler_1.Namer.getVersionTitle(this.props.nodey);
        if (this.props.nodey instanceof nodey_1.NodeyOutput)
            name = sampler_1.Namer.getOutputVersionTitle(this.props.nodey, this.props.history);
        let split = name.lastIndexOf(".");
        let root = name.substring(0, split + 1);
        let ver = name.substring(split + 1);
        if (this.props.isTarget) {
            return (React.createElement("span", null,
                React.createElement("span", null, root),
                React.createElement("b", null, ver)));
        }
        else {
            return (React.createElement("span", { className: "verdant-link", onClick: () => this.props.showDetails(this.props.nodey) },
                React.createElement("span", null, root),
                React.createElement("b", null, ver)));
        }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showDetails: (n) => {
            dispatch(redux_1.showDetailOfNode(n));
        },
        openEvent: (c) => dispatch(redux_1.showEvent(c)),
        scrollGhostToNodey: (n) => {
            dispatch(redux_1.scrollToGhostCell(n.name));
        },
    };
};
const mapStateToProps = (state, ownProps) => {
    var _a, _b, _c, _d, _e;
    const nodeyName = (_a = ownProps.nodey) === null || _a === void 0 ? void 0 : _a.artifactName;
    const targetName = (_c = (_b = state.artifactView) === null || _b === void 0 ? void 0 : _b.inspectTarget) === null || _c === void 0 ? void 0 : _c.artifactName;
    return {
        history: state.getHistory(),
        openGhostBook: state.openGhostBook,
        isTarget: nodeyName != undefined &&
            targetName != undefined &&
            nodeyName === targetName,
        selected: ((_d = state.artifactView) === null || _d === void 0 ? void 0 : _d.selectedArtifactDetail) === ((_e = ownProps.nodey) === null || _e === void 0 ? void 0 : _e.name),
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(VersionHeader);


/***/ }),

/***/ "./lib/verdant-ui/panel/details/version-pair.js":
/*!******************************************************!*\
  !*** ./lib/verdant-ui/panel/details/version-pair.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const nodey_1 = __webpack_require__(/*! ../../../verdant-model/nodey */ "./lib/verdant-model/nodey/index.js");
const version_detail_1 = __importDefault(__webpack_require__(/*! ./version-detail */ "./lib/verdant-ui/panel/details/version-detail.js"));
const version_header_1 = __importDefault(__webpack_require__(/*! ./version-header */ "./lib/verdant-ui/panel/details/version-header.js"));
const sampler_1 = __webpack_require__(/*! ../../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
const index_1 = __webpack_require__(/*! ../../redux/index */ "./lib/verdant-ui/redux/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const icons_1 = __webpack_require__(/*! ../../icons/ */ "./lib/verdant-ui/icons/index.js");
class VersionPair extends React.Component {
    render() {
        return (React.createElement("div", { className: `v-VerdantPanel-details-versionPair${this.props.open ? " open" : ""}` },
            React.createElement("div", { className: `v-VerdantPanel-details-versionPair-col left${this.props.open ? " open" : ""}` }, this.showLeft()),
            this.showRight()));
    }
    showLeft() {
        if (this.props.open)
            return this.showLeftOpen();
        return this.showLeftClosed();
    }
    showRight() {
        if (this.props.open)
            return this.showRightOpen();
        return null;
    }
    showRightOpen() {
        // if open, show dependencies in list
        let vers = [];
        if (Array.isArray(this.props.dependent))
            vers = this.props.dependent;
        else
            vers.push(this.props.dependent);
        return (React.createElement("div", { className: `v-VerdantPanel-details-versionPair-col right${this.props.open ? " open" : ""}` },
            React.createElement("div", { className: "v-VerdantPanel-details-version-header dependent open" },
                React.createElement("div", { onClick: () => this.props.closeVersionPair() },
                    React.createElement(icons_1.BigChevronLeftIcon, null))),
            vers.reverse().map((v, i) => (React.createElement(version_detail_1.default, { key: i, nodey: v })))));
    }
    showLeftOpen() {
        // if open, show versions in a plain list
        let vers = [];
        if (Array.isArray(this.props.nodey))
            vers = this.props.nodey;
        else
            vers.push(this.props.nodey);
        return vers.reverse().map((v, i) => React.createElement(version_detail_1.default, { key: i, nodey: v }));
    }
    showLeftClosed() {
        // if closed, just show all versions the same way
        let vers = [];
        if (Array.isArray(this.props.nodey))
            vers = this.props.nodey;
        else
            vers.push(this.props.nodey);
        return vers.reverse().map((v, i) => {
            return (React.createElement("div", { key: i },
                React.createElement("div", { className: "v-VerdantPanel-details-versionPair-header" },
                    React.createElement(version_header_1.default, { nodey: v }),
                    this.closedRightHeader()),
                React.createElement(version_detail_1.default, { nodey: v, no_header: true })));
        });
    }
    closedRightHeader() {
        let vers = [];
        if (Array.isArray(this.props.dependent))
            vers = this.props.dependent;
        else
            vers.push(this.props.dependent);
        return (React.createElement("div", { className: "v-VerdantPanel-details-version-header dependent closed" },
            React.createElement("div", { className: "v-VerdantPanel-details-version-header-labelRow dependent" },
                this.describeDependent(vers),
                React.createElement("div", { onClick: () => this.props.openVersionPair() },
                    React.createElement(icons_1.BigChevronRightIcon, null)))));
    }
    describeDependent(vers) {
        // Nodey Output
        if (vers[0] instanceof nodey_1.NodeyOutput) {
            if (vers.length > 1)
                return (React.createElement("span", null,
                    React.createElement("b", null, vers.length),
                    React.createElement("span", null, " outputs")));
            else
                return (React.createElement("span", null,
                    "output ",
                    React.createElement("span", { className: "verdant-link", onClick: () => this.props.showDetails(vers[0]) }, sampler_1.Namer.getOutputVersionTitle(vers[0], this.props.history))));
        }
        // Nodey Code
        else if (vers[0] instanceof nodey_1.NodeyCode) {
            return (React.createElement("span", null,
                "code ",
                React.createElement("span", { className: "verdant-link", onClick: () => this.props.showDetails(vers[0]) }, sampler_1.Namer.getCellVersionTitle(vers[0]))));
        }
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    let nodey;
    if (Array.isArray(ownProps.nodey))
        nodey = ownProps.nodey[0];
    else
        nodey = ownProps.nodey;
    return {
        showDetails: (n) => {
            dispatch(index_1.showDetailOfNode(n));
        },
        openVersionPair: () => {
            dispatch(index_1.openPair(nodey.name));
        },
        closeVersionPair: () => {
            dispatch(index_1.closePair(nodey.name));
        },
    };
};
const mapStateToProps = (state, ownProps) => {
    let nodey;
    if (Array.isArray(ownProps.nodey))
        nodey = ownProps.nodey[0];
    else
        nodey = ownProps.nodey;
    const open = state.artifactView.openDetailPairs.includes(nodey.name);
    return {
        history: state.getHistory(),
        open,
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(VersionPair);


/***/ }),

/***/ "./lib/verdant-ui/panel/details/wishbone.js":
/*!**************************************************!*\
  !*** ./lib/verdant-ui/panel/details/wishbone.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Wishbone = void 0;
const cells_1 = __webpack_require__(/*! @jupyterlab/cells */ "webpack/sharing/consume/default/@jupyterlab/cells");
const outputarea_1 = __webpack_require__(/*! @jupyterlab/outputarea */ "webpack/sharing/consume/default/@jupyterlab/outputarea");
const WISHBONE_HIGHLIGHT = "v-VerdantPanel-wishbone-highlight";
const WISHBONE_HIGHLIGHT_CODE = "v-VerdantPanel-wishbone-code-highlight";
const WISHBONE_CODE = "v-VerdantPanel-wishbone-code";
const WISHBONE_CODE_MASK = "v-VerdantPanel-wishbone-code-mask";
var Wishbone;
(function (Wishbone) {
    function startWishbone(history) {
        history.notebook.cells.forEach((verCell) => {
            var cell = verCell.view;
            Private.addCellEvents(cell, verCell.model, history.inspector);
            if (cell instanceof cells_1.CodeCell) {
                Private.addLineEvents(cell);
                Private.addOutputEvents(verCell, history);
            }
        });
    }
    Wishbone.startWishbone = startWishbone;
    function endWishbone(notebook) {
        notebook.cells.forEach((verCell) => {
            var cell = verCell.view;
            Private.removeCellEvents(cell);
        });
    }
    Wishbone.endWishbone = endWishbone;
})(Wishbone = exports.Wishbone || (exports.Wishbone = {}));
/*
 * a place for Wishbone's internal functionality
 */
var Private;
(function (Private) {
    function highlightCode(event, code) {
        event.stopPropagation();
        if (filterSelect(code, event)) {
            var betterMatch = false;
            for (var i = 0; i < code.children.length; i++) {
                if (code.children[i].classList.contains(WISHBONE_CODE)) {
                    betterMatch = highlightCode(event, code.children[i]);
                    if (betterMatch)
                        break;
                }
            }
            if (!betterMatch) {
                code.classList.add(WISHBONE_HIGHLIGHT_CODE);
            }
            return true;
        }
        return false;
    }
    Private.highlightCode = highlightCode;
    function selectTarget(nodey, inspector, _) {
        inspector.target.set(nodey);
    }
    Private.selectTarget = selectTarget;
    function selectCodeTarget(nodey, inspector, cell, event) {
        event.stopPropagation();
        let area = cell.inputArea.editorWidget.node;
        let betterMatch = area.getElementsByClassName(WISHBONE_HIGHLIGHT_CODE)[0];
        if (!betterMatch)
            this.selectTarget(nodey, inspector, event);
        else
            inspector.target.set(inspector.target.figureOutTarget(nodey, cell, betterMatch));
    }
    Private.selectCodeTarget = selectCodeTarget;
    function selectCode(lineMask, ev) {
        codeSelection(lineMask, ev);
    }
    function addCellEvents(area, nodey, inspector) {
        // first create a mask
        let mask = makeMask();
        if (area instanceof cells_1.MarkdownCell) {
            let inputArea = area.inputArea.node;
            inputArea.appendChild(mask);
            addElemEvents(mask, nodey, inspector);
        }
        if (area instanceof cells_1.CodeCell) {
            // mask on prompt area
            let prompt = area.inputArea.node;
            prompt.appendChild(mask);
            addElemEvents(mask, nodey, inspector);
            // detect line events for code mask
            let lineMask = makeMask();
            let select = selectCode.bind(this, lineMask);
            area.editorWidget.node.appendChild(lineMask);
            lineMask.addEventListener("mouseup", (ev) => {
                this.selectCodeTarget(nodey, inspector, area, ev);
            });
            lineMask.addEventListener("mouseenter", () => {
                document.addEventListener("mousemove", select);
            });
            lineMask.addEventListener("mouseleave", () => {
                lineMask.classList.remove("highlight");
                if (lineMask.parentElement) {
                    let highlighted = lineMask.parentElement.getElementsByClassName(WISHBONE_HIGHLIGHT_CODE);
                    for (var i = 0; i < highlighted.length; i++) {
                        highlighted[i].classList.remove(WISHBONE_HIGHLIGHT_CODE);
                    }
                }
                document.removeEventListener("mousemove", select);
            });
        }
        if (area instanceof outputarea_1.OutputArea) {
            area.node.appendChild(mask);
            addElemEvents(mask, nodey, inspector);
        }
    }
    Private.addCellEvents = addCellEvents;
    function makeMask() {
        var mask = document.createElement("div");
        mask.classList.add(WISHBONE_CODE_MASK);
        return mask;
    }
    function addElemEvents(mask, nodey, inspector) {
        mask.addEventListener("mouseenter", () => {
            // signal known cell node of selection
            mask.classList.add("highlight");
        });
        mask.addEventListener("mouseleave", () => {
            // signal known cell node of selection
            mask.classList.remove(WISHBONE_HIGHLIGHT);
            mask.classList.remove("highlight");
        });
        mask.addEventListener("mouseup", (ev) => {
            ev.stopPropagation();
            Private.selectTarget(nodey, inspector);
            return false;
        });
    }
    function removeCellEvents(area) {
        let masks = area.node.getElementsByClassName(WISHBONE_CODE_MASK);
        for (let i = 0; i < masks.length; i++)
            masks[i].remove();
        if (area instanceof cells_1.CodeCell) {
            let outputArea = area.outputArea.node;
            let masks = outputArea.getElementsByClassName(WISHBONE_CODE_MASK);
            for (let i = 0; i < masks.length; i++)
                masks[i].remove();
            masks = area.editorWidget.node.getElementsByClassName(WISHBONE_CODE_MASK);
            for (let i = 0; i < masks.length; i++)
                masks[i].remove();
            // get rid of any remaining highlights
            let highlighted = area.editorWidget.node.getElementsByClassName(WISHBONE_HIGHLIGHT_CODE);
            for (var i = 0; i < highlighted.length; i++) {
                highlighted[i].classList.remove(WISHBONE_HIGHLIGHT_CODE);
            }
            // remove event listeners
            highlighted = area.editorWidget.node.getElementsByClassName(WISHBONE_CODE);
            for (var i = 0; i < highlighted.length; i++) {
                highlighted[i].classList.remove(WISHBONE_CODE);
            }
        }
    }
    Private.removeCellEvents = removeCellEvents;
    function addOutputEvents(verCell, history) {
        var outputNodey = verCell.output;
        if (outputNodey && verCell.outputArea)
            addCellEvents(verCell.outputArea, outputNodey, history.inspector);
    }
    Private.addOutputEvents = addOutputEvents;
    function codeSelection(mask, ev) {
        if (mask.parentElement) {
            var highlighted = mask.parentElement.getElementsByClassName(WISHBONE_HIGHLIGHT_CODE);
            for (var i = 0; i < highlighted.length; i++) {
                highlighted[i].classList.remove(WISHBONE_HIGHLIGHT_CODE);
            }
            mask.classList.remove("highlight");
            var code = mask.parentElement.getElementsByClassName("CodeMirror-line");
            let betterMatch;
            for (var i = 0; i < code.length; i++) {
                if (highlightCode(ev, code[i])) {
                    betterMatch = code[i];
                    break;
                }
            }
            if (!betterMatch) {
                mask.classList.add("highlight");
            }
        }
    }
    function filterSelect(elem, ev) {
        var x = ev.clientX;
        var y = ev.clientY;
        var rects = elem.getBoundingClientRect();
        return (rects.left <= x && rects.right >= x && rects.top <= y && rects.bottom >= y);
    }
    function addLineEvents(cell) {
        var code = cell.inputArea.node.getElementsByTagName("span");
        for (var i = 0; i < code.length; i++) {
            code[i].classList.add(WISHBONE_CODE);
        }
        var lines = cell.inputArea.node.getElementsByClassName("CodeMirror-line");
        for (var i = 0; i < lines.length; i++) {
            lines[i].classList.add(WISHBONE_CODE);
        }
    }
    Private.addLineEvents = addLineEvents;
})(Private || (Private = {}));


/***/ }),

/***/ "./lib/verdant-ui/panel/events/date-section.js":
/*!*****************************************************!*\
  !*** ./lib/verdant-ui/panel/events/date-section.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const checkpoint_1 = __webpack_require__(/*! ../../../verdant-model/checkpoint */ "./lib/verdant-model/checkpoint/index.js");
const icons_1 = __webpack_require__(/*! ../../icons */ "./lib/verdant-ui/icons/index.js");
const redux_1 = __webpack_require__(/*! ../../redux */ "./lib/verdant-ui/redux/index.js");
const event_bundle_1 = __importDefault(__webpack_require__(/*! ./event-bundle */ "./lib/verdant-ui/panel/events/event-bundle.js"));
/* CSS Constants */
const DATE_HEADER = `Verdant-events-date-header`;
const DATE_HEADER_LABEL = `${DATE_HEADER}-label`;
const DATE_HEADER_COLLAPSE = `${DATE_HEADER}-collapse`;
class DateSection extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = { bundles: props.bundles };
    }
    componentDidMount() {
        this._isMounted = true;
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    componentDidUpdate(prevProps) {
        if (this._isMounted && this.props.bundleCount !== prevProps.bundleCount) {
            this.setState({ bundles: this.props.bundles });
        }
    }
    render() {
        var _a;
        return (React.createElement("div", null,
            React.createElement("div", { className: DATE_HEADER, onClick: () => {
                    if (this.props.isOpen)
                        this.props.close(this.props.date_id);
                    else
                        this.props.open(this.props.date_id);
                } },
                this.showArrow(),
                React.createElement("div", { className: DATE_HEADER_LABEL }, checkpoint_1.Checkpoint.formatDate(this.props.date)),
                React.createElement("div", { className: DATE_HEADER_COLLAPSE },
                    React.createElement("div", null,
                        "(", (_a = this.props.events) === null || _a === void 0 ? void 0 :
                        _a.length,
                        ")"))),
            React.createElement("div", null, this.props.isOpen ? this.makeBundles() : null)));
    }
    showArrow() {
        if (this.props.isOpen)
            return React.createElement(icons_1.ChevronDownIcon, null);
        return React.createElement(icons_1.ChevronRightIcon, null);
    }
    makeBundles() {
        // Creates bundle for each set of checkpoints
        return this.state.bundles.map((_, i) => (React.createElement(event_bundle_1.default, { key: i, bundle_id: i, date_id: this.props.date_id })));
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        open: (d) => dispatch(redux_1.dateOpen(d)),
        close: (d) => dispatch(redux_1.dateClose(d)),
    };
};
const mapStateToProps = (state, ownProps) => {
    var _a, _b;
    let dateState = (_a = state.eventView) === null || _a === void 0 ? void 0 : _a.dates[ownProps.date_id];
    return {
        date: dateState === null || dateState === void 0 ? void 0 : dateState.date,
        events: dateState === null || dateState === void 0 ? void 0 : dateState.events,
        isOpen: dateState === null || dateState === void 0 ? void 0 : dateState.isOpen,
        bundles: dateState === null || dateState === void 0 ? void 0 : dateState.bundles,
        bundleCount: ((_b = dateState === null || dateState === void 0 ? void 0 : dateState.bundles) === null || _b === void 0 ? void 0 : _b.length) || 0,
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(DateSection);


/***/ }),

/***/ "./lib/verdant-ui/panel/events/event-bundle.js":
/*!*****************************************************!*\
  !*** ./lib/verdant-ui/panel/events/event-bundle.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const event_1 = __importDefault(__webpack_require__(/*! ./event */ "./lib/verdant-ui/panel/events/event.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const redux_1 = __webpack_require__(/*! ../../redux */ "./lib/verdant-ui/redux/index.js");
const event_label_1 = __importDefault(__webpack_require__(/*! ./event-label */ "./lib/verdant-ui/panel/events/event-label.js"));
const mini_map_1 = __importDefault(__webpack_require__(/*! ./mini-map */ "./lib/verdant-ui/panel/events/mini-map.js"));
const sampler_1 = __webpack_require__(/*! ../../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
const icons_1 = __webpack_require__(/*! ../../icons */ "./lib/verdant-ui/icons/index.js");
/* CSS Constants */
const BUNDLE_MULTI_BODY = `Verdant-events-bundle-multi-body`;
const BUNDLE_MULTI_FOOTER = `Verdant-events-bundle-multi-footer`;
const BUNDLE_MULTI_FOOTER_LINE = `${BUNDLE_MULTI_FOOTER}-line`;
const BUNDLE_MULTI_FOOTER_SPACER = `${BUNDLE_MULTI_FOOTER}-spacer`;
class EventBundle extends React.Component {
    render() {
        if (!this.props.checkpoints)
            return null;
        if (this.props.checkpoints.length === 1)
            return this.renderSingle();
        return this.renderBundle();
    }
    renderSingle() {
        /* Render a single event (no bundle) */
        return (React.createElement("div", { className: "Verdant-events-bundle-single" },
            React.createElement(event_1.default, { checkpoint: this.props.checkpoints[0] })));
    }
    renderBundle() {
        /* Render a bundle of events */
        const close = () => this.props.close(this.props.date_id, this.props.bundle_id);
        const open = () => this.props.open(this.props.date_id, this.props.bundle_id);
        return (React.createElement("div", null, this.props.isOpen ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "Verdant-events-bundle-multi-header", onClick: () => close() },
                this.showArrow(),
                React.createElement("div", { className: "Verdant-events-bundle-multi-header-container" }, this.renderBundleHeaderOpen())),
            this.renderBundleBody(),
            this.renderBundleFooter())) : (React.createElement("div", { className: "Verdant-events-bundle-multi-header", onClick: () => open() },
            this.showArrow(),
            React.createElement("div", { className: "Verdant-events-bundle-multi-header-container" }, this.renderBundleHeaderClosed())))));
    }
    showArrow() {
        if (this.props.isOpen)
            return (React.createElement("div", { className: "Verdant-events-bundle-multi-header-arrow open" },
                React.createElement(icons_1.ChevronDownIcon, null)));
        return (React.createElement("div", { className: "Verdant-events-bundle-multi-header-arrow" },
            React.createElement(icons_1.ChevronRightIcon, null)));
    }
    renderBundleHeaderClosed() {
        var _a;
        /* Render the header for a closed bundle of events */
        const firstNotebook = this.props.history.store.getNotebook(this.props.checkpoints[0].notebook);
        const lastNotebook = this.props.history.store.getNotebook(this.props.checkpoints[this.props.checkpoints.length - 1].notebook);
        return (React.createElement("div", { className: "Verdant-events-event bundle" },
            React.createElement("div", { className: "Verdant-events-event-stamp" },
                React.createElement(event_label_1.default, { events: this.props.checkpoints })),
            React.createElement("div", { className: "Verdant-events-event-row-index" }, `${sampler_1.Namer.getNotebookVersionLabel(firstNotebook)} - 
              ${sampler_1.Namer.getNotebookVersionLabel(lastNotebook)}`),
            React.createElement("div", { className: "Verdant-events-event-row-map" },
                React.createElement(mini_map_1.default, { targets: this.props.targets, notebook_ver: (_a = this.props.checkpoints[0]) === null || _a === void 0 ? void 0 : _a.notebook }))));
    }
    renderBundleHeaderOpen() {
        /* Render the header for an open bundle of events */
        const firstNotebook = this.props.history.store.getNotebook(this.props.checkpoints[0].notebook);
        const lastNotebook = this.props.history.store.getNotebook(this.props.checkpoints[this.props.checkpoints.length - 1].notebook);
        return (React.createElement("div", { className: "Verdant-events-bundle-multi-header-container open" }, `${sampler_1.Namer.getNotebookVersionLabel(firstNotebook)} - 
              ${sampler_1.Namer.getNotebookVersionLabel(lastNotebook)}`));
    }
    renderBundleBody() {
        /* Render the individual events of the body of the bundle */
        return (React.createElement("div", { className: BUNDLE_MULTI_BODY }, this.props.checkpoints.map((checkpoint, index) => {
            return React.createElement(event_1.default, { key: index, checkpoint: checkpoint });
        })));
    }
    renderBundleFooter() {
        /* Render the bottom of an open bundle */
        return (React.createElement("div", { className: BUNDLE_MULTI_FOOTER },
            React.createElement("div", { className: BUNDLE_MULTI_FOOTER_LINE }),
            React.createElement("div", { className: BUNDLE_MULTI_FOOTER_SPACER })));
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        open: (d, b) => dispatch(redux_1.bundleOpen(d, b)),
        close: (d, b) => dispatch(redux_1.bundleClose(d, b)),
    };
};
const mapStateToProps = (state, ownProps) => {
    var _a;
    const history = state.getHistory();
    const bundle = state.eventView.dates[ownProps.date_id].bundles[ownProps.bundle_id];
    const targets = bundle === null || bundle === void 0 ? void 0 : bundle.bundleTargets;
    const checkpoints = (_a = bundle === null || bundle === void 0 ? void 0 : bundle.bundleEvents) === null || _a === void 0 ? void 0 : _a.map((ev) => state.eventView.dates[ownProps.date_id].events[ev]);
    const changeCount = bundle ? Object.keys(bundle === null || bundle === void 0 ? void 0 : bundle.bundleTargets).length : -1;
    return {
        isOpen: bundle === null || bundle === void 0 ? void 0 : bundle.isOpen,
        changeCount,
        history,
        checkpoints,
        targets,
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(EventBundle);


/***/ }),

/***/ "./lib/verdant-ui/panel/events/event-label.js":
/*!****************************************************!*\
  !*** ./lib/verdant-ui/panel/events/event-label.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const checkpoint_1 = __webpack_require__(/*! ../../../verdant-model/checkpoint */ "./lib/verdant-model/checkpoint/index.js");
const LABEL = "Verdant-events-label";
class NotebookEventLabel extends React.Component {
    constructor(props) {
        var _a;
        super(props);
        this._isMounted = false;
        let times = [];
        (_a = this.props.events) === null || _a === void 0 ? void 0 : _a.map((ev) => this.addEvent(ev, times));
        this.state = {
            times,
        };
    }
    render() {
        return React.createElement("div", { className: LABEL }, this.makeTimestamp());
    }
    componentDidMount() {
        this._isMounted = true;
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    componentDidUpdate(prevProps) {
        var _a, _b, _c;
        if (this._isMounted &&
            ((_a = this.props.events) === null || _a === void 0 ? void 0 : _a.length) !== ((_b = prevProps.events) === null || _b === void 0 ? void 0 : _b.length)) {
            let times = [];
            (_c = this.props.events) === null || _c === void 0 ? void 0 : _c.map((ev) => this.addEvent(ev, times));
            this.setState({ times: times });
        }
    }
    // Create timestamp element
    makeTimestamp() {
        const times = this.state.times;
        if (times.length == 1) {
            return React.createElement("div", null,
                " ",
                times[0].time,
                " ");
        }
        else {
            let firstTime = times[0].time;
            return React.createElement("div", null, `${firstTime}...`);
        }
    }
    addEvent(event, times) {
        let time = checkpoint_1.Checkpoint.formatTime(event.timestamp);
        let matchTime = times.filter((item) => item.time === time)[0];
        if (!matchTime) {
            matchTime = {
                time: time,
                events: [],
            };
            times.push(matchTime);
        }
        // add to start since assume it will be a later time
        matchTime.events.unshift(event);
    }
}
exports["default"] = NotebookEventLabel;


/***/ }),

/***/ "./lib/verdant-ui/panel/events/event.js":
/*!**********************************************!*\
  !*** ./lib/verdant-ui/panel/events/event.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const event_label_1 = __importDefault(__webpack_require__(/*! ./event-label */ "./lib/verdant-ui/panel/events/event-label.js"));
const mini_map_1 = __importDefault(__webpack_require__(/*! ./mini-map */ "./lib/verdant-ui/panel/events/mini-map.js"));
const sampler_1 = __webpack_require__(/*! ../../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
class NotebookEvent extends React.Component {
    render() {
        var _a, _b;
        const ghostOpen = this.props.currentGhostBook();
        return (React.createElement("div", { className: `Verdant-events-event${ghostOpen ? " ghostOpen" : ""}` },
            React.createElement("div", { className: "Verdant-events-event-stamp" },
                React.createElement(event_label_1.default, { events: [this.props.checkpoint] })),
            React.createElement("div", { className: "Verdant-events-event-row-index verdant-link", onClick: this.props.openGhostBook }, sampler_1.Namer.getNotebookVersionLabel(this.props.notebook)),
            React.createElement("div", { className: "Verdant-events-event-row-map" },
                React.createElement(mini_map_1.default, { targets: this.props.checkpoint.targetCells, notebook_ver: (_b = (_a = this.props) === null || _a === void 0 ? void 0 : _a.notebook) === null || _b === void 0 ? void 0 : _b.version }))));
    }
}
const mapStateToProps = (state, ownProps) => {
    const notebook = state
        .getHistory()
        .store.getNotebook(ownProps.checkpoint.notebook);
    return {
        openGhostBook: () => notebook ? state.openGhostBook(ownProps.checkpoint.notebook) : null,
        notebook,
        currentGhostBook: () => (notebook === null || notebook === void 0 ? void 0 : notebook.version) === state.ghostBook.notebook_ver,
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps)(NotebookEvent);


/***/ }),

/***/ "./lib/verdant-ui/panel/events/index.js":
/*!**********************************************!*\
  !*** ./lib/verdant-ui/panel/events/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const date_section_1 = __importDefault(__webpack_require__(/*! ./date-section */ "./lib/verdant-ui/panel/events/date-section.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const PANEL = "v-VerdantPanel-content";
class EventColumn extends React.Component {
    constructor(props) {
        super(props);
        // having both a state and props for dates seems weird
        // but trying to get view to actually update on a new date (it's not doing it correctly)
        this.state = { dates: [...this.props.dates] };
    }
    componentDidUpdate(priorProps) {
        if (this.props.currentDate !== priorProps.currentDate) {
            this.setState({ dates: this.props.dates || [] });
        }
    }
    render() {
        if (this.props.ready) {
            return (React.createElement("div", { className: PANEL }, this.state.dates.map((_, index) => {
                let reverse = this.state.dates.length - 1 - index;
                return React.createElement(date_section_1.default, { key: reverse, date_id: reverse });
            })));
        }
        else
            return null; //TODO loading placeholder?
    }
}
const mapStateToProps = (state) => {
    var _a, _b;
    return {
        ready: state.eventView.ready,
        dates: state.eventView.dates,
        currentDate: ((_b = (_a = state.eventView) === null || _a === void 0 ? void 0 : _a.dates) === null || _b === void 0 ? void 0 : _b.length) - 1 || -1,
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, null)(EventColumn);


/***/ }),

/***/ "./lib/verdant-ui/panel/events/mini-map.js":
/*!*************************************************!*\
  !*** ./lib/verdant-ui/panel/events/mini-map.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const checkpoint_1 = __webpack_require__(/*! ../../../verdant-model/checkpoint */ "./lib/verdant-model/checkpoint/index.js");
const sampler_1 = __webpack_require__(/*! ../../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
const redux_1 = __webpack_require__(/*! ../../redux */ "./lib/verdant-ui/redux/index.js");
const react_tooltip_1 = __importDefault(__webpack_require__(/*! react-tooltip */ "webpack/sharing/consume/default/react-tooltip/react-tooltip"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
class MiniMap extends React.Component {
    render() {
        return React.createElement("div", { className: "Verdant-events-map" }, this.showMap());
    }
    showMap() {
        const tick_width = 3;
        let width = `${this.props.notebook_length * tick_width}px`;
        return (React.createElement("div", { className: "Verdant-events-map-background", style: { width }, "data-tip": `${this.props.notebook_length} cells in this notebook` },
            this.props.targets.map((dat, j_index) => {
                let left = `${dat.index * tick_width}px`;
                let color = dat.changeType.replace(/ /g, "_");
                let nodey = this.props.history.store.get(dat.cell);
                let tooltip_msg = sampler_1.Namer.describeChange(nodey, [dat.changeType]);
                return (React.createElement("div", { className: `Verdant-events-map-cell target tic ${color}`, style: { left }, "data-tip": tooltip_msg, key: j_index, onClick: () => {
                        var _a;
                        const nodey = (_a = this.props.history.store) === null || _a === void 0 ? void 0 : _a.get(dat === null || dat === void 0 ? void 0 : dat.cell);
                        if (nodey)
                            this.props.showDetail(nodey);
                    } }));
            }),
            React.createElement(react_tooltip_1.default, null)));
    }
}
const mapStateToProps = (state, ownProps) => {
    var _a, _b, _c;
    const history = state.getHistory();
    const notebook = (_a = history === null || history === void 0 ? void 0 : history.store) === null || _a === void 0 ? void 0 : _a.getNotebook(ownProps.notebook_ver);
    let notebook_length = ((_b = notebook === null || notebook === void 0 ? void 0 : notebook.cells) === null || _b === void 0 ? void 0 : _b.length) || 0;
    (_c = ownProps.targets) === null || _c === void 0 ? void 0 : _c.forEach((target) => {
        if (target.changeType === checkpoint_1.ChangeType.REMOVED)
            notebook_length++;
    });
    return {
        history: state.getHistory(),
        notebook_length,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        showDetail: (n) => dispatch(redux_1.showDetailOfNode(n)),
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MiniMap);


/***/ }),

/***/ "./lib/verdant-ui/panel/index.js":
/*!***************************************!*\
  !*** ./lib/verdant-ui/panel/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const details_1 = __importDefault(__webpack_require__(/*! ./details */ "./lib/verdant-ui/panel/details/index.js"));
const summary_1 = __importDefault(__webpack_require__(/*! ./summary */ "./lib/verdant-ui/panel/summary/index.js"));
const events_1 = __importDefault(__webpack_require__(/*! ./events */ "./lib/verdant-ui/panel/events/index.js"));
const search_1 = __importDefault(__webpack_require__(/*! ./search */ "./lib/verdant-ui/panel/search/index.js"));
const redux_1 = __webpack_require__(/*! ../redux */ "./lib/verdant-ui/redux/index.js");
const icons_1 = __webpack_require__(/*! ../icons */ "./lib/verdant-ui/icons/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const PANEL_CONTAINER = "v-VerdantPanel-content-container";
const TAB_CONTAINER = "v-VerdantPanel-tabContainer";
const TAB = "v-VerdantPanel-tab";
class PanelContainer extends React.Component {
    render() {
        return (React.createElement("div", { className: "v-VerdantPanel" },
            this.buildHeader(),
            React.createElement("div", { className: PANEL_CONTAINER }, this.showTab())));
    }
    buildHeader() {
        let active = this.props.activeTab;
        return (React.createElement("div", { className: TAB_CONTAINER },
            React.createElement("div", { className: `${TAB} ${active === redux_1.ActiveTab.Events ? "active" : ""}`, onClick: () => this.props.setActiveTab(redux_1.ActiveTab.Events) }, "Activity"),
            React.createElement("div", { className: `${TAB} ${active === redux_1.ActiveTab.Artifacts ||
                    active === redux_1.ActiveTab.Artifact_Details
                    ? "active"
                    : ""}`, onClick: () => this.props.setActiveTab(this.props.showingDetail
                    ? redux_1.ActiveTab.Artifact_Details
                    : redux_1.ActiveTab.Artifacts) }, "Artifacts"),
            React.createElement("div", { className: `${TAB} ${active === redux_1.ActiveTab.Search ? "active" : ""}`, onClick: () => this.props.setActiveTab(redux_1.ActiveTab.Search), style: { borderRightWidth: "0px" } },
                React.createElement(icons_1.SearchIcon, null))));
    }
    showTab() {
        let active = this.props.activeTab;
        if (active === redux_1.ActiveTab.Events)
            return React.createElement(events_1.default, null);
        if (active === redux_1.ActiveTab.Artifacts)
            return React.createElement(summary_1.default, null);
        if (active === redux_1.ActiveTab.Artifact_Details)
            return React.createElement(details_1.default, null);
        if (active === redux_1.ActiveTab.Search)
            return React.createElement(search_1.default, null);
        return null;
    }
}
const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab,
        showingDetail: state.artifactView.showingDetail,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setActiveTab: (name) => dispatch(redux_1.switchTab(name)),
    };
};
const Panel = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(PanelContainer);
exports["default"] = Panel;


/***/ }),

/***/ "./lib/verdant-ui/panel/inspector-button.js":
/*!**************************************************!*\
  !*** ./lib/verdant-ui/panel/inspector-button.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const redux_1 = __webpack_require__(/*! ../redux/ */ "./lib/verdant-ui/redux/index.js");
const icons_1 = __webpack_require__(/*! ../icons/ */ "./lib/verdant-ui/icons/index.js");
class InspectButton extends React.Component {
    componentWillUnmount() {
        this.props.off();
    }
    render() {
        return (React.createElement("div", { className: `v-VerdantPanel-inspectorButton ${this.props.active ? "active" : ""}`, onClick: (ev) => {
                ev.stopPropagation();
                if (this.props.active)
                    this.props.off();
                else
                    this.props.on();
                return false;
            } },
            React.createElement("div", { className: "v-VerdantPanel-inspectorButton-label" },
                React.createElement("span", null, "Version Inspector"),
                React.createElement(icons_1.InspectIcon, null))));
    }
}
const mapDispatchToProps = (dispatch) => {
    const ev = () => {
        dispatch(redux_1.inspectOff());
    };
    return {
        on: () => {
            dispatch(redux_1.inspectOn());
            document.addEventListener("click", ev, { once: true });
        },
        off: () => {
            dispatch(redux_1.inspectOff());
            document.removeEventListener("click", ev);
        },
    };
};
const mapStateToProps = (state) => {
    return {
        active: state.artifactView.inspectOn,
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(InspectButton);


/***/ }),

/***/ "./lib/verdant-ui/panel/search/index.js":
/*!**********************************************!*\
  !*** ./lib/verdant-ui/panel/search/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const search_bar_1 = __importDefault(__webpack_require__(/*! ./search-bar */ "./lib/verdant-ui/panel/search/search-bar.js"));
const results_section_1 = __importDefault(__webpack_require__(/*! ./results-section */ "./lib/verdant-ui/panel/search/results-section.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
class Search extends React.Component {
    render() {
        return (React.createElement("div", { className: "v-VerdantPanel-search" },
            React.createElement(search_bar_1.default, null),
            React.createElement("div", { className: "v-VerdantPanel-searchContent" }, this.showResults())));
    }
    showResults() {
        if (this.props.results.length > 0) {
            return this.props.results.map((results, index) => {
                return (React.createElement(results_section_1.default, { key: index, results: results.results, totalResults: results.count, title: results.label }));
            });
        }
        return null;
    }
}
const mapStateToProps = (state) => {
    return {
        openResults: state.search.openResults,
        results: state.search.searchResults,
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps)(Search);


/***/ }),

/***/ "./lib/verdant-ui/panel/search/result.js":
/*!***********************************************!*\
  !*** ./lib/verdant-ui/panel/search/result.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const nodey_1 = __webpack_require__(/*! ../../../verdant-model/nodey */ "./lib/verdant-model/nodey/index.js");
const redux_1 = __webpack_require__(/*! ../../redux/ */ "./lib/verdant-ui/redux/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const sampler_1 = __webpack_require__(/*! ../../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sample: "" };
    }
    componentDidMount() {
        this.props.history.ready.then(() => __awaiter(this, void 0, void 0, function* () {
            let sample = yield this.props.history.inspector.search.renderSearchCell(this.props.result, this.props.search_query);
            this.setState({ sample: sample.outerHTML });
        }));
    }
    render() {
        let notebook = this.props.history.store.getNotebookOf(this.props.result);
        let name = sampler_1.Namer.getVersionTitle(this.props.result);
        if (this.props.result instanceof nodey_1.NodeyOutput)
            name = sampler_1.Namer.getOutputVersionTitle(this.props.result, this.props.history);
        return (React.createElement("div", null,
            React.createElement("div", { className: "VerdantPanel-search-results-artifact-header list-result" },
                React.createElement("div", null,
                    React.createElement("span", { className: "verdant-link", onClick: () => this.props.openNodeDetails(this.props.result) }, name),
                    React.createElement("span", null, " from "),
                    React.createElement("span", { className: notebook ? "verdant-link" : "", onClick: () => {
                            if (notebook && this.props.openGhostBook) {
                                this.props.openGhostBook(notebook.version);
                                this.props.scrollGhostToNodey(this.props.result);
                            }
                        } }, sampler_1.Namer.getNotebookTitle(notebook)))),
            React.createElement("div", { className: "v-VerdantPanel-search-version", onClick: () => {
                    if (notebook && this.props.openGhostBook)
                        this.props.openGhostBook(notebook.version);
                }, dangerouslySetInnerHTML: { __html: this.state.sample } })));
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openNodeDetails: (inspectTarget) => {
            dispatch(redux_1.showDetailOfNode(inspectTarget));
        },
        scrollGhostToNodey: (n) => {
            dispatch(redux_1.scrollToGhostCell(n.name));
        },
    };
};
const mapStateToProps = (state) => {
    return {
        search_query: state.search.searchQuery,
        history: state.getHistory(),
        openGhostBook: state.openGhostBook,
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Result);


/***/ }),

/***/ "./lib/verdant-ui/panel/search/results-section.js":
/*!********************************************************!*\
  !*** ./lib/verdant-ui/panel/search/results-section.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const icons_1 = __webpack_require__(/*! ../../icons */ "./lib/verdant-ui/icons/index.js");
const results_subsection_1 = __importDefault(__webpack_require__(/*! ./results-subsection */ "./lib/verdant-ui/panel/search/results-subsection.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const redux_1 = __webpack_require__(/*! ../../redux/ */ "./lib/verdant-ui/redux/index.js");
class ResultsSection extends React.Component {
    render() {
        return (React.createElement("div", { className: `VerdantPanel-search-results-category${this.props.sectionOpen ? " open" : ""}` },
            React.createElement("div", { className: `VerdantPanel-search-results-header${this.props.sectionOpen ? " open" : ""}`, onClick: () => {
                    if (this.props.totalResults > 0) {
                        // don't open/close for empty results
                        if (this.props.sectionOpen)
                            this.props.closeSection ? this.props.closeSection() : null;
                        else
                            this.props.openSection ? this.props.openSection() : null;
                    }
                } },
                this.showIcon(),
                React.createElement("div", { className: "VerdantPanel-search-results-header-title" }, `appears in (${this.props.totalResults}) ${this.props.title}${this.props.totalResults === 1 ? "" : "s"}
          `)),
            this.showResults()));
    }
    showIcon() {
        // don't open/close for empty results
        if (this.props.totalResults > 0) {
            if (this.props.sectionOpen)
                return React.createElement(icons_1.ChevronDownIcon, null);
            else
                return React.createElement(icons_1.ChevronRightIcon, null);
        }
    }
    showResults() {
        if (this.props.sectionOpen)
            return (React.createElement("div", { className: "VerdantPanel-search-results-category-content" }, this.props.results.map((item, index) => {
                return (React.createElement(results_subsection_1.default, { key: index, nodey: item[0], results: item, sectionOpen: this.props.results.length < 2 }));
            })));
        return null;
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openSection: () => {
            dispatch(redux_1.openResults(ownProps.title));
        },
        closeSection: () => {
            dispatch(redux_1.closeResults(ownProps.title));
        },
    };
};
const mapStateToProps = (state, ownProps) => {
    return {
        sectionOpen: state.search.openResults.indexOf(ownProps.title) > -1,
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ResultsSection);


/***/ }),

/***/ "./lib/verdant-ui/panel/search/results-subsection.js":
/*!***********************************************************!*\
  !*** ./lib/verdant-ui/panel/search/results-subsection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const nodey_1 = __webpack_require__(/*! ../../../verdant-model/nodey */ "./lib/verdant-model/nodey/index.js");
const redux_1 = __webpack_require__(/*! ../../redux/ */ "./lib/verdant-ui/redux/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const sampler_1 = __webpack_require__(/*! ../../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
const icons_1 = __webpack_require__(/*! ../../icons */ "./lib/verdant-ui/icons/index.js");
const result_1 = __importDefault(__webpack_require__(/*! ./result */ "./lib/verdant-ui/panel/search/result.js"));
class ResultsSubSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sample: "" };
    }
    componentDidMount() {
        // load sample IF this result is a singleton
        if (this.props.results.length < 2) {
            this.props.history.ready.then(() => __awaiter(this, void 0, void 0, function* () {
                let sample = yield this.props.history.inspector.search.renderSearchCell(this.props.results[0], this.props.search_query);
                this.setState({ sample: sample.outerHTML });
            }));
        }
    }
    render() {
        if (this.props.results.length < 2)
            return this.showSingleton();
        else
            return this.showResultsPreview();
    }
    showSingleton() {
        let notebook = this.props.history.store.getNotebookOf(this.props.results[0]);
        let name = sampler_1.Namer.getVersionTitle(this.props.results[0]);
        if (this.props.results[0] instanceof nodey_1.NodeyOutput)
            name = sampler_1.Namer.getOutputVersionTitle(this.props.results[0], this.props.history);
        return (React.createElement("div", { className: "VerdantPanel-search-results-artifact" },
            React.createElement("div", { className: "VerdantPanel-search-results-artifact-header" },
                React.createElement("div", { className: "VerdantPanel-search-results-artifact-cell-title verdant-link", onClick: () => this.props.openNodeDetails(this.props.nodey) }, this.showArtifactTitle()),
                React.createElement("div", null,
                    React.createElement("span", { className: "verdant-link", onClick: () => this.props.openNodeDetails(this.props.results[0]) }, name),
                    React.createElement("span", null, " from "),
                    React.createElement("span", { className: "verdant-link", onClick: () => {
                            if (this.props.openGhostBook && notebook) {
                                this.props.openGhostBook(notebook.version);
                                this.props.scrollGhostToNodey(this.props.results[0]);
                            }
                        } }, sampler_1.Namer.getNotebookTitle(notebook)))),
            React.createElement("div", { className: "v-VerdantPanel-search-version", dangerouslySetInnerHTML: { __html: this.state.sample } })));
    }
    showResultsPreview() {
        return (React.createElement("div", { className: `VerdantPanel-search-results-artifact ${this.props.sectionOpen ? "open" : ""}` },
            React.createElement("div", { className: `VerdantPanel-search-results-artifact-header${this.props.sectionOpen ? " open-artifact" : ""}`, onClick: () => {
                    if (this.props.sectionOpen)
                        this.props.closeSection();
                    else
                        this.props.openSection();
                } },
                React.createElement("div", { className: "VerdantPanel-search-results-artifact-cell-title verdant-link" },
                    this.showCaret(),
                    React.createElement("span", { onClick: () => this.props.openNodeDetails(this.props.nodey) }, this.showArtifactTitle())),
                React.createElement("span", null, `${this.props.results.length} matching versions`)),
            this.showFullResults()));
    }
    showCaret() {
        if (this.props.sectionOpen)
            return React.createElement(icons_1.ChevronDownIcon, null);
        else
            return React.createElement(icons_1.ChevronRightIcon, null);
    }
    showArtifactTitle() {
        if (this.props.nodey instanceof nodey_1.NodeyOutput)
            return sampler_1.Namer.getOutputTitle(this.props.nodey, this.props.history);
        return sampler_1.Namer.getCellTitle(this.props.nodey);
    }
    showFullResults() {
        if (this.props.sectionOpen) {
            return this.props.results
                .reverse()
                .map((r, index) => React.createElement(result_1.default, { key: index, result: r }));
        }
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openNodeDetails: (inspectTarget) => {
            dispatch(redux_1.showDetailOfNode(inspectTarget));
        },
        openSection: () => {
            dispatch(redux_1.openResults(ownProps.nodey.artifactName));
        },
        closeSection: () => {
            dispatch(redux_1.closeResults(ownProps.nodey.artifactName));
        },
        scrollGhostToNodey: (n) => {
            dispatch(redux_1.scrollToGhostCell(n.name));
        },
    };
};
const mapStateToProps = (state, ownProps) => {
    return {
        search_query: state.search.searchQuery,
        history: state.getHistory(),
        openGhostBook: state.openGhostBook,
        sectionOpen: ownProps.sectionOpen ||
            state.search.openResults.indexOf(ownProps.nodey.artifactName) > -1,
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ResultsSubSection);


/***/ }),

/***/ "./lib/verdant-ui/panel/search/search-bar.js":
/*!***************************************************!*\
  !*** ./lib/verdant-ui/panel/search/search-bar.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const icons_1 = __webpack_require__(/*! ../../icons */ "./lib/verdant-ui/icons/index.js");
const redux_1 = __webpack_require__(/*! ../../redux/ */ "./lib/verdant-ui/redux/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchbox_text: props.searchQuery ? props.searchQuery : "",
            show_x: false,
        };
    }
    render() {
        return (React.createElement("div", { className: "v-VerdantPanel-searchContainer", onMouseEnter: () => this.setState({ show_x: true }), onMouseLeave: () => this.setState({ show_x: false }) },
            React.createElement(icons_1.SearchIcon, null),
            React.createElement("input", { className: "v-VerdantPanel-searchText", contentEditable: true, placeholder: "search history by keyword", value: this.state.searchbox_text, onChange: (ev) => {
                    this.setState({ searchbox_text: ev.target.value });
                }, onKeyDown: (ev) => {
                    if (ev.keyCode === 13) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        this.props.searchFor(this.state.searchbox_text);
                    }
                } }),
            React.createElement("div", { style: {
                    position: "absolute",
                    right: "16px",
                    display: this.state.show_x ? "" : "none",
                }, onClick: () => {
                    this.setState({ searchbox_text: "" });
                    this.props.searchFor(null);
                } },
                React.createElement(icons_1.XIcon, null))));
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchFor: (text) => dispatch(redux_1.searchForText(text)),
    };
};
const mapStateToProps = (state) => {
    return {
        searchQuery: state.search.searchQuery,
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SearchBar);


/***/ }),

/***/ "./lib/verdant-ui/panel/summary/index.js":
/*!***********************************************!*\
  !*** ./lib/verdant-ui/panel/summary/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const summary_table_1 = __importDefault(__webpack_require__(/*! ./summary-table */ "./lib/verdant-ui/panel/summary/summary-table.js"));
const inspector_button_1 = __importDefault(__webpack_require__(/*! ../inspector-button */ "./lib/verdant-ui/panel/inspector-button.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const sampler_1 = __webpack_require__(/*! ../../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
const PANEL = "v-VerdantPanel-content";
const HEADER = "v-VerdantPanel-tab-header";
const SUMMARY_TITLE = "v-VerdantPanel-Summary-title";
class ArtifactSummary extends React.Component {
    render() {
        let notebookNodey = this.props.history.store.getNotebook(this.props.notebook.ver);
        return (React.createElement("div", { className: PANEL },
            React.createElement("div", { className: HEADER },
                React.createElement("span", { className: SUMMARY_TITLE },
                    this.props.notebook.file,
                    React.createElement("b", null, ` ${sampler_1.Namer.getNotebookVersionLabel(notebookNodey)}`),
                    " by ",
                    React.createElement("i", null, "artifact revisions:"))),
            React.createElement(summary_table_1.default, null),
            React.createElement(inspector_button_1.default, null)));
    }
}
const mapStateToProps = (state) => {
    return {
        notebook: state.notebookArtifact,
        history: state.getHistory(),
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, null)(ArtifactSummary);


/***/ }),

/***/ "./lib/verdant-ui/panel/summary/row-preview.js":
/*!*****************************************************!*\
  !*** ./lib/verdant-ui/panel/summary/row-preview.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RowPreview = void 0;
const CELL_SAMPLE = "v-VerdantPanel-cellList-sample";
var RowPreview;
(function (RowPreview) {
    function previewCell(historyModel, cell) {
        return __awaiter(this, void 0, void 0, function* () {
            let sample = document.createElement("div");
            sample.classList.add(CELL_SAMPLE);
            sample.classList.add(cell.typeChar);
            let res = historyModel.inspector.sampleNode(cell);
            sample.textContent = res[0];
            if (cell.typeChar === "m") {
                sample.classList.add("markdown");
                sample.classList.add("jp-RenderedHTMLCommon");
                sample.classList.add("markdown-sample");
                yield historyModel.inspector.renderArtifactCell(cell, sample);
            }
            /*sample.addEventListener("click", () => {
              //TODO Try to get notebook to scroll to the cell clicked on
            });*/
            return sample;
        });
    }
    RowPreview.previewCell = previewCell;
    function previewOutput(historyModel, output) {
        return __awaiter(this, void 0, void 0, function* () {
            let sample = document.createElement("div");
            sample.classList.add(CELL_SAMPLE);
            yield historyModel.inspector.renderArtifactCell(output, sample);
            return sample;
        });
    }
    RowPreview.previewOutput = previewOutput;
})(RowPreview = exports.RowPreview || (exports.RowPreview = {}));


/***/ }),

/***/ "./lib/verdant-ui/panel/summary/summary-row.js":
/*!*****************************************************!*\
  !*** ./lib/verdant-ui/panel/summary/summary-row.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SummaryRow = exports.Row = void 0;
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const row_preview_1 = __webpack_require__(/*! ./row-preview */ "./lib/verdant-ui/panel/summary/row-preview.js");
const nodey_1 = __webpack_require__(/*! ../../../verdant-model/nodey */ "./lib/verdant-model/nodey/index.js");
const sampler_1 = __webpack_require__(/*! ../../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sample: "", output_sample: "" };
    }
    componentDidMount() {
        this.fetchArtifact();
    }
    fetchArtifact() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.props.history && this.props.cell) {
                row_preview_1.RowPreview.previewCell(this.props.history, this.props.cell).then((sample) => {
                    this.setState({ sample: sample.outerHTML });
                });
                if (this.props.output)
                    row_preview_1.RowPreview.previewOutput(this.props.history, this.props.output).then((sample) => this.setState({ output_sample: sample.outerHTML }));
            }
        });
    }
    render() {
        var _a;
        return (React.createElement("div", null,
            React.createElement("div", { className: `v-VerdantPanel-Summary-table-row ${this.props.cell ? this.props.cell.typeChar : ""} ${this.props.focused ? "focused" : ""}`, onClick: () => this.props.cell ? this.props.showDetails(this.props.cell) : null },
                React.createElement("div", { className: "v-VerdantPanel-Summary-table-row-name" }, sampler_1.Namer.getCellShortTitle(this.props.cell)),
                React.createElement("div", { className: "v-VerdantPanel-Summary-table-row-version" }, sampler_1.Namer.getVersionNumberLabel((_a = this.props.cell) === null || _a === void 0 ? void 0 : _a.version)),
                React.createElement("div", { className: "v-VerdantPanel-Summary-table-row-sample", dangerouslySetInnerHTML: { __html: this.state.sample } })),
            this.showOutput()));
    }
    showOutput() {
        var _a;
        if (this.props.output) {
            return (React.createElement("div", { className: `v-VerdantPanel-Summary-table-row o ${this.props.focused ? "focused" : ""}`, onClick: () => this.props.output ? this.props.showDetails(this.props.output) : null },
                React.createElement("div", { className: "v-VerdantPanel-Summary-table-row-name o" },
                    React.createElement("div", { className: "v-VerdantPanel-Summary-table-row-outputLabel" }, "out")),
                React.createElement("div", { className: "v-VerdantPanel-Summary-table-row-version" }, sampler_1.Namer.getVersionNumberLabel((_a = this.props.output) === null || _a === void 0 ? void 0 : _a.version)),
                React.createElement("div", { className: "v-VerdantPanel-Summary-table-row-sample", dangerouslySetInnerHTML: { __html: this.state.output_sample } })));
        }
        return null;
    }
}
exports.Row = Row;
const mapStateToProps = (state, ownProps) => {
    const history = state.getHistory();
    const cellDat = state.cellArtifacts[ownProps.cell_index];
    const cell = history.store.get(cellDat.name);
    let output;
    if (cell instanceof nodey_1.NodeyCode) {
        let outputHist = history.store.getOutput(cell);
        if (outputHist)
            output = outputHist.latest;
    }
    return {
        history,
        cell,
        output,
    };
};
exports.SummaryRow = react_redux_1.connect(mapStateToProps)(Row);


/***/ }),

/***/ "./lib/verdant-ui/panel/summary/summary-table.js":
/*!*******************************************************!*\
  !*** ./lib/verdant-ui/panel/summary/summary-table.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
const redux_1 = __webpack_require__(/*! ../../redux/ */ "./lib/verdant-ui/redux/index.js");
const summary_row_1 = __webpack_require__(/*! ./summary-row */ "./lib/verdant-ui/panel/summary/summary-row.js");
class SummaryTable extends React.Component {
    render() {
        return (React.createElement("div", { className: "v-VerdantPanel-content" },
            this.showHeader(),
            React.createElement("div", { className: "v-VerdantPanel-Summary-table" }, this.showTable())));
    }
    showHeader() {
        return (React.createElement("div", { className: "v-VerdantPanel-Summary-header" },
            React.createElement("div", { className: "v-VerdantPanel-Summary-header-label cell" }, "cell"),
            React.createElement("div", { className: "v-VerdantPanel-Summary-header-label r" },
                React.createElement("b", null, "revision")),
            React.createElement("div", { className: "v-VerdantPanel-Summary-header-label preview" }, "preview")));
    }
    showTable() {
        return this.props.cells.map((c, index) => {
            return (React.createElement(summary_row_1.SummaryRow, { cell_index: index, focused: this.props.focused_cell === index, showDetails: this.props.showDetails, key: c.name + "_" + index }));
        });
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showDetails: (n) => {
            dispatch(redux_1.showDetailOfNode(n));
        },
    };
};
const mapStateToProps = (state) => {
    return {
        history: state.getHistory(),
        cells: state.cellArtifacts,
        notebook: state.notebookArtifact,
        artifact_count: state.cellArtifacts.length,
        focused_cell: state.focusedCell,
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SummaryTable);


/***/ }),

/***/ "./lib/verdant-ui/redux/index.js":
/*!***************************************!*\
  !*** ./lib/verdant-ui/redux/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./viewStates/events */ "./lib/verdant-ui/redux/viewStates/events.js"), exports);
__exportStar(__webpack_require__(/*! ./viewStates/ghost */ "./lib/verdant-ui/redux/viewStates/ghost.js"), exports);
__exportStar(__webpack_require__(/*! ./notebook */ "./lib/verdant-ui/redux/notebook.js"), exports);
__exportStar(__webpack_require__(/*! ./state */ "./lib/verdant-ui/redux/state.js"), exports);
__exportStar(__webpack_require__(/*! ./viewStates/artifact-pane */ "./lib/verdant-ui/redux/viewStates/artifact-pane.js"), exports);
__exportStar(__webpack_require__(/*! ./viewStates/search */ "./lib/verdant-ui/redux/viewStates/search.js"), exports);
var event_bundles_1 = __webpack_require__(/*! ./viewStates/event-bundles */ "./lib/verdant-ui/redux/viewStates/event-bundles.js");
Object.defineProperty(exports, "Bundles", ({ enumerable: true, get: function () { return event_bundles_1.Bundles; } }));


/***/ }),

/***/ "./lib/verdant-ui/redux/notebook.js":
/*!******************************************!*\
  !*** ./lib/verdant-ui/redux/notebook.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.notebookReducer = exports.notebookStateInitialState = exports.focusCell = void 0;
const events_1 = __webpack_require__(/*! ./viewStates/events */ "./lib/verdant-ui/redux/viewStates/events.js");
const FOCUS_CELL = "FOCUS_CELL";
exports.focusCell = (cell_index) => {
    return {
        type: FOCUS_CELL,
        cell_index,
    };
};
exports.notebookStateInitialState = () => {
    return {
        focusedCell: null,
        cellArtifacts: [],
        notebookArtifact: null,
    };
};
exports.notebookReducer = (state, action) => {
    switch (action.type) {
        case FOCUS_CELL:
            return Object.assign(Object.assign({}, state), { focusedCell: action.cell_index });
        case events_1.INIT_EVENT_MAP:
        case events_1.UPDATE_CHECKPOINT:
            // both of these cases require an update of notebook as well as event view
            return Object.assign(Object.assign({}, state), { cellArtifacts: _cellReducer(state.getHistory()), notebookArtifact: _notebookReducer(state.getHistory()) });
        default:
            return state;
    }
};
function _cellReducer(history) {
    var _a;
    let cellList = [];
    (_a = history.notebook) === null || _a === void 0 ? void 0 : _a.cells.forEach((cell) => {
        var _a, _b;
        let name = (_a = cell === null || cell === void 0 ? void 0 : cell.model) === null || _a === void 0 ? void 0 : _a.name;
        let outputVer = 0;
        if (cell.output) {
            let latestOut = history.store.getLatestOf(cell.output);
            if (latestOut)
                outputVer = latestOut.version;
        }
        let ver = (_b = cell.model) === null || _b === void 0 ? void 0 : _b.version;
        if (name && ver !== undefined)
            cellList.push({ name, ver, outputVer });
    });
    return cellList; // returns an empty list in error case
}
function _notebookReducer(history) {
    var _a, _b, _c, _d;
    const version = (_b = (_a = history === null || history === void 0 ? void 0 : history.notebook) === null || _a === void 0 ? void 0 : _a.model) === null || _b === void 0 ? void 0 : _b.version;
    if (version === undefined || ((_c = history === null || history === void 0 ? void 0 : history.notebook) === null || _c === void 0 ? void 0 : _c.name) === undefined)
        return null; // error case only
    return { name: "", ver: version, file: (_d = history.notebook) === null || _d === void 0 ? void 0 : _d.name };
}


/***/ }),

/***/ "./lib/verdant-ui/redux/state.js":
/*!***************************************!*\
  !*** ./lib/verdant-ui/redux/state.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.verdantReducer = exports.createInitialState = exports.ActiveTab = exports.showEvent = exports.showDetailOfNode = exports.switchTab = exports.setGhostOpener = void 0;
const ghost_1 = __webpack_require__(/*! ./viewStates/ghost */ "./lib/verdant-ui/redux/viewStates/ghost.js");
const events_1 = __webpack_require__(/*! ./viewStates/events */ "./lib/verdant-ui/redux/viewStates/events.js");
const notebook_1 = __webpack_require__(/*! ./notebook */ "./lib/verdant-ui/redux/notebook.js");
const artifact_pane_1 = __webpack_require__(/*! ./viewStates/artifact-pane */ "./lib/verdant-ui/redux/viewStates/artifact-pane.js");
const search_1 = __webpack_require__(/*! ./viewStates/search */ "./lib/verdant-ui/redux/viewStates/search.js");
const wishbone_1 = __webpack_require__(/*! ../panel/details/wishbone */ "./lib/verdant-ui/panel/details/wishbone.js");
const SET_GHOST_OPENER = "SET_GHOST_OPENER";
const SWITCH_TAB = "SWITCH_TAB";
const INSPECT_TARGET = "INSPECT_TARGET";
const GOTO_EVENT = "GOTO_EVENT";
exports.setGhostOpener = (fun) => {
    return {
        type: SET_GHOST_OPENER,
        fun,
    };
};
exports.switchTab = (name) => {
    return {
        type: SWITCH_TAB,
        tab: name,
    };
};
exports.showDetailOfNode = (target) => {
    return {
        type: INSPECT_TARGET,
        target,
    };
};
exports.showEvent = (event) => {
    return { type: GOTO_EVENT, event };
};
var ActiveTab;
(function (ActiveTab) {
    ActiveTab[ActiveTab["Events"] = 0] = "Events";
    ActiveTab[ActiveTab["Artifacts"] = 1] = "Artifacts";
    ActiveTab[ActiveTab["Artifact_Details"] = 2] = "Artifact_Details";
    ActiveTab[ActiveTab["Search"] = 3] = "Search";
})(ActiveTab = exports.ActiveTab || (exports.ActiveTab = {}));
exports.createInitialState = (getHistory) => {
    return Object.assign({ getHistory: getHistory, openGhostBook: (_) => { }, eventView: events_1.eventsInitialState(), activeTab: ActiveTab.Events, artifactView: artifact_pane_1.artifactPaneInitialState(), search: search_1.searchInitialState(), ghostBook: ghost_1.ghostInitialState() }, notebook_1.notebookStateInitialState());
};
exports.verdantReducer = (state, action) => {
    switch (action.type) {
        case SET_GHOST_OPENER:
            return Object.assign(Object.assign({}, state), { openGhostBook: action.fun });
        case SWITCH_TAB:
            let artifact_state = Object.assign({}, state.artifactView);
            // ensure inspect interaction is turned off when switching tab
            if (state.artifactView.inspectOn) {
                wishbone_1.Wishbone.endWishbone(state.getHistory().notebook);
                artifact_state.inspectOn = false;
            }
            // if transitioning from detail to summary, cancel the current inspect target
            if (state.activeTab === ActiveTab.Artifact_Details &&
                action.tab === ActiveTab.Artifacts) {
                artifact_state = artifact_pane_1.artifactPaneInitialState();
            }
            // if transitioning to detail view, double-check there's a valid target
            if (action.tab === ActiveTab.Artifact_Details &&
                !artifact_state.inspectTarget) {
                action.tab = state.activeTab;
                if (state.activeTab === ActiveTab.Artifact_Details)
                    action.tab = ActiveTab.Artifacts;
            }
            return Object.assign(Object.assign({}, state), { activeTab: action.tab, artifactView: artifact_state });
        case INSPECT_TARGET:
            wishbone_1.Wishbone.endWishbone(state.getHistory().notebook);
            // showing details of a target will open the artifact detail view
            if (action.target)
                return Object.assign(Object.assign({}, state), { activeTab: ActiveTab.Artifact_Details, artifactView: Object.assign(Object.assign({}, state.artifactView), { inspectTarget: action.target, inspectOn: false, showingDetail: true, selectedArtifactDetail: action.target.name }) });
            // otherwise, if there is no target, don't show detail view
            else {
                let tab = state.activeTab;
                if (tab === ActiveTab.Artifact_Details)
                    tab = ActiveTab.Artifacts;
                return Object.assign(Object.assign({}, state), { activeTab: tab, artifactView: artifact_pane_1.artifactPaneInitialState() });
            }
        case events_1.INIT_EVENT_MAP:
            return Object.assign(Object.assign({}, notebook_1.notebookReducer(state, action)), { eventView: events_1.eventReducer(state, action) });
        case events_1.UPDATE_CHECKPOINT:
            // both of these cases require an update of notebook as well as event view
            let state_1 = notebook_1.notebookReducer(state, action);
            return Object.assign(Object.assign({}, state_1), { eventView: events_1.eventReducer(state_1, action) });
        case GOTO_EVENT:
            let tab = ActiveTab.Events;
            return Object.assign(Object.assign({}, state), { activeTab: tab });
        default:
            let state_ev = notebook_1.notebookReducer(state, action);
            return Object.assign(Object.assign({}, state_ev), { eventView: events_1.eventReducer(state_ev, action), search: search_1.searchReducer(state_ev, action), artifactView: artifact_pane_1.artifactReducer(state_ev, action), ghostBook: ghost_1.ghostReduce(state_ev, action) });
    }
};


/***/ }),

/***/ "./lib/verdant-ui/redux/viewStates/artifact-pane.js":
/*!**********************************************************!*\
  !*** ./lib/verdant-ui/redux/viewStates/artifact-pane.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.artifactReducer = exports.artifactPaneInitialState = exports.selectArtifactDetail = exports.closePair = exports.openPair = exports.inspectOff = exports.inspectOn = void 0;
const wishbone_1 = __webpack_require__(/*! ../../panel/details/wishbone */ "./lib/verdant-ui/panel/details/wishbone.js");
const INSPECT_ON = "INSPECT_ON";
const INSPECT_OFF = "INSPECT_OFF";
const OPEN_PAIR = "OPEN_PAIR";
const CLOSE_PAIR = "CLOSE_PAIR";
const SELECT_ARTIFACT_DETAIL = "SELECT_ARTIFACT_DETAIL";
exports.inspectOn = () => {
    return {
        type: INSPECT_ON,
    };
};
exports.inspectOff = () => {
    return {
        type: INSPECT_OFF,
    };
};
exports.openPair = (primaryNode) => {
    return {
        type: OPEN_PAIR,
        primaryNode,
    };
};
exports.closePair = (primaryNode) => {
    return {
        type: CLOSE_PAIR,
        primaryNode,
    };
};
exports.selectArtifactDetail = (name) => {
    return {
        type: SELECT_ARTIFACT_DETAIL,
        name,
    };
};
exports.artifactPaneInitialState = () => {
    return {
        showingDetail: false,
        inspectOn: false,
        inspectTarget: null,
        openDetailPairs: [],
        selectedArtifactDetail: null,
    };
};
exports.artifactReducer = (state, action) => {
    const artifactState = state.artifactView;
    switch (action.type) {
        case INSPECT_ON:
            if (!artifactState.inspectOn) {
                wishbone_1.Wishbone.startWishbone(state.getHistory());
            }
            return Object.assign(Object.assign({}, artifactState), { inspectOn: true });
        case INSPECT_OFF:
            if (artifactState.inspectOn)
                wishbone_1.Wishbone.endWishbone(state.getHistory().notebook);
            return Object.assign(Object.assign({}, artifactState), { inspectOn: false });
        case OPEN_PAIR:
            let openDetailPairs = state.artifactView.openDetailPairs;
            openDetailPairs.push(action.primaryNode);
            return Object.assign(Object.assign({}, artifactState), { openDetailPairs });
        case CLOSE_PAIR:
            let closeDetailPairs = state.artifactView.openDetailPairs;
            closeDetailPairs = closeDetailPairs.filter((item) => item !== action.primaryNode);
            return Object.assign(Object.assign({}, artifactState), { openDetailPairs: closeDetailPairs });
        case SELECT_ARTIFACT_DETAIL:
            return Object.assign(Object.assign({}, artifactState), { selectedArtifactDetail: action.name });
        default:
            return artifactState;
    }
};


/***/ }),

/***/ "./lib/verdant-ui/redux/viewStates/event-bundles.js":
/*!**********************************************************!*\
  !*** ./lib/verdant-ui/redux/viewStates/event-bundles.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bundles = void 0;
const checkpoint_1 = __webpack_require__(/*! ../../../verdant-model/checkpoint */ "./lib/verdant-model/checkpoint/index.js");
var Bundles;
(function (Bundles) {
    Bundles.bundleInitialState = () => {
        return { isOpen: false, bundleEvents: [], bundleTargets: [] };
    };
    /*
     * CONDITIONS TO BUNDLE EVENTS
     * 1. occur within the same time bound
     * 2. notebooks A and B don't have conflicting cells at the same index
     * 3. no events have conflicting events for the same cell
     */
    const MAX_INTERVAL = 300000; // Max bundle time interval in milliseconds
    // compute bundles for all events in the list
    function computeBundles(event_list, history) {
        let bundle_list = [];
        for (let i = 0; i < event_list.length; i++) {
            bundle_list = bundleEvent(i, event_list, bundle_list, history);
        }
        return bundle_list;
    }
    Bundles.computeBundles = computeBundles;
    // add just one event to bundles
    function bundleEvent(event_idx, event_list, bundle_list, history) {
        const newEvent = checkpoint_1.Checkpoint.fromJSON(event_list[event_idx].toJSON()); // verify immutability
        const newTargetCells = calcTargetCellNotebookIndex(newEvent, history);
        const latestBundle = bundle_list[0];
        if (latestBundle) {
            const lastEvent = event_list[latestBundle === null || latestBundle === void 0 ? void 0 : latestBundle.bundleEvents[0]];
            // 1) time bound check
            let interval = (newEvent === null || newEvent === void 0 ? void 0 : newEvent.timestamp) - (lastEvent === null || lastEvent === void 0 ? void 0 : lastEvent.timestamp);
            if (interval && interval <= MAX_INTERVAL) {
                // 2+3) check compatibility of events
                let zippedTargets = zipTargets(newTargetCells, latestBundle.bundleTargets);
                if (zippedTargets) {
                    // OK to combine to latest bundle
                    latestBundle.bundleEvents.unshift(event_idx);
                    latestBundle.bundleTargets = zippedTargets;
                    bundle_list[0] = latestBundle;
                    return bundle_list;
                }
            }
        }
        // Conditions to bundle failed. Add this event to its own new bundle
        let newBundle = {
            isOpen: false,
            bundleEvents: [event_idx],
            bundleTargets: newTargetCells,
        };
        bundle_list.unshift(newBundle);
        return bundle_list;
    }
    Bundles.bundleEvent = bundleEvent;
    function updateBundleForEvent(event_idx, event_list, bundle_list, history) {
        let event = checkpoint_1.Checkpoint.fromJSON(event_list[event_idx].toJSON()); // verify immutability
        // first find the bundle that contains this event
        let bundle_idx = bundle_list.findIndex((bundle) => bundle.bundleEvents.includes(event_idx));
        if (bundle_idx > -1) {
            let targetCells = calcTargetCellNotebookIndex(event, history);
            let bundle = bundle_list[bundle_idx];
            let zippedTargets = targetCells;
            // check that this event still works with its current bundle
            let compatible = bundle.bundleEvents.every((ev) => {
                let bundled_event = event_list[ev];
                // skip this one
                if (bundled_event && event_idx !== ev) {
                    let targets = calcTargetCellNotebookIndex(bundled_event, history);
                    zippedTargets = zipTargets(zippedTargets, targets);
                    return zippedTargets !== undefined;
                }
                else
                    return true; // compatible with yourself
            });
            if (compatible) {
                bundle.bundleTargets = zippedTargets;
                bundle_list[bundle_idx] = bundle;
            }
            // gotta kick out of this bundle
            else {
                // first get rid of this bundle since it no longer works
                if (bundle_idx === 0)
                    bundle_list.shift();
                else
                    bundle_list.splice(bundle_idx, 1);
                // recalculate all the bundles this one on, yuck
                for (let i = bundle.bundleEvents[bundle.bundleEvents.length - 1]; i < event_list.length; i++) {
                    bundle_list = bundleEvent(i, event_list, bundle_list, history);
                }
            }
        }
        return bundle_list;
    }
    Bundles.updateBundleForEvent = updateBundleForEvent;
    // returns a combination of A and B if they are compatible and undefined otherwise
    function zipTargets(A, B) {
        let zipped = [...A];
        // A and B can't contain competing changes to the same cell
        // A and B can't have different cells assigned to the same index
        let success = B.every((datB) => {
            let match = A === null || A === void 0 ? void 0 : A.findIndex((datA) => sameArtifact(datA.cell, datB.cell) || datA.index === datB.index);
            if (match !== undefined && match > -1) {
                // must be compatible on all dimensions
                return (sameArtifact(A[match].cell, datB.cell) &&
                    A[match].changeType === datB.changeType &&
                    A[match].index === datB.index);
            }
            else
                zipped.push(datB);
            return true;
        });
        return success ? zipped : undefined;
    }
    function calcTargetCellNotebookIndex(event, history) {
        const notebook_ver = event === null || event === void 0 ? void 0 : event.notebook;
        let notebook;
        if (notebook_ver !== undefined) {
            event.targetCells.forEach((runDat, i) => {
                var _a, _b;
                if (runDat.index === undefined) {
                    if (!notebook)
                        notebook = (_a = history === null || history === void 0 ? void 0 : history.store) === null || _a === void 0 ? void 0 : _a.getNotebook(notebook_ver);
                    let index = (_b = notebook === null || notebook === void 0 ? void 0 : notebook.cells) === null || _b === void 0 ? void 0 : _b.indexOf(runDat.cell);
                    if (index !== undefined)
                        event.targetCells[i].index = index;
                }
            });
        }
        return event.targetCells;
    }
})(Bundles = exports.Bundles || (exports.Bundles = {}));
function sameArtifact(nameA, nameB) {
    let artA = nameA.substring(0, nameA.lastIndexOf("."));
    let artB = nameB.substring(0, nameB.lastIndexOf("."));
    return artA === artB;
}


/***/ }),

/***/ "./lib/verdant-ui/redux/viewStates/events.js":
/*!***************************************************!*\
  !*** ./lib/verdant-ui/redux/viewStates/events.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.reducer_addEvent = exports.eventReducer = exports.eventsInitialState = exports.bundleClose = exports.bundleOpen = exports.dateClose = exports.dateOpen = exports.updateCheckpoint = exports.addEvent = exports.initEventMap = exports.UPDATE_CHECKPOINT = exports.INIT_EVENT_MAP = void 0;
const checkpoint_1 = __webpack_require__(/*! ../../../verdant-model/checkpoint */ "./lib/verdant-model/checkpoint/index.js");
const event_bundles_1 = __webpack_require__(/*! ./event-bundles */ "./lib/verdant-ui/redux/viewStates/event-bundles.js");
exports.INIT_EVENT_MAP = "INIT_EVENT_MAP";
exports.UPDATE_CHECKPOINT = "UPDATE_CHECKPOINT";
const ADD_EVENT = "ADD_EVENT";
const DATE_EXPAND = "DATE_EXPAND";
const SAVE_BUNDLES = "SAVE_BUNDLES";
const BUNDLE_EXPAND = "BUNDLE_EXPAND";
exports.initEventMap = () => ({
    type: exports.INIT_EVENT_MAP,
});
exports.addEvent = (ev) => ({
    type: ADD_EVENT,
    event: ev,
});
exports.updateCheckpoint = (event) => {
    return {
        type: exports.UPDATE_CHECKPOINT,
        currentEvent: event,
    };
};
exports.dateOpen = (date) => {
    return {
        type: DATE_EXPAND,
        date: date,
        open: true,
    };
};
exports.dateClose = (date) => {
    return {
        type: DATE_EXPAND,
        date: date,
        open: false,
    };
};
exports.bundleOpen = (date, bundle) => {
    return {
        type: BUNDLE_EXPAND,
        date: date,
        bundle_id: bundle,
        open: true,
    };
};
exports.bundleClose = (date, bundle) => {
    return {
        type: BUNDLE_EXPAND,
        date: date,
        bundle_id: bundle,
        open: false,
    };
};
exports.eventsInitialState = () => {
    return { ready: false, dates: [], currentEvent: null };
};
exports.eventReducer = (state, action) => {
    const eventView = state.eventView;
    switch (action.type) {
        case exports.INIT_EVENT_MAP:
            if (eventView.dates.length < 2)
                return {
                    dates: reducer_initEventMap(state),
                    currentEvent: getInitialEvent(state.getHistory()),
                    ready: true,
                };
            else
                return eventView;
        case exports.UPDATE_CHECKPOINT:
            if (action.currentEvent != eventView.currentEvent) {
                return Object.assign(Object.assign({}, eventView), { currentEvent: action.currentEvent, dates: reducer_addEvent(action.currentEvent, eventView.dates, state.getHistory()) });
            }
            else {
                // check if we need to update the mini map/bundle for currentEvent
                let latestDate = eventView.dates[eventView.dates.length - 1];
                if (latestDate) {
                    let latest = latestDate.events.length - 1;
                    let bundles = event_bundles_1.Bundles.updateBundleForEvent(latest, latestDate.events, latestDate.bundles, state.getHistory());
                    eventView.dates[eventView.dates.length - 1].bundles = bundles;
                }
                return eventView;
            }
        case ADD_EVENT:
            return Object.assign(Object.assign({}, eventView), { dates: reducer_addEvent(action.ev, [...eventView.dates], state.getHistory()) });
        case DATE_EXPAND:
            const updatedElement = Object.assign(Object.assign({}, eventView.dates[action.date]), { isOpen: action.open });
            if (action.open === true && updatedElement.bundles.length < 1)
                updatedElement.bundles = event_bundles_1.Bundles.computeBundles(updatedElement.events, state.getHistory());
            return Object.assign(Object.assign({}, eventView), { dates: [
                    ...eventView.dates.slice(0, action.date),
                    updatedElement,
                    ...eventView.dates.slice(action.date + 1),
                ] });
        case SAVE_BUNDLES:
            const updatedBundles = Object.assign(Object.assign({}, eventView.dates[action.date]), { bundles: action.bundles });
            return Object.assign(Object.assign({}, eventView), { dates: [
                    ...eventView.dates.slice(0, action.date),
                    updatedBundles,
                    ...eventView.dates.slice(action.date + 1),
                ] });
        case BUNDLE_EXPAND:
            const bundleStates = eventView.dates[action.date].bundles;
            bundleStates[action.bundle_id].isOpen = action.open;
            const updatedDate = Object.assign(Object.assign({}, eventView.dates[action.date]), { bundleStates: bundleStates });
            return Object.assign(Object.assign({}, eventView), { dates: [
                    ...eventView.dates.slice(0, action.date),
                    updatedDate,
                    ...eventView.dates.slice(action.date + 1),
                ] });
        default:
            return eventView;
    }
};
function reducer_addEvent(newEvent, date_list, history) {
    var _a;
    /*
     * first if event is obviously corrupt, ignore it!
     */
    if (newEvent.notebook === undefined ||
        newEvent.id === undefined ||
        ((_a = newEvent.targetCells) === null || _a === void 0 ? void 0 : _a.length) < 1)
        return;
    let time = newEvent.timestamp;
    let currentDate = date_list[date_list.length - 1];
    let date;
    let idx;
    if (!currentDate || !checkpoint_1.Checkpoint.sameDay(time, currentDate.date)) {
        // new date
        let today = Date.now();
        let newDate = {
            isOpen: checkpoint_1.Checkpoint.sameDay(today, time),
            date: time,
            events: [newEvent],
            bundles: [],
        };
        date_list.push(newDate);
        date = newDate;
        idx = 0;
    }
    else {
        // to avoid duplicates, first verify that this event has not already been added
        let latest = currentDate.events[currentDate.events.length - 1];
        if (latest.id !== newEvent.id) {
            idx = currentDate.events.push(newEvent) - 1;
            date = currentDate;
        }
    }
    // now add newEvent to bundles of the chosen date
    if (date === null || date === void 0 ? void 0 : date.isOpen)
        date.bundles = event_bundles_1.Bundles.bundleEvent(idx, date.events, date.bundles, history);
    return date_list;
}
exports.reducer_addEvent = reducer_addEvent;
function reducer_initEventMap(state) {
    let dates = [];
    state
        .getHistory()
        .checkpoints.all()
        .forEach((event) => reducer_addEvent(event, dates, state.getHistory()));
    return dates;
}
function getInitialEvent(history) {
    let checkpoints = history.checkpoints.all();
    return checkpoints[checkpoints.length - 1];
}


/***/ }),

/***/ "./lib/verdant-ui/redux/viewStates/ghost.js":
/*!**************************************************!*\
  !*** ./lib/verdant-ui/redux/viewStates/ghost.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ghostReduce = exports.ghostInitialState = exports.changeDiffType = exports.scrollToGhostCell = exports.focusGhostCell = exports.closeGhostBook = exports.initGhostBook = void 0;
const sampler_1 = __webpack_require__(/*! ../../../verdant-model/sampler */ "./lib/verdant-model/sampler/index.js");
const INIT_GHOSTBOOK = "INIT_GHOSTBOOK";
const SWITCH_GHOST_CELL = "SWITCH_GHOST_CELL";
const SCROLL_TO_CELL = "SCROLL_TO_CELL";
const CHANGE_DIFF_TYPE = "CHANGE_DIFF_TYPE";
const CLOSE_GHOSTBOOK = "CLOSE_GHOSTBOOK";
exports.initGhostBook = (state) => {
    return {
        type: INIT_GHOSTBOOK,
        state,
    };
};
exports.closeGhostBook = () => {
    return {
        type: CLOSE_GHOSTBOOK,
    };
};
exports.focusGhostCell = (cell_name) => {
    return {
        type: SWITCH_GHOST_CELL,
        cell: cell_name,
    };
};
exports.scrollToGhostCell = (cell_name) => {
    return {
        type: SCROLL_TO_CELL,
        cell: cell_name,
    };
};
exports.changeDiffType = (diff) => {
    return {
        type: CHANGE_DIFF_TYPE,
        diff,
    };
};
exports.ghostInitialState = () => {
    return {
        notebook_ver: -1,
        active_cell: undefined,
        scroll_focus: undefined,
        diff: sampler_1.DIFF_TYPE.CHANGE_DIFF,
        link_artifact: undefined,
        changeGhostTitle: undefined,
    };
};
exports.ghostReduce = (state, action) => {
    const ghost = state.ghostBook;
    switch (action.type) {
        case INIT_GHOSTBOOK: {
            return Object.assign(Object.assign({}, ghost), action.state);
        }
        case CLOSE_GHOSTBOOK:
            return Object.assign(Object.assign({}, ghost), { notebook_ver: -1 });
        case SWITCH_GHOST_CELL:
            return Object.assign(Object.assign({}, ghost), { active_cell: action.cell });
        case SCROLL_TO_CELL:
            return Object.assign(Object.assign({}, ghost), { scroll_focus: action.cell, active_cell: action.cell });
        case CHANGE_DIFF_TYPE:
            return Object.assign(Object.assign({}, ghost), { diff: action.diff });
        default:
            return ghost;
    }
};


/***/ }),

/***/ "./lib/verdant-ui/redux/viewStates/search.js":
/*!***************************************************!*\
  !*** ./lib/verdant-ui/redux/viewStates/search.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.searchReducer = exports.searchInitialState = exports.closeResults = exports.openResults = exports.searchForText = void 0;
const SEARCH_FOR = "SEARCH_FOR";
const OPEN_RESULTS = "OPEN_RESULTS";
const CLOSE_RESULTS = "CLOSE_RESULTS";
exports.searchForText = (query) => {
    return {
        type: SEARCH_FOR,
        query,
    };
};
exports.openResults = (label) => {
    return { type: OPEN_RESULTS, label };
};
exports.closeResults = (label) => {
    return { type: CLOSE_RESULTS, label };
};
exports.searchInitialState = () => {
    return {
        searchQuery: null,
        searchResults: [],
        openResults: [],
    };
};
exports.searchReducer = (state, action) => {
    let search_state = state.search;
    switch (action.type) {
        case SEARCH_FOR:
            return Object.assign(Object.assign({}, search_state), { searchQuery: action.query, openResults: [], searchResults: search(action.query, state.getHistory()) });
        case OPEN_RESULTS:
            let openLabels = search_state.openResults;
            const mainLabels = ["code cell", "output", "markdown cell"];
            if (mainLabels.includes(action.label))
                openLabels = openLabels.filter((l) => !mainLabels.includes(l));
            openLabels.push(action.label);
            return Object.assign(Object.assign({}, search_state), { openResults: openLabels });
        case CLOSE_RESULTS:
            let closeLabels = search_state.openResults;
            closeLabels = closeLabels.filter((l) => l != action.label);
            return Object.assign(Object.assign({}, search_state), { openResults: closeLabels });
        default:
            return state.search;
    }
};
function search(query, history) {
    var _a;
    query = query === null || query === void 0 ? void 0 : query.trim();
    if (query && query.length > 0)
        return (_a = history === null || history === void 0 ? void 0 : history.store) === null || _a === void 0 ? void 0 : _a.search(query);
    return [];
}


/***/ }),

/***/ "./lib/verdant-ui/verdant-notebook.js":
/*!********************************************!*\
  !*** ./lib/verdant-ui/verdant-notebook.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VerdantNotebook = void 0;
const notebook_1 = __webpack_require__(/*! ../verdant-model/notebook */ "./lib/verdant-model/notebook.js");
const redux_1 = __webpack_require__(/*! ./redux/ */ "./lib/verdant-ui/redux/index.js");
const signaling_1 = __webpack_require__(/*! @lumino/signaling */ "webpack/sharing/consume/default/@lumino/signaling");
class VerdantNotebook extends notebook_1.VerNotebook {
    constructor(history, ast, notebookArea, store, logger) {
        super(history, ast, notebookArea);
        this.store = store;
        this.logger = logger;
        this.logger.setNotebook(this);
        // connect to keep inspect up to date in model and UI side
        history.ready.then(() => __awaiter(this, void 0, void 0, function* () {
            // wait until notebook is loaded
            yield history.notebook.ready;
            // signal to load event map UI data
            this.store.dispatch(redux_1.initEventMap());
            // connect to make sure inspector works with redux store
            history.inspector.target.changed().connect((_, nodey) => {
                this.store.dispatch(redux_1.showDetailOfNode(nodey));
            });
        }));
    }
    dispose() {
        // clear any event listener connections on shutdown
        signaling_1.Signal.clearData(this);
        this.view.dispose();
    }
    handleNotebookEvent(event) {
        const _super = Object.create(null, {
            handleNotebookEvent: { get: () => super.handleNotebookEvent }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let checkpoint = yield _super.handleNotebookEvent.call(this, event);
            if (checkpoint === null || checkpoint === void 0 ? void 0 : checkpoint.notebook) {
                // check that the checkpoint was recorded
                this.store.dispatch(redux_1.updateCheckpoint(checkpoint));
                let eventType = event.constructor.name;
                if (eventType === "SaveNotebook")
                    this.logger.saveLog();
            }
            return checkpoint;
        });
    }
    focusCell(cell) {
        const _super = Object.create(null, {
            focusCell: { get: () => super.focusCell }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let verCell = _super.focusCell.call(this, cell);
            verCell.then((cell) => {
                if (cell) {
                    let index = this.cells.indexOf(cell);
                    this.store.dispatch(redux_1.focusCell(index));
                }
            });
            return verCell;
        });
    }
}
exports.VerdantNotebook = VerdantNotebook;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./style/activity.css":
/*!****************************!*\
  !*** ./style/activity.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_activity_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./activity.css */ "./node_modules/css-loader/dist/cjs.js!./style/activity.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_activity_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_activity_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_activity_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_activity_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_activity_css__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_activity_css__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_activity_css__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_activity_css__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ "./style/artifact-details.css":
/*!************************************!*\
  !*** ./style/artifact-details.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_artifact_details_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./artifact-details.css */ "./node_modules/css-loader/dist/cjs.js!./style/artifact-details.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_artifact_details_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_artifact_details_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_artifact_details_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_artifact_details_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_artifact_details_css__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_artifact_details_css__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_artifact_details_css__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_artifact_details_css__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ "./style/ghost.css":
/*!*************************!*\
  !*** ./style/ghost.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ghost_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./ghost.css */ "./node_modules/css-loader/dist/cjs.js!./style/ghost.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ghost_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ghost_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ghost_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_ghost_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_ghost_css__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_ghost_css__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_ghost_css__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_ghost_css__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ "./style/index.css":
/*!*************************!*\
  !*** ./style/index.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./style/index.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ "./style/landing.css":
/*!***************************!*\
  !*** ./style/landing.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_landing_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./landing.css */ "./node_modules/css-loader/dist/cjs.js!./style/landing.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_landing_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_landing_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_landing_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_landing_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_landing_css__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_landing_css__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_landing_css__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_landing_css__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ "./style/sampler.css":
/*!***************************!*\
  !*** ./style/sampler.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sampler_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./sampler.css */ "./node_modules/css-loader/dist/cjs.js!./style/sampler.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sampler_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_sampler_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_sampler_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_sampler_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_sampler_css__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_sampler_css__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_sampler_css__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_sampler_css__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ "./style/search.css":
/*!**************************!*\
  !*** ./style/search.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./search.css */ "./node_modules/css-loader/dist/cjs.js!./style/search.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ "./style/summary.css":
/*!***************************!*\
  !*** ./style/summary.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_summary_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./summary.css */ "./node_modules/css-loader/dist/cjs.js!./style/summary.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_summary_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_summary_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_summary_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_summary_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_summary_css__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_summary_css__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_summary_css__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_summary_css__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ "./style/verdant-panel.css":
/*!*********************************!*\
  !*** ./style/verdant-panel.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_verdant_panel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./verdant-panel.css */ "./node_modules/css-loader/dist/cjs.js!./style/verdant-panel.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_verdant_panel_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_verdant_panel_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_verdant_panel_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_verdant_panel_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_verdant_panel_css__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_verdant_panel_css__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_verdant_panel_css__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_verdant_panel_css__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ "./style/img/chevron-down.svg":
/*!************************************!*\
  !*** ./style/img/chevron-down.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='16' viewBox='0 0 10 16'%3E%3Cpath fill-rule='evenodd' d='M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z'/%3E%3C/svg%3E"

/***/ }),

/***/ "./style/img/chevron-right.svg":
/*!*************************************!*\
  !*** ./style/img/chevron-right.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg width='7px' height='10px' viewBox='0 0 7 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3Ctitle%3Echevron-right@3x%3C/title%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='chevron-right' fill='%23000000' fill-rule='nonzero'%3E %3Cpolygon id='Path' points='6.5 5 1.5 10 0 8.5 3.75 5 0 1.5 1.5 0'%3E%3C/polygon%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ "./style/img/ghost-book.svg":
/*!**********************************!*\
  !*** ./style/img/ghost-book.svg ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12.08 12.02'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%238ccced;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Eghost-book%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath class='cls-1' d='M9.06,9.65,7.81,8.08a.2.2,0,0,0-.26,0L6.17,9.85a.2.2,0,0,1-.26,0L4.53,8.08a.2.2,0,0,0-.26,0L3,9.65a.18.18,0,0,1-.33-.13V5.19A3.08,3.08,0,0,1,5.71,2h.66a3.09,3.09,0,0,1,3,3.15v4.4C9.39,9.72,9.19,9.78,9.06,9.65Z'/%3E%3Cpath class='cls-1' d='M11.1,1V11.1H1V1H11.1m1-1H0V12H12l.07-12Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./style/img/log-icon-4.svg?ba03":
/*!**********************************!*\
  !*** ./style/img/log-icon-4.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f3a0b123bd6444bc928ed88841f256aeaa42a8a46e055b315137ff42ccab76d.svg";

/***/ }),

/***/ "./style/img/search.svg":
/*!******************************!*\
  !*** ./style/img/search.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg width='17px' height='19px' viewBox='0 0 17 19' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3Ctitle%3Esearch%3C/title%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='search' fill='%23616161' fill-rule='nonzero'%3E %3Cpath d='M9.45,0.14 C11.2900692,0.502057921 12.9100569,1.58232732 13.9516132,3.14184676 C14.9931695,4.70136621 15.3704507,6.61160213 15,8.45 C14.6809649,10.0269313 13.8508239,11.3918435 12.7030657,12.3860197 L16.45,17.25 C16.7116681,17.6023224 16.6451556,18.0989487 16.3,18.37 C16.1673432,18.4704466 16.0063571,18.5264417 15.84,18.53 C15.5919917,18.5356794 15.3568205,18.4199603 15.21,18.22 L11.3905529,13.2862902 C10.4027829,13.8112218 9.28045668,14.1066888 8.1,14.11 L8.07,14.11 C7.59758253,14.1178881 7.12547846,14.0810573 6.66,14 C4.81912487,13.6314341 3.20128909,12.5438379 2.16509438,10.9782829 C1.12889966,9.41272781 0.759941004,7.49853672 1.14,5.66 C1.50892527,3.82545839 2.59206295,2.21284984 4.15078238,1.17745499 C5.7095018,0.142060133 7.61591069,-0.231167303 9.45,0.14 Z M8.05800168,1.59989624 L8.07,1.6 C7.00228063,1.60178564 5.95878273,1.91831333 5.07,2.51 C2.56748344,4.17654466 1.88733719,7.55490268 3.55,10.06 C4.77115019,11.8831309 6.96806954,12.7940999 9.12102323,12.3700664 C11.1970857,11.9611769 12.8402582,10.3881472 13.3482623,8.348511 L13.4,8.12 C13.9953647,5.17101523 12.0885732,2.29739985 9.14,1.7 C8.89996274,1.65828728 8.65794413,1.62952009 8.41499359,1.6137947 L8.05800168,1.59989624 Z' id='Combined-Shape'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ "./style/img/time-inspect.svg":
/*!************************************!*\
  !*** ./style/img/time-inspect.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg width='19px' height='18px' viewBox='0 0 19 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3Ctitle%3ECombined Shape%3C/title%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cpath d='M7,0 C10.8659932,0 14,3.13400675 14,7 C14,7.51269826 13.944881,8.01252279 13.8402454,8.49387111 L18.37,10.47 C18.6309687,10.5798756 18.7946889,10.8419457 18.7789823,11.1246657 C18.765239,11.3720456 18.6167185,11.5884961 18.3978969,11.6925329 L18.3,11.73 L14.61,12.85 C14.4539339,12.8967876 14.3213868,12.9984387 14.2356434,13.1344407 L14.19,13.22 L12.64,16.75 C12.5282797,17.0105376 12.264682,17.1725679 11.9817711,17.1546053 C11.734224,17.138888 11.5187739,16.9883404 11.4166113,16.768345 L11.38,16.67 L10.3276851,13.1599808 C9.33794224,13.6957782 8.20449852,14 7,14 C3.13400675,14 0,10.8659932 0,7 C0,3.13400675 3.13400675,0 7,0 Z M13.5,12.91 C13.6666911,12.5290602 13.9919759,12.2403242 14.39,12.12 L14.39,12.12 L17.88,11.06 L13.6404092,9.22071359 L9.37,7.37 L12,16.25 Z M7.50413922,3.5 L6.49661251,3.5 L6.49661251,7.12455903 L3.36227461,8.02118354 L3.63851485,8.97932853 L7.50413922,7.88280629 L7.50413922,3.5 Z' id='Combined-Shape' fill='%23616161' fill-rule='nonzero'%3E%3C/path%3E %3C/g%3E %3C/svg%3E"

/***/ })

}]);
//# sourceMappingURL=lib_index_js.8f41f6bf5ae919365b55.js.map