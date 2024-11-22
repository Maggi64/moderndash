<script lang="ts">
    import type { LayoutData } from "../../routes/$types.js";

    import { searchTerm } from "$utils/searchStore.js";

    import Category from "./Category.svelte";

    import { goto } from "$app/navigation";

    export let sidebarEntries: LayoutData["sidebarEntries"];

    $: filteredEntries = sidebarEntries.map(({ categoryName, entries }) => {
        const matchingEntries = categoryName.includes($searchTerm) 
            ? entries 
            : entries.filter((methodName) => methodName.toLowerCase().includes($searchTerm));
            
        return {
            categoryName,
            entries: matchingEntries
        };
    }).filter(({ entries }) => entries.length > 0);

    $: if ($searchTerm.length > 1 && filteredEntries.length > 0) {
        const newUrl = `/docs/${filteredEntries[0].entries[0]}`;
        void goto(newUrl, { keepFocus: true });
    }
</script>

<div class="fixed top-[3.5rem] h-screen shadow-xl pl-6 left-0 bg-slate-50 hidden border-r-2  peer-checked:block lg:relative lg:top-0 lg:h-auto lg:block lg:flex-none lg:shadow-none">
    <div class="absolute inset-y-0 right-0 w-full"/>
    <nav class="sticky top-[3.7rem] w-64 text-base lg:text-sm">
        <div class="h-[calc(100vh-3.7rem)] overflow-y-auto py-12 space-y-8">
            
            <div class="text-lg font-semibold">
                <a href="/" class="text-slate-900 hover:text-slate-800">
                    📓 Introduction
                </a>
            </div>

            {#each filteredEntries as { categoryName, entries }}
                <Category {categoryName} {entries}/>
            {/each}
        </div>
    </nav>
</div>
