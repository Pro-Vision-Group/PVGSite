import { createFileRoute } from "@tanstack/react-router";
import { getAllPostsMeta } from "@/sections/blog/_server/posts";
import Blog from "@/sections/blog/blog";
import Contact from "@/sections/contact/contact";
import Footer from "@/sections/footer/footer";
import Hero from "@/sections/hero/hero";
import Services from "@/sections/services/services";
// import Showcase from "@/sections/showcase/showcase";
import Testimonials from "@/sections/testimonials/testimonials";
import Works from "@/sections/works/works";

export const Route = createFileRoute("/")({
	loader: () => getAllPostsMeta(),
	component: App,
});

function App() {
	const posts = Route.useLoaderData();
	return (
		<main className="mx-auto flex flex-col items-center justify-start w-full w-full">
			<Hero />
			<Services />
			<Works />
			{/* <Showcase /> */}
			<Testimonials />
			{/* <FAQ /> */}
			<Blog posts={posts} />
			<Contact />
			<Footer />
		</main>
	);
}
