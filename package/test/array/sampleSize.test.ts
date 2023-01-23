import { describe, expect, test } from 'vitest';

import { sampleSize } from '@array/sampleSize';

describe('sampleSize', () => {
    test('should return an array of the specified size', () => {
        const array = [1, 2, 3, 4, 5];
        const size = 3;
        const result = sampleSize(array, size);
        expect(result).toHaveLength(size);
    });

    test('should return an empty array if size is 0 or less', () => {
        const array = [1, 2, 3, 4, 5];
        const size = 0;
        const result = sampleSize(array, size);
        expect(result).toHaveLength(0);
    });

    test('should return an empty array if the input array is empty', () => {
        const array: number[] = [];
        const size = 3;
        const result = sampleSize(array, size);
        expect(result).toHaveLength(0);
    });

    test('should return a random subset of the input array', () => {
        const array = [1, 2, 3, 4, 5];
        const size = 3;
        const result = sampleSize(array, size);
        expect(expect.arrayContaining(result)).toEqual(array);
    });
});
