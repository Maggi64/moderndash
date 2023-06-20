/* eslint-disable no-bitwise */

/**
 * Generates a random float between two given numbers, including those numbers.
 * 
 * It uses `crypto.getRandomValues` to generate the random number.
 * @example
 * randomFloat(1, 10) 
 * // => 1.123456789
 * 
 * @param min The smallest float that can be generated.
 * @param max The largest float that can be generated.
 * 
 * @returns A random float between `min` and `max`, including `min` and `max`.
 */
export function randomFloat(min: number, max: number): number {
    if (min >= max) 
        throw new Error("max must be greater than min");

    const randomBuffer = new Uint32Array(2);
    crypto.getRandomValues(randomBuffer);

    // merge to a 52bit integer
    const randomBigInt = (BigInt(randomBuffer[0]) << 20n) | (BigInt(randomBuffer[1]) >> 12n);

    // fraction between 0 and 1 with full 52 precision
    const maxNumber = (2 ** 52) - 1;
    const fraction = Number(randomBigInt) / maxNumber;

    return min + (fraction * (max - min));
}
