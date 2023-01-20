import { splitWords } from '@helpers/stringModifiers';


/**
 * Converts a string to PascalCase.
 *
 * @example
 * kebabCase('Foo Bar')
 * // => 'FooBar'
 * kebabCase('fooBar')
 * // => 'FooBar'
 * kebabCase('__FOO_BAR__')
 * // => 'FooBar'
 * @category String
 * @param str - The string to convert.
 * @returns Returns the pascal cased string.
 */

export function pascalCase(str: string): string {
    const words = splitWords(str);
    let pascalCase = '';
    for (const word of words) {
        pascalCase += word.charAt(0).toUpperCase() + word.slice(1);
    }
    return pascalCase;
}
