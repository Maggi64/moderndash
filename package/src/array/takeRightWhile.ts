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
 * takeRightWhile(users, user => user.active)
 * // => objects for ['fred', 'pebbles']
 * @param predicate The function invoked per iteration.
 * @param array The array to query.
 * @template TElem The type of the array elements.
 * @returns Returns the slice of `array`.
 */

export function takeRightWhile<TElem>(array: readonly TElem[], predicate: (elem: TElem) => boolean): TElem[] {
    const breakIndex = array.findLastIndex((elem) => !predicate(elem));
    return (breakIndex === -1) ? [...array] : array.slice(breakIndex + 1);
}
