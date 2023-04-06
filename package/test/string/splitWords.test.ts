
import { describe, expect, test } from "vitest";

import { splitWords } from "@string/splitWords.js";


// Unit Test
describe("splitWords()", () => {

    test("split camelCase into two words", () => {
        expect(splitWords("camelCase")).toEqual(["camel", "Case"]);
    });

    test("split PascalCase into two words", () => {
        expect(splitWords("PascalCase")).toEqual(["Pascal", "Case"]);
    });

    test("split a string with non-alphanumeric characters into multiple words", () => {
        expect(splitWords("hello_world-123")).toEqual(["hello", "world", "123"]);
    });

    test("uppercase words are split correctly", () => {
        expect(splitWords("HelloCRUELWorld")).toEqual(["Hello", "CRUEL", "World"]);
        expect(splitWords("enable6HFormat")).toEqual(["enable", "6H", "Format"]);
    });

    test("return an empty array for an empty string", () => {
        expect(splitWords("")).toEqual([]);
    });

    test("return an array with one element for a single word string", () => {
        expect(splitWords("hello")).toEqual(["hello"]);
    });

});