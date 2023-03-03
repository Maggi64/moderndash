/**
 * Calculates the median of an array of numbers
 * 
 * Returns `NaN` if the input array is empty.
 * @example
 * median([1, 2, 3, 4, 5]) // => 3
 * median([1, 2, 3, 4, 5, 6]) // => 3.5
 * 
 * @param numbers The input array of numbers
 * @returns The median of the input array
 */

export function median(numbers: readonly number[]): number {
    if (numbers.length === 0)
        return NaN;
    const sortedArray = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sortedArray.length / 2);
    return sortedArray.length % 2 === 0 ? ((sortedArray[mid - 1] + sortedArray[mid]) / 2) : sortedArray[mid];
}