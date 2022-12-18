import type { MinimumTwoArrays } from '@array/types';

export function differenceWith<T>(comparator: (a: T, b: T) => boolean, ...arrays: MinimumTwoArrays<T>): T[] {
    const difference: T[] = [];
    const [firstArray, ...restArrays] = arrays;

    firstArray.forEach(element => {
        if (!restArrays.some(array => array.some(item => comparator(item, element)))) {
            difference.push(element);
        }
    });

    return difference;
}
