/**
 * Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept.  
 * The order of result values is determined by the order they occur in the array.
 *
 * A compare function is optional to specify how the array is compared (default is ===).
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
 * @param array The array to inspect.
 * @param iteratee The iteratee invoked per element.
 * @template TElem The type of the array elements.
 * @returns Returns the new duplicate free array.
 */

export function unique<TElem>(array: readonly TElem[], compareFn?: (a: TElem, b: TElem) => boolean): TElem[] {
    // Arrays optimized with native Set
    if (!compareFn)
        return [...new Set(array)];

    const uniqueArray: TElem[] = [];
    for (const value of array) {
        let isUnique = true;
  
        for (const uniqueValue of uniqueArray) {
            if (compareFn(value, uniqueValue)) {
                isUnique = false;
                break;
            }
        }
  
        if (isUnique)
            uniqueArray.push(value);
    }
  
    return uniqueArray;
}
