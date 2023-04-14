import { words } from "lodash-es";
import { splitWords } from "moderndash";
import { bench, describe } from "vitest";

describe("splitWords", () => {
    bench("moderndash", () => {
        splitWords("camelCase");
        splitWords("PascalCase");
        splitWords("hello_world-123");
    });
    

    bench("lodash", () => {
        words("camelCase");
        words("PascalCase");
        words("hello_world-123");
    });
});