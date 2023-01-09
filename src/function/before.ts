export function before<T extends (...args: Parameters<T>) => ReturnType<T>>(n: number, fn: T) {
    let count = 0;
    let result: ReturnType<T>;
    return (...args: Parameters<T>): ReturnType<T> => {
        if (count < n) {
            count += 1;
            result = fn(...args);
        }
        return result;
    };
}
