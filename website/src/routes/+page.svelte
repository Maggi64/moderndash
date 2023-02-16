<script lang="ts">
    import readme from '../../../README.md?raw';

    import EditButton from '$components/EditButton.svelte';
    import Meta from '$components/Meta.svelte';
    import { markdownParser } from '$utils/markdown.js';

    // remove first markdown image from readme
    const trimmedReadme = readme.replace(/!\[.*]\(.*\)/, '');
</script>

<Meta title="Home"/>

<div id="readme">
    {@html markdownParser(trimmedReadme)}
</div>

<EditButton href="https://github.com/Maggi64/moderndash/edit/main/README.md"/>