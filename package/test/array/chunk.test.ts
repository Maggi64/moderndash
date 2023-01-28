import { describe, expect, it } from 'vitest';

import { chunk } from '@array/chunk';

describe('Chunk', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    it('should chunk an array', () => {
        expect(chunk(array, 2)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
    });

    it('should return the last chunk as remaining elements', () => {
        expect(chunk(array, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
    });

    it('should coerce `size` to an integer', () => {
        expect(chunk(array, array.length / 4)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
    });
});
