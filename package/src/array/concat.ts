/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 * @example
 * let array = [1]
 * concat(array, 2, [3], [[4]])
 * // => [1, 2, 3, [4]]
 *
 * concat(['a', 'b', 'c', 'd'], 'e')
 * // => ['a', 'b', 'c', 'd', 'e']
 * @param array The array to concatenate
 * @param {...*} [values] The values to concatenate
 * @returns Returns the new concatenated array.
 */

export function concat(array: any[], ...restArray: any[] | any[][]): [] {
  let result: any[] = array;
  if (array.length == 0 && restArray.length == 0) return [];

  for (let arrItem of restArray) {
    if (Array.isArray(arrItem)) {
      result = [...result, ...arrItem]
    } else {
      result = [...result, ...[arrItem]] as []
    }
  }
  return result as [];
}
