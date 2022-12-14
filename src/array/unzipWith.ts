/**
 * This method is like `unzip` except that it accepts `iteratee` to specify
 * how regrouped values should be combined. The iteratee is invoked with the
 * elements of each group: (...group).
 *
 * @category Array
 * @param iteratee - The function to combine regrouped values.
 * @param array - The array of grouped elements to process.
 * @returns Returns the new array of regrouped elements.
 * @example
 * const zipped = zip([1, 2], [10, 20], [100, 200])
 * // => [[1, 10, 100], [2, 20, 200]]
 *
 * unzipWith(add, zipped)
 * // => [3, 30, 300]
 */

export function unzipWith<TInput extends unknown[], TOutput>(iteratee: (...t: TInput) => TOutput, array: TInput[]): TOutput[] {
    const result: TOutput[] = [];

    for (const elements of array) {
        result.push(iteratee(...elements));
    }

    return result;
}
