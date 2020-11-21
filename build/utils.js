/**
* @author Tushar Nimje
* @description Utility functions
*/
/* eslint-disable */
module.exports =
/******/ (function(modules) { // webpackBootstrap
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "deepCopy", function() { return /* reexport */ deepCopy; });
__webpack_require__.d(__webpack_exports__, "isDefined", function() { return /* reexport */ isDefined; });
__webpack_require__.d(__webpack_exports__, "isEmptyObject", function() { return /* reexport */ isEmptyObject; });
__webpack_require__.d(__webpack_exports__, "createMap", function() { return /* reexport */ createMap; });
__webpack_require__.d(__webpack_exports__, "isArray", function() { return /* reexport */ isArray; });
__webpack_require__.d(__webpack_exports__, "isObject", function() { return /* reexport */ isObject; });
__webpack_require__.d(__webpack_exports__, "isBoolean", function() { return /* reexport */ isBoolean; });
__webpack_require__.d(__webpack_exports__, "setDataToSession", function() { return /* reexport */ setDataToSession; });
__webpack_require__.d(__webpack_exports__, "getDataFromSession", function() { return /* reexport */ getDataFromSession; });
__webpack_require__.d(__webpack_exports__, "removeItemFromSession", function() { return /* reexport */ removeItemFromSession; });
__webpack_require__.d(__webpack_exports__, "setDataToLocal", function() { return /* reexport */ setDataToLocal; });
__webpack_require__.d(__webpack_exports__, "getDataFromLocal", function() { return /* reexport */ getDataFromLocal; });
__webpack_require__.d(__webpack_exports__, "removeItemFromLocal", function() { return /* reexport */ removeItemFromLocal; });
__webpack_require__.d(__webpack_exports__, "isEqual", function() { return /* reexport */ isEqual; });
__webpack_require__.d(__webpack_exports__, "isFunction", function() { return /* reexport */ isFunction; });
__webpack_require__.d(__webpack_exports__, "hasKey", function() { return /* reexport */ hasKey; });
__webpack_require__.d(__webpack_exports__, "sort", function() { return /* reexport */ sort; });
__webpack_require__.d(__webpack_exports__, "noop", function() { return /* reexport */ noop; });
__webpack_require__.d(__webpack_exports__, "debounce", function() { return /* reexport */ debounce; });

// CONCATENATED MODULE: ./core/deepClone.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  return typeof obj === 'function' && typeof obj.nodeType !== 'number';
}

function _isPlainObject(obj) {
  // Detect obvious negatives
  if (!obj || _toString.call(obj) !== '[object Object]') {
    return false;
  }

  var proto = _getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain


  if (!proto) {
    return true;
  } // Objects with prototype are plain iff they were constructed by a global Object function


  var Ctor = _hasOwn.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && _fnToString.call(Ctor) === _ObjectFunctionString;
}
/**
 * Creates deep copy of all the passed object merging all the data into 1st parameter ( target object ).
 * @param {T} target - An object that will receive the new properties if additional objects are passed in.
 * @param {T} source1 - An object containing additional properties to merge in.
 * @param {Array<T>} sourceN - Additional objects containing properties to merge in.
 * @returns {T} Deep copied object containing all the properties of passed parameters.
 */


function deepCopy() {
  var options,
      src,
      copy,
      copyIsArray,
      clone,
      i = 1,
      target = arguments[0] || {};
  var length = arguments.length; // Handle case when target is a string or something (possible in deep copy)

  if (_typeof(target) !== 'object' && !_isFunction(target)) {
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
/**
 * Identifies if argument is defined or not that is its value should not be null, undefined or ''.
 * @param {*} data Source data which need to be identitied if Array or not.
 * @returns {boolean} status as true if Array and false if not.
 */
function isDefined(data) {
  return !(data == null || data === '');
}


// CONCATENATED MODULE: ./core/isEmpty.js
function isEmpty_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isEmpty_typeof = function _typeof(obj) { return typeof obj; }; } else { isEmpty_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isEmpty_typeof(obj); }

/**
 * Identifies if Object is empty or not.
 * @param {*} obj Source data which need to be validated.
 * @returns {boolean} status as true if not an empty Object and false if empty.
 */
function isEmptyObject(obj) {
  if (isEmpty_typeof(obj) != 'object') {
    throw new Error('Invalid data type requires object');
  }

  for (var name in obj) {
    return false;
  }

  return true;
}


// CONCATENATED MODULE: ./core/isArray.js
function isArray_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isArray_typeof = function _typeof(obj) { return typeof obj; }; } else { isArray_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isArray_typeof(obj); }

