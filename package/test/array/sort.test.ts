import { sort } from "@array/sort";

test("sort the array in ascending order based on the iteratee function", () => {
    const numbers = [3, 1, 2];
    const sortedNumbers = sort(numbers, { order: "asc" });
    expect(sortedNumbers).toEqual([1, 2, 3]);
});

test("return the original array if it is already sorted", () => {
    const numbers = [1, 2, 3];
    const sortedNumbers = sort(numbers, { order: "asc" });
    expect(sortedNumbers).toEqual(numbers);
});

test("work with arrays of objects", () => {
    const users = [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 },
        { name: "Eve", age: 35 }
    ];
    const sortedUsers = sort(users, { order: "desc", by: user => user.age });
    expect(sortedUsers).toEqual([
        { name: "Eve", age: 35 },
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 }
    ]);
});

test("sort the array in descending order", () => {
    const result = sort([1, 1, 1, 2, 3], { order: "desc" });
    expect(result).toEqual([3, 2, 1, 1, 1]);
});

test("sort strings in ascending order", () => {
    const result = sort(["a", "c", "b"], { order: "asc" });
    expect(result).toEqual(["a", "b", "c"]);
});
