import type { MinimumTwoArrays } from '@array/types';

import { intersectionWith } from '@array/intersectionWith';
import { isEqual } from '@lang/isEqual';

export function intersection<T>(...arrays: MinimumTwoArrays<T>): T[] {
    return intersectionWith(isEqual, ...arrays);
}
