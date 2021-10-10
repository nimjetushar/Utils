const hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Identifies if a particular key is present into Object or not and based on this returns boolean.
 * @param {Object} obj Source Object against which key needs to be identified.
 * @param {string} key Property which need to be verified into source object.
 * @returns {boolean} true if key exists and false if not.
 */
function hasKey(obj, key) {
    return obj !== null && hasOwnProperty.call(obj, key);
}
export { hasKey };
//# sourceMappingURL=hasKey.js.map