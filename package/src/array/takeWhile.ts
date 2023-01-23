/**
 * Creates a slice of `array` with elements taken from the beginning. Elements
 * are taken until `predicate` returns falsey. The predicate is invoked with
 * three arguments: (value, index, array).
 *
 * @category Array
 * @param predicate The function invoked per iteration.
 * @param array The array to query.
 * @returns Returns the slice of `array`.
 * @example
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * takeWhile(({ active }) => active, users)
 * // => objects for ['barney', 'fred']
 */

export function takeWhile<T>(array: T[], predicate: (elem: T) => boolean): T[] {
    const result: T[] = [];

    for (const element of array) {
        if (predicate(element)) {
            result.push(element);
        } else {
            break;
        }
    }

    return result;
}
