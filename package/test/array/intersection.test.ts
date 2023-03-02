import { expect, test, describe } from 'vitest';

import { intersection } from '@array/intersection';

describe('intersection', () => {
    test('returns the correct intersections', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [3, 4, 5, 6, 7];

        const result = intersection(arr1, arr2);
        expect(result).toEqual([3, 4, 5]);
    });

    test('returns the correct intersections select special elements', () => {
        const arr1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
        const arr2 = [{ id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }];

        const result = intersection((a, b) => a.id === b.id, arr1, arr2);
        expect(result).toEqual([{ id: 3 }, { id: 4 }, { id: 5 }]);
    });

    test('returns the correct intersections with comporator', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [3, 4, 5, 6, 7];

        const result = intersection((a, b) => a % 2 === 0 && a === b, arr1, arr2);
        expect(result).toEqual([4]);
    });

    test('returns unique values', () => {
        const arr1 = [1, 2, 3, 3, 4, 5];
        const arr2 = [3, 4, 5, 6, 7];
        const arr3 = [3, 4, 5, 6, 7];

        const result = intersection(arr1, arr2, arr3);
        expect(result).toEqual([3, 4, 5]);
    });

    test('handles 1 missing array', () => {
        const arr1 = [1, 2, 3, 4, 5];

        // @ts-expect-error - one array is missing
        const result = intersection((a, b) => a % 2 === 0 && a === b, arr1);
        expect(result).toEqual([]);
    });
});
