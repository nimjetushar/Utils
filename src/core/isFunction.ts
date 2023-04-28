/**
 * Identifies if passed argument is function or not.
 * @param {*} object Parameter which needs to be validated.
 * @returns {boolean} return true is parameter is function.
 */
export function isFunction(object: any): boolean {
  return typeof object === "function" || false;
}
