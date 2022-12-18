import { expect, it, describe } from 'vitest';

import { intersection } from '@array/intersection';
import { intersectionBy } from '@array/intersectionBy';
import { intersectionWith } from '@array/intersectionWith';

describe('intersection', () => {
    it('returns the correct intersections', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [3, 4, 5, 6, 7];

        const result = intersection(arr1, arr2);
        expect(result).toEqual([3, 4, 5]);
    });
});

describe('intersectionBy', () => {
    it('returns the correct intersections', () => {
        const arr1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
        const arr2 = [{ id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }];

        const result = intersectionBy(value => value.id, arr1, arr2);
        expect(result).toEqual([{ id: 3 }, { id: 4 }, { id: 5 }]);
    });
});


describe('intersectionWith', () => {
    it('returns the correct intersections', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [3, 4, 5, 6, 7];

        const result = intersectionWith((a, b) => a % 2 === 0 && a === b, arr1, arr2);
        expect(result).toEqual([4]);
    });
});
