import type { PlainObject } from '@type/PlainObject.js';

import { isPlainObject } from '@validate/isPlainObject.js';

/**
 * Sets the value at path of object. If a portion of path doesn’t exist, it’s created.
 * 
 * @example
 * const obj = { a: { b: 2 } };
 * set(obj, 'a.c', 1);
 * // => { a: { b: 2, c: 1 } }
 * 
 * // `[number]` can be used to access array elements
 * set(obj, 'a.c[0]', 'hello');
 * // => { a: { b: 2, c: ['hello'] } }
 * 
 * // numbers with dots are treated as keys
 * set(obj, 'a.c.0.d', 'world');
 * // => { a: { b: 2, c: { 0: { d: 'world' } } }
 * 
 * // supports numbers in keys
 * set(obj, 'a.e0.a', 1);
 * // => { a: { e0: { a: 1 } } }
 * 
 * @param obj The object to modify.
 * @param path The path of the property to set.
 * @param value The value to set.
 * @template TObj The type of the object.
 * @returns The modified object.
 */

export function set(obj: PlainObject, path: string, value: unknown): PlainObject {
    const validPathRegex = /^([^.[\]]+(\[\d*])*(\.|\[\d+]))+([^.[\]]+(\[\d*])*)+$/;
    if (!validPathRegex.test(path))
        throw new Error('Invalid path, look at the examples for the correct format.');

    const pathParts = path.split(/\.|(?=\[)/g).filter(x => Boolean(x.trim()));
    let currentObj: PlainObject = obj;
    for (let index = 0; index < pathParts.length; index++) {
        let key: string | number = pathParts[index].replace(/[[\]]/g, '');

        if (/^\d+$/.test(key)) // if key is a number
            key = Number.parseInt(key);

        if (index === pathParts.length - 1) {
            currentObj[key] = value;
            break;
        }

        const nextElemIn = /\[\d+]/.test(pathParts[index + 1]) ? 'array' : 'object';
        if (currentObj[key] === undefined) {
            currentObj[key] = nextElemIn === 'array' ? [] : {};
        } else if (nextElemIn === 'array' && !Array.isArray(currentObj[key])) {
            currentObj[key] = [];
        } else if (nextElemIn === 'object' && !isPlainObject(currentObj[key])) {
            currentObj[key] = {};
        }
        currentObj = currentObj[key] as PlainObject;
    }

    return obj;
}