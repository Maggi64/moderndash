<script lang="ts">
    import readme from '../../../README.md?raw';

    import Meta from '$components/Meta.svelte';
    import { markdownParser } from '$utils/markdown.js';

    // remove first markdown image from readme
    const trimmedReadme = readme.replace(/!\[.*]\(.*\)/, '');
</script>

<Meta title="Home"/>

<div id="readme">
    {@html markdownParser(trimmedReadme)}
</div>