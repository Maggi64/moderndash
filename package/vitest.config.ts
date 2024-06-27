/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)

import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        globals: true,
        coverage: {
            exclude: ["**/index.ts", "src/type", "test/**", "src/helpers/ArrayTypeUtils.ts"]
        }
    },
    // Workaround: Remove when vitest supports decorators
    esbuild: {
        target: "es2022"
    }
});
