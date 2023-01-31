import { splitWords } from '@helpers/stringModifiers';

/**
 * Converts a string to Start Case.
 *
 * @example
 * startCase('--foo-bar--')
 * // => 'Foo Bar'
 * startCase('fooBar')
 * // => 'Foo Bar'
 * startCase('__FOO_BAR__')
 * // => 'Foo Bar'
 * startCase('HélloWorld')
 * // => 'Hello World'
 * @param str - The string to convert.
 * @returns Returns the start cased string.
 */

export function startCase(str: string): string {
    const words = splitWords(str);
    let startCase = '';
    for (const word of words) {
        startCase += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + ' ';
    }
    return startCase.trimEnd();
}
