import type { MinimumTwoArrays } from '@array/types';

import { intersectionWith } from '@array/intersectionWith';

export function intersection<T>(...arrays: MinimumTwoArrays<T>): T[] {
    return intersectionWith((a, b) => a === b, ...arrays);
}
