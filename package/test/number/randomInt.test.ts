import { describe, expect, test } from 'vitest';

import { randomInt } from '@number/randomInt.js';


describe('randomInt', () => {
    test('return a number between min and max, including min and max', () => {
        const min = 1;
        const max = 10;

        expect(randomInt(min, max)).toBeGreaterThanOrEqual(min);
        expect(randomInt(min, max)).toBeLessThanOrEqual(max);
    });

    test('return a different number each time', () => {
        const min = 1;
        const max = 10000000;

        expect(randomInt(min, max)).not.toEqual(randomInt(min, max));
    });

    test('throw an error if min is greater than max', () => {
        const min = 10;
        const max = 1;

        expect(() => randomInt(min, max)).toThrowError(); 
    }); 
});