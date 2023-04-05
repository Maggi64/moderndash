// Split non-alphanumeric characters with spaces and deal with camel/PascalCase
const splitWordsRegex = new RegExp(
    "[^\\dA-Za-z]" +  // match any character that is not a letter or a digit
    "|" +                    // or
    "(?<=[a-z])" +           // lookbehind for a lowercase letter
    "(?=[A-Z])" +            // lookahead for an uppercase letter
    "|" +                    // or
    "(?<=[A-Z])" +           // lookbehind for an uppercase letter
    "(?=[A-Z][a-z])"         // lookahead for an uppercase letter followed by a lowercase letter
);

/**
 * Split a string into words. Can deal with camelCase, PascalCase & snake_case.
 * 
 * @example
 * splitWords('camelCase')
 * // => ['camel', 'Case']
 * 
 * splitWords('PascalCase')
 * // => ['Pascal', 'Case']
 * 
 * splitWords('hello_world-123')
 * // => ['hello', 'world', '123']
 * 
 * @param str The string to split into words.
 * @returns An array of words.
 */

export function splitWords(str: string): string[] {
    return str.split(splitWordsRegex).filter(Boolean);
}