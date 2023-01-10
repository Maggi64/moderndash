import type { IterateeFunction, PropertyShorthand } from '../types';

import { uniqWith } from '@array/uniqWith';
import { getIterateFunction } from '@helpers/shortHands';

/**
 * This method is like `uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array.
 *
 * @category Array
 * @param array - The array to inspect.
 * @param iteratee - The iteratee invoked per element. Or property shorthand.
 * @returns Returns the new duplicate free array.
 * @example
 * uniqBy(Math.floor, [2.1, 1.2, 2.3])
 * // => [2.1, 1.2]
 */

export function uniqBy<T>(iteratee: IterateeFunction<T> | PropertyShorthand<T>, array: T[]): T[] {
    const iterateeFunction = getIterateFunction(iteratee);

    return uniqWith((a, b) => iterateeFunction(a) === iterateeFunction(b), array);
}
