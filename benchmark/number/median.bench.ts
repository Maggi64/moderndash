import { median } from 'moderndash';
import { median as rambdaVersion } from 'rambda';
import { bench, describe } from 'vitest';

import { randomNumberArray } from '../testData.js';

describe('median', () => {
    const numbers1 = randomNumberArray(100);
    const numbers2 = randomNumberArray(80);
    const numbers3 = randomNumberArray(60);


    bench('moderndash', () => {
        median(numbers1);
        median(numbers2);
        median(numbers3);
    });

    bench('rambda', () => {
        rambdaVersion(numbers1);
        rambdaVersion(numbers2);
        rambdaVersion(numbers3);
    });
});