import { randomFloat } from "@crypto/randomFloat.js";

import { cryptoMockHighestValue, cryptoMockLowestValue } from "./cryptoMock.js";

beforeEach(() => {
    vi.unstubAllGlobals();
});

test("throw an error if min is greater than max", () => {
    expect(() => randomFloat(10, 1)).toThrowError();
});

test("return a number between min and max, including min and max", () => {
    const min = 1;
    const max = 10;

    for (let i = 0; i < 10; i++) {
        const result = randomFloat(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    } 
});

test("return a float", () => {
    const min = 1.1;
    const max = 10.1;

    for (let i = 0; i < 10; i++) {
        const result = randomFloat(min, max);

        expect(Number.isInteger(result)).toBeFalsy();  // not be an integer 
        expect((result % 1) !== 0).toBeTruthy();  // have decimal places 
    } 
});

test("can return the upper bound", () => {
    vi.stubGlobal("crypto", cryptoMockHighestValue);

    expect(randomFloat(0, 1024)).toBe(1024);
});


test("can return the lower bound", () => {
    vi.stubGlobal("crypto", cryptoMockLowestValue);

    expect(randomFloat(0, 1)).toBe(0);
});

test("average of 200000 random numbers should be close to the middle", () => {
    const min = 0;
    const max = 1;
    const iterations = 200000;
    let sum = 0;

    for (let i = 0; i < iterations; i++) {
        sum += randomFloat(min, max);
    }

    const average = sum / iterations;

    expect(average).toBeGreaterThanOrEqual(0.499);
    expect(average).toBeLessThanOrEqual(0.501);
}, { retry: 3 });