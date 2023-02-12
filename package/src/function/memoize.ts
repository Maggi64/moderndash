import type { GenericFunction } from '@type/GenericFunction.js';

const defaultResolver = (...args: unknown[]) => JSON.stringify(args);

/**
 * Creates a function that caches the result of `func`.
 * 
 * The cache key is either determined by the provided `resolver` or by the arguments used in the cached function.
 *
 * The `cache` property is exposed on the cached function. It is an instance of `Map` and can be used to clear or inspect the cache.  
 * The cache property can be replaced by a custom cache as long as it implements the `Map` interface.
 *
 * **Options:**
 * - `resolver` A function that determines the cache key for storing the result based on the arguments provided.
 * - `ttl` sets the time to live for the cache in milliseconds. After `ttl` milliseconds, the next call to the memoized function will result in a cache miss.
 * 
 * This function can be used as a decorator with {@link decMemoize}.
 * 
 * @example
 * ```typescript
 * function fibonacci(n: number) {
 *     if (n <= 1) return n;
 *     return fibonacci(n - 1) + fibonacci(n - 2);
 * }
 *
 * const memoizedFib = memoize(fibonacci, { ttl: 1000 })
 * 
 * memoizedFib(40) // => 102334155
 *
 * memoizedFib(40) // => 102334155 (cache hit)
 *
 * setTimeout(() => memoizedFib(40), 1000) // => 102334155 (cache miss)
 * 
 * // Cached values are exposed as the `cache` property.
 * memoizedFib.cache.get(40) // => [value, timestamp]
 * memoizedFib.cache.set(40, [1234, Date.now()])
 * memoizedFib.cache.clear()
 * 
 * // This is the default way to create cache keys.
 * const defaultResolver = (...args: unknown[]) => JSON.stringify(args)
 * ```
 * @param func - The function to have its output memoized.
 * @param options - The options object with optional `resolver` and `ttl` parameters.
 * @param options.resolver - A function that determines the cache key for storing the result based on the arguments provided.
 * @param options.ttl - The time to live for the cache in milliseconds.
 * @template TFunc The type of the function to memoize.
 * @template Cache The type of the cache storage.
 * @returns Returns the new memoized function.
 */

export function memoize<TFunc extends GenericFunction<TFunc>, Cache extends Map<string, [ReturnType<TFunc>, number]>>(
    func: TFunc, options: { resolver?: (...args: Parameters<TFunc>) => string, ttl?: number; } = {}
): TFunc & { cache: Cache } {
    const resolver = options.resolver ?? defaultResolver;
    const ttl = options.ttl;
    const cache = new Map() as Cache;

    const memoizedFunc = function (this: unknown, ...args: Parameters<TFunc>): ReturnType<TFunc> {
        const key = resolver(...args);
        if (cache.has(key)) {
            const [cacheResult, cacheTime] = cache.get(key)!;
            if (ttl === undefined || (Date.now() - cacheTime < ttl)) {
                return cacheResult;
            }
        }
        const result = func.apply(this, args);
        cache.set(key, [result, Date.now()]);
        return result;
    };

    memoizedFunc.cache = cache;
    return memoizedFunc as TFunc & { cache: Cache };
} 