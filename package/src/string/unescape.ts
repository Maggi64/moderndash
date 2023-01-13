export function unescapeHTML(html: string): string {
    const entityMap: Record<string, string> = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': '\''
    };
    return html.replace(/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g, (entity: string) => entityMap[entity] || entity);
}
