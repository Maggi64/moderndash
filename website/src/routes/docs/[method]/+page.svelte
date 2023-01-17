<script lang="ts">
     import { page } from '$app/stores';
    import { docDataStore } from '../../../docDataStore.js';

    $: methodName = $page.params.method;
    $: methodDoc = $docDataStore.children.find(child => child.name === methodName);
</script>

{#if methodDoc}
    <h2>{methodDoc.name}</h2>
    <p>{JSON.stringify(methodDoc.signatures)}</p>
{:else}
    <h2>Method not found</h2>
{/if}