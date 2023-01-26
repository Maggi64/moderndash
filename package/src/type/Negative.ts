/**
 * A negative `number`/`bigint` (`-∞ < x < 0`)
 *
 * Use-case: Validating and documenting parameters.
 * @example
 * function setNegative<T extends number>(x: Negative<T>) {};
 *
 * setNegative(-1.2); // OK
 * setNegative(1); // Error
 *
 * function setNegInt<T extends number>(x: Negative<Integer<T>>) {};
 *
 * setNegInt(-1); // OK
 * setNegInt(1); // Error
 * setNegInt(-1.1); // Error
 * @category type
*/
export type Negative<T extends number | bigint> = T extends 0 | 0n ? never : `${T}` extends `-${string}` ? T : never;