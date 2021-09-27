const _ls = window.localStorage;

export class LocalStorage {

  /**
   * Sets passed data into local storage against key.
   *
   * @static
   * @param {string} key key against which data need to be stored into local storage.
   * @param {*} data Data need to be stored in storage.
   * @memberof LocalStorage
   */
  static setDataToLocal(key: string, data: any): void {
    _ls.setItem(key, JSON.stringify(data));
  }

  /**
   * Fetches data from local storage for passed key.
   *
   * @static
   * @param {string} key For which data needs be fetched.
   * @return {*}  {unknown} data which is stored against key.
   * @memberof LocalStorage
   */
  static getDataFromLocal(key: string): unknown {
    const data = _ls.getItem(key);
    if (data == null) {
      return data;
    }
    try {
      return JSON.parse(data);
    } catch {
      return data;
    }
  }

  /**
   * Removes particular data for the key from storage.
   *
   * @static
   * @param {string} key Data which need to be removed / deleted.
   * @return {*}  {void}
   * @memberof LocalStorage
   */
  static removeItemFromLocal(key: string): void {
    return _ls.removeItem(key);
  }
}
