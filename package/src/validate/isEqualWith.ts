import { isEqual } from '@validate/isEqual';

/**
 * This method is like `_.isEqual` except that it accepts `customizer` which
 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
 * are handled by the method instead. The `customizer` is invoked with up to
 * six arguments: (objValue, othValue [, index|key, object, other, stack]).
 *
 * @category Lang
 * @example
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value);
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true;
 *   }
 * }
 *
 * var array = ['hello', 'goodbye'];
 * var other = ['hi', 'goodbye'];
 *
 * isEqualWith(array, other, customizer);
 * // => true
 * @param a - The value to compare.
 * @param b - The other value to compare.
 * @param customizer - The function to customize comparisons.
 * @returns Returns `true` if the values are equivalent, else `false`.
*/

export function isEqualWith<T>(a: T, b: T, customizer: (value: T) => unknown): boolean {
    return isEqual(customizer(a), customizer(b));
}
