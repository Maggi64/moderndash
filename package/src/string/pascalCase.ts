import { splitWords } from "@string/splitWords";

import { capitalize } from "./capitalize.js";
import { deburr } from "./deburr.js";


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
 * 
 * @param str The string to convert.
 * @returns Returns the pascal cased string.
 */

export function pascalCase(str: string): string {
    if (str === "") return "";
    
    str = deburr(str);
    const words = splitWords(str);
    let pascalCase = "";
    for (const word of words) {
        pascalCase += capitalize(word);
    }
    return pascalCase;
}
