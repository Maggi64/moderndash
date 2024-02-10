/**
 * Truncates a string if it's longer than the given maximum length.
 * The last characters of the truncated string are replaced with the ellipsis
 * string which defaults to "...".
 *
 * @example
 * truncate("Hello, world!", { length: 5 })
 * // => "Hello..."
 * 
 * truncate("Hello, world!", { length: 5, ellipsis: " [...]" })
 * // => "Hello [...]"
 * 
 * truncate("Hello, world!", { length: 5, separator: " " })
 * // => "Hello, ..."
 * 
 * @param str The string to truncate
 * @param options The options object
 * @param options.length The maximum string length (default: 30)
 * @param options.ellipsis The string to indicate text is omitted (default: "...")
 * @param options.separator The separator pattern to truncate to (default: none)
 * @returns The truncated string
 */

export function truncate(str: string, options?: { length?: number; ellipsis?: string; separator?: string }): string {
    const { length = 30, ellipsis = "...", separator } = options ?? {};
    if (str.length <= length) return str;

    const end = length - ellipsis.length;

    if (end < 1) 
        return ellipsis;

    // Actually long enough to truncate the string
    let truncated = str.slice(0, end);

    if (separator) {
        const sepIndex = truncated.lastIndexOf(separator);
        if (sepIndex > -1) {
            truncated = truncated.slice(0, sepIndex);
        }
    }

    return truncated + ellipsis;
}
