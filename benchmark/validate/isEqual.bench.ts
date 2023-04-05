/* eslint-disable @typescript-eslint/no-unsafe-call */
import { isEqual as equalLodash } from "lodash-es";
import { isEqual } from "moderndash";
import { isEqual as equalRadash } from "radash";
import { equals as equalRemeda } from "remeda";
import { bench, describe } from "vitest";


describe("isEqual", () => {
    const object = { "a": 1, "b": 2, "c": 3, "d": [1, 2, 3] };
    const other = { "a": 1, "b": 2, "c": 3, "d": [1, 2, 4] };
    const same = structuredClone(object);

    const set = new Set([1, 2, 3, 4]);
    const sameSet = new Set([1, 2, 3, 4]);
    const otherSet = new Set([1, 2, 3, 5]);

    // Try object with regex/map/date
    const complex = { "a": 1, "b": 2, "c": 3, "d": [1, 2, 3], "e": /abc/, "f": new Map(), "g": new Date(1) };
    const sameComplex = { "a": 1, "b": 2, "c": 3, "d": [1, 2, 3], "e": /abc/, "f": new Map(), "g": new Date(1) };
    const otherComplex = { "a": 1, "b": 2, "c": 3, "d": [1, 2, 3], "e": /abc/, "f": new Map(), "g": new Date(3) };

    bench("moderndash", () => {
        isEqual(object, other);
        isEqual(object, same);

        isEqual(complex, otherComplex);
        isEqual(complex, sameComplex);

        isEqual(set, otherSet);
        isEqual(set, sameSet);
    });

    bench("lodash", () => {
        equalLodash(object, other);
        equalLodash(object, same);

        equalLodash(complex, otherComplex);
        equalLodash(complex, sameComplex);

        equalLodash(set, otherSet);
        equalLodash(set, sameSet);
    });

    bench("radash", () => {
        equalRadash(object, other);
        equalRadash(object, same);

        equalRadash(complex, otherComplex);
        equalRadash(complex, sameComplex);

        equalRadash(set, otherSet);
        equalRadash(set, sameSet);
    });

    bench("remeda", () => {
        equalRemeda(object, other);
        equalRemeda(object, same);

        equalRemeda(complex, otherComplex);
        equalRemeda(complex, sameComplex);

        equalRemeda(set, otherSet);
        equalRemeda(set, sameSet);
    });
});