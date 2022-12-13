import { expect, it, test } from 'vitest';

import { dropWhile } from '@array/dropWhile';

test('dropWhile', () => {
    const array = [1, 2, 3, 4, 5, 6];

    it('removes elements from the start of the array until the predicate returns false', () => {
        expect(dropWhile(array, x => x % 2 === 0)).toEqual([3, 4, 5, 6]);
    });

    it('returns an empty array if the predicate always returns true', () => {
        expect(dropWhile(array, () => true)).toEqual([]);
    });

    it('returns the original array if the predicate always returns false', () => {
        expect(dropWhile(array, () => false)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('returns an empty array if the input array is empty', () => {
        expect(dropWhile([], () => true)).toEqual([]);
    });
});
