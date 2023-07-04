import { omit as lodashVersion } from "lodash-es";
import { omit } from "moderndash";
import { omit as radashVersion } from "radash";
import { omit as remedaVersion } from "remeda";
import { bench, describe } from "vitest";

import { randomObjectArray } from "../testData.js";

describe("omit", () => {
    
    const objects = randomObjectArray(30);
    const objWithAField = objects.map((obj) => ({ ...obj, a: "a", b: "b", c: "c", d: "d", e: "e" }));
    
    bench("moderndash", () => {
        for (const obj of objWithAField) {
            omit(obj, ["a", "b", "c", "d", "e"]);
        }
    });

    bench("radash", () => {
        for (const obj of objWithAField) {
            radashVersion(obj, ["a", "b", "c", "d", "e"]);
        }
    });

    bench("lodash", () => {
        for (const obj of objWithAField) {
            lodashVersion(obj, ["a", "b", "c", "d", "e"]);
        }
    });

    bench("remeda", () => {
        for (const obj of objWithAField) {
            remedaVersion(obj, ["a", "b", "c", "d", "e"]);
        }
    });
});