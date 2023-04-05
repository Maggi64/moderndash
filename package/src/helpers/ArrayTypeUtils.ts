import type { ArrayMinLength } from "@type/ArrayMinLength.js";

export type CompareFunction<TArrays extends ArrayMinLength<unknown[], 2>> = (a: TArrays[0][number], b: ArrayTail<TArrays>[number][number]) => boolean;
export type ArrayTail<TArray extends unknown[]> = TArray extends [unknown, ...infer U] ? U : never;