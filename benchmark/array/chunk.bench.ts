import { chunk as chunkLodash } from "lodash-es";
import { chunk } from "moderndash";
import { cluster as chunkRadash } from "radash";
import { chunk as chunkRemeda } from "remeda";
import { bench, describe } from "vitest";

import { randomNumberArray, randomObjectArray, randomStringArray } from "../testData.js";

describe("chunk", () => {
    const strArray = randomStringArray(100);
    const numArray = randomNumberArray(100);
    const objArray = randomObjectArray(20);

    bench("moderndash", () => {
        chunk(strArray, 5);
        chunk(numArray, 5);
        chunk(objArray, 5);
    });

    bench("lodash", () => {
        chunkLodash(strArray, 5);
        chunkLodash(numArray, 5);
        chunkLodash(objArray, 5);
    });

    bench("radash", () => {
        chunkRadash(strArray, 5);
        chunkRadash(numArray, 5);
        chunkRadash(objArray, 5);
    }); 

    bench("remeda", () => {
        chunkRemeda(strArray, 5);
        chunkRemeda(numArray, 5);
        chunkRemeda(objArray, 5);
    });
});