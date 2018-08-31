function isEmptyObject(obj) {
  for (var name in obj) {
    return false;
  }
  return true;
}

export default isEmptyObject;
