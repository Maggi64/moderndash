/**
 * Gets a random element from `array`.
 *
 * @category Array
 * @param array - The array to sample.
 * @returns Returns the random element.
 * @example
 * sample([1, 2, 3, 4])
 * // => 2
 */

export function sample<T>(array: T[]): T | undefined {
    if (array.length === 0) {
        return undefined;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
