import type { IterateeFunction, PropertyShorthand } from './types';

import { isObjectKey } from '@helpers/typeofChecks';

export function getPropertyShorthand<T, K extends keyof T>(key: K): (object: T) => T[K] {
    return object => object[key];
}

export function getIterateFunction<T>(iteratee: IterateeFunction<T> | PropertyShorthand<T>) {
    if (typeof iteratee === 'function') {
        return iteratee;
    } else if (isObjectKey(iteratee)) {
        return getPropertyShorthand(iteratee);
    } else {
        throw new TypeError('Expected iteratee to be a function or a property name');
    }
}
