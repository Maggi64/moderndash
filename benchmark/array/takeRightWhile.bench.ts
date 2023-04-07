import { takeRightWhile as lodashVersion } from "lodash-es";
import { takeRightWhile } from "moderndash";
import { bench, describe } from "vitest";

import { randomNumberArray, randomStringArray } from "../testData.js";

describe("takeRightWhile", () => {
    const numArray = randomNumberArray(500, 0, 100);
    const stringArray = randomStringArray(500, "ab");

    bench("moderndash", () => {
        takeRightWhile(numArray, (num) => num < 20);
        takeRightWhile(stringArray, (str) => str.includes("a"));
    });

    bench("lodash", () => {
        lodashVersion(numArray, (num) => num < 20);
        lodashVersion(stringArray, (str) => str.includes("a"));
    });

});