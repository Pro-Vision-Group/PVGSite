import {
	CodeIcon,
	FigmaLogoIcon,
	FileIcon,
	FilePlusIcon,
	FileTextIcon,
	GitHubLogoIcon,
	LightningBoltIcon,
	MixIcon,
	PersonIcon,
	QuestionMarkCircledIcon,
	StarIcon,
} from "@radix-ui/react-icons";
import { useGSAP } from "@gsap/react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { type ReactNode, useEffect, useRef, useState } from "react";
import Section from "@/components/layout/section";
import Blog from "@/sections/blog/blog";
import { getAllPostsMeta } from "@/sections/blog/_server/posts";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ShinyBadge } from "@/components/ui/shiny-badge";
import {
	gsap,
	premiumEase,
	registerGsapPlugins,
	SplitText,
} from "@/lib/gsap-config";
import { useLenis } from "@/lib/lenis-context";
import { absoluteUrl } from "@/lib/seo";
import Footer from "@/sections/footer/footer";
import { Background } from "@/sections/hero/_components/background";
import {
	ConvertingCardContent,
	type ConvertingCardIconSet,
} from "@/sections/services/_components/converting-card-content";
import { ServiceCard } from "@/sections/services/_components/service-card";
import { ServicesCardContent } from "@/sections/services/_components/services-card-content";
import type { ServiceItem } from "@/sections/services/_constants/services";

registerGsapPlugins();

const PAGE_TITLE =
	"Pro Vision Solutions — Technology That Drives Business Forward";
const PAGE_DESCRIPTION =
	"Enterprise-grade software development, cloud infrastructure, and digital transformation solutions for businesses across the UAE and beyond.";

export const Route = createFileRoute("/solutions")({
	loader: () => getAllPostsMeta(),
	head: () => {
		const canonical = absoluteUrl("/solutions");
		return {
			meta: [
				{ title: PAGE_TITLE },
				{ name: "description", content: PAGE_DESCRIPTION },
				{
					name: "keywords",
					content:
						"Pro Vision Solutions, software development, cloud infrastructure, digital transformation, AI, cybersecurity, IT consulting, UAE",
				},
				{ property: "og:type", content: "website" },
				{ property: "og:url", content: canonical },
				{ property: "og:title", content: PAGE_TITLE },
				{ property: "og:description", content: PAGE_DESCRIPTION },
				{ name: "twitter:card", content: "summary_large_image" },
				{ property: "twitter:title", content: PAGE_TITLE },
				{ property: "twitter:description", content: PAGE_DESCRIPTION },
			],
			links: [{ rel: "canonical", href: canonical }],
		};
	},
	component: SolutionsPage,
});

// ── Service items for the animated list card ──
const serviceItems: ServiceItem[] = [
	{
		name: "Software Development",
		description:
			"Custom web, mobile, and enterprise applications built with modern frameworks and best practices for scalability and performance.",
	},
	{
		name: "Cloud & Infrastructure",
		description:
			"AWS, Azure, and GCP architecture design, migration, and managed services to optimize your cloud environment.",
	},
	{
		name: "Digital Transformation",
		description:
			"End-to-end modernization of business operations — from legacy system migration to workflow automation.",
	},
	{
		name: "AI & Data Analytics",
		description:
			"Machine learning models, data pipelines, and business intelligence dashboards that turn raw data into actionable insights.",
	},
	{
		name: "Cybersecurity",
		description:
			"Threat assessment, regulatory compliance, and managed security services to protect your digital assets.",
	},
	{
		name: "IT Consulting",
		description:
			"Technology strategy, architecture review, and vendor selection to align IT investments with business goals.",
	},
];

// ── Icons for the converting/beam card ──
const convertingIcons: ConvertingCardIconSet = {
	destination: { id: "client", Icon: PersonIcon },
	hub: { id: "handoff", Icon: FigmaLogoIcon },
	sources: [
		{ id: "brief", Icon: FileTextIcon },
		{ id: "spec", Icon: FilePlusIcon },
		{ id: "assets", Icon: FileIcon },
		{ id: "repo", Icon: GitHubLogoIcon },
	],
};

// ── Bento feature cards ──
interface SolutionsFeature {
	name: string;
	description: string;
	className: string;
	background: ReactNode;
}

