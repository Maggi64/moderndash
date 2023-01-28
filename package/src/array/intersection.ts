import type { MinimumTwoArrays } from '@helpers/types';

import { isEqual } from '@validate/isEqual';

/**
 * Creates an array of unique values that are included in all given arrays.
 * The order and references of result values are determined by the first array.
 *
 * An compare function is optinal to specify how the elements of the arrays are compared.
 * Default compare function is {@link isEqual}.
 *
 * @example
 * intersection([2, 1], [2, 3])
 * // => [2]
 *
 * // ---- Custom compare function ----
 * intersection((a, b) => Math.floor(a) === Math.floor(b), [1.2, 1.1], [1.3, 2.4])
 * // => [1.2]
 *
 * // ---- Only compare by id ----
 * const arr1 = [{ id: 1, name: 'Yeet' }, { id: 3, name: 'John' }];
 * const arr2 = [{ id: 3, 'Carl' }, { id: 4, name: 'Max' }];
 *
 * intersection((a, b) => a.id === b.id, arr1, arr2)
 * // => [{ id: 3, name: 'John' }]
 * @category Array
 * @param arrays - The arrays to inspect.
 * @returns Returns the new array of intersecting values.
 */

export function intersection<TArr>(...arrays: MinimumTwoArrays<TArr>): TArr[];
export function intersection<TArr>(arrayOrCompFn: (a: TArr, b: TArr) => boolean, ...arrays: MinimumTwoArrays<TArr>): TArr[];
export function intersection<TArr>(arrayOrCompFn: TArr[] | ((a: TArr, b: TArr) => boolean), ...arrays: MinimumTwoArrays<TArr>): TArr[] {
    const withCompareFn = typeof arrayOrCompFn === 'function';
    const compareFN = withCompareFn ? arrayOrCompFn as (a: TArr, b: TArr) => boolean : isEqual;

    const [firstArray, ...restArrays] = withCompareFn ? arrays : [arrayOrCompFn, ...arrays];
    const intersection: TArr[] = [];

    firstArray.forEach(element => {
        if (restArrays.every(array => array.some(item => compareFN(item, element)))) {
            intersection.push(element);
        }
    });

    return intersection;
}