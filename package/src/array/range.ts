/**
 * Generates iterable sequence including numbers from start to end, with step increments.
 *
 * @example
 * for (const num of range(1, 5)) {
 *   console.log(num);
 * }
 * // => 1 2 3 4 5
 * 
 * // Generate an array of even numbers between 0 and 10:
 * const arr = [...range(0, 10, 2)];
 * // => [0, 2, 4, 6, 8, 10]
 * 
 * @param start Start number of sequence
 * @param end End number of sequence
 * @param step Step between numbers, default: 1
 * @throws If range is negative or step is 0
 * @returns Generator of numbers within the range
 */
export function* range(start: number, end: number, step = 1): Generator<number> {
    if (start > end)
        throw new Error("The start of the range must be less than or equal to the end.");

    if (step <= 0)
        throw new Error("The step must be greater than 0.");
    
    for (let i = start; i <= end; i += step) {
        yield i;
    }
}