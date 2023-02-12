<script lang="ts">
    import type { PageServerData } from './$types.js';

    import Playground from '$components/docs/Playground.svelte';
    import Meta from '$components/Meta.svelte';
    
    export let data: PageServerData;

    $: name = data.name;
    $: description = data.description;
    $: code = data.code;
    $: parsedMarkdown = data.parsedMarkdown;
</script>

<Meta title={name} {description}/>

{#if name}
    <h2>{name}</h2>
    {@html parsedMarkdown}

    <h3>Example</h3>
    <Playground {code}/>
{:else}
    <h2>Method not found</h2>
{/if}
