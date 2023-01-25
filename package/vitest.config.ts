/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)

import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';

const getPath = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
    test: {
        /* for example, use global to avoid globals imports (describe, test, expect): */
        // globals: true,
    },
    resolve: {
        alias: {
            '@array': getPath('src/array'),
            '@object': getPath('src/object'),
            '@function': getPath('src/function'),
            '@collection': getPath('src/collection'),
            '@string': getPath('src/string'),
            '@number': getPath('src/number'),
            '@helpers': getPath('src/helpers'),
            '@promise': getPath('src/promise'),
            '@validate': getPath('src/validate'),
            '@type': getPath('src/type')
        }
    }
});
