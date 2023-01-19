import type { GenericFunction } from '../types.js';

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @category Function
 * @param n - The number of calls at which `func` is no longer invoked.
 * @param func - The function to restrict.
 * @returns Returns the new restricted function.
 * @example
 * const caution = () => alert("Caution!");
 *
 * // Only call caution two times
 * before(2, caution)
 */

export function before<TFunc extends GenericFunction>(n: number, func: TFunc): TFunc {
    let count = 0;
    let result: ReturnType<TFunc>;
    return ((...args: Parameters<TFunc>): ReturnType<TFunc> => {
        if (count < n) {
            count += 1;
            result = func(...args);
        }
        return result;
    }) as TFunc;
}
