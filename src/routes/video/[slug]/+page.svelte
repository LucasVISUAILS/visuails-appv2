<script>
  import VideoStylePage from '$lib/components/site/VideoStylePage.svelte';
  let { data } = $props();
</script>

<VideoStylePage style={data.style} />
