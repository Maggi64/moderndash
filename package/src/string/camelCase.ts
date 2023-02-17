import { splitWords } from '@string/splitWords';

import { deburr } from './deburr.js';

/**
 * Converts `string` to camelCase.
 *
 * @example
 * camelCase('Foo Bar')
 * // => 'fooBar'
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 * @param str - The string to convert.
 * @returns Returns the camel cased string.
 */

export function camelCase(str: string): string {
    str = deburr(str);
    const words = splitWords(str);

    // Capitalize the first letter of each word
    const camelCase = words.map((word: string, index: number) => {
        if (index === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return camelCase.join('');
}
