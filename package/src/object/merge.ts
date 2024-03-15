import type { ArrayMinLength } from "@type/ArrayMinLength.js";
import type { GenericObject } from "@type/GenericObject";
import type { PlainObject } from "@type/PlainObject.js";

import { isPlainObject } from "@validate/isPlainObject.js";

/**
 * This function combines two or more objects into a single new object. Arrays and other types are overwritten.
 * 
 * @example
 * // ---- Nested objects are merged ----
 * merge({ a: 1 }, { b: 2 }, { c: 3, d: { e: 4 } }) 
 * // => { a: 1, b: 2, c: 3, d: { e: 4 } }
 *
 * // ---- Other types are overwritten ----
 * merge({ a: [1, 2] }, { a: [3, 4] })
 * // => { a: [3, 4] }
 * 
 * merge({ a: 1 }, { a: "Yes" })
 * // => { a: "Yes" }
 * @param target The target object
 * @param sources The source objects
 * @template TTarget The type of the target object
 * @template TSources The type of the source objects
 * @returns A new merged object
 */

export function merge<TTarget extends GenericObject, TSources extends ArrayMinLength<GenericObject, 1>>(target: TTarget, ...sources: TSources): MergeDeepObjects<[TTarget, ...TSources]> {
    const targetCopy = { ...target };
    for (const source of sources) {
        for (const [key, value] of Object.entries(source)) {
            (targetCopy as PlainObject)[key] = isPlainObject(value) && isPlainObject(targetCopy[key]) 
                ? merge(targetCopy[key], value) 
                : value;
        }
    }
    return targetCopy as MergeDeepObjects<[TTarget, ...TSources]>;  
}

type OptionalPropertyNames<T> =
  { [K in keyof T]-?: (PlainObject extends { [P in K]: T[K] } ? K : never) }[keyof T];

type SpreadProperties<L, R, K extends keyof L & keyof R> =
  { [P in K]: L[P] | Exclude<R[P], undefined> };

type Id<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;

type SpreadTwo<L, R> = Id<
& Pick<L, Exclude<keyof L, keyof R>>
& Pick<R, Exclude<keyof R, OptionalPropertyNames<R>>>
& Pick<R, Exclude<OptionalPropertyNames<R>, keyof L>>
& SpreadProperties<L, R, OptionalPropertyNames<R> & keyof L>
>;

type MergeDeepObjects<A extends readonly [...unknown[]]> = A extends [infer L, ...infer R] ?
    SpreadTwo<L, MergeDeepObjects<R>> : unknown;
