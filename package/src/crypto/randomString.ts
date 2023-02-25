
const DEFAULT_CHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

/**
 * Generates a random string of the specified length.
 * The default charset is alphanumeric characters.
 * 
 * It uses `crypto.getRandomValues` to generate the random string.
 * 
 * @example
 * randomString(8);
 * // => "JWw1p6rD"
 *
 * randomString(16, 'abc');
 * // => "cbaacbabcabccabc"
 * @param length The length of the string to generate.
 * @param charSet The set of characters to use when generating the string. Defaults to alphanumeric characters.
 * @returns A random string of the specified length.
 */

export function randomString(length: number, charSet = DEFAULT_CHARSET): string {
    if (charSet.length <= 0) return '';

    const randomValues = new Uint32Array(length);
    crypto.getRandomValues(randomValues);

    let result = '';
    const charSetLength = charSet.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = randomValues[i] % charSetLength;
        result += charSet[randomIndex];
    }

    return result;
}