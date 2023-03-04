import { describe, test, expect } from 'vitest';

import { flatKeys } from '@object/flatKeys.js';


describe('flatKeys', () => {
    test('correct flattened keys', () => {
        const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
        expect(flatKeys(obj)).toEqual({ a: 1, 'b.c': 2, 'b.d.e': 3 });
    });

    test('correct flattened keys with arrays', () => {
        const obj = { a: 1, b: { c: 2, d: [{ e: 3 }, { e: 4, f: { g: 5 } }] } };
        expect(flatKeys(obj)).toEqual({ a: 1, 'b.c': 2, 'b.d[0].e': 3, 'b.d[1].e': 4, 'b.d[1].f.g': 5 });
    });

    test('nested arrays', () => {
        const obj = { a: [[1, 2], [3, 4]] };
        expect(flatKeys(obj)).toEqual({ 'a[0][0]': 1, 'a[0][1]': 2, 'a[1][0]': 3, 'a[1][1]': 4 });
    });

    test('simple array', () => {
        const obj = { a: [1, 2, 3, 4] };
        expect(flatKeys(obj)).toEqual({ 'a[0]': 1, 'a[1]': 2, 'a[2]': 3, 'a[3]': 4 });
    });
});
