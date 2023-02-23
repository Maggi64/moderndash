/**
 * Returns a new promise that will reject with an error after a specified timeout.  
 *
 * @example
 * try {
 *   await timeout(fetch('https://example.com'), 1000);
 * } catch (error) {
 *   console.log(error.message);
 *   // => 'Promise timed out after 1000ms'
 * }
 * @template TRes - The type of the resolved value.
 * @param promise The promise to wrap.
 * @param timeout The timeout in milliseconds.
 * 
 * @returns A new promise that will reject with an error after the specified timeout.
 */
export function timeout<TRes>(promise: Promise<TRes>, timeout: number): Promise<TRes> {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new Error(`Promise timed out after ${timeout}ms`));
        }, timeout);
  
        promise.then(
            (result) => {
                clearTimeout(timeoutId);
                resolve(result);
            },
            (error) => {
                clearTimeout(timeoutId);
                reject(error);
            }
        );
    });
}