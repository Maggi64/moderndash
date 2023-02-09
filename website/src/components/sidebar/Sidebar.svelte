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

<div class="fixed top-[3.5rem] h-screen shadow-xl pl-6 left-0 bg-white lg:bg-slate-50 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:block lg:flex-none lg:shadow-none">
    <div class="absolute inset-y-0 right-0 w-full"/>
    <nav class="sticky top-[3.7rem] w-60 text-base lg:text-sm">
        <ul class="h-[calc(100vh-3.7rem)] overflow-y-auto py-7 space-y-8">
            {#each sortedGroups as [title, functions]}
                <Catergory {title} entries={functions.map(func => func.name)}/>
            {/each}
        </ul>
    </nav>
</div>
