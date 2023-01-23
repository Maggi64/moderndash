/**
 * Gets a random element from `array`.
 *
 * @example
 * sample([1, 2, 3, 4])
 * // => 2
 * @category Array
 * @param array - The array to sample.
 * @returns Returns the random element.
 */

export function sample<TInput>(array: TInput[]): TInput | undefined {
    if (array.length === 0) {
        return undefined;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
