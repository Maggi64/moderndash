import { test, it, expect } from 'vitest';

import { dropRightWhile } from '@array/dropRightWhile';

test('dropRightWhile', () => {
    const array = [1, 2, 3, 4];

    it('should drop elements while `predicate` returns truthy', () => {
        expect(dropRightWhile(array, n => n > 2)).toEqual([1, 2]);
    });
});
