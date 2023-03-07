
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
    // Taken from https://stackoverflow.com/a/41452318
    if (!Number.isInteger(min) || !Number.isInteger(max))
        throw new TypeError('min and max must be integers');

    if (min >= max) 
        throw new Error('max must be greater than min');

    const range = max - min + 1;
    const randomBytes = Math.ceil(Math.log2(range) / 8);
    const maxRandNumber = Math.pow(256, randomBytes);
    const randomBuffer = new Uint8Array(randomBytes);

    let randomValue: number;
    do {
        crypto.getRandomValues(randomBuffer);
        randomValue = 0;
        for (let index = 0; index < randomBytes; index++) {
            // eslint-disable-next-line no-bitwise
            randomValue = (randomValue << 8) + randomBuffer[index];
        }
        // rerun if randomValue is bigger than range
    } while (randomValue >= maxRandNumber - (maxRandNumber % range));

    return min + (randomValue % range);
}
