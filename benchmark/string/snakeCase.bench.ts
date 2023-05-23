import { snakeCase } from "moderndash";
import { snake as radashVersion } from "radash";
import { bench, describe } from "vitest";

import { randomStringArray } from "../testData.js";

describe("snakeCase", () => {
    const stringArray = randomStringArray(200);

    bench("moderndash", () => {
        for (const str of stringArray) {
            snakeCase(str);
        }
    });

    bench("radash", () => {
        for (const str of stringArray) {
            radashVersion(str);
        }
    });
});