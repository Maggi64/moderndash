import type { Integer } from '@type/Integer';

/**
 * A `number` that is not an integer.
 * You can't pass a `bigint` as they are already guaranteed to be integers.
 * Use-case: Validating and documenting parameters.
 * @example
 * function setPercentage<T extends number>(x: Float<T>) {};
 *
 * setPercentage(1.1); // OK
 * setPercentage(1); // Error
 *
 * @category type
*/
export type Float<T extends number> = T extends Integer<T> ? never : T;