function createMap(data, objKey) {
  var map = {};
  if (typeof data === "object" && data instanceof Array) {
    var i,
      len = data.length;
    for (i = 0; i < len; i++) {
      var obj = data[i];
      if (objKey) {
        map[obj[objKey]] = obj;
      } else {
        map[i] = obj;
      }
    }
  } else {
    throw "Required Array";
  }
  return map;
}

export default createMap;
