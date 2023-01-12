/**
 * The opposite of `before`. This method creates a function that invokes `func` once it's called `n` or more times.
 *
 * @category Function
 * @param n The number of calls before `func` is invoked.
 * @param func The function to restrict.
 * @returns Returns the new restricted function.
 * @example
 * const saves = ['profile', 'settings']
 * const done = after(saves.length, () => console.log('done saving!'))
 *
 * forEach(saves, type => asyncSave({ 'type': type, 'complete': done }))
 * // => Logs 'done saving!' after the two async saves have completed.
 */

export function after<TFunc extends (...args: Parameters<TFunc>) => ReturnType<TFunc>>(n: number, func: TFunc) {
    let count = 1;
    return (...args: Parameters<TFunc>): ReturnType<TFunc> | undefined => {
        if (count >= n) {
            return func(...args);
        }
        count += 1;
    };
}
