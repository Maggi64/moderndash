import { describe, expect, test } from 'vitest';

import { isEqual } from '@lang/isEqual';

describe('isEqual', () => {
    test('numbers', () => {
        expect(isEqual(1, 1)).toBe(true);
        expect(isEqual(1, 2)).toBe(false);
    });

    test('strings', () => {
        expect(isEqual('a', 'a')).toBe(true);
        expect(isEqual('a', 'b')).toBe(false);
    });

    test('booleans', () => {
        expect(isEqual(true, true)).toBe(true);
        expect(isEqual(true, false)).toBe(false);
    });

    test('null', () => {
        expect(isEqual(null, null)).toBe(true);
        expect(isEqual(null, undefined)).toBe(false);
    });

    test('undefined', () => {
        expect(isEqual(undefined, undefined)).toBe(true);
        expect(isEqual(undefined, null)).toBe(false);
    });

    test('objects', () => {
        expect(isEqual({ a: 1 }, { a: 1 })).toBe(true);
        expect(isEqual({ a: 1 }, { a: 2 })).toBe(false);
    });

    test('arrays', () => {
        expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
        expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    });

    test('nested objects', () => {
        expect(isEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
        expect(isEqual({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false);
    });

    test('nested arrays', () => {
        expect(isEqual([[1], [2], [3]], [[1], [2], [3]])).toBe(true);
        expect(isEqual([[1], [2], [3]], [[1], [2], [4]])).toBe(false);
    });

    test('nested objects and arrays', () => {
        expect(isEqual({ a: { b: [1] } }, { a: { b: [1] } })).toBe(true);
        expect(isEqual({ a: { b: [1] } }, { a: { b: [2] } })).toBe(false);
    });

    test('objects with different keys', () => {
        expect(isEqual({ a: 1 }, { b: 1 })).toBe(false);
    });

    test('arrays with different lengths', () => {
        expect(isEqual([1, 2, 3], [1, 2])).toBe(false);
    });

    // eslint-disable-next-line unicorn/consistent-function-scoping
    const testFunction = () => { return 1 };
    test('functions', () => {
        expect(isEqual(() => { return 1 }, () => { return 2 })).toBe(false);
        expect(isEqual(testFunction, testFunction)).toBe(true);
    });

    test('objects with functions', () => {
        expect(isEqual({ a: () => { return 1 } }, { a: () => { return 1 } })).toBe(false);
        expect(isEqual({ a: testFunction }, { a: testFunction })).toBe(true);
    });

    test('regExp', () => {
        expect(isEqual(/a(.*)/, /a(.*)/)).toBe(true);
        expect(isEqual(/a/, /b.*/)).toBe(false);
    });
});
