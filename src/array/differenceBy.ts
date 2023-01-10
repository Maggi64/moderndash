import type { IterateeFunction, MinimumTwoArrays, PropertyShorthand } from '../types';

import { differenceWith } from '@array/differenceWith';
import { getIterateFunction } from '@helpers/shortHands';
import { isEqualWith } from '@lang/isEqualWith';
/**
 * This method is like `difference` except that it accepts `iteratee` which
 * is invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array. The iteratee is invoked with one argument:
 * (value).
 *
 * **Note:** Unlike `pullAllBy`, this method returns a new array.
 *
 * @since 4.0.0
 * @category General Use
 * @param iteratee - The iteratee invoked per element.
 * @param arrays - The array to inspect.
 * @param {...Array} [values] The values to exclude.

 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [1.2]
 */


export function differenceBy<T>(iteratee: IterateeFunction<T> | PropertyShorthand<T>, ...arrays: MinimumTwoArrays<T>): T[] {
    const iterateeFunction = getIterateFunction(iteratee);
    return differenceWith((a, b) => isEqualWith(iterateeFunction, a, b), ...arrays);
}
