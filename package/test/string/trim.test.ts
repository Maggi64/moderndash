import { describe, expect, test } from "vitest";

import { trim } from "@string/trim.js";

describe("trim", () => {
    test("trim characters", () => {
        expect(trim("abc", "a")).toBe("bc");
        expect(trim("__abc__", "_")).toBe("abc");
        expect(trim("___", "_")).toBe("");
        expect(trim("_$$abc$__", "$_")).toBe("abc");
    });

    test("trim nothing", () => {
        expect(trim("abc", "rtz")).toBe("abc");
    });

    test("empty string", () => {
        expect(trim("", "")).toBe("");
    });
});
