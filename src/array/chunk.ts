export function chunk<T>(array: T[], chunkSize = 1) {
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
