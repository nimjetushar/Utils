/**
 * Identifies if argument is Array or not.
 * @param {*} data Source data which need to be identitied if Array or not.
 * @returns {boolean} status as true if Array and false if not.
 */
export function isArray(data) {
    return typeof data === "object" && data instanceof Array;
}
//# sourceMappingURL=isArray.js.map