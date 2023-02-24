import { describe, expect, test } from 'vitest';

import { tryCatch } from '@promise/tryCatch';

describe('tryCatch', () => {
    test('resolve to an array with the result and null error if the promise resolves', async () => {
        const result = 'Hello, world!';
        const promise = Promise.resolve(result);
  
        const [data, error] = await tryCatch(promise);
  
        expect(data).toEqual(result);
        expect(error).toBeUndefined();
    });
  
    test('resolve to an array with undefined result and an error object if the promise rejects', async () => {
        const error = new Error('Oops!');
        const promise = Promise.reject(error);
  
        const [data, actualError] = await tryCatch(promise);
  
        expect(data).toBeUndefined();
        expect(actualError).toBeInstanceOf(Error);
        expect(actualError?.message).toEqual(error.message);
    });
  
    test('re-throw non-Error exceptions', async () => {
        const promise = Promise.reject(123);
  
        await expect(tryCatch(promise)).rejects.toBe(123);
    });
});