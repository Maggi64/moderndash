import { describe, test, expect } from 'vitest';

import { sleep } from '@promise/sleep.js';
import { timeout } from '@promise/timeout.js';

describe('timeout', () => {
    test('timeout', async () => {
    
        const result = await timeout(sleep(20), 50);
    
        expect(result).toBeUndefined();
    });
    
    test('timeout with rejected promise', async () => {
        try {
            await timeout(sleep(100), 50);
        } catch (error) {
            const err = error as Error;
            expect(err.message).toBe('Promise timed out after 50ms');
        }
    });

    test('rejected promise', async () => {
        try {
            await timeout(Promise.reject('rejected'), 50);
        } catch (error) {
            const err = error as Error;
            expect(err).toBe('rejected');
        }
    });
});