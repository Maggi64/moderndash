import type { MinimumTwoArrays } from '@array/types';

import { differenceWith } from '@array/differenceWith';

export function differenceBy<T>(iteratee: (value: T) => unknown, ...arrays: MinimumTwoArrays<T>): T[] {
    return differenceWith((a, b) => iteratee(a) === iteratee(b), ...arrays);
}
