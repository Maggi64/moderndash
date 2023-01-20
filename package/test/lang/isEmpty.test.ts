import { describe, expect, test } from 'vitest';

import { isEmpty } from '@lang/isEmpty.js';


describe('isEmpty', () => {
    test('isEmpty with null and undefined', () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(undefined)).toBe(true);
    });

    test('isEmpty with string', () => {
        expect(isEmpty('')).toBe(true);
        expect(isEmpty('some string')).toBe(false);
    });

    test('isEmpty with array', () => {
        expect(isEmpty([])).toBe(true);
        expect(isEmpty([1, 2, 3])).toBe(false);
    });

    test('isEmpty with Set', () => {
        expect(isEmpty(new Set())).toBe(true);
        expect(isEmpty(new Set([1, 2, 3]))).toBe(false);
    });

    test('isEmpty with Map', () => {
        expect(isEmpty(new Map())).toBe(true);
        expect(isEmpty(new Map([['a', 1], ['b', 2]]))).toBe(false);
    });

    test('isEmpty with object', () => {
        expect(isEmpty({})).toBe(true);
        expect(isEmpty({ a: 1, b: 2 })).toBe(false);
    });

});