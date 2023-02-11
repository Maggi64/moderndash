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
 * const object = { 'a': 1, 'b': 2 }
 *
 * const values = memoize(Object.values, { ttl: 1000 })
 * values(object)
 * // => [1, 2]
 *
 * values(object)
 * // => [1, 2]
 *
 * setTimeout(() => values(object), 1000)
 * // => [1, 2] (cache miss after 1 second)
 * 
 * // Cached values are exposed as the `cache` property.
 * values.cache.get(object)
 * values.cache.set(object, ['a', 'b'])
 * values.cache.clear()
 * 
 * // This is the default way to create cache keys.
 * const defaultResolver = (...args: unknown[]) => JSON.stringify(args)
 * ```
 * @param func - The function to have its output memoized.
 * @param options - The options object with optional `resolver` and `ttl` parameters.
 * @param options.resolver - A function that determines the cache key for storing the result based on the arguments provided.
 * @param options.ttl - The time to live for the cache in milliseconds.
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