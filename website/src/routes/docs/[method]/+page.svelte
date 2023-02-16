<script lang="ts">
    import type { PageServerData } from './$types.js';

    import EditButton from '$components/EditButton.svelte';
    import Meta from '$components/Meta.svelte';
    import Playground from '$components/Playground.svelte';
    
    export let data: PageServerData;

    $: name = data.name;
    $: description = data.description;
    $: code = data.code;
    $: parsedMarkdown = data.parsedMarkdown;
    $: path = data.path;
</script>

<Meta title={name} {description}/>

{#if name}
    <h2>{name}</h2>
    {@html parsedMarkdown}

    <h3>Example</h3>
    <Playground {code}/>

    <EditButton href={`https://github.com/Maggi64/moderndash/edit/main/package/src/${path}`}/>
{:else}
    <h2>Method not found</h2>
{/if}