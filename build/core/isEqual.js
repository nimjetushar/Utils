"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqual = void 0;
/**
* More accurately check the type of a JavaScript object
* @param  {Object} obj The object
* @return {String}     The object type
*/
function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
function areArraysEqual(obj1, obj2) {
    // Check length
    if (obj1.length !== obj2.length) {
        return false;
    }
    // Check each item in the array
    for (let i = 0; i < obj1.length; i++) {
        if (!isEqual(obj1[i], obj2[i])) {
            return false;
        }
    }
    return true;
}
function areObjectsEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    // Check each item in the object
    for (const key in obj1) {
        if (Object.prototype.hasOwnProperty.call(obj1, key)) {
            if (!isEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
    }
    return true;
}
function areFunctionsEqual(obj1, obj2) {
    return obj1.toString() === obj2.toString();
}
function arePrimativesEqual(obj1, obj2) {
    return obj1 === obj2;
}
function isEqual(obj1, obj2) {
    // Get the object type
    const type = getType(obj1);
    // If the two items are not the same type, return false
    if (type !== getType(obj2)) {
        return false;
    }
    // Compare based on type
    if (type === 'array') {
        return areArraysEqual(obj1, obj2);
    }
    if (type === 'object') {
        return areObjectsEqual(obj1, obj2);
    }
    if (type === 'function') {
        return areFunctionsEqual(obj1, obj2);
    }
    return arePrimativesEqual(obj1, obj2);
}
exports.isEqual = isEqual;
//# sourceMappingURL=isEqual.js.map