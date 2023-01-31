import { deburr } from '@string/deburr';

/**
 * Removes all special characters from a string.
 *
 * @example
 * stripSpecial('Héllo! World #$%&*!')
 * // => 'Hello World'
 * @param str - The string to remove special characters from.
 * @returns Returns the string with special characters removed.
*/

export function stripSpecial(str: string): string {
    str = deburr(str);
    return str.replace(/[^\s\w]/gi, '');
}
