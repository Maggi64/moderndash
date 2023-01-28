import { splitWords } from '@helpers/stringModifiers.js';

/**
 * Converts a string to dash-case.
 *
 * @example
 * dashCase('Foo Bar')
 * // => 'foo-bar'
 * dashCase('fooBar')
 * // => 'foo-bar'
 * dashCase('__FOO_BAR__')
 * // => 'foo-bar'
 * @category String
 * @param str - The string to convert.
 * @returns Returns the dash cased string.
 */

export function dashCase(str: string): string {
    const words = splitWords(str);

    let dashCase = '';
    for (const word of words) {
        dashCase += word.toLowerCase() + '-';
    }
    return dashCase.slice(0, -1);
}