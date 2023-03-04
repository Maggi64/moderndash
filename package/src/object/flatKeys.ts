import type { PlainObject } from '@type/PlainObject.js';

import { isPlainObject } from '@validate/isPlainObject.js';

/**
 * Flattens an object into a single level object.
 * 
 * @example
 * const obj = { a: { b: 2, c: [{ d: 3 }, {d: 4 }] } };
 * flatKeys(obj);
 * // => { 'a.b': 2, 'a.c[0].d': 3, 'a.c[1].d': 4 }
 * 
 * @param obj The object to flatten.
 * @template TObj The type of the object to flatten.
 * @returns A new object with flattened keys.
 */

export function flatKeys<TObj extends PlainObject>(obj: TObj): Record<string, unknown> {
    const result: Record<string, unknown> = {};
  
    function addToResult(prefix: string, value: unknown) {
        if (isPlainObject(value)) {
            const flatObj = flatKeys(value);
            for (const [flatKey, flatValue] of Object.entries(flatObj)) {
                result[`${prefix}.${flatKey}`] = flatValue;
            }
        } else if (Array.isArray(value)) {
            const flatArr = flattenArray(prefix, value);
            for (const [flatKey, flatValue] of Object.entries(flatArr)) {
                result[flatKey] = flatValue;
            }
        } else {
            result[prefix] = value;
        }
    }
  
    function flattenArray<TElem>(prefix: string, array: TElem[]) {
        const result: Record<string, unknown> = {};
  
        for (const [index, element] of array.entries()) {
            addToResult(`${prefix}[${index}]`, element);
        }
  
        return result;
    }
  
    for (const [key, value] of Object.entries(obj)) {
        addToResult(key, value);
    }
  
    return result;
}