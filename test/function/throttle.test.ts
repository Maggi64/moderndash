import { describe, expect, it, vi } from 'vitest';

import { throttle } from '@function/throttle';

describe('throttle', () => {
    it('throttles the function calls', () => {
        vi.useFakeTimers();
        const spy = vi.fn();
        const throttledFn = throttle(spy, 100);

        throttledFn();
        throttledFn();
        throttledFn();

        expect(spy).toHaveBeenCalledTimes(1);

        vi.advanceTimersByTime(99);

        expect(spy).toHaveBeenCalledTimes(1);

        vi.advanceTimersByTime(1);

        expect(spy).toHaveBeenCalledTimes(2);
    });

    it('calls the function immediately with leading option set to true', () => {
        vi.useFakeTimers();
        const spy = vi.fn();
        const throttledFn = throttle(spy, 100, { leading: true });

        throttledFn();

        expect(spy).toHaveBeenCalledTimes(1);

        vi.advanceTimersByTime(100);

        throttledFn();

        expect(spy).toHaveBeenCalledTimes(1);
    });

    // it('does not call the function immediately with leading option set to false', () => {
    //     vi.useFakeTimers();
    //     const spy = vi.fn();
    //     const throttledFn = throttle(spy, 100, { leading: false });
//
    //     throttledFn();
//
    //     expect(spy).toHaveBeenCalledTimes(0);
//
    //     vi.advanceTimersByTime(100);
//
    //     expect(spy).toHaveBeenCalledTimes(1);
    // });

    it('calls the function on the trailing edge with trailing option set to true', () => {
        vi.useFakeTimers();
        const spy = vi.fn();
        const throttledFn = throttle(spy, 100, { trailing: true });

        throttledFn();
        throttledFn();

        expect(spy).toHaveBeenCalledTimes(1);

        vi.advanceTimersByTime(100);

        expect(spy).toHaveBeenCalledTimes(2);
    });

    it('does not call the function on the trailing edge with trailing option set to false', () => {
        vi.useFakeTimers();
        const spy = vi.fn();
        const throttledFn = throttle(spy, 100, { trailing: false });

        throttledFn();
        throttledFn();

        expect(spy).toHaveBeenCalledTimes(1);

        vi.advanceTimersByTime(100);

        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('calls the cancel method to cancel the throttle', () => {
        vi.useFakeTimers();
        const spy = vi.fn();
        const throttledFn = throttle(spy, 100);

        throttledFn();
        throttledFn();
        throttledFn.cancel();

        vi.advanceTimersByTime(200);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('calls the flush method to flush the throttle', () => {
        vi.useFakeTimers();
        const spy = vi.fn();
        const throttledFn = throttle(spy, 100);

        throttledFn();
        throttledFn();
        throttledFn.flush();

        expect(spy).toHaveBeenCalledTimes(2);
    });
});
