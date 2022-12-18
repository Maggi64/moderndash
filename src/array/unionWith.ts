import type { MinimumTwoArrays } from '@array/types';

export function unionWith<T>(comparator: (a: T, b: T) => boolean, ...arrays: MinimumTwoArrays<T>): T[] {
    return arrays.reduce<T[]>((acc, current) => {
        for (const item of current) {
            if (acc.some(x => comparator(x, item))) {
                continue;
            }
            acc.push(item);
        }
        return acc;
    }, []);
}
