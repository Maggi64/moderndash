<script>
    import snarkdown from 'snarkdown';

    import readme from '../../../README.md?raw';

    // remove header section
    const trimmedReadme = readme.split('---')[1];
</script>

{@html snarkdown(trimmedReadme)}