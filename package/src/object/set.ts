import type { PlainObject } from '@type/PlainObject.js';

/**
 * Sets the value at path of object. If a portion of path doesn’t exist, it’s created.
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

export function set<TObj extends PlainObject>(obj: TObj, path: string, value: unknown): TObj {
    const pathParts = path.split(/[.[\]]/g).filter(x => Boolean(x.trim()));

    let currentObj: Record<string | number, unknown> = obj;
    for (let index = 0; index < pathParts.length; index++) {
        const key = pathParts[index];

        if (index === pathParts.length - 1) {
            currentObj[key] = value;
            break;
        }
        
        const nextIsNumber = !Number.isNaN(Number.parseInt(pathParts[index + 1]));
        if (currentObj[key] === undefined)
            currentObj[key] = nextIsNumber ? [] : {};

        currentObj = currentObj[key] as Record<string | number, unknown>;
    }

    return obj;
}