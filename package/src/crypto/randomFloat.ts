/* eslint-disable no-bitwise */
const shiftLeft20Bits = 2 ** 20;
const shiftRight52Bits = 2 ** -52;

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
    if (min >= max) {
        throw new Error('max must be greater than min');
    }
    const range = max - min;
    const randomBuffer = new Uint32Array(2);
    crypto.getRandomValues(randomBuffer);

    // keep all 32 bits of the the first, top 20 of the second for 52 random bits
    const mantissa = (randomBuffer[0] * shiftLeft20Bits) + (randomBuffer[1] >>> 12);

    // shift all 52 bits to the right of the decimal point
    const randomFloat = mantissa * shiftRight52Bits;
    return min + (randomFloat * range);
}