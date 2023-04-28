/**
 * Identifies if argument is boolean or not.
 * @param {*} object Source data which is defined or not.
 * @returns {boolean} status as true if defined and false if not.
 */
export function isBoolean(object: any): object is boolean {
  return object === true || object === false;
}
