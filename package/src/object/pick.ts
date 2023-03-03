import type { PlainObject } from '@type/PlainObject.js';

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @example
 * const object = { 'a': 1, 'b': '2', 'c': 3 }
 *
 * pick(object, ['a', 'c'])
 * // => { 'a': 1, 'c': 3 }
 * @param object The source object.
 * @param keysToPick The property paths to pick.
 * @template TObj The type of the object.
 * @returns Returns the new object.
 */

export function pick<TObj extends PlainObject, Key extends keyof TObj>(object: TObj, keysToPick: Key[]): Pick<TObj, Key> {
    const result = {} as Pick<TObj, Key>;
    for (const key of keysToPick) {
        result[key] = object[key];
    }
    return result;
}
