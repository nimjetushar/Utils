import { isDefined, isUndefined } from "../build";

describe("isUndefined", () => {
  it("should check variable is defined", () => {
    const data1 = undefined,
      data2 = null,
      data3 = "",
      data4 = 12,
      data5 = "demo",
      data6 = {},
      data7 = [],
      data8 = false;

    const isDefined = (d) => !isUndefined(d);

    expect(isDefined(data1)).toBeFalsy();
    expect(isDefined(data2)).toBeFalsy();
    expect(isDefined(data3)).toBeFalsy();

    expect(isDefined(data4)).toBeTruthy();
    expect(isDefined(data5)).toBeTruthy();
    expect(isDefined(data6)).toBeTruthy();
    expect(isDefined(data7)).toBeTruthy();
    expect(isDefined(data8)).toBeTruthy();
  });
});

describe("isDefined", () => {
  it("should check variable is defined", () => {
    const data1 = undefined,
      data2 = null,
      data3 = "",
      data4 = 12,
      data5 = "demo",
      data6 = {},
      data7 = [],
      data8 = false;


    expect(isDefined(data1)).toBeFalsy();
    expect(isDefined(data2)).toBeFalsy();
    expect(isDefined(data3)).toBeFalsy();

    expect(isDefined(data4)).toBeTruthy();
    expect(isDefined(data5)).toBeTruthy();
    expect(isDefined(data6)).toBeTruthy();
    expect(isDefined(data7)).toBeTruthy();
    expect(isDefined(data8)).toBeTruthy();
  });
});
