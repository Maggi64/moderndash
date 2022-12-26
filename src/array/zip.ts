import { zipWith } from '@array/zipWith';

export function zip<T, U extends T>(...arrays: U[][]): unknown[][] {
    return zipWith((...t) => t, ...arrays);
}
