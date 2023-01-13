import { zipWith } from '@array/zipWith';

/**
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
 * the second of which contains the second elements of the given arrays, and so on.
 *
 * @category Array
 * @param arrays - The arrays to process.
 * @returns Returns the new array of grouped elements.
 * @example
 * zip(['a', 'b'], [1, 2], [true, false])
 * // => [['a', 1, true], ['b', 2, false]]
 */

export function zip<TInput>(...arrays: TInput[][]): TInput[][] {
    return zipWith((...t) => t, ...arrays);
}
