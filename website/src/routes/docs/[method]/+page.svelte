<script lang="ts">
    import { page } from '$app/stores';
    import Playground from '$components/docs/Playground.svelte';
    import { docDataStore } from '$utils/docDataStore.js';
    import { markdownParser } from '$utils/markdown.js';

    $: methodName = $page.params.method;
    $: methodDoc = $docDataStore.functions.find(func => func.name === methodName);
    $: typeDoc = $docDataStore.typeAliases.find(type => type.name === methodName);
    $: classDoc = $docDataStore.classes.find(type => type.name === methodName);
    $: signature = methodDoc?.signatures[0] ?? typeDoc ?? classDoc;
    $: code = generateCode(signature?.comment.blockTags.find(tag => tag.name === 'example')?.text);

    $: displayedName = methodDoc?.name ?? typeDoc?.name ?? classDoc?.name;

    // Removes markdown code block syntax and adds imports
    function generateCode(codetext: string | undefined) {
        if (!codetext || !signature) return '';
        let code = codetext.replace(/```(ts|typescript)\n/, '').replace('```', '');
        
        // Deals with Top Level Await Bug in Stackblitz
        if (code.includes('await')) {
            let lines = code.split('\n');
            lines = lines.map((line, index) => {
                if (index < lines.length - 1) {
                    return '    ' + line;
                }
                return line;
            });
            code = lines.join('\n');
            code = `(async () => {\n${code}})()`;
        }
        // ----

        return `import { ${signature.name} } from 'moderndash';\n\n${code}`;
    }
</script>

{#if displayedName}
    <h2>{displayedName}</h2>
    {#if signature}
        {@html markdownParser(signature.comment.description ?? 'No description')}

        <h3>Example</h3>
        <Playground {code}/>
    {/if}
{:else}
    <h2>Method not found</h2>
{/if}
