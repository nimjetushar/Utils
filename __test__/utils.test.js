import {
  isArray,
  createMap,
  deepCopy,
  isBoolean,
  isUndefined,
  isEmptyObject,
  isObject,
  isEqual,
  isFunction,
  hasKey,
  noop,
  debounce,
  SessionStorage,
  LocalStorage,
} from "../build";
const utils = require("../build/index-umd");

describe("Utils", () => {
  it("should have utility in umd", () => {
    expect(utils).toBeDefined();
  });

  it("should have isArray method", () => {
    expect(isArray).toBeDefined();
    expect(utils.isArray).toBeDefined();
  });

  it("should have createMap method", () => {
    expect(createMap).toBeDefined();
    expect(utils.createMap).toBeDefined();
  });

  it("should have deepCopy method", () => {
    expect(deepCopy).toBeDefined();
    expect(utils.deepCopy).toBeDefined();
  });

  it("should have isBoolean method", () => {
    expect(isBoolean).toBeDefined();
  });

  it("should have isDefined method", () => {
    expect(isUndefined).toBeDefined();
  });

  it("should have isEmptyObject method", () => {
    expect(isEmptyObject).toBeDefined();
  });

  it("should have isObject method", () => {
    expect(isObject).toBeDefined();
  });

  it("should have setDataToLocal method", () => {
    expect(LocalStorage).toBeDefined();
  });

  it("should have setDataToSession method", () => {
    expect(SessionStorage).toBeDefined();
  });

  it("should have isEqual method", () => {
    expect(isEqual).toBeDefined();
  });

  it("should have isFunction method", () => {
    expect(isFunction).toBeDefined();
  });

  it("should have hasKey method", () => {
    expect(hasKey).toBeDefined();
  });

  it("should have noop method", () => {
    expect(noop).toBeDefined();
  });

  it("should have debounce method", () => {
    expect(debounce).toBeDefined();
  });
});
