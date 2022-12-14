import { test, it, expect } from 'vitest';

import { union } from '@array/union';

test('union', () => {
    const array1 = [1, 2, 3];
    const array2 = [2, 3, 4];
    const array3 = [3, 4];

    it('should return a new array with the unique elements from all of the provided arrays', () => {
        const result = union(array1, array2, array3);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an empty array if no arrays are provided', () => {
        const result = union();
        expect(result).toEqual([]);
    });

    it('should return the original array if only one array is provided', () => {
        const result = union(array1);
        expect(result).toEqual(array1);
    });
});
