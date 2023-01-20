<script lang="ts">
    import { groupBy } from 'moderndash';

    import { docDataStore } from '../../docDataStore.js';

    import Catergory from './Catergory.svelte';

    $: categoryGroups = groupBy($docDataStore.functions, func => func.source?.path ?? 'Unknown');
</script>

<div class="fixed top-[3.5rem] h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
    <div class="absolute inset-y-0 right-0 w-full lg:w-[50vw] bg-white lg:bg-slate-50"/>

    <nav class="sticky top-[4.5rem] w-64 text-base lg:text-sm">
        <ul class="-ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8">
            {#each Object.entries(categoryGroups).sort() as [title, functions]}
                <Catergory {title} entries={functions.map(func => func.name)}/>
            {/each}
        </ul>
    </nav>
</div>
