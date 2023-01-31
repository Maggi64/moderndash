import type { PlainObject } from '@helpers/types.js';

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
 * @param keysToPick - The property paths to pick.
 * @returns Returns the new object.
 */

export function pick<TInput extends PlainObject, Key extends keyof TInput>(object: TInput, keysToPick: Key[]): Pick<TInput, Key> {
    const result = {} as Pick<TInput, Key>;
    for (const key of keysToPick) {
        result[key] = object[key];
    }
    return result;
}
