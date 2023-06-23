"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, require('device-detector-js')) : typeof define === 'function' && define.amd ? define(['exports', 'device-detector-js'], factory) : (global = global || self, factory(global.utils = {}, global.DeviceDetector));
})(void 0, function (exports, DeviceDetector) {
  'use strict';

  DeviceDetector = DeviceDetector && DeviceDetector.hasOwnProperty('default') ? DeviceDetector['default'] : DeviceDetector;
  /**
   * Identifies if argument is Array or not.
   * @param {*} object Source data which need to be identitied if Array or not.
   * @returns {boolean} status as true if Array and false if not.
   */

  function isArray(object) {
    return _typeof(object) === "object" && object instanceof Array;
  }
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

        if (objKey && obj[objKey] != null) {
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
  }
  /**
   * Creates deep copy of all the passed object merging all the data into 1st parameter ( target object ).
   * @param {T} target - An object that will receive the new properties if additional objects are passed in.
   * @param {T} source1 - An object containing additional properties to merge in.
   * @param {Array<T>} sourceN - Additional objects containing properties to merge in.
   * @returns {T} Deep copied object containing all the properties of passed parameters.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  function deepCopy() {
    var options,
        src,
        copy,
        copyIsArray,
        clone,
        i = 1,
        target = (arguments.length <= 0 ? undefined : arguments[0]) || {};
    var length = arguments.length; // Handle case when target is a string or something (possible in deep copy)

    if (_typeof(target) !== "object" && !_isFunction(target)) {
      target = {};
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = i < 0 || arguments.length <= i ? undefined : arguments[i]) !== null) {
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
  /**
   * Detect browser and device.
   * @export
   * @class Detect
   */


  var Detect = /*#__PURE__*/function () {
    function Detect() {
      _classCallCheck(this, Detect);
    }

    _createClass(Detect, [{
      key: "parse",
      value:
      /**
       * Accepts user-agent and based on that detect the browser and device
       *
       * @param {string} ua user-agent
       * @return {*}  {DeviceDetector.DeviceDetectorResult}
       * @memberof Detect
       */
      function parse(ua) {
        return new DeviceDetector().parse(ua);
      }
    }]);

    return Detect;
  }();

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * Identifies if a particular key is present into Object or not and based on this returns boolean.
   * @param {Object} obj Source Object against which key needs to be identified.
   * @param {string} key Property which need to be verified into source object.
   * @returns {boolean} true if key exists and false if not.
   */

  function hasKey(obj, key) {
    return obj !== null && hasOwnProperty.call(obj, key);
  }
  /**
   * Identifies if argument is boolean or not.
   * @param {*} object Source data which is defined or not.
   * @returns {boolean} status as true if defined and false if not.
   */


  function isBoolean(object) {
    return object === true || object === false;
  }
  /**
   * Identifies if argument is defined or not that is its value should not be null, undefined or ''.
   * @param {*} object Source data which need to be identitied if Array or not.
   * @returns {boolean} status as true if Array and false if not.
   */


  function isUndefined(object) {
    return object == null || object === "";
  }
  /**
   * Identifies if Object is empty or not.
   * @param {*} object Source data which need to be validated.
   * @returns {boolean} status as true if not an empty Object and false if empty.
   */


  function isEmptyObject(object) {
    if (_typeof(object) != "object") {
      throw new Error("Invalid data type requires object");
    }

    for (var _name in object) {
      return false;
    }

    return true;
  }
  /**
   * Identifies if passed argument is function or not.
   * @param {*} object Parameter which needs to be validated.
   * @returns {boolean} return true is parameter is function.
   */


  function isFunction(object) {
    return typeof object === "function" || false;
  }
  /**
   * Verifies if passed argument is Object or not
   * @param {*} object Argument which needs to be validated
   * @returns {boolean} return true if passed argument is Object
   */


  function isObject(object) {
    var type = _typeof(object);

    return object != null && (type === "object" || type === "function");
  }

  var SymbolProto = typeof Symbol !== "undefined" ? Symbol.prototype : null,
      nativeKeys = Object.keys,
      toString = Object.prototype.toString,
      hasEnumBug = !{
    toString: null
  }.propertyIsEnumerable.call("toString", null),
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


    var type = _typeof(a);

    if (type !== "function" && type !== "object" && _typeof(b) !== "object") {
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
      // eslint-disable-next-line no-fallthrough

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
      if (_typeof(a) !== "object" || _typeof(b) !== "object") {
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

  var _ls = window.localStorage;

  var LocalStorage = /*#__PURE__*/function () {
    function LocalStorage() {
      _classCallCheck(this, LocalStorage);
    }

    _createClass(LocalStorage, null, [{
      key: "setDataToLocal",
      value:
      /**
       * Sets passed data into local storage against key.
       *
       * @static
       * @param {string} key key against which data need to be stored into local storage.
       * @param {*} data Data need to be stored in storage.
       * @memberof LocalStorage
       */
      function setDataToLocal(key, data) {
        _ls.setItem(key, JSON.stringify(data));
      }
      /**
       * Fetches data from local storage for passed key.
       *
       * @static
       * @param {string} key For which data needs be fetched.
       * @return {*}  {unknown} data which is stored against key.
       * @memberof LocalStorage
       */

    }, {
      key: "getDataFromLocal",
      value: function getDataFromLocal(key) {
        var data = _ls.getItem(key);

        if (data == null) {
          return data;
        }

        try {
          return JSON.parse(data);
        } catch (_a) {
          return data;
        }
      }
      /**
       * Removes particular data for the key from storage.
       *
       * @static
       * @param {string} key Data which need to be removed / deleted.
       * @return {*}  {void}
       * @memberof LocalStorage
       */

    }, {
      key: "removeItemFromLocal",
      value: function removeItemFromLocal(key) {
        return _ls.removeItem(key);
      }
    }]);

    return LocalStorage;
  }();
  /**
   * noop
   * @param {*} value accepts anyumber of arguments.
   * @returns {void} return undefined
   */


  function noop() {}
  /* eslint-disable no-fallthrough */

  /**
   * Enable / disable logging across various environment
   * new Logger().setlevel(level) where level are :-
   * - 1 -> All console methods are enabled.
   * - 2 -> console log and info methods are diabled while other works as expected
   * - 3 -> console.error method will be enabled while other are disabled
   * - 4 -> All console methods are disabled
   * @export
   * @class Logger
   */


  var Logger = /*#__PURE__*/function () {
    function Logger() {
      _classCallCheck(this, Logger);

      this.info = 1;
      this.warn = 2;
      this.error = 3;
      this.disable = 4;
    }
    /**
     * Set logger level
     *
     * @param {number} [key=this.info] logging level
     * @memberof Logger
     */


    _createClass(Logger, [{
      key: "setlevel",
      value: function setlevel() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.info;

        if (!key) {
          throw new Error('Logger level is required');
        }

        switch (key) {
          case this.disable:
            console.error = noop;

          case this.error:
            console.warn = noop;

          case this.warn:
            console.info = noop;
            console.log = noop;

          case this.info:
            break;

          default:
            throw new Error('invalid choice');
        }
      }
    }]);

    return Logger;
  }(); // eslint-disable-next-line @typescript-eslint/no-unused-vars


  function getSortMethod() {
    for (var _len2 = arguments.length, _a = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      _a[_key2] = arguments[_key2];
    }

    // eslint-disable-next-line prefer-rest-params
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

      return 0;
    };
  }
  /**
   * sort array based on multiple criteria
   *
   * @export
   * @template T
   * @param {T[]} data
   * @param {string[]} comparator
   * @return {*}  {T[]}
   */


  function sort(data, comparator) {
    var formatedComp = [];

    var _iterator = _createForOfIteratorHelper(comparator),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (!["-", "+"].includes(item[0])) {
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

  var _ls$1 = window.sessionStorage;

  var SessionStorage = /*#__PURE__*/function () {
    function SessionStorage() {
      _classCallCheck(this, SessionStorage);
    }

    _createClass(SessionStorage, null, [{
      key: "setDataToSession",
      value:
      /**
       * Sets passed data into session storage against key.
       *
       * @static
       * @param {string} key key against which data need to be stored into session storage.
       * @param {*} data Data need to be stored in storage.
       * @memberof SessionStorage
       */
      function setDataToSession(key, data) {
        _ls$1.setItem(key, JSON.stringify(data));
      }
      /**
       * Fetches data from session storage for passed key.
       *
       * @static
       * @param {string} key For which data needs be fetched.
       * @return {*}  {unknown} data which is stored against key.
       * @memberof SessionStorage
       */

    }, {
      key: "getDataFromSession",
      value: function getDataFromSession(key) {
        var data = _ls$1.getItem(key);

        if (data == null) {
          return data;
        }

        try {
          return JSON.parse(data);
        } catch (_a) {
          return data;
        }
      }
      /**
       * Removes particular data for the key from storage.
       *
       * @static
       * @param {string} key Data which need to be removed / deleted.
       * @return {*}  {void}
       * @memberof SessionStorage
       */

    }, {
      key: "removeItemFromSession",
      value: function removeItemFromSession(key) {
        return _ls$1.removeItem(key);
      }
    }]);

    return SessionStorage;
  }();
  /**
   * returns random string which can be used as an unique identifier
   *
   * @export
   * @return {*}  {string}
   */


  function getUiqueIdentifier() {
    return Math.random().toString(16).slice(2);
  }

  exports.createMap = createMap;
  exports.debounce = debounce;
  exports.deepCopy = deepCopy;
  exports.Detect = Detect;
  exports.hasKey = hasKey;
  exports.isArray = isArray;
  exports.isBoolean = isBoolean;
  exports.isUndefined = isUndefined;
  exports.isEmptyObject = isEmptyObject;
  exports.isEqual = eq;
  exports.isFunction = isFunction;
  exports.isObject = isObject;
  exports.LocalStorage = LocalStorage;
  exports.Logger = Logger;
  exports.sort = sort;
  exports.noop = noop;
  exports.SessionStorage = SessionStorage;
  exports.getUiqueIdentifier = getUiqueIdentifier;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});