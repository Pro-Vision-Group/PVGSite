export interface WorksItem {
	image: string;
	logo?: string;
	title: string;
	description: string;
	link: string;
}

export const works: WorksItem[] = [
	{
		image: "/placeholder-1.jpg",
		logo: "/provision-solutions-logo.png",
		title: "Pro Vision Solutions",
		description: "Delivering cutting-edge software development, cloud infrastructure, and digital transformation solutions for enterprises across the region.",
		link: "/solutions",
	},
];
