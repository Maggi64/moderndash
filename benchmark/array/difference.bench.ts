/* eslint-disable unicorn/no-for-loop */
import { difference as lodashVersion, differenceWith as lodashVersionWith } from "lodash-es";
import { difference } from "moderndash";
import { diff as radashVersion } from "radash";
import { difference as remedaVersion, differenceWith as remedaVersionWith } from "remeda";
import { bench, describe } from "vitest";

import { randomNumberArray, randomStringArray } from "../testData.js";

const size = 100;

const arrays1 = Array.from({ length: size }, () => randomNumberArray(50, 0, 50));
const arrays2 = Array.from({ length: size }, () => randomNumberArray(50, 0, 50));
const arrays3 = Array.from({ length: size }, () => randomNumberArray(50, 0, 50));
const arrays4 = Array.from({ length: size }, () => randomNumberArray(50, 0, 50));

const strArray1 = Array.from({ length: size }, () => randomStringArray(50));
const strArray2 = Array.from({ length: size }, () => randomStringArray(50));

describe("difference", () => {
    bench("moderndash", () => {
        for (let i = 0; i < arrays1.length; i++) {
            difference(arrays1[i], arrays2[i]);
            difference(strArray1[i], strArray2[i]);
        }
    });

    bench("lodash", () => {
        for (let i = 0; i < arrays1.length; i++) {
            lodashVersion(arrays1[i], arrays2[i]);
            lodashVersion(strArray1[i], strArray2[i]);
        }
    });
    
    bench("radash", () => {
        for (let i = 0; i < arrays1.length; i++) {
            radashVersion(arrays1[i], arrays2[i]);
            radashVersion(strArray1[i], strArray2[i]);
        }
    });

    bench("remeda", () => {
        for (let i = 0; i < arrays1.length; i++) {
            remedaVersion(arrays1[i], arrays2[i]);
            remedaVersion(strArray1[i], strArray2[i]);
        }
    });
});

describe("difference 4 arrays", () => {
    bench("moderndash", () => {
        for (let i = 0; i < arrays1.length; i++) {
            difference(arrays1[i], arrays2[i], arrays3[i], arrays4[i]);
        }
    });

    bench("lodash", () => {
        for (let i = 0; i < arrays1.length; i++) {
            lodashVersion(arrays1[i], arrays2[i], arrays3[i], arrays4[i]);
        }
    });
});

describe("difference compareFn", () => {
    bench("moderndash", () => {
        for (let i = 0; i < arrays1.length; i++) {
            difference(arrays1[i], arrays2[i], (a, b) => a - 1 === b);
        }
    });

    bench("lodash", () => {
        for (let i = 0; i < arrays1.length; i++) {
            lodashVersionWith(arrays1[i], arrays2[i], (a, b) => a - 1 === b);
        }
    });

    bench("remeda", () => {
        for (let i = 0; i < arrays1.length; i++) {
            remedaVersionWith(arrays1[i], arrays2[i], (a, b) => a - 1 === b);
        }
    });
});