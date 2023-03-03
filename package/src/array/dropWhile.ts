/**
 * Creates a slice of `array` excluding elements dropped from the beginning.  
 * Elements are dropped until `predicate` returns falsey.
 *
 * @example
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * dropWhile(users, ({ active }) => active)
 * // => objects for ['pebbles']
 * @param predicate The function invoked per iteration.
 * @param array The array to query.
 * @template TElem The type of the array elements.
 * @returns Returns the slice of `array`.
 */

export function dropWhile<TElem>(array: readonly TElem[], predicate: (value: TElem) => boolean): TElem[] {
    const index = array.findIndex(x => !predicate(x));
    return array.slice(index === -1 ? array.length : index);
}
