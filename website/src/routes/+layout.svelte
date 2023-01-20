<script lang="ts">
    import '../app.css';

    import Header from '$components/Header.svelte';
    import Sidebar from '$components/sidebar/Sidebar.svelte';
    import SidebarBtn from '$components/sidebar/SideBarBtn.svelte';
</script>

<Header/>
<main class="relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12">
    <SidebarBtn/>
    <Sidebar/>
    <div class="flex-auto max-w-2xl min-w-0 px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16 prose">
        <slot/>
    </div>
</main>
