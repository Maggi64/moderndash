import { uniq } from 'lodash-es';
import { unique } from 'moderndash';
import { unique as uniqueRadash } from 'radash';
import { randomString, uniq  as uniqRemeda } from 'remeda';
import { bench, describe } from 'vitest';

const arraySize = 1000;
const getStringArray = () => Array.from({ length: arraySize }, () => randomString(3));
const getNumberArray = () => Array.from({ length: arraySize }, () => Math.floor(Math.random() * 10) + 1);

describe('unique', () => {

    bench('moderndash', () => {
        unique(getStringArray());
        unique(getNumberArray());
    });

    bench('lodash', () => {
        uniq(getStringArray());
        uniq(getNumberArray());
    });

    bench('radash', () => {
        uniqueRadash(getStringArray());
        uniqueRadash(getNumberArray());
    });

    bench('remeda', () => {
        uniqRemeda(getStringArray());
        uniqRemeda(getNumberArray());
    });

    bench('native', () => {
        [...new Set(getStringArray())];
        [...new Set(getNumberArray())];
    });
});