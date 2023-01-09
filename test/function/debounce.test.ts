import { afterEach, beforeAll, describe, expect, test, vi } from 'vitest';

import { debounce } from '@function/debounce';

describe('debounce', () => {
    const testFn = vi.fn((x: number) => x * 2);

    beforeAll(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        testFn.mockClear();
    });

    test('only calls the function once', () => {
        const debounced = debounce(testFn, 100);

        debounced(1);
        debounced(1);
        debounced(1);

        expect(testFn).not.toHaveBeenCalled();

        vi.advanceTimersByTime(99);
        expect(testFn).not.toHaveBeenCalled();

        vi.advanceTimersByTime(1);
        expect(testFn).toHaveBeenCalledTimes(1);
    });

    test('calls the function again after the wait period', () => {
        const debounced = debounce(testFn, 100);

        debounced(1);
        vi.advanceTimersByTime(50);
        debounced(1);
        vi.advanceTimersByTime(50);
        debounced(1);

        vi.advanceTimersByTime(50);
        expect(testFn).not.toHaveBeenCalled();

        vi.advanceTimersByTime(50);
        expect(testFn).toHaveBeenCalledTimes(1);
    });
});
