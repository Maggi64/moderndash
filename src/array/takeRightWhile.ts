export function takeRightWhile<T>(array: T[], predicate: (elem: T) => boolean): T[] {
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
