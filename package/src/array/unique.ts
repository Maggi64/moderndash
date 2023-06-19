/**
 * Creates unique array retaining first occurrence of elements.
 *
 * A compare function is optional (default is `===`).
 * 
 * @example
 * unique([2, 1, 2])
 * // => [2, 1]
 * 
 * // compare by object values
 * const users = [
 *   { id: 1, name: 'john' },
 *   { id: 2, name: 'john' },
 *   { id: 2, name: 'john' },
 * ]
 * 
 * unique(users, isEqual)
 * // => [{ id: 1, name: 'john' }, { id: 2, name: 'john' }]
 * 
 * // compare by id
 * unique(users, (a, b) => a.name === b.name)
 * // => [{ id: 1, name: 'john' }]
 *
 * @param array Array to inspect
 * @param iteratee Iteratee invoked per element
 * @template TElem Type of the array elements
 * @returns A new unique array
 */

export function unique<TElem>(array: readonly TElem[], compareFn?: (a: TElem, b: TElem) => boolean): TElem[] {
    if (!compareFn)
        return [...new Set(array)];

    // Custom compare function can't be optimized with Set
    const uniqueArray: TElem[] = [];

    for (const value of array) {
        if (!uniqueArray.some(uniqueValue => compareFn(value, uniqueValue)))
            uniqueArray.push(value);
    }
  
    return uniqueArray;
}
