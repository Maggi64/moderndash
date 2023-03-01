

import { countBy as lodashVersion } from 'lodash-es';
import { count, randomInt, randomString } from 'moderndash';
import { counting as radashVersion } from 'radash';
import { bench, describe } from 'vitest';

const arraySize = 500;
const getRandomArray = () => Array.from({ length: arraySize }, () => ({ a: randomString(3), b: randomInt(1, 3) }));

describe('count', () => {
    const arr = getRandomArray();

    bench('moderndash', () => {
        count(arr, elem => elem.b);
        count(arr, elem => elem.a + elem.b.toString());
    });

    bench('lodash', () => {
        lodashVersion(arr, elem => elem.b);
        lodashVersion(arr, elem => elem.a + elem.b.toString());
    });

    bench('radash', () => {
        radashVersion(arr, elem => elem.b);
        radashVersion(arr, elem => elem.a + elem.b.toString());
    });
});