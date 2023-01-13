import { describe, expect, test } from 'vitest';

import { kebabCase } from '@string/kebabCase';

describe('kebabCase', () => {
    test('converts a string to kebab case', () => {
        expect(kebabCase('helloWorld')).toBe('hello-world');
        expect(kebabCase('helloCRUELWorld')).toBe('hello-cruel-world');
    });

    test('returns an empty string for an empty input', () => {
        expect(kebabCase('')).toBe('');
    });

    test('returns the original string for a single-word string', () => {
        expect(kebabCase('hello')).toBe('hello');
    });
});
