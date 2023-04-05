import { splitWords } from "@string/splitWords";

import { deburr } from "./deburr.js";

/**
 * Converts a string to kebab-case.
 *
 * @example
 * kebabCase('Foo Bar')
 * // => 'foo-bar'
 * kebabCase('fooBar')
 * // => 'foo-bar'
 * kebabCase('__FOO_BAR__')
 * // => 'foo-bar'
 * 
 * @param str The string to convert.
 * @returns Returns the kebab cased string.
 */

export function kebabCase(str: string): string {
    str = deburr(str);
    const words = splitWords(str);
    let kebabCase = "";
    for (const word of words) {
        kebabCase += word.toLowerCase() + "-";
    }
    return kebabCase.slice(0, -1);
}
