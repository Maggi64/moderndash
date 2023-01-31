import type { RecordKey } from '@helpers/types';

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key.
 *
 * @example
 * group([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * group([6.1, 4.2, 6.3], value => value > 5)
 * // => { 'false': [4.2], 'true': [6.1, 6.3] }
 * @param collection - The array or object to iterate over.
 * @param iteratee - The iteratee to transform keys.
 * @returns Returns the composed aggregate object.
 */

export function group<T, U extends RecordKey>(array: T[], iteratee: (value: T) => U): Record<U, T[]> {
    const result = {} as Record<U, T[]>;
    for (const value of array) {
        const key = iteratee(value);
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        result[key] = result[key] ?? [];
        result[key].push(value);
    }
    return result;
}
