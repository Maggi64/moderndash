import { test, describe, expect } from 'vitest';

import { sortBy } from '@collection/sortBy';

describe('sortBy', () => {
    test('should sort the array in ascending order based on the iteratee function', () => {
        const numbers = [3, 1, 2];
        const sortedNumbers = sortBy(number => number, numbers);
        expect(sortedNumbers).toEqual([1, 2, 3]);
    });

    test('should return the original array if it is already sorted', () => {
        const numbers = [1, 2, 3];
        const sortedNumbers = sortBy(number => number, numbers);
        expect(sortedNumbers).toEqual(numbers);
    });

    test('should work with arrays of objects', () => {
        const users = [
            { name: 'Alice', age: 30 },
            { name: 'Bob', age: 25 },
            { name: 'Eve', age: 35 }
        ];
        const sortedUsers = sortBy(user => user.age, users);
        expect(sortedUsers).toEqual([
            { name: 'Bob', age: 25 },
            { name: 'Alice', age: 30 },
            { name: 'Eve', age: 35 }
        ]);
    });
});
