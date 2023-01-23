import { unzipWith } from '@array/unzipWith';

/**
 * This method is like `zip` except that it accepts an array of grouped
 * elements and creates an array regrouping the elements to their pre-zip configuration.
 *
 * @example
 * const zipped = zip(['a', 'b'], [1, 2], [true, false])
 * // => [['a', 1, true], ['b', 2, false]]
 *
 * unzip(zipped)
 * // => [['a', 'b'], [1, 2], [true, false]]
 * @category Array
 * @param array - The array of grouped elements to process.
 * @returns Returns the new array of regrouped elements.
 */

export function unzip<TInput extends unknown[]>(array: TInput[]): TInput[] {
    return unzipWith(array, (...t) => t);
}
