import { shuffle as lodashVersion } from "lodash-es";
import { shuffle } from "moderndash";
import { shuffle as radashVersion } from "radash";
import { bench, describe } from "vitest";

import { randomNumberArray, randomStringArray } from "../testData.js";

describe("shuffle", () => {
    const strings = randomStringArray(200);
    const numbers = randomNumberArray(200);

    bench("moderndash", () => {
        shuffle(strings);
        shuffle(numbers);
    });

    bench("lodash", () => {
        lodashVersion(strings);
        lodashVersion(numbers);
    });

    bench("radash", () => {
        radashVersion(strings);
        radashVersion(numbers);
    });
});