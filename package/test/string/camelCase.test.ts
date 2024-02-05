import { camelCase } from "@string/camelCase";

test("convert a string to camel case", () => {
    expect(camelCase("Foo Bar")).toBe("fooBar");
    expect(camelCase("fooBar")).toBe("fooBar");
    expect(camelCase("FooBar")).toBe("fooBar");
    expect(camelCase("--foo-bar--")).toBe("fooBar");
    expect(camelCase("__FOO_BAR__")).toBe("fooBar");
    expect(camelCase("")).toBe("");
    expect(camelCase("`")).toBe("");
});
