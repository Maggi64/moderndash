import { splitWords } from '@helpers/stringModifiers';

export function startCase(str: string): string {
    const words = splitWords(str);
    let startCase = '';
    for (const word of words) {
        startCase += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + ' ';
    }
    return startCase.trimEnd();
}
