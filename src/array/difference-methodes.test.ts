import { expect, it, test } from 'vitest';

import { difference } from './difference';

test('difference methods', () => {
    [difference].forEach(methode => {

        it(`${methode.name} should return the difference of two arrays`, () => {
            expect(methode([2, 1], [2, 3])).toEqual([1]);
        });

        it(`${methode.name} should return the difference of multiple arrays`, () => {
            expect(methode([2, 1, 2, 3], [3, 4], [3, 2])).toEqual([1]);
        });

        it(`${methode.name} should treat '-0' as '0'`, () => {
            const array = [-0, 0];
            let actual = array.map(value => methode(array, [value]))
            expect(actual).toEqual([[], []]);
            assert.deepStrictEqual(actual, [[], []]);

            actual = lodashStable.map(func([-0, 1], [1]), lodashStable.toString);
            assert.deepStrictEqual(actual, ['0']);
        });

        it('`_.' + methodName + '` should match `NaN`', function () {
            assert.deepStrictEqual(func([1, NaN, 3], [NaN, 5, NaN]), [1, 3]);
        });

        it('`_.' + methodName + '` should work with large arrays', function () {
            const array1 = lodashStable.range(LARGE_ARRAY_SIZE + 1),
                array2 = lodashStable.range(LARGE_ARRAY_SIZE),
                a = {},
                b = {},
                c = {};

            array1.push(a, b, c);
            array2.push(b, c, a);

            assert.deepStrictEqual(func(array1, array2), [LARGE_ARRAY_SIZE]);
        });

        it('`_.' + methodName + '` should work with large arrays of `-0` as `0`', function () {
            const array = [-0, 0];

            let actual = lodashStable.map(array, function (value) {
                const largeArray = lodashStable.times(LARGE_ARRAY_SIZE, lodashStable.constant(value));
                return func(array, largeArray);
            });

            assert.deepStrictEqual(actual, [[], []]);

            const largeArray = lodashStable.times(LARGE_ARRAY_SIZE, stubOne);
            actual = lodashStable.map(func([-0, 1], largeArray), lodashStable.toString);
            assert.deepStrictEqual(actual, ['0']);
        });

        it('`_.' + methodName + '` should work with large arrays of `NaN`', function () {
            const largeArray = lodashStable.times(LARGE_ARRAY_SIZE, stubNaN);
            assert.deepStrictEqual(func([1, NaN, 3], largeArray), [1, 3]);
        });

        it('`_.' + methodName + '` should work with large arrays of objects', function () {
            const object1 = {},
                object2 = {},
                largeArray = lodashStable.times(LARGE_ARRAY_SIZE, lodashStable.constant(object1));

            assert.deepStrictEqual(func([object1, object2], largeArray), [object2]);
        });

        it('`_.' + methodName + '` should ignore values that are not array-like', function () {
            const array = [1, null, 3];

            assert.deepStrictEqual(func(args, 3, { '0': 1 }), [1, 2, 3]);
            assert.deepStrictEqual(func(null, array, 1), []);
            assert.deepStrictEqual(func(array, args, null), [null]);
        });
    });
});
