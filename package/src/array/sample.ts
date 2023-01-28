/**
 * Gets a random element an array. A single element is returned by default.  
 * Specify the `size` parameter to get an array of multiple random elements.
 *
 * If the array is empty, `undefined` is returned.
 * @example
 * sample([1, 2, 3, 4])
 * // => 2
 *
 * sample([1, 2, 3, 4], 2)
 * // => [3, 1]
 * @category Array
 * @param array - The array to sample.
 * @returns Returns the random element.
 */

export function sample<TArr>(array: TArr[]): TArr | undefined;
export function sample<TArr>(array: TArr[], size: number): TArr[];
export function sample<TArr>(array: TArr[], size?: number): TArr | undefined | TArr[] {
    if (array.length === 0)
        return undefined;
    if (size === undefined)
        return getSingleSample(array);

    // Multiple samples
    const result = new Array<TArr>(size);
    for (let i = 0; i < size; i++) {
        result[i] = getSingleSample(array);
    }
    return result;
}

function getSingleSample<TArr>(array: TArr[]): TArr {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}