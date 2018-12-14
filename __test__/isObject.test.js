import { isObject } from "../core/isObject";

describe("isObject", () => {
  it("should check for null", () => {
    let status = isObject();
    expect(status).toBeFalsy();

    status = isObject(null);
    expect(status).toBeFalsy();
  });

  it("should identify object", () => {
    let status = isObject({});
    expect(status).toBeTruthy();

    status = isObject({ key: "demo" });
    expect(status).toBeTruthy();
  });
});
