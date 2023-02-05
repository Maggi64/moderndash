/**
 * Creates an object with grouped items in the array.
 * The critiria provides the key to group by.
 *
 * @example
 * group([6.1, 4.2, 6.3], Math.floor)
 * // => { 4: [4.2], 6: [6.1, 6.3] }
 *
 * group([6.1, 4.2, 6.3], value => value > 5)
 * // => { 'false': [4.2], 'true': [6.1, 6.3] }
 * @param collection - The array or object to iterate over.
 * @param criteria - The criteria to group by.
 * @returns An object with grouped items.
 */

export function group<TArr, TKey extends PropertyKey>(array: TArr[], criteria: (value: TArr) => TKey | boolean): Record<TKey, TArr[]> {
    const result = {} as Record<TKey, TArr[]>;
    for (const value of array) {
        let key = criteria(value);
        if (typeof key === 'boolean')
            key = key.toString() as TKey;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        result[key] = result[key] ?? [];
        result[key].push(value);
    }
    return result;
}
