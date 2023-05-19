/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "body {\\n  margin: 0;\\n  font-family: \\"Haas Grot Text R Web\\", \\"Helvetica Neue\\", Helvetica, Arial, sans-serif;\\n  height: 100vh;\\n}\\n\\n.container {\\n  display: grid;\\n  grid-gap: 20px;\\n  grid-template-columns: 1fr 3fr;\\n}\\n\\n.opacity {\\n  display: none;\\n  position: absolute;\\n  height: 100vh;\\n  width: 100vw;\\n  background-color: black;\\n  opacity: 30%;\\n}\\n\\nheader {\\n  height: 8vh;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-around;\\n\\n  grid-column: 1 / 3;\\n}\\n\\n#addTodo {\\n  background-color: #004fce;;\\n  border-radius: 8px;\\n  border-style: none;\\n  color: white;\\n  box-sizing: border-box;\\n  cursor: pointer;\\n  display: inline-block;\\n  font-size: 14px;\\n  height: 40px;\\n  line-height: 20px;\\n  list-style: none;\\n  margin: 0;\\n  outline: none;\\n  padding: 10px 16px;\\n  position: relative;\\n  text-align: center;\\n  text-decoration: none;\\n  transition: color 100ms;\\n  vertical-align: baseline;\\n  user-select: none;\\n  -webkit-user-select: none;\\n  touch-action: manipulation;\\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 15px 0px;\\n}\\n\\n#addTodo:hover,\\n#addTodo:focus {\\n  background-color: #001942;\\n}\\n\\n[class^=\\"todo-\\"] {\\n  display: grid;\\n  grid-auto-columns: 9fr 1fr;\\n  grid-gap: 10px;\\n  grid-template-columns: auto;\\n  color: #4a4a4a;\\n  padding: 10px 16px;\\n  margin: 10px;\\n\\n  border-radius: 17px;\\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 15px 0px;\\n}\\n\\n.content {\\n  display: none;\\n  grid-column: 1 / 4;\\n\\n  font-size: 10pt;\\n  overflow: hidden;\\n}\\n\\n.title {\\n  cursor: pointer;\\n\\n  grid-column: 2 / 3;\\n  grid-row: 1;\\n\\n  font-size: 18px;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.title.done {\\n  text-decoration: line-through;\\n  color: #b1b1b1;\\n}\\n\\n.details {\\n  grid-column: 1 / 2;\\n\\n  font-size: 14px;\\n  color: #757575;\\n}\\n\\n.date {\\n  grid-column: 2 / 3;\\n\\n  color: #757575;\\n}\\n\\n.project {\\n  grid-column: 3 / 4;\\n}\\n\\nbutton#edit {\\n  grid-column: 3 / 4;\\n\\n  border: none;\\n  border-radius: 0.25rem;\\n  background: #8BC34A;\\n  color: white;\\n  padding: 5px;\\n  width: fit-content;\\n}\\n\\ninput[type=\\"checkbox\\"] {\\n  grid-column: 1 / 2;\\n  grid-row: 1;\\n  width: fit-content;\\n}\\n\\nform {\\n  display: none;\\n  justify-content: center;\\n\\n  background-color: white;\\n  border-radius: 15px;\\n  padding: 30px 80px;\\n\\n  position: absolute;\\n  width: 25vw;\\n  left: 50vw;\\n  margin-left: -12.5vw;\\n  top: 20vh;\\n}\\n\\n#editForm {\\n  display: none;\\n  justify-content: center;\\n\\n  background-color: white;\\n  border-radius: 15px;\\n  padding: 30px 80px;\\n\\n  position: absolute;\\n  width: 25vw;\\n  left: 50vw;\\n  margin-left: -12.5vw;\\n  top: 20vh;\\n}\\n\\ninput {\\n  display: flex;\\n  flex-wrap: wrap;\\n  flex: 1 1 10ch;\\n  margin: .5rem;\\n  width: 260px;\\n}\\n\\ninput, select {\\n  border: none;\\n  background: hsl(0 0% 93%);\\n  border-radius: .25rem;\\n  padding: .75rem 1rem;\\n}\\n\\nselect {\\n  margin: 0.5rem;\\n}\\n\\nbutton#submit, button#submitEdit {\\n  border: none;\\n  border-radius: .25rem;\\n  padding: .75rem 1rem;\\n  background: #8BC34A;\\n  color: white;\\n  margin: 8px;\\n}\\n\\nbutton#submit:hover {\\n  background: #486526;\\n}\\n\\ninput[type=\\"date\\" i] {\\n  font-family: \\"Haas Grot Text R Web\\", \\"Helvetica Neue\\", Helvetica, Arial, sans-serif;\\n  color: #757575;\\n}\\n\\n#closeBtn {\\n  position: absolute;\\n  top: 2%;\\n  right: 2%;\\n  background: #ffffff;\\n  color: black;\\n  border: none;\\n  font-size: 15px;\\n  font-weight: 100;\\n  width: 25px;\\n  height: 25px;\\n  border-radius: 100%;\\n  transition: 0.6s transform ease-in-out;\\n  outline: none;\\n}\\n\\n#closeBtn:hover {\\n  color: rgb(143, 143, 143)\\n}\\n\\n.todos {\\n  grid-column: 2 / 3;\\n}\\n\\n.projects {\\n  grid-column: 1 / 2;\\n\\n  margin: 10px;\\n  padding: 15px;\\n  border-radius: 17px;\\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 15px 0px;\\n}\\n\\n.projectTitle {\\n  font-size: 14px;\\n}\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?"
        );

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
        );

        /***/
      },

    /***/ "./src/display-controller.js":
      /*!***********************************!*\
  !*** ./src/display-controller.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  setUpPage() {\n    const wrapper = document.createElement('div');\n    wrapper.classList.add('wrapper');\n\n    const header = document.createElement('header');\n\n    const todoBtn = document.createElement('button');\n    todoBtn.setAttribute('id', 'addTodo');\n    todoBtn.innerHTML = 'Add todo';\n\n    header.appendChild(todoBtn);\n\n    const container = document.createElement('div');\n    container.classList.add('container');\n\n    const projects = document.createElement('div');\n    projects.classList.add('projects');\n\n    const todos = document.createElement('div');\n    todos.classList.add('todos');\n\n    const opacity = document.createElement('div');\n    opacity.classList.add('opacity');\n\n    document.body.appendChild(wrapper);\n    wrapper.appendChild(header);\n    wrapper.appendChild(container);\n    container.appendChild(opacity);\n    container.appendChild(projects);\n    container.appendChild(todos);\n    container.appendChild(this.todoForm());\n    container.appendChild(this.editForm());\n  },\n  editForm() {\n    const form = document.createElement('form');\n    form.setAttribute('id', 'editForm');\n\n    // Create an input element for Full Name\n    const title = document.createElement('input');\n    title.setAttribute('type', 'text');\n    title.setAttribute('name', 'editTitle');\n    title.setAttribute('placeholder', 'Title');\n\n    const details = document.createElement('input');\n    details.setAttribute('type', 'text');\n    details.setAttribute('name', 'editdetails');\n    details.setAttribute('placeholder', 'Details');\n\n    const dueDate = document.createElement('input');\n    dueDate.setAttribute('type', 'date');\n    dueDate.setAttribute('name', 'editDate');\n    dueDate.setAttribute('placeholder', 'Due date');\n\n    const project = document.createElement('input');\n    project.setAttribute('list', 'editProject');\n    project.setAttribute('placeholder', 'Choose project');\n\n    const projectList = document.createElement('datalist');\n    projectList.setAttribute('id', 'project');\n\n    const submit = document.createElement('button');\n    submit.setAttribute('type', 'submit');\n    submit.setAttribute('id', 'submitEdit');\n    submit.innerHTML = 'Submit';\n\n    const closeBtn = document.createElement('button');\n    closeBtn.setAttribute('id', 'closeBtn');\n    closeBtn.innerHTML = 'X';\n\n    form.appendChild(title);\n    form.appendChild(details);\n    form.appendChild(dueDate);\n    form.appendChild(project);\n    form.appendChild(projectList);\n    form.appendChild(submit);\n    form.appendChild(closeBtn);\n\n    return form;\n  },\n  todoForm() {\n    // Create a form dynamically\n    const form = document.createElement('form');\n    form.setAttribute('id', 'todoForm');\n\n    // Create an input element for Full Name\n    const title = document.createElement('input');\n    title.setAttribute('type', 'text');\n    title.setAttribute('name', 'title');\n    title.setAttribute('placeholder', 'Title');\n\n    const details = document.createElement('input');\n    details.setAttribute('type', 'text');\n    details.setAttribute('name', 'details');\n    details.setAttribute('placeholder', 'Details');\n\n    const dueDate = document.createElement('input');\n    dueDate.setAttribute('type', 'date');\n    dueDate.setAttribute('name', 'date');\n    dueDate.setAttribute('placeholder', 'Due date');\n\n    const project = document.createElement('input');\n    project.setAttribute('list', 'project');\n    project.setAttribute('placeholder', 'New project or select existing one');\n\n    const projectList = document.createElement('datalist');\n    projectList.setAttribute('id', 'project');\n\n    const submit = document.createElement('button');\n    submit.setAttribute('type', 'submit');\n    submit.setAttribute('id', 'submit');\n    submit.innerHTML = 'Submit';\n\n    const closeBtn = document.createElement('button');\n    closeBtn.setAttribute('id', 'closeBtn');\n    closeBtn.innerHTML = 'X';\n\n    form.appendChild(title);\n    form.appendChild(details);\n    form.appendChild(dueDate);\n    form.appendChild(project);\n    form.appendChild(projectList);\n    form.appendChild(submit);\n    form.appendChild(closeBtn);\n\n    return form;\n  },\n  allProjects(arr) {\n    const projects = document.getElementsByClassName('projects')[0];\n    const title = document.createElement('h3');\n    title.innerHTML = '🚀 Projects:';\n    projects.appendChild(title);\n\n    const projectList = document.getElementById('project');\n    if (arr.length > 0) {\n      arr.forEach((project, index) => {\n        if (!document.getElementsByClassName(`project-${index}`)[0]) {\n          const option = document.createElement('option');\n          option.setAttribute('value', `${project}`);\n\n          projectList.appendChild(option);\n\n          const projectCard = document.createElement('div');\n          projectCard.classList.add(`project-${index}`);\n          projects.appendChild(projectCard);\n\n          const projectTitle = document.createElement('div');\n          projectTitle.classList.add('projectTitle');\n          projectTitle.innerHTML = `${index + 1}. ${project}`;\n          projectCard.appendChild(projectTitle);\n        }\n      });\n    }\n  },\n  allTodos(arr) {\n    const todos = document.getElementsByClassName('todos')[0];\n    const title = document.createElement('h3');\n    title.innerHTML = 'Todo list:';\n    todos.appendChild(title);\n\n    if (arr.length > 0) {\n      arr.forEach((todo, index) => {\n        if (!document.getElementsByClassName(`todo-${index}`)[0]) {\n          const todoCard = document.createElement('div');\n          todoCard.classList.add(`todo-${index}`);\n          todos.appendChild(todoCard);\n\n          const edit = document.createElement('button');\n          edit.setAttribute('id', 'edit');\n          edit.setAttribute('value', `${index}`);\n          edit.innerHTML = 'edit';\n          todoCard.appendChild(edit);\n\n          const todoTitle = document.createElement('div');\n          todoTitle.classList.add('title');\n\n          todoTitle.innerHTML = `${todo.title}`;\n\n          const checkbox = document.createElement('input');\n          checkbox.setAttribute('type', 'checkbox');\n          checkbox.classList.add('default');\n          checkbox.setAttribute('value', `${index}`);\n          if (todo.completed) {\n            checkbox.checked = true;\n            todoTitle.classList.toggle('done');\n          }\n          todoCard.appendChild(checkbox);\n          todoCard.appendChild(todoTitle);\n\n          const content = document.createElement('div');\n          content.classList.add('content');\n          todoCard.appendChild(content);\n\n          const details = document.createElement('div');\n          details.classList.add('details');\n          details.innerHTML = `Details: ${todo.details}`;\n          content.appendChild(details);\n\n          const dueDate = document.createElement('div');\n          dueDate.classList.add('date');\n          dueDate.innerHTML = `Due date: ${todo.date}`;\n          content.appendChild(dueDate);\n\n          const project = document.createElement('div');\n          project.classList.add('project');\n          project.innerHTML = `Project: ${todo.project}`;\n          content.appendChild(project);\n\n          edit.addEventListener('click', () => {\n            const form = document.getElementById('editForm');\n            form.style.display = 'grid';\n\n            const title = document.querySelector('[name=editTitle]');\n            title.setAttribute('value', `${todo.title}`);\n            const details = document.querySelector('[name=editdetails]');\n            details.setAttribute('value', `${todo.details}`);\n            const date = document.querySelector('[name=editDate]');\n            date.setAttribute('value', `${todo.date}`);\n            const project = document.querySelector('[list=editProject]');\n            project.setAttribute('value', `${todo.project}`);\n\n            const opacity = document.getElementsByClassName('opacity')[0];\n            opacity.style.display = 'block';\n\n            const submitEdit = document.getElementById('submitEdit');\n            submitEdit.setAttribute('value', `${index}`);\n          });\n\n          title.addEventListener('click', function () {\n            this.classList.toggle('active');\n            const contentBox = this.nextElementSibling;\n            if (contentBox.style.display === 'grid') {\n              contentBox.style.display = 'none';\n            } else {\n              contentBox.style.display = 'grid';\n            }\n          });\n\n          checkbox.addEventListener('click', function () {\n            const contentBox = this.nextElementSibling;\n            contentBox.classList.toggle('done');\n          });\n        }\n      });\n    }\n  },\n  clear(parent) {\n    while (parent.firstChild) {\n      parent.removeChild(parent.firstChild);\n    }\n  },\n});\n\n\n//# sourceURL=webpack://todo-list/./src/display-controller.js?"
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-controller */ \"./src/display-controller.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n\n\n\n\nconst todos = JSON.parse(localStorage.getItem('todos')) || [];\n\nconst projects = (0,_todos__WEBPACK_IMPORTED_MODULE_2__.getProjects)(todos) || [];\n\n_display_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setUpPage();\n\nconst addTodoBtn = document.getElementById('addTodo');\naddTodoBtn.onclick = () => {\n  const form = document.getElementById('todoForm');\n  form.style.display = 'grid';\n  const opacity = document.getElementsByClassName('opacity')[0];\n  opacity.style.display = 'block';\n};\n\nconst closeBtn = document.querySelectorAll('#closeBtn');\ncloseBtn.forEach((button) => {\n  button.addEventListener('click', (e) => {\n    e.preventDefault();\n\n    const form = document.getElementById('todoForm');\n    form.style.display = 'none';\n    const editForm = document.getElementById('editForm');\n    editForm.style.display = 'none';\n    const opacity = document.getElementsByClassName('opacity')[0];\n    opacity.style.display = 'none';\n  });\n});\n\nconst todoContainer = document.getElementsByClassName('todos')[0];\nconst projectsContainer = document.getElementsByClassName('projects')[0];\n\nconst submitBtn = document.getElementById('submit');\nsubmitBtn.onclick = (e) => {\n  e.preventDefault();\n\n  const title = document.querySelector('[name=title]').value;\n  const details = document.querySelector('[name=details]').value;\n  const date = document.querySelector('[name=date]').value;\n  const project = document.querySelector('[list=project]').value;\n  const todo = (0,_todos__WEBPACK_IMPORTED_MODULE_2__.todoFactory)(title, details, date, project);\n\n  if (!projects.find((element) => element === project)) {\n    projects.push(project);\n  }\n\n  todos.push(todo);\n  localStorage.setItem('todos', JSON.stringify(todos));\n\n  _display_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clear(todoContainer);\n  _display_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clear(projectsContainer);\n  _display_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].allTodos(todos);\n  _display_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].allProjects((0,_todos__WEBPACK_IMPORTED_MODULE_2__.getProjects)(todos));\n\n  const form = document.getElementById('todoForm');\n  form.reset();\n  form.style.display = 'none';\n  const opacity = document.getElementsByClassName('opacity')[0];\n  opacity.style.display = 'none';\n};\n\nconst sumbitEditBtn = document.getElementById('submitEdit');\n\nsumbitEditBtn.addEventListener('click', function (e) {\n  e.preventDefault();\n\n  const title = document.querySelector('[name=editTitle]').value;\n  const details = document.querySelector('[name=editdetails]').value;\n  const date = document.querySelector('[name=editDate]').value;\n  const project = document.querySelector('[list=editProject]').value;\n\n  todos[this.value] = (0,_todos__WEBPACK_IMPORTED_MODULE_2__.todoFactory)(title, details, date, project);\n  localStorage.setItem('todos', JSON.stringify(todos));\n\n  const todo = todos[this.value];\n  projects[this.value] = project;\n\n  todo.title = title;\n  todo.details = details;\n  todo.date = date;\n  todo.project = project;\n\n  _display_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clear(todoContainer);\n  _display_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clear(projectsContainer);\n  _display_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].allTodos(todos);\n  _display_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].allProjects((0,_todos__WEBPACK_IMPORTED_MODULE_2__.getProjects)(todos));\n  const form = document.getElementById('editForm');\n  form.reset();\n  form.style.display = 'none';\n  const opacity = document.getElementsByClassName('opacity')[0];\n  opacity.style.display = 'none';\n});\n\nconst editBtn = document.getElementById('addTodo');\neditBtn.onclick = () => {\n  const form = document.getElementById('todoForm');\n  form.style.display = 'grid';\n  const opacity = document.getElementsByClassName('opacity')[0];\n  opacity.style.display = 'block';\n};\n\n_display_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].allTodos(todos);\n_display_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].allProjects(projects);\n\nconst checkboxes = document.querySelectorAll('input[type=checkbox]');\n\ncheckboxes.forEach((checkbox, index) => {\n  checkbox.addEventListener('click', () => {\n    (0,_todos__WEBPACK_IMPORTED_MODULE_2__.toggleCompleted)(todos, index);\n    localStorage.setItem('todos', JSON.stringify(todos));\n  });\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?"
        );

        /***/
      },

    /***/ "./src/todos.js":
      /*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "getProjects": () => (/* binding */ getProjects),\n/* harmony export */   "todoFactory": () => (/* binding */ todoFactory),\n/* harmony export */   "toggleCompleted": () => (/* binding */ toggleCompleted)\n/* harmony export */ });\nconst todoFactory = (title, details, date, project) => {\n\nreturn { title, details, date, project, completed: false };\n}\n\nconst getProjects = array => {\n  let projects = [];\n  array.forEach(element => {\n    projects.push(element.project)\n  });\n  const uniqProjects = [...new Set(projects)];\n\n  return uniqProjects;\n}\n\nconst toggleCompleted = (array, index) => {\n  array[index].completed = !array[index].completed;\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todos.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
