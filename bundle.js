/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ ((module) => {



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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background: radial-gradient(circle, rgb(87, 55, 112) 0%, rgb(54, 65, 117) 100%);\n}\n\n.turing-logo {\n  max-width: 100%;\n  max-height: 50%;\n  min-inline-size: 5%;\n}\n\nheader {\n  padding: 40px;\n  /* padding-bottom: 80px; */\n  color: #090808;\n  display: flex;\n  height: 2px;\n  background-color: rgb(181, 201, 251);\n  border: 3px solid rgb(70, 115, 252);\n  align-items: center;\n  justify-content: space-between;\n\n}\n\n.logo-container {\n  display: flex;\n  height: 90px;\n  margin-top: 30px;\n}\n\n.reservations {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  background-color: rgb(207, 209, 249);\n  border: 3px solid rgb(70, 115, 252);\n  justify-content: center;\n}\n.login-area{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    background-color: rgb(207, 209, 249);\n    border: 3px solid rgb(70, 115, 252);\n    justify-content: space-around;\n  \n}\n\n.prev-reservation-area {\n  /* border: 1px solid rgb(70, 115, 252); */\n  border-top: 3px solid rgb(70, 115, 252);\n  /* border-bottom: 3px solid rgb(70, 115, 252); */\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-between;\n  background-color: rgb(207, 209, 249);\n  text-align: center;\n  min-width: 100%;\n}\n.input-container{\n  display:block;\n  flex-direction: row;\n  width: 410px;\n  padding-left: 5px;\n  border-radius: 5px;\n  background-color: rgb(207, 209, 249);\n\n}\n\n.price-area {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  padding-right: 30px;\n  background-color: rgb(169, 238, 242);\n  text-align: center;\n  border-left: 3px solid rgb(70, 115, 252);\n  border-right: 3px solid rgb(70, 115, 252);\n  border-bottom: 3px solid rgb(70, 115, 252);\n  justify-content:left;\n  padding-left:35px;\n\n}\n.price-zone{\n  padding-left:15px;\n}\n\n.search-area {\n  display: flex;\n}\n\n.result-class {\n  display: inline-flex;\n  justify-content: space-between;\n}\n\n.search-results {\n  display: grid;\n  /* flex-wrap: nowrap; */\n  /* flex-direction: column; */\n  padding-right: 30px;\n  background-color: rgb(152, 159, 197);\n}\n\n.book-button {\n  border-radius: 10px;\n  margin-left: 5px;\n  width: 90px;\n  background-color: rgb(160, 204, 255);\n  border: 1.5px solid white;\n}\n\n.reservation-class {\n  min-width: 325px;\n  background-color: rgb(202, 222, 243);\n  padding-left: 5px;\n  padding-right: 5px;\n  justify-content: left;\n  text-align: left;\n}\n\n\n\n.search-lable {\n  font-weight: 700;\n  background-color: rgba(0, 0, 0.5);\n  color: white;\n  padding: 5px;\n  font-size: 15px;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);\n}\n\n.input-bar {\n  border-radius: 5px;\n  border: none;\n  width: 250px;\n  font-size: medium;\n  background-color: rgb(160, 204, 255);\n  border: 2px solid rgb(211, 233, 255);\n}\n\n.input-bar::placeholder {\n  text-align: center;\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n\n.input-bar-save {\n  border-radius: 5px;\n  border: none;\n  width: 250px;\n  font-size: smaller;\n  background-color: rgb(160, 204, 255);\n  border: 2px solid rgb(211, 233, 255);\n}\n\n.search-bar:hover::placeholder {\n  opacity: 0;\n}\n\n.search-button {\n  border-radius: 10px;\n  width: 90px;\n  background-color: rgb(160, 204, 255);\n  border: 1.5px solid white;\n}\n\n.search-button:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.search-button:active {\n  transform: scale(0.95);\n}\n\n\n/* TEMP STUFF */\n/* Dropdown Button */\n.dropbtn {\n  background-color: #002136;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n/* Dropdown button on hover & focus */\n.dropbtn:hover,\n.dropbtn:focus {\n  background-color: #160139;\n}\n\n/* The container <div> - needed to position the dropdown content */\n.dropdown {\n  position: relative;\n  display: inline-block;\n  margin-bottom: 60px;\n\n}\n\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  display: none;\n\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 200px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 5px;\n}\n\n.filter {\n  margin: 5px\n}\n\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: none;\n}\n\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {\n  background-color: #ddd;\n}\n\n/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\n.show {\n  display: flex;\n}\n.hidden{\n  display:none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  background: radial-gradient(circle, rgb(87, 55, 112) 0%, rgb(54, 65, 117) 100%);\n}\n\n.turing-logo {\n  max-width: 100%;\n  max-height: 50%;\n  min-inline-size: 5%;\n}\n\nheader {\n  padding: 40px;\n  /* padding-bottom: 80px; */\n  color: #090808;\n  display: flex;\n  height: 2px;\n  background-color: rgb(181, 201, 251);\n  border: 3px solid rgb(70, 115, 252);\n  align-items: center;\n  justify-content: space-between;\n\n}\n\n.logo-container {\n  display: flex;\n  height: 90px;\n  margin-top: 30px;\n}\n\n.reservations {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  background-color: rgb(207, 209, 249);\n  border: 3px solid rgb(70, 115, 252);\n  justify-content: center;\n}\n.login-area{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    background-color: rgb(207, 209, 249);\n    border: 3px solid rgb(70, 115, 252);\n    justify-content: space-around;\n  \n}\n\n.prev-reservation-area {\n  /* border: 1px solid rgb(70, 115, 252); */\n  border-top: 3px solid rgb(70, 115, 252);\n  /* border-bottom: 3px solid rgb(70, 115, 252); */\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-between;\n  background-color: rgb(207, 209, 249);\n  text-align: center;\n  min-width: 100%;\n}\n.input-container{\n  display:block;\n  flex-direction: row;\n  width: 410px;\n  padding-left: 5px;\n  border-radius: 5px;\n  background-color: rgb(207, 209, 249);\n\n}\n\n.price-area {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  padding-right: 30px;\n  background-color: rgb(169, 238, 242);\n  text-align: center;\n  border-left: 3px solid rgb(70, 115, 252);\n  border-right: 3px solid rgb(70, 115, 252);\n  border-bottom: 3px solid rgb(70, 115, 252);\n  justify-content:left;\n  padding-left:35px;\n\n}\n.price-zone{\n  padding-left:15px;\n}\n\n.search-area {\n  display: flex;\n}\n\n.result-class {\n  display: inline-flex;\n  justify-content: space-between;\n}\n\n.search-results {\n  display: grid;\n  /* flex-wrap: nowrap; */\n  /* flex-direction: column; */\n  padding-right: 30px;\n  background-color: rgb(152, 159, 197);\n}\n\n.book-button {\n  border-radius: 10px;\n  margin-left: 5px;\n  width: 90px;\n  background-color: rgb(160, 204, 255);\n  border: 1.5px solid white;\n}\n\n.reservation-class {\n  min-width: 325px;\n  background-color: rgb(202, 222, 243);\n  padding-left: 5px;\n  padding-right: 5px;\n  justify-content: left;\n  text-align: left;\n}\n\n\n\n.search-lable {\n  font-weight: 700;\n  background-color: rgba(0, 0, 0.5);\n  color: white;\n  padding: 5px;\n  font-size: 15px;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);\n}\n\n.input-bar {\n  border-radius: 5px;\n  border: none;\n  width: 250px;\n  font-size: medium;\n  background-color: rgb(160, 204, 255);\n  border: 2px solid rgb(211, 233, 255);\n}\n\n.input-bar::placeholder {\n  text-align: center;\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n\n.input-bar-save {\n  border-radius: 5px;\n  border: none;\n  width: 250px;\n  font-size: smaller;\n  background-color: rgb(160, 204, 255);\n  border: 2px solid rgb(211, 233, 255);\n}\n\n.search-bar:hover::placeholder {\n  opacity: 0;\n}\n\n.search-button {\n  border-radius: 10px;\n  width: 90px;\n  background-color: rgb(160, 204, 255);\n  border: 1.5px solid white;\n}\n\n.search-button:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.search-button:active {\n  transform: scale(0.95);\n}\n\n\n/* TEMP STUFF */\n/* Dropdown Button */\n.dropbtn {\n  background-color: #002136;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n/* Dropdown button on hover & focus */\n.dropbtn:hover,\n.dropbtn:focus {\n  background-color: #160139;\n}\n\n/* The container <div> - needed to position the dropdown content */\n.dropdown {\n  position: relative;\n  display: inline-block;\n  margin-bottom: 60px;\n\n}\n\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  display: none;\n\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 200px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 5px;\n}\n\n.filter {\n  margin: 5px\n}\n\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: none;\n}\n\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {\n  background-color: #ddd;\n}\n\n/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\n.show {\n  display: flex;\n}\n.hidden{\n  display:none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/turing-logo.png");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bookingData: () => (/* binding */ bookingData),
/* harmony export */   bookingsPromise: () => (/* binding */ bookingsPromise),
/* harmony export */   currentCustomer: () => (/* binding */ currentCustomer),
/* harmony export */   customerPromise: () => (/* binding */ customerPromise),
/* harmony export */   handleBookings: () => (/* binding */ handleBookings),
/* harmony export */   handleCustomers: () => (/* binding */ handleCustomers),
/* harmony export */   handleRooms: () => (/* binding */ handleRooms),
/* harmony export */   loggedIn: () => (/* binding */ loggedIn),
/* harmony export */   postBooking: () => (/* binding */ postBooking),
/* harmony export */   roomsPromise: () => (/* binding */ roomsPromise),
/* harmony export */   setCustomer: () => (/* binding */ setCustomer),
/* harmony export */   testPostBooking: () => (/* binding */ testPostBooking),
/* harmony export */   updateInfo: () => (/* binding */ updateInfo)
/* harmony export */ });

