
/**
 * Creates a new sorted array in ascending or descending order.
 * An iteratee function is optional to sort the array based on a specific property.
 *
 * @example
 * sort([1, 2, 3, 4], 'desc')
 * // => [4, 3, 2, 1]
 *
 * sort([{ a: 1 }, { a: 2 }, { a: 3 }], 'asc', item => item.a)
 * // => [{ a: 1 }, { a: 2 }, { a: 3 }]
 * @category Array
 * @param array - The array to sort.
 * @param order - The order in which to sort the array.
 * @param iteratee - The iteratee function to sort the array based on a specific property.
 * @returns Returns the sorted array.
 */

export function sort<TInput>(array: TInput[], order?: 'asc' | 'desc', iteratee?: (item: TInput) => number | bigint | Date | string): TInput[] {
    return [...array].sort((a, b) => {
        const aValue = iteratee ? iteratee(a) : a;
        const bValue = iteratee ? iteratee(b) : b;
        if (aValue < bValue) {
            return order === 'desc' ? 1 : -1;
        }
        if (aValue > bValue) {
            return order === 'desc' ? -1 : 1;
        }
        return 0;
    });
}
