import { test, describe, expect } from 'vitest';

import { sample } from '@collection/sample';

describe('sample', () => {
    test('should return a random element from the array', () => {
        const colors = ['red', 'green', 'blue'];
        const randomColor = sample(colors);
        expect(colors).toContain(randomColor);
    });

    test('should return undefined if the array is empty', () => {
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        const result = sample([]);
        expect(result).toBeUndefined();
    });
});
