import type { IterateeFunction, PropertyShorthand } from '@array/types';

import { uniqWith } from '@array/uniqWith';
import { getIterateFunction } from '@helpers/shortHands';

export function uniqBy<T>(iteratee: IterateeFunction<T> | PropertyShorthand<T>, array: T[]): T[] {
    const iterateeFunction = getIterateFunction(iteratee);

    return uniqWith((a, b) => iterateeFunction(a) === iterateeFunction(b), array);
}
