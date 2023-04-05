import { describe, expect, test } from "vitest";

import { isEqual } from "@validate/isEqual";

describe("isEqual", () => {
    test("numbers", () => {
        expect(isEqual(1, 1)).toBe(true);
        expect(isEqual(1, 2)).toBe(false);
    });

    test("strings", () => {
        expect(isEqual("a", "a")).toBe(true);
        expect(isEqual("a", "b")).toBe(false);
    });

    test("booleans", () => {
        expect(isEqual(true, true)).toBe(true);
        expect(isEqual(true, false)).toBe(false);
    });

    test("null", () => {
        expect(isEqual(null, null)).toBe(true);
        expect(isEqual(null, undefined)).toBe(false);
    });

    test("undefined", () => {
        expect(isEqual(undefined, undefined)).toBe(true);
        expect(isEqual(undefined, null)).toBe(false);
    });

    test("objects", () => {
        expect(isEqual({ a: 1 }, { a: 1 })).toBe(true);
        expect(isEqual({ a: 1 }, { a: 2 })).toBe(false);
    });

    test("dates", () => {
        expect(isEqual(new Date(1), new Date(1))).toBe(true);
        expect(isEqual(new Date(1), new Date(2))).toBe(false);
    });

    test("arrays", () => {
        expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
        expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    });

    test("nested objects", () => {
        expect(isEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
        expect(isEqual({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false);
    });

    test("nested arrays", () => {
        expect(isEqual([[1], [2], [3]], [[1], [2], [3]])).toBe(true);
        expect(isEqual([[1], [2], [3]], [[1], [2], [4]])).toBe(false);
    });

    test("nested objects and arrays", () => {
        expect(isEqual({ a: { b: [1] } }, { a: { b: [1] } })).toBe(true);
        expect(isEqual({ a: { b: [1] } }, { a: { b: [2] } })).toBe(false);
    });

    test("objects with different keys", () => {
        expect(isEqual({ a: 1 }, { b: 1 })).toBe(false);
    });

    test("arrays with different lengths", () => {
        expect(isEqual([1, 2, 3], [1, 2])).toBe(false);
    });

    // eslint-disable-next-line unicorn/consistent-function-scoping
    const testFunction = () => { return 1 };
    test("functions", () => {
        expect(isEqual(() => { return 1 }, () => { return 2 })).toBe(false);
        expect(isEqual(testFunction, testFunction)).toBe(true);
    });

    test("objects with functions", () => {
        expect(isEqual({ a: () => 1 }, { a: () => 1 })).toBe(false);
        expect(isEqual({ a: testFunction }, { a: testFunction })).toBe(true);
    });

    test("regExp", () => {
        expect(isEqual(/a(.*)/, /a(.*)/)).toBe(true);
        expect(isEqual(/a/, /b.*/)).toBe(false);
    });

    test("deepEquals with Error objects", () => {
        const error1 = new Error("test error");
        const error2 = new Error("test error");
        expect(isEqual(error1, error1)).toBe(true);
        expect(isEqual(error1, error2)).toBe(false);
    });

    test("array buffers", () => {
        const buffer1 = new ArrayBuffer(2);
        const buffer1View = new Uint8Array(buffer1);
        buffer1View.set([42, 43]);
    
        const buffer2 = new ArrayBuffer(2);
        const buffer2View = new Uint8Array(buffer2);
        buffer2View.set([42, 43]);
    
        const buffer3 = new ArrayBuffer(2);
        const buffer3View = new Uint8Array(buffer3);
        buffer3View.set([42, 44]);
    
        const buffer4 = new ArrayBuffer(3);
    
        expect(isEqual(buffer1, buffer2)).toBe(true);
        expect(isEqual(buffer1, buffer3)).toBe(false);
        expect(isEqual(buffer1, buffer4)).toBe(false);
    });

    test("typed arrays", () => {
        expect(isEqual(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 3]))).toBe(true);
        expect(isEqual(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2]))).toBe(false);
        expect(isEqual(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 4]))).toBe(false);
    });

    test("data views", () => {
        const buffer1 = new ArrayBuffer(2);
        const buffer2 = new ArrayBuffer(2);
        const buffer3 = new ArrayBuffer(3);

        const view1 = new DataView(buffer1);
        const view2 = new DataView(buffer2);
        const view3 = new DataView(buffer3);

        view1.setUint8(0, 42);
        view1.setUint8(1, 43);

        view2.setUint8(0, 42);
        view2.setUint8(1, 43);

        expect(isEqual(view1, view2)).toBe(true);
        expect(isEqual(view1, view3)).toBe(false);
    });
});