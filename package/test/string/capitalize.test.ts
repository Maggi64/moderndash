import { capitalize } from "@string/capitalize";

test("capitalizes the first letter of a string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
});

test("returns an empty string for an empty input", () => {
    expect(capitalize("")).toBe("");
});

test("deal with 1 letter", () => {
    expect(capitalize("a")).toBe("A");
});
