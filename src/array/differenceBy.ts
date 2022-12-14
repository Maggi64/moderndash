export function differenceBy<T>(array: T[], array2: T[], iteratee = (value: T) => value) {
    return array.filter(a => !array2.map(v => iteratee(v)).includes(iteratee(a)));
}
