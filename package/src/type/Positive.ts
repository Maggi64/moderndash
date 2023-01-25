import type { Negative } from '@type/Negative';

/**
A positive `number`/`bigint` (`0 < x < ∞`).
Use-case: Validating and documenting parameters.
@example
function setLength<T extends number>(length: Positive<T>) {
    // ...
};

function setLength<T extends number>(length: Positive<Integer<T>>) {
    // ...
};

@category type
*/
export type Positive<T extends number | bigint> = T extends 0 | 0n ? never : Negative<T> extends never ? T : never;