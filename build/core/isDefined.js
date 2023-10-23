/**
 * Identifies if argument is defined or not that is its value should not be null, undefined or ''.
 * @param {*} value Source data which need to be identitied if defined or not.
 * @returns {boolean} returns true if undefined or null or empty string.
 */
export function isUndefined(value) {
    return value == null;
}
/**
 * Identifies if argument is defined or not that is its value should not be null, undefined or ''.
 * @param {*} value Source data which need to be identitied if defined or not.
 * @returns {boolean} returns false if undefined or null or empty string.
 */
export function isDefined(value) {
    return !isUndefined(value);
}
//# sourceMappingURL=isDefined.js.map