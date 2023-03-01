import { camelCase as lodashVersion } from 'lodash-es';
import { camelCase } from 'moderndash';
import { camel as radashVersion } from 'radash';
import { bench, describe } from 'vitest';

import { randomStringArray } from '../testData.js';

describe('camelCase', () => {
    const stringArray = randomStringArray(200);

    bench('moderndash', () => {
        for (const str of stringArray) {
            camelCase(str);
        }
    });

    bench('lodash', () => {
        for (const str of stringArray) {
            lodashVersion(str);
        }
    });

    bench('radash', () => {
        for (const str of stringArray) {
            radashVersion(str);
        }
    });
});