import type { MinimumTwoArrays } from '@type/MinimumTwoArrays.js';

import { isEqual } from '@validate/isEqual';

/**
 * Create a new array with values from the first array that are not present in the other arrays.
 * 
 * Optionally, use a compare function to determine the comparison of elements (default: {@link isEqual}).
 * @example
 * difference([2, 1], [2, 3])
 * // => [1]
 *
 * // ---- Custom compare function ----
 * difference((a, b) => Math.floor(a) === Math.floor(b), [1.2, 3.1], [1.3, 2.4])
 * // => [3.1]
 *
 * // ---- Only compare by id ----
 * const arr1 = [{ id: 1, name: 'Yeet' }, { id: 3, name: 'John' }];
 * const arr2 = [{ id: 3, name: 'Carl' }, { id: 4, name: 'Max' }];
 *
 * difference((a, b) => a.id === b.id, arr1, arr2)
 * // => [{ id: 1, name: 'Yeet' }]
 * @param arrays - First array is inspected, others are excluded.
 * @returns Returns the new array of filtered values.
 */

export function difference<TArr>(...arrays: MinimumTwoArrays<TArr>): TArr[];
export function difference<TArr>(arrayOrCompFn: (a: TArr, b: TArr) => boolean, ...arrays: MinimumTwoArrays<TArr>): TArr[];
export function difference<TArr>(arrayOrCompFn: TArr[] | ((a: TArr, b: TArr) => boolean), ...arrays: MinimumTwoArrays<TArr>): TArr[] {
    const withCompareFn = typeof arrayOrCompFn === 'function';
    const compareFN = withCompareFn ? arrayOrCompFn as (a: TArr, b: TArr) => boolean : isEqual;

    const [firstArray, ...restArrays] = withCompareFn ? arrays : [arrayOrCompFn, ...arrays];
    const difference: TArr[] = [];

    firstArray.forEach(element => {
        if (!restArrays.some(array => array.some(item => compareFN(item, element)))) {
            difference.push(element);
        }
    });

    return difference;
}