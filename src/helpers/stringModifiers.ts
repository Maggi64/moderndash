import { deburr } from '@string/deburr';

export function splitWords(str: string): string[] {
    str = deburr(str);

    // Replace non-alphanumeric characters with spaces
    str = str.replace(/[^\dA-Za-z]/g, ' ');

    // Split camelCase words
    // TODO: implement this version: https://stackoverflow.com/a/54112355
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    return str.trim().split(' ');
}
