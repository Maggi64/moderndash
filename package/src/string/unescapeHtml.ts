/**
 * Converts the HTML entities `&amp;`, `&lt;`, `&gt;`, `&quot;` and `&#39;`
 * in a string to their corresponding characters.
 *
 * @example
 * unescapeHtml('fred, barney, &amp; pebbles')
 * // => 'fred, barney, & pebbles'
 * @param str - The string to unescape.
 * @returns Returns the unescaped string.
 */

export function unescapeHtml(str: string): string {
    const entityMap: Record<string, string> = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': '\''
    };
    return str.replace(/&(?:amp|lt|gt|quot|#(0+)?39);/g, (entity: string) => entityMap[entity] || entity);
}
