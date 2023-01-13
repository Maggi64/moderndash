import { describe, test, expect } from 'vitest';

import { stripSpecialChars } from '@string/stripSpecialChars';

describe('stripSpecialChars', () => {
    test('removes special characters from a string', () => {
        expect(stripSpecialChars('Héllo, world!')).toEqual('Hello world');
        expect(stripSpecialChars('This string has #$%&*!')).toEqual('This string has ');
        expect(stripSpecialChars('Testing 123')).toEqual('Testing 123');
    });

    test('returns an empty string if given an empty string', () => {
        expect(stripSpecialChars('')).toEqual('');
    });
});
