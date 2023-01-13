import { describe, test, expect } from 'vitest';

import { groupBy } from '@collection/groupBy';

describe('groupBy', () => {
    test('groups elements by evenness', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const even = (value: number) => (value % 2 === 0).toString();
        const result = groupBy(even, array);
        expect(result).toEqual({ 'true': [2, 4, 6, 8, 10], 'false': [1, 3, 5, 7, 9] });
    });

    test('should group an array by a property', () => {
        const array = [
            { name: 'Alice', age: 30 },
            { name: 'Bob', age: 35 },
            { name: 'Charlie', age: 30 },
            { name: 'Dave', age: 40 },
            { name: 'Eve', age: 35 }
        ];

        const result = groupBy(element => element.age, array);

        expect(result).toEqual({
            30: [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }],
            35: [{ name: 'Bob', age: 35 }, { name: 'Eve', age: 35 }],
            40: [{ name: 'Dave', age: 40 }]
        });
    });

    test('should work with an object for `collection`', function () {
        const actual = groupBy(Math.floor, { 'a': 6.1, 'b': 4.2, 'c': 6.3 } );
        expect(actual).toEqual({ '4': [4.2], '6': [6.1, 6.3] });
    });
});
