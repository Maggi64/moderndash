import { expect, test, describe } from 'vitest';

import { capitalize } from '@string/capitalize';

describe('capitalize', () => {
    test('capitalizes the first letter of a string', () => {
        expect(capitalize('hello world')).toBe('Hello world');
    });

    test('returns an empty string for an empty input', () => {
        expect(capitalize('')).toBe('');
    });

    test('returns the original string for a single-character string', () => {
        expect(capitalize('a')).toBe('A');
    });
});
