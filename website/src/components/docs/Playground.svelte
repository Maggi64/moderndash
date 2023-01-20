<script lang="ts">
    import type { VM } from '@stackblitz/sdk';

    import stackblitz from '@stackblitz/sdk';
    import { onDestroy, onMount } from 'svelte';

    export let code: string;

    let embedElement: HTMLElement | undefined;
    let stackblitzProject: VM | undefined;

    onMount(() => {
        void createEmbed();
    });

    onDestroy(() => {
        if (stackblitzProject && embedElement)
            embedElement.innerHTML = '';
    });

    async function createEmbed() {
        if (!embedElement || stackblitzProject) return;

        // targetElement gets replaced with the embed
        const targetElement = document.createElement('div');
        embedElement.append(targetElement);

        stackblitzProject = await stackblitz.embedProject(
            targetElement,
            {
                title: 'Node Starter',
                description: 'A basic Node.js project',
                template: 'typescript',
                dependencies: {
                    'moderndash': 'latest'
                },
                files: {
                    'index.html': '',
                    'index.ts': code,
                    '.vscode/settings.json': JSON.stringify(vscodeSettings)
                },
                settings: {
                    compile: {
                        clearConsole: true
                    }
                }
            },
            {
                view: 'default',
                hideNavigation: true,
                hideExplorer: true,
                showSidebar: false,
                openFile: 'index.ts',
                devToolsHeight: 100,
                height: 500
            }
        );
    }

    const vscodeSettings = {
        'editor.fontSize': 13,
        'editor.lineNumbers': 'off',
        'editor.parameterHints.enabled': true,
        'editor.inlayHints.enabled': 'on',
        'typescript.inlayHints.parameterNames.enabled': 'all'
    };

    $: void updateCode(code);

    function updateCode(code: string) {
        if (!stackblitzProject) return;

        return stackblitzProject.applyFsDiff({
            create: { 'index.ts': code },
            destroy: []
        });
    }
</script>

<div bind:this={embedElement} class="bg-gray-300 rounded-md overflow-hidden shadow-xl"/>