/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @returns Returns the new array of chunks.
 * @param chunkSize - The array to process.
 * @param array - The length of each chunk
 * @example
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */

export function chunk<TInput>(array: TInput[], chunkSize: number): TInput[][] {
    const sizeInteger = Math.trunc(chunkSize);
    if (array.length === 0 || sizeInteger < 1) {
        return [];
    }

    const chunkedArray = [];
    let i = 0;

    while (i < array.length) {
        chunkedArray.push(array.slice(i, i + sizeInteger));
        i += sizeInteger;
    }

    return chunkedArray;
}
