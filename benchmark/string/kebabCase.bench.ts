import { kebabCase as lodashVersion } from "lodash-es";
import { kebabCase } from "moderndash";
import { dash as radashVersion } from "radash";
import { bench, describe } from "vitest";

import { randomStringArray } from "../testData.js";

describe("kebabCase", () => {
    const stringArray = randomStringArray(200);

    bench("moderndash", () => {
        for (const str of stringArray) {
            kebabCase(str);
        }
    });

    bench("lodash", () => {
        for (const str of stringArray) {
            lodashVersion(str);
        }
    });

    bench("radash", () => {
        for (const str of stringArray) {
            radashVersion(str);
        }
    });
});