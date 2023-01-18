<script lang="ts">
    import { page } from '$app/stores';
    import Signature from '../../../components/docs/Signature.svelte';
    import { docDataStore } from '../../../docDataStore.js';   

    console.log($docDataStore);

    $: methodName = $page.params.method;
    $: methodDoc = $docDataStore.functions.find(func => func.name === methodName);
</script>

<div class="prose max-w-none">
    {#if methodDoc}
        <h2>{methodDoc.name}</h2>
        <Signature signature={methodDoc.signatures[0]} />
    {:else}
        <h2>Method not found</h2>
    {/if}
</div>


