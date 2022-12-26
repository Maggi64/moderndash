import { test, describe, expect } from 'vitest';

import { once } from '@function/once';

describe('once', () => {
    test('only calls the function once', () => {
        let counter = 0;
        const fn = () => ++counter;
        const onceFn = once(fn);

        onceFn();
        expect(counter).toBe(1);
        onceFn();
        expect(counter).toBe(1);
        onceFn();
        expect(counter).toBe(1);
    });

    test('preserves the return value of the function', () => {
        const fn = (x: number) => x * 2;
        const onceFn = once(fn);

        expect(onceFn(2)).toBe(4);
        expect(onceFn(3)).toBe(4);
    });
});
