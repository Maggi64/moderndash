/**
 * Trim the string from the left and right by the given characters
 * 
 * *Use the native [trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) method if you want to trim whitespace.*
 * @example
 * ```ts
 * trim('$$abc$', '$') // => 'abc'
 * trim('!!abc_!', '_!') // => 'abc'
 * ```
 * @param str The string to trim
 * @param chars The characters to trim
 * @returns The trimmed string
 */

export function trim(str: string, chars: string): string {
    let startIndex = 0;
    while (startIndex < str.length && chars.includes(str[startIndex])) {
        startIndex++;
    }
  
    let endIndex = str.length - 1;
    while (endIndex >= startIndex && chars.includes(str[endIndex])) {
        endIndex--;
    }
  
    return str.slice(startIndex, endIndex + 1);
}