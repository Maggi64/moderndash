import { differenceBase } from '@array/difference';

export function differenceBy<T>(array: T[], values: T[], iteratee = (value: T) => value) {
    return differenceBase(array, values, iteratee);
}
