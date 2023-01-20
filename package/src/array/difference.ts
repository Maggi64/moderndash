import type { MinimumTwoArrays } from '../types';

import { differenceWith } from '@array/differenceWith';
import { isEqual } from '@lang/isEqual';

/**
 * Creates an array of `array` values not included in the other given arrays. The order and references of result values are determined by the first array.
 *
 * **Note:** Unlike `pullAll`, this method returns a new array.
 *
 * @category Array
 * @param arrays - First array is inspected, others are excluded.
 * @returns Returns the new array of filtered values.
 * @example
 * difference([2, 1], [2, 3])
 * // => [1]
 */

export function difference<TInput>(...arrays: MinimumTwoArrays<TInput>): TInput[] {
    return differenceWith(isEqual, ...arrays);
}
