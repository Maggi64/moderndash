import { describe, expect, test, vi } from 'vitest';

import { debounce } from '@function/debounce';


describe('debounce', () => {
    test('only calls the function once', () => {
        vi.useFakeTimers();

        const callback = vi.fn();
        const debounced = debounce(callback, 100);

        debounced();
        debounced();
        debounced();

        expect(callback).not.toHaveBeenCalled();

        vi.advanceTimersByTime(99);
        expect(callback).not.toHaveBeenCalled();

        vi.advanceTimersByTime(1);
        expect(callback).toHaveBeenCalledTimes(1);
    });

    test('calls the function again after the wait period', () => {
        vi.useFakeTimers();

        const callback = vi.fn();
        const debounced = debounce(callback, 100);

        debounced();
        vi.advanceTimersByTime(50);
        debounced();
        vi.advanceTimersByTime(50);
        debounced();

        vi.advanceTimersByTime(50);
        expect(callback).not.toHaveBeenCalled();

        vi.advanceTimersByTime(50);
        expect(callback).toHaveBeenCalledTimes(1);
    });
});
