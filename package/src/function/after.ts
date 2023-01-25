import type { GenericFunction } from '@helpers/types.js';

/**
 * The opposite of `before`. This method creates a function that invokes `func` once it's called `n` or more times.
 *
 * @example
 * const caution = () => console.log("Caution!");
 * const afterFN = after(2, caution);
 *
 * afterFN()
 * afterFN()
 * afterFN()
 * // => `caution` is invoked after called twice
 * @category Function
 * @param n The number of calls before `func` is invoked.
 * @param func The function to restrict.
 * @returns Returns the new restricted function.
 */

export function after<TFunc extends GenericFunction<TFunc>>(n: number, func: TFunc) {
    let count = 1;
    return (...args: Parameters<TFunc>): ReturnType<TFunc> | undefined => {
        if (count >= n) {
            return func(...args);
        }
        count += 1;
    };
}
