import { deburr } from '@string/deburr';

export function splitWords(str: string): string[] {
    str = deburr(str);

    // Split non-alphanumeric characters with spaces and deal with camel/PascalCase
    const regex = new RegExp(
        '[^\\dA-Za-z]' +  // match any character that is not a letter or a digit
        '|' +                    // or
        '(?<=[a-z])' +           // lookbehind for a lowercase letter
        '(?=[A-Z])' +            // lookahead for an uppercase letter
        '|' +                    // or
        '(?<=[A-Z])' +           // lookbehind for an uppercase letter
        '(?=[A-Z][a-z])'         // lookahead for an uppercase letter followed by a lowercase letter
    );

    return str.split(regex).filter(Boolean);
}
