import type { PageServerLoad } from "./$types";

import { markdownParser } from "$utils/markdown.js";

import readme from "../../../README.md?raw";


// remove first markdown image from readme
const trimmedReadme = readme.replace(/!\[.*]\(.*\)/, "");
const parsedMarkdown = markdownParser(trimmedReadme);

export const load: PageServerLoad = (() => {
    return {
        parsedMarkdown
    };
});