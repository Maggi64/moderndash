export function before<T extends (...args: unknown[]) => unknown>(n: number, fn: T) {
    let count = 0;
    let result: ReturnType<T>;
    return (...args: Parameters<T>): ReturnType<T> => {
        if (count < n) {
            count += 1;
            result = fn(...args) as ReturnType<T>;
        }
        return result;
    };
}
