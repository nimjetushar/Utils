/**
 * Identifies if argument is defined or not that is its value should not be null, undefined or ''.
 * @param {*} object Source data which need to be identitied if Array or not.
 * @returns {boolean} status as true if Array and false if not.
 */
export function isUndefined(object: any): object is null | undefined {
  return object == null || object === "";
}
