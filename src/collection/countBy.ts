export function countBy<T, U extends string>(iteratee: (value: T) => U, array: T[]): Record<string, number> {
    const result: Record<string, number> = {};
    for (const value of array) {
        const key = iteratee(value);
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (result[key] === undefined) {
            result[key] = 1;
        } else {
            result[key] += 1;
        }
    }
    return result;
}
