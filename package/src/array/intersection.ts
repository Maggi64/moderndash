import type { MinimumTwoArrays } from '../types';

import { intersectionWith } from '@array/intersectionWith';
import { isEqual } from '@validate/isEqual';

/**
 * Creates an array of unique values that are included in all given arrays.
 * The order and references of result values are determined by the first array.
 *
 * @category Array
 * @param arrays - The arrays to inspect.
 * @returns Returns the new array of intersecting values.
 * @example
 * intersection([2, 1], [2, 3])
 * // => [2]
 */

export function intersection<TInput>(...arrays: MinimumTwoArrays<TInput>): TInput[] {
    return intersectionWith(isEqual, ...arrays);
}
