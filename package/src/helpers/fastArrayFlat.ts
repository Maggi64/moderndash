// native Array.flat is much slower than this - node 19
export function fastArrayFlat<TElem>(arrays: (readonly TElem[])[]): readonly TElem[] {
    let result = arrays.shift() ?? [];

    for (const array of arrays) {
        result = [...result, ...array];
    }

    return result;
}