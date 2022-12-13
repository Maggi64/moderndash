export function differenceWith<T>(array1: T[], array2: T[], comparator = (a: T, b: T) => a === b) {
    return array1.filter(a => !array2.some(b => comparator(a, b)));
}
