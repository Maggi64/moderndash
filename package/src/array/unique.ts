import { isEqual } from '@validate/isEqual';

/**
 * Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept.  
 * The order of result values is determined by the order they occur in the array.
 *
 * An compare function is optinal to specify how the array is compared (default: {@link isEqual}).
 * 
 * @example
 * unique([2, 1, 2])
 * // => [2, 1]
 *
 * const users = [
 *   { id: 1, name: 'a' },
 *   { id: 1, name: 'c' }
 * ]
 *
 * unique(users, (a, b) => a.id === b.id)
 * // => [{ id: 1, name: 'a' }]
 *
 * @param array The array to inspect.
 * @param iteratee The iteratee invoked per element.
 * @returns Returns the new duplicate free array.
 */

export function unique<TInput>(array: TInput[], compareFn = (a: TInput, b: TInput) => isEqual(a, b)): TInput[] {
    return array.filter((value, index, self) => {
        return self.findIndex(otherValue => compareFn(value, otherValue)) === index;
    });
}
