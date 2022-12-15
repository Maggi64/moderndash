import { test, it, expect } from 'vitest';

import { takeRightWhile } from '@array/takeRightWhile';
import { takeWhile } from '@array/takeWhile';

test('takeWhile', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    it('should return the elements from the input array until the predicate returns false', () => {
        const evenNumbers = takeWhile(numbers, (n) => n % 2 === 0);
        expect(evenNumbers).toEqual([2, 4, 6, 8, 10]);
    });

    it('should return an empty array if the predicate always returns false', () => {
        const evenNumbers = takeWhile(numbers, (n) => n > 10);
        expect(evenNumbers).toEqual([]);
    });

    it('should deal with different types', () => {
        const mixed = [1, '2', 3, '4', 5, '6', 7, '8', 9, '10', [], {}, undefined];
        const evenNumbers = takeWhile(mixed, (n) => typeof n === 'number');
        expect(evenNumbers).toEqual([1, 3, 5, 7, 9]);
    });
});

test('takeRightWhile', () => {
    const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    it('should return a new array with the last elements that satisfy the condition specified by the predicate function', () => {
        const result = takeRightWhile(numbers, n => n % 2 === 1);
        expect(result).toEqual([19, 23, 29]);
    });

    it('should return an empty array if no elements satisfy the condition', () => {
        const result = takeRightWhile(numbers, (n: number) => n % 100 === 1);
        expect(result).toEqual([]);
    });

    it('should return the original array if all elements satisfy the condition', () => {
        const result = takeRightWhile(numbers,  () => true);
        expect(result).toEqual(numbers);
    });
});