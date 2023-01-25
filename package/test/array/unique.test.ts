import { test, expect, describe } from 'vitest';

import { unique } from '@array/unique';

describe('uniq', () => {
    test('should return an array with only unique values', () => {
        const input = [1, 2, 3, 3, 4, 5, 5, 6];
        const expectedOutput = [1, 2, 3, 4, 5, 6];
        expect(unique(input)).toEqual(expectedOutput);
    });

    test('should handle objects and arrays correctly', () => {
        const input = [{ a: 1 }, { a: 2 }, { a: 1 }, [1, 2], [1, 2], [1, 2, 3]
        ];
        const expectedOutput = [{ a: 1 }, { a: 2 }, [1, 2], [1, 2, 3]];
        expect(unique(input)).toEqual(expectedOutput);
    });
});
