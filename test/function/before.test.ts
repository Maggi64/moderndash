import { describe, expect, test, vi } from 'vitest';

import { before } from '@function/before';

describe('before', () => {
    test('only calls 3 times', () => {
        const testFn = vi.fn();
        const beforeFn = before(3, testFn);

        beforeFn();
        beforeFn();
        expect(testFn).toHaveBeenCalledTimes(2);

        beforeFn();
        beforeFn();

        expect(testFn).toHaveBeenCalledTimes(3);
    });
});
