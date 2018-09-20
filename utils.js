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
import isObject from "./core/isObject";
import isBoolean from "./core/isBoolean";
import {
  setDataToSession,
  getDataFromSession,
  removeItemFromSession
} from "./core/sessionOperations";

export {
  deepCopy,
  setDataToLocal,
  getDataFromLocal,
  removeItemFromLocal,
  isDefined,
  isEmpty,
  createMap,
  isArray,
  isObject,
  isBoolean,
  setDataToSession,
  getDataFromSession,
  removeItemFromSession
};
