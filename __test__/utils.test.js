import {
  isArray,
  createMap,
  deepCopy,
  isBoolean,
  isDefined,
  isEmptyObject,
  isObject,
  setDataToLocal,
  setDataToSession
} from "../utils";

test("should have isArray method", () => {
  expect(isArray).toBeDefined();
});

test("should have createMap method", () => {
  expect(createMap).toBeDefined();
});

test("should have deepCopy method", () => {
  expect(deepCopy).toBeDefined();
});

test("should have isBoolean method", () => {
  expect(isBoolean).toBeDefined();
});

test("should have isDefined method", () => {
  expect(isDefined).toBeDefined();
});

test("should have isEmptyObject method", () => {
  expect(isEmptyObject).toBeDefined();
});

test("should have isObject method", () => {
  expect(isObject).toBeDefined();
});

test("should have setDataToLocal method", () => {
  expect(setDataToLocal).toBeDefined();
});

test("should have setDataToSession method", () => {
  expect(setDataToSession).toBeDefined();
});
