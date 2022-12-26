export function once<T extends (...args: Parameters<T>) => unknown>(fn: T): T {
    let called = false;
    let result: ReturnType<T>;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>): ReturnType<T> {
        if (!called) {
            called = true;
            result = fn.apply(this, args) as ReturnType<T>;
        }

        return result;
    } as T;
}
