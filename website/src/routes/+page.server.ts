import type { PageServerLoad } from './$types';

import readme from '../../../README.md?raw';

import introSvg from '$assets/introCodeV6.svg';
import { markdownParser } from '$utils/markdown.js';

// remove first markdown image from readme
const trimmedReadme = readme.replace(/!\[.*]\(.*\)/, '');
const parsedMarkdown = markdownParser(trimmedReadme)
    .replace('https://raw.githubusercontent.com/Maggi64/moderndash/main/website/src/assets/introCodeV6.svg', introSvg);

export const load: PageServerLoad = (() => {
    return {
        parsedMarkdown
    };
});