import type { GenericFunction } from '@helpers/types.js';

import { toDecorator } from '@decorator/toDecorator.js';

/**
 * Creates a function that invokes the given function once it's called more than `n` times.  
 * Returns undefined until the minimum call count is reached.
 * 
 * This function can be used as a decorator with {@link decMinCalls}.
 * @example
 * const caution = () => console.log("Caution!");
 * const minCalls = after(caution, 2);
 *
 * minCalls()
 * minCalls()
 * minCalls()
 * // => `caution` is invoked on the third call.
 * @param n The number of calls before the given function is invoked.
 * @param func The function to restrict.
 * @returns Returns the new restricted function.
 */

export function minCalls<TFunc extends GenericFunction<TFunc>>(func: TFunc, n: number) {
    let count = 1;
    return function (this: ThisParameterType<TFunc>, ...args: Parameters<TFunc>): ReturnType<TFunc> | undefined {
        if (count > n) {
            return func.apply(this, args);
        }
        count += 1;
    };
}

/** 
 * Only invokes the decorated function after it's called more than `n` times.
 * 
 * Look at {@link minCalls} for the non-decorator version.
 * 
 * *Requires TypeScript >=5.0 or `experimentalDecorators` flag enabled.*
 * @example
 * class TestClass {
 *   @decAfter(2)
 *   testMethod() {
 *     return 1;
 *   }
 * }
 * const instance = new TestClass();
 * instance.testMethod(); // => undefined
 * instance.testMethod(); // => undefined
 * instance.testMethod(); // => 1
 *
 * @param runAfter The number of calls before the decorated function is invoked.
 */

export const decMinCalls = toDecorator(minCalls);