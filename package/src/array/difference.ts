import type { CompareFunction } from "@helpers/ArrayTypeUtils.js";
import type { ArrayMinLength } from "@type/ArrayMinLength.js";

import { fastArrayFlat } from "@helpers/fastArrayFlat.js";

/**
 * Create a new array with values from the first array that are not present in the other arrays.
 * 
 * Optionally, use a compare function to determine the comparison of elements (default is `===`).
 * 
 * @example
 * difference([2, 1], [2, 3], [6])
 * // => [1]
 *
 * // ---- Custom compare function ----
 * const compareByFloor = (a, b) => Math.floor(a) === Math.floor(b);
 * difference([1.2, 3.1], [1.3, 2.4], compareByFloor)
 * // => [3.1]
 *
 * // ---- Only compare by id ----
 * const arr1 = [{ id: 1, name: 'Yeet' }, { id: 3, name: 'John' }];
 * const arr2 = [{ id: 3, name: 'Carl' }, { id: 4, name: 'Max' }];
 *
 * difference(arr1, arr2, (a, b) => a.id === b.id)
 * // => [{ id: 1, name: 'Yeet' }]
 * @param arraysOrCompareFn Two or more arrays with an optional compare function at the end
 * @template TElem The type of the array elements
 * @template TArrays The type of the arrays provided
 * @returns Returns the new array of filtered values
 */

export function difference<TElem>(...arraysOrCompareFn: ArrayMinLength<TElem[], 2>): TElem[];
export function difference<TArrays extends ArrayMinLength<unknown[], 2>>(...arraysOrCompareFn: [...TArrays, CompareFunction<TArrays>]): TArrays[0];
export function difference<TArrays extends ArrayMinLength<unknown[], 2>, TElem>(...arraysOrCompareFn: ArrayMinLength<TElem[], 2> | [...TArrays, CompareFunction<TArrays>]): TArrays[0] {
    const compareFnProvided = typeof arraysOrCompareFn.at(-1) === "function";
    const compareFunction = compareFnProvided && arraysOrCompareFn.pop() as CompareFunction<TArrays>;

    const arrays = arraysOrCompareFn as TArrays;
    const firstArray = arrays.shift()!;
    const combinedRestArray = fastArrayFlat(arrays);

    if (!compareFunction) {
        const restSet = new Set(combinedRestArray);
        return firstArray.filter(element => !restSet.has(element));
    }

    const difference: TArrays[0] = [];
    for (const element of firstArray) {
        if (combinedRestArray.every(item => !compareFunction(element, item))) {
            difference.push(element);
        }
    }

    return difference;
}