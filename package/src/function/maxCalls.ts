import type { GenericFunction } from '@helpers/types.js';

import { toDecorator } from '@function/toDecorator.js';

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
 * @param n - The number of calls before the cached result is returned.
 * @param func - The function to restrict.
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


/**
 * Only invokes the decorated function as long as it's called `<= n` times.  
 * Subsequent calls to the decorated function return the result of the last invocation.
 * 
 * Look at {@link maxCalls} for the non-decorator version.
 * 
 * *Requires TypeScript >=5.0 or `experimentalDecorators` flag enabled.*
 * 
 * @example
 * class TestClass {
 *  private count = 0;
 *  @decMaxCalls(2)
 *  testMethod() {
 *    return ++this.count;
 *  }
 * }
 * const instance = new TestClass();
 * instance.testMethod(); // => 1 
 * instance.testMethod(); // => 2
 * instance.testMethod(); // => 2
 * 
 * @param n - The number of calls before the cached result is returned.
 */

export const decMaxCalls = toDecorator(maxCalls);