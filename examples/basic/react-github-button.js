/*! react-github-button.js v0.7.0 | (c) ehacke */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactGithubButton"] = factory(require("prop-types"), require("react"));
	else
		root["ReactGithubButton"] = factory(root["PropTypes"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/GithubButton.js":
/*!*****************************!*\
  !*** ./src/GithubButton.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GithubButton; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ \"./src/icons.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/styles.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar GithubButton = /*#__PURE__*/function (_PureComponent) {\n  _inherits(GithubButton, _PureComponent);\n\n  function GithubButton() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, GithubButton);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GithubButton)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      hovered: false\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"getStyle\", function (propStyles) {\n      var baseStyle = _this.props.type === 'dark' ? _styles__WEBPACK_IMPORTED_MODULE_3__[\"darkStyle\"] : _styles__WEBPACK_IMPORTED_MODULE_3__[\"lightStyle\"];\n\n      if (_this.state.hovered) {\n        return _objectSpread({}, baseStyle, {}, _styles__WEBPACK_IMPORTED_MODULE_3__[\"hoverStyle\"], {}, propStyles);\n      }\n\n      if (_this.props.disabled) {\n        return _objectSpread({}, baseStyle, {}, _styles__WEBPACK_IMPORTED_MODULE_3__[\"disabledStyle\"], {}, propStyles);\n      }\n\n      return _objectSpread({}, baseStyle, {}, propStyles);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"mouseOver\", function () {\n      if (!_this.props.disabled) {\n        _this.setState({\n          hovered: true\n        });\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"mouseOut\", function () {\n      if (!_this.props.disabled) {\n        _this.setState({\n          hovered: false\n        });\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"click\", function (e) {\n      if (!_this.props.disabled) {\n        _this.props.onClick(e);\n      }\n    });\n\n    return _this;\n  }\n\n  _createClass(GithubButton, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          label = _this$props.label,\n          style = _this$props.style,\n          otherProps = _objectWithoutProperties(_this$props, [\"label\", \"style\"]);\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", _extends({}, otherProps, {\n        role: \"button\",\n        onClick: this.click,\n        style: this.getStyle(style),\n        onMouseOver: this.mouseOver,\n        onMouseOut: this.mouseOut\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__[\"GithubIcon\"], this.props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, label));\n    }\n  }]);\n\n  return GithubButton;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n_defineProperty(GithubButton, \"propTypes\", {\n  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['light', 'dark']),\n  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n});\n\n_defineProperty(GithubButton, \"defaultProps\", {\n  label: 'Sign in with Github',\n  disabled: false,\n  type: 'dark',\n  tabIndex: 0,\n  onClick: function onClick() {}\n});\n\n\n\n//# sourceURL=webpack://ReactGithubButton/./src/GithubButton.js?");

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! exports provided: GithubIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GithubIcon\", function() { return GithubIcon; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/styles.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar svg = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n  version: \"1.2\",\n  baseProfile: \"tiny\",\n  id: \"Layer_1\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  x: \"0px\",\n  y: \"0px\",\n  viewBox: \"0 0 2350 2314.8\",\n  xmlSpace: \"preserve\",\n  style: _styles__WEBPACK_IMPORTED_MODULE_2__[\"svgStyle\"]\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n  d: \"M1175,0C525.8,0,0,525.8,0,1175c0,552.2,378.9,1010.5,890.1,1139.7c-5.9-14.7-8.8-35.3-8.8-55.8v-199.8H734.4 c-79.3,0-152.8-35.2-185.1-99.9c-38.2-70.5-44.1-179.2-141-246.8c-29.4-23.5-5.9-47,26.4-44.1c61.7,17.6,111.6,58.8,158.6,120.4 c47,61.7,67.6,76.4,155.7,76.4c41.1,0,105.7-2.9,164.5-11.8c32.3-82.3,88.1-155.7,155.7-190.9c-393.6-47-581.6-240.9-581.6-505.3 c0-114.6,49.9-223.3,132.2-317.3c-26.4-91.1-61.7-279.1,11.8-352.5c176.3,0,282,114.6,308.4,143.9c88.1-29.4,185.1-47,284.9-47 c102.8,0,196.8,17.6,284.9,47c26.4-29.4,132.2-143.9,308.4-143.9c70.5,70.5,38.2,261.4,8.8,352.5c82.3,91.1,129.3,202.7,129.3,317.3 c0,264.4-185.1,458.3-575.7,499.4c108.7,55.8,185.1,214.4,185.1,331.9V2256c0,8.8-2.9,17.6-2.9,26.4 C2021,2123.8,2350,1689.1,2350,1175C2350,525.8,1824.2,0,1175,0L1175,0z\"\n}));\nvar disabledSvg = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n  version: \"1.2\",\n  baseProfile: \"tiny\",\n  id: \"Layer_1\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  x: \"0px\",\n  y: \"0px\",\n  viewBox: \"0 0 2350 2314.8\",\n  xmlSpace: \"preserve\",\n  style: _styles__WEBPACK_IMPORTED_MODULE_2__[\"disabledSvgStyle\"]\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n  d: \"M1175,0C525.8,0,0,525.8,0,1175c0,552.2,378.9,1010.5,890.1,1139.7c-5.9-14.7-8.8-35.3-8.8-55.8v-199.8H734.4 c-79.3,0-152.8-35.2-185.1-99.9c-38.2-70.5-44.1-179.2-141-246.8c-29.4-23.5-5.9-47,26.4-44.1c61.7,17.6,111.6,58.8,158.6,120.4 c47,61.7,67.6,76.4,155.7,76.4c41.1,0,105.7-2.9,164.5-11.8c32.3-82.3,88.1-155.7,155.7-190.9c-393.6-47-581.6-240.9-581.6-505.3 c0-114.6,49.9-223.3,132.2-317.3c-26.4-91.1-61.7-279.1,11.8-352.5c176.3,0,282,114.6,308.4,143.9c88.1-29.4,185.1-47,284.9-47 c102.8,0,196.8,17.6,284.9,47c26.4-29.4,132.2-143.9,308.4-143.9c70.5,70.5,38.2,261.4,8.8,352.5c82.3,91.1,129.3,202.7,129.3,317.3 c0,264.4-185.1,458.3-575.7,499.4c108.7,55.8,185.1,214.4,185.1,331.9V2256c0,8.8-2.9,17.6-2.9,26.4 C2021,2123.8,2350,1689.1,2350,1175C2350,525.8,1824.2,0,1175,0L1175,0z\"\n}));\nvar GithubIcon = function GithubIcon(_ref) {\n  var disabled = _ref.disabled,\n      type = _ref.type;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: !disabled ? _styles__WEBPACK_IMPORTED_MODULE_2__[\"iconStyle\"] : _objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2__[\"iconStyle\"], {}, _styles__WEBPACK_IMPORTED_MODULE_2__[\"disabledIconStyle\"])\n  }, !disabled ? svg : disabledSvg);\n};\nGithubIcon.propTypes = {\n  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['light', 'dark'])\n};\nGithubIcon.defaultProps = {\n  type: 'dark'\n};\n\n//# sourceURL=webpack://ReactGithubButton/./src/icons.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: GithubButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GithubButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GithubButton */ \"./src/GithubButton.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GithubButton\", function() { return _GithubButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _GithubButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack://ReactGithubButton/./src/index.js?");

/***/ }),

