import { intersectionWith } from '@array/intersectionWith';

export function intersectionBy<T, U>(array1: T[], array2: T[], iteratee: (value: T) => U): T[] {
    return intersectionWith(array1, array2, (a, b) => iteratee(a) === iteratee(b));
}
