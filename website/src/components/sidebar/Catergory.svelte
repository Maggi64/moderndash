<script lang="ts">
    export let title: string;
    export let entries: string[];
</script>

<li>
    <h3 class="font-semibold tracking-tight text-slate-900">
        {title}
    </h3>

    <ul class="pl-3 mt-3 space-y-2">
        {#each entries as entry}
            <li>
                <a href="/docs/{entry}" class="text-slate-900 hover:text-slate-800">
                    {entry}
                </a>
            </li>
        {/each}
    </ul>
</li>