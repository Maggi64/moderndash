import type { IterateeFunction, MinimumTwoArrays, PropertyShorthand } from '../types';

import { unionWith } from '@array/unionWith';
import { getIterateFunction } from '@helpers/shortHands';
import { isEqualWith } from '@lang/isEqualWith';

/**
 * This method is like `union` except that it accepts `iteratee` which is
 * invoked for each element of each `arrays` to generate the criterion by
 * which uniqueness is computed. Result values are chosen from the first
 * array in which the value occurs. The iteratee is invoked with one argument:
 * (value).
 *
 * @category Array
 * @param arrays - The arrays to inspect.
 * @param iteratee - The iteratee invoked per element. Or property shorthand.
 * @returns Returns the new array of combined values.
 * @example
 * unionBy(Math.floor, [2.1], [1.2, 2.3])
 * // => [2.1, 1.2]
 */

export function unionBy<T>(iteratee: IterateeFunction<T> | PropertyShorthand<T>, ...arrays: MinimumTwoArrays<T>): T[] {
    const iterateeFunction = getIterateFunction(iteratee);
    return unionWith((a, b) => isEqualWith(iterateeFunction, a, b), ...arrays);
}
