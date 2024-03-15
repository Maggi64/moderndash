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

    // TODO: Switch to UInt64Array when safari support is better (https://caniuse.com/mdn-javascript_builtins_bigint64array)
    const randomBuffer = new Uint32Array(2);
    crypto.getRandomValues(randomBuffer);

    // keep all 32 bits of the the first, top 21 of the second for 53 random bits
    const randomBigInt = (BigInt(randomBuffer[0]) << 21n) | (BigInt(randomBuffer[1]) >> 11n);
    
    // fraction between 0 and 1 with full 53bit precision
    const fraction = Number(randomBigInt) / Number.MAX_SAFE_INTEGER; // (2 ** 53)
    return min + (fraction * (max - min));
}
