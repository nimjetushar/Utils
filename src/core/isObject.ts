/**
 * Verifies if passed argument is Object or not
 * @param {*} object Argument which needs to be validated
 * @returns {boolean} return true if passed argument is Object
 */
export function isObject(object: any): boolean {
  const type = typeof object;
  return object != null && (type === "object" || type === "function");
}
