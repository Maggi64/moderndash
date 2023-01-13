import { describe, expect, test } from 'vitest';

import { pascalCase } from '@string/pascalCase';

describe('toPascalCase', () => {
    test('converts a string to PascalCase', () => {
        expect(pascalCase('hello world')).toEqual('HelloWorld');
        expect(pascalCase('this is a.test')).toEqual('ThisIsATest');
        expect(pascalCase('CamelCase')).toEqual('CamelCase');
    });

    test('handles empty strings and single words correctly', () => {
        expect(pascalCase('')).toEqual('');
        expect(pascalCase('hello')).toEqual('Hello');
    });
});
