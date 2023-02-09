<script lang="ts">
    import readme from '../../../README.md?raw';

    import { markdownParser } from '$utils/markdown.js';

    // remove header section
    const trimmedReadme = readme.split('---')[1];
</script>

{@html markdownParser(trimmedReadme)}