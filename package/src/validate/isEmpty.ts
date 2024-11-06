
/**
 * Checks if a value is empty.
 * 
 * Supports: strings, arrays, objects, maps, sets, typed arrays.
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
 * @param value The value to check.
 * @returns Returns `true` if `value` is empty, else `false`.
 */

export function isEmpty(value: string | object | null | undefined): boolean {
    if (value === null || value === undefined)
        return true;

    if (typeof value === "string" || Array.isArray(value))
        return value.length === 0;

    if (value instanceof Map || value instanceof Set)
        return value.size === 0;

    if (ArrayBuffer.isView(value))
        return value.byteLength === 0;

    if (typeof value === "object")
        return isObjectEmpty(value);

    return false;
}

function isObjectEmpty(value: object) {
    for (const key in value) {
        if (Object.hasOwn(value, key)) {
            return false;
        }
    }
    return true;
}
