import { it, expect, describe } from 'vitest';

import { union } from '@array/union';
import { unionWith } from '@array/unionWith';

describe('union', () => {
    const array1 = [1, 2, 3];
    const array2 = [2, 3, 4];
    const array3 = [3, 4, [5]];

    it('should return a new array with the unique elements from all of the provided arrays', () => {
        const result = union(array1, array2, array3);
        expect(result).toEqual([1, 2, 3, 4, [5]]);
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


describe('unionWith', () => {
    it('returns a new array containing the unique values from the input arrays', () => {
        const result = unionWith((a, b) => a === b, [1, 2, 3], [2, 3, 4], [3, 4, 5]);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('uses the comparator function to determine uniqueness', () => {
        const result = unionWith((a, b) => a.id === b.id, [{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }]);
        expect(result).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });
});
