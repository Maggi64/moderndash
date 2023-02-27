import { camelCase as lodashVersion } from 'lodash-es';
import { camelCase } from 'moderndash';
import { camel as radashVersion } from 'radash';
import { bench, describe } from 'vitest';

import { randomStringArray } from '../testData.js';

describe('camelCase', () => {
    const stringArray = randomStringArray(200);

    bench('moderndash', () => {
        stringArray.forEach((str) => {
            camelCase(str);
        });
    });

    bench('lodash', () => {
        stringArray.forEach((str) => {
            lodashVersion(str);
        });
    });

    bench('radash', () => {
        stringArray.forEach((str) => {
            radashVersion(str);
        });
    });
});