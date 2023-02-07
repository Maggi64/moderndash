/**
 * A tuple of two or more arrays. Useful for rest parameters.
 * 
 * @example
 * type MinTwo = MinimumTwoArrays<number>;
 * 
 * const arr1: MinTwo = [[1, 2, 3], [4, 5, 6]];
 * const arr2: MinTwo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 * 
 * const arr3: MinTwo = [[1, 2, 3]]
 * // => Type 'number[][]' is not assignable to type '[number[], number[], ...number[][]]'.
 * 
 * @template TInput - The type of the array elements.
 */

export type MinimumTwoArrays<TInput> = [TInput[], TInput[], ...TInput[][]];