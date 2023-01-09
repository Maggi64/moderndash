import { describe, test, vi, expect } from 'vitest';

import { after } from '@function/after';

describe('after', () => {
    test('after function works correctly', () => {
        const testFn = vi.fn();
        const afterFn = after(3, testFn);

        afterFn(1);
        afterFn(1);
        expect(testFn).toHaveBeenCalledTimes(0);

        afterFn(1);
        afterFn(1);

        expect(testFn).toHaveBeenCalledTimes(2);
    });
});
