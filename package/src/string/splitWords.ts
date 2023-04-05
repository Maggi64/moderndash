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
    return lookbehindWordBoundary 
        ? str.split(lookbehindWordBoundary).filter(Boolean) 
        : splitWordsFallback(str);
}

// Safari Fallback, can be removed when Safari supports lookbehind (https://caniuse.com/js-regexp-lookbehind)
// If positive lookbehind is not supported, use this fallback
const wordBoundaryFallback = /[^\dA-Za-z]|(?=[A-Z][a-z])/;
const lookbehindReplacement = /([a-z])([A-Z])/g;
const lookbehindWordBoundary = tryLookbehindRegex();

function tryLookbehindRegex() {
    try {
        // Split non-alphanumeric characters with spaces and deal with camel/PascalCase
        return new RegExp(
            "[^\\dA-Za-z]" +  // match any character that is not a letter or a digit
            "|" +                    // or
            "(?<=[a-z])" +           // lookbehind for a lowercase letter
            "(?=[A-Z])" +            // lookahead for an uppercase letter
            "|" +                    // or
            "(?<=[A-Z])" +           // lookbehind for an uppercase letter
            "(?=[A-Z][a-z])"         // lookahead for an uppercase letter followed by a lowercase letter
        );
    } catch {
        return undefined;
    }
}

function splitWordsFallback(str: string): string[] {
    const modifiedStr = str.replace(lookbehindReplacement, (match, p1: string, p2: string) => p1 + "\u0000" + p2);
  
    return modifiedStr
        .split(wordBoundaryFallback)
        .filter(Boolean)
        // eslint-disable-next-line no-control-regex
        .map(word => word.replace(/\u0000/g, ""));
}