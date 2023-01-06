import { splitWords } from '@helpers/stringModifiers';

export function snakeCase(str: string): string {
    const words = splitWords(str);
    let snakeCase = '';
    for (const word of words) {
        if (snakeCase.length > 0) {
            snakeCase += '_';
        }
        snakeCase += word.toLowerCase();
    }
    return snakeCase;
}
