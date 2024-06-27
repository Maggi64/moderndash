import type { CompareFunction } from "@helpers/ArrayTypeUtils.js";
import type { ArrayMinLength } from "@type/ArrayMinLength.js";

import { fastArrayFlat } from "@helpers/fastArrayFlat.js";

import { unique } from "./unique.js";

/**
 * Create an array with unique values that are present in all arrays.  
 * The order of the values is based on the first array. 
 * 
 * Optionally, use a compare function for element comparison (default is `===`).
 * 
 * @deprecated 
 * **Deprecated: Use the native [Set.prototype.intersection()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) function instead.**
 * 
 * @example
 * intersection([2, 1], [2, 3], [6, 2])
 * // => [2]
 *
 * // ---- Custom compare function ----
 * const compareFn = (a, b) => Math.floor(a) === Math.floor(b);
 * 
 * intersection([1.2, 1.1], [1.3, 2.4], compareFn)
 * // => [1.2]
 *
 * // ---- Only compare by id ----
 * const arr1 = [{ id: 1, name: 'Yeet' }, { id: 3, name: 'John' }];
 * const arr2 = [{ id: 3, name: 'Carl' }, { id: 4, name: 'Max' }];
 *
 * intersection(arr1, arr2, (a, b) => a.id === b.id)
 * // => [{ id: 3, name: 'John' }]
 * 
 * @param arraysOrCompareFn Two or more arrays with an optional compare function at the end
 * @template TElem Type of the array elements
 * @template TArrays Type of the arrays provided
 * @returns New array of intersecting values
 */

export function intersection<TElem>(...arraysOrCompareFn: ArrayMinLength<TElem[], 2>): TElem[];
export function intersection<TArrays extends ArrayMinLength<unknown[], 2>>(...arraysOrCompareFn: [...TArrays, CompareFunction<TArrays>]): TArrays[0];
export function intersection<TArrays extends ArrayMinLength<unknown[], 2>, TElem>(...arraysOrCompareFn: ArrayMinLength<TElem[], 2> | [...TArrays, CompareFunction<TArrays>]): TArrays[0] {
    const compareFnProvided = typeof arraysOrCompareFn.at(-1) === "function";
    const compareFunction = compareFnProvided && arraysOrCompareFn.pop() as CompareFunction<TArrays>;

    const arrays = arraysOrCompareFn as TArrays;
    const firstArray = unique(arrays.shift()!);
    const combinedRestArray = fastArrayFlat(arrays);

    if (!compareFunction) {
        const restSet = new Set(combinedRestArray);
        return firstArray.filter(element => restSet.has(element));
    }
    
    const intersection: TArrays[0] = [];

    for (const element of firstArray) {
        if (combinedRestArray.some(item => compareFunction(element, item))) {
            intersection.push(element);
        }
    }

    return intersection;
}
