import {
	FigmaLogoIcon,
	FileIcon,
	FilePlusIcon,
	FileTextIcon,
	GitHubLogoIcon,
	PersonIcon,
} from "@radix-ui/react-icons";
import type { ReactNode } from "react";
import { CleanCodeCardContent } from "@/sections/services/_components/clean-code-card-content";
import {
	ConvertingCardContent,
	type ConvertingCardIconSet,
} from "@/sections/services/_components/converting-card-content";
import { ServicesCardContent } from "@/sections/services/_components/services-card-content";

export interface ServiceItem {
	name: string;
	description: string;
}

export interface ServiceFeature {
	name: string;
	description: string;
	href: string;
	className: string;
	background: ReactNode;
}

const convertingCardIcons: ConvertingCardIconSet = {
	destination: {
		id: "client",
		Icon: PersonIcon,
	},
	hub: {
		id: "handoff",
		Icon: FigmaLogoIcon,
	},
	sources: [
		{
			id: "brief",
			Icon: FileTextIcon,
		},
		{
			id: "spec",
			Icon: FilePlusIcon,
		},
		{
			id: "assets",
			Icon: FileIcon,
		},
		{
			id: "repo",
			Icon: GitHubLogoIcon,
		},
	],
};

export const serviceItems: ServiceItem[] = [
	{
		name: "Digital Transformation",
		description:
			"End-to-end digital strategy and implementation, helping businesses modernize operations and unlock new growth through technology.",
	},
	{
		name: "Project Management",
		description:
			"Expert oversight of complex, multi-stakeholder projects — from planning through delivery — ensuring on-time, on-budget results.",
	},
	{
		name: "Strategic Advisory",
		description:
			"High-level consulting for market entry, expansion planning, and operational optimization across diverse industry verticals.",
	},
	{
		name: "Investment & Partnerships",
		description:
			"Identifying and structuring strategic investments, joint ventures, and partnerships that create long-term value.",
	},
	{
		name: "Design & Construction",
		description:
			"Full-cycle contracting services from architectural design to project completion, delivering quality-built commercial and residential spaces.",
	},
	{
		name: "Media & Creative",
		description:
			"Brand strategy, content production, and digital marketing solutions that elevate visibility and drive meaningful engagement.",
	},
	{
		name: "IT Infrastructure",
		description:
			"Enterprise-grade technology solutions including cloud architecture, cybersecurity, and managed IT services for scalable growth.",
	},
];

export const bestPractices: ServiceItem[] = [
	{
		name: "Integrity First",
		description:
			"We conduct every engagement with transparency, honesty, and a commitment to ethical business practices that build lasting trust.",
	},
	{
		name: "Innovation-Driven",
		description:
			"We continuously seek new methods, technologies, and ideas to deliver smarter solutions and stay ahead of market demands.",
	},
	{
		name: "Client-Centric Approach",
		description:
			"Every decision is guided by the needs and goals of our clients, ensuring tailored solutions that drive measurable outcomes.",
	},
	{
		name: "Excellence in Execution",
		description:
			"We hold ourselves to the highest standards of quality, ensuring every project is delivered with precision and professionalism.",
	},
	{
		name: "Collaborative Partnerships",
		description:
			"We believe in the power of collaboration — working closely with clients, partners, and communities to create shared value.",
	},
	{
		name: "Sustainable Growth",
		description:
			"Our strategies prioritize long-term sustainability, balancing profitability with responsible environmental and social practices.",
	},
	{
		name: "Agile & Adaptive",
		description:
			"We respond swiftly to changing market conditions and client needs, maintaining flexibility without compromising on quality.",
	},
	{
		name: "Knowledge Sharing",
		description:
			"We invest in our teams and partners through continuous learning, mentorship, and the open exchange of industry insights.",
	},
	{
		name: "Regional Expertise",
		description:
			"Deep understanding of the UAE and Middle East markets allows us to navigate local dynamics with confidence and cultural sensitivity.",
	},
	{
		name: "Measurable Impact",
		description:
			"We track performance, report transparently, and iterate relentlessly to ensure every initiative delivers tangible results.",
	},
];

export const serviceFeatures: ServiceFeature[] = [
	{
		name: "Our Service Portfolio",
		description:
			"From technology and consulting to construction and media, we offer an integrated suite of professional services under one roof.",
		href: "#",
		className: "col-span-1",
		background: <ServicesCardContent items={serviceItems} />,
	},

	{
		name: "Strategy to Execution",
		description:
			"We translate strategic vision into operational reality — bridging the gap between planning and measurable business outcomes.",
		href: "#",
		className: "col-span-1",
		background: <ConvertingCardContent icons={convertingCardIcons} />,
	},

	{
		name: "Our Principles",
		description:
			"Integrity, innovation, and excellence guide every engagement — the values that have built our reputation across industries.",
		href: "#",
		className: "col-span-1",
		background: <CleanCodeCardContent items={bestPractices} />,
	},
];
