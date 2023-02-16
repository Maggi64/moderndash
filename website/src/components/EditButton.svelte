<script lang="ts">
    import { faPen } from '@fortawesome/free-solid-svg-icons';
    import Fa from 'svelte-fa';

    export let href: string;
</script>

<div class="flex justify-end w-full mt-8">
    <a class="flex items-center text-slate-600 text-sm" {href} target="_blank" rel="noreferrer">
        <span class="mr-2"><Fa size="0.9x" icon={faPen}/></span>
        Edit on GitHub
    </a>
</div>