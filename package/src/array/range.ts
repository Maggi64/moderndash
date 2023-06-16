/**
 * Creates an array from start to end (inclusive), stepping by step.  
 * If start is larger than end, the array is generated in reverse
 *
 * @example
 * for (const num of range(1, 5)) {
 *   console.log(num);
 * }
 * // => 1 2 3 4 5
 * 
 * // Array of even numbers between 0 and 10:
 * range(0, 10, 2);
 * // => [0, 2, 4, 6, 8, 10]
 * 
 * // Descending range:
 * range(5, 0, 2);
 * // => [5, 3, 1]
 * 
 * @param start Start number of sequence
 * @param end End number of sequence
 * @param step Step between numbers, default: 1
 * @throws If range is negative or step is 0
 * @returns An array of numbers
 */
export function range(start: number, end: number, step = 1): number[] {
    if (step <= 0)
        throw new Error("The step must be greater than 0.");

    step = start > end ? -step : step;
    const length = Math.floor(Math.abs((end - start) / step)) + 1;

    const result = new Array(length) as number[];
    
    for (let i = 0; i < length; i++) {
        result[i] = start + (i * step);
    }

    return result;
}