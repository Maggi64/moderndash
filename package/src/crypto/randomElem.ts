import { randomInt } from './randomInt.js';

/**
 * Gets a random element an array. A single element is returned by default.  
 * Specify the `multi` parameter to get an array of multiple random elements.
 *
 * If the array is empty, `undefined` is returned.  
 * If `multi` is defined it returns an empty array.
 * 
 * It uses `crypto.getRandomValues` to get the random element.
 * @example
 * randomElem([1, 2, 3, 4])
 * // => 2
 *
 * randomElem([1, 2, 3, 4], 2)
 * // => [3, 1]
 * @param array The array to sample.
 * @returns Returns the random element.
 */

export function randomElem<TArr>(array: TArr[]): TArr | undefined;
export function randomElem<TArr>(array: TArr[], multi: number): TArr[];
export function randomElem<TArr>(array: TArr[], multi?: number): TArr | undefined | TArr[] {
    if (multi === undefined) {
        if (array.length === 0) return undefined;
        return getSingleElement(array);
    }

    if (multi && array.length === 0) return [];

    // Multiple samples
    const result = new Array<TArr>(multi);
    for (let i = 0; i < multi; i++) {
        result[i] = getSingleElement(array);
    }
    return result;
}

function getSingleElement<TArr>(array: TArr[]): TArr {
    const randomIndex = randomInt(0, array.length - 1);
    return array[randomIndex];
}