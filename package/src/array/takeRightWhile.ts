/**
 * Creates a slice of `array` with elements taken from the end.  
 * Elements are taken until `predicate` returns falsey.
 * 
 * @example
 * const users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * takeRightWhile(users, ({ active }) => active)
 * // => objects for ['fred', 'pebbles']
 * @param predicate The function invoked per iteration.
 * @param array The array to query.
 * @returns Returns the slice of `array`.
 */

export function takeRightWhile<TArr>(array: TArr[], predicate: (elem: TArr) => boolean): TArr[] {
    const result: TArr[] = [];

    for (let i = array.length - 1; i >= 0; i--) {
        if (predicate(array[i])) {
            result.unshift(array[i]);
        } else {
            break;
        }
    }

    return result;
}
