<script lang="ts">
    import type { SignatureParser } from 'typedoc-json-parser';

    import { capitalize } from 'moderndash';
    import snarkdown from 'snarkdown';

    import Playground from './Playground.svelte';

    export let signature: SignatureParser;

    // Removes markdown code block syntax and adds imports
    function generateCode(codetext: string) {
        const code = codetext.replace('```ts\n', '').replace('```', '');
        return `import { ${signature.name} } from 'moderndash';\n\n${code}`;
    }
</script>

{@html snarkdown(signature.comment.description ?? 'No description')}

{#each signature.comment.blockTags as tag}
    <div>
        <h3>{capitalize(tag.name)}</h3>

        {#if tag.name === 'example'}
            <Playground code={generateCode(tag.text)}/>
        {:else}
            {@html snarkdown(tag.text)}
        {/if}
    </div>
{/each}