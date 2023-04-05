/* eslint-disable complexity */
import type { PlainObject } from "@type/PlainObject.js";

import { isPlainObject } from "./isPlainObject.js";

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * @example
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
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

    if (Array.isArray(a) && Array.isArray(b)) {
        return isSameArray(a, b);
    }

    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }

    if (a instanceof RegExp && b instanceof RegExp) {
        return a.toString() === b.toString();
    }

    if (isPlainObject(a) && isPlainObject(b)) {
        return isSameObject(a, b);
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

function isSameArray(a: unknown[], b: unknown[]) {
    if (a.length !== b.length) return false;

    // check if the values of each element in the arrays are equal
    for (const [i, element] of a.entries()) {
        if (!isEqual(element, b[i])) return false;
    }

    return true;
}
