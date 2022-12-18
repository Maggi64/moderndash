import type { MinimumTwoArrays } from '@array/types';

import { intersectionWith } from '@array/intersectionWith';

export function intersectionBy<T>(iteratee: (value: T) => unknown, ...arrays: MinimumTwoArrays<T>): T[] {
    return intersectionWith((a, b) => iteratee(a) === iteratee(b), ...arrays);
}
