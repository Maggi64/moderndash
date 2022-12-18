export function chunk<T>(chunkSize: number, array: T[]): T[][] {
    const sizeInteger = Math.trunc(chunkSize);
    if (array.length === 0 || sizeInteger < 1) {
        return [];
    }

    const chunkedArray = [];
    let i = 0;

    while (i < array.length) {
        chunkedArray.push(array.slice(i, i + sizeInteger));
        i += sizeInteger;
    }

    return chunkedArray;
}
