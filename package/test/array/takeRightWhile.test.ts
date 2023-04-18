import { takeRightWhile } from "@array/takeRightWhile.js";

const numbers = [2, 3, 5, 7, 11, 14, 17, 19, 23, 29];
test("return a new array with the last elements that satisfy the condition specified by the predicate function", () => {
    const result = takeRightWhile(numbers, n => n % 2 === 1);
    expect(result).toEqual([17, 19, 23, 29]);
});

test("return an empty array if no elements satisfy the condition", () => {
    const result = takeRightWhile(numbers, (n: number) => n % 100 === 1);
    expect(result).toEqual([]);
});

test("return the original array if all elements satisfy the condition", () => {
    const result = takeRightWhile(numbers, () => true);
    expect(result).toEqual(numbers);
});