var customerPromise = fetch("http://localhost:3001/api/v1/customers").then((response) => response.json());
var roomsPromise = fetch("http://localhost:3001/api/v1/rooms").then((response) => response.json());
var bookingsPromise = fetch("http://localhost:3001/api/v1/bookings").then((response) => response.json());
var firstCustomerPromise = fetch("http://localhost:3001/api/v1/customers/1").then((response) => response.json());

let currentCustomer;
let customerList = [];
let bookingData;
let roomData;
let loggedIn;

const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
};

const handleCustomers = (response) => {
    customerList = response[0].customers;
}

const handleRooms = (response) => {
    roomData = response[0].rooms;
}

const handleBookings = (response) => {
    bookingData = response;
}

const setLoggedIn = () => {
    loggedIn = true;
}

const setCurrentCustomer = (response) => {
    console.log(currentCustomer)
    currentCustomer = response;
    console.log(currentCustomer)
}

function setCustomer(response, username, password) {
    customerList = response[0].customers;
    var customerIDVal = username.replaceAll("customer", "");
    console.log(customerIDVal)
    console.log(customerList[customerIDVal - 1])
    if (((customerList[customerIDVal - 1]) !== undefined) && (password === "overlook2021")) {
        console.log('Goes in')
        var customerData = fetch(`http://localhost:3001/api/v1/customers/${customerIDVal}`).then((response) => response.json());
        setCurrentCustomer(customerData);
        setLoggedIn();
    }
    else {
        alert("ERROR: your username or password has the correct format, but does not appear to be in our databases. Please try again.")
        return;
    }
}


