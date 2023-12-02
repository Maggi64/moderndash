import { default as deepFreezePackage } from "deep-freeze";
import { deepFreeze } from "moderndash";
import { describe, bench } from "vitest";
import { randomObjectArray } from "../testData.js";

describe("deepFreeze", () => {

    const objectArray = randomObjectArray(30);

    bench("moderndash", () => {
        const cloneArray = structuredClone(objectArray);
        for (const testObject of cloneArray) {
            deepFreeze(testObject);
        }
    });

    bench("deep-freeze package", () => {
        const cloneArray = structuredClone(objectArray);
        for (const testObject of cloneArray) {
            deepFreezePackage(testObject);
        }
    });
});
