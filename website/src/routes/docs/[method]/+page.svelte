<script lang="ts">
    import EditButton from '$components/EditButton.svelte';
    import Meta from '$components/Meta.svelte';
    import Playground from '$components/Playground.svelte';
    
    export let data;

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

    {#if path}
        <EditButton href={`https://github.com/Maggi64/moderndash/edit/main/package/src/${path}`}/>
    {/if}
{:else}
    <h2>Method not found</h2>
{/if}