/**
 * Identifies if argument is Array or not.
 * @param {*} data Source data which need to be identitied if Array or not.
 * @returns {boolean} status as true if Array and false if not.
 */
function isArray(data) {
  return isArray_typeof(data) === 'object' && data instanceof Array;
}


// CONCATENATED MODULE: ./core/createMap.js

/**
 * Creates map {unique value data} for array of object {data} taking supplied key {objKey} into consideration.
 * @param {Array} data Array Object who's map is to be created.
 * @param {string} objKey Parameter against which key value is created for map.
 * @returns {Object} map of data element with respect to specified {objKey} where key is the objKey and
 * value is specific element.
 */

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
    throw new Error('Required Array');
  }

  return map;
}


// CONCATENATED MODULE: ./core/isObject.js
function isObject_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isObject_typeof = function _typeof(obj) { return typeof obj; }; } else { isObject_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isObject_typeof(obj); }

/**
 * Verifies if passed argument is Object or not
 * @param {*} value Argument which needs to be validated
 * @returns {boolean} return true if passed argument is Object
 */
function isObject(value) {
  var type = isObject_typeof(value);

  return value != null && (type === 'object' || type === 'function');
}


// CONCATENATED MODULE: ./core/isBoolean.js
/**
 * Identifies if argument is boolean or not.
 * @param {*} value Source data which is defined or not.
 * @returns {boolean} status as true if defined and false if not.
 */
function isBoolean(value) {
  return value === true || value === false;
}


// CONCATENATED MODULE: ./core/sessionOperations.js
var _ls = window.sessionStorage;
/**
 * Sets passed data into session storage against key.
 * @param {sting} key key against which data need to be stored into session storage.
 * @param {*} data Data need to be stored in storage.
 * @return {void}
 */

function setDataToSession(key, data) {
  _ls.setItem(key, JSON.stringify(data));
}
/**
 * Fetches data from session storage for passed key.
 * @param {*} key For which data needs be fetched.
 * @returns {*} data which is stored against key.
 */


function getDataFromSession(key) {
  return JSON.parse(_ls.getItem(key));
}
/**
 * Removes particular data for the key from storage.
 * @param {*} key Data which need to be removed / deleted.
 * @returns {void}
 */


function removeItemFromSession(key) {
  return _ls.removeItem(key);
}


// CONCATENATED MODULE: ./core/localOperations.js
var localOperations_ls = window.localStorage;
/**
 * Sets passed data into local storage against key.
 * @param {sting} key key against which data need to be stored into local storage.
 * @param {*} data Data need to be stored in storage.
 * @return {void}
 */

function setDataToLocal(key, data) {
  localOperations_ls.setItem(key, JSON.stringify(data));
}
/**
 * Fetches data from local storage for passed key.
 * @param {*} key For which data needs be fetched.
 * @returns {*} data which is stored against key.
 */


function getDataFromLocal(key) {
  return JSON.parse(localOperations_ls.getItem(key));
}
/**
 * Removes particular data for the key from storage.
 * @param {*} key Data which need to be removed / deleted.
 * @returns {void}
 */


function removeItemFromLocal(key) {
  return localOperations_ls.removeItem(key);
}


// CONCATENATED MODULE: ./core/isFunction.js
/**
 * Identifies if passed argument is function or not.
 * @param {*} param Parameter which needs to be validated.
 * @returns {boolean} return true is parameter is function.
 */
function isFunction(param) {
  return typeof param === 'function' || false;
}


