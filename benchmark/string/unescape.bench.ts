import { unescape as lodashVersion } from "lodash-es";
import { escapeHtml, unescapeHtml } from "moderndash";
import { bench, describe } from "vitest";

import { randomStringArray } from "../testData.js";

describe("escapeHtml", () => {
    const strings = randomStringArray(100, "abcdefgh$%^&*()_+{}[]|\\:;\"'<>,.?/").map(str => escapeHtml(str));


    bench("moderndash", () => {
        for (const str of strings) {
            unescapeHtml(str);
        }
    });

    bench("lodash", () => {
        for (const str of strings) {
            lodashVersion(str);
        }
    });
});