import { describe, expect, test } from "vitest";

import { deburr } from "@string/deburr";

describe("deburr", () => {
    test("removes diacritics from a string", () => {
        expect(deburr("Mëtàl Hëàd")).toEqual("Metal Head");
        expect(deburr("Pokémón")).toEqual("Pokemon");
        expect(deburr("résumé")).toEqual("resume");
    });

    test("returns the input string if it has no diacritics", () => {
        expect(deburr("hello")).toEqual("hello");
        expect(deburr("world")).toEqual("world");
    });
});
