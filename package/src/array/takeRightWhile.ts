/**
 * Creates a slice of `array` with elements taken from the end. Elements are
 * taken until `predicate` returns falsey. The predicate is invoked with
 * three arguments: (value, index, array).
 *
 * @category Array
 * @param predicate - The function invoked per iteration.
 * @param array - The array to query.
 * @returns Returns the slice of `array`.
 * @example
 * const users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * takeRightWhile(({ active }) => active, users)
 * // => objects for ['fred', 'pebbles']
 */

export function takeRightWhile<T>(predicate: (elem: T) => boolean, array: T[]): T[] {
    const result: T[] = [];

    for (let i = array.length - 1; i >= 0; i--) {
        if (predicate(array[i])) {
            result.unshift(array[i]);
        } else {
            break;
        }
    }

    return result;
}
