import { sample } from '@collection/sample';

export function sampleSize<T>(size: number, array: T[]): T[] {
    const sampleArray: T[] = [];

    if (array.length === 0 || size <= 0) {
        return sampleArray;
    }

    for (let i = 0; i < size; i++) {
        sampleArray.push(sample(array) as T);
    }

    return sampleArray;
}
