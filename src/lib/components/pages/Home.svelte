<script lang="ts">
	const work = [
		{
			title: 'Jazz Report',
			caption: 'Every jazz show in NYC, updated daily',
			href: 'https://jazz.report',
			img: '/work/jazz.webp'
		},
		{
			title: 'Play Filler!',
			caption: 'Multiplayer color territory game',
			href: 'https://filler.wilsonhobbs.com',
			img: '/work/filler.webp'
		},
		{
			title: 'Brutalist Ventures',
			caption: 'Website design, 2021',
			href: 'https://brutalist.vc',
			img: '/work/brutalist.webp'
		},
		{
			title: 'Lolli',
			caption: 'Animated promo video, 2020 (as seen on CNN)',
			href: 'https://www.youtube.com/watch?v=vbfSHygQ4uE',
			img: '/work/lolli.webp'
		},
		{
			title: 'Zoomer Company',
			caption: 'Logo reveal video, 2020',
			href: 'https://www.youtube.com/watch?v=bE9aU0BRJiM',
			img: '/work/zoomer.webp'
		}
	];
</script>

<main class="prose">
	<div>
		<h1>wilson hobbs</h1>
		<p>
			hi, i'm wilson. i build small, local language models: narrow models trained for one task that
			run on hardware you already own, with data that never leaves the building.
		</p>
	</div>

	<div class="not-prose grid gap-6 sm:grid-cols-2">
		{#each work as { title, caption, href, img }}
			<a {href} target="_new" class="group block">
				<img
					src={img}
					alt={title}
					loading="lazy"
					class="aspect-video w-full rounded-lg border border-gray-200 object-cover object-top transition group-hover:opacity-80"
				/>
				<p class="mt-2 font-bold group-hover:underline">{title}</p>
				<p class="text-sm text-gray-500">{caption}</p>
			</a>
		{/each}
	</div>

	<div>
		<div class="flex items-baseline justify-between">
			<h2>
				<a href="https://www.rivet.tax" target="_new">Rivet</a>
			</h2>
			<p class="text-sm text-gray-500">2024 – 2026</p>
		</div>

		<p>
			Rivet is a tech-enabled tax firm that serves some of Silicon Valley's fastest-growing
			companies and investors. Rivet runs on a proprietary platform that makes the client experience
			seamless and preparer experience efficient. As head of engineering, I oversaw the development
			of our client products, practice management tools, and AI automation systems.
		</p>
	</div>

	<div>
		<div class="flex items-baseline justify-between">
			<h2>
				<a href="https://www.lobby.so" target="_new">Lobby</a>
			</h2>
			<p class="text-sm text-gray-500">2021 – 2024</p>
		</div>

		<p>
			Lobby focused on making simple and practical applications of emerging technologies, first
			Decentralized Autonomous Organizations (DAOs) and later generative AI. Our last product, Lobby
			Studio, was an online workspace for creating AI agents to share with your team, which Rivet
			acquired in 2024.
		</p>
	</div>

	<div>
		<h2>Investments</h2>

		<p>I angel invest small checks in my friends' companies.</p>

		<ul>
			<li>
				<a target="_new" href="https://guild.xyz">Guild</a> – Access control protocol for Web 3
			</li>
			<li>
				<a target="_new" href="https://www.arterial.design">Arterial</a> – Simulation for the future of
				cities
			</li>
			<li>
				<a target="_new" href="https://withpipeline.com">Pipeline</a> – AI Linkedin outreach for startups
				& sales teams
			</li>
			<li>
				<a target="_new" href="https://vanoma.com">Vanoma</a> – One-click industry research for beauty
				brands
			</li>
		</ul>
	</div>

	<div>
		<h2>Contact</h2>
		<p>Wilson Hobbs lives in Brooklyn, New York.</p>
		<p><a href="mailto:wilson@wilsonhobbs.com">wilson@wilsonhobbs.com</a></p>
	</div>
</main>
