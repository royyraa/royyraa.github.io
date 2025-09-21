export const profile = {
	fullName: 'Rajarshi Roy',
	title: 'Postdoctoral Research Associate',
	institute: 'Purdue University',
	author_name: 'Rajarshi Roy', // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Molecular Simulations', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'royyraa@outlook.com',
	linkedin: 'https://www.linkedin.com/in/rajarshi-roy-phd/',
	x: 'https://x.com/rajariyo',
	github: 'https://github.com/royyraa',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?hl=en&user=bLNNasQAAAAJ&view_op=list_works&authuser=2',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0000-0002-5788-9424',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Rajarshi Roy — Computational Biophysicist',
	default_description: 'Personal academic website of Rajarshi Roy, Postdoc at Purdue University, Molecular simulations and computational biology',
	default_image: '/profile.jpeg',
}
