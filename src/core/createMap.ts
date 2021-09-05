import { isArray } from './isArray';

/**
 * Creates map {unique value data} for array of object {data} taking supplied key {objKey} into consideration.
 * @param {Array} data Array Object who's map is to be created.
 * @param {string} objKey Parameter against which key value is created for map.
 * @returns {Object} map of data element with respect to specified {objKey} where key is the objKey and
 * value is specific element.
 */
export const createMap = <T>(data: T[], objKey: string): { [key: string]: T } => {
  const map: { [key: string]: T } = {};
  if (isArray(data)) {
    let i;
    const len = data.length;
    for (i = 0; i < len; i++) {
      const obj: any = data[i];
      if (objKey && obj[objKey] != null) {
        map[obj[objKey]] = obj;
      } else {
        map[i] = obj;
      }
    }
  } else {
    throw new Error('Required Array');
  }
  return map;
}
