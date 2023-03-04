import { set as lodashVersion } from 'lodash-es';
import { set } from 'moderndash';
import { set as radashVersion } from 'radash';
import { bench, describe } from 'vitest';

describe('set', () => {
    bench('moderndash', () => {
        const obj = { a: { b: 2 } };
        set(obj, 'a.c[3].d', 'test');
        set(obj, 'a.c[3].f', 'test3');
        set(obj, 'a.c[3].f', 'test5');
        set(obj, 'a.c[3].g.a', 'test7');
    });

    bench('radash', () => {
        const obj = { a: { b: 2 } };
        radashVersion(obj, 'a.c[3].d', 'test');
        radashVersion(obj, 'a.c[3].f', 'test3');
        radashVersion(obj, 'a.c[3].f', 'test5');
        radashVersion(obj, 'a.c[3].g.a', 'test7');
    });

    bench('lodash', () => {
        const obj = { a: { b: 2 } };
        lodashVersion(obj, 'a.c[3].d', 'test');
        lodashVersion(obj, 'a.c[3].f', 'test3');
        lodashVersion(obj, 'a.c[3].f', 'test5');
        lodashVersion(obj, 'a.c[3].g.a', 'test7');
    });    
});
