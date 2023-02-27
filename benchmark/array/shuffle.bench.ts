

import { shuffle as lodashVersion } from 'lodash-es';
import { shuffle, randomString } from 'moderndash';
import { shuffle as radashVersion } from 'radash';
// import {  as chunkRemeda } from 'remeda';
import { bench, describe } from 'vitest';

const arraySize = 200;
const getStringArray = () => Array.from({ length: arraySize }, () => randomString(3));
const getNumberArray = () => Array.from({ length: arraySize }, () => Math.floor(Math.random() * 10) + 1);

describe('shuffle', () => {
    bench('moderndash', () => {
        shuffle(getStringArray());
        shuffle(getNumberArray());
    });

    bench('lodash', () => {
        lodashVersion(getStringArray());
        lodashVersion(getNumberArray());
    });

    bench('radash', () => {
        radashVersion(getStringArray());
        radashVersion(getNumberArray());
    });
});