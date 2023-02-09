<script lang="ts">
    import readme from '../../../README.md?raw';

    import Meta from '$components/Meta.svelte';
    import { markdownParser } from '$utils/markdown.js';

    // remove header section
    const trimmedReadme = readme.split('---')[1];
</script>

<Meta title="Home"/>

{@html markdownParser(trimmedReadme)}