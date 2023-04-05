import { describe, test, vi, expect } from "vitest";

import { decMinCalls } from "@decorator/decMinCalls.js";
import { minCalls } from "@function/minCalls";

describe("after", () => {
    test("after function works correctly", () => {
        const testFn = vi.fn();
        const afterFn = minCalls(testFn, 2);

        afterFn(1);
        afterFn(1);
        expect(testFn).toHaveBeenCalledTimes(0);

        afterFn(1);
        afterFn(1);

        expect(testFn).toHaveBeenCalledTimes(2);
    });

    test("decorator", () => {
        class TestClass {
            @decMinCalls(2)
            testMethod() {
                return 1;
            }
        }
        const instance = new TestClass();
        expect(instance.testMethod()).toBeUndefined();
        expect(instance.testMethod()).toBeUndefined();
        expect(instance.testMethod()).toBe(1);
    });
});
