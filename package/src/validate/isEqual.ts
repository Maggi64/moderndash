/* eslint-disable complexity */
import type { PlainObject } from "@type/PlainObject.js";

import { isPlainObject } from "./isPlainObject.js";

type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 * 
 * Supports: primitives, arrays, objects, dates, regexes, maps, sets, buffers, typed arrays
 * 
 * @example
 * var object = { a: { b: 2 } };
 * var other = { a: { b: 2 } };
 *
 * isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 * @param a The value to compare.
 * @param b The other value to compare.
 * @returns Returns `true` if the values are equivalent, else `false`.
 */

export function isEqual(a: unknown, b: unknown): boolean {
    if (Object.is(a, b)) return true;
    
    if (typeof a !== typeof b) return false;

    if (Array.isArray(a) && Array.isArray(b))
        return isSameArray(a, b);

    if (a instanceof Date && b instanceof Date)
        return a.getTime() === b.getTime();

    if (a instanceof RegExp && b instanceof RegExp)
        return a.toString() === b.toString();

    if (isPlainObject(a) && isPlainObject(b))
        return isSameObject(a, b);

    if (a instanceof ArrayBuffer && b instanceof ArrayBuffer)
        return dataViewsAreEqual(new DataView(a), new DataView(b));

    if (a instanceof DataView && b instanceof DataView)
        return dataViewsAreEqual(a, b);

    if(isTypedArray(a) && isTypedArray(b)) {
        if (a.byteLength !== b.byteLength) return false;
        return isSameArray(a, b);
    }

    return false;
}

function isSameObject(a: PlainObject, b: PlainObject) {
    // check if the objects have the same keys
    const keys1 = Object.keys(a);
    const keys2 = Object.keys(b);
    if (!isEqual(keys1, keys2)) return false;

    // check if the values of each key in the objects are equal
    for (const key of keys1) {
        if (!isEqual(a[key], b[key])) return false;
    }

    // the objects are deeply equal
    return true;
}

function isSameArray(a: unknown[] | TypedArray, b: unknown[] | TypedArray) {
    if (a.length !== b.length) return false;
    return a.every((element, index) => isEqual(element, b[index]));
}

function dataViewsAreEqual(a: DataView, b: DataView) {
    if (a.byteLength !== b.byteLength) return false;
    for (let i=0; i < a.byteLength; i++) {
      if (a.getUint8(i) !== b.getUint8(i)) return false;
    }
    return true;
  }


function isTypedArray (value: unknown): value is TypedArray {
    return ArrayBuffer.isView(value) && !(value instanceof DataView);
}