<script lang="ts">
    import { docDataStore } from "../../docDataStore.js";
    import snarkdown from 'snarkdown';
    import type { SignatureParser } from "typedoc-json-parser";

    export let signature: SignatureParser;
</script>

{@html snarkdown(signature.comment.description || "No description")}

{#each signature.comment.blockTags as tag}
    <div>
        <h3 class="capitalize">{tag.name}</h3>
        {@html snarkdown(tag.text)}
    </div>
{/each}