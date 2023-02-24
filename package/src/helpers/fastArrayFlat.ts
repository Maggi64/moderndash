// native array.flat is much slower than this - node 19
export const fastArrayFlat = <TElem>(arr: TElem[][]): TElem[] => {
    if (arr.length === 1) return arr[0];
    // eslint-disable-next-line unicorn/prefer-array-flat
    return arr.reduce((acc, val) => [...acc, ...val], []);
};