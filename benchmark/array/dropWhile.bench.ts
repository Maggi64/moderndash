import { dropWhile as lodashVersion } from "lodash-es";
import { dropWhile } from "moderndash";
import { bench, describe } from "vitest";

import { randomNumberArray, randomStringArray } from "../testData.js";

describe("dropWhile", () => {
    const numArray = randomNumberArray(200);
    const stringArray = randomStringArray(200);

    bench("moderndash", () => {
        dropWhile(numArray, (num) => num < 20);
        dropWhile(stringArray, (str) => str.includes("a"));
    });

    bench("lodash", () => {
        lodashVersion(numArray, (num) => num < 20);
        lodashVersion(stringArray, (str) => str.includes("a"));
    });
});