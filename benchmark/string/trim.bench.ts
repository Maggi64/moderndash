import { trim as lodashVersion } from 'lodash-es';
import { trim } from 'moderndash';
import { trim as radashVersion } from 'radash';
import { bench, describe } from 'vitest';

import { randomStringArray } from '../testData.js';

describe('trim', () => {
    const stringArray = randomStringArray(200, 'abc');

    bench('moderndash', () => {
        for (const str of stringArray) {
            trim(str, 'a');
        }
    });

    bench('lodash', () => {
        for (const str of stringArray) {
            lodashVersion(str, 'a');
        }
    });

    bench('radash', () => {
        for (const str of stringArray) {
            radashVersion(str, 'a');
        }
    });
});