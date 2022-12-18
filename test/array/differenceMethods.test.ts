import { describe, expect, it } from 'vitest';

import { difference } from '@array/difference';
import { differenceBy } from '@array/differenceBy';
import { differenceWith } from '@array/differenceWith';

describe('difference', () => {
    it('should return the difference between two arrays', () => {
        const array1 = [1, undefined, null, NaN, 3, 4, 5];
        const array2 = [2, 4, undefined, NaN, null, 8];
        const result = difference(array1, array2);
        expect(result).toEqual([1, NaN, 3, 5]);
    });
});

describe('differenceBy', () => {
    it('should return match based on input function', () => {
        expect(differenceBy(Math.floor, [2.1, 1.2], [2.3, 3.4], [99])).toEqual([1.2]);
    });
});


describe('differenceWith', () => {
    it('should return an array containing the elements that are present in the first array but not in the other arrays', () => {
        const array1 = [1, 2, 3, 4];
        const array2 = [2, 3, 5, 6];
        const array3 = [3, 4, 5, 6];

        const difference = differenceWith((a, b) => a === b, array1, array2, array3);
        expect(difference).toEqual([1]);
    });

    it('should return an empty array if no elements are present in the first array but not in the other arrays', () => {
        const array1 = [1, 2, 3, 4];
        const array2 = [1, 2];
        const array3 = [3, 4];

        const difference = differenceWith((a, b) => a === b, array1, array2, array3);
        expect(difference).toEqual([]);
    });

    it('should return the first array if no elements are present in the other arrays', () => {
        const array1 = [1, 2, 3, 4];
        const array2: number[] = [];

        const difference = differenceWith((a, b) => a === b, array1, array2);
        expect(difference).toEqual(array1);
    });
});
