/**
 * Calculates the median of an array of numbers
 * 
 * @example
 * median([1, 2, 3, 4, 5]) // => 3
 * median([1, 2, 3, 4, 5, 6]) // => 3.5
 * 
 * @param arr The input array of numbers
 * @returns The median of the input array
 */

export function median(arr: number[]): number {
    if (arr.length === 0)
        throw new Error('Input array must not be empty');
    const sortedArray = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sortedArray.length / 2);
    return sortedArray.length % 2 === 0 ? ((sortedArray[mid - 1] + sortedArray[mid]) / 2) : sortedArray[mid];
}