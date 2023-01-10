import type { MinimumTwoArrays } from '../types';

/**
 * This method is like `difference` except that it accepts `comparator`
 * which is invoked to compare elements of `array` to `values`. The order and
 * references of result values are determined by the first array. The comparator
 * is invoked with two arguments: (arrVal, othVal).
 *
 * **Note:** Unlike `pullAllWith`, this method returns a new array.
 *
 * @category Array
 * @param comparator - The comparator invoked per element.
 * @param arrays - First array to inspect. Others are excluded.
 * @returns Returns the new array of filtered values.
 * @example
 * differenceWith(isEqual, [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }])
 * // => [{ 'x': 2, 'y': 1 }]
 */

export function differenceWith<T>(comparator: (a: T, b: T) => boolean, ...arrays: MinimumTwoArrays<T>): T[] {
    const difference: T[] = [];
    const [firstArray, ...restArrays] = arrays;

    firstArray.forEach(element => {
        if (!restArrays.some(array => array.some(item => comparator(item, element)))) {
            difference.push(element);
        }
    });

    return difference;
}
