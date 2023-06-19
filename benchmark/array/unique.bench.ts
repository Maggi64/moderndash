import { uniq as uniqLodash, uniqWith as uniqWithLodash } from "lodash-es";
import { unique } from "moderndash";
import { unique as uniqueRadash } from "radash";
import { uniq as uniqRambda, uniqWith as uniqWithRambda } from "rambda";
import { uniq as uniqRemeda, uniqWith as uniqWithRemeda } from "remeda";
import { bench, describe } from "vitest";

import { randomNumberArray, randomStringArray } from "../testData.js";

const arraySize = 1000;

describe("unique", () => {
    const strings = randomStringArray(arraySize, "ab");
    const numbers = randomNumberArray(arraySize, 1, 50);

    bench("moderndash", () => {
        unique(strings);
        unique(numbers);
    });

    bench("lodash", () => {
        uniqLodash(strings);
        uniqLodash(numbers);
    });

    bench("rambda", () => {
        uniqRambda(strings);
        uniqRambda(numbers);
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

const customCompareFn = (a: string | number, b: string | number) => a === b;

describe("unique with custom compare function", () => {
    const strings = randomStringArray(arraySize, "ab");
    const numbers = randomNumberArray(arraySize, 1, 50);
    
    bench("moderndash", () => {
        unique(strings, customCompareFn);
        unique(numbers, customCompareFn);
    });
    
    bench("lodash", () => {
        uniqWithLodash(strings, customCompareFn);
        uniqWithLodash(numbers, customCompareFn);
    });

    bench("remeda", () => {
        uniqWithRemeda(strings, customCompareFn);
        uniqWithRemeda(numbers, customCompareFn);
    });

    bench("rambda", () => {
        uniqWithRambda(customCompareFn, strings);
        uniqWithRambda(customCompareFn, numbers);
    });
});
