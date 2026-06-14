export type LinkType = 'article' | 'video' | 'podcast' | 'book' | 'other';

export interface Link {
	title: string;
	url: string;
	date: string;
	type: LinkType;
}

export const links: Link[] = [
	{
		title: 'What happens if you click the first link on every Wikipedia article?',
		url: 'https://www.youtube.com/watch?v=dpLG3DpfSlM',
		date: '13 Jun 2026',
		type: 'video'
	}
];