// CONCATENATED MODULE: ./core/hasKey.js
var hasKey_hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Identifies if a particular key is present into Object or not and based on this returns boolean.
 * @param {Object} obj Source Object against which key needs to be identified.
 * @param {string} key Property which need to be verified into source object.
 * @returns {boolean} true if key exists and false if not.
 */

function hasKey(obj, key) {
  return obj !== null && hasKey_hasOwnProperty.call(obj, key);
}


// CONCATENATED MODULE: ./core/isEqual.js
function isEqual_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isEqual_typeof = function _typeof(obj) { return typeof obj; }; } else { isEqual_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isEqual_typeof(obj); }




/* eslint-disable no-self-compare */
// eslint-disable-next-line no-undef

var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null,
    nativeKeys = Object.keys,
    isEqual_toString = Object.prototype.toString,
    hasEnumBug = !{
  toString: null
}.propertyIsEnumerable.call('toString'),
    nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

function collectNonEnumProps(obj, keys) {
  var nonEnumIdx = nonEnumerableProps.length;
  var constructor = obj.constructor,
      proto = isFunction(constructor) && constructor.prototype || Object.prototype; // Constructor is a special case.

  var prop = 'constructor';

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

  if (type !== 'function' && type !== 'object' && isEqual_typeof(b) !== 'object') {
    return false;
  } // eslint-disable-next-line no-use-before-define


  return deepEq(a, b, aStack, bStack);
} // Internal recursive comparison function for `isEqual`.


function deepEq(a, b, aStack, bStack) {
  // Compare `[[Class]]` names.
  var className = isEqual_toString.call(a);

  if (className !== isEqual_toString.call(b)) {
    return false;
  }

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case '[object RegExp]': // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case '[object String]':
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return '' + a === '' + b;

    case '[object Number]':
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) {
        return +b !== +b;
      } // An `egal` comparison is performed for other numeric values.


      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case '[object Date]':
    case '[object Boolean]':
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case '[object Symbol]':
      return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
  }

  var areArrays = className === '[object Array]';

  if (!areArrays) {
    if (isEqual_typeof(a) !== 'object' || isEqual_typeof(b) !== 'object') {
      return false;
    } // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.


    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
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
/**
 * Compares two parameter of same type and returns true if equal.
 * @param {*} param1 Parameter 1
 * @param {*} param2 Parameter 2
 * @returns {boolean} true if both parameter are equal
 */


function isEqual(param1, param2) {
  return eq(param1, param2);
}
// CONCATENATED MODULE: ./core/multiSort.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable eqeqeq, consistent-return */
function getSortMethod() {
  var _args = Array.prototype.slice.call(arguments);

  return function (a, b) {
    for (var x in _args) {
      var ax = a[_args[x].substring(1)],
          bx = b[_args[x].substring(1)],
          cx = void 0;

      ax = typeof ax == 'string' ? ax.toLowerCase() : ax / 1;
      bx = typeof bx == 'string' ? bx.toLowerCase() : bx / 1;

      if (_args[x].substring(0, 1) == '-') {
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
  var formatedComp = [];

  var _iterator = _createForOfIteratorHelper(comparator),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (!['-', '+'].includes(item[0])) {
        item = "+".concat(item);
      }

      formatedComp.push(item);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return data.sort(getSortMethod.apply(void 0, formatedComp));
}
// CONCATENATED MODULE: ./core/noop.js
/**
 * noop
 * @param {*} value accepts anyumber of arguments.
 * @returns {void} return undefined
 */
function noop() {}
// CONCATENATED MODULE: ./core/debounce.js
/**
 * add debounce time for passef function
 * @export
 * @param {Function} func Function for which debounce need to be added
 * @param {number} [timeout=300] wait period before function trigger
 * @return {Function} debounced function with wait for trigger until timeout
 */
function debounce(func) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var timer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var next = function next() {
      return func.apply(void 0, args);
    };

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(next, timeout > 0 ? timeout : 300);
  };
}
// CONCATENATED MODULE: ./index.js
















/***/ })
/******/ ]);