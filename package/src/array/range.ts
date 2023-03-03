/**
 * Generates an iterable sequence of numbers starting from `start`, up to and including `end`,
 * with a given `step` between each number.
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
 * @param start The starting number of the sequence.
 * @param end The end number of the sequence.
 * @param step The step between each number in the sequence. Defaults to 1.
 *
 * @returns An iterable sequence of numbers between `start` and `end`, inclusive, with increments of `step`.
 */
export function* range(start: number, end: number, step = 1): Generator<number> {
    if (start > end)
        throw new Error('The start of the range must be less than or equal to the end.');

    if (step <= 0)
        throw new Error('The step must be greater than 0.');
    
    for (let i = start; i <= end; i += step) {
        yield i;
    }
}