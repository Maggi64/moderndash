import type { ArrayMinLength } from '@type/ArrayMinLength.js';

/**
 * Create a new array with values from the first array that are not present in the other arrays.
 * 
 * Optionally, use a compare function to determine the comparison of elements (default is ===).
 * 
 * @example
 * difference([2, 1], [2, 3], [6])
 * // => [1]
 *
 * // ---- Custom compare function ----
 * const compareByFloor = (a, b) => Math.floor(a) === Math.floor(b);
 * difference(compareByFloor, [1.2, 3.1], [1.3, 2.4])
 * // => [3.1]
 *
 * // ---- Only compare by id ----
 * const arr1 = [{ id: 1, name: 'Yeet' }, { id: 3, name: 'John' }];
 * const arr2 = [{ id: 3, name: 'Carl' }, { id: 4, name: 'Max' }];
 *
 * difference((a, b) => a.id === b.id, arr1, arr2)
 * // => [{ id: 1, name: 'Yeet' }]
 * @param arrays First array is inspected, others are excluded.
 * @template TElem The type of the array elements.
 * @returns Returns the new array of filtered values.
 */

export function difference<TElem>(...arrays: ArrayMinLength<TElem[], 2>): TElem[];
export function difference<TElem>(arrayOrCompFn: (a: TElem, b: TElem) => boolean, ...arrays: ArrayMinLength<TElem[], 2>): TElem[];
export function difference<TElem>(arrayOrCompFn: TElem[] | ((a: TElem, b: TElem) => boolean), ...arrays: ArrayMinLength<TElem[], 2>): TElem[] {
    const withCompareFn = typeof arrayOrCompFn === 'function';
    const compareFN = withCompareFn ? arrayOrCompFn as (a: TElem, b: TElem) => boolean : (a: TElem, b: TElem) => a === b;

    const [firstArray, ...restArrays] = withCompareFn ? arrays : [arrayOrCompFn, ...arrays];
    const difference: TElem[] = [];

    for (const element of firstArray) {
        if (!restArrays.some(array => array.some(item => compareFN(item, element)))) {
            difference.push(element);
        }
    }

    return difference;
}