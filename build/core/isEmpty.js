"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyObject = void 0;
/**
 * Identifies if Object is empty or not.
 * @param {*} obj Source data which need to be validated.
 * @returns {boolean} status as true if not an empty Object and false if empty.
 */
const isEmptyObject = (obj) => {
    if (typeof obj != 'object') {
        throw new Error('Invalid data type requires object');
    }
    for (const _name in obj) {
        return false;
    }
    return true;
};
exports.isEmptyObject = isEmptyObject;
//# sourceMappingURL=isEmpty.js.map