import { escape as lodashVersion } from "lodash-es";
import { escapeHtml } from "moderndash";
import { bench, describe } from "vitest";

import { randomStringArray } from "../testData.js";

describe("escapeHtml", () => {
    const strings = randomStringArray(100, "abcdefgh$%^&*()_+{}[]|\\:;\"'<>,.?/");

    bench("moderndash", () => {
        for (const str of strings) {
            escapeHtml(str);
        }
    });

    bench("lodash", () => {
        for (const str of strings) {
            lodashVersion(str);
        }
    });
});