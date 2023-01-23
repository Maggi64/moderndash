import { sample } from '@array/sample';

/**
 * Gets `n` random elements at unique keys from `array` up to the
 * size of `array`.
 *
 * @category Array
 * @param size The number of elements to sample.
 * @param array The array to sample.
 * @returns Returns the random elements.
 * @example
 * sampleSize([1, 2, 3], 2)
 * // => [3, 1]
 *
 * sampleSize([1, 2, 3], 4)
 * // => [2, 3, 1]
 */

export function sampleSize<TInput>(array: TInput[], size: number): TInput[] {
    const sampleArray: TInput[] = [];

    if (array.length === 0 || size <= 0) {
        return sampleArray;
    }

    for (let i = 0; i < size; i++) {
        sampleArray.push(sample(array) as TInput);
    }

    return sampleArray;
}
