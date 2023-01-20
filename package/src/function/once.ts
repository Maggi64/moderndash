import type { GenericFunction } from 'src/types.js';

import { before } from '@function/before';

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @category Function
 * @param func - The function to restrict.
 * @returns Returns the new restricted function.
 * @example
 * const initialize = once(() => console.log('initialize'))
 * initialize()
 * initialize()
 * // => `createApplication` is invoked once
 */

export function once<TFunc extends GenericFunction<TFunc>>(func: TFunc): TFunc {
    return before(1, func);
}
