import { dropRightWhile as lodashVersion } from "lodash-es";
import { dropRightWhile } from "moderndash";
import { bench, describe } from "vitest";

import { randomNumberArray, randomStringArray } from "../testData.js";

describe("dropRightWhile", () => {
    const numArray = randomNumberArray(200);
    const stringArray = randomStringArray(200);

    bench("moderndash", () => {
        dropRightWhile(numArray, (num) => num < 20);
        dropRightWhile(stringArray, (str) => str.includes("a"));
    });

    bench("lodash", () => {
        lodashVersion(numArray, (num) => num < 20);
        lodashVersion(stringArray, (str) => str.includes("a"));
    });
});