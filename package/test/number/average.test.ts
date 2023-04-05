import { describe, expect, test } from "vitest";

import { average } from "@number/average.js";

describe("average", () => {
    test("return NaN when the input array is empty", () => {
        expect(average([])).toBeNaN();
    });

    test("return the average of an array of numbers", () => {
        expect(average([1, 2, 3, 4, 5])).toBe(3);
    });

    test("return the average of a single number", () => {
        expect(average([5])).toBe(5);
    });

    test("return the average of a negative number", () => {
        expect(average([-2])).toBe(-2);
    });

    test("return the average of a decimal number", () => {
        expect(average([3.14])).toBeCloseTo(3.14);
    });

    test("return the average of multiple decimal numbers", () => {
        expect(average([1.2, 3.4, 5.6])).toBeCloseTo(3.4); 
    }); 
});