function postBooking(date, customerID, roomNumber, receivedBookings) {
    if (!receivedBookings.includes(receivedBookings.filter((values) => (values.date === date) && (values.userID === customerID) && (values.roomNumber === roomNumber)))) {
        fetch('http://localhost:3001/api/v1/bookings', {
            method: 'POST',
            body: JSON.stringify({
                userID: customerID,
                date: date,
                roomNumber: roomNumber,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log('ERROR: ', err));
    }
    else {
        alert("ERROR, this booking doesn't actually seem to be available!")
    }
}

function testPostBooking(date, customerID, roomNumber, receivedBookings) {
    if (receivedBookings.filter((values) => (values.date === date) && (values.roomNumber === roomNumber)).length === 0) {
        return (`Successfully (would've) posted a booking with a date of ${date}, a customer ID of ${customerID}, and a room number of ${roomNumber}. Additionally, this booking was not already in the received bookings.`)
    }
    else {
        return `ERROR, this booking doesn't actually seem to be available! Room number ${roomNumber} is already booked for ${date}.`
    }
}

const updateInfo = () => {
    customerPromise = fetch("http://localhost:3001/api/v1/customers").then((response) => response.json())
    roomsPromise = fetch("http://localhost:3001/api/v1/rooms").then((response) => response.json())
    bookingsPromise = fetch("http://localhost:3001/api/v1/bookings").then((response) => response.json())
    firstCustomerPromise = fetch("http://localhost:3001/api/v1/customers/1").then((response) => response.json())
}




/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bookRoom: () => (/* binding */ bookRoom),
/* harmony export */   bookRoomTestSuite: () => (/* binding */ bookRoomTestSuite),
/* harmony export */   currentBookings: () => (/* binding */ currentBookings),
/* harmony export */   currentFilter: () => (/* binding */ currentFilter),
/* harmony export */   findFreeRooms: () => (/* binding */ findFreeRooms),
/* harmony export */   hasSpent: () => (/* binding */ hasSpent),
/* harmony export */   setDataVals: () => (/* binding */ setDataVals),
/* harmony export */   setFilter: () => (/* binding */ setFilter)
/* harmony export */ });
/* harmony import */ var _apiCaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

Promise.all([_apiCaller__WEBPACK_IMPORTED_MODULE_0__.bookingsPromise]).then((values) => { (0,_apiCaller__WEBPACK_IMPORTED_MODULE_0__.handleBookings)(values) });
Promise.all([_apiCaller__WEBPACK_IMPORTED_MODULE_0__.customerPromise]).then((values) => { (0,_apiCaller__WEBPACK_IMPORTED_MODULE_0__.handleCustomers)(values) });
Promise.all([_apiCaller__WEBPACK_IMPORTED_MODULE_0__.roomsPromise]).then((values) => { (0,_apiCaller__WEBPACK_IMPORTED_MODULE_0__.handleRooms)(values) });
let receivedBookings;
let receivedCustomers;
let receivedRooms;
let currentFilter;


async function setDataVals() {
    receivedBookings = (await _apiCaller__WEBPACK_IMPORTED_MODULE_0__.bookingsPromise).bookings;
    receivedCustomers = (await _apiCaller__WEBPACK_IMPORTED_MODULE_0__.customerPromise).customers;
    receivedRooms = (await _apiCaller__WEBPACK_IMPORTED_MODULE_0__.roomsPromise).rooms;

    return [receivedBookings, receivedCustomers, receivedRooms];

}
const currentBookings = (customerID, receivedBookingsData) => {
    var userBookings = receivedBookingsData.filter((values) => (values.userID === customerID));
    return userBookings
}

const hasSpent = (userID, receivedBookingsData, receivedRoomsData) => {
    if (typeof userID !== 'number' || typeof receivedBookingsData !== 'object' || typeof receivedRoomsData !== 'object') {
        console.log("UserID:" + userID + " ReceivedBookingsData:" + receivedBookingsData + " ReceivedRoomsData:" + receivedRoomsData)
        return ("ERROR: One or more of the input parameters were not of the correct type.")
    }
    var totalSpent = 0;
    var userBookedRooms = receivedBookingsData.filter((values) => (values.userID === userID));
    var timesPaidFor = {};
    var roomsPaidFor = userBookedRooms.map((room) => room.roomNumber);
    for (const roomNum of roomsPaidFor) {
        timesPaidFor[roomNum] = timesPaidFor[roomNum] ? timesPaidFor[roomNum] + 1 : 1;
    }
    for (const roomNum of roomsPaidFor) {
        var roomCost = receivedRoomsData.find((room) => room.number === roomNum).costPerNight;
        totalSpent += roomCost;
    }
    return totalSpent;
}

const findFreeRooms = (date, currentFilter = null, unbookedRooms) => {
    if (isNaN(new Date(date))) {
        return ("ERROR: " + date + " is an invalid date.");
    }
    var tempForFilter;
    tempForFilter = unbookedRooms;
    if (currentFilter !== null) {
        tempForFilter = unbookedRooms.filter((room) => room.roomType === currentFilter);
    }
    return tempForFilter;
}

async function bookRoom() {
    var numHolder = this.roomNum;
    var currentDateSelection = this.currDate;
    var bookings = this.bookings;
    if (isNaN(new Date(currentDateSelection))) {
        console.log("Error with date")
        return ("ERROR: " + currentDateSelection + " is an invalid date.");
    }
    if (typeof numHolder !== 'number' || typeof (await _apiCaller__WEBPACK_IMPORTED_MODULE_0__.currentCustomer).id !== 'number') {
        console.log("Error with type of numHolder or currentCustomer.id")
        return ("ERROR: One or both of the room number " + numHolder + " or the customer ID " + _apiCaller__WEBPACK_IMPORTED_MODULE_0__.currentCustomer.id + " are not valid numbers.")
    }
    await _apiCaller__WEBPACK_IMPORTED_MODULE_0__.currentCustomer
    ;(0,_apiCaller__WEBPACK_IMPORTED_MODULE_0__.postBooking)(currentDateSelection, (await _apiCaller__WEBPACK_IMPORTED_MODULE_0__.currentCustomer).id, numHolder, bookings);
    alert('Booking Info Submitted!');
    (0,_apiCaller__WEBPACK_IMPORTED_MODULE_0__.updateInfo)();
    return "booked";
}

function bookRoomTestSuite(roomNum, currDate, customerID, bookings) {
    var numHolder = roomNum;
    var currentDateSelection = currDate;
    var bookings = bookings;
    if (isNaN(new Date(currentDateSelection))) {
        return ("ERROR: " + currentDateSelection + " is an invalid date.");
    }
    if (typeof numHolder !== 'number' || typeof customerID !== 'number') {
        return ("ERROR: One or both of the room number " + numHolder + " or the customer ID " + customerID + " are not valid numbers.")
    }
    return (0,_apiCaller__WEBPACK_IMPORTED_MODULE_0__.testPostBooking)(currentDateSelection, customerID, numHolder, bookings);
}

function setFilter() {
    currentFilter = this.filterVal;
}




/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiCaller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _functionCalls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);


