export function uniqWith<T>(comperator: (a: T, b: T) => boolean, array: T[]): T[] {
    return array.filter((value, index, self) => {
        return self.findIndex(otherValue => comperator(value, otherValue)) === index;
    });
}
