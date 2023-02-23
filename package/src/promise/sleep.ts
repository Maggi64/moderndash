/**
 * Sleeps for the given amount of time.
 *
 * @example
 * await sleep(1000);
 * // => Waits for 1 second.
 * @param ms  Amount of time to sleep in milliseconds.
 * @returns A promise that resolves after the given amount of time.
 */
export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}