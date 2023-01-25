import type { MinimumTwoArrays } from '@helpers/types';

/**
 * This method is like `intersection` except that it accepts `comparator`
 * which is invoked to compare elements of `arrays`. The order and references
 * of result values are determined by the first array. The comparator is
 * invoked with two arguments: (arrVal, othVal).
 *
 * @example
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 * const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * intersectionWith(isEqual, objects, others)
 * // => [{ 'x': 1, 'y': 2 }]
 * @category Array
 * @param comparator - The comparator invoked per element.
 * @param arrays - The arrays to inspect.
 * @returns Returns the new array of intersecting values.
 */

export function intersectionWith<T>(comparator: (a: T, b: T) => boolean, ...arrays: MinimumTwoArrays<T>): T[] {
    const intersection: T[] = [];

    const [firstArray, ...restArrays] = arrays;

    firstArray.forEach(element => {
        if (restArrays.every(array => array.some(item => comparator(item, element)))) {
            intersection.push(element);
        }
    });

    return intersection;
}
