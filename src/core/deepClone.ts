const _getProto = Object.getPrototypeOf,
  _class2type = {},
  _toString = _class2type.toString,
  _hasOwn = _class2type.hasOwnProperty,
  _fnToString = _hasOwn.toString,
  _ObjectFunctionString = _fnToString.call(Object);

function _isFunction(obj: any) {
  // Support: Chrome <=57, Firefox <=52
  // In some browsers, typeof returns "function" for HTML <object> elements
  // (i.e., `typeof document.createElement( "object" ) === "function"`).
  // We don't want to classify *any* DOM node as a function.
  return typeof obj === "function" && typeof obj.nodeType !== "number";
}

function _isPlainObject(obj: any) {
  // Detect obvious negatives
  if (!obj || _toString.call(obj) !== "[object Object]") {
    return false;
  }

  const proto = _getProto(obj);

  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  if (!proto) {
    return true;
  }

  // Objects with prototype are plain iff they were constructed by a global Object function
  const Ctor = _hasOwn.call(proto, "constructor") && proto.constructor;
  return (
    typeof Ctor === "function" &&
    _fnToString.call(Ctor) === _ObjectFunctionString
  );
}

/**
 * Creates deep copy of all the passed object merging all the data into 1st parameter ( target object ).
 * @param {T} target - An object that will receive the new properties if additional objects are passed in.
 * @param {T} source1 - An object containing additional properties to merge in.
 * @param {Array<T>} sourceN - Additional objects containing properties to merge in.
 * @returns {T} Deep copied object containing all the properties of passed parameters.
 */
export function deepCopy(...args: any[]): any {
  let options,
    src,
    copy,
    copyIsArray,
    clone,
    i = 1,
    target = args[0] || {};
  const length = args.length;

  // Handle case when target is a string or something (possible in deep copy)
  if (typeof target !== "object" && !_isFunction(target)) {
    target = {};
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = args[i]) !== null) {
      // Extend the base object
      for (const name in options) {
        src = target[name];
        copy = options[name];

        // Prevent never-ending loop
        if (target === copy) {
          // eslint-disable-next-line no-continue
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if (
          copy &&
          (_isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))
        ) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && _isPlainObject(src) ? src : {};
          }

          // Never move original objects, clone them
          target[name] = deepCopy(clone, copy);

          // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
}
