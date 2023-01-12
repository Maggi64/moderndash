/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @category Function
 * @param func - The function to restrict.
 * @returns Returns the new restricted function.
 * @example
 * const initialize = once(createApplication)
 * initialize()
 * initialize()
 * // => `createApplication` is invoked once
 */

export function once<TFunc extends (...args: Parameters<TFunc>) => ReturnType<TFunc>>(func: TFunc): TFunc {
    let called = false;
    let result: ReturnType<TFunc>;

    return function (this: ThisParameterType<TFunc>, ...args: Parameters<TFunc>): ReturnType<TFunc> {
        if (!called) {
            called = true;
            result = func.apply(this, args);
        }

        return result;
    } as TFunc;
}
