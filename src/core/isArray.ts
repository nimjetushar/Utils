/**
 * Identifies if argument is Array or not.
 * @param {*} object Source data which need to be identitied if Array or not.
 * @returns {boolean} status as true if Array and false if not.
 */
export function isArray(object: any): object is unknown[] {
  return typeof object === "object" && object instanceof Array;
}
