import type { IterateeFunction, MinimumTwoArrays, PropertyShorthand } from '@array/types';

import { unionWith } from '@array/unionWith';
import { getIterateFunction } from '@helpers/shortHands';
import { isEqualWith } from '@lang/isEqualWith';

export function unionBy<T>(iteratee: IterateeFunction<T> | PropertyShorthand<T>, ...arrays: MinimumTwoArrays<T>): T[] {
    const iterateeFunction = getIterateFunction(iteratee);
    return unionWith((a, b) => isEqualWith(iterateeFunction, a, b), ...arrays);
}
