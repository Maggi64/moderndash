/* eslint-disable no-await-in-loop */
import { sleep } from '@promise/sleep.js';

/**
 * Retry a function until it succeeds or the maximum number of retries is reached.
 * 
 * Default maxRetries: `5`.  
 * Default backoff: `2^retries * 100ms` (100, 200, 400, 800, 1600, 3200, ...)
 *
 * @example
 * await retry(() => fetch('https://example.com'));
 * 
 * // ---- Advanced example ----
 * const fetchSite = async (url: string) => {
 *    const response = await fetch(url);
 *    response.ok || throw new Error('Failed to fetch');
 * }
 * 
 * const logger = (error: unknown, retry?: number) => console.log("Retrying", retry, error);
 * 
 * await retry(() => fetchSite('https://example.com'), { maxRetries: 3, backoff: retries => retries * 1000, onRetry: logger }));
 * // => Will retry 3 times with a 1 second delay between each retry. Will log the error and retry number.
 * 
 * @param func The function to retry.
 * @param options The options for the retry.
 * @param options.maxRetries The maximum number of retries. Defaults to `5`.
 * @param options.backoff The backoff function to use. Defaults to `2^retries * 100`.
 * @param options.onRetry The function to call when a retry is attempted.
 * @template TRes The type of the result of the function.
 * @returns A promise that resolves when the function succeeds.
 */

export async function retry<TRes>(
    func: () => Promise<TRes>, 
    options?: { 
        maxRetries?: number,
        backoff?: ((retries: number) => number),
        onRetry: (error?: unknown, retry?: number) => void
    }
): Promise<TRes> {
    const backOffFn = options?.backoff ?? (retries => (2 ** retries) * 100);
    const maxRetries = options?.maxRetries ?? 5;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onRetry = options?.onRetry ?? (() => {});
    let retries = 0;
    let lastError: unknown;

    while (retries <= maxRetries) {
        try {
            if (retries > 0)
                onRetry(lastError, retries);
            return await func();
        } catch (error) {
            lastError = error;
            retries++;
            if (retries > maxRetries) {
                throw error;
            }
            await sleep(backOffFn(retries));
        }
    }

    throw new Error('Retry terminated without success, this should never happen');
}