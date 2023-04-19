/**
 * Moves an element within an array.
 * 
 * @example
 * ```typescript
 * move([1, 2, 3, 4, 5], 0, 2);
 * // => [2, 3, 1, 4, 5]
 * ```
 * 
 * @param array The input array.
 * @param fromIndex Index of the element to move.
 * @param toIndex Target index for the element.
 * @throws If index is out of bounds.
 * @returns The modified array with the moved element.
 * @template TArr Type of the array elements
 */

export function move<TArr>(array: TArr[], fromIndex: number, toIndex: number): TArr[] {
    if (fromIndex < 0 || fromIndex >= array.length)
        throw new Error(`Invalid 'fromIndex': ${fromIndex}. Must be between 0 and ${array.length - 1}.`);

    if (toIndex < 0 || toIndex >= array.length)
        throw new Error(`Invalid 'toIndex': ${toIndex}. Must be between 0 and ${array.length - 1}.`);

    if (fromIndex === toIndex)
        return array;

    const [element] = array.splice(fromIndex, 1);
    array.splice(toIndex, 0, element);
  
    return array;
}