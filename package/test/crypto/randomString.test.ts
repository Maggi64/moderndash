import { randomString } from "@crypto/randomString";

test("generate a random string of the specified length", () => {
    expect(randomString(8)).toHaveLength(8);
});

test("use the provided charSet when generating the string", () => {
    const charSet = "abc";
    expect(randomString(16, charSet)).toMatch(/^[a-c]+$/);
});

test("use the default charset when no charset is provided", () => {
    expect(randomString(16)).toMatch(/^[\dA-Za-z]+$/);
});

test("return an empty string when the length is 0", () => {
    expect(randomString(0)).toEqual("");
});

test("return an empty string when the charset is empty", () => {
    expect(randomString(16, "")).toEqual("");
});