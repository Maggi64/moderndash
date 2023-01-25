/**
 * A negative `number`/`bigint` (`-∞ < x < 0`)
 * Use-case: Validating and documenting parameters.
 * @example
 * function setLength<T extends number>(length: Negative<T>) {
 *    // ...
 *  };
 *
 * function setLength<T extends number>(length: Negative<Integer<T>>) {
 *   // ...
 *  };
 * @category type
*/
export type Negative<T extends number | bigint> = T extends 0 | 0n ? never : `${T}` extends `-${string}` ? T : never;