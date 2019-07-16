import { deepCopy } from "../core/deepClone";
import { isEqual } from "../core/isEqual";

describe("deepCopy", () => {
  it("should verify variable to be deep copy", () => {
    const data = { id: 123, name: "name" };
    const clonedObj = deepCopy({}, data);
    expect(data).toEqual(clonedObj);

    clonedObj.id = 100;
    const isChanged = data.id !== clonedObj.id;
    expect(isChanged).toBeTruthy();
  });

  it("should copy complex variable", () => {
    const data = { id: 123, name: ["a", "v", "d"], obj: { a: 299, list: [1, 2, 3, 4, 34, 35, 75] } };
    const clonedObj = deepCopy({}, data);
    expect(data).toEqual(clonedObj);

    clonedObj.id = 100;
    clonedObj.name.push("t");
    let isChanged = data.id !== clonedObj.id;
    expect(isChanged).toBeTruthy();

    isChanged = !isEqual(clonedObj.name, data.name);
    expect(isChanged).toBeTruthy();
  });

  it("should copy object proto", () => {
    function Demo() { }
    Demo.prototype.getValue = function () { return 100; };

    const obj = new Demo();
    const clonedObj = deepCopy({}, obj);

    expect(clonedObj.getValue).toBeDefined();
    expect(clonedObj.getValue()).toBe(100);
  });

  it("should merge object", () => {
    expect(deepCopy({}, { test: 'test' }, { demo: 'demo' }, { 1: 123 })).toEqual({ test: 'test', demo: 'demo', 1: 123 });
  })
});
