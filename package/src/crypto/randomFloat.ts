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

    const randomBuffer = new BigUint64Array(1);
    crypto.getRandomValues(randomBuffer);

    // keep 53 bits for maximum precision (64 - 53)
    const randomBigInt = BigInt(randomBuffer[0]) >> 11n;
    
    // fraction between 0 and 1 with full 53bit precision
    const fraction = Number(randomBigInt) / Number.MAX_SAFE_INTEGER; // (2 ** 53)
    return min + (fraction * (max - min));
}
