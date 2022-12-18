export function takeWhile<T>(predicate: (elem: T) => boolean, array: T[]): T[] {
    const result: T[] = [];

    for (const element of array) {
        if (predicate(element)) {
            result.push(element);
        } else {
            break;
        }
    }

    return result;
}
