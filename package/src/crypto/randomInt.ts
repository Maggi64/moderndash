
/**
 * Generates a random integer between two given numbers, including those numbers.
 * 
 * It uses `crypto.getRandomValues` to generate the random number.
 * @example
 * randomInt(1, 10) 
 * // => 5
 * 
 * @param min The smallest integer that can be generated.
 * @param max The largest integer that can be generated.
 * 
 * @returns A random integer between `min` and `max`, including `min` and `max`.
 */

export function randomInt(min: number, max: number): number {
    if (min > max)
        throw new Error('min must be less than or equal to max');
    const range = max - min + 1;
    const randomBuffer = new Uint32Array(1);
    crypto.getRandomValues(randomBuffer);
    return min + (randomBuffer[0] % range);
}
  
