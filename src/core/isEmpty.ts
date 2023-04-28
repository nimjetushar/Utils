/**
 * Identifies if Object is empty or not.
 * @param {*} object Source data which need to be validated.
 * @returns {boolean} status as true if not an empty Object and false if empty.
 */
export function isEmptyObject(object: any): boolean {
  if (typeof object != "object") {
    throw new Error("Invalid data type requires object");
  }
  for (const _name in object) {
    return false;
  }
  return true;
}
