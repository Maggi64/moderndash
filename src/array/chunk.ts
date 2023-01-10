/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @category Array
 * @returns Returns the new array of chunks.
 * @param chunkSize - The array to process.
 * @param array - The length of each chunk
 * @example
 * chunk(2, ['a', 'b', 'c', 'd'])
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(3, ['a', 'b', 'c', 'd'])
 * // => [['a', 'b', 'c'], ['d']]
 */

export function chunk<TInput>(chunkSize: number, array: TInput[]): TInput[][] {
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
