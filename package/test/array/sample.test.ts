import { test, describe, expect } from 'vitest';

import { sample } from '@array/sample';

describe('sample', () => {
    test('sample function returns a random value from an array', () => {
        const collection = [1, 2, 3, 4, 5];
        const result = sample(collection);
        expect(collection).toContain(result);
    });

    test('sample function returns undefined for an empty collection', () => {
        const collection = [] as unknown[];
        const result = sample(collection);
        expect(result).toBeUndefined();
    });

    test('should return an empty array if the input array is empty', () => {
        const result = sample([], 3);
        expect(result).toBeUndefined();
    });

    test('should return a random subset of the input array', () => {
        const array = [1, 2, 3, 4, 5];
        const result = sample([1, 2, 3, 4, 5], 3);
        expect(expect.arrayContaining(result)).toEqual(array);
    });
});
