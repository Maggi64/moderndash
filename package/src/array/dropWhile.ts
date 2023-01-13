/**
 * Creates a slice of `array` excluding elements dropped from the beginning.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 *
 * @category Array
 * @param predicate - The function invoked per iteration.
 * @param array - The array to query.
 * @returns Returns the slice of `array`.
 * @example
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * dropWhile(({ active }) => active, users)
 * // => objects for ['pebbles']
 */

export function dropWhile<T>(predicate: (value: T) => boolean, array: T[]): T[] {
    const index = array.findIndex(x => !predicate(x));
    return array.slice(index === -1 ? array.length : index);
}
