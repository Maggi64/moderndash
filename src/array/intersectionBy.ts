import type { IterateeFunction, MinimumTwoArrays, PropertyShorthand } from '@array/types';

import { intersectionWith } from '@array/intersectionWith';
import { getIterateFunction } from '@helpers/shortHands';
import { isEqualWith } from '@lang/isEqualWith';

export function intersectionBy<T>(iteratee: IterateeFunction<T> | PropertyShorthand<T>, ...arrays: MinimumTwoArrays<T>): T[] {
    const iterateeFunction = getIterateFunction(iteratee);
    return intersectionWith((a, b) => isEqualWith(iterateeFunction, a, b), ...arrays);
}
