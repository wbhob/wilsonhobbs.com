<script lang="ts">
	import type { LinkType } from '$lib/links';
	import VideoIcon from 'phosphor-svelte/lib/VideoIcon';

	let { type }: { type: LinkType } = $props();
</script>

{#if type === 'article'}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
		<path
			d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15Zm-6-4.5V9a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5Z"
		/>
		<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
	</svg>
{:else if type === 'video'}
	<VideoIcon class="h-6 w-6" aria-label="Video" />
{/if}