/***/ "./src/styles.js":
/*!***********************!*\
  !*** ./src/styles.js ***!
  \***********************/
/*! exports provided: darkStyle, lightStyle, iconStyle, svgStyle, disabledSvgStyle, hoverStyle, disabledStyle, disabledIconStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkStyle\", function() { return darkStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightStyle\", function() { return lightStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iconStyle\", function() { return iconStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"svgStyle\", function() { return svgStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disabledSvgStyle\", function() { return disabledSvgStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hoverStyle\", function() { return hoverStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disabledStyle\", function() { return disabledStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disabledIconStyle\", function() { return disabledIconStyle; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar baseStyle = {\n  height: '50px',\n  width: '240px',\n  border: 'none',\n  textAlign: 'center',\n  verticalAlign: 'center',\n  boxShadow: '0 2px 4px 0 rgba(0,0,0,.25)',\n  fontSize: '16px',\n  lineHeight: '48px',\n  display: 'block',\n  borderRadius: '1px',\n  transition: 'background-color .218s, border-color .218s, box-shadow .218s',\n  fontFamily: 'Roboto,arial,sans-serif',\n  cursor: 'pointer',\n  userSelect: 'none'\n};\nvar darkStyle = _objectSpread({\n  backgroundColor: '#000000',\n  color: '#fff'\n}, baseStyle);\nvar lightStyle = _objectSpread({\n  backgroundColor: '#fff',\n  color: 'rgba(0,0,0,.54)'\n}, baseStyle);\nvar iconStyle = {\n  width: '48px',\n  height: '48px',\n  justifyContent: 'center',\n  alignItems: 'center',\n  display: 'flex',\n  marginTop: '1px',\n  marginLeft: '1px',\n  float: 'left',\n  backgroundColor: '#fff',\n  borderRadius: '1px',\n  whiteSpace: 'nowrap'\n};\nvar svgStyle = {\n  width: '24px',\n  height: '24px',\n  display: 'block'\n};\nvar disabledSvgStyle = {\n  width: '24px',\n  height: '24px',\n  display: 'block',\n  fill: 'rgba(0, 0, 0, .40)'\n};\nvar hoverStyle = {\n  boxShadow: '0 0 3px 3px rgba(66,133,244,.3)',\n  transition: 'background-color .218s, border-color .218s, box-shadow .218s'\n}; // export const pressedStyle = {\n//   backgroundColor: '#3367D6'\n// }\n\nvar disabledStyle = {\n  backgroundColor: 'rgba(37, 5, 5, .08)',\n  color: 'rgba(0, 0, 0, .40)',\n  cursor: 'not-allowed'\n};\nvar disabledIconStyle = {\n  backgroundColor: 'transparent'\n};\n\n//# sourceURL=webpack://ReactGithubButton/./src/styles.js?");

/***/ }),

/***/ "prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types","root":"PropTypes"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://ReactGithubButton/external_%7B%22commonjs%22:%22prop-types%22,%22commonjs2%22:%22prop-types%22,%22amd%22:%22prop-types%22,%22root%22:%22PropTypes%22%7D?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://ReactGithubButton/external_%7B%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22amd%22:%22react%22,%22root%22:%22React%22%7D?");

/***/ })

/******/ });
});
