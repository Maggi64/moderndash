import { hash } from "moderndash";
import { bench, describe } from "vitest";

import { randomObjectArray } from "../testData.js";

describe("hash", () => {
    const objArr = randomObjectArray(20);

    bench("moderndash", async () => {
        for (const obj of objArr) {
            // eslint-disable-next-line no-await-in-loop
            await hash(obj);
        }
    });
});