import { isPlainObject as isPlainObjectLodash } from "lodash-es";
import { isPlainObject } from "moderndash";
import { isObject as isPlainObjectRadash } from "radash";
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
        isPlainObjectLodash(object);
        isPlainObjectLodash(notObject);
        isPlainObjectLodash(arrayObject);
        isPlainObjectLodash(nullObject);
    });

    bench("radash", () => {
        isPlainObjectRadash(object);
        isPlainObjectRadash(notObject);
        isPlainObjectRadash(arrayObject);
        isPlainObjectRadash(nullObject);
    });
});