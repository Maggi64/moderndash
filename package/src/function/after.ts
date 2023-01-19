import type { GenericFunction } from '../types.js';

/**
 * The opposite of `before`. This method creates a function that invokes `func` once it's called `n` or more times.
 *
 * @category Function
 * @param n The number of calls before `func` is invoked.
 * @param func The function to restrict.
 * @returns Returns the new restricted function.
 * @example
 * const caution = () => alert("Caution!");
 *
 * // Display alert only after it has been called 5 times
 * after(5, caution)
 */

export function after<TFunc extends GenericFunction>(n: number, func: TFunc) {
    let count = 1;
    return (...args: Parameters<TFunc>): ReturnType<TFunc> | undefined => {
        if (count >= n) {
            return func(...args);
        }
        count += 1;
    };
}
