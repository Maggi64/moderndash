export function dropRightWhile<T>(array: T[], predicate: (value: T) => boolean) {
    let i = array.length;
    while (i > 0 && predicate(array[i - 1])) {
        i--;
    }
    return array.slice(0, i);
}
