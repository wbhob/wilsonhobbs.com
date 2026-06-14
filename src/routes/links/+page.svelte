<script lang="ts">
	import Layout from '$lib/components/templates/Layout.svelte';
	import { links } from '$lib/links';
	import LinkIcon from './LinkIcon.svelte';
</script>

<svelte:head>
	<title>Links — Wilson Hobbs</title>
</svelte:head>

<Layout>
	<ul>
		{#each links as link (link.url)}
			<li>
				<a href={link.url} rel="external" target="_blank" class="group block">
					<p class="group-hover:underline flex items-center gap-2">
						<LinkIcon type={link.type} />
						{link.title}
					</p>
					<span class="text-sm opacity-60">{link.date}</span>
				</a>
			</li>
		{/each}
	</ul>
</Layout>
