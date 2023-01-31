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
 * @returns Returns the slice of `array`.
 */

export function takeWhile<TArr>(array: TArr[], predicate: (elem: TArr) => boolean): TArr[] {
    const result: TArr[] = [];

    for (const element of array) {
        if (predicate(element)) {
            result.push(element);
        } else {
            break;
        }
    }

    return result;
}
