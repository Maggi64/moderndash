export function union<T>(...arrays: T[][]): T[] {
    return [...new Set(arrays.flat())];
}
