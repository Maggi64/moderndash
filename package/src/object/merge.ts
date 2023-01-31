import type { PlainObject } from '@helpers/types.js';

import { isPlainObject } from '@validate/isPlainObject.js';

/**
 * Deep merge two or more objects.
 * 
 * @example
 * // ---- Nested objects are merged ----
 * merge({ a: 1 }, { b: 2 }, { c: 3 }) 
 * // => { a: 1, b: 2, c: 3 }
 * 
 * merge({ a: { b: 1 } }, { a: { c: 2 } })
 * // => { a: { b: 1, c: 2 } }
 * 
 * // ---- Other types are overwritten ----
 * merge({ a: [1, 2] }, { a: [3, 4] })
 * // => { a: [3, 4] }
 * 
 * merge({ a: 1 }, { a: "Yes" })
 * // => { a: "Yes" }
 * @param target - The target object
 * @param sources - The source objects
 * @returns The merged object
 */

export function merge(target: PlainObject, ...sources: PlainObject[]): PlainObject {
    for (const source of sources) {
        for (const [key, value] of Object.entries(source)) {
            target[key] = isPlainObject(value) && isPlainObject(target[key]) 
                ? merge(target[key] as PlainObject, value) 
                : value;
        }
    }
    return target;
}