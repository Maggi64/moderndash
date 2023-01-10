import { debounce } from '@function/debounce';

export function throttle<T extends (...args: Parameters<T>) => ReturnType<T>>(
    func: T, wait = 0, options: { leading?: boolean, trailing?: boolean } = {}
): (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T> {
    return debounce(func, wait, {
        leading: options.leading ?? true,
        maxWait: wait,
        trailing: options.trailing ?? true
    });
}
