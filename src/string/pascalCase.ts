import { splitWords } from '@helpers/stringModifiers';

export function pascalCase(str: string): string {
    const words = splitWords(str);
    let pascalCase = '';
    for (const word of words) {
        pascalCase += word.charAt(0).toUpperCase() + word.slice(1);
    }
    return pascalCase;
}
