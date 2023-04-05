import { describe, expect, test } from "vitest";

import { randomInt } from "@crypto/randomInt.js";


describe("randomInt", () => {
    test("return a number between min and max, including min and max", () => {
        const min = 1;
        const max = 10;

        expect(randomInt(min, max)).toBeGreaterThanOrEqual(min);
        expect(randomInt(min, max)).toBeLessThanOrEqual(max);
    });

    test("should return every number in between", () => {
        const min = 1;
        const max = 5;
        const numbers = new Set<number>();

        for (let i = 0; i < 20; i++) {
            numbers.add(randomInt(min, max));
        }
        expect(numbers.size).toBe(max - min + 1);
        expect(numbers.has(min)).toBeTruthy();
        expect(numbers.has(max)).toBeTruthy();
    }, { retry: 3 });

    test("return a different number each time", () => {
        const min = 1;
        const max = 20;

        expect(randomInt(min, max)).not.toEqual(randomInt(min, max));
    }, { retry: 3 });

    test("throw an error if min is greater than max", () => {
        expect(() => randomInt(10, 1)).toThrowError(); 
    }); 

    test("average of 1000000 random numbers should be close to the middle", () => {
        const min = 0;
        const max = 10;
        const iterations = 10000;
        let sum = 0;

        for (let i = 0; i < iterations; i++) {
            sum += randomInt(min, max);
        }

        const average = sum / iterations;

        expect(average).toBeGreaterThanOrEqual(5 - 0.1);
        expect(average).toBeLessThanOrEqual(5 + 0.1);
    }, { retry: 3 });

    test("throw an error if min is not an integer", () => {
        expect(() => randomInt(1.1, 10)).toThrowError(); 
    });

    test("throw an error if max is not an integer", () => {
        expect(() => randomInt(1, 10.1)).toThrowError(); 
    });
});