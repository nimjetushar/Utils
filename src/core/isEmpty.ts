/**
 * Identifies if Object is empty or not.
 * @param {*} obj Source data which need to be validated.
 * @returns {boolean} status as true if not an empty Object and false if empty.
 */
export const isEmptyObject = (obj: unknown): boolean => {
  if (typeof obj != 'object') {
    throw new Error('Invalid data type requires object');
  }
  for (const _name in obj) {
    return false;
  }
  return true;
}
