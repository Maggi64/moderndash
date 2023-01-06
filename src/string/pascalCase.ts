import { prepareCaseConversion } from '@helpers/stringModifiers';

export function toPascalCase(str: string): string {
    str = prepareCaseConversion(str);

    const words = str.split(' ');
    let pascalCase = '';
    for (const word of words) {
        pascalCase += word.charAt(0).toUpperCase() + word.slice(1);
    }
    return pascalCase;
}