const reservationArea = document.querySelector('.prev-reservation-area');
const userNameArea = document.querySelector('.username-display');
const priceZone = document.querySelector('.price-zone');
const searchRoomsButton = document.querySelector('.search-button');
const searchResults = document.querySelector('.search-results');
const filterShowButton = document.querySelector('.dropbtn');
const filterButtonSingle = document.querySelector('.filter-type-single');
const filterButtonJunior = document.querySelector('.filter-type-junior');
const filterButtonSuite = document.querySelector('.filter-type-suite');
const filterButtonResidential = document.querySelector('.filter-type-residential');
const filterButtonNone = document.querySelector('.filter-type-none');
const loginButton = document.querySelector('.login-button')
const feedback = document.querySelector('.feedback');

const pageTop = document.querySelector('.page-top');
const reservations = document.querySelector('.reservations');
const prices = document.querySelector('.price-area');
const inputContainer = document.querySelector('.input-container');
const dropDown = document.querySelector('.dropdown')
const loginArea = document.querySelector('.login-area');

filterButtonSingle.filterVal = 'single room';
filterButtonJunior.filterVal = 'junior suite';
filterButtonSuite.filterVal = 'suite';
filterButtonResidential.filterVal = 'residential suite';
filterButtonNone.filterVal = null;

