import { describe, test, expect, vi } from 'vitest';

import { retry } from '@promise/retry.js';

describe('retry', () => {

    test('retry until successful', async () => {
        const mockFn = vi.fn()
            .mockRejectedValueOnce(new Error('error 1'))
            .mockResolvedValueOnce('success');


        const result = await retry(mockFn);

        expect(mockFn).toHaveBeenCalledTimes(2);
        expect(result).toEqual('success');
    });

    test('retry with custom backoff function', async () => {
        const mockFn = vi.fn()
            .mockRejectedValueOnce(new Error('error 1'))
            .mockRejectedValueOnce(new Error('error 2'))
            .mockResolvedValueOnce('success');


        const backoff = vi.fn().mockImplementation(retries => retries * 10);
        const result = await retry(mockFn, { maxRetries: 2, backoff });

        expect(result).toEqual('success');

        expect(mockFn).toHaveBeenCalledTimes(3);
        expect(backoff).toHaveBeenNthCalledWith(1, 1);
        expect(backoff).toHaveBeenNthCalledWith(2, 2);
    });

    test('stop retrying after reaching max retries', async () => {
        const mockFailFn = vi.fn().mockRejectedValue(new Error('error'));
        await expect(retry(mockFailFn, { maxRetries: 1, backoff: () => 10 })).rejects.toThrow('error');

        expect(mockFailFn).toHaveBeenCalledTimes(2);
    });

    test('call onRetry callback when retrying', async () => {
        const mockFn = vi.fn()
            .mockRejectedValueOnce(new Error('error 1'))
            .mockRejectedValueOnce(new Error('error 2'))
            .mockResolvedValueOnce('success');

        const onRetry = vi.fn();
        const result = await retry(mockFn, { maxRetries: 2, onRetry, backoff: () => 10 });

        expect(result).toEqual('success');
        expect(mockFn).toHaveBeenCalledTimes(3);
        expect(onRetry).toHaveBeenNthCalledWith(1, expect.any(Error), 1);
        expect(onRetry).toHaveBeenNthCalledWith(2, expect.any(Error), 2);
    });
});