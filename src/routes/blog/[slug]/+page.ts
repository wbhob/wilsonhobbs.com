import { error } from '@sveltejs/kit';
import type { PageLoad, RouteParams } from './$types';

const slugFromPath = (path: string) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

export const entries = async (): Promise<RouteParams[]> => {
	const modules = import.meta.glob(`/src/lib/posts/*.{md,svx,svelte.md}`);
	return Object.keys(modules)
		.map((path) => ({
			slug: slugFromPath(path) ?? ''
		}))
		.filter((entry) => !!entry.slug);
};

export const load: PageLoad = async ({ params }) => {
	const modules = import.meta.glob(`/src/lib/posts/*.{md,svx,svelte.md}`);

	let match: { path?: string; resolver?: App.MdsvexResolver } = {};
	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === params.slug) {
			match = { path, resolver: resolver as unknown as App.MdsvexResolver };
			break;
		}
	}

	const post = await match?.resolver?.();

	if (!post || !post.metadata.published) {
		throw error(404); // Couldn't resolve the post
	}

	return {
		component: post.default,
		metadata: {
			...post.metadata,
			formattedDate: new Date(post.metadata.date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})
		} satisfies App.PostMetadata
	};
};

export const prerender = true;
