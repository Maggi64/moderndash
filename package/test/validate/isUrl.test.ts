import { isUrl } from "@validate/isUrl.js";

test("isUrl", () => {
    expect(isUrl("https://google.com")).toBe(true);
    expect(isUrl("google.com")).toBe(false);
});