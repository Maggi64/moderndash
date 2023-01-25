import type { IterateeFunction, MinimumTwoArrays, PropertyShorthand } from '@helpers/types';

import { differenceWith } from '@array/differenceWith';
import { getIterateFunction } from '@helpers/shortHands';
import { isEqual } from '@validate/isEqual.js';

/**
 * This method is like `difference` except that it accepts `iteratee` which
 * is invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `pullAllBy`, this method returns a new array.
 *
 * @category Array
 * @param iteratee - The iteratee invoked per element. Or property shorthand.
 * @param arrays - First array to inspect. Others are excluded.

 * @returns Returns the new array of filtered values.
 * @example
 * differenceBy(Math.floor, [2.1, 1.2], [2.3, 3.4])
 * // => [1.2]
 * differenceBy('x', [{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }])
 * // => [{ 'x': 2 }]
 */

export function differenceBy<T>(iteratee: IterateeFunction<T> | PropertyShorthand<T>, ...arrays: MinimumTwoArrays<T>): T[] {
    const iterateeFn = getIterateFunction(iteratee);
    return differenceWith((a, b) => isEqual(iterateeFn(a), iterateeFn(b)), ...arrays);
}
