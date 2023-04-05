const htmlEntitiesRegex = /&(?:amp|lt|gt|quot|#39);/g;
const entityMap = new Map([
    ["&amp;", "&"],
    ["&lt;", "<"],
    ["&gt;", ">"],
    ["&quot;", '"'],
    ["&#39;", "'"]
]);

/**
 * Converts the HTML entities `&amp;`, `&lt;`, `&gt;`, `&quot;` and `&#39;`
 * in a string to their corresponding characters.
 *
 * @example
 * unescapeHtml('fred, barney, &amp; pebbles')
 * // => 'fred, barney, & pebbles'
 * @param str The string to unescape.
 * @returns Returns the unescaped string.
 */

export function unescapeHtml(str: string): string {
    return str.replace(htmlEntitiesRegex, (entity: string) => entityMap.get(entity)!);
}
