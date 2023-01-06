import { deburr } from '@string/deburr';

export function prepareCaseConversion(str: string): string {
    str = deburr(str);
    // Replace non-alphanumeric characters with spaces
    str = str.replace(/[^\dA-Za-z]/g, ' ');
    return str;
}
