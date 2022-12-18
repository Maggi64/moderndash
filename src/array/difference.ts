import type { MinimumTwoArrays } from '@array/types';

import { differenceWith } from '@array/differenceWith';

export function difference<T>(...arrays: MinimumTwoArrays<T>): T[] {
    return differenceWith((a, b) => a === b, ...arrays);
}
