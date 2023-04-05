import { test, describe, expect } from "vitest";

import { randomElem } from "@crypto/randomElem";

describe("sample", () => {
    test("sample function returns a random value from an array", () => {
        const collection = [1, 2, 3, 4, 5];
        const result = randomElem(collection);
        expect(collection).toContain(result);
    });

    test("sample function returns undefined for an empty collection", () => {
        const collection = [] as unknown[];
        const result = randomElem(collection);
        expect(result).toBeUndefined();
    });

    test("return an empty array if the input array is empty", () => {
        const result = randomElem([], 3);
        expect(result).toEqual([]);
    });

    test("return a random subset of the input array", () => {
        const array = [1, 2, 3, 4, 5];
        const result = randomElem([1, 2, 3, 4, 5], 3);
        expect(expect.arrayContaining(result)).toEqual(array);
    });
});
