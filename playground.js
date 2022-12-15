import { differenceWith } from './build/array/differenceWith.js';


differenceWith([{ x: 1 }], [{ x: 2 }, { x: 1 }], (a, b) => {
    console.log(a, b, a.x === b.x);
    return a.x === b.x;
});
