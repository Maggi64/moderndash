import { pascalCase } from "moderndash";
import { pascal as radashVersion } from "radash";
import { bench, describe } from "vitest";

import { randomStringArray } from "../testData.js";

describe("pascalCase", () => {
    const stringArray = randomStringArray(200);

    bench("moderndash", () => {
        for (const str of stringArray) {
            pascalCase(str);
        }
    });

    bench("radash", () => {
        for (const str of stringArray) {
            radashVersion(str);
        }
    });
});