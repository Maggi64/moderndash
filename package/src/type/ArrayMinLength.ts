
/**
 * This type builds an array with a minimum length.
 * 
 * @example
 * let arr: ArrayMinLength<number, 3> = [1, 2, 3];
 * arr = [1, 2]; // Error
 * 
 * @template TElem The type of the array elements.
 * @template TMinLength The minimum length of the array.
 */

export type ArrayMinLength<TElem, TMinLenght extends number> = BuildArrayMinLength<TElem, TMinLenght, []>;

type BuildArrayMinLength<
    TElem,
    TMinLength extends number,
    Current extends TElem[]
> = Current['length'] extends TMinLength
    ? [...Current, ...TElem[]]
    : BuildArrayMinLength<TElem, TMinLength, [...Current, TElem]>;