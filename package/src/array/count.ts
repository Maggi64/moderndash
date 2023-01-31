import type { RecordKey } from '@helpers/types';

/**
 * Creates an object composed of keys generated from the results of running  
 * each element of `collection` thru `iteratee`.  
 * The corresponding value of each key is the number of times the key was returned by `iteratee`.
 *
 * @example
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'betty', 'active': true },
 *   { 'user': 'fred', 'active': false }
 * ]
 *
 * count(users, value => value.active);
 * // => { 'true': 2, 'false': 1 }
 * @param iteratee - The iteratee to transform keys.
 * @param collection - The array or record to iterate over.
 * @returns Returns the composed aggregate object.
 */

export function count<TInput, TKey extends RecordKey>(array: TInput[], iteratee: (value: TInput) => TKey): Record<TKey, number> {
    const result = {} as Record<TKey, number>;
    for (const value of array) {
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
