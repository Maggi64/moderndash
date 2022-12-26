// Types from https://gist.github.com/briancavalier/c4af1538ae9b2e4ab97caf14306625ab
type UnZip<A extends readonly unknown[]> = {
    [K in keyof A]: readonly A[K][]
};

export function zipWith<Args extends unknown[], R>(combineFunc: (...args: Args) => R, ...arrays: UnZip<Args>): R[] {
    const len = Math.min(...arrays.map(a => a.length));
    const zipped: R[] = [];
    for (let i = 0; i < len; i++) {
        // Typescript needs the Args hint, or it infers any[]
        zipped[i] = combineFunc(...arrays.map(a => a[i]) as Args);
    }
    return zipped;
}
