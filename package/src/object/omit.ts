import type { PlainObject } from "@type/PlainObject.js";

import { difference } from "@array/difference.js";

import { pick } from "./pick.js";

/**
 * Omit specified keys from an object
 *
 * @example
 * const obj = {a: 1, b: 2, c: 3};
 * omit(obj, ['a', 'b']);
 * // => {c: 3}
 *
 * @param object The object to filter
 * @param keysToOmit The keys to exclude from the returned object
 * @template TObj The type of the object
 * @returns - An object without the specified keys
 */

export function omit<TObj extends PlainObject, Key extends keyof TObj>(object: TObj, keysToOmit: Key[]): Omit<TObj, Key> {
    const allKeys = Object.keys(object);
    const filteredKeys = difference(allKeys, keysToOmit as string[]) as Exclude<keyof TObj, Key>[];

    return pick(object, filteredKeys);
}