export const useOgImage = ({ title, description }: { title: string; description: string }) => {
	const ogParams = {
		fontFamily: 'Lora',
		title, // use the title
		titleTailwind: 'font-bold text-6xl text-white mt-3',
		text: description, // use description
		textTailwind: 'text-2xl mt-4 text-orange-200',
		// logoUrl: 'https://wilsonhobbs.com/img/logo.svg',
		// logoTailwind: 'text-center text-center m-auto',
		bgTailwind: 'bg-orange-600',
		footer: 'wilsonhobbs.com',
		footerTailwind: 'text-orange-200',
		t: '1673017484197',
		refresh: '1'
	};

	// convert the object into a string that's readeable by the url
	const paramsToString = Object.entries(ogParams)
		.map(([key, val]) => {
			return `${key}=${encodeURIComponent(val)}`;
		})
		.join('&');

	// return the full image url
	return `https://og.tailgraph.com/og?${paramsToString}`;
};
