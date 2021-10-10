/**
 * Creates map {unique value data} for array of object {data} taking supplied key {objKey} into consideration.
 * @param {Array} data Array Object who's map is to be created.
 * @param {string} objKey Parameter against which key value is created for map.
 * @returns {Object} map of data element with respect to specified {objKey} where key is the objKey and
 * value is specific element.
 */
export declare function createMap<T>(data: T[], objKey: string): {
    [key: string]: T;
};
