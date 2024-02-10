import { truncate } from "@string/truncate";

// Copy-pasted and adapted from https://github.com/lodash/lodash/blob/c7c70a7da5172111b99bb45e45532ed034d7b5b9/test/truncate.spec.js
// See also https://github.com/lodash/lodash/pull/5815

const string = "hi-diddly-ho there, neighborino";

it("should use a default `length` of `30`", () => {
    expect(truncate(string)).toBe("hi-diddly-ho there, neighbo...");
});

it("should not truncate if `string` is <= `length`", () => {
    expect(truncate(string, { length: string.length })).toBe(string);
    expect(truncate(string, { length: string.length + 2 })).toBe(string);
});

it("should truncate string the given length", () => {
    expect(truncate(string, { length: 24 })).toBe("hi-diddly-ho there, n...");
});

it("should support a `omission` option", () => {
    expect(truncate(string, { omission: " [...]" })).toBe(
        "hi-diddly-ho there, neig [...]"
    );
});

it("should support empty `omission` option", () => {
    expect(truncate(string, { omission: "" })).toBe(
        "hi-diddly-ho there, neighborin"
    );
});

it("should support a `length` option", () => {
    expect(truncate(string, { length: 4 })).toBe("h...");
});

it("should support a `separator` option", () => {
    expect(truncate(string, { length: 24, separator: " " })).toBe(
        "hi-diddly-ho there,..."
    );
});

it("should treat negative `length` as `0`", () => {
    [0, -2].forEach((length) => {
        expect(truncate(string, { length })).toBe("...");
    });
});

it("should work as an iteratee for methods like `_.map`", () => {
    const actual = [string, string, string].map((str) => truncate(str));
    const truncated = "hi-diddly-ho there, neighbo...";

    expect(actual).toEqual([truncated, truncated, truncated]);
});
