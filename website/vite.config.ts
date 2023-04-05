import type { UserConfig } from "vite";

import { sveltekit } from "@sveltejs/kit/vite";

const config: UserConfig = {
    plugins: [sveltekit()],
    build: {
        minify: true,
        sourcemap: true,
        target: "esnext"
    }
};

export default config;
