export function deburr(str: string): string {
    // eslint-disable-next-line no-control-regex
    return str.replace(/[^\u0000-\u007E]/g, (chr: string) =>
        chr.normalize('NFD').replace(/[\u0300-\u036F]/g, ''));
}
