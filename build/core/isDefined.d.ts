/**
 * Identifies if argument is defined or not that is its value should not be null, undefined or ''.
 * @param {*} object Source data which need to be identitied if defined or not.
 * @returns {boolean} returns true if undefined or null or empty string.
 */
export declare function isUndefined(object: any): object is null | undefined;
/**
 * Identifies if argument is defined or not that is its value should not be null, undefined or ''.
 * @param {*} object Source data which need to be identitied if defined or not.
 * @returns {boolean} returns false if undefined or null or empty string.
 */
export declare function isDefined(object: any): boolean;
