<script lang="ts">
    import type { PageServerData } from './$types.js';

    import EditButton from '$components/EditButton.svelte';
    import Meta from '$components/Meta.svelte';

    export let data: PageServerData;
</script>

<Meta title="Home"/>

<div id="readme">
    {@html data.parsedMarkdown}
</div>

<EditButton href="https://github.com/Maggi64/moderndash/edit/main/README.md"/>