<script lang="ts">
    import { capitalize } from 'moderndash';
    import snarkdown from 'snarkdown';

    import Playground from '$components/docs/Playground.svelte';

    import { docDataStore } from '../../../utils/docDataStore.js';

    import { page } from '$app/stores';

    console.log($docDataStore);

    $: methodName = $page.params.method;
    $: methodDoc = $docDataStore.functions.find(func => func.name === methodName);
    $: typeDoc = $docDataStore.typeAliases.find(type => type.name === methodName);
    $: signature = methodDoc?.signatures[0] ?? typeDoc;
    $: code = generateCode(signature?.comment.blockTags.find(tag => tag.name === 'example')?.text);

    // Removes markdown code block syntax and adds imports
    function generateCode(codetext: string | undefined) {
        if (!codetext || !signature) return '';
        const code = codetext.replace('```ts\n', '').replace('```', '');
        return `import { ${signature.name} } from 'moderndash';\n\n${code}`;
    }
</script>

{#if methodDoc ?? typeDoc}
    <h2>{methodDoc?.name ?? typeDoc?.name}</h2>
    {#if signature}
        {@html snarkdown(signature.comment.description ?? 'No description')}

        {#each signature.comment.blockTags as tag}
            {#if tag.name !== 'example'}
                <div>
                    <h3>{capitalize(tag.name)}</h3>
                    {@html snarkdown(tag.text)}
                </div>
            {/if}
        {/each}

        <h3>Example</h3>
        <Playground {code}/>
    {/if}
{:else}
    <h2>Method not found</h2>
{/if}
