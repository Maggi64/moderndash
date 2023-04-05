import { splitWords } from "@string/splitWords";

import { deburr } from "./deburr.js";

/**
 * Converts a string to Title Case.
 *
 * @example
 * titleCase('--foo-bar--')
 * // => 'Foo Bar'
 * titleCase('fooBar')
 * // => 'Foo Bar'
 * titleCase('__FOO_BAR__')
 * // => 'Foo Bar'
 * titleCase('HélloWorld')
 * // => 'Hello World'
 * @param str The string to convert.
 * @returns Returns the title cased string.
 */

export function titleCase(str: string): string {
    str = deburr(str);
    const words = splitWords(str);
    let titleCase = "";
    for (const word of words) {
        titleCase += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
    }
    return titleCase.trimEnd();
}
