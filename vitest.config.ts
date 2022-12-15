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
            '@lang': fileURLToPath(new URL('src/lang', import.meta.url))
        }
    }
});
