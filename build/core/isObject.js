/**
 * Verifies if passed argument is Object or not
 * @param {*} value Argument which needs to be validated
 * @returns {boolean} return true if passed argument is Object
 */
export function isObject(value) {
    const type = typeof value;
    return value != null && (type === "object" || type === "function");
}
//# sourceMappingURL=isObject.js.map