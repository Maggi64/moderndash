import { test, describe, expect, vi, afterEach } from 'vitest';

import { once } from '@function/once';

describe('once', () => {
    const testFn = vi.fn((x: number) => x * 2);

    afterEach(() => {
        testFn.mockClear();
    });

    test('only calls the function once', () => {
        const onceFn = once(testFn);

        onceFn(1);
        expect(testFn).toHaveBeenCalledTimes(1);
        onceFn(1);
        expect(testFn).toHaveBeenCalledTimes(1);
        onceFn(1);
        expect(testFn).toHaveBeenCalledTimes(1);
    });

    test('preserves the return value of the function', () => {
        const onceFn = once(testFn);

        expect(onceFn(2)).toBe(4);
        expect(onceFn(3)).toBe(4);
    });
});
