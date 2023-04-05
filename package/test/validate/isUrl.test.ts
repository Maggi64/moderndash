import { describe, test, expect } from "vitest";

import { isUrl } from "@validate/isUrl.js";


describe("isUrl", () => {
    test("isUrl", () => {
        expect(isUrl("https://google.com")).toBe(true);
        expect(isUrl("google.com")).toBe(false);
    });
});