let receivedBookings;
let receivedCustomers;
let receivedRooms;
let received;
let currentDateSelection;

async function getLoginInfo() {
    await updater();
    var username = document.querySelector('.username-bar').value;
    var password = document.querySelector('.password-bar').value;
    if (username.indexOf("customer") === -1) {
        feedback.innerHTML = "Your Username does not appear to be in the correct format. Try again?";
        return false;
    }
    Promise.all([_apiCaller_js__WEBPACK_IMPORTED_MODULE_0__.customerPromise]).then((values) => { (0,_apiCaller_js__WEBPACK_IMPORTED_MODULE_0__.setCustomer)(values, username, password) })
    await (_apiCaller_js__WEBPACK_IMPORTED_MODULE_0__.currentCustomer);
    await new Promise(r => setTimeout(r, 10));
    if (_apiCaller_js__WEBPACK_IMPORTED_MODULE_0__.loggedIn === true) {
        pageTop.classList.toggle('hidden')
        reservations.classList.toggle('hidden')
        prices.classList.toggle('hidden')
        inputContainer.classList.toggle('hidden')
        dropDown.classList.toggle('hidden')
        searchResults.classList.toggle('hidden')
        loginArea.classList.toggle('hidden')
        addEventListeners();
        setUserName();
        showBookedRooms();
        (0,_functionCalls_js__WEBPACK_IMPORTED_MODULE_1__.currentBookings)(_apiCaller_js__WEBPACK_IMPORTED_MODULE_0__.currentCustomer.id, _apiCaller_js__WEBPACK_IMPORTED_MODULE_0__.bookingData);
        cashSpent();
    }
}
loginButton.addEventListener('click', getLoginInfo);

