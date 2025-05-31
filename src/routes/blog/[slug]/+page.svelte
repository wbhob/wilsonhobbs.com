<script lang="ts">
	import Layout from '$lib/components/templates/Layout.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.metadata.title} — Wilson Hobbs</title>
</svelte:head>

<Layout>
	<article class="prose">
		<p class="text-sm opacity-60">{data.metadata.formattedDate}</p>
		<h1>{data.metadata.title}</h1>
		<div>
			{@render data.component()}
		</div>
	</article>
</Layout>
