import { startCase as lodashVersion } from "lodash-es";
import { titleCase } from "moderndash";
import { title as radashVersion } from "radash";
import { bench, describe } from "vitest";

import { randomStringArray } from "../testData.js";

describe("titleCase", () => {
    const stringArray = randomStringArray(200);

    bench("moderndash", () => {
        for (const str of stringArray) {
            titleCase(str);
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