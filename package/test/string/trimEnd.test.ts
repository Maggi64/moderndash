import { trimEnd } from "@string/trimEnd.js";

test("trim characters", () => {
    expect(trimEnd("abc", "a")).toBe("abc");
    expect(trimEnd("__abc__", "_")).toBe("__abc");
    expect(trimEnd("___", "_")).toBe("");
    expect(trimEnd("_$$abc$__", "$_")).toBe("_$$abc");
});

test("trim nothing", () => {
    expect(trimEnd("abc", "rtz")).toBe("abc");
});

test("empty string", () => {
    expect(trimEnd("", "")).toBe("");
});