async function updater() {
    received = await (0,_functionCalls_js__WEBPACK_IMPORTED_MODULE_1__.setDataVals)();
    receivedBookings = received[0];
    receivedCustomers = received[1];
    receivedRooms = received[2];
}

async function showBookedRooms() {
    await updater()
    var bookingDisplayData = (0,_functionCalls_js__WEBPACK_IMPORTED_MODULE_1__.currentBookings)((await _apiCaller_js__WEBPACK_IMPORTED_MODULE_0__.currentCustomer).id, receivedBookings);
    reservationArea.innerHTML = null;
    bookingDisplayData.forEach(element => {
    reservationArea.innerHTML += (`<div class = "reservation-class reservation-for-customer-${element.userID}"> Reservation for room number ${element.roomNumber}, on ${element.date} </div>`);
    });

}
async function setUserName() {
    await updater()
    userNameArea.innerHTML = `<h1>${(await _apiCaller_js__WEBPACK_IMPORTED_MODULE_0__.currentCustomer).name}</h1>`;
}

async function cashSpent() {
    await updater();
    var tempCust = (await _apiCaller_js__WEBPACK_IMPORTED_MODULE_0__.currentCustomer)
    var spentVal = ((0,_functionCalls_js__WEBPACK_IMPORTED_MODULE_1__.hasSpent)(tempCust.id, receivedBookings, receivedRooms));
    priceZone.innerHTML = `<h4>${spentVal.toFixed(2)} spent on rooms so far.</h4>`;
}

