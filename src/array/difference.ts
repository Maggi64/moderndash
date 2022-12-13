export function difference<T>(array: T[], array2: T[]) {
    return differenceBase(array, array2);
}

export function differenceBase<T>(array: T[], array2: T[], iteratee = (value: T) => value) {
    return array.filter(a => !array2.map(v => iteratee(v)).includes(iteratee(a)));
}
