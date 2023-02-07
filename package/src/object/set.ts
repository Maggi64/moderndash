import type { PlainObject } from '@type/PlainObject.js';

import { isPlainObject } from '@validate/isPlainObject.js';

/**
 * Sets the value at path of object. If a portion of path doesn’t exist, it’s created.
 * 
 * TODO: Add support for array paths.
 * 
 * @alpha
 * @example
 * const obj = { a: { b: 2 } };
 * set(obj, 'a.c', 1);
 * // => { a: { b: 2, c: 1 } }
 * 
 * @param obj - The object to modify.
 * @param path - The path of the property to set.
 * @param value - The value to set.
 * @returns The modified object.
 */

export function set(obj: PlainObject, path: string, value: unknown): PlainObject {
    const pathParts = path.split('.');
    const lastPathPart = pathParts.pop()!;

    let currentObj = obj;
    for (const pathPart of pathParts) {
        if (!isPlainObject(currentObj[pathPart])) {
            currentObj[pathPart] = {};
        }
        currentObj = currentObj[pathPart] as PlainObject;
    }

    currentObj[lastPathPart] = value;

    return obj;
}