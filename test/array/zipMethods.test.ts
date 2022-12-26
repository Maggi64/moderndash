import { describe, test, expect } from 'vitest';

import { zipWith } from '@array/zipWith';

describe('zipWith function', () => {
    test('returns the expected result for three arrays of the same length', () => {
        const array1 = [1, 2, 3];
        const array2 = [10, 20, 30];
        const array3 = [100, 200, 300];

        const result = zipWith((a, b, c) => a + b + c, array1, array2, array3);

        expect(result).toEqual([111, 222, 333]);
    });

    test('returns the expected result for arrays of different lengths', () => {
        const array1 = [1, 2, 3, 4];
        const array2 = [10, 20, 30];
        const array3 = [100, 200];

        const result = zipWith((a, b, c) => a + b + c, array1, array2, array3);

        expect(result).toEqual([111, 222]);
    });

    test('returns an empty array for empty input arrays', () => {
        const array1: number[] = [];
        const array2: number[] = [];
        const array3: number[] = [];

        const result = zipWith((a, b, c) => a + b + c, array1, array2, array3);

        expect(result).toEqual([]);
    });

    test('works with arrays of different types', () => {
        const array1 = ['a', 'b', 'c'];
        const array2 = [1, 2, 3];
        const array3 = [true, false, true];
        // Todo fix type error
        const result = zipWith((a, b, c) => a + b + c, array1, array2, array3);

        expect(result).toEqual(['a1true', 'b2false', 'c3true']);
    });
});
