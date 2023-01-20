<script lang="ts">
    import Signature from '../../../components/docs/Signature.svelte';
    import { docDataStore } from '../../../docDataStore.js';

    import { page } from '$app/stores';

    console.log($docDataStore);

    $: methodName = $page.params.method;
    $: methodDoc = $docDataStore.functions.find(func => func.name === methodName);
</script>

{#if methodDoc}
    <h2>{methodDoc.name}</h2>
    <Signature signature={methodDoc.signatures[0]}/>
{:else}
    <h2>Method not found</h2>
{/if}
