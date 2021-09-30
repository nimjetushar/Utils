const _ls = window.sessionStorage;
export class SessionStorage {
    /**
     * Sets passed data into session storage against key.
     *
     * @static
     * @param {string} key key against which data need to be stored into session storage.
     * @param {*} data Data need to be stored in storage.
     * @memberof SessionStorage
     */
    static setDataToSession(key, data) {
        _ls.setItem(key, JSON.stringify(data));
    }
    /**
     * Fetches data from session storage for passed key.
     *
     * @static
     * @param {string} key For which data needs be fetched.
     * @return {*}  {unknown} data which is stored against key.
     * @memberof SessionStorage
     */
    static getDataFromSession(key) {
        const data = _ls.getItem(key);
        if (data == null) {
            return data;
        }
        try {
            return JSON.parse(data);
        }
        catch (_a) {
            return data;
        }
    }
    /**
     * Removes particular data for the key from storage.
     *
     * @static
     * @param {string} key Data which need to be removed / deleted.
     * @return {*}  {void}
     * @memberof SessionStorage
     */
    static removeItemFromSession(key) {
        return _ls.removeItem(key);
    }
}
//# sourceMappingURL=sessionOperations.js.map