const solutionsFeatures: SolutionsFeature[] = [
	{
		name: "Our Service Portfolio",
		description:
			"From custom software and cloud infrastructure to AI, cybersecurity, and IT consulting — an integrated suite of technology services.",
		className: "col-span-1",
		background: <ServicesCardContent items={serviceItems} />,
	},
	{
		name: "Strategy to Execution",
		description:
			"We translate technical vision into operational reality — bridging the gap between planning and measurable business outcomes.",
		className: "col-span-1",
		background: <ConvertingCardContent icons={convertingIcons} />,
	},
];

const faqItems = [
	{
		question: "What technologies do you work with?",
		answer:
			"We work across the modern stack — React, Next.js, Node.js, Python, Go, AWS, Azure, GCP, Kubernetes, and more. We choose the right tools for each project based on requirements, scalability needs, and long-term maintainability.",
	},
	{
		question: "How does a typical engagement start?",
		answer:
			"Every project begins with a discovery phase where we conduct stakeholder interviews, technical audits, and requirements gathering. From there we produce a detailed proposal with architecture, timeline, and cost breakdown before any development begins.",
	},
	{
		question: "Do you offer ongoing support after launch?",
		answer:
			"Yes. We provide dedicated support and maintenance plans that include monitoring, bug fixes, security patches, and feature enhancements. Our SLAs are tailored to your business needs.",
	},
	{
		question: "Can you work with our existing team?",
		answer:
			"Absolutely. We frequently embed engineers alongside in-house teams, provide technical leadership, or handle specific workstreams. We adapt our engagement model to fit your organization.",
	},
	{
		question: "What is your project management methodology?",
		answer:
			"We follow agile methodology with two-week sprints, daily standups, and continuous delivery. You get full visibility through shared boards, regular demos, and transparent reporting.",
	},
	{
		question: "How do you handle data security and compliance?",
		answer:
			"Security is built into every stage of our process. We follow OWASP best practices, conduct regular code reviews, and can support compliance requirements including GDPR, SOC 2, and regional UAE data regulations.",
	},
];

const stats = [
	{ value: "50+", label: "Engineers" },
	{ value: "5+", label: "Years of Experience" },
];

const differentiators = [
	{
		title: "Scalable Solutions",
		description:
			"Architectures designed to grow with your business, from startup MVPs to enterprise platforms.",
	},
	{
		title: "Regional Expertise",
		description:
			"Deep understanding of the UAE and GCC market with on-the-ground teams in Dubai.",
	},
	{
		title: "End-to-End Delivery",
		description:
			"From discovery and design to deployment and support — a single partner for the full lifecycle.",
	},
];

