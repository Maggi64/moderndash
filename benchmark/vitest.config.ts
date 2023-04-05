import { defineConfig } from "vite";


export default defineConfig({
    test: {
        deps: {
            inline: ["lodash-es"]
        }
    }   
});