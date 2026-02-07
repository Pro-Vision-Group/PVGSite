import { ArrowRightIcon, ReaderIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import BlogCard from "@/sections/blog/_components/blog-card";
import type { PostMeta } from "@/sections/blog/_server/posts";

const MAX_DISPLAY = 4;

type BlogSectionProps = {
	posts: PostMeta[];
};

export default function Blog({ posts }: BlogSectionProps) {
	const hasPosts = posts && posts.length > 0;
	const displayedPosts = posts.slice(0, MAX_DISPLAY);
	const hasMore = posts.length > MAX_DISPLAY;

	return (
		<Section
			id="blog"
			title="Insights & updates"
			description="Industry perspectives, project highlights, and practical insights from across our portfolio of companies."
			className="grid grid-cols-1 gap-4 md:grid-cols-2"
			badgeText="Latest posts"
			badgeIcon={<ReaderIcon aria-hidden="true" className="size-3.5" />}
		>
			{hasPosts ? (
				<>
					{displayedPosts.map((post) => (
						<BlogCard key={post.slug} meta={post} />
					))}
					{hasMore && (
						<div className="md:col-span-2 flex justify-center pt-4">
							<Button variant="secondary" size="md" asChild>
								<Link to="/blog">
									View all blogs
									<ArrowRightIcon className="size-3.5" />
								</Link>
							</Button>
						</div>
					)}
				</>
			) : (
				<p className="text-sm text-foreground/60">
					No posts yet — check back soon.
				</p>
			)}
		</Section>
	);
}
