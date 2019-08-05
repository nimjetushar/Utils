/**
* @author Tushar Nimje
* @description Utility functions
*/
/* eslint-disable */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./core/deepClone.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _getProto = Object.getPrototypeOf,
    _class2type = {},
    _toString = _class2type.toString,
    _hasOwn = _class2type.hasOwnProperty,
    _fnToString = _hasOwn.toString,
    _ObjectFunctionString = _fnToString.call(Object);

function _isFunction(obj) {
  // Support: Chrome <=57, Firefox <=52
  // In some browsers, typeof returns "function" for HTML <object> elements
  // (i.e., `typeof document.createElement( "object" ) === "function"`).
  // We don't want to classify *any* DOM node as a function.
  return typeof obj === "function" && typeof obj.nodeType !== "number";
}

function _isPlainObject(obj) {
  // Detect obvious negatives
  if (!obj || _toString.call(obj) !== "[object Object]") {
    return false;
  }

  var proto = _getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain


  if (!proto) {
    return true;
  } // Objects with prototype are plain iff they were constructed by a global Object function


  var Ctor = _hasOwn.call(proto, "constructor") && proto.constructor;
  return typeof Ctor === "function" && _fnToString.call(Ctor) === _ObjectFunctionString;
} // creates deep copy of a object


function deepCopy() {
  var options,
      src,
      copy,
      copyIsArray,
      clone,
      i = 1,
      target = arguments[0] || {};
  var length = arguments.length; // Handle case when target is a string or something (possible in deep copy)

  if (_typeof(target) !== "object" && !_isFunction(target)) {
    target = {};
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = arguments[i]) !== null) {
      // Extend the base object
      for (var name in options) {
        src = target[name];
        copy = options[name]; // Prevent never-ending loop

        if (target === copy) {
          // eslint-disable-next-line no-continue
          continue;
        } // Recurse if we're merging plain objects or arrays


        if (copy && (_isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && _isPlainObject(src) ? src : {};
          } // Never move original objects, clone them


          target[name] = deepCopy(clone, copy); // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  } // Return the modified object


  return target;
}


// CONCATENATED MODULE: ./core/isDefined.js
function isDefined(data) {
  return !(data === null || data === undefined || data === "");
}


// CONCATENATED MODULE: ./core/isEmpty.js
function isEmptyObject(obj) {
  for (var name in obj) {
    return false;
  }

  return true;
}


// CONCATENATED MODULE: ./core/isArray.js
function isArray_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isArray_typeof = function _typeof(obj) { return typeof obj; }; } else { isArray_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isArray_typeof(obj); }

function isArray(obj) {
  return isArray_typeof(obj) === "object" && obj instanceof Array;
}


// CONCATENATED MODULE: ./core/createMap.js


function createMap(data, objKey) {
  var map = {};

  if (isArray(data)) {
    var i;
    var len = data.length;

    for (i = 0; i < len; i++) {
      var obj = data[i];

      if (objKey) {
        map[obj[objKey]] = obj;
      } else {
        map[i] = obj;
      }
    }
  } else {
    throw new Error("Required Array");
  }

  return map;
}


// CONCATENATED MODULE: ./core/isObject.js
function isObject_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isObject_typeof = function _typeof(obj) { return typeof obj; }; } else { isObject_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isObject_typeof(obj); }

function isObject(value) {
  var type = isObject_typeof(value);

  return value !== null && (type === "object" || type === "function");
}


// CONCATENATED MODULE: ./core/isBoolean.js
function isBoolean(value) {
  return value === true || value === false;
}


// CONCATENATED MODULE: ./core/sessionOperations.js
var _ls = window.sessionStorage;

function setDataToSession(key, data) {
  _ls.setItem(key, JSON.stringify(data));
}

function getDataFromSession(key) {
  return JSON.parse(_ls.getItem(key));
}

function removeItemFromSession(key) {
  return _ls.removeItem(key);
}


// CONCATENATED MODULE: ./core/localOperations.js
var localOperations_ls = window.localStorage;

function setDataToLocal(key, data) {
  localOperations_ls.setItem(key, JSON.stringify(data));
}

function getDataFromLocal(key) {
  return JSON.parse(localOperations_ls.getItem(key));
}

function removeItemFromLocal(key) {
  return localOperations_ls.removeItem(key);
}


// CONCATENATED MODULE: ./core/isFunction.js
function isFunction(obj) {
  return typeof obj === "function" || false;
}


// CONCATENATED MODULE: ./core/hasKey.js
var hasKey_hasOwnProperty = Object.prototype.hasOwnProperty;

function hasKey(obj, path) {
  return obj !== null && hasKey_hasOwnProperty.call(obj, path);
}


// CONCATENATED MODULE: ./core/isEqual.js
function isEqual_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isEqual_typeof = function _typeof(obj) { return typeof obj; }; } else { isEqual_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isEqual_typeof(obj); }




/* eslint-disable no-self-compare */
// eslint-disable-next-line no-undef

var SymbolProto = typeof Symbol !== "undefined" ? Symbol.prototype : null,
    nativeKeys = Object.keys,
    hasEnumBug = !{
  toString: null
}.propertyIsEnumerable("toString"),
    nonEnumerableProps = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

