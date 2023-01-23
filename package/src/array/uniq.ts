import { uniqWith } from '@array/uniqWith';
import { isEqual } from '@lang/isEqual';

/**
 * Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept.
 * The order of result values is determined by the order they occur in the array.
 *
 * @category Array
 * @param array - The array to inspect.
 * @returns Returns the new duplicate free array.
 * @example
 * uniq([2, 1, 2])
 * // => [2, 1]
 */

export function uniq<TInput>(array: TInput[]): TInput[] {
    return uniqWith(array, isEqual);
}