function SolutionsPage() {
	const posts = Route.useLoaderData();
	const { lenis, scrollTo } = useLenis();

	useEffect(() => {
		lenis.current?.scrollTo(0, { immediate: true });
	});

	const heroRef = useRef<HTMLDivElement>(null);
	const logoRef = useRef<HTMLDivElement>(null);
	const badgeRef = useRef<HTMLDivElement>(null);
	const subtitleRef = useRef<HTMLParagraphElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const actionsRef = useRef<HTMLDivElement>(null);
	const [fontsLoaded, setFontsLoaded] = useState(() => {
		if (typeof document === "undefined") return false;
		if (!("fonts" in document)) return true;
		return document.fonts.status === "loaded";
	});

	useEffect(() => {
		if (fontsLoaded || typeof document === "undefined") return;
		if (!("fonts" in document)) {
			setFontsLoaded(true);
			return;
		}
		let isActive = true;
		document.fonts.ready.then(() => {
			if (isActive) setFontsLoaded(true);
		});

		const timeout = setTimeout(() => {
			if (isActive) setFontsLoaded(true);
		}, 2000);

		return () => {
			isActive = false;
			clearTimeout(timeout);
		};
	}, [fontsLoaded]);

	useGSAP(
		(context) => {
			if (!fontsLoaded) return;
			const hero = heroRef.current;
			if (!hero) return;

			gsap.set(
				[logoRef.current, badgeRef.current, subtitleRef.current, descriptionRef.current, ...(actionsRef.current ? Array.from(actionsRef.current.children) : [])],
				{ autoAlpha: 1 },
			);

			const splits: SplitText[] = [];
			context.add(() => {
				splits.forEach((split) => split.revert());
			});

			const subtitleSplit = subtitleRef.current
				? new SplitText(subtitleRef.current, { type: "lines" })
				: null;
			const descriptionSplit = descriptionRef.current
				? new SplitText(descriptionRef.current, { type: "lines" })
				: null;

			if (subtitleSplit) splits.push(subtitleSplit);
			if (descriptionSplit) splits.push(descriptionSplit);

			const timeline = gsap.timeline({
				defaults: { ease: premiumEase },
			});

			if (logoRef.current) {
				timeline.from(logoRef.current, {
					yPercent: 30,
					autoAlpha: 0,
					filter: "blur(16px)",
					duration: 0.9,
					ease: premiumEase,
				});
			}

			if (badgeRef.current) {
				timeline.from(badgeRef.current, {
					yPercent: 30,
					autoAlpha: 0,
					filter: "blur(16px)",
					duration: 0.9,
					ease: premiumEase,
				}, "-=0.6");
			}

			if (subtitleSplit) {
				timeline.from(subtitleSplit.lines, {
					yPercent: 30,
					autoAlpha: 0,
					filter: "blur(16px)",
					stagger: 0.15,
					duration: 0.9,
					ease: premiumEase,
				}, "-=0.6");
			}

			if (descriptionSplit) {
				timeline.from(descriptionSplit.lines, {
					yPercent: 30,
					autoAlpha: 0,
					filter: "blur(16px)",
					stagger: 0.15,
					duration: 0.9,
					ease: premiumEase,
				}, "-=0.6");
			}

			if (actionsRef.current) {
				const buttons = Array.from(actionsRef.current.children) as HTMLElement[];
				timeline.fromTo(
					buttons,
					{ yPercent: 30, autoAlpha: 0, filter: "blur(16px)" },
					{
						yPercent: 0,
						autoAlpha: 1,
						filter: "blur(0px)",
						clearProps: "filter",
						stagger: 0.15,
						duration: 0.9,
						ease: premiumEase,
					},
					"-=0.6",
				);
			}
		},
		{ scope: heroRef, dependencies: [fontsLoaded] },
	);

	return (
		<main className="mx-auto flex w-full flex-col items-center justify-start">
			{/* Hero */}
			<section ref={heroRef} className="relative flex h-svh w-full flex-col items-center justify-center gap-4 px-4 md:px-16">
				<div className="relative z-10 flex flex-col items-center gap-3">
					<div ref={logoRef} className="relative h-10 md:h-14 mb-8">
						<img
							src="/provision-solutions-logo.png"
							alt="Pro Vision Solutions"
							className="h-full object-contain"
						/>
						<div
							className="pointer-events-none absolute inset-0 animate-shiny-text bg-linear-to-r from-transparent via-white/60 to-transparent bg-no-repeat bg-position-[0_0] bg-size-[200px_100%]"
							style={{
								"--shiny-width": "200px",
								WebkitMaskImage: "url(/provision-solutions-logo.png)",
								WebkitMaskSize: "contain",
								WebkitMaskRepeat: "no-repeat",
								WebkitMaskPosition: "center",
								maskImage: "url(/provision-solutions-logo.png)",
								maskSize: "contain",
								maskRepeat: "no-repeat",
								maskPosition: "center",
							} as React.CSSProperties}
						/>
					</div>
					<div ref={badgeRef} className="w-fit">
						<ShinyBadge>
							<CodeIcon aria-hidden="true" className="size-3.5" />
							Technology &amp; Digital Solutions
						</ShinyBadge>
					</div>
					<p
	
						ref={subtitleRef}
						className="text-lg md:text-xl text-center text-foreground/70 font-medium text-balance leading-relaxed max-w-md"
					>
						Technology That Drives Business Forward
					</p>
					<p
	
						ref={descriptionRef}
						className="text-base text-center text-foreground/50 font-medium text-balance leading-relaxed max-w-xl"
					>
						{PAGE_DESCRIPTION}
					</p>
				</div>
				<div ref={actionsRef} className="relative z-10 flex items-center gap-2">
					<Button variant="default" size="md" onClick={() => scrollTo("#services")}>
						Our Services
					</Button>
					<Button variant="secondary" size="md" onClick={() => scrollTo("#contact")}>
						Get in Touch
					</Button>
				</div>
				<div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
					<Background
						colors={{
							dark: {
								shadow: [0.02, 0.04, 0.03],
								highlight: [0.03, 0.09, 0.05],
							},
							light: {
								shadow: [0.96, 0.99, 0.96],
								highlight: [0.78, 0.92, 0.80],
							},
						}}
					/>
				</div>
			</section>

			{/* Services — bento grid matching homepage pattern */}
			<Section
				id="services"
				badgeText="Our Services"
				badgeIcon={
					<StarIcon aria-hidden="true" className="size-3.5" />
				}
				title="Comprehensive technology solutions"
				description="Our integrated approach means you get access to a full spectrum of technology services, backed by the reputation and resources of Pro Vision Group."
				className="grid grid-cols-1 md:grid-cols-2 gap-4"
			>
				{solutionsFeatures.map((feature) => (
					<ServiceCard
						key={feature.name}
						name={feature.name}
						description={feature.description}
						className={feature.className}
						background={feature.background}
					/>
				))}
			</Section>

			{/* About / Why Us */}
			<Section
				id="about"
				badgeText="Why Us"
				badgeIcon={
					<LightningBoltIcon
						aria-hidden="true"
						className="size-3.5"
					/>
				}
				title="Built for the Region, Engineered for Scale"
				description="Pro Vision Solutions is the technology arm of Pro Vision Group — delivering enterprise-grade digital products with agile methodology and regional expertise."
			>
				<div className="flex flex-col gap-8">
					{/* Stats */}
					<div className="grid grid-cols-2 gap-4">
						{stats.map((stat) => (
							<div
								key={stat.label}
								className="flex flex-col items-center gap-1 rounded-lg border border-border bg-card p-6 text-center"
							>
								<span className="text-2xl md:text-3xl font-semibold text-foreground">
									{stat.value}
								</span>
								<span className="text-sm text-foreground/50">
									{stat.label}
								</span>
							</div>
						))}
					</div>

					{/* Differentiators */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{differentiators.map((item) => (
							<div
								key={item.title}
								className="flex flex-col gap-2 rounded-lg border border-border bg-card p-6"
							>
								<h3 className="text-base font-medium text-foreground">
									{item.title}
								</h3>
								<p className="text-sm text-foreground/60 leading-relaxed">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</Section>

			{/* Approach */}
			<Section
				id="approach"
				badgeText="How We Work"
				badgeIcon={
					<MixIcon aria-hidden="true" className="size-3.5" />
				}
				title="Our Approach"
				description="We combine proven methodologies with modern tooling to deliver predictable, high-quality outcomes."
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{[
						{
							step: "01",
							title: "Discovery & Strategy",
							description:
								"We start with deep stakeholder interviews and technical audits to define scope, risks, and success metrics.",
						},
						{
							step: "02",
							title: "Design & Architecture",
							description:
								"Solution architects map infrastructure, data flows, and interfaces before a single line of code is written.",
						},
						{
							step: "03",
							title: "Agile Development",
							description:
								"Two-week sprints with continuous integration, automated testing, and transparent progress reporting.",
						},
						{
							step: "04",
							title: "Launch & Support",
							description:
								"Zero-downtime deployments, monitoring, and dedicated support teams to keep systems running smoothly.",
						},
					].map((item) => (
						<div
							key={item.step}
							className="flex gap-4 rounded-lg border border-border bg-card p-6"
						>
							<span className="text-2xl font-semibold text-foreground/20">
								{item.step}
							</span>
							<div className="flex flex-col gap-1">
								<h3 className="text-base font-medium text-foreground">
									{item.title}
								</h3>
								<p className="text-sm text-foreground/60 leading-relaxed">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</Section>

			{/* Blog */}
			<Blog posts={posts} />

			{/* FAQ */}
			<Section
				id="faq"
				badgeText="FAQ"
				badgeIcon={
					<QuestionMarkCircledIcon
						aria-hidden="true"
						className="size-3.5"
					/>
				}
				title="Frequently asked questions"
				description="Common questions about working with Pro Vision Solutions."
				className="flex flex-col gap-6"
			>
				<Accordion variant="card" type="single" size="md">
					{faqItems.map((item, index) => (
						<AccordionItem
							key={`faq-${index}`}
							value={`faq-${index}`}
						>
							<AccordionTrigger>
								{item.question}
							</AccordionTrigger>
							<AccordionContent>
								{item.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</Section>

			{/* CTA */}
			<section className="flex w-full flex-col items-center gap-4 px-4 py-16 md:px-8 text-center">
				<h2 className="text-2xl md:text-3xl font-medium text-foreground text-balance">
					Ready to Transform Your Business?
				</h2>
				<p className="text-base text-foreground/60 text-balance max-w-lg">
					Let's discuss how Pro Vision Solutions can help you build,
					scale, and secure your digital future.
				</p>
				<Button variant="default" size="lg" asChild>
					<Link to="/" hash="contact">
						Contact Us
					</Link>
				</Button>
			</section>

			<Footer />
		</main>
	);
}
