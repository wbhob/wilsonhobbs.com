// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

		interface MdsvexFile {
			default: import('svelte/internal').SvelteComponent;
			metadata: PostMetadata;
		}

		type MdsvexResolver = () => Promise<MdsvexFile>;

		// Define the interface for markdown post metadata
		interface PostMetadata {
			title: string;
			date: string;
			description?: string;
			published?: boolean;

			// Add other metadata fields you use
			formattedDate: string;
		}
	}
}

export {};
