import { deburr as lodashVersion } from 'lodash-es';
import { deburr, randomString } from 'moderndash';
import { bench, describe } from 'vitest';

const getDeburrableString = () => randomString(10, 'avdasfaáäæÅèÊ');

describe('deburr', () => {
    bench('moderndash', () => {
    
        deburr(getDeburrableString());
    });

    bench('lodash', () => {
        lodashVersion(getDeburrableString());
    });
});