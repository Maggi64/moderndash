import { describe, test, expect } from 'vitest';

import { races } from '@promise/races.js';

describe('describe', () => {
    const delayedPromise = (delay: number) => new Promise((resolve) => {
        setTimeout(() => {
            resolve(delay);
        }, delay);
    });

    test('should resolve the first 2 promises', async () => {
        const result = await races(2, delayedPromise(20), delayedPromise(40), delayedPromise(60));
        expect(result).toEqual([20, 40]);
    });

    test('handle higher waitFor then promises', async () => {
        const result = await races(2, delayedPromise(20));
        expect(result).toEqual([20]);
    });

});