
/**
 * Creates new array sorted in ascending/descending order with single or multiple criteria.
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
 * 
 * @param array Array to sort
 * @param criteria Criteria to sort by
 * @param criteria.order Order to sort in, either 'asc' or 'desc'
 * @param criteria.by Iteratee function to sort based on a specific property
 * @template TElem Type of the array elements
 * @returns New sorted array
*/
export function sort<TElem>(array: readonly TElem[], ...criteria: { order?: "asc" | "desc", by?: (item: TElem) => number | bigint | Date | string }[]): TElem[] {
    return [...array].sort((a, b) => {
        for (const { order = "asc", by = (item: TElem) => item } of criteria) {
            const aValue = by(a);
            const bValue = by(b);
            if (aValue !== bValue) {
                const compare = aValue < bValue ? -1 : 1;
                return order === "asc" ? compare : -compare;
            }
        }
        return 0;
    });
}
