import { unzipWith } from '@array/unzipWith';

export function unzip<T extends unknown[]>(array: T[]): T[] {
    return unzipWith((...t) => t, array);
}
