import { truncate as lodashVersion } from "lodash-es";
import { truncate } from "moderndash";
import { bench, describe } from "vitest";

import { randomStringArray } from "../testData.js";

describe("truncate", () => {
    const stringArray = randomStringArray(500);

    bench("moderndash", () => {
        for (const str of stringArray) {
            truncate(str, { length: 8 });
        }
    });

    bench("lodash", () => {
        for (const str of stringArray) {
            lodashVersion(str, { length: 8 });
        }
    });
});
