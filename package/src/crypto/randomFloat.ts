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
    if (min > max)
        throw new Error('min must be less than or equal to max');
    const range = max - min;
    const randomBuffer = new Uint32Array(1);
    crypto.getRandomValues(randomBuffer);
    const random = randomBuffer[0] / 0xFFFFFFFF;
    return min + (random * range);
}