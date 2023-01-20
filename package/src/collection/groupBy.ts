import type { RecordKey, ArrayOrRecord } from '../types';

import { getValuesFromCollection } from '@helpers/collections';


/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key.
 *
 * @example
 * groupBy([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 * @category Collection
 * @param collection - The array or object to iterate over.
 * @param iteratee - The iteratee to transform keys.
 * @returns Returns the composed aggregate object.
 */

export function groupBy<T, U extends RecordKey>(collection: ArrayOrRecord<T>, iteratee: (value: T) => U): Record<U, T[]> {
    const result = {} as Record<U, T[]>;
    const values = getValuesFromCollection(collection);
    for (const value of values) {
        const key = iteratee(value);
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        result[key] = result[key] ?? [];
        result[key].push(value);
    }
    return result;
}
