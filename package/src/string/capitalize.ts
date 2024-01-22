/**
 * Converts the first character of a string to upper case and the remaining to lower case.
 *
 * @example
 * capitalize('FRED')
 * // => 'Fred'
 * @param str The string to capitalize.
 * @returns Returns the capitalized string.
 */

export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
