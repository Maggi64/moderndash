import type { Integer } from '@type/Integer';

/**
 * A `number` that is not an integer.
 * You can't pass a `bigint` as they are already guaranteed to be integers.
 * Use-case: Validating and documenting parameters.
 * @example
 * function setPercentage<T extends number>(length: Float<T>) {
 *   // ...
 * };
 *
 * @category type
*/
export type Float<T extends number> = T extends Integer<T> ? never : T;