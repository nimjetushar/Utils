import { isFunction } from "../core/isFunction";

describe("isFunction", () => {
    it("should return a true for functions", () => {
        const test = function () { };
        expect(isFunction(test)).toBeTruthy();

        function demo() { }
        expect(isFunction(demo)).toBeTruthy();

        const selfCall = (function () { })();
        expect(isFunction(selfCall)).toBeFalsy();
    });

    it("should return a false for non functions", () => {
        const test = "function () { }";
        expect(isFunction(test)).toBeFalsy();

        const fun = Function;
        expect(isFunction(fun)).toBeTruthy();
    });
});
