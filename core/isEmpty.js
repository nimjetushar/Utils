function isEmptyObject(obj) {
  for (const name in obj) {
    return false;
  }
  return true;
}

export { isEmptyObject };
