/**
 * Invokes a function `n` times, returning an array of the results of
 * each invocation.
 *
 * The function is invoked with one argument: `index`
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
 * @param func - The function invoked per iteration.
 * @returns Returns an array of results.
 */

export function times<TInput>(n: number, func: (index: number) => TInput): TInput[] {
    const result: TInput[] = [];
    for (let i = 0; i < n; i++) {
        result.push(func(i));
    }
    return result;
}