import { isArray } from "./isArray";

/**
 * Creates map {unique value data} for array of object {data} taking supplied key {objKey} into consideration.
 * @param {Array} data
 * @param {string} objKey
 * @returns {any}} map of data element with respect to specified {objKey}
 */
function createMap(data, objKey) {
  const map = {};
  if (isArray(data)) {
    let i;
    const len = data.length;
    for (i = 0; i < len; i++) {
      const obj = data[i];
      if (objKey) {
        map[obj[objKey]] = obj;
      } else {
        map[i] = obj;
      }
    }
  } else {
    throw new Error("Required Array");
  }
  return map;
}

export { createMap };
