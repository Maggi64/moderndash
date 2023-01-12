const defaultResolver = (...args: unknown[]) => JSON.stringify(args);
type Cache = Map<string | symbol, unknown>;

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, all arguments
 * provided to the memoized function are used as the map cache key.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @category Function
 * @param func - The function to have its output memoized.
 * @param resolver - The function to resolve the cache key.
 * @returns  Returns the new memoized function.
 * @example
 * const object = { 'a': 1, 'b': 2 }
 *
 * const values = memoize(values)
 * values(object)
 * // => [1, 2]
 *
 * values(object)
 * // => [1, 2]
 *
 * object.a = 2
 * values(object)
 * // => [2, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b'])
 * values(object)
 * // => ['a', 'b']
 *
 * // Replace `memoize.Cache`.
 * memoize.Cache = WeakMap
 */

export function memoize<TFunc extends (...args: Parameters<TFunc>) => ReturnType<TFunc>>(
    func: TFunc, resolver: ((...args: Parameters<TFunc>) => string | symbol) = defaultResolver
): TFunc & { cache: Cache } {
    const cache: Cache = new Map();
    const memoizedFunc = (...args: Parameters<TFunc>): ReturnType<TFunc> => {
        const key = resolver(...args);
        if (cache.has(key)) {
            // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
            return cache.get(key) as ReturnType<TFunc>;
        }
        const result = func(...args);
        cache.set(key, result);
        return result;
    };
    memoizedFunc.cache = cache;
    return memoizedFunc as TFunc & { cache: Cache };
}
