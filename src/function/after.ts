export function after<T extends (...args: Parameters<T>) => ReturnType<T>>(n: number, fn: T) {
    let count = 1;
    return (...args: Parameters<T>): ReturnType<T> | undefined => {
        if (count >= n) {
            return fn(...args);
        }
        count += 1;
    };
}
