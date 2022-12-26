import type { MinimumTwoArrays } from '../types';

import { differenceWith } from '@array/differenceWith';
import { isEqual } from '@lang/isEqual';

export function difference<T>(...arrays: MinimumTwoArrays<T>): T[] {
    return differenceWith(isEqual, ...arrays);
}
