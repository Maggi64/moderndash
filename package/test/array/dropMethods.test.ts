import { it, expect, describe } from 'vitest';

import { dropRightWhile } from '@array/dropRightWhile';
import { dropWhile } from '@array/dropWhile';

const array = [2, 4, 5, 6];

describe('dropWhile', () => {
    it('removes elements from the start of the array until the predicate returns false', () => {
        expect(dropWhile(array, x => x % 2 === 0)).toEqual([5, 6]);
    });

    it('returns an empty array if the predicate always returns true', () => {
        expect(dropWhile(array, () => true)).toEqual([]);
    });

    it('returns the original array if the predicate always returns false', () => {
        expect(dropWhile(array, () => false)).toEqual(array);
    });

    it('returns an empty array if the input array is empty', () => {
        expect(dropWhile([], () => true)).toEqual([]);
    });
});

describe('dropRightWhile', () => {
    it('drop elements while `predicate` returns truthy', () => {
        expect(dropRightWhile(array, n => n > 4)).toEqual([2, 4]);
    });
});
