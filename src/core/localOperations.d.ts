/**
 * Sets passed data into local storage against key.
 * @param {sting} key key against which data need to be stored into local storage.
 * @param {*} data Data need to be stored in storage.
 * @return {void}
 */
declare function setDataToLocal(key: string, data: any): void;
/**
 * Fetches data from local storage for passed key.
 * @param {*} key For which data needs be fetched.
 * @returns {*} data which is stored against key.
 */
declare function getDataFromLocal(key: string): any;
/**
 * Removes particular data for the key from storage.
 * @param {*} key Data which need to be removed / deleted.
 * @returns {void}
 */
declare function removeItemFromLocal(key: string): void;
export { setDataToLocal, getDataFromLocal, removeItemFromLocal };
