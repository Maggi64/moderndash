import { it, expect, describe } from 'vitest';

import { union } from '@array/union';
import { unionBy } from '@array/unionBy';
import { unionWith } from '@array/unionWith';


describe('union', () => {
    const array1 = [1, 2, 3];
    const array2 = [2, 3, 4];
    const array3 = [3, 4, [5]];

    it('should return a new array with the unique elements from all of the provided arrays', () => {
        const result = union(array1, array2, array3);
        expect(result).toEqual([1, 2, 3, 4, [5]]);
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

describe('unionBy', () => {
    it('should return the union of the arrays, using the iteratee to determine uniqueness', () => {
        const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
        const moreObjects = [{ x: 2 }, { x: 3 }, { x: 4 }];
        expect(unionBy(o => o.x, objects, moreObjects)).toEqual([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }]);

        // The `property` iteratee shorthand.
        expect(unionBy('x', objects, moreObjects)).toEqual([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }]);
    });
});
