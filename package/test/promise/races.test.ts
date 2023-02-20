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

    test('rejected promise', async () => {
        const rejectedPromise = new Promise((resolve, reject) => {
            setTimeout(() => reject('rejected'), 20); 
        });
        const result = races(2, delayedPromise(20), rejectedPromise, delayedPromise(60));
        void expect(result).rejects.toBe(  'rejected');
    });
        
});