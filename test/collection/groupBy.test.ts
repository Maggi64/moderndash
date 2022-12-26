import { describe, test, expect } from 'vitest';

import { groupBy } from '@collection/groupBy';

describe('groupBy', () => {
    test('groups elements by evenness', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const even = (value: number) => (value % 2 === 0).toString();
        const result = groupBy(even, array);
        expect(result).toEqual({ 'true': [2, 4, 6, 8, 10], 'false': [1, 3, 5, 7, 9] });
    });
});
