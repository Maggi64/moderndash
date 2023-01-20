import { describe, expect, test } from 'vitest';

import { isEqual } from '@lang/isEqual';
import { isEqualWith } from '@lang/isEqualWith';

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

    test('deepEquals with Error objects', () => {
        const error1 = new Error('test error');
        let error2 = new Error('test error');
        expect(error1).toEqual(error2);
        error2 = new Error('different error');
        expect(error1).not.toEqual(error2);
    });
});


describe('isEqualWith', () => {
    test('should return true if the customizer function returns equal values for both inputs', () => {
        expect(isEqualWith(1.3, 1.8, Math.floor)).toBe(true);
    });

    test('should return false if the customizer function returns different values for both inputs', () => {
        const customizer = (value: number) => value * 2;
        expect(isEqualWith(2, 5, customizer)).toBe(false);
    });

    test('should work with objects as input', () => {
        const customizer = (value: { a: number, b: number }) => value.a + value.b;
        expect(isEqualWith({ a: 2, b: 3 }, { a: 1, b: 4 }, customizer)).toBe(true);
    });
});
