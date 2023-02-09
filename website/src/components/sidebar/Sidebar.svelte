<script lang="ts">
    import type { ClassParser, FunctionParser, TypeAliasParser } from 'typedoc-json-parser';

    import { group } from 'moderndash';

    import Catergory from './Catergory.svelte';

    import { docDataStore } from '$utils/docDataStore.js';
    import { searchStore } from '$utils/searchStore.js';

    let funcGroups: Record<string, (TypeAliasParser | FunctionParser | ClassParser)[]> = {};

    $: {
        let libaryElements = [...$docDataStore.functions, ...$docDataStore.classes, ...$docDataStore.typeAliases];

        if ($searchStore)
            libaryElements = libaryElements.filter(elem => matchesSearch(elem));

        funcGroups = group(libaryElements, elem => elem.source?.path ?? 'Other');
    }

    function matchesSearch(elem: TypeAliasParser | FunctionParser | ClassParser) {
        return elem.name.toLowerCase().includes($searchStore.toLowerCase()) ||
            elem.source?.path.toLowerCase().includes($searchStore.toLowerCase());
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

<div class="fixed top-[3.5rem] h-screen shadow-xl pl-6 left-0 bg-white lg:bg-slate-50 hidden peer-checked:block lg:relative lg:pl-2 lg:top-0 lg:h-auto lg:block lg:flex-none lg:shadow-none">
    <div class="absolute inset-y-0 right-0 w-full"/>
    <nav class="sticky top-[3.7rem] w-64 text-base lg:text-sm">
        <div class="h-[calc(100vh-3.7rem)] overflow-y-auto py-12 space-y-8">
            
            <div class="text-lg font-semibold">
                <a href="/" class="text-slate-900 hover:text-slate-800">
                    📓 Introduction
                </a>
            </div>

            {#each sortedGroups as [title, functions]}
                <Catergory {title} entries={functions.map(func => func.name)}/>
            {/each}
        </div>
    </nav>
</div>
