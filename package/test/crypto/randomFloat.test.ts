import { describe, expect, test } from 'vitest';

import { randomFloat } from '@crypto/randomFloat.js';

describe('randomFloat', () => {
    test('throw an error if min is greater than max', () => {
        expect(() => randomFloat(10, 1)).toThrowError();
    });

    test('return a number between min and max, including min and max', () => {
        const min = 1;
        const max = 10;

        for (let i = 0; i < 10; i++) {
            const result = randomFloat(min, max);
            expect(result).toBeGreaterThanOrEqual(min);
            expect(result).toBeLessThanOrEqual(max);
        } 
    });

    test('return a float', () => {
        const min = 1.1;
        const max = 10.1;

        for (let i = 0; i < 10; i++) {
            const result = randomFloat(min, max);

            expect(Number.isInteger(result)).toBeFalsy();  // not be an integer 
            expect((result % 1) !== 0).toBeTruthy();  // have decimal places 
        } 
    });

    test('can return the upper and lower bounds', () => {
        const min = 0;
        const max = Number.MIN_VALUE;
        
        const results = [];

        for (let i = 0; i < 20; i++) {
            results.push(randomFloat(min, max));
        } 
        
        expect(results).toContain(min);
        expect(results).toContain(max);
    });

    test('average of 100000 random numbers should be close to the middle', () => {
        const min = 0;
        const max = 1;
        const iterations = 100000;
        let sum = 0;

        for (let i = 0; i < iterations; i++) {
            sum += randomFloat(min, max);
        }

        const average = sum / iterations;

        expect(average).toBeGreaterThanOrEqual(0.499);
        expect(average).toBeLessThanOrEqual(0.501);
    }, { retry: 3 });
});