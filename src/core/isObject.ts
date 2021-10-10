/**
 * Verifies if passed argument is Object or not
 * @param {*} value Argument which needs to be validated
 * @returns {boolean} return true if passed argument is Object
 */
function isObject(value: unknown): boolean {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
}

export { isObject };
