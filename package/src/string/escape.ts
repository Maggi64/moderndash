export function escape(str: string): string {
    const escapeChars: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\'': '&#39;',
        '"': '&quot;'
    };
    return str.replace(/["&'<>]/g, char => escapeChars[char] || char);
}
