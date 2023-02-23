/**
 * Gets a random element an array. A single element is returned by default.  
 * Specify the `multi` parameter to get an array of multiple random elements.
 *
 * If the array is empty, `undefined` is returned.  
 * If `multi` is defined it returns an empty array.  
 * @example
 * sample([1, 2, 3, 4])
 * // => 2
 *
 * sample([1, 2, 3, 4], 2)
 * // => [3, 1]
 * @param array The array to sample.
 * @returns Returns the random element.
 */

export function sample<TArr>(array: TArr[]): TArr | undefined;
export function sample<TArr>(array: TArr[], multi: number): TArr[];
export function sample<TArr>(array: TArr[], multi?: number): TArr | undefined | TArr[] {
    if (multi === undefined) {
        if (array.length === 0) return undefined;
        return getSingleSample(array);
    }

    if (multi && array.length === 0) return [];

    // Multiple samples
    const result = new Array<TArr>(multi);
    for (let i = 0; i < multi; i++) {
        result[i] = getSingleSample(array);
    }
    return result;
}

function getSingleSample<TArr>(array: TArr[]): TArr {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}