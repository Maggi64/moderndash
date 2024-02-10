type Options = {
    /**
     * The maximum string length.
     *
     * Default: 30
     */
    length?: number;

    /**
     * The string to indicate text is omitted.
     *
     * Also named [ellipsis](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)
     *
     * Default: "...", you might want to use "…" (&hellip; U+02026) instead
     */
    omission?: string;

    /**
     * The separator pattern to truncate to.
     *
     * Default: none
     */
    separator?: string;
};

/**
 * Truncates a string if it's longer than the given maximum length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @param str The string to truncate
 * @param options The options object
 * @returns The truncated string
 */
export function truncate(str: string, options?: Options) {
    // https://stackoverflow.com/q/1199352
    // https://github.com/Maggi64/moderndash/issues/155
    // https://lodash.com/docs/4.17.15#truncate

    const { length = 30, omission = "...", separator } = options ?? {};

    if (str.length <= length) {
        return str;
    }

    let maxLength = length - omission.length;
    if (maxLength < 0) {
        maxLength = 0;
    }
    const subString = str.slice(
        0,
        // FYI .slice() is OK if maxLength > text.length
        maxLength
    );

    return (
        (separator
            ? subString.slice(0, subString.lastIndexOf(separator))
            : subString) + omission
    );
}
