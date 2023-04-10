import { difference as lodashVersion, differenceWith as lodashVersionWith } from "lodash-es";
import { difference } from "moderndash";
import { diff as radashVersion } from "radash";
import { difference as remedaVersion, differenceWith as remedaVersionWith } from "remeda";
import { bench, describe } from "vitest";

import { randomNumberArray, randomStringArray } from "../testData.js";

describe("difference", () => {
    const array1 = randomNumberArray(50, 0, 50);
    const array2 = randomNumberArray(50, 0, 50);

    const array3 = randomStringArray(50);
    const array4 = randomStringArray(50);

    bench("moderndash", () => {
        difference(array1, array2);
        difference(array3, array4);
    });

    bench("lodash", () => {
        lodashVersion(array1, array2);
        lodashVersion(array3, array4);
    });
    
    bench("radash", () => {
        radashVersion(array1, array2);
        radashVersion(array3, array4);
    });

    bench("remeda", () => {
        remedaVersion(array1, array2);
        remedaVersion(array3, array4);
    });
});

describe("difference 4 arrays", () => {
    const array1 = randomNumberArray(50, 0, 50);
    const array2 = randomNumberArray(50, 0, 50);
    const array3 = randomNumberArray(50, 0, 50);
    const array4 = randomNumberArray(50, 0, 50);

    bench("moderndash", () => {
        difference(array1, array2, array3, array4);
    });

    bench("lodash", () => {
        lodashVersion(array1, array2, array3, array4);
    });
});

describe("difference compareFn", () => {
    const array1 = randomNumberArray(50, 0, 50);
    const array2 = randomNumberArray(50, 0, 50);
    
    bench("moderndash", () => {
        difference(array1, array2, (a, b) => a - 1 === b);
    });

    bench("lodash", () => {
        lodashVersionWith(array1, array2, (a, b) => a - 1 === b);
    });

    bench("remeda", () => {
        remedaVersionWith(array1, array2, (a, b) => a - 1 === b);
    });
});