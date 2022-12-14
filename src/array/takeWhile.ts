export function takeWhile<T>(array: T[], predicate: (elem: T) => boolean): T[] {
    const result: T[] = [];

    for (const elem of array) {
        if (predicate(elem)) {
            result.push(elem);
        } else {
            break;
        }
    }

    return result;
}
