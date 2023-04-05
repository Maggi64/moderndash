import { groupBy as lodashVersion } from "lodash-es";
import { group } from "moderndash";
import { group as radashVersion } from "radash";
import { groupBy as remedaVersion } from "remeda";
import { bench, describe } from "vitest";

import { randomNumberArray, randomStringArray } from "../testData.js";

describe("group", () => {
    const strArray = randomStringArray(100);
    const numArray = randomNumberArray(100);
    
    bench("moderndash", () => {
        group(strArray, (elem) => elem.length);
        group(numArray, (elem) => elem % 2);
    });

    bench("lodash", () => {
        lodashVersion(strArray, (elem) => elem.length);
        lodashVersion(numArray, (elem) => elem % 2);
    });

    bench("radash", () => {
        radashVersion(strArray, (elem) => elem.length);
        radashVersion(numArray, (elem) => elem % 2);
    });

    bench("remeda", () => {
        remedaVersion(strArray, (elem) => elem.length);
        remedaVersion(numArray, (elem) => elem % 2);
    });
});
