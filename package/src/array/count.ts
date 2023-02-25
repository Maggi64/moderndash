/**
 * Creates an object with counts of occurrences of items in the array.
 *
 * @example
 * const users = [
 *   { 'user': 'barney', 'active': true, age: 36 },
 *   { 'user': 'betty', 'active': false, age: 36 },
 *   { 'user': 'fred', 'active': true, age: 40 }
 * ]
 *
 * count(users, value => value.active);
 * // => { 'true': 2, 'false': 1 }
 *
 * count(users, value => value.age);
 * // => { '36': 2, '40': 1 }
 *
 * @param criteria The criteria to count by.
 * @param array The array or record to iterate over.
 * @template TElem The type of the array elements.
 * @returns Returns the composed aggregate object.
 */

export function count<TElem, TKey extends PropertyKey>(array: TElem[], criteria: (value: TElem) => TKey): Record<TKey, number> {
    const result = {} as Record<TKey, number>;
    for (const value of array) {
        const key = criteria(value);

        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        result[key] = (result[key] ?? 0) + 1;
    }
    return result;
}