function collectNonEnumProps(obj, keys) {
  var nonEnumIdx = nonEnumerableProps.length;
  var constructor = obj.constructor,
      proto = isFunction(constructor) && constructor.prototype || Object.prototype; // Constructor is a special case.

  var prop = "constructor";

  if (hasKey(obj, prop) && !keys.includes(prop)) {
    keys.push(prop);
  }

  while (nonEnumIdx--) {
    prop = nonEnumerableProps[nonEnumIdx];

    if (prop in obj && obj[prop] !== proto[prop] && !keys.includes(prop)) {
      keys.push(prop);
    }
  }
}

function keyList(obj) {
  if (!isObject(obj)) {
    return [];
  }

  if (nativeKeys) {
    return nativeKeys(obj);
  }

  var keysArr = [];

  for (var key in obj) {
    if (hasKey(obj, key)) {
      keysArr.push(key);
    }
  } // Ahem, IE < 9.


  if (hasEnumBug) {
    collectNonEnumProps(obj, keysArr);
  }

  return keysArr;
}

function eq(a, b, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  } // `null` or `undefined` only equal to itself (strict comparison).
  // eslint-disable-next-line eqeqeq


  if (a == null || b == null) {
    return false;
  } // `NaN`s are equivalent, but non-reflexive.


  if (a !== a) {
    return b !== b;
  } // Exhaust primitive checks


  var type = isEqual_typeof(a);

  if (type !== "function" && type !== "object" && isEqual_typeof(b) !== "object") {
    return false;
  } // eslint-disable-next-line no-use-before-define


  return deepEq(a, b, aStack, bStack);
} // Internal recursive comparison function for `isEqual`.


function deepEq(a, b, aStack, bStack) {
  // Compare `[[Class]]` names.
  var className = toString.call(a);

  if (className !== toString.call(b)) {
    return false;
  }

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;

    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) {
        return +b !== +b;
      } // An `egal` comparison is performed for other numeric values.


      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case "[object Symbol]":
      return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
  }

  var areArrays = className === "[object Array]";

  if (!areArrays) {
    if (isEqual_typeof(a) !== "object" || isEqual_typeof(b) !== "object") {
      return false;
    } // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.


    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) {
      return bStack[length] === b;
    }
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;

    if (length !== b.length) {
      return false;
    } // Deep compare the contents, ignoring non-numeric properties.


    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) {
        return false;
      }
    }
  } else {
    // Deep compare objects.
    var keys = keyList(a);
    var key;
    length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (keyList(b).length !== length) {
      return false;
    }

    while (length--) {
      // Deep compare each member
      key = keys[length];

      if (!(hasKey(b, key) && eq(a[key], b[key], aStack, bStack))) {
        return false;
      }
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
}

function isEqual(param1, param2) {
  return eq(param1, param2);
}


// CONCATENATED MODULE: ./core/multiSort.js
/* eslint-disable eqeqeq */
function getSortMethod() {
  var _args = Array.prototype.slice.call(arguments);

  return function (a, b) {
    for (var x in _args) {
      var ax = a[_args[x].substring(1)],
          bx = b[_args[x].substring(1)],
          cx = void 0;

      ax = typeof ax == "string" ? ax.toLowerCase() : ax / 1;
      bx = typeof bx == "string" ? bx.toLowerCase() : bx / 1;

      if (_args[x].substring(0, 1) == "-") {
        cx = ax;
        ax = bx;
        bx = cx;
      }

      if (ax != bx) {
        return ax < bx ? -1 : 1;
      }
    }
  };
}

function sort(data, comparator) {
  return data.sort(getSortMethod(comparator));
}
// CONCATENATED MODULE: ./utils.js
/* concated harmony reexport deepCopy */__webpack_require__.d(__webpack_exports__, "deepCopy", function() { return deepCopy; });
/* concated harmony reexport isDefined */__webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* concated harmony reexport isEmptyObject */__webpack_require__.d(__webpack_exports__, "isEmptyObject", function() { return isEmptyObject; });
/* concated harmony reexport createMap */__webpack_require__.d(__webpack_exports__, "createMap", function() { return createMap; });
/* concated harmony reexport isArray */__webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* concated harmony reexport isObject */__webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* concated harmony reexport isBoolean */__webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* concated harmony reexport setDataToSession */__webpack_require__.d(__webpack_exports__, "setDataToSession", function() { return setDataToSession; });
/* concated harmony reexport getDataFromSession */__webpack_require__.d(__webpack_exports__, "getDataFromSession", function() { return getDataFromSession; });
/* concated harmony reexport removeItemFromSession */__webpack_require__.d(__webpack_exports__, "removeItemFromSession", function() { return removeItemFromSession; });
/* concated harmony reexport setDataToLocal */__webpack_require__.d(__webpack_exports__, "setDataToLocal", function() { return setDataToLocal; });
/* concated harmony reexport getDataFromLocal */__webpack_require__.d(__webpack_exports__, "getDataFromLocal", function() { return getDataFromLocal; });
/* concated harmony reexport removeItemFromLocal */__webpack_require__.d(__webpack_exports__, "removeItemFromLocal", function() { return removeItemFromLocal; });
/* concated harmony reexport isEqual */__webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* concated harmony reexport isFunction */__webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* concated harmony reexport hasKey */__webpack_require__.d(__webpack_exports__, "hasKey", function() { return hasKey; });
/* concated harmony reexport sort */__webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });














/***/ })
/******/ ]);
});