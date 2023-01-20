/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The function is invoked with one argument: (index).
 *
 * @example
 * times(3, index => console.log("Run", index)))
 * // => "Run 0" | "Run 1" | "Run 2"
 * times(3, Math.random)
 * // => [0.123, 0.456, 0.789]
 * times(4, () => 0)
 * // => [0, 0, 0, 0]
 * @category Function
 * @param n - The number of times to invoke `func`.
 * @param iteratee - The function invoked per iteration.
 * @returns Returns the array of results.
 */

export function times<T>(n: number, func: (index: number) => T): T[] {
    const result: T[] = [];
    for (let i = 0; i < n; i++) {
        result.push(func(i));
    }
    return result;
}