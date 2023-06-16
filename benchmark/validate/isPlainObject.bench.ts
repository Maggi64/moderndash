import { isPlainObject as lodashVersion } from "lodash-es";
import { isPlainObject } from "moderndash";
import { isObject as radashVersion } from "radash";
import { bench, describe } from "vitest";

describe("isPlainObject", () => {
    const object = { "a": 1, "b": 2, "c": 3, "d": [1, 2, 3] };
    const notObject = "notObject";
    const arrayObject = [1, 2, 3];
    const nullObject = null;

    bench("moderndash", () => {
        isPlainObject(object);
        isPlainObject(notObject);
        isPlainObject(arrayObject);
        isPlainObject(nullObject);
    });

    bench("lodash", () => {
        lodashVersion(object);
        lodashVersion(notObject);
        lodashVersion(arrayObject);
        lodashVersion(nullObject);
    });

    bench("radash", () => {
        radashVersion(object);
        radashVersion(notObject);
        radashVersion(arrayObject);
        radashVersion(nullObject);
    });
});