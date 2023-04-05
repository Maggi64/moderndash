import { describe, expect, test } from "vitest";

import { difference } from "@array/difference";

describe("difference", () => {
    test("return the difference between two arrays", () => {
        const array1 = [1, undefined, null, NaN, 3, 4, 5];
        const array2 = [2, 4, undefined, NaN, null, 8];
        const result = difference(array1, array2);
        expect(result).toEqual([1, 3, 5]);
    });

    test("return match based on input function", () => {
        expect(difference([2.1, 1.2], [2.3, 3.4], [99], (a, b) => Math.floor(a) === Math.floor(b))).toEqual([1.2]);
    });

    test("return an array containing the elements that are present in the first array but not in the other arrays", () => {
        const array1 = [1, 2, 3, 4];
        const array2 = [2, 3, 5, 6];
        const array3 = [3, 4, 5, 6];

        const diff = difference(array1, array2, array3);
        expect(diff).toEqual([1]);
    });

    test("return an empty array if no elements are present in the first array but not in the other arrays", () => {
        const array1 = [1, 2, 3, 4];
        const array2 = [1, 2];
        const array3 = [3, 4];

        const diff = difference(array1, array2, array3);
        expect(diff).toEqual([]);
    });

    test("return the first array if no elements are present in the other arrays", () => {
        const array1 = [1, 2, 3, 4];
        const array2: number[] = [];

        const diff = difference(array1, array2);
        expect(diff).toEqual(array1);
    });

    test("can deal with different types", () => {
        const diff = difference([{ id: 1 }, { id: 2 }], [1], (a, b) => a.id === b);
        expect(diff).toEqual([{ id: 2 }]);
    });
});