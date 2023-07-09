/* eslint-disable @typescript-eslint/no-unsafe-call */
import { isEmpty as lodashVersion } from "lodash-es";
import { isEmpty } from "moderndash";
import { isEmpty as radashVersion } from "radash";
import { isEmpty as rambdaVersion } from "rambda";
import { bench, describe } from "vitest";

import { randomObject } from "../testData.js";

describe("isEmpty", () => {
    const object = { "a": 1, "b": 2, "c": 3, "d": [1, 2, 3] };
    const emptyObj = {};
    const set = new Set([1, 2, 3, 4]);
    const emptySet = new Set();
    
    const map = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
    const emptyMap = new Map();

    const bigObject = randomObject(6, true);


    bench("moderndash", () => {
        isEmpty(object);
        isEmpty(emptyObj);
        isEmpty(set);
        isEmpty(emptySet);
        isEmpty(map);
        isEmpty(emptyMap);
        isEmpty(bigObject);
    });

    bench("lodash", () => {
        lodashVersion(object);
        lodashVersion(emptyObj);
        lodashVersion(set);
        lodashVersion(emptySet);
        lodashVersion(map);
        lodashVersion(emptyMap);
        lodashVersion(bigObject);
    });

    bench("radash", () => {
        radashVersion(object);
        radashVersion(emptyObj);
        radashVersion(set);
        radashVersion(emptySet);
        radashVersion(map);
        radashVersion(emptyMap);
        radashVersion(bigObject);
    });

    bench("rambda", () => {
        rambdaVersion(object);
        rambdaVersion(emptyObj);
        rambdaVersion(set);
        rambdaVersion(emptySet);
        rambdaVersion(map);
        rambdaVersion(emptyMap);
        rambdaVersion(bigObject);
    });
});