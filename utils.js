window.Utils = (function (window) {

    var _getProto = Object.getPrototypeOf,
        _class2type = {},
        _toString = _class2type.toString,
        _hasOwn = _class2type.hasOwnProperty,
        _fnToString = _hasOwn.toString,
        _ObjectFunctionString = _fnToString.call(Object),
        _ls = window.localStorage;

    var _isFunction = function (obj) {

        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        return typeof obj === "function" && typeof obj.nodeType !== "number";
    },
        _isPlainObject = function (obj) {
            var proto, Ctor;

            // Detect obvious negatives
            if (!obj || _toString.call(obj) !== "[object Object]") {
                return false;
            }

            proto = _getProto(obj);

            // Objects with no prototype (e.g., `Object.create( null )`) are plain
            if (!proto) {
                return true;
            }

            // Objects with prototype are plain iff they were constructed by a global Object function
            Ctor = _hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && _fnToString.call(Ctor) === _ObjectFunctionString;
        };

    // creates deep copy of a object
    function deepCopy() {
        var options, name, src, copy, copyIsArray, clone,
            i = 1,
            target = arguments[0] || {},
            length = arguments.length,
            deep = true;

        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !_isFunction(target)) {
            target = {};
        }

        for (; i < length; i++) {

            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) {

                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    // Prevent never-ending loop
                    if (target === copy) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (_isPlainObject(copy) ||
                        (copyIsArray = Array.isArray(copy)))) {

                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];

                        } else {
                            clone = src && _isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[name] = deepCopy(deep, clone, copy);

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

    function setDataToLocal(key, data) {
        _ls.setItem(key, JSON.stringify(data));
    }

    function getDataFromLocal(key) {
        return JSON.parse(_ls.getItem(key));
    }

    function removeItemFromLocal(key) {
        return _ls.removeItem(key);
    }

    function isDefined(data) {
        return !(data === null || data === undefined || data === '');
    }

    function isEmptyObject(obj) {
        for (var name in obj) {
            return false;
        }
        return true;
    }

    function createMap(data, objKey) {
        var map = {};
        if (typeof data === 'object' && data instanceof Array) {
            var i, len = data.length;
            for (i = 0; i < len; i++) {
                var obj = data[i];
                if (objKey) {
                    map[obj[objKey]] = obj;
                } else {
                    map[i] = obj;
                }
            }
        } else {
            throw 'Required Array';
        }
        return map;
    }

    return {
        deepCopy: deepCopy,
        setDataToLocal: setDataToLocal,
        getDataFromLocal: getDataFromLocal,
        removeItemFromLocal: removeItemFromLocal,
        isDefined: isDefined,
        isEmptyObject: isEmptyObject,
        createMap: createMap
    };

}(window));
