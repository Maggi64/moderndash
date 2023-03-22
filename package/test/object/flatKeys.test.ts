import type { PlainObject } from '@type/PlainObject.js';

import { describe, test, expect, expectTypeOf } from 'vitest';

import { flatKeys } from '@object/flatKeys.js';


describe('flatKeys', () => {
    test('correct flattened keys', () => {
        const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
        const flat = flatKeys(obj);
        const flatGeneric = flatKeys(obj as PlainObject);

        expectTypeOf(flat).toEqualTypeOf<Record<'a' | 'b' | 'b.c' | 'b.d' | 'b.d.e', unknown>>();
        expectTypeOf(flatGeneric).toEqualTypeOf<Record<string, unknown>>();

        expect(flatKeys(obj)).toEqual({ a: 1, 'b.c': 2, 'b.d.e': 3 });
    });

    test('correct flattened keys with arrays', () => {
        const obj = { a: 1, b: { c: 2, d: [{ e: 3 }, { e: 4, f: { g: 5 } }] } };
        const flat = flatKeys(obj);
        expectTypeOf(flat).toEqualTypeOf<Record<'a' | 'b' | 'b.c' | 'b.d' | `b.d[${number}]` | `b.d[${number}].e` | `b.d[${number}].f` | `b.d[${number}].f.g`, unknown>>();
        expect(flat).toEqual({ a: 1, 'b.c': 2, 'b.d[0].e': 3, 'b.d[1].e': 4, 'b.d[1].f.g': 5 });
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
