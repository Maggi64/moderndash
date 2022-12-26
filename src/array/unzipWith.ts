export function unzipWith<T extends unknown[], V>(iteratee: (...t: T) => V, array: T[]): V[] {
    const result: V[] = [];

    for (const elements of array) {
        result.push(iteratee(...elements));
    }

    return result;
}
