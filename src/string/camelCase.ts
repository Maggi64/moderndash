import { splitWords } from '@helpers/stringModifiers';

export function camelCase(str: string): string {
    const words = splitWords(str);

    // Capitalize the first letter of each word
    const camelCase = words.map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return camelCase.join('');
}
