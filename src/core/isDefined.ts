/**
 * Identifies if argument is defined or not that is its value should not be null, undefined or ''.
 * @param {*} object Source data which need to be identitied if defined or not.
 * @returns {boolean} returns true if undefined or null or empty string.
 */
export function isUndefined(object: any): object is null | undefined {
  return object == null || object === "";
}

/**
 * Identifies if argument is defined or not that is its value should not be null, undefined or ''.
 * @param {*} object Source data which need to be identitied if defined or not.
 * @returns {boolean} returns false if undefined or null or empty string.
 */
export function isDefined(object: any) {
  return !isUndefined(object);
}
