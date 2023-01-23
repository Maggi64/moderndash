import { describe, test, expect } from 'vitest';

import { count } from '@array/count';

describe('countBy function', () => {
    test('countBy', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const even = (value: number) => (value % 2 === 0).toString();
        const result = count(array, even);
        expect(result).toEqual({ 'true': 5, 'false': 5 });
    });
});
