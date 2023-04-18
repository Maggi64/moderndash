import { toDecorator } from "@decorator/toDecorator.js";

test("decorator", () => {
    function addToReturn(func: (...args: unknown[]) => number, number: number) {
        return function (this: unknown) {
            const originalReturn = func.apply(this);
            return originalReturn + number;
        };
    }

    const adder = toDecorator(addToReturn);

    class TestClass {
        private count = "5";

        @adder(6)
        testMethod() {
            return parseInt(this.count);
        }
    }

    const instance = new TestClass();
    const result = instance.testMethod();
    expect(result).toBe(11);
});