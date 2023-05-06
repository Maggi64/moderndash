import { intersection as lodashVersion, intersectionWith as lodashVersionWith } from "lodash-es";
import { intersection } from "moderndash";
import { intersection as remedaVersion } from "remeda";
import { bench, describe } from "vitest";

import { randomNumberArray, randomStringArray } from "../testData.js";

const arraySize = 100;

describe("intersection", () => {
    const numberArrays = Array.from({ length: arraySize }, () => randomNumberArray(arraySize, 0, 50));
    const stringArrays = Array.from({ length: arraySize }, () => randomStringArray(arraySize));

    bench("moderndash", () => {
        for (let i = 0; i < arraySize; i++) {
            intersection(numberArrays[i], numberArrays[i + 1]);
            intersection(stringArrays[i], stringArrays[i + 1]);
        }
    });

    bench("lodash", () => {
        for (let i = 0; i < arraySize; i++) {
            lodashVersion(numberArrays[i], numberArrays[i + 1]);
            lodashVersion(stringArrays[i], stringArrays[i + 1]);
        }
    });

    bench("remeda", () => {
        for (let i = 0; i < arraySize; i++) {
            remedaVersion(numberArrays[i], numberArrays[i + 1]);
            remedaVersion(stringArrays[i], stringArrays[i + 1]);
        }
    });
});

describe("intersectionWith", () => {
    const numberArrays = Array.from({ length: arraySize }, () => randomNumberArray(arraySize, 0, 50));
    const stringArrays = Array.from({ length: arraySize }, () => randomStringArray(arraySize));

    bench("moderndash", () => {
        for (let i = 0; i < arraySize; i++) {
            intersection(numberArrays[i], numberArrays[i + 1], (a, b) => a - b === 0);
            intersection(stringArrays[i], stringArrays[i + 1], (a, b) => a.replace("a", "") === b.replace("a", "b"));
        }
    });

    bench("lodash", () => {
        for (let i = 0; i < arraySize; i++) {
            lodashVersionWith(numberArrays[i], numberArrays[i + 1], (a, b) => a - b === 0);
            lodashVersionWith(stringArrays[i], stringArrays[i + 1], (a, b) => a.replace("a", "") === b.replace("a", "b"));
        }
    });
});
