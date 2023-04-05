import type { GenericFunction } from "@type/GenericFunction.js";

/**
 * Creates a function that invokes the given function as long as it's called `<= n` times.
 *  
 * Subsequent calls to the created function return the result of the last `func` invocation.
 *
 * This function can be used as a decorator with {@link decMaxCalls}.
 * @example
 * let count = 0;
 * const addCount = () => ++count;
 *
 * // Allow addCount to be invoked twice.
 * const limitAddCount = maxCalls(addCount, 2)
 *
 * limitAddCount() // => 1
 * limitAddCount() // => 2
 * limitAddCount() // => 2
 * // => `limitAddCount` is invoked twice and the result is cached.
 * @param n The number of calls before the cached result is returned.
 * @param func The function to restrict.
 * @returns Returns the new restricted function.
 */

export function maxCalls<TFunc extends GenericFunction<TFunc>>(func: TFunc, n: number): TFunc {
    let count = 0;
    let result: ReturnType<TFunc>;
    return function (this: unknown, ...args: Parameters<TFunc>): ReturnType<TFunc> {
        if (count < n) {
            count += 1;
            result = func.apply(this, args);
        }
        return result;
    } as TFunc;
}
