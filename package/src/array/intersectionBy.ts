import type { IterateeFunction, MinimumTwoArrays, PropertyShorthand } from '../types';

import { intersectionWith } from '@array/intersectionWith';
import { getIterateFunction } from '@helpers/shortHands';
import { isEqualWith } from '@lang/isEqualWith';

/**
 * This method is like `intersection` except that it accepts `iteratee`
 * which is invoked for each element of each `arrays` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array. The iteratee is invoked with one argument:
 * (value).
 *
 * @example
 * intersectionBy(Math.floor, [2.1, 1.2], [2.3, 3.4])
 * // => [2.1]
 * @category Array
 * @param iteratee - The iteratee invoked per element. Or property shorthand.
 * @param arrays - The arrays to inspect.
 * @returns Returns the new array of intersecting values.
 */

export function intersectionBy<TInput>(iteratee: IterateeFunction<TInput> | PropertyShorthand<TInput>, ...arrays: MinimumTwoArrays<TInput>): TInput[] {
    const iterateeFunction = getIterateFunction(iteratee);
    return intersectionWith((a, b) => isEqualWith(a, b, iterateeFunction), ...arrays);
}
