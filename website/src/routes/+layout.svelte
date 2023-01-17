<script lang="ts">
    import '../app.css';
    import extractedTypes from '$assets/extractedTypes.json';
    import Header from '$components/Header.svelte';
    import Sidebar from '$components/Sidebar.svelte';
    import MobileSidebar from '$components/SideBarBtn.svelte';


</script>

<Header/>
<main class="relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12">
    <MobileSidebar/>
    <Sidebar/>
    <slot/>
</main>
