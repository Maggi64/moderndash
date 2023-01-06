import { deburr } from '@string/deburr';

export function stripSpecialChars(str: string): string {
    str = deburr(str);
    return str.replace(/[^\s\w]/gi, '');
}
