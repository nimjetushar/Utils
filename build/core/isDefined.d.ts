/**
 * Identifies if argument is defined or not that is its value should not be null, undefined or ''.
 * @param {*} value Source data which need to be identitied if defined or not.
 * @returns {boolean} returns true if undefined or null or empty string.
 */
export declare function isUndefined(value: unknown): value is null | undefined;
/**
 * Identifies if argument is defined or not that is its value should not be null, undefined or ''.
 * @param {*} value Source data which need to be identitied if defined or not.
 * @returns {boolean} returns false if undefined or null or empty string.
 */
export declare function isDefined<T = unknown>(value: T | null | undefined): value is T;
