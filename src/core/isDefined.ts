/**
 * Identifies if argument is defined or not that is its value should not be null, undefined or ''.
 * @param {*} value Source data which need to be identitied if defined or not.
 * @returns {boolean} returns true if undefined or null or empty string.
 */
export function isUndefined(value: unknown): value is null | undefined {
  return value == null;
}

/**
 * Identifies if argument is defined or not that is its value should not be null, undefined or ''.
 * @param {*} value Source data which need to be identitied if defined or not.
 * @returns {boolean} returns false if undefined or null or empty string.
 */
export function isDefined<T = unknown>(
  value: T | null | undefined
): value is T {
  return !isUndefined(value);
}
