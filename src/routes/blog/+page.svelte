<script lang="ts">
	import Layout from '$lib/components/templates/Layout.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog — Wilson Hobbs</title>
</svelte:head>

<Layout>
	<ul class="flex flex-col gap-12">
		{#each data.posts as p}
			<li>
				<a href={`/blog/${p.slug}`}>
					<div class="flex justify-between">
						<h2 class="font-bold">{p.title}</h2>
						<span class="text-sm opacity-60">{p.formattedDate}</span>
					</div>
					{#if p.description}<p>{p.description}</p>{/if}
				</a>
			</li>
		{/each}
	</ul>
</Layout>
