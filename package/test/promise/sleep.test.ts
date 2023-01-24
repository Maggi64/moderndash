import { describe, test, expect } from 'vitest';

import { sleep } from '@promise/sleep.js';

describe('sleep', () => {
    test('should resolve after the specified time', async () => {
        const startTime = Date.now();
        await sleep(500);
        expect(Date.now() - startTime).toBeGreaterThanOrEqual(500);
    });
});