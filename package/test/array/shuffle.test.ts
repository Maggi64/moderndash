import { test, describe, expect } from 'vitest';

import { shuffle } from '@array/shuffle';

describe('shuffle', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    test('should shuffle the elements of the array', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        const shuffledArray = shuffle(array);
        expect(shuffledArray).not.toEqual(array);
    });

    test('should not modify the original array', () => {
        shuffle(array);
        expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    });
});
