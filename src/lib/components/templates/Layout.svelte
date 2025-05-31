<script lang="ts">
	import HeaderNavigation from '$lib/components/organisms/HeaderNavigation.svelte';

	let { children } = $props();
</script>

<div class="mx-auto mt-8 max-w-screen-md px-4">
	<HeaderNavigation />
</div>

<main class="mx-auto my-16 max-w-screen-md px-4">
	{@render children()}
</main>
