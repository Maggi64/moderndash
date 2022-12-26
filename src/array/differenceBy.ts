import type { IterateeFunction, MinimumTwoArrays, PropertyShorthand } from '@array/types';

import { differenceWith } from '@array/differenceWith';
import { getIterateFunction } from '@helpers/shortHands';
import { isEqualWith } from '@lang/isEqualWith';

export function differenceBy<T>(iteratee: IterateeFunction<T> | PropertyShorthand<T>, ...arrays: MinimumTwoArrays<T>): T[] {
    const iterateeFunction = getIterateFunction(iteratee);
    return differenceWith((a, b) => isEqualWith(iterateeFunction, a, b), ...arrays);
}
