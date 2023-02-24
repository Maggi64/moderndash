import { describe, expect, test } from 'vitest';

import { sum } from '@number/sum.js';

describe('sum', () => {
    test('calculate the sum of an array of numbers', () => {
        expect(sum([1, 2, 3, 4, 5])).toEqual(15);
    });

    test('return the value of a single-element array', () => {
        expect(sum([42])).toEqual(42);
    });

    test('handle negative numbers correctly', () => {
        expect(sum([1, -2, 3])).toEqual(2);
    });

    test('handle floating point numbers correctly', () => {
        expect(sum([1.5, 2.5, 3.5])).toEqual(7.5);
    }); 

    test('is nan when input is an empty array', () => {
        expect(sum([])).toBe(NaN);
    });
});