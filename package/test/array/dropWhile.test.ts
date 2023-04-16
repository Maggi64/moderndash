import { dropWhile } from "@array/dropWhile";

const array = [2, 4, 5, 6];

test("removes elements from the start of the array until the predicate returns false", () => {
    expect(dropWhile(array, x => x % 2 === 0)).toEqual([5, 6]);
});

test("returns an empty array if the predicate always returns true", () => {
    expect(dropWhile(array, () => true)).toEqual([]);
});

test("returns the original array if the predicate always returns false", () => {
    expect(dropWhile(array, () => false)).toEqual(array);
});

test("returns an empty array if the input array is empty", () => {
    expect(dropWhile([], () => true)).toEqual([]);
});
