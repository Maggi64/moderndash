import { describe, test, expect } from 'vitest';

import { stripSpecial } from '@string/stripSpecial';

describe('stripSpecialChars', () => {
    test('removes special characters from a string', () => {
        expect(stripSpecial('Héllo, world!')).toEqual('Hello world');
        expect(stripSpecial('This string has #$%&*!')).toEqual('This string has ');
        expect(stripSpecial('Testing 123')).toEqual('Testing 123');
    });

    test('returns an empty string if given an empty string', () => {
        expect(stripSpecial('')).toEqual('');
    });
});
