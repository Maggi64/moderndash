import { union } from '@array/union';

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
const array3 = [3, 4];

const result = union(array1, array2, array3);
console.log(result);
