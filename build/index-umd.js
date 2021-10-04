"use strict";

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('device-detector-js')) : typeof define === 'function' && define.amd ? define(['exports', 'device-detector-js'], factory) : (global = global || self, factory(global.utils = {}, global.DeviceDetector));
})(void 0, function (exports, DeviceDetector) {
  'use strict';

  DeviceDetector = DeviceDetector && DeviceDetector.hasOwnProperty('default') ? DeviceDetector['default'] : DeviceDetector;
  /**
   * Identifies if argument is Array or not.
   * @param {*} data Source data which need to be identitied if Array or not.
   * @returns {boolean} status as true if Array and false if not.
   */

  const isArray = data => typeof data === 'object' && data instanceof Array;
  /**
   * Creates map {unique value data} for array of object {data} taking supplied key {objKey} into consideration.
   * @param {Array} data Array Object who's map is to be created.
   * @param {string} objKey Parameter against which key value is created for map.
   * @returns {Object} map of data element with respect to specified {objKey} where key is the objKey and
   * value is specific element.
   */


  const createMap = (data, objKey) => {
    const map = {};

    if (isArray(data)) {
      let i;
      const len = data.length;

      for (i = 0; i < len; i++) {
        const obj = data[i];

        if (objKey && obj[objKey] != null) {
          map[obj[objKey]] = obj;
        } else {
          map[i] = obj;
        }
      }
    } else {
      throw new Error('Required Array');
    }

    return map;
  };
  /**
   * add debounce time for passef function
   * @export
   * @param {Function} func Function for which debounce need to be added
   * @param {number} [timeout=300] wait period before function trigger
   * @return {Function} debounced function with wait for trigger until timeout
   */


  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      const next = () => func(...args);

      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(next, timeout > 0 ? timeout : 300);
    };
  }

  const _getProto = Object.getPrototypeOf,
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

    const proto = _getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain


    if (!proto) {
      return true;
    } // Objects with prototype are plain iff they were constructed by a global Object function


    const Ctor = _hasOwn.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor === 'function' && _fnToString.call(Ctor) === _ObjectFunctionString;
  }
  /**
   * Creates deep copy of all the passed object merging all the data into 1st parameter ( target object ).
   * @param {T} target - An object that will receive the new properties if additional objects are passed in.
   * @param {T} source1 - An object containing additional properties to merge in.
   * @param {Array<T>} sourceN - Additional objects containing properties to merge in.
   * @returns {T} Deep copied object containing all the properties of passed parameters.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  const deepCopy = (...args) => {
    let options,
        src,
        copy,
        copyIsArray,
        clone,
        i = 1,
        target = args[0] || {};
    const length = args.length; // Handle case when target is a string or something (possible in deep copy)

    if (typeof target !== 'object' && !_isFunction(target)) {
      target = {};
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = args[i]) !== null) {
        // Extend the base object
        for (const name in options) {
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
  };
  /**
   * Detect browser and device.
   * @export
   * @class Detect
   */


  class Detect {
    /**
     * Accepts user-agent and based on that detect the browser and device
     *
     * @param {string} ua user-agent
     * @return {*}  {DeviceDetector.DeviceDetectorResult}
     * @memberof Detect
     */
    parse(ua) {
      return new DeviceDetector().parse(ua);
    }

  }

  const hasOwnProperty = Object.prototype.hasOwnProperty;
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
   * @param {*} value Source data which is defined or not.
   * @returns {boolean} status as true if defined and false if not.
   */


  function isBoolean(value) {
    return value === true || value === false;
  }
  /**
   * Identifies if argument is defined or not that is its value should not be null, undefined or ''.
   * @param {*} data Source data which need to be identitied if Array or not.
   * @returns {boolean} status as true if Array and false if not.
   */


  const isDefined = data => !(data == null || data === '');
  /**
   * Identifies if Object is empty or not.
   * @param {*} obj Source data which need to be validated.
   * @returns {boolean} status as true if not an empty Object and false if empty.
   */


  const isEmptyObject = obj => {
    if (typeof obj != 'object') {
      throw new Error('Invalid data type requires object');
    }

    for (const _name in obj) {
      return false;
    }

    return true;
  };
  /**
   * Identifies if passed argument is function or not.
   * @param {*} param Parameter which needs to be validated.
   * @returns {boolean} return true is parameter is function.
   */


  function isFunction(param) {
    return typeof param === 'function' || false;
  }
  /**
   * Verifies if passed argument is Object or not
   * @param {*} value Argument which needs to be validated
   * @returns {boolean} return true if passed argument is Object
   */


  function isObject(value) {
    const type = typeof value;
    return value != null && (type === 'object' || type === 'function');
  }

  const SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null,
        nativeKeys = Object.keys,
        toString = Object.prototype.toString,
        hasEnumBug = !{
    toString: null
  }.propertyIsEnumerable.call('toString', null),
        nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    let nonEnumIdx = nonEnumerableProps.length;
    const constructor = obj.constructor,
          proto = isFunction(constructor) && constructor.prototype || Object.prototype; // Constructor is a special case.

    let prop = 'constructor';

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

    const keysArr = [];

    for (const key in obj) {
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


    const type = typeof a;

    if (type !== 'function' && type !== 'object' && typeof b !== 'object') {
      return false;
    } // eslint-disable-next-line no-use-before-define


    return deepEq(a, b, aStack, bStack);
  } // Internal recursive comparison function for `isEqual`.


  function deepEq(a, b, aStack, bStack) {
    // Compare `[[Class]]` names.
    const className = toString.call(a);

    if (className !== toString.call(b)) {
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

    const areArrays = className === '[object Array]';

    if (!areArrays) {
      if (typeof a !== 'object' || typeof b !== 'object') {
        return false;
      } // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.


      const aCtor = a.constructor,
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
    let length = aStack.length;

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
      const keys = keyList(a);
      let key;
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


  const isEqual = eq;
  const _ls = window.localStorage;

  class LocalStorage {
    /**
     * Sets passed data into local storage against key.
     *
     * @static
     * @param {string} key key against which data need to be stored into local storage.
     * @param {*} data Data need to be stored in storage.
     * @memberof LocalStorage
     */
    static setDataToLocal(key, data) {
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


    static getDataFromLocal(key) {
      const data = _ls.getItem(key);

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


    static removeItemFromLocal(key) {
      return _ls.removeItem(key);
    }

  }
  /**
   * noop
   * @param {*} value accepts anyumber of arguments.
   * @returns {void} return undefined
   */


  function noop() {}
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


  class Logger {
    constructor() {
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


    setlevel(key = this.info) {
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

  }

  function getSortMethod(..._a) {
    const _args = Array.prototype.slice.call(arguments);

    return (a, b) => {
      for (const x in _args) {
        let ax = a[_args[x].substring(1)],
            bx = b[_args[x].substring(1)],
            cx;

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

      return 0;
    };
  }

  function sort(data, comparator) {
    const formatedComp = [];

    for (let item of comparator) {
      if (!['-', '+'].includes(item[0])) {
        item = `+${item}`;
      }

      formatedComp.push(item);
    }

    return data.sort(getSortMethod(...formatedComp));
  }

  const _ls$1 = window.sessionStorage;

  class SessionStorage {
    /**
     * Sets passed data into session storage against key.
     *
     * @static
     * @param {string} key key against which data need to be stored into session storage.
     * @param {*} data Data need to be stored in storage.
     * @memberof SessionStorage
     */
    static setDataToSession(key, data) {
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


    static getDataFromSession(key) {
      const data = _ls$1.getItem(key);

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


    static removeItemFromSession(key) {
      return _ls$1.removeItem(key);
    }

  }

  exports.createMap = createMap;
  exports.debounce = debounce;
  exports.deepCopy = deepCopy;
  exports.Detect = Detect;
  exports.hasKey = hasKey;
  exports.isArray = isArray;
  exports.isBoolean = isBoolean;
  exports.isDefined = isDefined;
  exports.isEmptyObject = isEmptyObject;
  exports.isEqual = isEqual;
  exports.isFunction = isFunction;
  exports.isObject = isObject;
  exports.LocalStorage = LocalStorage;
  exports.Logger = Logger;
  exports.sort = sort;
  exports.noop = noop;
  exports.SessionStorage = SessionStorage;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});