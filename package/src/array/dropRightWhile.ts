/**
 * Creates a slice of `array` excluding elements dropped from the end.  
 * Elements are dropped until `predicate` returns falsey.
 *
 * @example
 * const users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * dropRightWhile(users, ({ active }) => active)
 * // => objects for ['barney']
 * @param predicate The function invoked per iteration.
 * @param array The array to query.
 * @template TElem The type of the array elements.
 * @returns Returns the slice of `array`.
 */

export function dropRightWhile<TElem>(array: readonly TElem[], predicate: (value: TElem) => boolean) {
    let i = array.length;
    while (i > 0 && predicate(array[i - 1])) {
        i--;
    }
    return array.slice(0, i);
}
