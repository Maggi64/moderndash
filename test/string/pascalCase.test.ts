import { describe, expect, test } from 'vitest';

import { toPascalCase } from '@string/pascalCase';

describe('toPascalCase', () => {
    test('converts a string to PascalCase', () => {
        expect(toPascalCase('hello world')).toEqual('HelloWorld');
        expect(toPascalCase('this is a.test')).toEqual('ThisIsATest');
        expect(toPascalCase('CamelCase')).toEqual('CamelCase');
    });

    test('handles empty strings and single words correctly', () => {
        expect(toPascalCase('')).toEqual('');
        expect(toPascalCase('hello')).toEqual('Hello');
    });
});
