/**
 * Replaces the last occurrence of a string.
 * 
 * @example
 * ```typescript
 * replaceLast("Foo Bar Bar", "Bar", "Boo"); 
 * // => "Foo Bar Boo"
 * ```
 * 
 * @param str The string to replace in.
 * @param searchFor The string to search for.
 * @param replaceWith The string to replace with.
 * @returns The replaced string.
 */

export function replaceLast(str: string, searchFor: string, replaceWith: string): string {
    const index = str.lastIndexOf(searchFor);

    if (index === -1)
        return str;

    return str.slice(0, index) + replaceWith + str.slice(index + searchFor.length);
}