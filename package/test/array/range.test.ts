import { expect, test, describe } from 'vitest';

import { range } from '@array/range.js';


describe('range', () => {
    test('should generate a sequence of numbers between start and end, inclusive, with increments of step', () => {
        const result = [...range(1, 5)];

        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should generate an array of even numbers between 0 and 10', () => {
        const result = [...range(0, 10, 2)];

        expect(result).toEqual([0, 2, 4, 6, 8, 10]);
    });

    test('should throw an error if the start is greater than the end', () => {
        expect(() => [...range(5, 1)]).toThrowError();
    });

    test('should throw an error if the step is 0 or negative', () => {
        expect(() => [...range(1, 5, 0)]).toThrowError();
        expect(() => [...range(1, 5, -1)]).toThrowError(); 
    }); 
});