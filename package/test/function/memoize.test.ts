import { test, describe, expect, vi, beforeEach } from 'vitest';

import { memoize } from '@function/memoize';

describe('memoize', () => {
    const testFn = vi.fn((a: number, b: number) => a + b);

    beforeEach(() => {
        testFn.mockClear();
    });


    test('memoize a function', () => {
        const memoizedFunc = memoize(testFn);

        expect(memoizedFunc(1, 2)).to.equal(3);
        expect(memoizedFunc(1, 2)).to.equal(3);
        expect(testFn).toHaveBeenCalledOnce();
    });

    test('return different results for different arguments', () => {
        const memoizedFunc = memoize(testFn);

        expect(memoizedFunc(1, 2)).to.equal(3);
        expect(memoizedFunc(2, 3)).to.equal(5);
        expect(testFn).toHaveBeenCalledTimes(2);
    });

    test('expose a cache property', () => {
        const memoizedFunc = memoize(testFn);
        expect(memoizedFunc.cache).to.be.an.instanceof(Map);
    });
});
