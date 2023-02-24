import { describe, expect, test, vi } from 'vitest';

import { randomFloat } from '@number/randomFloat.js';

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
        const min = 1;
        const max = 10;

        for (let i = 0; i < 10; i++) {
            const result = randomFloat(min, max);

            expect(Number.isInteger(result)).toBeFalsy();  // not be an integer 
            expect((result % 1) !== 0).toBeTruthy();  // have decimal places 
        } 

    });
});