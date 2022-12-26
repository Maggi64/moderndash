import type { NoUnion } from '../types';

export function sortBy<T, U>(iteratee: (item: T) => NoUnion<number | bigint | Date | string, U>, array: T[]): T[] {
    return array.sort((a, b) => {
        const aValue = iteratee(a);
        const bValue = iteratee(b);
        if (aValue < bValue) {
            return -1;
        }
        if (aValue > bValue) {
            return 1;
        }
        return 0;
    });
}
