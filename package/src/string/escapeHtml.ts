/**
 * Converts the characters `&`, `<`, `>`, `"` and `'` in a string to their corresponding HTML entities.
 *
 * @example
 * escape('fred, barney, & pebbles')
 * // => 'fred, barney, &amp; pebbles'
 * @category String
 * @param str - The string to escape.
 * @returns Returns the escaped string.
 */

export function escapeHtml(str: string): string {
    const escapeChars: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\'': '&#39;',
        '"': '&quot;'
    };
    return str.replace(/["&'<>]/g, char => escapeChars[char] || char);
}
