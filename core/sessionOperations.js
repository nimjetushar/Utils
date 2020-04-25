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

/**
 * Fetches data from session storage for passed key.
 * @param {*} key For which data needs be fetched.
 * @returns {*} data which is stored against key.
 */
function getDataFromSession(key) {
  return JSON.parse(_ls.getItem(key));
}

/**
 * Removes particular data for the key from storage.
 * @param {*} key Data which need to be removed / deleted.
 * @returns {void}
 */
function removeItemFromSession(key) {
  return _ls.removeItem(key);
}

export { setDataToSession, getDataFromSession, removeItemFromSession };
