import { round } from "@number/round.js";

test("round a number to the given precision", () => {
    expect(round(1.23456, 2)).toBe(1.23);
    expect(round(1.235, 1)).toBe(1.2);
    expect(round(1234.56)).toBe(1234.56);
});