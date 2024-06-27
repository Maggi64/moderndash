<script lang="ts">
    import type { PageServerData } from "./$types.js";

    import EditButton from "$components/EditButton.svelte";
    import Meta from "$components/Meta.svelte";
    import Playground from "$components/Playground.svelte";
    
    export let data: PageServerData;

    $: name = data.name;
    $: description = data.description;
    $: code = data.code;
    $: parsedDescription = data.parsedDescription;
    $: path = data.path;
    $: parsedDeprecated = data.parsedDeprecated;
</script>

<Meta title={name} {description}/>

{#if name}
    <h2>{name}</h2>

    {#if parsedDeprecated}
        {@html parsedDeprecated}
    {/if}

    {@html parsedDescription}
  
    {#if code}
        <h3>Example</h3>
        <Playground {code}/>
    {/if}

    {#if path}
        <EditButton href={`https://github.com/Maggi64/moderndash/edit/main/package/src/${path}`}/>
    {/if}
{:else}
    <h2>Method not found</h2>
{/if}