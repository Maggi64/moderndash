import { concat } from "@array/concat";

test("concat with array values", () => {
    const array = [1, 2];
    const result = concat(array, [3], [4], [[5]]);
    expect(result).toEqual([1, 2, 3, 4, [5]]);
});

test("concat with array string number", () => {
  const array = [1, 2];
  const result = concat(array, [4], [5], [6]);
  expect(result).toEqual([1, 2, 4, 5, 6]);
});
