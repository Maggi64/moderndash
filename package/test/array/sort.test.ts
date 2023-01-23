import { test, describe, expect } from 'vitest';

import { sort } from '@array/sort';

describe('sort', () => {
    test('should sort the array in ascending order based on the iteratee function', () => {
        const numbers = [3, 1, 2];
        const sortedNumbers = sort(numbers, 'asc');
        expect(sortedNumbers).toEqual([1, 2, 3]);
    });

    test('should return the original array if it is already sorted', () => {
        const numbers = [1, 2, 3];
        const sortedNumbers = sort(numbers, 'asc');
        expect(sortedNumbers).toEqual(numbers);
    });

    test('should work with arrays of objects', () => {
        const users = [
            { name: 'Alice', age: 30 },
            { name: 'Bob', age: 25 },
            { name: 'Eve', age: 35 }
        ];
        const sortedUsers = sort(users, 'asc', user => user.age);
        expect(sortedUsers).toEqual([
            { name: 'Bob', age: 25 },
            { name: 'Alice', age: 30 },
            { name: 'Eve', age: 35 }
        ]);
    });

    test('should sort the array in descending order', () => {
        const result = sort([1, 1, 1, 2, 3], 'desc');
        expect(result).toEqual([3, 2, 1, 1, 1]);
    });
});
