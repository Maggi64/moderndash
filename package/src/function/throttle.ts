import type { GenericFunction } from "@type/GenericFunction.js";

/**
 * Generates a function that invokes the given function `func` at most once per every `wait` milliseconds.  
 * The throttled function always returns the result of the last `func` invocation.
 * 
 * This function can be used as a decorator with {@link decThrottle}.
 * @example
 * const throttled = throttle(() => console.log("Throttled!"), 1000);
 * 
 * throttled();
 * throttled();
 * // => "Throttled!" is logged once per second.
 * @param func The function to throttle.
 * @param wait The number of milliseconds to throttle invocations to.
 * @returns Returns the new throttled function.
 */

export function throttle<TFunc extends GenericFunction<TFunc>>(func: TFunc, wait: number): TFunc {
    let inThrottle = false;
    let lastResult: ReturnType<TFunc>;
    return function (this: unknown, ...args: Parameters<TFunc>) {
        if (!inThrottle) {
            lastResult = func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), wait);
        }

        return lastResult;
    } as TFunc;
}
  
