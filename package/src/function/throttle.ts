import type { GenericFunction } from '@helpers/types.js';

import { debounce } from '@function/debounce';

export function throttle<TFunc extends GenericFunction<TFunc>>(
    func: TFunc, wait = 0, options: { leading?: boolean, trailing?: boolean } = {}
): (this: ThisParameterType<TFunc>, ...args: Parameters<TFunc>) => ReturnType<TFunc> {
    return debounce(func, wait, {
        leading: options.leading ?? true,
        maxWait: wait,
        trailing: options.trailing ?? true
    });
}
