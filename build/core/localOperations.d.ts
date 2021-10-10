export declare class LocalStorage {
    /**
     * Sets passed data into local storage against key.
     *
     * @static
     * @param {string} key key against which data need to be stored into local storage.
     * @param {*} data Data need to be stored in storage.
     * @memberof LocalStorage
     */
    static setDataToLocal(key: string, data: unknown): void;
    /**
     * Fetches data from local storage for passed key.
     *
     * @static
     * @param {string} key For which data needs be fetched.
     * @return {*}  {unknown} data which is stored against key.
     * @memberof LocalStorage
     */
    static getDataFromLocal(key: string): unknown;
    /**
     * Removes particular data for the key from storage.
     *
     * @static
     * @param {string} key Data which need to be removed / deleted.
     * @return {*}  {void}
     * @memberof LocalStorage
     */
    static removeItemFromLocal(key: string): void;
}
