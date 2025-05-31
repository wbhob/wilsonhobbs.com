// Define the structure of imported markdown modules
interface MarkdownModule {
	default: unknown; // The compiled Svelte component
	metadata: App.PostMetadata;
}

export const load = async () => {
	const modules = import.meta.glob('/src/lib/posts/*.md', { eager: true }) as Record<
		string,
		MarkdownModule
	>;

	const all = Object.entries(modules)
		.map(([path, mod]) => ({
			slug: path.split('/').pop()?.replace('.md', ''),
			...mod.metadata,
			formattedDate: new Date(mod.metadata.date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})
		}))
		.filter((post) => post.published);

	return { posts: all.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) };
};

export const prerender = true;
