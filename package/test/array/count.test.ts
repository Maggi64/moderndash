import { count } from "@array/count";

test("countBy", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const even = (value: number) => (value % 2 === 0).toString();
    const result = count(array, even);
    expect(result).toEqual({ "true": 5, "false": 5 });
});

test("countBy with object", () => {
    const array = [
        { "user": "barney", "category": 1 },
        { "user": "thilo", "category": 2 },
        { "user": "max", "category": 2 },
        { "user": "lena", "category": 3 }
    ];
    const result = count(array, (value) => value.category);
    expect(result).toEqual({ "1": 1, "2": 2, "3": 1 });
});
