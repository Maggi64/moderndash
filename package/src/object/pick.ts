/**
 * Creates an object composed of the picked `object` properties.
 *
 * @example
 * const object = { 'a': 1, 'b': '2', 'c': 3 }
 *
 * pick(object, ['a', 'c'])
 * // => { 'a': 1, 'c': 3 }
 * @category Object
 * @param object - The source object.
 * @param keys - The property paths to pick.
 * @returns Returns the new object.
 */

export function pick<T, K extends keyof T>(object: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;
    for (const key of keys) {
        result[key] = object[key];
    }
    return result;
}
