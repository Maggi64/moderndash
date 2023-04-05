import { describe, test, expect } from "vitest";

import { merge } from "@object/merge.js";


describe("merge", () => {
    test("merge two or more objects", () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const obj3 = { c: 3 };

        expect(merge(obj1, obj2, obj3)).toEqual({ a: 1, b: 2, c: 3 });

        const nestedObj1 = { a: { b: 1 } };
        const nestedObj2 = { a: { c: 2 } };

        expect(merge(nestedObj1, nestedObj2)).toEqual({ a: { b: 1, c: 2 } });
    }); 

    test("overwrites non objects", () => {
        const obj1 = { a: 1 };
        const obj2 = { a: { b: 1 } };

        expect(merge(obj1, obj2)).toEqual({ a: { b: 1 } });

        const mixedTypes1 = { a: 1 }; 
        const mixedTypes2 = { a:"Yes" }; 

        expect(merge(mixedTypes1, mixedTypes2)).toEqual({ a:"Yes" }); 
    });

    test("do not merge arrays", () => {
        const array1 = { a:[1, 2] };
        const array2 = { a:[3, 4] };

        expect(merge(array1, array2)).toEqual({ a:[3, 4] });
    });
});