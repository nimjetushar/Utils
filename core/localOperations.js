const _ls = window.localStorage;

/**
 * Sets passed data into local storage against key.
 * @param {sting} key key against which data need to be stored into local storage.
 * @param {*} data Data need to be stored in storage.
 * @return {void}
 */
function setDataToLocal(key, data) {
  _ls.setItem(key, JSON.stringify(data));
}

/**
 * Fetches data from local storage for passed key.
 * @param {*} key For which data needs be fetched.
 * @returns {*} data which is stored against key.
 */
function getDataFromLocal(key) {
  return JSON.parse(_ls.getItem(key));
}

/**
 * Removes particular data for the key from storage.
 * @param {*} key Data which need to be removed / deleted.
 * @returns {void}
 */
function removeItemFromLocal(key) {
  return _ls.removeItem(key);
}

export { setDataToLocal, getDataFromLocal, removeItemFromLocal };
