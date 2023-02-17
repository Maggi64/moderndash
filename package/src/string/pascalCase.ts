import { splitWords } from '@string/splitWords';

import { deburr } from './deburr.js';


/**
 * Converts a string to PascalCase.
 *
 * @example
 * pascalCase('Foo Bar')
 * // => 'FooBar'
 * pascalCase('fooBar')
 * // => 'FooBar'
 * pascalCase('__FOO_BAR__')
 * // => 'FooBar'
 * pascalCase('Héllo World')
 * // => 'HelloWorld'
 * 
 * @param str - The string to convert.
 * @returns Returns the pascal cased string.
 */

export function pascalCase(str: string): string {
    str = deburr(str);
    const words = splitWords(str);
    let pascalCase = '';
    for (const word of words) {
        pascalCase += word.charAt(0).toUpperCase() + word.slice(1);
    }
    return pascalCase;
}
