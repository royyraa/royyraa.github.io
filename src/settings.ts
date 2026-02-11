export const profile = {
	fullName: 'Rajarshi Roy',
	title: 'Postdoctoral Research Associate',
	institute: 'Purdue University',
	author_name: 'Rajarshi Roy', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Protein Dynamics & Conformational Sampling', description: 'Enhanced sampling methods and molecular dynamics to characterize conformational landscapes of proteins, including kinases and multi-state systems captured by cryo-EM.', field: 'physics' },
		{ title: 'Drug Discovery & Molecular Recognition', description: 'NMR-guided computational modeling of protein–ligand interactions, free energy calculations, molecular docking refinement, and peptoid–protein binding studies.', field: 'chemistry' },
		{ title: 'Cryo-EM & Integrative Structural Biology', description: 'Combining atomistic simulations with cryo-EM data to model proteins in multiple functional states, bridging experiment and theory at physiological temperatures.', field: 'physics' },
		{ title: 'Machine Learning for Biomolecular Systems', description: 'Applying generative AI and deep learning to characterize phase diagrams, predict protein structural dynamics, and accelerate molecular property prediction.', field: 'computer-science' },
		{ title: 'Antiviral & Coronavirus Research', description: 'Computational studies of SARS-CoV-2 targets including the main protease and methyltransferase complexes, elucidating inhibitor binding mechanisms.', field: 'biology' },
		{ title: 'Lipid Biology & Cellular Processes', description: 'Investigating small-molecule induction of endogenous lipid droplets and membrane-associated phenomena through molecular simulation.', field: 'biology' },
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
	website_url: 'https://royyraa.github.io', // Astro needs to know your site's deployed URL to generate a sitemap. It must start with http:// or https://
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
	default_description: 'Rajarshi Roy - Computational Biophysicist and Postdoctoral Researcher at Purdue University specializing in protein dynamics, enhanced sampling, and molecular simulations.',
	default_image: '/profile.jpeg',
}
