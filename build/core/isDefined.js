"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDefined = void 0;
/**
 * Identifies if argument is defined or not that is its value should not be null, undefined or ''.
 * @param {*} data Source data which need to be identitied if Array or not.
 * @returns {boolean} status as true if Array and false if not.
 */
const isDefined = (data) => !(data == null || data === '');
exports.isDefined = isDefined;
//# sourceMappingURL=isDefined.js.map