<script lang="ts">
    import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
    import { capitalize } from 'moderndash';
    import Fa from 'svelte-fa';

    export let title: string;
    export let entries: string[];

    let isOpen = true;
</script>

<li>
    <div class="font-semibold mb-4 tracking-tight text-slate-900 flex items-center cursor-pointer text-lg select-none"
        on:click={() => (isOpen = !isOpen)} on:keypress={() => (isOpen = !isOpen)}
    >
        <span class="mr-3">
            <Fa icon={isOpen ? faChevronDown : faChevronRight}/>
        </span>
        {capitalize(title)}
    </div>
    {#if isOpen}
        <ul>
            {#each entries as entry}
                <li class="ml-2 pl-6 border-l-2 border-gray-200 hover:border-cyan-300 py-[0.3rem]">
                    <a href="/docs/{entry}" class="text-slate-900 hover:text-slate-800">
                        {entry}
                    </a>
                </li>
            {/each}
        </ul>
    {/if}
</li>
