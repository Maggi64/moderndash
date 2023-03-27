import { trimStart as lodashVersion } from 'lodash-es';
import { trimStart } from 'moderndash';
import { bench, describe } from 'vitest';

import { randomStringArray } from '../testData.js';

describe('trimStart', () => {
    const stringArray = randomStringArray(500, 'abc');

    bench('moderndash', () => {
        for (const str of stringArray) {
            trimStart(str, 'ab');
        }
    });

    bench('lodash', () => {
        for (const str of stringArray) {
            lodashVersion(str, 'ab');
        }
    });
});