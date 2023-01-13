import { describe, expect, it } from 'vitest';

import { chunk } from '@array/chunk';

describe('Chunk', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    it('should chunk an array', () => {
        expect(chunk(2, array)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
    });

    it('should return the last chunk as remaining elements', () => {
        expect(chunk(3, array)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
    });

    it('should coerce `size` to an integer', () => {
        expect(chunk(array.length / 4, array)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
    });
});
