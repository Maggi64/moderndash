
/**
 * Creates a new sorted array in ascending or descending order based on one or multiple sorting criteria.
 * 
 * @example
 * sort([1, 2, 3, 4], { order: 'desc' })
 * // => [4, 3, 2, 1]
 * 
 * // --- Sorting by multiple properties ---
 * const array = [{ a: 2, b: 1 }, { a: 1, b: 2 }, { a: 1, b: 1 }];
 * 
 * sort(array,
 *   { order: 'asc', by: item => item.a },
 *   { order: 'desc', by: item => item.b }
 * )
 * // => [{ a: 1, b: 2 }, { a: 1, b: 1 }, { a: 2, b: 1 }]
 * @param array The array to sort.
 * @param orders The sorting criteria, one or multiple objects with properties order (either 'asc' or 'desc') and by (iteratee function to sort based on a specific property).
 * @param orders.order - The order to sort in, either 'asc' or 'desc'.
 * @param orders.by - The iteratee function to sort based on a specific property.
 * @returns Returns the sorted array.
*/
export function sort<TInput>(array: TInput[], ...orders: { order?: 'asc' | 'desc', by?: (item: TInput) => number | bigint | Date | string }[]): TInput[] {
    return [...array].sort((a, b) => {
        for (const { order, by } of orders) {
            const aValue = by ? by(a) : a;
            const bValue = by ? by(b) : b;
            if (aValue < bValue) {
                return order === 'desc' ? 1 : -1; 
            }
            if (aValue > bValue) {
                return order === 'desc' ? -1 : 1;
            }
        }
        return 0;
    });
}