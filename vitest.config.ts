/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)

import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        /* for example, use global to avoid globals imports (describe, test, expect): */
        // globals: true,
    },
    resolve: {
        alias: {
            '@array': fileURLToPath(new URL('src/array', import.meta.url)),
            '@lang': fileURLToPath(new URL('src/lang', import.meta.url)),
            '@function': fileURLToPath(new URL('src/function', import.meta.url)),
            '@collection': fileURLToPath(new URL('src/collection', import.meta.url)),
            '@object': fileURLToPath(new URL('src/object', import.meta.url)),
            '@string': fileURLToPath(new URL('src/string', import.meta.url)),
            '@number': fileURLToPath(new URL('src/number', import.meta.url)),
            '@helpers': fileURLToPath(new URL('src/helpers', import.meta.url))
        }
    }
});
