/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @example
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 * @param chunkSize The length of each chunk
 * @param array The array to chunk
 * @template TElem The type of the array elements
 * @returns Returns the new array of chunks
 */

export function chunk<TElem>(array: readonly TElem[], chunkSize: number): TElem[][] {
    const intSize = Math.trunc(chunkSize);

    if (array.length === 0 || intSize < 1)
        return [];
      
    let index = 0;
    let resultIndex = 0;
    const result = new Array(Math.ceil(array.length / intSize)) as TElem[][];

    while (index < array.length) {
        result[resultIndex++] = array.slice(index, (index += intSize));
    }

    return result;
}