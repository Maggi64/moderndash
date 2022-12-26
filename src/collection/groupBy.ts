import type { RecordKey } from '../types';

export function groupBy<T, U extends RecordKey>(iteratee: (value: T) => U, array: T[]): Record<U, T[]> {
    const result = {} as Record<U, T[]>;
    for (const value of array) {
        const key = iteratee(value);
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (result[key] === undefined) {
            result[key] = [value];
        } else {
            result[key].push(value);
        }
    }
    return result;
}
