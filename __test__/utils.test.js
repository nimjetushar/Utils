import {
  isArray,
  createMap,
  deepCopy,
  isBoolean,
  isDefined,
  isEmptyObject,
  isObject,
  setDataToLocal,
  setDataToSession,
  isEqual
} from "../utils";

describe("Utils", () => {
  it("should have isArray method", () => {
    expect(isArray).toBeDefined();
  });

  it("should have createMap method", () => {
    expect(createMap).toBeDefined();
  });

  it("should have deepCopy method", () => {
    expect(deepCopy).toBeDefined();
  });

  it("should have isBoolean method", () => {
    expect(isBoolean).toBeDefined();
  });

  it("should have isDefined method", () => {
    expect(isDefined).toBeDefined();
  });

  it("should have isEmptyObject method", () => {
    expect(isEmptyObject).toBeDefined();
  });

  it("should have isObject method", () => {
    expect(isObject).toBeDefined();
  });

  it("should have setDataToLocal method", () => {
    expect(setDataToLocal).toBeDefined();
  });

  it("should have setDataToSession method", () => {
    expect(setDataToSession).toBeDefined();
  });

  it("should have isEqual method", () => {
    expect(isEqual).toBeDefined();
  });
});
