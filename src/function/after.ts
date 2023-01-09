export function after<T extends (...args: unknown[]) => unknown>(n: number, fn: T) {
    let count = 1;
    return (...args: Parameters<T>): ReturnType<T> | undefined => {
        if (count >= n) {
            return fn(...args) as ReturnType<T>;
        }
        count += 1;
    };
}
