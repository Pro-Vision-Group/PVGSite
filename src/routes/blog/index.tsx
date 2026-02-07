import { ReaderIcon } from "@radix-ui/react-icons";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ShinyBadge } from "@/components/ui/shiny-badge";
import { absoluteUrl } from "@/lib/seo";
import { getAllPostsMeta, type PostMeta } from "@/sections/blog/_server/posts";
import Footer from "@/sections/footer/footer";

const PAGE_TITLE = "Blog — Pro Vision Group";
const PAGE_DESCRIPTION =
	"Industry perspectives, project highlights, and practical insights from across our portfolio of companies.";

export const Route = createFileRoute("/blog/")({
	loader: () => getAllPostsMeta(),
	head: () => {
		const canonical = absoluteUrl("/blog");
		return {
			meta: [
				{ title: PAGE_TITLE },
				{ name: "description", content: PAGE_DESCRIPTION },
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
	component: BlogPage,
});

function BlogPage() {
	const posts = Route.useLoaderData();
	const hasPosts = posts && posts.length > 0;

	return (
		<main className="mx-auto flex w-full flex-col items-center justify-start">
			{/* Header */}
			<section className="flex w-full flex-col items-center gap-4 px-4 pt-32 pb-16 md:px-8 text-center">
				<ShinyBadge>
					<ReaderIcon aria-hidden="true" className="size-3.5" />
					Insights & Updates
				</ShinyBadge>
				<h1 className="text-3xl md:text-4xl font-medium text-foreground text-balance">
					Our Blog
				</h1>
				<p className="text-base text-foreground/50 text-balance max-w-xl leading-relaxed">
					{PAGE_DESCRIPTION}
				</p>
			</section>

			{/* Posts grid */}
			<section className="w-full max-w-5xl px-4 pb-16 md:px-8">
				{hasPosts ? (
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						{posts.map((post) => (
							<BlogIndexCard key={post.slug} meta={post} />
						))}
					</div>
				) : (
					<p className="text-sm text-foreground/60 text-center">
						No posts yet — check back soon.
					</p>
				)}
			</section>

			{/* CTA */}
			<section className="flex w-full flex-col items-center gap-4 px-4 py-16 md:px-8 text-center">
				<h2 className="text-2xl md:text-3xl font-medium text-foreground text-balance">
					Have a project in mind?
				</h2>
				<p className="text-base text-foreground/60 text-balance max-w-lg">
					We'd love to hear about it. Get in touch and let's explore how
					we can work together.
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

function BlogIndexCard({ meta }: { meta: PostMeta }) {
	const formattedDate = formatDate(meta.date);
	const tags =
		(meta.tags ?? []).filter(
			(tag: string | null | undefined): tag is string =>
				typeof tag === "string" && tag.trim().length > 0,
		) ?? [];

	return (
		<Link
			to="/blog/$slug"
			params={{ slug: meta.slug }}
			className="block h-full rounded-lg transition-shadow duration-100 ease-out-quad focus-visible:ring-1 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-ring-offset/50 focus-visible:outline-none"
			aria-label={`Read article: ${meta.title}`}
		>
			<Card className="flex h-full flex-col justify-between gap-4">
				<CardHeader className="space-y-2">
					<div className="flex items-center justify-between text-xs text-foreground/45">
						<span>{formattedDate}</span>
						<span>{meta.readingTime}</span>
					</div>
					<CardTitle className="text-balance leading-normal">
						{meta.title}
					</CardTitle>
					{meta.excerpt ? (
						<CardDescription>{meta.excerpt}</CardDescription>
					) : null}
				</CardHeader>
				{tags.length ? (
					<CardContent className="pt-0">
						<div className="flex flex-wrap gap-2">
							{tags.map((tag) => (
								<Badge
									key={tag}
									variant="secondary"
									size="sm"
									className="bg-card-elevated hover:bg-card-elevated"
								>
									{tag}
								</Badge>
							))}
						</div>
					</CardContent>
				) : null}
			</Card>
		</Link>
	);
}

function formatDate(date: string) {
	if (!date) return "";
	const parsed = new Date(date);
	if (Number.isNaN(parsed.getTime())) return "";
	return new Intl.DateTimeFormat("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	}).format(parsed);
}
