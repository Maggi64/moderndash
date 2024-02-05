import { splitWords } from "@string/splitWords";

import { capitalize } from "./capitalize.js";
import { deburr } from "./deburr.js";

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
 * @param str The string to convert.
 * @returns Returns the camel cased string.
 */

export function camelCase(str: string): string {
    if (str === "") return "";

    str = deburr(str);
    const words = splitWords(str);

    if (words.length === 0) return "";
    let camelCase = words[0].toLowerCase();

    // Start the loop from the second word
    for (let index = 1; index < words.length; index++) {
        const word = words[index];
        camelCase += capitalize(word);
    }

    return camelCase;
}