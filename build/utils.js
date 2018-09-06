(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("utils", [], factory);
	else if(typeof exports === 'object')
		exports["utils"] = factory();
	else
		root["utils"] = factory();
})(window, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./utils.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./core/createMap.js":
/*!***************************!*\
  !*** ./core/createMap.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction createMap(data, objKey) {\n  var map = {};\n  if ((typeof data === \"undefined\" ? \"undefined\" : _typeof(data)) === \"object\" && data instanceof Array) {\n    var i,\n        len = data.length;\n    for (i = 0; i < len; i++) {\n      var obj = data[i];\n      if (objKey) {\n        map[obj[objKey]] = obj;\n      } else {\n        map[i] = obj;\n      }\n    }\n  } else {\n    throw \"Required Array\";\n  }\n  return map;\n}\n\nexports.default = createMap;\n\n//# sourceURL=webpack://utils/./core/createMap.js?");

/***/ }),

/***/ "./core/deepClone.js":
/*!***************************!*\
  !*** ./core/deepClone.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _getProto = Object.getPrototypeOf,\n    _class2type = {},\n    _toString = _class2type.toString,\n    _hasOwn = _class2type.hasOwnProperty,\n    _fnToString = _hasOwn.toString,\n    _ObjectFunctionString = _fnToString.call(Object);\n\nfunction _isFunction(obj) {\n  // Support: Chrome <=57, Firefox <=52\n  // In some browsers, typeof returns \"function\" for HTML <object> elements\n  // (i.e., `typeof document.createElement( \"object\" ) === \"function\"`).\n  // We don't want to classify *any* DOM node as a function.\n  return typeof obj === \"function\" && typeof obj.nodeType !== \"number\";\n}\n\nfunction _isPlainObject(obj) {\n  var proto = void 0,\n      Ctor = void 0;\n\n  // Detect obvious negatives\n  if (!obj || _toString.call(obj) !== \"[object Object]\") {\n    return false;\n  }\n\n  proto = _getProto(obj);\n\n  // Objects with no prototype (e.g., `Object.create( null )`) are plain\n  if (!proto) {\n    return true;\n  }\n\n  // Objects with prototype are plain iff they were constructed by a global Object function\n  Ctor = _hasOwn.call(proto, \"constructor\") && proto.constructor;\n  return typeof Ctor === \"function\" && _fnToString.call(Ctor) === _ObjectFunctionString;\n}\n\n// creates deep copy of a object\nfunction deepCopy() {\n  var options = void 0,\n      name = void 0,\n      src = void 0,\n      copy = void 0,\n      copyIsArray = void 0,\n      clone = void 0,\n      i = 1,\n      target = arguments[0] || {},\n      length = arguments.length,\n      deep = true;\n\n  // Handle case when target is a string or something (possible in deep copy)\n  if ((typeof target === \"undefined\" ? \"undefined\" : _typeof(target)) !== \"object\" && !_isFunction(target)) {\n    target = {};\n  }\n\n  for (; i < length; i++) {\n    // Only deal with non-null/undefined values\n    if ((options = arguments[i]) != null) {\n      // Extend the base object\n      for (name in options) {\n        src = target[name];\n        copy = options[name];\n\n        // Prevent never-ending loop\n        if (target === copy) {\n          continue;\n        }\n\n        // Recurse if we're merging plain objects or arrays\n        if (copy && (_isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {\n          if (copyIsArray) {\n            copyIsArray = false;\n            clone = src && Array.isArray(src) ? src : [];\n          } else {\n            clone = src && _isPlainObject(src) ? src : {};\n          }\n\n          // Never move original objects, clone them\n          target[name] = deepCopy(clone, copy);\n\n          // Don't bring in undefined values\n        } else if (copy !== undefined) {\n          target[name] = copy;\n        }\n      }\n    }\n  }\n\n  // Return the modified object\n  return target;\n}\n\nexports.default = deepCopy;\n\n//# sourceURL=webpack://utils/./core/deepClone.js?");

/***/ }),

/***/ "./core/isArray.js":
/*!*************************!*\
  !*** ./core/isArray.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction isArray(obj) {\n  return (typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj)) === \"object\" && obj instanceof Array;\n}\n\nexports.default = isArray;\n\n//# sourceURL=webpack://utils/./core/isArray.js?");

/***/ }),

