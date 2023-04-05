
import { describe, expect, test } from "vitest";

import { splitWords } from "@string/splitWords.js";


// Unit Test
describe("splitWords()", () => {
    for (const forceFallback of [true, false]) {

        test("split camelCase into two words", () => {
            expect(splitWords("camelCase", forceFallback)).toEqual(["camel", "Case"]);
        });

        test("split PascalCase into two words", () => {
            expect(splitWords("PascalCase", forceFallback)).toEqual(["Pascal", "Case"]);
        });

        test("split a string with non-alphanumeric characters into multiple words", () => {
            expect(splitWords("hello_world-123", forceFallback)).toEqual(["hello", "world", "123"]);
        });

        test("uppercase words are split correctly", () => {
            expect(splitWords("HelloCRUELWorld", forceFallback)).toEqual(["Hello", "CRUEL", "World"]);
        });

        test("return an empty array for an empty string", () => {
            expect(splitWords("", forceFallback)).toEqual([]);
        });

        test("return an array with one element for a single word string", () => {
            expect(splitWords("hello", forceFallback)).toEqual(["hello"]);
        });
    }
});