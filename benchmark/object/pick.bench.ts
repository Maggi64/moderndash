import { pick as lodashVersion } from "lodash-es";
import { pick } from "moderndash";
import { pick as radashVersion } from "radash";
import { pick as remedaVersion } from "remeda";
import { bench, describe } from "vitest";

import { randomObjectArray } from "../testData.js";


describe("pick", () => {
    
    const objects = randomObjectArray(50);
    const objWithAField = objects.map((obj) => ({ ...obj, a: "a", b: "b", c: "c", d: "d", e: "e" }));
    
    bench("moderndash", () => {
        for (const obj of objWithAField) {
            pick(obj, ["a", "b", "c", "d", "e"]);
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