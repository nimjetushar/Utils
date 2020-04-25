/**
 * Identifies if argument is defined or not that is its value should not be null, undefined or ''.
 * @param {*} data Source data which need to be identitied if Array or not.
 * @returns {boolean} status as true if Array and false if not.
 */
function isDefined(data) {
  return !(data == null || data === "");
}

export { isDefined };
