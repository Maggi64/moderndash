import { set as lodashVersion } from 'lodash-es';
import { set } from 'moderndash';
import { set as radashVersion } from 'radash';
import { bench, describe } from 'vitest';

describe('set', () => {
    bench('moderndash', () => {
        const obj = { a: { b: 2 } };
        set(obj, 'a.c[3].d', 'test');
    });

    bench('radash', () => {
        const obj = { a: { b: 2 } };
        radashVersion(obj, 'a.c[3].d', 'test');
    });

    bench('lodash', () => {
        const obj = { a: { b: 2 } };
        lodashVersion(obj, 'a.c[3].d', 'test');
    });
});
