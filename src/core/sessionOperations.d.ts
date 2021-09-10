/**
 * Sets passed data into session storage against key.
 * @param {sting} key key against which data need to be stored into session storage.
 * @param {*} data Data need to be stored in storage.
 * @return {void}
 */
declare function setDataToSession(key: string, data: any): void;
/**
 * Fetches data from session storage for passed key.
 * @param {*} key For which data needs be fetched.
 * @returns {*} data which is stored against key.
 */
declare function getDataFromSession(key: string): any;
/**
 * Removes particular data for the key from storage.
 * @param {*} key Data which need to be removed / deleted.
 * @returns {void}
 */
declare function removeItemFromSession(key: string): void;
export { setDataToSession, getDataFromSession, removeItemFromSession };
