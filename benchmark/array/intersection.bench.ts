import { intersection as lodashVersion, intersectionWith as lodashVersionWith } from "lodash-es";
import { intersection } from "moderndash";
import { intersection as remedaVersion } from "remeda";
import { bench, describe } from "vitest";

import { randomNumberArray, randomStringArray } from "../testData.js";

describe("intersection", () => {
    const array1 = randomNumberArray(50, 0, 50);
    const array2 = randomNumberArray(50, 0, 50);

    const array3 = randomStringArray(50);
    const array4 = randomStringArray(50);

    bench("moderndash", () => {
        intersection(array1, array2);
        intersection(array3, array4);
    });

    bench("lodash", () => {
        lodashVersion(array1, array2);
        lodashVersion(array3, array4);
    });

    bench("remeda", () => {
        remedaVersion(array1, array2);
        remedaVersion(array3, array4);
    });
});

describe("intersectionWith", () => {
    const array1 = randomNumberArray(50, 0, 50);
    const array2 = randomNumberArray(50, 0, 50);

    const array3 = randomStringArray(50);
    const array4 = randomStringArray(50);

    bench("moderndash", () => {
        intersection(array1, array2, (a, b) => a - b === 0);
        intersection(array3, array4, (a, b) => a.replace("a", "") === b.replace("a", "b"));
    });

    bench("lodash", () => {
        lodashVersionWith(array1, array2, (a, b) => a - b === 0);
        lodashVersionWith(array3, array4, (a, b) => a.replace("a", "") === b.replace("a", "b"));
    });
});
