import { isPlainObject as lodashVersion } from "lodash-es";
import { isPlainObject } from "moderndash";
import { isObject as radashVersion } from "radash";
import { bench, describe } from "vitest";

import { randomNumberArray, randomObjectArray, randomStringArray } from "../testData.js";

describe("isPlainObject", () => {
    const elements = [...randomObjectArray(20), ...randomNumberArray(10), ...randomStringArray(12), ...randomObjectArray(5)];

    bench("moderndash", () => {
        for (const object of elements) {
            isPlainObject(object);
        }
    });

    bench("radash", () => {
        for (const object of elements) {
            radashVersion(object);
        }
    });

    bench("lodash", () => {
        for (const object of elements) {
            lodashVersion(object);
        }
    });    
});