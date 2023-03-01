import { describe, test, expect } from 'vitest';

import { pick } from '@object/pick.js';


describe('pick', () => {
    test('pick the specified keys from an object', () => {
        const object = { a: 1, b: 2, c: 3 };

        expect(pick(object, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    test('return an empty object when no keys are specified', () => {
        const object = { a: 1, b: 2, c: 3 };

        expect(pick(object, [])).toEqual({});
    });

    test('ignores non-existent keys', () => {
        const object = { a: 1, b: 2, c: 3 };

        // @ts-expect-error - d does not exist on object
        expect(pick(object, ['a', 'd'])).toEqual({ a: 1 });
    });
});