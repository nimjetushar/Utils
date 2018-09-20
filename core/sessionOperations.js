const _ls = window.sessionStorage;

function setDataToSession(key, data) {
  _ls.setItem(key, JSON.stringify(data));
}

function getDataFromSession(key) {
  return JSON.parse(_ls.getItem(key));
}

function removeItemFromSession(key) {
  return _ls.removeItem(key);
}

export { setDataToSession, getDataFromSession, removeItemFromSession };
