import { isFunction } from './isFunction';
import { isObject } from './isObject';
import { hasKey as has } from './hasKey';
const SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null, nativeKeys = Object.keys, toString = Object.prototype.toString, hasEnumBug = !{ toString: null }.propertyIsEnumerable.call('toString', null), nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
function collectNonEnumProps(obj, keys) {
    let nonEnumIdx = nonEnumerableProps.length;
    const constructor = obj.constructor, proto = isFunction(constructor) && constructor.prototype || Object.prototype;
    // Constructor is a special case.
    let prop = 'constructor';
    if (has(obj, prop) && !keys.includes(prop)) {
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
        if (has(obj, key)) {
            keysArr.push(key);
        }
    }
    // Ahem, IE < 9.
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
    }
    // `null` or `undefined` only equal to itself (strict comparison).
    // eslint-disable-next-line eqeqeq
    if (a == null || b == null) {
        return false;
    }
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) {
        return b !== b;
    }
    // Exhaust primitive checks
    const type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b !== 'object') {
        return false;
    }
    // eslint-disable-next-line no-use-before-define
    return deepEq(a, b, aStack, bStack);
}
// Internal recursive comparison function for `isEqual`.
function deepEq(a, b, aStack, bStack) {
    // Compare `[[Class]]` names.
    const className = toString.call(a);
    if (className !== toString.call(b)) {
        return false;
    }
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case '[object RegExp]':
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case '[object String]':
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return '' + a === '' + b;
        case '[object Number]':
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a) {
                return +b !== +b;
            }
            // An `egal` comparison is performed for other numeric values.
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
        }
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        const aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor &&
            isFunction(bCtor) && bCtor instanceof bCtor) &&
            ('constructor' in a && 'constructor' in b)) {
            return false;
        }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
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
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length) {
            return false;
        }
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], aStack, bStack)) {
                return false;
            }
        }
    }
    else {
        // Deep compare objects.
        const keys = keyList(a);
        let key;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (keyList(b).length !== length) {
            return false;
        }
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) {
                return false;
            }
        }
    }
    // Remove the first object from the stack of traversed objects.
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
export const isEqual = eq;
//# sourceMappingURL=isEqual.js.map