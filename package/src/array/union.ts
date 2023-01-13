import type { MinimumTwoArrays } from '../types';

/**
 * Creates an array of unique values, in order, from all given arrays using for equality comparisons.
 *
 * @category Array
 * @param arrays - The arrays to inspect.
 * @returns Returns the new array of combined values.
 * @example
 * union([2, 3], [1, 2])
 * // => [2, 3, 1]
 */

export function union<TInput>(...arrays: MinimumTwoArrays<TInput>): TInput[] {
    return [...new Set(arrays.flat())];
}
