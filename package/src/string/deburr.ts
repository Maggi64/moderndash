/**
 * Deburrs a string by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @example
 * deburr('déjà vu')
 * // => 'deja vu'
 * @param str The string to deburr.
 * @returns Returns the deburred string.
 */

export function deburr(str: string): string {
    // eslint-disable-next-line no-control-regex
    return str.replace(/[^\u0000-\u007E]/g, (chr: string) =>
        chr.normalize('NFD').replace(/[\u0300-\u036F]/g, ''));
}
