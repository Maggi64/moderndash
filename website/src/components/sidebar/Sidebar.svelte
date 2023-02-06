<script lang="ts">
    import type { FunctionParser, TypeAliasParser } from 'typedoc-json-parser';

    import { group } from 'moderndash';

    import { docDataStore } from '../../utils/docDataStore.js';

    import Catergory from './Catergory.svelte';

    let funcGroups: Record<string, TypeAliasParser[] | FunctionParser[]> = {};

    $: {
        funcGroups = group($docDataStore.functions, func => func.source?.path ?? 'Unknown');
        funcGroups.type = $docDataStore.typeAliases;
    }
</script>

<div class="fixed top-[3.5rem] h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
    <div class="absolute inset-y-0 right-0 w-full lg:w-[50vw] bg-white lg:bg-slate-50"/>
    <nav class="sticky top-[4.5rem] w-64 text-base lg:text-sm">
        <ul class="-ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8">
            {#each Object.entries(funcGroups).sort() as [title, functions]}
                <Catergory {title} entries={functions.map(func => func.name)}/>
            {/each}
        </ul>
    </nav>
</div>
