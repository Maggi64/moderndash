import { splitWords } from '@helpers/stringModifiers';

export function kebabCase(str: string): string {
    const words = splitWords(str);
    let kebabCase = '';
    for (const word of words) {
        kebabCase += word.toLowerCase() + '-';
    }
    return kebabCase.slice(0, -1);
}
