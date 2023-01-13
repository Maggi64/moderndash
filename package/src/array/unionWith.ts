import type { MinimumTwoArrays } from '../types';

/**
 * This method is like `union` except that it accepts `comparator` which
 * is invoked to compare elements of `arrays`. Result values are chosen from
 * the first array in which the value occurs. The comparator is invoked
 * with two arguments: (arrVal, othVal).
 *
 * @category Array
 * @param comparator - The comparator invoked per element.
 * @param arrays - The arrays to inspect.
 * @returns Returns the new array of combined values.
 * @example
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 * const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * unionWith(isEqual, objects, others)
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
 */

export function unionWith<TInput>(comparator: (a: TInput, b: TInput) => boolean, ...arrays: MinimumTwoArrays<TInput>): TInput[] {
    return arrays.reduce((acc, current) => {
        for (const item of current) {
            if (acc.some(x => comparator(x, item))) {
                continue;
            }
            acc.push(item);
        }
        return acc;
    }, []);
}
