<script lang="ts">
    import { MetaTags } from 'svelte-meta-tags';


    import { page } from '$app/stores';
    import icon from '$assets/moderndashIcon.svg?url';
    import logo from '$assets/moderndashLogo.svg?url';

    export let title = '';
    export let description = 'ModernDash is a modern and lightweight alternative to utility libraries like Lodash. It provides important functions while encouraging use of native JS where possible.';

    $: fullTitle = title ? `${title} | ModernDash` : 'ModernDash';
</script>

<MetaTags
    title={fullTitle}
    {description}
    canonical={`https://moderndash.io${$page.url.pathname}`}
    openGraph={{
        images: [
            {
                url: icon,
                alt: 'ModernDash Icon'
            }
        ]
    }}
    twitter={{
        cardType: 'summary_large_image',
        image: logo,
        imageAlt: 'ModernDash Logo'
    }}
/>
