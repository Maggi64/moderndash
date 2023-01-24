/**
 * Creates a slice of `array` excluding elements dropped from the end.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 *
 * const users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * dropRightWhile(users, { active }) => active)
 * // => objects for ['barney']
 * @category Array
 * @param predicate - The function invoked per iteration.
 * @param array - The array to query.
 * @returns Returns the slice of `array`.
 * @example
 */


export function dropRightWhile<T>(array: T[], predicate: (value: T) => boolean) {
    let i = array.length;
    while (i > 0 && predicate(array[i - 1])) {
        i--;
    }
    return array.slice(0, i);
}
