import { toDecorator } from "@decorator/toDecorator.js";
import { memoize } from "@function/memoize.js";

/**
 * Memoizes the decorated function.  
 * The cache key is either determined by the provided resolver or by the arguments used in the memoized function.
 * 
 * **Options:**
 * - `resolver` A function that determines the cache key for storing the result based on the arguments provided.
 * - `ttl` sets the time to live for the cache in milliseconds. After `ttl` milliseconds, the next call to the memoized function will result in a cache miss.
 * 
 * Look at {@link memoize} for the non-decorator version.
 * 
 * @example
 * ```typescript
 * class TestClass {
 *   @decMemoize({ ttl: 1000 })
 *   testMethod(a: number, b: number) {
 *     return a + b;
 *   }
 * }
 * const instance = new TestClass();
 * instance.testMethod(1, 2); // => 3
 * instance.testMethod(1, 2); // => 3 (cached)
 * 
 * // After 1 second:
 * instance.testMethod(1, 2); // => 3 (cache miss)
 * ```
 * @param options The options object.
 * @param options.resolver - A function that determines the cache key for storing the result based on the arguments provided.
 * @param options.ttl - The time to live for the cache in milliseconds.
 */

export function decMemoize(options: Parameters<typeof memoize>[1] = {}) {
    return toDecorator(memoize)(options);
}