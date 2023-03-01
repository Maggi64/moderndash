import { random } from 'lodash-es';
import { randomInt } from 'moderndash';
import { bench, describe } from 'vitest';

describe('randomInt', () => {
    bench('moderndash', () => {
        randomInt(1, 10);
    });

    // uses Math.random and is not cryptographically secure but is faster
    bench('lodash', () => {
        random(1, 10);
    });
});