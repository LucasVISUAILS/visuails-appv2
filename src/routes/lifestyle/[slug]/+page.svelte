<script>
  import StylePage from '$lib/components/site/StylePage.svelte';
  let { data } = $props();
</script>

<StylePage style={data.style} />
