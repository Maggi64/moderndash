import { describe, test, expect } from 'vitest';

import { dashCase } from '@string/dashCase';

describe('dashCase', () => {
    test('should convert a string to dash-case', () => {
        expect(dashCase('Foo Bar')).toBe('foo-bar');
        expect(dashCase('fooBar')).toBe('foo-bar');
        expect(dashCase('__FOO_BAR__')).toBe('foo-bar');
    });

    test('should return an empty string if empty string is passed', () => {
        expect(dashCase('')).toBe('');
    });
});