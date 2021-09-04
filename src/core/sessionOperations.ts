const _ls = window.sessionStorage;

/**
 * Sets passed data into session storage against key.
 * @param {sting} key key against which data need to be stored into session storage.
 * @param {*} data Data need to be stored in storage.
 * @return {void}
 */
function setDataToSession(key: string, data: any) {
  _ls.setItem(key, JSON.stringify(data));
}

/**
 * Fetches data from session storage for passed key.
 * @param {*} key For which data needs be fetched.
 * @returns {*} data which is stored against key.
 */
function getDataFromSession(key: string) {
  const data = _ls.getItem(key);
  if (data == null) {
    return data;
  }
  return JSON.parse(data);
}

/**
 * Removes particular data for the key from storage.
 * @param {*} key Data which need to be removed / deleted.
 * @returns {void}
 */
function removeItemFromSession(key: string) {
  return _ls.removeItem(key);
}

export { setDataToSession, getDataFromSession, removeItemFromSession };
