"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItemFromSession = exports.getDataFromSession = exports.setDataToSession = void 0;
const _ls = window.sessionStorage;
/**
 * Sets passed data into session storage against key.
 * @param {sting} key key against which data need to be stored into session storage.
 * @param {*} data Data need to be stored in storage.
 * @return {void}
 */
function setDataToSession(key, data) {
    _ls.setItem(key, JSON.stringify(data));
}
exports.setDataToSession = setDataToSession;
/**
 * Fetches data from session storage for passed key.
 * @param {*} key For which data needs be fetched.
 * @returns {*} data which is stored against key.
 */
function getDataFromSession(key) {
    const data = _ls.getItem(key);
    if (data == null) {
        return data;
    }
    return JSON.parse(data);
}
exports.getDataFromSession = getDataFromSession;
/**
 * Removes particular data for the key from storage.
 * @param {*} key Data which need to be removed / deleted.
 * @returns {void}
 */
function removeItemFromSession(key) {
    return _ls.removeItem(key);
}
exports.removeItemFromSession = removeItemFromSession;
//# sourceMappingURL=sessionOperations.js.map