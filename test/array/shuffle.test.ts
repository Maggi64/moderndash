import { test, describe, expect } from 'vitest';

import { shuffle } from '@array/shuffle';

describe('shuffle', () => {
    test('should shuffle the elements of the array', () => {
        const array = [1, 2, 3, 4, 5];
        const shuffledArray = shuffle(array);
        expect(shuffledArray).not.toEqual(array);
    });

    test('should not modify the original array', () => {
        const array = [1, 2, 3, 4, 5];
        shuffle(array);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });
});
