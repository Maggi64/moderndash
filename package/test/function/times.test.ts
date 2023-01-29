import { describe, test, expect, vi, afterEach } from 'vitest';

import { times } from '@function/times.js';

describe('times', () => {
    const testFN = vi.fn((index: number) => index);

    afterEach(() => {
        testFN.mockClear();
    });

    test('call the provided function the correct number of times', () => {
        times(5, testFN);
        expect(testFN).toHaveBeenCalledTimes(5);
    });

    test('pass the correct index to the provided function', () => {
        const result = times(5, testFN);
        expect(result).toEqual([0, 1, 2, 3, 4]);
    });

    test('handle a negative value for the first argument', () => {
        const result = times(-1, testFN);
        expect(result).toEqual([]);
    });
});