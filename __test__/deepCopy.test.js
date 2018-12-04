import { deepCopy } from "../core/deepClone";

describe("deepCopy", () => {
  it("should verify variable to be deep copy", () => {
    const data = { id: 123, name: "name" };
    const clonedObj = deepCopy({}, data);
    expect(data).toEqual(clonedObj);

    clonedObj.id = 100;
    const isChanged = data.id !== clonedObj.id;
    expect(isChanged).toBeTruthy();
  });
});
