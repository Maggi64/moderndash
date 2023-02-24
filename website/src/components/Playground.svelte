<script lang="ts">
    import type { VM } from '@stackblitz/sdk';

    import stackblitz from '@stackblitz/sdk';
    import { sleep } from 'moderndash';
    import { onDestroy, onMount } from 'svelte';

    export let code: string;

    let embedElement: HTMLElement | undefined;
    let stackblitzProject: VM | undefined;

    onMount(createEmbed);

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
                    '.vscode/settings.json': JSON.stringify(vscodeSettings),
                    'tsconfig.json': JSON.stringify(tsConfig)
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
        
        // Hack to get the jsconfig to load correctly
        await sleep(2000);
        await stackblitzProject.applyFsDiff({
            create: { 'tsconfig.json': JSON.stringify(tsConfig) },
            destroy: []
        });
    }

    const vscodeSettings = {
        'editor.fontSize': 13,
        'editor.lineNumbers': 'off',
        'editor.parameterHints.enabled': true,
        'editor.inlayHints.enabled': 'on',
        'typescript.inlayHints.parameterNames.enabled': 'all',
        'editor.parameterHints': { 'enabled': true, 'cycle': true },
        'editor.folding': false,
        'editor.lineDecorationsWidth': 20
    };

    const tsConfig = {
        'compilerOptions': {
            'module': 'ESNext',
            'lib': ['ESNext', 'DOM'],
            'target': 'ESNext'
        },
        'exclude': ['node_modules']
    };

    $: void updateCode(code);

    async function updateCode(code: string) {
        if (!stackblitzProject) return;

        await stackblitzProject.applyFsDiff({
            create: { 'index.ts': code },
            destroy: []
        });

        await stackblitzProject.editor.openFile('index.ts');
    }
</script>

<div bind:this={embedElement} class="bg-gray-900 rounded-md overflow-hidden shadow-xl"/>