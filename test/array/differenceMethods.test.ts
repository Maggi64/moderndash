import { describe, expect, it } from 'vitest';

import { difference } from '@array/difference';
import { differenceBy } from '@array/differenceBy';
import { differenceWith } from '@array/differenceWith';

describe('Basic difference function', () => {
    [difference, differenceBy, differenceWith].forEach(methode => {
        it(`${methode.name} should return the difference of two arrays`, () => {
            expect(methode([2, 1], [2, 3])).toEqual([1]);
        });

        it(`${methode.name} should return the difference of multiple arrays`, () => {
            expect(methode([2, 1, 2, 3], [3, 4, 3, 2])).toEqual([1]);
        });

        it(`${methode.name} should treat '-0' as '0'`, () => {
            const array = [-0, 0];
            const actual = array.map(value => methode(array, [value]));
            expect(actual).toEqual([[], []]);

            expect(methode([-0, 1], [0])).toEqual([1]);
        });

        it(`${methode.name} should match 'NaN'`, () => {
            expect(methode([1, NaN, 3], [NaN, 5, NaN])).toEqual([1, 3]);
        });

        // Todo Reimplement this test
        // it(`${methode.name} should ignore values that are not array-like`, () => {
        //     const array = [1, null, 3];

        //     assert.deepStrictEqual(func(args, 3, { '0': 1 }), [1, 2, 3]);
        //     assert.deepStrictEqual(func(null, array, 1), []);
        //     assert.deepStrictEqual(func(array, args, null), [null]);
        // });
    });
});

describe('differenceBy', () => {
    it('should return match based on input function', () => {
        expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2]);
    });
});

describe('differenceWith', () => {
    it('should return match based on input function', () => {
        expect(differenceWith([{ x: 1 }, { x: 2 }], [{ x: 1 }], (a, b) => a.x === b.x)).toEqual([{ x: 2 }]);
    });
});
