<script>
  import CatalogStylePage from '$lib/components/site/CatalogStylePage.svelte';
  let { data } = $props();
</script>

<CatalogStylePage style={data.style} />
