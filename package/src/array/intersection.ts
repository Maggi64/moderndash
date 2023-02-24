import type { ArrayMinLength } from '@type/ArrayMinLength.js';

import { fastArrayFlat } from '@helpers/fastArrayFlat.js';

import { unique } from './unique.js';

/**
 * Create an array with unique values from all input arrays, with order based on the first array. 
 * 
 * Optionally, use a compare function for element comparison (default is ===).
 * @example
 * intersection([2, 1], [2, 3])
 * // => [2]
 *
 * // ---- Custom compare function ----
 * const compareFn = (a, b) => Math.floor(a) === Math.floor(b);
 * 
 * intersection(compareFn, [1.2, 1.1], [1.3, 2.4])
 * // => [1.2]
 *
 * // ---- Only compare by id ----
 * const arr1 = [{ id: 1, name: 'Yeet' }, { id: 3, name: 'John' }];
 * const arr2 = [{ id: 3, name: 'Carl' }, { id: 4, name: 'Max' }];
 *
 * intersection((a, b) => a.id === b.id, arr1, arr2)
 * // => [{ id: 3, name: 'John' }]
 * @param arrays The arrays to inspect.
 * @returns Returns the new array of intersecting values.
 */

export function intersection<TArr>(...arrays: ArrayMinLength<TArr[], 2>): TArr[];
export function intersection<TArr>(arrayOrCompFn: (a: TArr, b: TArr) => boolean, ...arrays: ArrayMinLength<TArr[], 2>): TArr[];
export function intersection<TArr>(arrayOrCompFn: TArr[] | ((a: TArr, b: TArr) => boolean), ...arrays: ArrayMinLength<TArr[], 2>): TArr[] {
    const withCompareFn = typeof arrayOrCompFn === 'function';
    const firstArray = unique(withCompareFn ? arrays.shift()! : arrayOrCompFn);
    const combinedRestArray = fastArrayFlat(arrays);

    if (!withCompareFn) {
        const restSet = new Set(combinedRestArray);
        return firstArray.filter(element => restSet.has(element));
    }
    
    const compareFN = arrayOrCompFn as (a: TArr, b: TArr) => boolean;
    const intersection: TArr[] = [];

    for (const element of firstArray) {
        if (arrays.every(array => array.some(item => compareFN(item, element)))) {
            intersection.push(element);
        }
    }

    return intersection;
}