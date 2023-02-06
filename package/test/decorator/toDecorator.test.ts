import { describe, expect, test } from 'vitest';

import { toDecorator } from '@decorator/toDecorator.js';

describe('toDecorator', () => {
    test('decorator', () => {
        function addToReturn(func: (...args: unknown[]) => number, number: number) {
            return function (this: unknown) {
                const orginalReturn = func.apply(this);
                return orginalReturn + number;
            };
        }

        const adder = toDecorator(addToReturn);

        class TestClass {
            private count = '5';

            @adder(6)
            testMethod() {
                return parseInt(this.count);
            }
        }

        const instance = new TestClass();
        const result = instance.testMethod();
        expect(result).toBe(11);
    });
});