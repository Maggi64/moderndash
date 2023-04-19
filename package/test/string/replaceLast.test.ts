import { replaceLast } from "@string/replaceLast.js";

test("Replace last occurrence of a string", () => {
    expect(replaceLast("Foo Bar Bar", "Bar", "Boo")).toBe("Foo Bar Boo");
});

test("Return the original string if the search string is not found", () => {
    expect(replaceLast("Foo Bar Bar", "Baz", "Boo")).toBe("Foo Bar Bar");
});