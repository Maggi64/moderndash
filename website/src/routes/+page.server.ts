import type { PageServerLoad } from './$types';

import readme from '../../../README.md?raw';

import { markdownParser } from '$utils/markdown.js';

// remove first markdown image from readme
const trimmedReadme = readme.replace(/!\[.*]\(.*\)/, '');
const parsedMarkdown = markdownParser(trimmedReadme);

export const load: PageServerLoad = (() => {
    return {
        parsedMarkdown
    };
});