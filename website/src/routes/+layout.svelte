<script lang="ts">
    import "../app.css";

    import type { LayoutData } from "./$types.js";

    import icon from "$assets/moderndashIcon.svg";
    import Header from "$components/Header.svelte";
    import Sidebar from "$components/sidebar/Sidebar.svelte";
    import SidebarBtn from "$components/sidebar/SideBarBtn.svelte";

    export let data: LayoutData;
</script>

<svelte:head>
    <link rel="icon" type="image/svg" href={icon}/>
</svelte:head>

<Header/>
<div class="mx-auto max-w-screen-xl overflow-visible">
    <main class="relative flex justify-center">
        <SidebarBtn/>
        <Sidebar sidebarEntries={data.sidebarEntries}/>
        <div class="px-3 w-full py-8 md:py-12 xl:pr-0 lg:pl-16">
            <slot/>
        </div>
    </main>
</div>
