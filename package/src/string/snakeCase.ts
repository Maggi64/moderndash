import { splitWords } from '@string/splitWords';

import { deburr } from './deburr.js';

/**
 * Converts a string to snake_case.
 *
 * @example
 * snakeCase('Foo Bar')
 * // => 'foo_bar'
 * snakeCase('fooBar')
 * // => 'foo_bar'
 * snakeCase('--FOO-BAR--')
 * // => 'foo_bar'
 * snakeCase('foo2bar')
 * // => 'foo_2_bar'
 * 
 * @param str - The string to convert.
 * @returns Returns the snake cased string.
 */

export function snakeCase(str: string): string {
    str = deburr(str);
    const words = splitWords(str);
    let snakeCase = '';
    for (const word of words) {
        if (snakeCase.length > 0) {
            snakeCase += '_';
        }
        snakeCase += word.toLowerCase();
    }
    return snakeCase;
}
