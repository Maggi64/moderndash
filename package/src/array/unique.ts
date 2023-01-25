import type { IterateeFunction } from '@helpers/types.js';

import { isEqual } from '@validate/isEqual';

/**
 * Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept.
 * The order of result values is determined by the order they occur in the array.
 *
 * An iteratee function is optional, to specify the value to be compared.
 *
 * @example
 * unique([2, 1, 2])
 * // => [2, 1]
 *
 * const users = [
 *      { id: 1, name: 'a' },
 *      { id: 1, name: 'c' }
 * ]
 *
 * unique(users, value => value.id)
 * // => [{ id: 1, name: 'a' }]
 *
 *
 * @category Array
 * @param array - The array to inspect.
 * @param iteratee - The iteratee invoked per element.
 * @returns Returns the new duplicate free array.
 */

export function unique<TInput>(array: TInput[], iteratee?: IterateeFunction<TInput>): TInput[] {
    const compareFn = (a: TInput, b: TInput) =>
        isEqual(iteratee ? iteratee(a) : a, iteratee ? iteratee(b) : b);

    return array.filter((value, index, self) => {
        return self.findIndex(otherValue => compareFn(value, otherValue)) === index;
    });
}
