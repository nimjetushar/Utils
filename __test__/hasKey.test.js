import { hasKey } from "../core/hasKey";

describe("has Key", () => {
    it("should return a function", () => {
        expect(hasKey).toBeDefined();

        const type = typeof hasKey;
        expect(type).toBe("function");
    });

    it("should return true if key is present", () => {
        expect(hasKey({ a: 1 }, "a")).toBeTruthy();

        expect(hasKey({ a: 1 }, "b")).toBeFalsy();

        expect(hasKey(null, "a")).toBeFalsy();
    });
});
