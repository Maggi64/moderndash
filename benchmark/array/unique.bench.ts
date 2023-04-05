import { uniq } from "lodash-es";
import { unique } from "moderndash";
import { unique as uniqueRadash } from "radash";
import { uniq as uniqRemeda } from "remeda";
import { bench, describe } from "vitest";

import { randomNumberArray, randomStringArray } from "../testData.js";

describe("unique", () => {
    const strings = randomStringArray(100, "ab");
    const numbers = randomNumberArray(100, 1, 50);

    bench("moderndash", () => {
        unique(strings);
        unique(numbers);
    });

    bench("lodash", () => {
        uniq(strings);
        uniq(numbers);
    });

    bench("radash", () => {
        uniqueRadash(strings);
        uniqueRadash(numbers);
    });

    bench("remeda", () => {
        uniqRemeda(strings);
        uniqRemeda(numbers);
    });
});