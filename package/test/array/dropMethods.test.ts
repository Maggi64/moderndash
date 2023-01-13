import { it, expect, describe } from 'vitest';

import { dropRightWhile } from '@array/dropRightWhile';
import { dropWhile } from '@array/dropWhile';

const array = [2, 4, 5, 6];

describe('dropWhile', () => {
    it('removes elements from the start of the array until the predicate returns false', () => {
        expect(dropWhile(x => x % 2 === 0, array)).toEqual([5, 6]);
    });

    it('returns an empty array if the predicate always returns true', () => {
        expect(dropWhile(() => true, array)).toEqual([]);
    });

    it('returns the original array if the predicate always returns false', () => {
        expect(dropWhile(() => false, array)).toEqual(array);
    });

    it('returns an empty array if the input array is empty', () => {
        expect(dropWhile(() => true, [])).toEqual([]);
    });
});

describe('dropRightWhile', () => {
    it('should drop elements while `predicate` returns truthy', () => {
        expect(dropRightWhile(n => n > 4, array)).toEqual([2, 4]);
    });
});
