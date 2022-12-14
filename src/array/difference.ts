import { differenceBy } from '@array/differenceBy';

export function difference<T>(array: T[], array2: T[]) {
    return differenceBy(array, array2);
}
