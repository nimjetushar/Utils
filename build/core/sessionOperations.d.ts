export declare class SessionStorage {
    /**
     * Sets passed data into session storage against key.
     *
     * @static
     * @param {string} key key against which data need to be stored into session storage.
     * @param {*} data Data need to be stored in storage.
     * @memberof SessionStorage
     */
    static setDataToSession(key: string, data: any): void;
    /**
     * Fetches data from session storage for passed key.
     *
     * @static
     * @param {string} key For which data needs be fetched.
     * @return {*}  {unknown} data which is stored against key.
     * @memberof SessionStorage
     */
    static getDataFromSession(key: string): unknown;
    /**
     * Removes particular data for the key from storage.
     *
     * @static
     * @param {string} key Data which need to be removed / deleted.
     * @return {*}  {void}
     * @memberof SessionStorage
     */
    static removeItemFromSession(key: string): void;
}
