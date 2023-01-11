import type { Collection, RecordKey } from '../types';

import { getValuesFromCollection } from '@helpers/collections';

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the number of times the key was returned by `iteratee`.
 *
 * @category Collection
 * @param iteratee - The iteratee to transform keys.
 * @param collection - The array or object to iterate over.
 * @returns Returns the composed aggregate object.
 * @example
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'betty', 'active': true },
 *   { 'user': 'fred', 'active': false }
 * ]
 *
 * countBy(value => value.active, users);
 * // => { 'true': 2, 'false': 1 }
 */

export function countBy<TInput, TKey extends RecordKey>(iteratee: (value: TInput) => TKey, collection: Collection<TInput>): Record<TKey, number> {
    const result = {} as Record<TKey, number>;
    const values = getValuesFromCollection(collection);
    for (const value of values) {
        const key = iteratee(value);
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (result[key] === undefined) {
            result[key] = 1;
        } else {
            result[key] += 1;
        }
    }
    return result;
}
