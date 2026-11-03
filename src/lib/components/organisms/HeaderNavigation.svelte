<script lang="ts">
	import XLogoIcon from 'phosphor-svelte/lib/XLogoIcon';
	import GithubLogoIcon from 'phosphor-svelte/lib/GithubLogoIcon';
	import LinkedinLogoIcon from 'phosphor-svelte/lib/LinkedinLogoIcon';

	const socials = [
		{ href: 'https://x.com/intent/follow?screen_name=wilsonsaccount', label: 'X', icon: XLogoIcon },
		{ href: 'https://github.com/wbhob', label: 'GitHub', icon: GithubLogoIcon },
		{ href: 'https://www.linkedin.com/in/wbhob/', label: 'LinkedIn', icon: LinkedinLogoIcon }
	];
</script>

<nav class="mx-auto flex w-full max-w-3xl items-center gap-4">
	<a class="hover:underline" href="/">home</a>
	<a class="hover:underline" href="/blog">blog</a>
	<a class="hover:underline" href="/links">links</a>
	<div class="ml-auto flex gap-3">
		{#each socials as { href, label, icon: Icon }}
			<a {href} target="_blank" rel="noopener" aria-label={label} title={label} class="text-gray-500 hover:text-gray-900">
				<Icon size={20} />
			</a>
		{/each}
	</div>
</nav>
