import type { Negative } from '@type/Negative';

/**
 * A positive `number`/`bigint` (`0 < x < ∞`).
 *
 * Use-case: Validating and documenting parameters.
 * @example
 * function setPositive<T extends number>(x: Positive<T>) {};
 *
 * setPositive(1.2); // OK
 * setPositive(-1); // Error
 *
 * function setPosInt<T extends number>(x: Positive<Integer<T>>) {};
 *
 * setPosInt(1); // OK
 * setPosInt(-1); // Error
 * setPosInt(1.1); // Error
 *
 * @category type
*/
export type Positive<T extends number | bigint> = T extends 0 | 0n ? never : Negative<T> extends never ? T : never;