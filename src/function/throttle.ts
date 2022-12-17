export function throttle<T extends (...args: unknown[]) => unknown, C>(fn: T, wait = 0, options: { leading?: boolean, trailing?: boolean } = {}) {
    let inThrottle = false;
    let lastFn: ReturnType<typeof setTimeout>;
    let lastTime: number;
    const throttledFn = function (this: C, ...args: Parameters<T>) {
        if (inThrottle) {
            clearTimeout(lastFn);
            lastFn = setTimeout(() => {
                if (Date.now() - lastTime >= wait) {
                    if (options.trailing !== false) {
                        fn.apply(this, args);
                    }
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        } else {
            if (options.leading !== false) {
                fn.apply(this, args);
            }
            lastTime = Date.now();
            inThrottle = true;
        }
    };
    throttledFn.cancel = function () {
        clearTimeout(lastFn);
        inThrottle = false;
    };
    throttledFn.flush = function (...flushArgs: Parameters<T>) {
        clearTimeout(lastFn);
        fn.apply(this, flushArgs);
        lastTime = Date.now();
    };
    return throttledFn;
}
