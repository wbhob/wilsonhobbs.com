<script lang="ts">
	import Layout from '$lib/components/templates/Layout.svelte';
	import { useOgImage } from '$lib/og';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.metadata.title} — Wilson Hobbs</title>
	<meta name="description" content={data.metadata.description ?? ''} />
	<meta name="author" content="Wilson Hobbs" />

	<meta
		property="og:image"
		content={useOgImage({
			title: data.metadata.title ?? '',
			description: data.metadata.description ?? ''
		})}
	/>
	<meta property="og:title" content={data.metadata.title ?? ''} />
	<meta property="og:description" content={data.metadata.description ?? ''} />
	<meta property="og:author" content="Wilson Hobbs" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={`https://wilsonhobbs.com/blog/${data.slug}`} />
	<meta property="og:site_name" content="Wilson Hobbs" />
	<meta property="og:locale" content="en_US" />
	<!-- twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.metadata.title ?? ''} />
	<meta name="twitter:description" content={data.metadata.description ?? ''} />
	<meta
		name="twitter:image"
		content={useOgImage({
			title: data.metadata.title ?? '',
			description: data.metadata.description ?? ''
		})}
	/>
	<meta name="twitter:site" content="@wilsonsaccount" />
	<meta name="twitter:creator" content="@wilsonsaccount" />
	<meta name="twitter:url" content={`https://wilsonhobbs.com/blog/${data.slug}`} />
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
