import type { GenericFunction } from '@helpers/types.js';

/**
 * Creates a function that invokes `func`, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @category Function
 * @param n - The number of calls at which `func` is no longer invoked.
 * @param func - The function to restrict.
 * @returns Returns the new restricted function.
 * @example
 * const caution = () => console.log("Caution!");
 *
 * // Only call caution two times
 * const reducedCaution = before(2, caution)
 *
 * reducedCaution()
 * reducedCaution()
 * reducedCaution()
 * // => `caution` is invoked twice
 */

export function before<TFunc extends GenericFunction<TFunc>>(n: number, func: TFunc): TFunc {
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
