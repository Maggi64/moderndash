import { describe, test, expect } from 'vitest';

import { unzipWith } from '@array/unzipWith';

describe('unzipWith', () => {
    test('should unzip an arrays with a function', () => {
        const array: [number, string, boolean?][] = [[1, 'a', true], [2, 'b', false], [3, 'c']];
        const iteratee = (x: number, y: string, z?: boolean) => x.toString() + y + (z ? '!' : '');

        const result = unzipWith(iteratee, array);
        expect(result).toEqual(['1a!', '2b', '3c']);
    });
});
