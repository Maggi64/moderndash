import { debounce } from '@function/debounce';

export function throttle<T extends (...args: unknown[]) => unknown>(func: T, wait = 0, options: { leading?: boolean, trailing?: boolean } = {}): T & { cancel: () => void, flush: () => ReturnType<T> } {
    return debounce(func, wait, {
        leading: options.leading ?? true,
        maxWait: wait,
        trailing: options.trailing ?? true
    });
}
