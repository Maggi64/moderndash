import { uniqWith } from '@array/uniqWith';
import { isEqual } from '@lang/isEqual';

export function uniq<T>(array: T[]): T[] {
    return uniqWith(isEqual, array);
}
