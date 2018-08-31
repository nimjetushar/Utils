import deepCopy from "./core/deepClone";
import {
  setDataToLocal,
  getDataFromLocal,
  removeItemFromLocal
} from "./core/localOperations";
import isDefined from "./core/isDefined";
import isEmpty from "./core/isEmpty";
import createMap from "./core/createMap";
import isArray from "./core/isArray";

const utils = (window.utils = (function() {
  return {
    deepCopy: deepCopy,
    setDataToLocal: setDataToLocal,
    getDataFromLocal: getDataFromLocal,
    removeItemFromLocal: removeItemFromLocal,
    isDefined: isDefined,
    isEmpty: isEmpty,
    createMap: createMap,
    isArray: isArray
  };
})());

export default utils;
