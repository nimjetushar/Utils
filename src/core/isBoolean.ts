/**
 * Identifies if argument is boolean or not.
 * @param {*} value Source data which is defined or not.
 * @returns {boolean} status as true if defined and false if not.
 */
function isBoolean(value: any) {
  return value === true || value === false;
}

export { isBoolean };
