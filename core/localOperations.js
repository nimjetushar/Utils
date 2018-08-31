const _ls = window.localStorage;

function setDataToLocal(key, data) {
  _ls.setItem(key, JSON.stringify(data));
}

function getDataFromLocal(key) {
  return JSON.parse(_ls.getItem(key));
}

function removeItemFromLocal(key) {
  return _ls.removeItem(key);
}

export { setDataToLocal, getDataFromLocal, removeItemFromLocal };
