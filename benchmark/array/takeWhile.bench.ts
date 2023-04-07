import { takeWhile as lodashVersion } from "lodash-es";
import { takeWhile } from "moderndash";
import { takeWhile as remedaVersion } from "remeda";
import { bench, describe } from "vitest";

import { randomNumberArray, randomStringArray } from "../testData.js";

describe("takeWhile", () => {
    const numArrays = Array.from({ length: 1000 }, () => randomNumberArray(50, 0, 100));
    const stringArrays = Array.from({ length: 1000 }, () => randomStringArray(50, "abcdefg"));

    bench("moderndash", () => {
        for (const array of numArrays)
            takeWhile(array, (num) => num < 20);

        for (const array of stringArrays)
            takeWhile(array, (str) => str.includes("a"));
    });

    bench("lodash", () => {
        for (const array of numArrays) 
            lodashVersion(array, (num) => num < 20);

        for (const array of stringArrays)
            lodashVersion(array, (str) => str.includes("a"));
    });

    bench("remeda", () => {
        for (const array of numArrays) 
            remedaVersion(array, (num) => num < 20);

        for (const array of stringArrays)
            remedaVersion(array, (str) => str.includes("a"));
    });
});