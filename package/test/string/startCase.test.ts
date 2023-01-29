import { expect, test, describe } from 'vitest';

import { startCase } from '@string/startCase';

describe('startCase', () => {
    test('convert a string to start case', () => {
        expect(startCase('hello world')).toBe('Hello World');
        expect(startCase('HELLO WORLD')).toBe('Hello World');
        expect(startCase('Hello World')).toBe('Hello World');
        expect(startCase('hello-world')).toBe('Hello World');
        expect(startCase('hello_world')).toBe('Hello World');
        expect(startCase('hello  world')).toBe('Hello World');
    });
});
