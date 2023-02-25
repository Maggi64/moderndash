

import { countBy as lodashVersion } from 'lodash-es';
import { count, randomInt, randomString } from 'moderndash';
import { counting as radashVersion } from 'radash';
import { bench, describe } from 'vitest';

const arraySize = 500;
const getRandomArray = () => Array.from({ length: arraySize }, () => ({ a: randomString(3), b: randomInt(1, 3) }));

describe('count', () => {

    bench('moderndash', () => {
        count(getRandomArray(), elem => elem.b);
        count(getRandomArray(), elem => elem.a + elem.b.toString());
    });

    bench('lodash', () => {
        lodashVersion(getRandomArray(), elem => elem.b);
        lodashVersion(getRandomArray(), elem => elem.a + elem.b.toString());
    });

    bench('radash', () => {
        radashVersion(getRandomArray(), elem => elem.b);
        radashVersion(getRandomArray(), elem => elem.a + elem.b.toString());
    });
});