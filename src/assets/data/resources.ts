type Resource = {
	title: string;
	link: string;
	desc: string;
	newTab?: boolean;
	main: string;
	accent: string;
	background: string;
	icon: string;
};

export const RESOURCES: Resource[] = [
	{
		title: "Project Teams",
		link: "/project-teams",
		desc: "Work on a team to design a beautiful large-scale product.",
		main: "red",
		accent: "gray",
		background: "var(--blush)",
		icon: "res-pt.svg",
	},
	{
		title: "Workshop Slides",
		link: "https://drive.google.com/drive/folders/14yhiCBnk0E6GECv8LPwSxduM1Nb6GOAQ?usp=sharing",
		desc: "View past workshop slides.",
		newTab: true,
		main: "orange",
		accent: "gray",
		background: "#ffe4d4",
		icon: "res-slides.svg",
	},
	{
		title: "Featured Resources",
		link: "/resources/featured/",
		desc: "Explore our curated collection of useful online tools, guides, and more.",
		main: "orange",
		accent: "gray",
		background: "var(--peach)",
		icon: "res-featured.svg",
	},
	{
		title: "Design-a-thon",
		link: "/designathons/",
		desc: "Our biggest event held every year. Teams design and compete for prizes",
		main: "blue",
		accent: "gray",
		background: "var(--sky)",
		icon: "res-designathon.svg",
	},
	{
		title: "Newsletter Archive",
		link: "https://us16.campaign-archive.com/home/?u=96e1277e37e6f4c2940cd1dc9&id=3cdf6c3ea8",
		desc: "View past newsletters.",
		newTab: true,
		main: "black",
		accent: "gray",
		background: "var(--silver)",
		icon: "res-archive.svg",
	},
];