async function userInput() {
    const input = document.getElementById('searchInput').value;
    var freeRooms;
    await updater();
    var bookedAlready = receivedBookings.filter((values) => (values.date === input)).map((room) => room.roomNumber);
    var unbookedRooms = receivedRooms.filter((room) => !bookedAlready.includes(room.number))
    freeRooms = await (0,_functionCalls_js__WEBPACK_IMPORTED_MODULE_1__.findFreeRooms)(input, _functionCalls_js__WEBPACK_IMPORTED_MODULE_1__.currentFilter, unbookedRooms);
    await _apiCaller_js__WEBPACK_IMPORTED_MODULE_0__.currentCustomer;
    await new Promise(r => setTimeout(r, 10));
    currentDateSelection = input;
    var buttonArray = []
    searchResults.innerHTML = null;
    if (isNaN(new Date(currentDateSelection)) || currentDateSelection.length !== 10) {
        alert("Sorry, that doesn't seem to be a valid date, or you might have formatted it incorrectly. Please try again.")
        return ("ERROR: " + currentDateSelection + " is an invalid date.");
    }
    if (freeRooms.length === 0) {
        alert('We\'re so sorry! We currently do not have rooms available for that date. You might have better luck trying for a different day?');
    } else if (freeRooms === "ERROR") {
        alert("Sorry, that seems to be an invalid date!")
        return;
    }
    else {
        for (var i = 0; i < freeRooms.length; i++) {
            searchResults.innerHTML += `<div class = "result-class container-for-results-${freeRooms[i].number}"> The ${freeRooms[i].roomType} with room number ${freeRooms[i].number} is free on ${input}. 
            <button class="book-button book-button-${freeRooms[i].number}" id="book-${freeRooms[i].number}">Book</button>
            </div> `;
        }
        for (var i = 0; i < freeRooms.length; i++) {
            buttonArray[i] = document.querySelector(`.book-button-${freeRooms[i].number}`);
            buttonArray[i].roomNum = freeRooms[i].number;
            buttonArray[i].currDate = currentDateSelection;
            buttonArray[i].bookings = receivedBookings;
            buttonArray[i].addEventListener('click', _functionCalls_js__WEBPACK_IMPORTED_MODULE_1__.bookRoom);
            buttonArray[i].addEventListener('click', showBookedRooms);
            buttonArray[i].addEventListener('click', cashSpent);
            buttonArray[i].addEventListener('click', userInput);
        }
    };
};

const showFilterRoomType = () => {
    document.getElementById("filterDropDown").classList.toggle("show");
    document.getElementById("filterDropDown").classList.toggle("aria-expanded");
}

const addEventListeners = () => {
    filterShowButton.addEventListener('click', showFilterRoomType);
    searchRoomsButton.addEventListener('click', userInput);
    filterButtonSingle.addEventListener('click', _functionCalls_js__WEBPACK_IMPORTED_MODULE_1__.setFilter);
    filterButtonSingle.addEventListener('click', userInput);
    filterButtonJunior.addEventListener('click', _functionCalls_js__WEBPACK_IMPORTED_MODULE_1__.setFilter);
    filterButtonJunior.addEventListener('click', userInput);
    filterButtonSuite.addEventListener('click', _functionCalls_js__WEBPACK_IMPORTED_MODULE_1__.setFilter);
    filterButtonSuite.addEventListener('click', userInput);
    filterButtonResidential.addEventListener('click', _functionCalls_js__WEBPACK_IMPORTED_MODULE_1__.setFilter);
    filterButtonResidential.addEventListener('click', userInput);
    filterButtonNone.addEventListener('click', _functionCalls_js__WEBPACK_IMPORTED_MODULE_1__.setFilter);
    filterButtonNone.addEventListener('click', userInput);
}


/***/ })
/******/ 	]);
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _apiCaller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _functionCalls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _domUpdater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********



// An example of how you tell webpack to use a CSS (SCSS) file


// An example of how you tell webpack to use an image (also need to link to it in the index.html)







})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map