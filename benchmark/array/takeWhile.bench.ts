import { takeWhile as lodashVersion } from "lodash-es";
import { takeWhile } from "moderndash";
import { takeWhile as remedaVersion } from "remeda";
import { bench, describe } from "vitest";

import { randomNumberArray, randomStringArray } from "../testData.js";

describe("takeWhile", () => {
    const numArray = randomNumberArray(500, 0, 100);
    const stringArray = randomStringArray(500, "ab");

    bench("moderndash", () => {
        takeWhile(numArray, (num) => num < 20);
        takeWhile(stringArray, (str) => str.includes("a"));
    });

    bench("lodash", () => {
        lodashVersion(numArray, (num) => num < 20);
        lodashVersion(stringArray, (str) => str.includes("a"));
    });

    bench("remeda", () => {
        remedaVersion(numArray, (num) => num < 20);
        remedaVersion(stringArray, (str) => str.includes("a"));
    });

});