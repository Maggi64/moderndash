import { Converter } from 'showdown';

const converter = new Converter();
export const markdownParser = (text: string) => converter.makeHtml(text);