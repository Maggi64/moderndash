import { escapeRegExp } from "@string/escapeRegExp";

test("escapes special characters in a string", () => {
    expect(escapeRegExp("hello.world*")).toBe("hello\\.world\\*");
    expect(escapeRegExp("[lodash](https://lodash.com/)")).toBe("\\[lodash\\]\\(https://lodash\\.com/\\)");
});

test("returns an empty string for an empty input", () => {
    expect(escapeRegExp("")).toBe("");
});

test("returns the original string for a string without special characters", () => {
    expect(escapeRegExp("hello world")).toBe("hello world");
});