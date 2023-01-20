/**
 * Escapes the `RegExp` special characters `^`, `$`, `\`, `.`, `*`, `+`,
 * `?`, `(`, `)`, `[`, `]`, `{`, `}`, and `|` in a string.
 *
 * @example
 * escapeRegExp('[moderndash](https://moderndash.io/)')
 * // => '\[moderndash\]\(https://moderndash\.io/\)'
 * @category String
 * @param str - The string to escape.
 * @returns Returns the escaped string.
 */

export function escapeRegExp(str: string): string {
    return str.replace(/[$()*+.?[\\\]^{|}]/g, '\\$&');
}
