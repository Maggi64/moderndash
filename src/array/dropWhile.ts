export function dropWhile<T>(array: T[], predicate: (value: T) => boolean): T[] {
    const index = array.findIndex(x => !predicate(x));
    return array.slice(index === -1 ? array.length : index);
}
