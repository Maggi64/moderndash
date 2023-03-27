/**
 * Trims the specified characters from the end of the string.
 * 
 * *Use the native [trimEnd](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd) method if you want to trim whitespace.*
 * @example
 * ```ts
 * trimEnd('abc$$$', '$') // => 'abc'
 * trimEnd('abc_!!_', '_!') // => 'abc'
 * ```
 * @param str The string to trim
 * @param chars The characters to trim
 * @returns The trimmed string
 */

export function trimEnd(str: string, chars: string): string {
    let lastIndex = str.length - 1;
    while (lastIndex >= 0 && chars.includes(str[lastIndex])) {
        lastIndex--;
    }
    return str.slice(0, lastIndex + 1);

}