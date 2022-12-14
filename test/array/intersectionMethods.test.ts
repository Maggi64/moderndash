import { expect, test, it } from 'vitest';

import { intersection } from '@array/intersection';
import { intersectionBy } from '@array/intersectionBy';
import { intersectionWith } from '@array/intersectionWith';

test('intersection', () => {
    it('returns the correct intersections', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [3, 4, 5, 6, 7];

        const result = intersection(arr1, arr2);
        expect(result).toEqual([3, 4, 5]);
    });
});

test('intersectionBy', () => {
    it('returns the correct intersections', () => {
        const arr1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
        const arr2 = [{ id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }];

        const result = intersectionBy(arr1, arr2, value => value.id);
        expect(result).toEqual([{ id: 3 }, { id: 4 }, { id: 5 }]);
    });
});


test('intersectionWith', () => {
    test('returns the correct intersections', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [3, 4, 5, 6, 7];

        const result = intersectionWith(arr1, arr2, (a, b) => a % 2 === b % 2);
        expect(result).toEqual([2, 4]);
    });
});
