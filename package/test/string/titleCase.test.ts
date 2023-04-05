import { expect, test, describe } from "vitest";

import { titleCase } from "@string/titleCase";

describe("titleCase", () => {
    test("convert a string to start case", () => {
        expect(titleCase("hello world")).toBe("Hello World");
        expect(titleCase("HELLO WORLD")).toBe("Hello World");
        expect(titleCase("Hello World")).toBe("Hello World");
        expect(titleCase("hello-world")).toBe("Hello World");
        expect(titleCase("hello_world")).toBe("Hello World");
        expect(titleCase("hello  world")).toBe("Hello World");
    });
});
