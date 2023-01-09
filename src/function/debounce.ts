export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
    fn: T, wait = 0, options: { leading?: boolean, maxWait?: number, trailing?: boolean } = {}
): (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T> {
    let lastArgs: Parameters<T> | undefined;
    let lastThis: ThisParameterType<T> | undefined;
    let result: ReturnType<T>;
    let timerId: ReturnType<typeof setTimeout> | undefined;
    let lastCallTime: number | undefined;
    let lastInvokeTime = 0;
    const maxing = options.maxWait ?? false;
    const leading = options.leading ?? false;
    const trailing = options.trailing ?? true;
    const maxWait = options.maxWait ?? 0;

    function invokeFunc(time: number) {
        const args: Parameters<T> | undefined = lastArgs;
        const thisArg: ThisParameterType<T> | undefined = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = fn.apply(thisArg, args);
        return result;
    }

    function leadingEdge(time: number) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time: number) {
        const timeSinceLastCall = time - lastCallTime;
        const timeSinceLastInvoke = time - lastInvokeTime;
        const timeWaiting = wait - timeSinceLastCall;

        return maxing
            ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
            : timeWaiting;
    }

    function shouldInvoke(time: number) {
        if (lastCallTime === undefined)
            return true;

        const timeSinceLastCall = time - lastCallTime;
        const timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return timeSinceLastCall >= wait || timeSinceLastCall < 0 || (maxing && timeSinceLastInvoke >= maxWait);
    }

    function timerExpired() {
        const time = Date.now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time: number) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `fn` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }

    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
        return timerId === undefined ? result : trailingEdge(Date.now());
    }

    function debounced(this: ThisParameterType<T>, ...args: Parameters<T>): ReturnType<T> {
        const time = Date.now();
        const isInvoking = shouldInvoke(time);

        lastArgs = args;
        // TODO Fix this assignment
        // eslint-disable-next-line @typescript-eslint/no-this-alias,unicorn/no-this-assignment
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }

    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
