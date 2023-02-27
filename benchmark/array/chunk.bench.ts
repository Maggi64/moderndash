import { chunk as chunkLodash } from 'lodash-es';
import { chunk, randomString } from 'moderndash';
import { cluster as chunkRadash } from 'radash';
import { chunk as chunkRemeda } from 'remeda';
import { bench, describe } from 'vitest';

const arraySize = 200;
const getStringArray = () => Array.from({ length: arraySize }, () => randomString(3));
const getNumberArray = () => Array.from({ length: arraySize }, () => Math.floor(Math.random() * 10) + 1);

describe('chunk', () => {

    bench('moderndash', () => {
        chunk(getStringArray(), 5);
        chunk(getNumberArray(), 5);
    });

    bench('lodash', () => {
        chunkLodash(getStringArray(), 5);
        chunkLodash(getNumberArray(), 5);
    });

    bench('radash', () => {
        chunkRadash(getStringArray(), 5);
        chunkRadash(getNumberArray(), 5);
    });

    bench('remeda', () => {
        chunkRemeda(getStringArray(), 5);
        chunkRemeda(getNumberArray(), 5);
    });

});