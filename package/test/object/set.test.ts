import { describe, test, expect } from 'vitest';

import { set } from '@object/set.js';

describe('set', () => {
    test('should set a value', () => {
        const obj = { a: { b: 2 } };
        set(obj, 'a.c', 1);
        expect(obj).toEqual({ a: { b: 2, c: 1 } });
    });

    test('should set a value with array path', () => {
        const obj = { a: { b: 2, c: [1, 2] } };
        set(obj, 'a.c[2]', 1);
        expect(obj).toEqual({ a: { b: 2, c: [1, 2, 1] } });

        set(obj, 'a.d[0].c', 3);
        expect(obj).toEqual({ a: { b: 2, c: [1, 2, 1], d: [{ c: 3 }] } });
    });
});