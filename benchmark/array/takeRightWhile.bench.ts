import { takeRightWhile as lodashVersion } from "lodash-es";
import { takeRightWhile } from "moderndash";
import { bench, describe } from "vitest";

import { randomNumberArray, randomStringArray } from "../testData.js";

describe("takeRightWhile", () => {
    const numArrays = Array.from({ length: 1000 }, () => randomNumberArray(50, 0, 100));
    const stringArrays = Array.from({ length: 1000 }, () => randomStringArray(50, "abcdefg"));

    bench("moderndash", () => {
        for (const array of numArrays)
            takeRightWhile(array, (num) => num < 20);

        for (const array of stringArrays)
            takeRightWhile(array, (str) => str.includes("a"));
    });

    bench("lodash", () => {
        for (const array of numArrays) 
            lodashVersion(array, (num) => num < 20);

        for (const array of stringArrays)
            lodashVersion(array, (str) => str.includes("a"));
    });
});