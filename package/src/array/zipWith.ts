// Types from https://gist.github.com/briancavalier/c4af1538ae9b2e4ab97caf14306625ab
type UnZip<A extends readonly unknown[]> = {
    [K in keyof A]: readonly A[K][]
};

/**
 * This method is like `zip` except that it accepts `iteratee` to specify
 * how grouped values should be combined. The iteratee is invoked with the
 * elements of each group: (...group).
 *
 * @category Array
 * @param combineFunc - The function to combine grouped values.
 * @param arrays - The arrays to process.
 * @returns Returns the new array of grouped elements.
 * @example
 * zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c)
 * // => [111, 222]
 */

export function zipWith<Args extends unknown[], TOutput>(combineFunc: (...args: Args) => TOutput, ...arrays: UnZip<Args>): TOutput[] {
    const len = Math.min(...arrays.map(a => a.length));
    const zipped: TOutput[] = [];
    for (let i = 0; i < len; i++) {
        // Typescript needs the Args hint, or it infers any[]
        // TODO find a way to avoid the cast
        zipped[i] = combineFunc(...arrays.map(a => a[i]) as Args);
    }
    return zipped;
}
