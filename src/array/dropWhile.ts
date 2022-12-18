export function dropWhile<T>(predicate: (value: T) => boolean, array: T[]): T[] {
    const index = array.findIndex(x => !predicate(x));
    return array.slice(index === -1 ? array.length : index);
}
