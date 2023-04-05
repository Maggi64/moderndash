import { flatKeys } from "moderndash";
import { crush as radashVersion } from "radash";
import { bench, describe } from "vitest";

describe("set", () => {
    const obj = { a: { b: 2 }, c: { d: 3 }, e: { f: [1, 2] } };

    bench("moderndash", () => {
        flatKeys(obj);
    });

    bench("radash", () => {
        radashVersion(obj);
    });
});
