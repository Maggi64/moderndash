import type { GenericFunction } from '@helpers/types.js';

/**
 * Generates a function that invokes the given function at most once per every `wait` milliseconds.
 * 
 * This function can be used as a decorator with {@link decThrottle}.
 * @example
 * const throttled = throttle(() => console.log("Throttled!"), 1000);
 * 
 * throttled();
 * throttled();
 * // => "Throttled!" is logged once per second.
 * @param func - The function to throttle.
 * @param wait - The number of milliseconds to throttle invocations to.
 * @returns Returns the new throttled function.
 */


export function throttle<TFunc extends GenericFunction<TFunc>>(func: TFunc, wait: number): TFunc {
    let inThrottle = false;
    return function (this: unknown, ...args: Parameters<TFunc>) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), wait);
        }
    } as TFunc;
}
  