/***/ "./core/isBoolean.js":
/*!***************************!*\
  !*** ./core/isBoolean.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction isBoolean(value) {\n  return value === true || value === false;\n}\n\nexports.default = isBoolean;\n\n//# sourceURL=webpack://utils/./core/isBoolean.js?");

/***/ }),

/***/ "./core/isDefined.js":
/*!***************************!*\
  !*** ./core/isDefined.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction isDefined(data) {\n  return !(data === null || data === undefined || data === \"\");\n}\n\nexports.default = isDefined;\n\n//# sourceURL=webpack://utils/./core/isDefined.js?");

/***/ }),

/***/ "./core/isEmpty.js":
/*!*************************!*\
  !*** ./core/isEmpty.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction isEmptyObject(obj) {\n  for (var name in obj) {\n    return false;\n  }\n  return true;\n}\n\nexports.default = isEmptyObject;\n\n//# sourceURL=webpack://utils/./core/isEmpty.js?");

/***/ }),

/***/ "./core/isObject.js":
/*!**************************!*\
  !*** ./core/isObject.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction isObject(value) {\n  var type = typeof value === \"undefined\" ? \"undefined\" : _typeof(value);\n  return value != null && (type == \"object\" || type == \"function\");\n}\n\nexports.default = isObject;\n\n//# sourceURL=webpack://utils/./core/isObject.js?");

/***/ }),

/***/ "./core/localOperations.js":
/*!*********************************!*\
  !*** ./core/localOperations.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar _ls = window.localStorage;\n\nfunction setDataToLocal(key, data) {\n  _ls.setItem(key, JSON.stringify(data));\n}\n\nfunction getDataFromLocal(key) {\n  return JSON.parse(_ls.getItem(key));\n}\n\nfunction removeItemFromLocal(key) {\n  return _ls.removeItem(key);\n}\n\nexports.setDataToLocal = setDataToLocal;\nexports.getDataFromLocal = getDataFromLocal;\nexports.removeItemFromLocal = removeItemFromLocal;\n\n//# sourceURL=webpack://utils/./core/localOperations.js?");

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isBoolean = exports.isObject = exports.isArray = exports.createMap = exports.isEmpty = exports.isDefined = exports.removeItemFromLocal = exports.getDataFromLocal = exports.setDataToLocal = exports.deepCopy = undefined;\n\nvar _deepClone = __webpack_require__(/*! ./core/deepClone */ \"./core/deepClone.js\");\n\nvar _deepClone2 = _interopRequireDefault(_deepClone);\n\nvar _localOperations = __webpack_require__(/*! ./core/localOperations */ \"./core/localOperations.js\");\n\nvar _isDefined = __webpack_require__(/*! ./core/isDefined */ \"./core/isDefined.js\");\n\nvar _isDefined2 = _interopRequireDefault(_isDefined);\n\nvar _isEmpty = __webpack_require__(/*! ./core/isEmpty */ \"./core/isEmpty.js\");\n\nvar _isEmpty2 = _interopRequireDefault(_isEmpty);\n\nvar _createMap = __webpack_require__(/*! ./core/createMap */ \"./core/createMap.js\");\n\nvar _createMap2 = _interopRequireDefault(_createMap);\n\nvar _isArray = __webpack_require__(/*! ./core/isArray */ \"./core/isArray.js\");\n\nvar _isArray2 = _interopRequireDefault(_isArray);\n\nvar _isObject = __webpack_require__(/*! ./core/isObject */ \"./core/isObject.js\");\n\nvar _isObject2 = _interopRequireDefault(_isObject);\n\nvar _isBoolean = __webpack_require__(/*! ./core/isBoolean */ \"./core/isBoolean.js\");\n\nvar _isBoolean2 = _interopRequireDefault(_isBoolean);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.deepCopy = _deepClone2.default;\nexports.setDataToLocal = _localOperations.setDataToLocal;\nexports.getDataFromLocal = _localOperations.getDataFromLocal;\nexports.removeItemFromLocal = _localOperations.removeItemFromLocal;\nexports.isDefined = _isDefined2.default;\nexports.isEmpty = _isEmpty2.default;\nexports.createMap = _createMap2.default;\nexports.isArray = _isArray2.default;\nexports.isObject = _isObject2.default;\nexports.isBoolean = _isBoolean2.default;\n\n//# sourceURL=webpack://utils/./utils.js?");

/***/ })

/******/ });
});