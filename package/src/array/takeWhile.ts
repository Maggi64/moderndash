/**
 * Creates a slice of `array` with elements taken from the beginning.  
 * Elements are taken until `predicate` returns falsey.
 *
 * @example
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * takeWhile(users, ({ active }) => active)
 * // => objects for ['barney', 'fred']
 * @param predicate The function invoked per iteration.
 * @param array The array to query.
 * @template TElem The type of the array elements.
 * @returns Returns the slice of `array`.
 */

export function takeWhile<TElem>(array: readonly TElem[], predicate: (elem: TElem) => boolean): TElem[] {
    const result: TElem[] = [];

    for (const element of array) {
        if (predicate(element)) {
            result.push(element);
        } else {
            break;
        }
    }

    return result;
}
