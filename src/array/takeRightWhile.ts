export function takeRightWhile<T>(predicate: (elem: T) => boolean, array: T[]): T[] {
    const result: T[] = [];

    for (let i = array.length - 1; i >= 0; i--) {
        if (predicate(array[i])) {
            result.unshift(array[i]);
        } else {
            break;
        }
    }

    return result;
}
