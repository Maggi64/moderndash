<script lang="ts">
    import type { ClassParser, FunctionParser, TypeAliasParser } from 'typedoc-json-parser';

    import { group } from 'moderndash';

    import Catergory from './Catergory.svelte';

    import { docDataStore } from '$utils/docDataStore.js';

    let funcGroups: Record<string, (TypeAliasParser | FunctionParser | ClassParser)[]> = {};

    $: {
        const libaryElements = [...$docDataStore.functions, ...$docDataStore.classes, ...$docDataStore.typeAliases];
        funcGroups = group(libaryElements, elem => elem.source?.path ?? 'Unknown');
    }

    // Sorts the groups so that the top categories are at the top
    const topCategories = ['array', 'object', 'string', 'number', 'promise', 'validate', 'function', 'decorator'];
    $: sortedGroups = Object.entries(funcGroups).sort(([titleA], [titleB]) => {
        const indexA = topCategories.indexOf(titleA);
        const indexB = topCategories.indexOf(titleB);
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        
        return titleA.localeCompare(titleB);
    });
</script>

<div class="fixed top-[3.5rem] h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
    <div class="absolute inset-y-0 right-0 w-full lg:w-[50vw] bg-white lg:bg-slate-50"/>
    <nav class="sticky top-[4.5rem] w-64 text-base lg:text-sm">
        <ul class="-ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8">
            {#each sortedGroups as [title, functions]}
                <Catergory {title} entries={functions.map(func => func.name)}/>
            {/each}
        </ul>
    </nav>
</div>
