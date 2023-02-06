<script lang="ts">
    import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
    import { capitalize } from 'moderndash';
    import Fa from 'svelte-fa';

    export let title: string;
    export let entries: string[];

    let isOpen = true;
</script>

<li>
    <h3 class="font-semibold tracking-tight text-slate-900 flex items-center cursor-pointer text-lg select-none"
        on:click={() => (isOpen = !isOpen)} on:keypress={() => (isOpen = !isOpen)}
    >
        <span class="mr-2">
            <Fa icon={isOpen ? faChevronDown : faChevronRight}/>
        </span>
        {capitalize(title)}
    </h3>
    {#if isOpen}
        <ul class="pl-8 mt-3 space-y-2">
            {#each entries as entry}
                <li>
                    <a href="/docs/{entry}" class="text-slate-900 hover:text-slate-800">
                        {entry}
                    </a>
                </li>
            {/each}
        </ul>
    {/if}
</li>
