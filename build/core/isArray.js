"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = void 0;
/**
 * Identifies if argument is Array or not.
 * @param {*} data Source data which need to be identitied if Array or not.
 * @returns {boolean} status as true if Array and false if not.
 */
const isArray = (data) => typeof data === 'object' && data instanceof Array;
exports.isArray = isArray;
//# sourceMappingURL=isArray.js.map