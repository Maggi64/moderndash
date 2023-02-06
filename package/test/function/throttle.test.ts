import { beforeAll, beforeEach, describe, expect, test, vi } from 'vitest';

import { decThrottle } from '@decorator/decThrottle.js';
import { throttle } from '@function/throttle';

describe('throttle', () => {
    const callback = vi.fn();

    beforeAll(() => {
        vi.useFakeTimers();
    });

    beforeEach(() => {
        callback.mockClear();
    });


    test('only calls the function once', () => {

        
        const throttled = throttle(callback, 100);

        throttled();
        throttled();
        throttled();

        expect(callback).toHaveBeenCalledTimes(1);

        vi.advanceTimersByTime(99);
        expect(callback).toHaveBeenCalledTimes(1);

        vi.advanceTimersByTime(1);
        throttled();
        expect(callback).toHaveBeenCalledTimes(2);
    });

    test('decorator', () => {
        class TestClass {
            @decThrottle(100)
            testMethod() {
                callback();
            }
        }

        const instance = new TestClass();

        instance.testMethod();
        instance.testMethod();
        instance.testMethod();

        expect(callback).toHaveBeenCalledTimes(1);

        vi.advanceTimersByTime(99);
        expect(callback).toHaveBeenCalledTimes(1);

        vi.advanceTimersByTime(1);
        instance.testMethod();
        expect(callback).toHaveBeenCalledTimes(2);
    });
});
