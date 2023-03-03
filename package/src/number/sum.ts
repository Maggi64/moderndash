/**
 * Calculates the sum of an array of numbers.
 * 
 * Returns `NaN` if the input array is empty.
 * @example
 * sum([1, 2, 3, 4, 5]) // => 15
 * 
 * @param numbers The input array of numbers
 * @returns The sum of the input array 
 */

export function sum(numbers: readonly number[]): number {
    if (numbers.length === 0)
        return NaN;
    return numbers.reduce((total, current) => total + current, 0);
}