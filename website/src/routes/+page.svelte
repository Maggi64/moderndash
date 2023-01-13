<header class="sticky top-0 z-50 flex items-center justify-between px-3 py-2 border-b shadow-lg bg-white/90 backdrop-blur-sm border-slate-400/40">
    <div class="flex items-center flex-grow basis-0">
        <a href="" class="text-lg font-semibold tracking-tight text-slate-900">
            Spinal docs
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
        <a href="https://spinalcms.com/" class="px-4 py-2 text-sm font-semibold rounded bg-slate-900 text-slate-50 transition ease-in-out delay-75 hover:scale-105 duration-200">
            Go to homepage
        </a>
    </div>
</header>

<main class="relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12">
    <label for="navigation" class="fixed bottom-0 left-0 z-50 flex items-center justify-center w-12 h-12 mb-4 ml-4 bg-white border rounded-full shadow-lg cursor-pointer text-slate-600 border-slate-300 lg:hidden transition duration-200 ease-in-out active:scale-95">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
        </svg>
    </label>

    <input type="checkbox" name="navigation" id="navigation" class="hidden peer" />
    <div class="fixed top-[3.5rem] h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
        <div class="absolute inset-y-0 right-0 w-full lg:w-[50vw] bg-white lg:bg-slate-50"></div>

        <nav class="sticky top-[4.5rem] w-64 pr-8 text-base lg:text-sm xl:w-72 xl:pr-16">
            <ul role="list" class="-ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8">
                <li>
                    <h3 class="font-semibold tracking-tight text-slate-900">
                        Getting started
                    </h3>

                    <ul role="list" class="pl-3 mt-3 space-y-2">
                        <li>
                            <a href="#" class="text-slate-900 hover:text-slate-800">
                                Quick start guide
                            </a>
                        </li>

                        <li>
                            <a href="#" class="text-slate-600 hover:text-slate-800">
                                How does Spinal work?
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <h3 class="font-semibold tracking-tight text-slate-900">
                        Content Types
                    </h3>

                    <ul role="list" class="pl-3 mt-3 space-y-2">
                        <li>
                            <a href="#" class="text-slate-600 hover:text-slate-800">
                                What are content types?
                            </a>
                        </li>

                        <li>
                            <a href="#" class="text-slate-600 hover:text-slate-800">
                                Create and edit content types
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <h3 class="font-semibold tracking-tight text-slate-900">
                        Content
                    </h3>

                    <ul role="list" class="pl-3 mt-3 space-y-2">
                        <li>
                            <a href="#" class="text-slate-600 hover:text-slate-800">
                                What kind of content can I create and edit?
                            </a>
                        </li>

                        <li>
                            <a href="#" class="text-slate-600 hover:text-slate-800">
                                Previewing content
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>

    <div class="flex-auto max-w-2xl min-w-0 px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
        <article class="">
            <header class="">
                <p class="text-base font-medium text-slate-500">
                    Getting started
                </p>

                <h1 class="text-3xl font-bold tracking-tight text-slate-900">
                    Quick start guide
                </h1>
            </header>

            <p class="mt-2 text-xl text-slate-600">
                Need to get started quickly with Spinal? You will learn all the basics in just minutes.
            </p>

            <a href="#" class="flex flex-col w-full mt-4 overflow-hidden rounded-lg shadow-xl md:flex-row md:w-4/5">
                <div class="flex items-center justify-center w-full px-4 py-16 text-sm font-normal md:w-1/3 text-slate-900/20 bg-gradient-to-br from-indigo-200 via-sky-100 to-indigo-100">
                    [Screenshot Image]
                </div>

                <div class="w-full px-6 py-4 border-t border-b border-r md:w-2/3 border-slate-200">
                    <h3 class="text-xl font-semibold tracking-tight text-slate-900">
                        Video walkthrough
                    </h3>

                    <p class="mt-1 text-lg text-slate-600">
                        Watch this 5 minutes video-walkthrough of Spinal. You quickly learn how to set up your dashboard, invite team members, set permissions and how to schedule and publish content.
                    </p>
                </div>
            </a>

            <h3 class="mt-16 text-base font-bold tracking-tight text-slate-900">
                Get set up quickly
            </h3>

            <ul class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <li>
                    <a href="#" class="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white">
                        <h4 class="font-bold tracking-tight text-slate-900">
                            Connect your GitHub account
                        </h4>

                        <p class="text-slate-600">
                            What you need to know before connecting your GitHub account
                        </p>
                    </a>
                </li>

                <li>
                    <a href="#" class="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white">
                        <h4 class="font-bold tracking-tight text-slate-900">
                            Add your first content type
                        </h4>

                        <p class="text-slate-600">
                            Learn what content types are in Spinal
                        </p>
                    </a>
                </li>

                <li class="">
                    <a href="#" class="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white">
                        <h4 class="font-bold tracking-tight text-slate-900">
                            Invite your first team member
                        </h4>

                        <p class="text-slate-600">
                            You write your best marketing content with your team
                        </p>
                    </a>
                </li>

                <li class="">
                    <a href="#" class="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white">
                        <h4 class="font-bold tracking-tight text-slate-900">
                            Publish your content
                        </h4>

                        <p class="text-slate-600">
                            Publishing with Spinal is really just one click of a button
                        </p>
                    </a>
                </li>
            </ul>

            <h3 class="mt-8 text-base font-bold tracking-tight text-slate-900">
                Have questions?
            </h3>

            <p class="text-slate-900">
                Still have questions? <a href="mailto:support@spinalcms.com" class="underline hover:no-underline">Talk to support</a>.
            </p>
        </article>

        <dl class="flex pt-6 mt-6 border-t border-slate-200">
            <!-- <div class="mr-auto text-left"> -->
            <!--   <dt class="text-sm font-normal tracking-tight text-slate-600"> -->
            <!--     Previous -->
            <!--   </dt> -->

            <!--   <dd class="mt-1"> -->
            <!--     <a href="#" class="text-base font-semibold text-slate-900 hover:underline"> -->
            <!--       Blah -->
            <!--     </a> -->
            <!--   </dd> -->
            <!-- </div> -->

            <div class="ml-auto text-right">
                <dt class="text-sm font-normal tracking-tight text-slate-600">
                    Next
                </dt>

                <dd class="mt-1">
                    <a href="#" class="text-base font-semibold text-slate-900 hover:underline">
                        How does Spinal work?
                    </a>
                </dd>
            </div>
        </dl>
    </div>
</main>
