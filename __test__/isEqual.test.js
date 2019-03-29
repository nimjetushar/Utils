import { isEqual } from "../core/isEqual";

describe("isEqual", () => {
    it("should compare number", () => {
        expect(isEqual(1, 1)).toBeTruthy();

        expect(isEqual(1.234, 1.234)).toBeTruthy();

        expect(isEqual(NaN, NaN)).toBeTruthy();

        let a = 32.22, b = 32.22;
        expect(isEqual(a, b)).toBeTruthy();

        expect(isEqual(2, 6)).toBeFalsy();

        expect(isEqual(21.342, 1.234)).toBeFalsy();

        a = 32.42342;
        b = 3232;
        expect(isEqual(a, b)).toBeFalsy();

        a = Number(20);
        b = Number(20);
        expect(isEqual(a, b)).toBeTruthy();

        b = 20;
        expect(isEqual(a, b)).toBeTruthy();
    });

    it("should compare string", () => {
        expect(isEqual("hello", "hello")).toBeTruthy();

        let a = "new string", b = "new string";
        expect(isEqual(a, b)).toBeTruthy();

        expect(isEqual("    test    ", "test")).toBeFalsy();

        a = "   update";
        b = "   update";
        expect(isEqual(a, b)).toBeTruthy();

        a = String("hello");
        b = String("hello");
        expect(isEqual(a, b)).toBeTruthy();

        a = String("hello");
        b = String("hello1");
        expect(isEqual(a, b)).toBeFalsy();

        b = "hello";
        expect(isEqual(a, b)).toBeTruthy();
    });

    it("should compare Object", () => {
        expect(isEqual({}, {})).toBeTruthy();

        let a = {}, b = {};
        expect(isEqual(a, b)).toBeTruthy();

        a = { a: 1 };
        b = { a: 1 };
        expect(isEqual(a, b)).toBeTruthy();

        a = { a: [1, 2, 3, 4], b: { c: [{ a: 1 }] }, str: "hello" };
        b = { a: [1, 2, 3, 4], b: { c: [{ a: 1 }] }, str: "hello" };
        expect(isEqual(a, b)).toBeTruthy();

        a = { a: [1, 2, 3, 4], b: { c: [{ a: 1 }] }, str: "hello " };
        b = { a: [1, 2, 3, 4], b: { c: [{ a: 1 }] }, str: "hello" };
        expect(isEqual(a, b)).toBeFalsy();

        a = b;
        b.a.push(3);
        expect(isEqual(a, b)).toBeTruthy();

        a = { a: [1, 2, 3, 4], b: { c: [{ a: 1 }] } };
        b = { a: [1, 2, 3, 4], b: { c: [{ a: 1 }] }, test: 22 };
        expect(isEqual(a, b)).toBeFalsy();

        expect(isEqual(null, null)).toBeTruthy();

        expect(isEqual(undefined, undefined)).toBeTruthy();

        expect(isEqual(undefined, null)).toBeFalsy();

        expect(isEqual({ a: null }, { a: null })).toBeTruthy();

        a = new Object({ a: 1 });
        b = new Object({ a: 1 });
        expect(isEqual(a, b)).toBeTruthy();
    });

    it("should compare Array", () => {
        let a = [], b = [];
        expect(isEqual(a, b)).toBeTruthy();

        a = [1, null, undefined, NaN, {}, { a: [1, 2, 3, 4], b: { c: [{ a: 1 }] } }, 0];
        b = [1, null, undefined, NaN, {}, { a: [1, 2, 3, 4], b: { c: [{ a: 1 }] } }, 0];
        expect(isEqual(a, b)).toBeTruthy();

        a = [1, null, NaN, undefined, {}, { a: [1, 2, 3, 4], b: { c: [{ a: 1 }] } }, 0];
        b = [1, null, undefined, NaN, {}, { a: [1, 2, 3, 4], b: { c: [{ a: 1 }] } }, 0];
        expect(isEqual(a, b)).toBeFalsy();

        a = [1, null, undefined, NaN, {}, { a: [1, 2, 3, 4, {}], b: { c: [{ a: 1 }] } }, 0];
        b = [1, null, undefined, NaN, {}, { a: [1, 2, 3, 4], b: { c: [{ a: 1 }] } }, 0];
        expect(isEqual(a, b)).toBeFalsy();

        a = new Array(12);
        b = new Array(12);
        expect(isEqual(a, b)).toBeTruthy();
    });

    it("should compare other data types", () => {
        expect(isEqual(1, "1")).toBeFalsy();

        expect(isEqual(true, "true")).toBeFalsy();

        let a = function () { };
        function test() { }
        expect(isEqual(a, test)).toBeFalsy();

        let b = function () { };
        expect(isEqual(a, b)).toBeFalsy();

        a = function () { return true; };
        b = function () { return true; };
        expect(isEqual(a, b)).toBeFalsy();
    });
});
