import type { GenericFunction } from '@helpers/types.js';

const defaultResolver = (...args: unknown[]) => JSON.stringify(args);

/**
 * Creates a function that memoizes the result of `func`.  
 * The cache key is either determined by the provided resolver or by the arguments used in the memoized function.
 *
 * The cache is exposed as the `cache` property on the memoized function.  
 * Its creation may be customized by replacing the `memoize.cache` value.  
 * The new cache must implement `get` and `set` methods like the built-in `Map` constructors.
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
 * // Replace `memoize.cache`.
 * values.cache = new WeakMap()
 * 
 * // Cached values are exposed as the `cache` property.
 * values.cache.get(object)
 * values.cache.set(object, ['a', 'b'])
 * 
 * // This is the default way to create cache keys.
 * const defaultResolver = (...args: unknown[]) => JSON.stringify(args);
 * ```
 * @param func - The function to have its output memoized.
 * @param options - The options object with optional `resolver` and `ttl` parameters.
 * @param options.resolver - A function that determines the cache key for storing the result based on the arguments provided.
 * @param options.ttl - The time to live for the cache in milliseconds.
 * @returns Returns the new memoized function.
 */

export function memoize<TFunc extends GenericFunction<TFunc>, Cache extends Map<string | symbol, [ReturnType<TFunc>, number]>>(
    func: TFunc, options: { resolver?: (...args: Parameters<TFunc>) => string | symbol, ttl?: number } = {}
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