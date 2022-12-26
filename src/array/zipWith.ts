export function zipWith<T, U extends T, R>(iteratee: (...t: T[]) => R, ...arrays: U[][]): R[] {
    const result: R[] = [];
    const length = Math.min(...arrays.map((a) => a.length));

    for (let i = 0; i < length; i++) {
        result.push(iteratee(...arrays.map((a) => a[i])));
    }

    return result;
}
