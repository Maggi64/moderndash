<script lang="ts">
    import EditButton from '$components/EditButton.svelte';
    import Meta from '$components/Meta.svelte';

    export let data;
</script>

<Meta title="Documentation"/>

<div id="readme">
    {@html data.parsedMarkdown}
</div>

<EditButton href="https://github.com/Maggi64/moderndash/edit/main/README.md"/>