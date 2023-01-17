<script lang="ts">
    import logo from '$assets/moderndashLogo.svg';
    import Fa from "svelte-fa";

    import { faGithub } from "@fortawesome/free-brands-svg-icons";
</script>

<header class="sticky top-0 z-50 flex items-center justify-between px-3 py-2 border-b shadow-lg bg-white/90 backdrop-blur-sm border-slate-400/40">
    <div class="flex items-center flex-grow basis-0">
        <a href="/" class="text-lg font-semibold tracking-tight text-slate-900">
            <img src={logo} alt="ModernDash Logo" class="h-10"/>
        </a>
    </div>

    <form action="https://duckduckgo.com/" class="md:w-80 lg:w-96">
      <span class="relative flex items-center group">
        <svg aria-hidden="true" viewBox="0 0 20 20" class="absolute w-4 h-4 ml-3 fill-slate-400 group-hover:fill-slate-500 group-focus:fill-slate-500"><path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z"></path></svg>
        <input type="text" name="q" placeholder="Search docs…" class="w-full py-2 pl-10 pr-2 border rounded bg-slate-100 placeholder-slate-400 text-slate-800 border-slate-100 outline outline-offset-2 outline-2 outline-transparent hover:border-slate-200 focus:border-slate-200 focus:outline-slate-600" />
      </span>
        <input type="hidden" name="sites" value="spinalcms.com">
        <input type="submit" value="Search" class="sr-only" />
    </form>

    <div class="items-center justify-end flex-grow hidden basis-0 md:flex">
        <a href="https://github.com/Maggi64/moderndash" target="_blank" rel="noreferrer" class="px-4 py-2 flex items-center font-semibold rounded bg-slate-900 text-slate-50 hover:bg-slate-800">
            <Fa icon={faGithub} size="1.5x"/> <span class="ml-2">Github</span>
        </a>
    </div>
</header>
