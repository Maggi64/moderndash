/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * @example
 * isEmpty(null)
 * // => true
 *
 * isEmpty({})
 * // => true
 *
 * isEmpty("")
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty('abc')
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
 * @param value - The value to check.
 * @returns Returns `true` if given vlaue is empty, else `false`.
 */

export function isEmpty(value: string | object | null | undefined): boolean {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === 'string' || Array.isArray(value)) {
        return value.length === 0;
    }

    if (value instanceof Map || value instanceof Set) {
        return value.size === 0;
    }

    if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    }

    return false;
}
