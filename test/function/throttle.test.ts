import { describe, expect, test, vi } from 'vitest';

import { throttle } from '@function/throttle';

describe('throttle', () => {
    test('only calls the function once', () => {
        vi.useFakeTimers();

        const callback = vi.fn();
        const throttled = throttle(callback, 100);

        throttled();
        throttled();
        throttled();

        expect(callback).toHaveBeenCalledTimes(1);

        vi.advanceTimersByTime(99);
        expect(callback).toHaveBeenCalledTimes(1);

        vi.advanceTimersByTime(1);
        expect(callback).toHaveBeenCalledTimes(2);
    });
});
